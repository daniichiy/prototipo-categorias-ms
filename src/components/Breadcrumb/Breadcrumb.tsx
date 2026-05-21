import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="Você está em" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className={styles.item}>
              {item.to && !isLast ? (
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className={styles.separator} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
