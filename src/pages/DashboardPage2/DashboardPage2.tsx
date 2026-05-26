import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ic } from '../DashboardPage/icons';
import {
  CITIZEN, PROACTIVE, SOLICITACOES, DOCUMENTOS,
  FAVORITOS, RECOMENDADOS, HISTORICO, AGENDAMENTOS,
  type ProactiveItem,
} from '../DashboardPage/data';
import './DashboardPage2.css';

const AVATAR_PHOTO = 'https://cataas.com/cat?width=120&height=120';

/* ===== Shell ===== */
function MsUtilBar() {
  return (
    <div className="ms-utilbar">
      <a href="#">gov.br</a>
      <a href="#">Órgãos Estaduais</a>
      <a href="#">Acesso à Informação</a>
      <a href="#">Diário Oficial</a>
      <a href="#">Ouvidoria</a>
      <div className="right">
        <span style={{ opacity: 0.7 }}>Acessibilidade:</span>
        <div className="a11y">
          <button title="Diminuir fonte">A-</button>
          <button title="Aumentar fonte">A+</button>
          <button title="Alto contraste">◐</button>
        </div>
      </div>
    </div>
  );
}

function MsHeader() {
  return (
    <header className="ms-header">
      <Link to="/" className="ms-logo" aria-label="Voltar ao portal">
        <img src="/logo-ms.svg" alt="ms.gov.br" />
      </Link>

      <div className="ms-search">
        <Ic name="search" size={20} stroke={2} />
        <input placeholder="Buscar serviços, documentos, protocolos..." aria-label="Buscar" />
      </div>

      <div className="ms-user">
        <div className="ms-user-text">
          <div className="ms-user-name">{CITIZEN.firstName}</div>
          <div className="ms-user-email">{CITIZEN.email}</div>
          <div className="ms-user-meta">Último acesso: <b>{CITIZEN.lastLogin}</b></div>
        </div>
        <div className="avatar-wrap">
          <div className="avatar"><img src={AVATAR_PHOTO} alt="" /></div>
          <span className="avatar-online" />
        </div>
      </div>
    </header>
  );
}

function Breadcrumb() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">
        <Ic name="home" size={16} stroke={2} />
        <span>Portal</span>
      </Link>
      <span className="sep"><Ic name="chevron-right" size={14} /></span>
      <span className="current">Meu Painel 2</span>
    </nav>
  );
}

function MsFooter() {
  return (
    <footer className="ms-footer">
      <div className="ms-footer-logo"><img src="/logo-ms.svg" alt="ms.gov.br" /></div>
      <div className="ms-footer-text">
        <b>Governo do Estado de Mato Grosso do Sul</b><br />
        Palácio Paranhos · Parque dos Poderes · Campo Grande/MS
      </div>
      <div className="right">
        <a href="#">Acesso à Informação</a> · <a href="#">Política de Privacidade</a><br />
        <span style={{ opacity: 0.7 }}>© 2026 · SETDIG / Governo de MS</span>
      </div>
    </footer>
  );
}

/* ===== Module cards ===== */
interface ModuleCard {
  icon: string;
  title: string;
  count?: number;
  badge?: number;
  sub: string;
  link: string;
}

function ModuleGrid() {
  const cards: ModuleCard[] = [
    { icon: 'star', title: 'Favoritos', count: FAVORITOS.length, sub: 'Serviços salvos para acesso rápido no portal.', link: 'Ver favoritos' },
    { icon: 'file-text', title: 'Solicitações', count: SOLICITACOES.length, sub: 'Acompanhe protocolos e status em andamento.', link: 'Ver solicitações' },
    { icon: 'calendar', title: 'Agendamentos', count: AGENDAMENTOS.length, sub: 'Próximos atendimentos presenciais marcados.', link: 'Ver agendamentos' },
    { icon: 'wallet', title: 'Documentos', count: DOCUMENTOS.length, sub: 'Sua carteira digital de documentos oficiais.', link: 'Abrir carteira' },
    { icon: 'clock', title: 'Histórico', count: HISTORICO.length, sub: 'Suas últimas atividades e acessos no portal.', link: 'Ver histórico' },
  ];

  return (
    <section aria-label="Meus módulos">
      <div className="m-grid">
        {cards.map((c) => (
          <a key={c.title} href="#" className="m-card" onClick={(e) => e.preventDefault()}>
            {c.badge ? <span className="m-badge">{c.badge}</span> : null}
            <div className="m-top">
              <span className="m-icon"><Ic name={c.icon} size={24} stroke={2} /></span>
              {typeof c.count === 'number' && <span className="m-count">{c.count}</span>}
            </div>
            <div className="m-title">{c.title}</div>
            <div className="m-sub">{c.sub}</div>
            <span className="m-link">{c.link} <Ic name="chevron-right" size={14} stroke={2.5} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ===== Atenção para você ===== */
function ProactiveCard({ item }: { item: ProactiveItem }) {
  return (
    <div className={'proactive-card ' + item.severity}>
      <div className="pc-icon"><Ic name={item.icon} size={24} stroke={2} /></div>
      <div className="pc-main">
        <div className="pc-head">
          <span className="pc-kind">{item.kind}</span>
          <span style={{ color: 'var(--text-soft)' }}>•</span>
          <span className="pc-meta">{item.meta}</span>
        </div>
        <div className="pc-title">{item.title}</div>
        <p className="pc-body">{item.body}</p>
        {item.secondary && (
          <div className="pc-secondary">
            <Ic name="info" size={13} />
            <span>{item.secondary}</span>
          </div>
        )}
      </div>
      <div className="pc-actions">
        {item.deadline && <span className="pc-deadline">{item.deadline}</span>}
        {item.amount && <span className="pc-amount">{item.amount}</span>}
        <button className="pc-cta">{item.cta} <Ic name="arrow-right" size={14} stroke={2.5} /></button>
        {item.secondaryCta && <button className="pc-cta-secondary">{item.secondaryCta}</button>}
      </div>
    </div>
  );
}

function AtencaoSection() {
  return (
    <section className="ds-card highlight" aria-labelledby="atencao-title">
      <div className="card-head">
        <span className="ico"><Ic name="bell" size={18} stroke={2} /></span>
        <h2 id="atencao-title">Notificações</h2>
        <span className="count">{PROACTIVE.length} itens priorizados pela sua agenda cidadã</span>
        <div className="right">
          <a href="#" className="see-all" onClick={(e) => e.preventDefault()}>Ver notificações <Ic name="chevron-right" size={14} /></a>
        </div>
      </div>
      <div className="proactive-list">
        {PROACTIVE.map((it) => <ProactiveCard key={it.id} item={it} />)}
      </div>
    </section>
  );
}

/* ===== Recomendado para você ===== */
function RecomendadoSection() {
  return (
    <section className="ds-card highlight" aria-labelledby="reco-title">
      <div className="card-head">
        <span className="ico"><Ic name="sparkles" size={18} stroke={2} /></span>
        <h2 id="reco-title">Recomendado para você</h2>
      </div>
      <div className="reco-grid">
        {RECOMENDADOS.map((r) => (
          <a key={r.id} href="#" className="reco-card" onClick={(e) => e.preventDefault()}>
            <span className="reco-icon"><Ic name={r.icon} size={20} stroke={2} /></span>
            <div className="reco-body">
              <div className="reco-title">{r.titulo}</div>
              <div className="reco-desc">{r.desc}</div>
              <div className="reco-orgao">{r.orgao}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ===== Page ===== */
export function DashboardPage2() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#EFF3F6';
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="painel2">
      <MsUtilBar />
      <MsHeader />
      <Breadcrumb />

      <main className="page">
        <div>
          <h1 className="page-title">Olá, {CITIZEN.firstName}!</h1>
          <div className="page-greet-sub">
            Você tem <b>{PROACTIVE.length} itens</b> aguardando sua atenção. Bem-vindo ao seu painel.
          </div>
        </div>

        <ModuleGrid />
        <div className="lower-grid">
          <AtencaoSection />
          <RecomendadoSection />
        </div>
      </main>

      <MsFooter />
    </div>
  );
}
