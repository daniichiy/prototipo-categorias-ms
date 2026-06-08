# Metodologia — Perfis do Cidadão a partir das Cartas de Serviço (MS)

> Documento de método do levantamento de **perfis do cidadão** sobre as 1.219 cartas de serviço do Estado de Mato Grosso do Sul (`data/cartas-com-descricao.xlsx`).
> Projeto: protótipo SETDIG · Portal MS. Gerado em 2026-06-01.

---

## 1. Conceito — perfil ≠ jornada

**Perfil do cidadão** responde *"quem é o cidadão?"* — um **segmento de identidade/dimensão de vida** estável (produtor rural, condutor, empresário, paciente). É um critério de **pertencimento**.

**Jornada do usuário** responde *"quais passos ele percorre"* para concluir um serviço — uma **sequência de etapas**. Não é o objeto deste levantamento.

Este trabalho organiza o catálogo por **pertencimento (perfil)**, não por etapas (jornada).

---

## 2. Fundamentação — benchmarking internacional

Há duas grandes escolas de arquitetura de informação (IA) em governo digital:

| Escola | Pergunta | Exemplos |
|---|---|---|
| **Segmento de público / perfil** (este projeto) | "Quem é você?" | gov.br (Cidadão, Empresa, MEI, Simples), Canada.ca (audience pages), business.gov.au |
| **Life event / jornada** (tendência OCDE) | "O que está acontecendo na sua vida?" | Estônia (proativo), Singapura LifeSG, Austrália myGov, NZ SmartStart |

**Evidência quantitativa (OCDE):** de 28 países pesquisados, **20 adotam** design por life events, mas só **13 integraram totalmente** ao menos um evento. A maturidade ainda é baixa.

**Alerta de UX:** Nielsen Norman Group ("Audience-Based Navigation: 5 Reasons to Avoid It") e a guideline do Canada.ca apontam que **navegação por audiência só funciona como camada complementar** — o cidadão nem sempre se reconhece num rótulo e frequentemente pertence a vários grupos.

**Decisão de projeto (consequência direta da evidência):**
1. Perfil é uma **camada de descoberta complementar**, não a única IA.
2. **Classificação multi-rótulo** — uma carta pode pertencer a vários perfis.
3. **Fallback "Cidadão Geral"** para serviços universais → cobertura de 100%.

### Referências
- OECD — Life event-based services in Estonia (OPSI): https://oecd-opsi.org/innovations/life-event-based-services-in-estonia/
- OECD — Government at a Glance 2025: https://www.oecd.org/en/publications/2025/06/government-at-a-glance-2025_70e14c6c.html
- OECD — Good Practice Principles for Public Service Design (PDF): https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/11/oecd-good-practice-principles-for-public-service-design-and-delivery-in-the-digital-age_f3845ec3/2ade500b-en.pdf
- GovTech Singapore — Moments of Life / LifeSG: https://www.tech.gov.sg/technews/moments-of-life-is-now-lifesg-story-so-far/
- APSC — A life events approach to Government services (Austrália): https://www.apsc.gov.au/initiatives-and-programs/workforce-information/research-analysis-and-publications/state-service/state-service-report-2023/serving-community/life-events-approach-government-services
- Canada.ca — Audience pages (guideline): https://design.canada.ca/mandatory-templates/audience-pages.html
- Nielsen Norman Group — Audience-Based Navigation: 5 Reasons to Avoid It: https://www.nngroup.com/articles/audience-based-navigation/
- Portal gov.br: https://www.gov.br/pt-br

---

## 3. Método de classificação (determinístico, rastreável)

Pipeline em `data/build_profiles.py` — **Python puro, sem IA**, 100% reproduzível.

Para cada carta (`siglaorgao` + `titulo_servico` + `o_que_e_servico`):

1. **Universais primeiro** — se o texto casa palavra-chave universal (ouvidoria, acesso à informação, denúncia, manifestação…), rótulo = **Cidadão Geral** (com precedência: não herda o órgão).
2. **Palavras-chave por perfil** — testa o texto (título + descrição, normalizado sem acento) contra a taxonomia de cada perfil. Múltiplos perfis podem casar (multi-rótulo).
3. **Órgão-padrão** — o órgão emissor adiciona seu perfil-âncora (ex.: DETRAN → Condutor).
4. **Guard agropecuário** — bloqueia falso-positivo de Saúde quando o contexto é animal (ex.: "vacina" na IAGRO ≠ saúde do cidadão).
5. **Fallback** — sem nenhuma regra → Cidadão Geral.

Cada carta carrega o campo `regra` registrando o motivo da atribuição (auditável em `data/profiles.json`).

### Órgão → perfil-âncora (resumo)
| Órgão(s) | Perfil |
|---|---|
| IAGRO, AGRAER, SEMADESC | Agronegócio |
| DETRAN | Condutor |
| JUCEMS, AGEMS, AEM | Empresário |
| SED MS, AGEHAB, SEAD, FUNTRAB | Família |
| SES, FUNSAU | Saúde |
| SEFAZ MS | Contribuinte |
| UEMS, ESCOLAGOV, FUNDECT, FADEB | Estudante |
| AGEPREV, SAD, CGP | Servidor Público |

> Demais órgãos (IMASUL, SANESUL, PGE, etc.) são classificados só por palavra-chave; sem casamento → Cidadão Geral.

---

## 4. Glossário de perfis

| Perfil | Quem é | Dimensão de vida | Perfis vizinhos |
|---|---|---|---|
| **Agronegócio** | Produtor rural, pecuarista ou agroindústria | Produção no campo, defesa agropecuária, ambiental, recursos hídricos | Contribuinte, Empresário |
| **Condutor** | Cidadão que dirige ou possui veículo | Habilitação, veículo, trânsito | Contribuinte (IPVA), Cidadão Geral |
| **Empresário** | Quem abre/opera/encerra um negócio (inclui MEI) | Constituição, licenças, obrigações fiscais empresariais | Contribuinte, Agronegócio |
| **Família** | Cidadão no cuidado do núcleo familiar | Escola, habitação, assistência social, criança/idoso | Estudante, Saúde |
| **Saúde** | Cidadão que busca cuidado da própria saúde | Atenção à saúde, vacinação humana, medicamentos, vigilância sanitária | Família, Cidadão Geral |
| **Contribuinte** | Cidadão/empresa na relação tributária | Impostos, certidões, parcelamentos, regularidade fiscal | Condutor, Empresário, Agronegócio |
| **Estudante** | Cidadão em formação no ensino superior/programas estaduais | Vestibular, graduação, bolsas, pesquisa, extensão | Família, Servidor |
| **Servidor Público** | Servidor estadual, ativo ou aposentado | Carreira, previdência, folha, capacitação | Contribuinte, Cidadão Geral |
| **Cidadão Geral** | Qualquer cidadão — serviços universais | Ouvidoria, acesso à informação, denúncia, utilidade pública | Todos |

---

## 5. Resultados quantitativos

**Globais:** 1.219 cartas · cobertura **79,1%** (fora do fallback) · **570** cartas multi-perfil.

| Perfil | Cartas | % do catálogo | Órgão líder |
|---|---:|---:|---|
| Empresário | 375 | 30,8% | SEFAZ MS |
| Agronegócio | 328 | 26,9% | SEFAZ MS |
| Contribuinte | 319 | 26,2% | SEFAZ MS |
| Estudante | 216 | 17,7% | UEMS |
| Saúde | 131 | 10,7% | SES |
| Condutor | 151 | 12,4% | DETRAN |
| Família | 150 | 12,3% | SED MS |
| Servidor Público | 136 | 11,2% | AGEPREV |
| Cidadão Geral | 255 | 20,9% | SANESUL |

> Percentuais somam > 100% por causa do multi-rótulo (intencional). A SEFAZ aparece como líder em Agronegócio/Empresário/Contribuinte porque tributação cruza esses três perfis.

---

## 6. Como regenerar

```bash
python data/build_profiles.py
# Gera: src/pages/ProfilesPage/profilesData.ts  +  data/profiles.json
```

A taxonomia de palavras-chave e o mapa órgão→perfil estão no topo de `build_profiles.py` — ajustáveis e versionáveis. Toda alteração é reversível: basta re-rodar.

## 7. Protótipo

- Rota `/perfis` — abas de perfis (referência `prototipo perfil.png`): coluna do cidadão + últimas solicitações à esquerda, abas no topo, grid de cards de serviço com selo de situação **(ilustrativo)**, e lista completa das cartas do perfil (colapsável).
- Rota `/perfis/metodologia` — esta metodologia + glossário + benchmarking renderizados no app.

> **Limite honesto:** os selos de situação (Em dia, Regular…) são *mock* de demonstração — o protótipo não consome dados reais do cidadão.
