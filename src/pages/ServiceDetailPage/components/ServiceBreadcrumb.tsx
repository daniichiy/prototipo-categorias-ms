import { Link } from 'react-router-dom';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceBreadcrumb.module.css';

interface Props {
  category: string;
  categorySlug: string;
}

export function ServiceBreadcrumb({ category, categorySlug }: Props) {
  return (
    <div className={styles.breadcrumbBar}>
      <LayoutContainer>
        <nav aria-label="Breadcrumb">
          <ol className={styles.breadcrumbList}>
            <li>
              <Link to="/" aria-label="Página inicial">
                <span
                  className="material-icons"
                  aria-hidden="true"
                  style={{ fontSize: 16, verticalAlign: 'middle' }}
                >
                  home
                </span>
              </Link>
            </li>
            <li aria-hidden="true" className={styles.sep}>/</li>
            <li>
              <Link to={`/categoria/${categorySlug}`} className={styles.breadcrumbLink}>
                {category}
              </Link>
            </li>
          </ol>
        </nav>
      </LayoutContainer>
    </div>
  );
}
