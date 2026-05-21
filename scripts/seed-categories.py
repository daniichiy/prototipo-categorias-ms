"""
Seed script: reads the Excel sheet `Proposta 2` of `data/Todas as cartas.xlsx`,
applies the heuristic subcategory classifier from `data/subcategoria-rules.json`,
and writes the structured `src/data/categories.json` consumed by the React app.

Run:  npm run seed     (or directly:  python scripts/seed-categories.py)
"""
from __future__ import annotations

import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
EXCEL_PATH = ROOT / "data" / "Todas as cartas.xlsx"
RULES_PATH = ROOT / "data" / "subcategoria-rules.json"
OUTPUT_PATH = ROOT / "src" / "data" / "categories.json"
SHEET_NAME = "Proposta 2"


def slugify(text: str) -> str:
    """Normalize to a URL-friendly id."""
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text).strip("-").lower()
    return text or "item"


def normalize(text: str) -> str:
    """Lowercase + strip accents for keyword matching."""
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return text.lower().strip()


def classify(title: str, agency_code: str, rules_for_cat: list[dict]) -> dict:
    """Pick the first matching subcategoria for a card.

    Priority:
      1. Exact agency match (case-insensitive)
      2. Keyword found in normalized title
    Returns the rule dict or None.
    """
    norm_title = normalize(title)
    norm_agency = normalize(agency_code or "")

    # Agency match first
    for rule in rules_for_cat:
        for ag in rule.get("agencies", []):
            if normalize(ag) == norm_agency:
                return rule

    # Keyword in title
    for rule in rules_for_cat:
        for kw in rule.get("keywords", []):
            if normalize(kw) in norm_title:
                return rule

    return None


def main() -> None:
    print(f"[seed] Reading rules from {RULES_PATH.relative_to(ROOT)}")
    rules = json.loads(RULES_PATH.read_text(encoding="utf-8"))

    print(f"[seed] Reading Excel: {EXCEL_PATH.relative_to(ROOT)} (sheet: {SHEET_NAME})")
    wb = openpyxl.load_workbook(EXCEL_PATH, data_only=True, read_only=True)
    ws = wb[SHEET_NAME]

    # Iterate rows. Header: siglaorgao, titulo_servico, categoria, url, nome_orgao
    rows = list(ws.iter_rows(min_row=2, values_only=True))
    print(f"[seed] {len(rows)} cards in spreadsheet")

    # Group: category_name -> subcategoria_id -> [cards]
    grouped: dict[str, dict[str, list[dict]]] = defaultdict(lambda: defaultdict(list))
    subcat_meta: dict[str, dict[str, dict]] = defaultdict(dict)
    unmatched_count = 0

    for sigla, titulo, categoria, url, orgao in rows:
        if not categoria or not titulo:
            continue
        cat_name = str(categoria).strip()
        cat_rules = rules.get(cat_name)
        if cat_rules is None:
            print(f"[seed] WARN: categoria '{cat_name}' não está em subcategoria-rules.json — pulando carta '{titulo[:50]}'")
            continue

        match = classify(titulo, sigla or "", cat_rules["subcategorias"])

        if match is None:
            # Demais serviços bucket
            subcat_id = "demais-servicos"
            subcat_name = "Demais serviços"
            unmatched_count += 1
        else:
            subcat_id = match["id"]
            subcat_name = match["name"]

        card = {
            "id": f"{cat_rules['id']}--{slugify(titulo)[:80]}",
            "title": str(titulo).strip(),
            "url": str(url).strip() if url else "",
            "agency": str(orgao).strip() if orgao else "",
            "agencyCode": str(sigla).strip() if sigla else "",
        }
        grouped[cat_name][subcat_id].append(card)
        if subcat_id not in subcat_meta[cat_name]:
            subcat_meta[cat_name][subcat_id] = {"id": subcat_id, "name": subcat_name}

    # Emit in stable order: same order as rules file (then "Demais serviços" last)
    output = []
    for cat_name, cat_rules in rules.items():
        subcats_in_data = grouped.get(cat_name, {})
        if not subcats_in_data:
            continue

        ordered_ids = [r["id"] for r in cat_rules["subcategorias"]]
        ordered_ids.append("demais-servicos")

        subcategories_out = []
        for sub_id in ordered_ids:
            cards = subcats_in_data.get(sub_id, [])
            if not cards:
                continue
            meta = subcat_meta[cat_name].get(sub_id) or {
                "id": sub_id,
                "name": next((r["name"] for r in cat_rules["subcategorias"] if r["id"] == sub_id), sub_id),
            }
            # Sort cards alphabetically for deterministic output
            cards_sorted = sorted(cards, key=lambda c: normalize(c["title"]))
            subcategories_out.append({
                "id": meta["id"],
                "name": meta["name"],
                "count": len(cards_sorted),
                "cards": cards_sorted,
            })

        total = sum(s["count"] for s in subcategories_out)
        output.append({
            "id": cat_rules["id"],
            "name": cat_name,
            "icon": cat_rules["icon"],
            "count": total,
            "subcategories": subcategories_out,
        })

    # Stats
    print()
    print("[seed] === Resultado ===")
    import sys
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    for cat in output:
        print(f"  {cat['count']:>4}  {cat['name']}")
        for sub in cat["subcategories"]:
            marker = "  (catch-all)" if sub["id"] == "demais-servicos" else ""
            print(f"        {sub['count']:>4}  +- {sub['name']}{marker}")
    total_cards = sum(c["count"] for c in output)
    print()
    print(f"[seed] Total: {total_cards} cards | Sem match (catch-all): {unmatched_count} ({100*unmatched_count//max(total_cards,1)}%)")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[seed] Gravado: {OUTPUT_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
