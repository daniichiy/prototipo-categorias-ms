"""
Seed script: gera `src/data/categories.json` a partir de:
  1. data/relacionamento-categorias.xlsx (sheet 'Cartas de Serviço') — taxonomia oficial
     (categoria, subcategoria, título da carta). Fonte de verdade do mapeamento.
  2. data/Todas as cartas.xlsx (sheet 'Proposta 2') — lookup de URL, órgão e sigla por
     título (a planilha de taxonomia não tem essas colunas).
  3. data/subcategoria-rules.json — metadados por categoria (id slug + ícone Material).

Match por título normalizado (sem acentos, lowercase). Quando não há match exato,
tenta fuzzy match (difflib) com cutoff 0.85.

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
TAXONOMY_PATH = ROOT / "data" / "relacionamento-categorias.xlsx"
LEGACY_PATH = ROOT / "data" / "Todas as cartas.xlsx"
META_PATH = ROOT / "data" / "subcategoria-rules.json"
OUTPUT_PATH = ROOT / "src" / "data" / "categories.json"

TAXONOMY_SHEET = "Cartas de Serviço"
LEGACY_SHEET = "Proposta 2"

FUZZY_CUTOFF = 0.85


def normalize(text: str | None) -> str:
    if not text:
        return ""
    text = unicodedata.normalize("NFKD", str(text)).encode("ascii", "ignore").decode()
    return re.sub(r"\s+", " ", text).strip().lower()


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "item"


def load_taxonomy() -> list[tuple[str, str, str]]:
    """Read the new spreadsheet. Returns [(categoria, subcategoria, titulo), ...]
    with cascade-fill on empty cells (Excel-merged style)."""
    wb = openpyxl.load_workbook(TAXONOMY_PATH, data_only=True, read_only=True)
    ws = wb[TAXONOMY_SHEET]
    rows: list[tuple[str, str, str]] = []
    current_cat, current_sub = None, None
    for row in ws.iter_rows(min_row=4, values_only=True):
        cat, sub, titulo = row
        if cat:
            current_cat = str(cat).strip()
        if sub:
            current_sub = str(sub).strip()
        if titulo and current_cat and current_sub:
            rows.append((current_cat, current_sub, str(titulo).strip()))
    return rows


def load_legacy_lookup() -> dict[str, dict[str, str]]:
    """Read old spreadsheet to build {normalized_title: {sigla, url, orgao}}.
    Duplicates: same title across rows resolves to the same service — keep last."""
    wb = openpyxl.load_workbook(LEGACY_PATH, data_only=True, read_only=True)
    ws = wb[LEGACY_SHEET]
    lookup: dict[str, dict[str, str]] = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        sigla, titulo, _categoria, url, orgao = row
        if not titulo:
            continue
        lookup[normalize(titulo)] = {
            "sigla": str(sigla).strip() if sigla else "",
            "url": str(url).strip() if url else "",
            "orgao": str(orgao).strip() if orgao else "",
        }
    return lookup


def fuzzy_lookup(
    title: str,
    lookup: dict[str, dict[str, str]],
    keys_list: list[str],
) -> dict[str, str] | None:
    """Try fuzzy match when exact lookup fails."""
    matches = difflib.get_close_matches(normalize(title), keys_list, n=1, cutoff=FUZZY_CUTOFF)
    if matches:
        return lookup[matches[0]]
    return None


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print(f"[seed] Lendo taxonomia: {TAXONOMY_PATH.relative_to(ROOT)} (sheet: {TAXONOMY_SHEET})")
    records = load_taxonomy()
    print(f"[seed]   {len(records)} cartas com (categoria, subcategoria, título)")

    print(f"[seed] Lendo lookup de URLs: {LEGACY_PATH.relative_to(ROOT)} (sheet: {LEGACY_SHEET})")
    legacy = load_legacy_lookup()
    legacy_keys = list(legacy.keys())
    print(f"[seed]   {len(legacy)} títulos no lookup")

    print(f"[seed] Lendo metadados de categoria: {META_PATH.relative_to(ROOT)}")
    meta = json.loads(META_PATH.read_text(encoding="utf-8"))

    # category_name -> list[(subcategoria, card_dict)]
    grouped: dict[str, list[tuple[str, dict]]] = defaultdict(list)
    exact_hits = 0
    fuzzy_hits = 0
    no_match = 0
    no_match_titles: list[str] = []

    for cat_name, sub_name, titulo in records:
        norm = normalize(titulo)
        info = legacy.get(norm)
        if info is not None:
            exact_hits += 1
        else:
            info = fuzzy_lookup(titulo, legacy, legacy_keys)
            if info is not None:
                fuzzy_hits += 1
            else:
                no_match += 1
                no_match_titles.append(titulo)
                info = {"sigla": "", "url": "", "orgao": ""}

        cat_id = meta.get(cat_name, {}).get("id") or slugify(cat_name)
        sub_id = slugify(sub_name)
        card_id = f"{cat_id}--{sub_id}--{slugify(titulo)[:80]}"

        grouped[cat_name].append((sub_name, {
            "id": card_id,
            "title": titulo,
            "url": info["url"],
            "agency": info["orgao"],
            "agencyCode": info["sigla"],
        }))

    # Build output in the order defined by `subcategoria-rules.json`
    output = []
    for cat_name, cat_meta in meta.items():
        items = grouped.get(cat_name, [])
        if not items:
            continue

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
    print(f"[seed] URL match: {exact_hits} exato + {fuzzy_hits} fuzzy = {exact_hits + fuzzy_hits} "
          f"({100 * (exact_hits + fuzzy_hits) // max(total_cards, 1)}%)")
    if no_match:
        print(f"[seed] {no_match} carta(s) sem URL (link vazio):")
        for t in no_match_titles:
            print(f"        - {t[:100]}")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[seed] Gravado: {OUTPUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
