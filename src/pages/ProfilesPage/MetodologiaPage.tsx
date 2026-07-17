import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ic } from '../DashboardPage/icons';
import { PERFIS_PROATIVOS as PERFIS } from './proactiveData';

const PERFIS_GLOBAIS = { totalCartas: 1219, cobertura: 83.0 };
import './MetodologiaPage.css';

/* Glossário curto por perfil — "quem é" o cidadão de cada segmento. */
const GLOSSARIO: Record<string, { quemE: string; dimensao: string; vizinhos: string }> = {
  agronegocio: {
    quemE: 'Produtor rural, pecuarista ou agroindústria que explora atividade agropecuária.',
    dimensao: 'Produção no campo, defesa agropecuária, ambiental e recursos hídricos.',
    vizinhos: 'Contribuinte (tributação rural), Empresário (agroindústria).',
  },
  condutor: {
    quemE: 'Cidadão que dirige ou possui veículo automotor.',
    dimensao: 'Habilitação, veículo, trânsito.',
    vizinhos: 'Contribuinte (IPVA), Cidadão Geral.',
  },
  empresario: {
    quemE: 'Pessoa que abre, opera ou encerra um negócio (incluindo MEI).',
    dimensao: 'Constituição da empresa, licenças, obrigações fiscais empresariais.',
    vizinhos: 'Contribuinte (ICMS), Agronegócio (agroindústria).',
  },
  familia: {
    quemE: 'Cidadão no papel de cuidado do núcleo familiar — educação, moradia, assistência.',
    dimensao: 'Escola, habitação, benefícios sociais, proteção da criança e do idoso.',
    vizinhos: 'Estudante, Saúde, Cidadão Geral.',
  },
  saude: {
    quemE: 'Cidadão que busca cuidado e proteção da própria saúde.',
    dimensao: 'Atenção à saúde, vacinação humana, medicamentos, vigilância sanitária.',
    vizinhos: 'Família, Cidadão Geral.',
  },
  contribuinte: {
    quemE: 'Cidadão ou empresa na relação tributária com o Estado.',
    dimensao: 'Impostos, certidões, parcelamentos, regularidade fiscal.',
    vizinhos: 'Condutor (IPVA), Empresário (ICMS), Agronegócio.',
  },
  estudante: {
    quemE: 'Cidadão em formação no ensino superior ou em programas educacionais do Estado.',
    dimensao: 'Vestibular, graduação, bolsas, pesquisa e extensão.',
    vizinhos: 'Família, Servidor Público.',
  },
  servidor: {
    quemE: 'Servidor público estadual, ativo ou aposentado.',
    dimensao: 'Carreira, previdência, folha, capacitação.',
    vizinhos: 'Contribuinte, Cidadão Geral.',
  },
  cidadao_geral: {
    quemE: 'Qualquer cidadão — serviços universais que não dependem de um perfil específico.',
    dimensao: 'Ouvidoria, acesso à informação, denúncias, serviços de utilidade pública.',
    vizinhos: 'Todos os perfis.',
  },
};

const REFERENCIAS = [
  { t: 'OECD — Life event-based services in Estonia (OPSI)', u: 'https://oecd-opsi.org/innovations/life-event-based-services-in-estonia/' },
  { t: 'OECD — Government at a Glance 2025', u: 'https://www.oecd.org/en/publications/2025/06/government-at-a-glance-2025_70e14c6c.html' },
  { t: 'OECD — Good Practice Principles for Public Service Design (PDF)', u: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2022/11/oecd-good-practice-principles-for-public-service-design-and-delivery-in-the-digital-age_f3845ec3/2ade500b-en.pdf' },
  { t: 'GovTech Singapore — Moments of Life / LifeSG', u: 'https://www.tech.gov.sg/technews/moments-of-life-is-now-lifesg-story-so-far/' },
  { t: 'APSC — A life events approach to Government services (Austrália)', u: 'https://www.apsc.gov.au/initiatives-and-programs/workforce-information/research-analysis-and-publications/state-service/state-service-report-2023/serving-community/life-events-approach-government-services' },
  { t: 'Canada.ca — Audience pages (guideline)', u: 'https://design.canada.ca/mandatory-templates/audience-pages.html' },
  { t: 'Nielsen Norman Group — Audience-Based Navigation: 5 Reasons to Avoid It', u: 'https://www.nngroup.com/articles/audience-based-navigation/' },
  { t: 'Portal gov.br', u: 'https://www.gov.br/pt-br' },
];

export function MetodologiaPage() {
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#EFF3F6';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="perfis-doc">
      <header className="pf-header">
        <Link to="/#categorias" className="pf-brand" aria-label="MS Digital">
          <span className="pf-brand-mark"><Ic name="star" size={20} /></span>
          <span className="pf-brand-text">MS <b>Digital</b></span>
        </Link>
      </header>

      <div className="pf-subbar">
        <nav className="pf-crumb" aria-label="Breadcrumb">
          <Link to="/#categorias">Portal</Link>
          <Ic name="chevron-right" size={13} />
          <Link to="/perfis">Perfis do cidadão</Link>
          <Ic name="chevron-right" size={13} />
          <span className="current">Metodologia</span>
        </nav>
        <Link to="/perfis" className="pf-method-link">
          <Ic name="layers" size={15} stroke={2} /> Ver perfis
        </Link>
      </div>

      <main className="pf-doc">
        <h1 className="pf-h1">Metodologia &amp; Glossário de Perfis</h1>
        <p className="pf-lead">
          Como as {PERFIS_GLOBAIS.totalCartas} cartas de serviço do Estado foram organizadas por
          <b> perfil do cidadão</b> — e por que perfil não é o mesmo que jornada.
        </p>

        <section className="pf-doc-card">
          <h2>1. Perfil ≠ jornada</h2>
          <p>
            <b>Perfil</b> responde “<i>quem é o cidadão?</i>” — um segmento de identidade estável
            (produtor rural, condutor, paciente). <b>Jornada</b> responde “<i>quais passos ele
            percorre</i>” para concluir um serviço. Aqui modelamos <b>pertencimento</b>, não etapas.
          </p>
          <div className="pf-twocol">
            <div>
              <h3>Perfil / segmento (este projeto)</h3>
              <p>Organiza por identidade. Espelha o gov.br (Cidadão, Empresa, MEI) e o business.gov.au.</p>
            </div>
            <div>
              <h3>Life event / jornada (tendência OCDE)</h3>
              <p>Organiza por evento de vida (ter filho, abrir empresa, aposentar). Estônia, Singapura (LifeSG) e myGov (AU).</p>
            </div>
          </div>
        </section>

        <section className="pf-doc-card">
          <h2>2. Como classificamos (livro de regras)</h2>
          <ol className="pf-steps">
            <li>Pipeline <b>determinístico</b> em Python (<code>cruzamento-carta/perfis.py</code>) — sem IA, 100% rastreável.</li>
            <li>Cada carta é classificada pela <b>categoria oficial</b> do portal (22 categorias) mapeada para o perfil.</li>
            <li>Classificação <b>single-rótulo</b> e auditável: usa a própria taxonomia do governo (não keyword).</li>
            <li>Serviços universais (ouvidoria, transparência, segurança) caem em <b>Cidadão Geral</b>, garantindo cobertura de 100%.</li>
          </ol>
          <div className="pf-metrics" style={{ marginTop: 16 }}>
            <div className="pf-metric"><span className="pf-metric-value">{PERFIS_GLOBAIS.totalCartas}</span><span className="pf-metric-label">cartas classificadas</span></div>
            <div className="pf-metric"><span className="pf-metric-value">{PERFIS_GLOBAIS.cobertura}%</span><span className="pf-metric-label">cobertura (fora do fallback)</span></div>
            <div className="pf-metric"><span className="pf-metric-value">22</span><span className="pf-metric-label">categorias do portal</span></div>
            <div className="pf-metric"><span className="pf-metric-value">{PERFIS.length}</span><span className="pf-metric-label">perfis (8 + Cidadão Geral)</span></div>
          </div>
        </section>

        <section className="pf-doc-card">
          <h2>3. Glossário de perfis</h2>
          <div className="pf-gloss-grid">
            {PERFIS.map((p) => {
              const g = GLOSSARIO[p.id];
              return (
                <article key={p.id} className="pf-gloss" style={{ ['--pf-cor' as string]: p.cor }}>
                  <div className="pf-gloss-head">
                    <span className="pf-gloss-ico"><Ic name={p.icon} size={18} stroke={2} /></span>
                    <h3>{p.nome}</h3>
                    <span className="pf-gloss-count">{p.total} cartas</span>
                  </div>
                  <p><b>Quem é:</b> {g?.quemE}</p>
                  <p><b>Dimensão:</b> {g?.dimensao}</p>
                  <p className="pf-gloss-near"><b>Perfis vizinhos:</b> {g?.vizinhos}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="pf-doc-card">
          <h2>4. Fundamentação — benchmarking internacional</h2>
          <p>
            Há duas grandes escolas de arquitetura de informação em governo digital: <b>segmento de
            público</b> (perfil) e <b>life event</b> (jornada). A OCDE aponta que <b>20 de 28 países</b>
            adotam design por life events, mas só <b>13</b> integraram totalmente ao menos um evento.
            A escola de UX (Nielsen Norman Group, Canada.ca) <b>alerta</b> que navegação por audiência
            só funciona como camada complementar — daí nossa escolha por <b>categoria oficial + fallback Cidadão Geral</b>.
          </p>
          <ul className="pf-ref-list">
            {REFERENCIAS.map((r) => (
              <li key={r.u}><a href={r.u} target="_blank" rel="noreferrer">{r.t}</a></li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
