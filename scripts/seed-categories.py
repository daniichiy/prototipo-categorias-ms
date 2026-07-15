"""
Seed script: gera `src/data/categories.json` a partir de:
  1. data/Categorias-ajustada-pos-sugestoes-sites-09-07-26-PROPOSTA2-v4.xlsx
     (sheet 'Categorias e Subcategorias') — taxonomia oficial (categoria,
     subcategoria, título da carta). Fonte de verdade do mapeamento.
  2. data/Todas as cartas.xlsx (sheets 'Proposta 2' + 'servicos_ativos (1)') — lookup de
     URL, órgão e sigla por título (a planilha de taxonomia não tem essas colunas).
  3. data/subcategoria-rules.json — metadados por categoria (id slug + ícone Material).
  4. data/url-overrides.json — {título na v4: url}, preenchido à mão para as cartas que a
     v4 renomeou a ponto de não casar com nenhum título do banco. Tem prioridade sobre o
     match automático; órgão e sigla saem do banco pela url.

Match por título normalizado (sem acentos, lowercase). Quando não há match exato,
tenta fuzzy match (difflib) com cutoff 0.85.

Categorias saem em ordem alfabética; subcategorias mantêm a ordem da planilha.

Run:  npm run seed     (ou:  python scripts/seed-categories.py)
"""
from __future__ import annotations

import difflib
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
TAXONOMY_PATH = (
    ROOT / "data" / "Categorias-ajustada-pos-sugestoes-sites-09-07-26-PROPOSTA2-v4.xlsx"
)
LEGACY_PATH = ROOT / "data" / "Todas as cartas.xlsx"
META_PATH = ROOT / "data" / "subcategoria-rules.json"
OVERRIDES_PATH = ROOT / "data" / "url-overrides.json"
OUTPUT_PATH = ROOT / "src" / "data" / "categories.json"

TAXONOMY_SHEET = "Categorias e Subcategorias"
# Ordem importa: a primeira aba que tiver o título vence.
LEGACY_SHEETS = ("Proposta 2", "servicos_ativos (1)")

FUZZY_CUTOFF = 0.85
# Em títulos curtos, 0.85 aceita match errado (ex.: "Solicitar consulta" x "Solicitar
# teleconsulta" = 0.90, serviços diferentes). Abaixo de SHORT_TITLE_LEN, exigir quase igual.
SHORT_TITLE_LEN = 30
SHORT_TITLE_CUTOFF = 0.95


def normalize(text: str | None) -> str:
    if not text:
        return ""
    text = unicodedata.normalize("NFKD", str(text)).encode("ascii", "ignore").decode()
    return re.sub(r"\s+", " ", text).strip().lower()


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "item"


def clean(text: object) -> str:
    """Collapse runs of whitespace — a few células da planilha têm espaço duplo."""
    return re.sub(r"\s+", " ", str(text)).strip()


def load_taxonomy() -> list[tuple[str, str, str]]:
    """Read the new spreadsheet. Returns [(categoria, subcategoria, titulo), ...]
    with cascade-fill on empty cells (Excel-merged style)."""
    wb = openpyxl.load_workbook(TAXONOMY_PATH, data_only=True, read_only=True)
    ws = wb[TAXONOMY_SHEET]
    rows: list[tuple[str, str, str]] = []
    current_cat, current_sub = None, None
    for row in ws.iter_rows(min_row=4, values_only=True):
        cat, sub, titulo = row[0], row[1], row[2]
        if cat:
            current_cat = clean(cat)
        if sub:
            current_sub = clean(sub)
        if titulo and current_cat and current_sub:
            rows.append((current_cat, current_sub, clean(titulo)))
    return rows


def load_legacy_lookup() -> tuple[dict[str, dict[str, str]], dict[str, dict[str, str]]]:
    """Read old spreadsheet and index it two ways: {normalized_title: {sigla, url, orgao}}
    e {url: {sigla, orgao}} — o índice por url atende as cartas de `url-overrides.json`,
    que foram renomeadas na v4 mas continuam apontando para a página original.

    Duplicates: same title across rows resolves to the same service — the first
    sheet in LEGACY_SHEETS wins."""
    wb = openpyxl.load_workbook(LEGACY_PATH, data_only=True, read_only=True)
    by_title: dict[str, dict[str, str]] = {}
    by_url: dict[str, dict[str, str]] = {}
    for sheet_name in LEGACY_SHEETS:
        if sheet_name not in wb.sheetnames:
            continue
        for row in wb[sheet_name].iter_rows(min_row=2, values_only=True):
            sigla, titulo, _categoria, url, orgao = row[:5]
            if not titulo:
                continue
            entry = {
                "sigla": clean(sigla) if sigla else "",
                "url": clean(url) if url else "",
                "orgao": clean(orgao) if orgao else "",
            }
            key = normalize(titulo)
            if key not in by_title or not by_title[key]["url"]:
                by_title[key] = entry
            if entry["url"] and entry["url"] not in by_url:
                by_url[entry["url"]] = entry
    return by_title, by_url


def load_url_overrides() -> dict[str, dict[str, str]]:
    """Read {título na v4: {banco, url}}, keyed by normalized title. `banco` é o título
    equivalente em `Todas as cartas.xlsx`, usado para achar órgão e sigla."""
    if not OVERRIDES_PATH.exists():
        return {}
    raw = json.loads(OVERRIDES_PATH.read_text(encoding="utf-8"))
    return {
        normalize(titulo): {"url": clean(entry["url"]), "banco": clean(entry.get("banco", ""))}
        for titulo, entry in raw.items()
        if entry.get("url")
    }


def fuzzy_lookup(
    title: str,
    lookup: dict[str, dict[str, str]],
    keys_list: list[str],
) -> dict[str, str] | None:
    """Try fuzzy match when exact lookup fails."""
    norm = normalize(title)
    cutoff = SHORT_TITLE_CUTOFF if len(norm) < SHORT_TITLE_LEN else FUZZY_CUTOFF
    matches = difflib.get_close_matches(norm, keys_list, n=1, cutoff=cutoff)
    if matches:
        return lookup[matches[0]]
    return None


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print(f"[seed] Lendo taxonomia: {TAXONOMY_PATH.relative_to(ROOT)} (sheet: {TAXONOMY_SHEET})")
    records = load_taxonomy()
    print(f"[seed]   {len(records)} cartas com (categoria, subcategoria, título)")

    print(f"[seed] Lendo lookup de URLs: {LEGACY_PATH.relative_to(ROOT)} "
          f"(sheets: {', '.join(LEGACY_SHEETS)})")
    legacy, legacy_by_url = load_legacy_lookup()
    legacy_keys = list(legacy.keys())
    print(f"[seed]   {len(legacy)} títulos no lookup")

    print(f"[seed] Lendo metadados de categoria: {META_PATH.relative_to(ROOT)}")
    meta = json.loads(META_PATH.read_text(encoding="utf-8"))

    print(f"[seed] Lendo overrides de URL: {OVERRIDES_PATH.relative_to(ROOT)}")
    overrides = load_url_overrides()
    print(f"[seed]   {len(overrides)} url(s) definida(s) à mão")

    # category_name -> list[(subcategoria, card_dict)]
    grouped: dict[str, list[tuple[str, dict]]] = defaultdict(list)
    exact_hits = 0
    fuzzy_hits = 0
    override_hits = 0
    no_match = 0
    no_url: list[tuple[str, str, str]] = []
    seen_ids: dict[str, int] = {}

    unknown_cats = sorted({c for c, _, _ in records} - set(meta))
    if unknown_cats:
        print(f"[seed] AVISO: categoria(s) fora de {META_PATH.name} "
              f"(id/ícone gerados por slug): {', '.join(unknown_cats)}")

    for cat_name, sub_name, titulo in records:
        norm = normalize(titulo)
        override = overrides.get(norm)
        if override:
            # A url do override manda; órgão e sigla saem do banco — pela url quando ela já
            # está lá, senão pelo título equivalente informado em `banco`.
            from_banco = (
                legacy_by_url.get(override["url"])
                or legacy.get(normalize(override["banco"]))
                or {}
            )
            override_hits += 1
            info = {
                "sigla": from_banco.get("sigla", ""),
                "url": override["url"],
                "orgao": from_banco.get("orgao", ""),
            }
        elif (info := legacy.get(norm)) is not None:
            exact_hits += 1
        else:
            info = fuzzy_lookup(titulo, legacy, legacy_keys)
            if info is not None:
                fuzzy_hits += 1
            else:
                no_match += 1
                info = {"sigla": "", "url": "", "orgao": ""}

        # Sem match na planilha de origem — ou com match, mas com a coluna url vazia.
        if not info["url"]:
            no_url.append((cat_name, sub_name, titulo))

        cat_id = meta.get(cat_name, {}).get("id") or slugify(cat_name)
        sub_id = slugify(sub_name)
        card_id = f"{cat_id}--{sub_id}--{slugify(titulo)[:80]}"
        # Mesmo título repetido dentro da subcategoria: sufixo para manter o id único.
        seen_ids[card_id] = seen_ids.get(card_id, 0) + 1
        if seen_ids[card_id] > 1:
            card_id = f"{card_id}-{seen_ids[card_id]}"

        grouped[cat_name].append((sub_name, {
            "id": card_id,
            "title": titulo,
            "url": info["url"],
            "agency": info["orgao"],
            "agencyCode": info["sigla"],
        }))

    # Categorias em ordem alfabética (ignorando acentos); subcategorias na ordem da planilha.
    output = []
    for cat_name in sorted(grouped, key=normalize):
        items = grouped[cat_name]
        cat_meta = meta.get(cat_name) or {"id": slugify(cat_name), "icon": "category"}

        # Group cards by subcategoria preserving first-encounter order
        sub_order: list[str] = []
        sub_cards: dict[str, list[dict]] = defaultdict(list)
        for sub_name, card in items:
            if sub_name not in sub_cards:
                sub_order.append(sub_name)
            sub_cards[sub_name].append(card)

        subcategories_out = []
        for sub_name in sub_order:
            cards = sorted(sub_cards[sub_name], key=lambda c: normalize(c["title"]))
            subcategories_out.append({
                "id": slugify(sub_name),
                "name": sub_name,
                "count": len(cards),
                "cards": cards,
            })

        total = sum(s["count"] for s in subcategories_out)
        output.append({
            "id": cat_meta["id"],
            "name": cat_name,
            "icon": cat_meta["icon"],
            "count": total,
            "subcategories": subcategories_out,
        })

    # Report
    print()
    print("[seed] === Resultado ===")
    for cat in output:
        print(f"  {cat['count']:>4}  {cat['name']}")
        for sub in cat["subcategories"]:
            print(f"        {sub['count']:>4}  +- {sub['name']}")
    total_cards = sum(c["count"] for c in output)
    print()
    print(f"[seed] Total: {total_cards} cartas")
    matched = exact_hits + fuzzy_hits + override_hits
    print(f"[seed] Título match: {exact_hits} exato + {fuzzy_hits} fuzzy + {override_hits} override "
          f"= {matched} ({100 * matched // max(total_cards, 1)}%); {no_match} sem match")

    unused = sorted(set(overrides) - {normalize(t) for _, _, t in records})
    if unused:
        print(f"[seed] AVISO: {len(unused)} override(s) sem carta correspondente na planilha "
              f"(título mudou ou está com erro de digitação?):")
        for key in unused:
            print(f"        - {key}")
    if no_url:
        print()
        print(f"[seed] {len(no_url)} carta(s) SEM URL (link vazio):")
        for cat_name, sub_name, titulo in no_url:
            print(f"        - [{cat_name} / {sub_name}] {titulo}")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[seed] Gravado: {OUTPUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
