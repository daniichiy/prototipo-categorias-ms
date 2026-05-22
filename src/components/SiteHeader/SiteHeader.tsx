import { Link } from 'react-router-dom';
import { IconWrapper } from '@/components/IconWrapper';
import styles from './SiteHeader.module.css';

const MENU = [
  { label: 'Início', href: '/' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Destaques', href: '#destaque' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Indicadores', href: '#indicadores' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a href="https://www.ms.gov.br/" target="_blank" rel="noopener noreferrer" className={styles.topLink}>
            www.ms.gov.br
          </a>
          <span className={styles.topSep} aria-hidden="true">·</span>
          <a href="https://www.ms.gov.br/pagina/acessibilidade" target="_blank" rel="noopener noreferrer" className={styles.topLink}>
            Acessibilidade
          </a>
          <span className={styles.topSep} aria-hidden="true">·</span>
          <a href="https://www.ms.gov.br/pagina/mapa-do-site" target="_blank" rel="noopener noreferrer" className={styles.topLink}>
            Mapa do site
          </a>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.mainInner}>
          <Link to="/" className={styles.brand} aria-label="ms.gov.br — Página inicial">
            <img
              src="/logo-ms.svg"
              alt="ms.gov.br"
              className={styles.brandLogo}
            />
          </Link>

          <nav className={styles.nav} aria-label="Menu principal">
            <ul className={styles.menu}>
              {MENU.map((item) => (
                <li key={item.label}>
                  <a className={styles.menuItem} href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <ul className={styles.social} aria-label="Redes sociais">
              {['facebook', 'photo_camera', 'alternate_email', 'play_circle'].map((icon) => (
                <li key={icon}>
                  <a href="https://www.ms.gov.br" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Rede social">
                    <IconWrapper name={icon} size={18} color="#ffffff" ariaHidden />
                  </a>
                </li>
              ))}
            </ul>
            <button type="button" className={styles.entrar}>
              <IconWrapper name="account_circle" size={18} color="#ffffff" ariaHidden />
              <span>Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
