import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ic } from '../DashboardPage/icons';
import {
  CITIZEN, SOLICITACOES, AGENDAMENTOS, FAVORITOS, HISTORICO,
  type Solicitacao, type ProactiveItem,
} from '../DashboardPage/data';
import { PERFIS_PROATIVOS, DOCUMENTOS_PERFIL, type PerfilProativo, type DocItem } from './proactiveData';
import '../DashboardPage2/DashboardPage2.css';
import './ProfilesPage.css';

const AVATAR_PHOTO = 'https://cataas.com/cat?width=120&height=120';

/* ===== Shell (mesma estética do DashboardPage2) ===== */
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
      <Link to="/"><Ic name="home" size={16} stroke={2} /><span>Portal</span></Link>
      <span className="sep"><Ic name="chevron-right" size={14} /></span>
      <span className="current">Perfis do cidadão</span>
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

/* ===== Card proativo (mesmo markup do DashboardPage2) ===== */
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
          <div className="pc-secondary"><Ic name="info" size={13} /><span>{item.secondary}</span></div>
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

/* ===== Menu lateral de perfis ===== */
function PerfilMenu({ perfis, ativo, onSelect }: {
  perfis: PerfilProativo[]; ativo: string; onSelect: (id: string) => void;
}) {
  function onKey(e: React.KeyboardEvent) {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    const idx = perfis.findIndex((p) => p.id === ativo);
    const next = e.key === 'ArrowDown'
      ? (idx + 1) % perfis.length
      : (idx - 1 + perfis.length) % perfis.length;
    onSelect(perfis[next].id);
    document.getElementById(`perfil-${perfis[next].id}`)?.focus();
  }
  return (
    <nav className="pf-menu" aria-label="Perfis do cidadão" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
      {perfis.map((p) => (
        <button
          key={p.id}
          id={`perfil-${p.id}`}
          role="tab"
          aria-selected={p.id === ativo}
          aria-controls="pf-feed"
          tabIndex={p.id === ativo ? 0 : -1}
          className={'pf-menu-item' + (p.id === ativo ? ' active' : '')}
          style={{ ['--pf-cor' as string]: p.cor }}
          onClick={() => onSelect(p.id)}
        >
          <span className="pf-menu-ico"><Ic name={p.icon} size={20} stroke={2} /></span>
          <span className="pf-menu-label">{p.nome}</span>
          <span className="pf-menu-count">{p.itens.length}</span>
        </button>
      ))}
    </nav>
  );
}

/* ===== Coluna do cidadão ===== */
const STATUS_LABEL: Record<Solicitacao['status'], { txt: string; tone: string }> = {
  'em-analise': { txt: 'Em análise', tone: 'warning' },
  'aguardando-doc': { txt: 'Em andamento', tone: 'info' },
  'concluido': { txt: 'Concluída', tone: 'success' },
  'rejeitado': { txt: 'Rejeitada', tone: 'error' },
};

function CitizenCard() {
  const initial = CITIZEN.firstName.charAt(0).toUpperCase();
  return (
    <div className="pf-citizen">
      <div className="pf-citizen-avatar">{initial}</div>
      <div className="pf-citizen-name">{CITIZEN.name}</div>
      <div className="pf-citizen-cpf">CPF {CITIZEN.cpf}</div>
    </div>
  );
}

/* ===== Documentos do perfil (carteira digital) ===== */
function DocumentosBlock({ docs }: { docs: DocItem[] }) {
  if (docs.length === 0) return null;
  return (
    <section className="pf-doc-block" aria-label="Documentos do perfil">
      <h3 className="pf-block-title"><Ic name="wallet" size={16} stroke={2} /> Documentos e carteirinhas</h3>
      <div className="pf-cart-grid">
        {docs.map((d) => (
          <article key={d.nome} className="pf-cart-card">
            <span className="pf-cart-ico"><Ic name={d.icon} size={20} stroke={2} /></span>
            <div className="pf-cart-body">
              <div className="pf-cart-nome">{d.nome}</div>
              <div className="pf-cart-orgao">{d.orgao}{d.codigo ? ` · ${d.codigo}` : ''}</div>
            </div>
            <span className={'pf-badge ' + d.tone}>{d.situacao}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== Seções globais (do cidadão, independem do perfil) ===== */
function GlobalSections() {
  return (
    <div className="pf-global">
      <section className="ds-card" aria-labelledby="ag-title">
        <div className="card-head">
          <span className="ico"><Ic name="calendar" size={18} stroke={2} /></span>
          <h2 id="ag-title">Agendamentos</h2>
          <span className="count">{AGENDAMENTOS.length} atendimentos marcados</span>
        </div>
        <div className="pf-ag-list">
          {AGENDAMENTOS.map((a) => (
            <div key={a.id} className="pf-ag">
              <div className="pf-ag-date">
                <span className="pf-ag-day">{a.data.slice(0, 5)}</span>
                <span className="pf-ag-hour">{a.hora}</span>
              </div>
              <div className="pf-ag-body">
                <div className="pf-ag-serv">{a.servico}</div>
                <div className="pf-ag-meta">{a.orgao} · {a.local}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-card" aria-labelledby="sol-title">
        <div className="card-head">
          <span className="ico"><Ic name="file-text" size={18} stroke={2} /></span>
          <h2 id="sol-title">Solicitações</h2>
          <span className="count">{SOLICITACOES.length} protocolos em andamento</span>
        </div>
        <ul className="pf-sol-list">
          {SOLICITACOES.map((s) => {
            const st = STATUS_LABEL[s.status];
            const pct = Math.round((s.etapa / s.totalEtapas) * 100);
            return (
              <li key={s.id} className="pf-sol">
                <div className="pf-sol-top">
                  <span className="pf-sol-name">{s.servico}</span>
                  <span className={'pf-badge ' + st.tone}>{st.txt}</span>
                </div>
                <div className="pf-sol-meta">Protocolo {s.id} · {s.orgao} · atualizado {s.atualizado}</div>
                <div className="pf-sol-bar"><span style={{ width: `${pct}%` }} /></div>
                <div className="pf-sol-foot">Etapa {s.etapa} de {s.totalEtapas} · Prazo: {s.prazo}</div>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="pf-minirow">
        <section className="pf-mini" aria-labelledby="fav-title">
          <h2 id="fav-title" className="pf-mini-title">Favoritos</h2>
          <ul className="pf-fav">
            {FAVORITOS.map((f) => (
              <li key={f.id}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <Ic name={f.icon} size={15} stroke={2} /><span>{f.nome}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="pf-mini" aria-labelledby="hist-title">
          <h2 id="hist-title" className="pf-mini-title">Histórico</h2>
          <ul className="pf-hist">
            {HISTORICO.map((h, i) => (
              <li key={i}>
                <span className="pf-hist-label">{h.label}</span>
                <span className="pf-hist-meta">{h.date} · {h.orgao}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

/* ===== Página ===== */
export function ProfilesPage() {
  const [ativo, setAtivo] = useState(PERFIS_PROATIVOS[0].id);
  const perfil = useMemo(
    () => PERFIS_PROATIVOS.find((p) => p.id === ativo) ?? PERFIS_PROATIVOS[0],
    [ativo],
  );

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = '#EFF3F6';
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    return () => { document.body.style.background = prev; };
  }, []);

  return (
    <div className="painel2 perfis">
      <MsUtilBar />
      <MsHeader />
      <Breadcrumb />

      <main className="page">
        <div className="pf-head-row">
          <div>
            <h1 className="page-title">Perfis do cidadão</h1>
            <div className="page-greet-sub">
              Serviços que o Estado <b>antecipa para você</b> com base no seu perfil. Selecione um perfil ao lado.
            </div>
          </div>
          <Link to="/perfis/metodologia" className="pf-method-link">
            <Ic name="book" size={15} stroke={2} /> Metodologia &amp; glossário
          </Link>
        </div>

        <div className="pf-layout">
          <aside className="pf-rail" aria-label="Cidadão e perfis">
            <CitizenCard />
            <PerfilMenu perfis={PERFIS_PROATIVOS} ativo={ativo} onSelect={setAtivo} />
          </aside>

          <section
            id="pf-feed"
            role="tabpanel"
            aria-labelledby={`perfil-${perfil.id}`}
            className="pf-feed"
          >
            <div className="pf-feed-head" style={{ ['--pf-cor' as string]: perfil.cor }}>
              <span className="pf-feed-ico"><Ic name={perfil.icon} size={26} stroke={2} /></span>
              <div>
                <h2 className="pf-feed-title">{perfil.nome}</h2>
                <p className="pf-feed-desc">{perfil.descricao}</p>
              </div>
              <span className="pf-feed-count">{perfil.itens.length} ações proativas</span>
            </div>

            <div className="proactive-list">
              {perfil.itens.map((it) => <ProactiveCard key={it.id} item={it} />)}
            </div>

            <DocumentosBlock docs={DOCUMENTOS_PERFIL[perfil.id] ?? []} />

            <p className="pf-demo-note">
              <Ic name="info" size={13} /> Ações e documentos ilustrativos — o protótipo não consome dados reais do cidadão.
            </p>
          </section>
        </div>

        <GlobalSections />
      </main>

      <MsFooter />
    </div>
  );
}
