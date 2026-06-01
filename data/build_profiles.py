# -*- coding: utf-8 -*-
"""
build_profiles.py — Classificacao das cartas de servico do MS em PERFIS do cidadao.

Pipeline DETERMINISTICO (sem LLM) para rastreabilidade:
  1. Le data/cartas-com-descricao.xlsx (siglaorgao, titulo_servico, o_que_e_servico).
  2. Aplica livro de regras: keywords (titulo + o_que_e) + orgao-padrao.
  3. Classificacao MULTI-ROTULO; fallback "Cidadao Geral" para servicos universais.
  4. Calcula quantitativos por perfil.
  5. Emite:
       - src/pages/ProfilesPage/profilesData.ts  (tipado, consumido pelo React)
       - data/profiles.json                       (auditoria completa)

Rodar:  python data/build_profiles.py
"""
import json
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
XLSX = ROOT / "data" / "cartas-com-descricao.xlsx"
OUT_TS = ROOT / "src" / "pages" / "ProfilesPage" / "profilesData.ts"
OUT_JSON = ROOT / "data" / "profiles.json"

# ----------------------------------------------------------------------------
# Definicao dos perfis (ordem = ordem de exibicao das abas)
# ----------------------------------------------------------------------------
PERFIS = [
    {"id": "agronegocio", "nome": "Agronegocio",   "icon": "leaf",            "cor": "#2E7D32"},
    {"id": "condutor",     "nome": "Condutor",      "icon": "car",            "cor": "#1565C0"},
    {"id": "empresario",   "nome": "Empresario",    "icon": "briefcase",      "cor": "#6A1B9A"},
    {"id": "familia",      "nome": "Familia",       "icon": "users",          "cor": "#C2185B"},
    {"id": "saude",        "nome": "Saude",         "icon": "heart-pulse",    "cor": "#D32F2F"},
    {"id": "contribuinte", "nome": "Contribuinte",  "icon": "file-text",      "cor": "#00838F"},
    {"id": "estudante",    "nome": "Estudante",     "icon": "graduation-cap", "cor": "#F9A825"},
    {"id": "servidor",     "nome": "Servidor Publico", "icon": "shield-check","cor": "#455A64"},
    {"id": "cidadao_geral","nome": "Cidadao Geral", "icon": "user",           "cor": "#5B6770"},
]
NOMES_ACENTO = {
    "agronegocio": "Agronegócio", "saude": "Saúde", "familia": "Família",
    "empresario": "Empresário", "servidor": "Servidor Público", "estudante": "Estudante",
    "condutor": "Condutor", "contribuinte": "Contribuinte", "cidadao_geral": "Cidadão Geral",
}

# Servicos universais -> Cidadao Geral (tem precedencia: nao herdam o orgao)
UNIVERSAL_KW = [
    "acesso a informacao", "ouvidoria", "denuncia", "manifestacao", "reclamacao",
    "elogio", "sugestao", "lei de acesso", "lai", "protocolo geral", "certidao de tempo",
]

# orgao -> perfil padrao (aplicado quando nenhuma regra de keyword mais especifica vence
# OU em conjunto com elas; multi-rotulo permitido)
ORGAO_DEFAULT = {
    "IAGRO": "agronegocio", "AGRAER": "agronegocio", "SEMADESC": "agronegocio",
    "DETRAN": "condutor",
    "JUCEMS": "empresario", "AGEMS": "empresario", "AEM": "empresario",
    "SED MS": "familia", "AGEHAB": "familia", "SEAD": "familia", "FUNTRAB": "familia",
    "SES": "saude", "FUNSAU": "saude",
    "SEFAZ MS": "contribuinte",
    "UEMS": "estudante", "ESCOLAGOV": "estudante", "FUNDECT": "estudante", "FADEB": "estudante",
    "AGEPREV": "servidor", "SAD": "servidor", "CGP": "servidor",
}

# Regras de keyword por perfil (texto = titulo + " " + o_que_e, normalizado sem acento)
KEYWORDS = {
    "agronegocio": ["rural", "agro", "pecuar", "gado", "bovino", "vacina animal", "vacinacao animal",
                    "propriedade rural", "gta", "transito de animais", "agrotoxic", "semente", "muda",
                    "defesa agropecu", "outorga", "recursos hidricos", "uso da agua", "itr",
                    "licenciamento ambiental", "ambiental", "pesca", "florest", "produtor",
                    "fazenda", "irrigacao", "sanidade", "vegetal", "fitossanit"],
    "condutor": ["cnh", "carteira de habilitacao", "habilitacao", "veiculo", "condutor",
                 "licenciamento de veiculo", "transferencia de veiculo", "ipva", "multa",
                 "infracao de transito", "transito", "placa", "detran", "renavam"],
    "empresario": ["empresa", "empresar", "alvara", "junta comercial", "cnpj", "inscricao estadual",
                   "icms", "simples nacional", "microempreendedor", "mei", "registro de empresa",
                   "licenca de funcionamento", "sociedade", "comercio", "industria", "negocio",
                   "estabelecimento", "regime tributario"],
    "familia": ["matricula", "escolar", "escola", "ensino fundamental", "ensino medio", "bolsa familia",
                "habitac", "casa", "moradia", "cadunico", "cadastro unico", "assistencia social",
                "beneficio social", "crianca", "adolescente", "idoso", "familia", "creche",
                "transporte escolar", "merenda"],
    "saude": ["saude", "sus", "vacina", "imuniz", "medicamento", "hospital", "consulta", "exame",
              "vigilancia sanitaria", "cartao sus", "ambulatorial", "farmac", "tratamento",
              "agendamento de consulta", "leito", "samu"],
    "contribuinte": ["imposto", "tributo", "icms", "ipva", "itcd", "certidao negativa", "debito",
                     "restituicao", "nota fiscal", "parcelamento", "divida ativa", "arrecadacao",
                     "sefaz", "contribuinte", "fiscal", "taxa"],
    "estudante": ["vestibular", "ensino superior", "bolsa de estudo", "curso", "diploma", "mestrado",
                  "doutorado", "graduacao", "uems", "universidade", "academic", "matricula academica",
                  "edital de selecao", "estagio", "monografia", "pesquisa cientifica", "extensao"],
    "servidor": ["servidor", "aposentadoria", "previdenc", "contracheque", "funcional", "concurso",
                 "capacitacao", "folha de pagamento", "licenca premio", "ferias", "averbacao",
                 "tempo de servico", "abono", "pensao"],
}


def strip_accents(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))


def norm(s) -> str:
    if s is None:
        return ""
    return strip_accents(str(s)).lower().strip()


def classify(orgao: str, titulo: str, oque: str):
    """Retorna (labels:list, regra:str)."""
    blob = norm(titulo) + " " + norm(oque)

    # 1) universal -> cidadao_geral, com precedencia total
    for kw in UNIVERSAL_KW:
        if kw in blob:
            return ["cidadao_geral"], f"universal:{kw}"

    labels = []
    motivos = []

    # Contexto agropecuario -> bloqueia falso-positivo de Saude (ex.: "vacina" animal na IAGRO)
    agro_ctx = (orgao in ("IAGRO", "AGRAER", "SEMADESC")
                or any(t in blob for t in ("animal", "agropecu", "veterinar", "rebanho",
                                           "bovin", "suin", "aves", "sanidade")))

    # 2) keywords por perfil
    for pid, kws in KEYWORDS.items():
        if pid == "saude" and agro_ctx:
            continue  # vacinacao/sanidade animal nao e saude do cidadao
        hit = next((kw for kw in kws if kw in blob), None)
        if hit:
            labels.append(pid)
            motivos.append(f"{pid}:kw:{hit}")

    # 3) orgao padrao
    od = ORGAO_DEFAULT.get(orgao)
    if od and od not in labels:
        labels.append(od)
        motivos.append(f"{od}:orgao:{orgao}")

    # 4) fallback
    if not labels:
        return ["cidadao_geral"], "fallback:sem-regra"

    return labels, " | ".join(motivos)


def status_for(idx: int, perfil_id: str):
    """Status ILUSTRATIVO (demo) — nao ha dado real de situacao do cidadao."""
    palette = [
        ("Disponivel", "info"), ("Em dia", "success"), ("Regular", "success"),
        ("Vigente", "info"), ("Sem pendencias", "success"), ("Em analise", "warning"),
    ]
    return palette[idx % len(palette)]


def main():
    wb = openpyxl.load_workbook(XLSX, read_only=True)
    ws = wb.active
    rows = list(ws.iter_rows(values_only=True))[1:]  # pula header

    cartas = []
    for orgao, titulo, oque in rows:
        if not titulo:
            continue
        orgao = (orgao or "").strip()
        labels, regra = classify(orgao, titulo, oque or "")
        cartas.append({
            "orgao": orgao,
            "titulo": str(titulo).strip(),
            "oQueE": str(oque or "").strip(),
            "perfis": labels,
            "regra": regra,
        })

    total = len(cartas)
    by_perfil = defaultdict(list)
    for c in cartas:
        for p in c["perfis"]:
            by_perfil[p].append(c)

    multi = sum(1 for c in cartas if len(c["perfis"]) > 1)
    classificadas = sum(1 for c in cartas if c["perfis"] != ["cidadao_geral"])
    cobertura = round(100 * classificadas / total, 1)

    perfis_out = []
    for meta in PERFIS:
        pid = meta["id"]
        lst = by_perfil.get(pid, [])
        qtd = len(lst)
        orgaos = Counter(c["orgao"] for c in lst)
        top_orgaos = [{"orgao": o, "qtd": n} for o, n in orgaos.most_common(5)]
        exclusivas = sum(1 for c in lst if len(c["perfis"]) == 1)

        # cards estilo prototipo (top 9 por perfil)
        cards = []
        for i, c in enumerate(lst[:9]):
            st, tone = status_for(i, pid)
            meta_txt = c["oQueE"]
            if len(meta_txt) > 110:
                meta_txt = meta_txt[:107].rstrip() + "..."
            cards.append({
                "orgaoLabel": c["orgao"].upper(),
                "titulo": c["titulo"],
                "meta": meta_txt,
                "status": st,
                "statusTone": tone,
            })

        # cartas (trunca oQueE p/ enxugar bundle)
        cartas_out = []
        for c in lst:
            oq = c["oQueE"]
            if len(oq) > 180:
                oq = oq[:177].rstrip() + "..."
            cartas_out.append({"orgao": c["orgao"], "titulo": c["titulo"], "oQueE": oq})

        perfis_out.append({
            "id": pid,
            "nome": NOMES_ACENTO.get(pid, meta["nome"]),
            "icon": meta["icon"],
            "cor": meta["cor"],
            "total": qtd,
            "pctDoTotal": round(100 * qtd / total, 1),
            "topOrgaos": top_orgaos,
            "exclusivas": exclusivas,
            "compartilhadas": qtd - exclusivas,
            "cards": cards,
            "cartas": cartas_out,
        })

    globais = {
        "totalCartas": total,
        "multiPerfil": multi,
        "cobertura": cobertura,
        "gerados": "data/build_profiles.py",
    }

    # ---- JSON auditoria ----
    OUT_JSON.write_text(json.dumps(
        {"globais": globais, "perfis": perfis_out, "cartas": cartas},
        ensure_ascii=False, indent=2), encoding="utf-8")

    # ---- TS ----
    header = (
        "// ARQUIVO GERADO por data/build_profiles.py — NAO editar a mao.\n"
        "// Fonte: data/cartas-com-descricao.xlsx (classificacao deterministica multi-rotulo).\n\n"
        "export interface PerfilCard {\n"
        "  orgaoLabel: string;\n  titulo: string;\n  meta: string;\n"
        "  status: string;\n  statusTone: 'info' | 'success' | 'warning';\n}\n\n"
        "export interface PerfilCarta {\n  orgao: string;\n  titulo: string;\n  oQueE: string;\n}\n\n"
        "export interface TopOrgao {\n  orgao: string;\n  qtd: number;\n}\n\n"
        "export interface Perfil {\n"
        "  id: string;\n  nome: string;\n  icon: string;\n  cor: string;\n"
        "  total: number;\n  pctDoTotal: number;\n  topOrgaos: TopOrgao[];\n"
        "  exclusivas: number;\n  compartilhadas: number;\n"
        "  cards: PerfilCard[];\n  cartas: PerfilCarta[];\n}\n\n"
        "export interface PerfisGlobais {\n"
        "  totalCartas: number;\n  multiPerfil: number;\n  cobertura: number;\n  gerados: string;\n}\n\n"
    )
    body = (
        "export const PERFIS_GLOBAIS: PerfisGlobais = "
        + json.dumps(globais, ensure_ascii=False) + ";\n\n"
        "export const PERFIS: Perfil[] = "
        + json.dumps(perfis_out, ensure_ascii=False, indent=2) + ";\n"
    )
    OUT_TS.parent.mkdir(parents=True, exist_ok=True)
    OUT_TS.write_text(header + body, encoding="utf-8")

    # ---- resumo no stdout ----
    print(f"Total cartas: {total} | multi-perfil: {multi} | cobertura: {cobertura}%")
    print("Perfil               cartas   %     top orgao")
    for p in perfis_out:
        top = p["topOrgaos"][0]["orgao"] if p["topOrgaos"] else "-"
        print(f"  {p['nome']:<18} {p['total']:>5}  {p['pctDoTotal']:>5}   {top}")
    print(f"\nOK -> {OUT_TS.relative_to(ROOT)}")
    print(f"OK -> {OUT_JSON.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
