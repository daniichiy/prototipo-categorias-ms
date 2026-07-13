import { Link, useLocation } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import styles from './SiteHeader.module.css';

interface MenuItem {
  label: string;
  href?: string;
  to?: string;
}

const MENU: MenuItem[] = [
  { label: 'Governo', href: 'https://www.ms.gov.br/' },
  { label: 'Serviços', href: '#categorias' },
  { label: 'Órgãos e Secretarias', href: 'https://www.ms.gov.br/orgaos' },
  { label: 'Comunicação', href: 'https://agenciadenoticias.ms.gov.br/' },
  { label: 'Fale Conosco', to: '/fale-conosco' },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="20" height="20" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18" fill="currentColor">
      <path d="M17.53 3H21l-7.61 8.7L22 21h-6.94l-5.45-6.41L3.36 21H0l8.15-9.31L0 3h7.1l4.93 5.86L17.53 3zm-1.22 16h1.92L7.78 4.92H5.72L16.31 19z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="20" height="20" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9a3.73 3.73 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.17 8.8 2.16 12 2.16zm0 5.84a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zm5.1-1.86a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18" fill="currentColor">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.55 3h-3.18v12.6a2.6 2.6 0 0 1-2.6 2.6 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.26 0 .51.04.75.11V10A5.78 5.78 0 0 0 4 15.6 5.8 5.8 0 0 0 9.77 21.4a5.8 5.8 0 0 0 5.78-5.8V9.18a7.42 7.42 0 0 0 4.32 1.39V7.4a4.32 4.32 0 0 1-3.27-1.58z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="22" height="22" fill="currentColor">
      <path d="M21.58 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.43A2.5 2.5 0 0 0 2.42 7.2C2 8.76 2 12 2 12s0 3.24.42 4.8c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.43a2.5 2.5 0 0 0 1.77-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/governoms', Icon: FacebookIcon },
  { label: 'X (Twitter)', href: 'https://twitter.com/governoms', Icon: XIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/governodems', Icon: InstagramIcon },
  { label: 'TikTok', href: 'https://www.tiktok.com/@governodems', Icon: TikTokIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@governoms', Icon: YouTubeIcon },
];

export function SiteHeader() {
  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/servico');

  // Página de serviço não usa o cabeçalho global — tem barra própria (ServiceTopBar).
  if (isServicePage) return null;

  return (
    <header className={styles.header} role="banner">
      {/* Band 1: utility bar (skip links + Ouvidoria/Transparência) */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <ul className={styles.skipLinks}>
            <li><a href="#main">Ir para conteúdo</a></li>
            <li><a href="#nav-principal">Ir para navegação</a></li>
            <li><a href="#search-input">Ir para busca</a></li>
          </ul>
          <ul className={styles.utilityRight}>
            <li>
              <a href="https://www.ouvidoria.ms.gov.br/" target="_blank" rel="noopener noreferrer">
                Ouvidoria
              </a>
            </li>
            <li>
              <a href="https://www.transparencia.ms.gov.br/" target="_blank" rel="noopener noreferrer">
                Transparência
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Band 2: navy brand bar — logo + (serviço: breadcrumb + busca | demais: redes sociais) */}
      <div className={styles.brandBar}>
        <div className={styles.brandInner}>
          <Link to="/" className={styles.brand} aria-label="ms.gov.br — Página inicial">
            <img src="/logo-ms.svg" alt="ms.gov.br" className={styles.brandLogo} />
          </Link>

          <ul className={styles.social} aria-label="Redes sociais">
            {SOCIAL.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Band 3: white menu bar with home + nav items + Entrar */}
      <nav className={styles.menuBar} id="nav-principal" aria-label="Menu principal">
        <div className={styles.menuInner}>
            <ul className={styles.menu}>
              <li className={styles.menuHome}>
                <Link to="/" aria-label="Início">
                  <span className="material-icons" aria-hidden="true">home</span>
                </Link>
              </li>
              {MENU.map((item, idx) => (
                <li key={item.label} className={styles.menuItem}>
                  {item.to ? (
                    <Link to={item.to} className={styles.menuLink}>
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={styles.menuLink}
                    >
                      {item.label}
                    </a>
                  )}
                  {idx < MENU.length - 1 && <span className={styles.divider} aria-hidden="true">|</span>}
                </li>
              ))}
            </ul>

            <UserMenu />
          </div>
        </nav>
    </header>
  );
}
