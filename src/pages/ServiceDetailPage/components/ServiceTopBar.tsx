import { Link } from 'react-router-dom';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceTopBar.module.css';

interface Props {
  category: string;
  categorySlug: string;
  placeholder?: string;
}

/** Barra branca do topo da página de serviço: breadcrumb + busca centralizada. */
export function ServiceTopBar({ category, categorySlug, placeholder = 'Pesquisar novo serviço...' }: Props) {
  return (
    <div className={styles.bar}>
      <LayoutContainer>
        <div className={styles.inner}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumb}>
            <li>
              <Link to="/" aria-label="Página inicial" className={styles.crumbLink}>
                <span className="material-icons" aria-hidden="true">home</span>
              </Link>
            </li>
            <li aria-hidden="true" className={styles.sep}>/</li>
            <li>
              <Link to={`/categoria/${categorySlug}`} className={styles.crumbLink}>
                {category}
              </Link>
            </li>
          </ol>
        </nav>

        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder={placeholder}
            aria-label="Pesquisar serviço"
            className={styles.searchInput}
          />
          <button type="button" className={styles.searchBtn} aria-label="Buscar">
            <span className="material-icons">search</span>
          </button>
        </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
