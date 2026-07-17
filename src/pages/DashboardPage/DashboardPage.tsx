import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ic } from './icons';
import {
  CITIZEN, PROACTIVE, SOLICITACOES, NOTIFICACOES, DOCUMENTOS,
  FAVORITOS, RECOMENDADOS, HISTORICO, NAV,
  type ProactiveItem, type Solicitacao, type Notificacao,
  type Documento, type Favorito, type Recomendado,
} from './data';
import './DashboardPage.css';

const AVATAR_PHOTO = 'https://cataas.com/cat?width=64&height=64';

function maskCpf(cpf: string) {
  const digits = cpf.replace(/\D/g, '');
  if (digits.length !== 11) return cpf;
  return `${digits.slice(0, 3)}.***.***-${digits.slice(9)}`;
}

/* ===== Shell ===== */
function GovBar() {
  return (
    <div className="govbar">
      <div className="gov-links">
        <a href="#">gov.br</a>
        <a href="#">Órgãos Estaduais</a>
        <a href="#">Acesso à Informação</a>
        <a href="#">Diário Oficial</a>
      </div>
      <div className="right">
        <span style={{ color: 'var(--color-muted)' }}>Acessibilidade:</span>
        <div className="a11y-btns">
          <button title="Diminuir fonte">A-</button>
          <button title="Aumentar fonte">A+</button>
          <button title="Alto contraste" style={{ background: 'var(--color-primary)', color: '#fff' }}>◐</button>
        </div>
      </div>
    </div>
  );
}

interface SidebarProps {
  active: string;
  onChange: (id: string) => void;
  unreadCount: number;
}

function Sidebar({ active, onChange, unreadCount }: SidebarProps) {
  return (
    <aside className="sidebar">
      <Link to="/#categorias" className="brand" aria-label="Voltar ao portal">
        <img src="/logo-ms.svg" alt="ms.gov.br" className="brand-logo" />
        <span className="brand-sub">Painel do Cidadão</span>
      </Link>

      <nav className="nav" aria-label="Navegação principal">
        {NAV.map((item) => (
          <button
            key={item.id}
            className={'nav-link ' + (active === item.id ? 'active' : '')}
            onClick={() => onChange(item.id)}
          >
            <Ic name={item.icon} size={18} />
            <span>{item.label}</span>
            {item.id === 'notificacoes' && unreadCount > 0 && (
              <span className="badge">{unreadCount}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Ic name="info" size={18} />
          <div className="help-title">Precisa de ajuda?</div>
        </div>
        <div className="help-body">Fale com a Central de Atendimento ou consulte o passo-a-passo dos serviços.</div>
        <a href="#" className="help-link">
          Falar com atendente <Ic name="arrow-right" size={14} />
        </a>
      </div>

      <button className="logout">
        <Ic name="log-out" size={18} />
        <span>Sair com segurança</span>
      </button>
    </aside>
  );
}

interface TopBarProps {
  user: typeof CITIZEN;
  theme: string;
  onTheme: () => void;
  unreadCount: number;
  onProfile: () => void;
  onNotifs: () => void;
}

function TopBar({ user, theme, onTheme, unreadCount, onProfile, onNotifs }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="search-wrap">
        <Ic name="search" size={18} />
        <input placeholder="Buscar serviços, documentos, protocolos…" aria-label="Busca global" />
        <kbd>⌘K</kbd>
      </div>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: 6, alignItems: 'center' }}>
        <button className="ico-btn" title="Tema" onClick={onTheme} aria-label="Alternar tema">
          <Ic name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
        </button>
        <button className="ico-btn" title="Acessibilidade" aria-label="Acessibilidade">
          <Ic name="accessibility" size={18} />
        </button>
        <button className="ico-btn" title="Notificações" aria-label="Notificações" onClick={onNotifs}>
          <Ic name="bell" size={18} />
          {unreadCount > 0 && <span className="dot" />}
        </button>
      </div>

      <button className="profile-chip" onClick={onProfile}>
        <div className="avatar"><img src={AVATAR_PHOTO} alt="" /></div>
        <div>
          <div className="name">{user.firstName}</div>
          <div className="sub">conta gov.br <b style={{ color: '#FF9900' }}>Ouro</b></div>
        </div>
        <Ic name="chevron-down" size={14} />
      </button>
    </header>
  );
}

interface BottomNavProps {
  active: string;
  onChange: (id: string) => void;
  unreadCount: number;
}

function BottomNav({ active, onChange, unreadCount }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Navegação mobile">
      <div className="bottom-nav-inner">
        {NAV.slice(0, 5).map((item) => (
          <button
            key={item.id}
            className={active === item.id ? 'active' : ''}
            onClick={() => onChange(item.id)}
          >
            <div style={{ position: 'relative' }}>
              <Ic name={item.icon} size={20} />
              {item.id === 'notificacoes' && unreadCount > 0 && (
                <span style={{
                  position: 'absolute', top: -4, right: -8,
                  background: '#DA1E28', color: '#fff',
                  fontSize: 9, fontWeight: 700,
                  padding: '1px 4px', borderRadius: 999, minWidth: 14, textAlign: 'center',
                }}>{unreadCount}</span>
              )}
            </div>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

/* ===== Sections ===== */
function Greeting() {
  const hour = new Date().getHours();
  const part = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';
  const pendingCount = PROACTIVE.length;
  const reqsOpen = SOLICITACOES.length;
  const docs = DOCUMENTOS.length;

  return (
    <div className="greeting">
      <div>
        <h1>{part}, {CITIZEN.firstName}.</h1>
        <div className="greet-sub">
          {pendingCount > 0 ? (
            <>Você tem <b style={{ color: 'var(--color-primary-500)', fontWeight: 700 }}>{pendingCount} {pendingCount === 1 ? 'item importante' : 'itens importantes'}</b> esperando sua atenção hoje.</>
          ) : 'Está tudo em dia. Aproveite para conhecer novos serviços disponíveis.'}
        </div>
        <div className="greet-meta">
          <span className="pill govbr">
            <Ic name="shield-check" size={13} />
            <span>conta <b>gov.br Ouro</b></span>
          </span>
          <span className="pill">
            <Ic name="clock" size={13} />
            último acesso: <b>{CITIZEN.lastLogin}</b>
          </span>
          <span className="pill">
            <Ic name="user" size={13} />
            CPF <b>{maskCpf(CITIZEN.cpf)}</b>
          </span>
        </div>
      </div>

      <div className="stats">
        <div className="stat"><div className="num">{pendingCount}</div><div className="lab">Ações pendentes</div></div>
        <div className="stat"><div className="num">{reqsOpen}</div><div className="lab">Solicitações</div></div>
        <div className="stat"><div className="num">{docs}</div><div className="lab">Documentos</div></div>
      </div>
    </div>
  );
}

function ProactiveCard({ item }: { item: ProactiveItem }) {
  return (
    <div className={'proactive-card ' + item.severity}>
      <div className="pc-icon">
        <Ic name={item.icon} size={22} stroke={2} />
      </div>
      <div className="pc-main">
        <div className="pc-head">
          <span className="pc-kind">{item.kind}</span>
          <span style={{ color: 'var(--text-muted)' }}>•</span>
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
        <button className="pc-cta">
          {item.cta}
          <Ic name="arrow-right" size={14} />
        </button>
        {item.secondaryCta && (
          <button className="pc-cta-secondary">{item.secondaryCta}</button>
        )}
      </div>
    </div>
  );
}

function ProactiveSection({ items }: { items: ProactiveItem[] }) {
  return (
    <section>
      <div className="section-head">
        <span style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, #004F9F, #0D99F7)',
          color: '#fff', display: 'grid', placeItems: 'center',
        }}>
          <Ic name="sparkles" size={18} stroke={2} />
        </span>
        <h2>Atenção para você</h2>
        <span className="count">{items.length > 0 ? `${items.length} ${items.length === 1 ? 'item' : 'itens'} priorizados pela sua agenda cidadã` : ''}</span>
        <div className="right">
          <a href="#" className="see-all">Configurar alertas <Ic name="chevron-right" size={14} /></a>
        </div>
      </div>

      <div className="proactive-wrap">
        {items.length === 0 ? (
          <div className="proactive-empty">
            <div className="emoji-wrap"><Ic name="check-circle" size={28} stroke={2} /></div>
            <div className="ttl">Tudo certo por aqui!</div>
            <div>Nenhuma pendência detectada. Vamos avisar você assim que algo precisar de atenção.</div>
          </div>
        ) : (
          <div className="proactive-list">
            {items.map((it) => <ProactiveCard key={it.id} item={it} />)}
          </div>
        )}
      </div>
    </section>
  );
}

function Favoritos({ items }: { items: Favorito[] }) {
  return (
    <section>
      <div className="section-head">
        <h2>Favoritos</h2>
        <span className="count">acesso rápido aos seus serviços</span>
        <div className="right">
          <a href="#" className="see-all">Editar <Ic name="chevron-right" size={14} /></a>
        </div>
      </div>
      <div className="favs-grid">
        {items.map((f) => (
          <button key={f.id} className="fav">
            <span className="fav-star"><Ic name="star" size={12} /></span>
            <div className="fav-icon"><Ic name={f.icon} size={20} /></div>
            <div className="fav-name">{f.nome}</div>
            <div className="fav-orgao">{f.orgao}</div>
          </button>
        ))}
        <button className="fav add">
          <div className="fav-icon"><Ic name="plus" size={20} /></div>
          <div className="fav-name">Adicionar</div>
        </button>
      </div>
    </section>
  );
}

const STATUS_LABEL: Record<Solicitacao['status'], string> = {
  'em-analise': 'Em análise',
  'aguardando-doc': 'Aguardando você',
  'concluido': 'Concluído',
  'rejeitado': 'Rejeitado',
};

function Solicitacoes({ items }: { items: Solicitacao[] }) {
  return (
    <section>
      <div className="section-head">
        <h2>Minhas solicitações</h2>
        <span className="count">{items.length} em andamento</span>
        <div className="right">
          <a href="#" className="see-all">Ver tudo <Ic name="chevron-right" size={14} /></a>
        </div>
      </div>
      {items.length === 0 ? (
        <div className="empty">Você ainda não tem solicitações ativas.</div>
      ) : (
        <div className="req-list">
          {items.map((r) => {
            const pct = Math.round((r.etapa / r.totalEtapas) * 100);
            return (
              <div key={r.id} className="req">
                <div>
                  <div className="req-head">
                    <span className="req-protocol">{r.id}</span>
                    <span className={'req-status ' + r.status}>
                      <Ic name={r.status === 'aguardando-doc' ? 'alert-triangle' : 'clock'} size={12} />
                      {STATUS_LABEL[r.status]}
                    </span>
                  </div>
                  <div className="req-title">{r.servico}</div>
                  <div className="req-meta">
                    <span>Órgão responsável: <b>{r.orgao}</b></span>
                    <span>•</span>
                    <span>Atualizado <b>{r.atualizado}</b></span>
                    <span>•</span>
                    <span>Prazo: <b>{r.prazo}</b></span>
                  </div>
                  <div className="req-progress">
                    <div className="req-progress-track">
                      <div className="req-progress-fill" style={{ width: pct + '%' }} />
                    </div>
                    <div className="req-progress-text">Etapa {r.etapa} de {r.totalEtapas}</div>
                  </div>
                </div>
                <div className="req-arrow"><Ic name="chevron-right" size={20} /></div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

const docIcon = (id: string): string => ({
  cin: 'id-card',
  cnh: 'car',
  sus: 'heart-pulse',
  titulo: 'file-check',
} as Record<string, string>)[id] || 'wallet';

function Documentos({ items }: { items: Documento[] }) {
  return (
    <div className="aside-card">
      <div className="ac-head">
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--background-brand-soft)', color: 'var(--color-primary-500)', display: 'grid', placeItems: 'center' }}>
          <Ic name="wallet" size={14} stroke={2} />
        </span>
        <h3>Documentos digitais</h3>
        <a href="#" className="ac-link">Abrir carteira</a>
      </div>
      {items.length === 0 ? (
        <div style={{ padding: '20px 0', color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>
          Nenhum documento na carteira.
        </div>
      ) : (
        <div className="notif-list">
          {items.map((d) => (
            <div key={d.id} className={'notif ' + (d.warning ? 'urgent' : 'success')}>
              <div className="n-dot">
                <Ic name={docIcon(d.id)} size={16} stroke={2} />
              </div>
              <div>
                <div className="n-title">{d.nome}</div>
                <div className="n-meta">
                  <b>{d.orgao}</b>{d.validade ? ` · validade ${d.validade}` : ` · ${d.codigo}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function NotifAside({ items }: { items: Notificacao[] }) {
  return (
    <div className="aside-card">
      <div className="ac-head">
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--background-brand-soft)', color: 'var(--color-primary-500)', display: 'grid', placeItems: 'center' }}>
          <Ic name="bell" size={14} stroke={2} />
        </span>
        <h3>Notificações</h3>
        <a href="#" className="ac-link">Ver todas</a>
      </div>
      {items.length === 0 ? (
        <div style={{ padding: '20px 0', color: 'var(--text-muted)', fontSize: 13, textAlign: 'center' }}>
          Sem novas notificações.
        </div>
      ) : (
        <div className="notif-list">
          {items.slice(0, 5).map((n) => (
            <div key={n.id} className={'notif ' + n.kind + (n.unread ? ' unread' : '')}>
              <div className="n-dot">
                <Ic name={n.kind === 'urgent' ? 'alert-triangle' : n.kind === 'success' ? 'check-circle' : 'info'} size={16} stroke={2} />
              </div>
              <div>
                <div className="n-title">{n.title}</div>
                <div className="n-meta"><b>{n.orgao}</b> · {n.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Recomendados({ items }: { items: Recomendado[] }) {
  return (
    <div className="aside-card">
      <div className="ac-head">
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #004F9F, #0D99F7)', color: '#fff', display: 'grid', placeItems: 'center' }}>
          <Ic name="sparkles" size={14} stroke={2} />
        </span>
        <h3>Recomendado para você</h3>
      </div>
      <div>
        {items.map((r) => (
          <div key={r.id} className="reco">
            <div className="r-icon"><Ic name={r.icon} size={18} /></div>
            <div>
              <div className="r-title">{r.titulo}</div>
              <div className="r-desc">{r.desc}</div>
              <div className="r-orgao">{r.orgao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HistoricoAside() {
  return (
    <div className="aside-card">
      <div className="ac-head">
        <span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--background-brand-soft)', color: 'var(--color-primary-500)', display: 'grid', placeItems: 'center' }}>
          <Ic name="clock" size={14} stroke={2} />
        </span>
        <h3>Histórico recente</h3>
        <a href="#" className="ac-link">Ver tudo</a>
      </div>
      <div>
        {HISTORICO.map((h, i) => (
          <div key={i} className="reco" style={{ alignItems: 'center' }}>
            <div className="r-icon" style={{ background: 'transparent', color: 'var(--text-muted)' }}>
              <Ic name="file-text" size={16} />
            </div>
            <div style={{ flex: 1 }}>
              <div className="r-title" style={{ fontWeight: 600, fontSize: 13 }}>{h.label}</div>
              <div className="r-orgao" style={{ marginTop: 2 }}>{h.orgao} · {h.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== Page ===== */
export function DashboardPage() {
  const [active, setActive] = useState('inicio');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isDark = theme === 'dark';
  const unread = NOTIFICACOES.filter((n) => n.unread).length;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = isDark ? '#0B1218' : '#F2F4F7';
    return () => { document.body.style.background = prev; };
  }, [isDark]);

  return (
    <div className={`app ${isDark ? 'dark' : ''}`}>
      <GovBar />
      <Sidebar active={active} onChange={setActive} unreadCount={unread} />
      <div className="main">
        <TopBar
          user={CITIZEN}
          theme={theme}
          onTheme={() => setTheme(isDark ? 'light' : 'dark')}
          unreadCount={unread}
          onProfile={() => setActive('perfil')}
          onNotifs={() => setActive('notificacoes')}
        />

        <main className="content">
          <div className="section-stack">
            <Greeting />
            <ProactiveSection items={PROACTIVE} />
            <Solicitacoes items={SOLICITACOES} />
            <Favoritos items={FAVORITOS} />
            <HistoricoAside />
          </div>

          <aside className="aside-stack">
            <NotifAside items={NOTIFICACOES} />
            <Documentos items={DOCUMENTOS} />
            <Recomendados items={RECOMENDADOS} />
          </aside>
        </main>
      </div>

      <BottomNav active={active} onChange={setActive} unreadCount={unread} />
    </div>
  );
}
