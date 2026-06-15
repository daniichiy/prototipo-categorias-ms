import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './TopSearchBar.module.css';

export function TopSearchBar({ placeholder = 'Pesquisar novo serviço...' }: { placeholder?: string }) {
  return (
    <div className={styles.topSearchContainer}>
      <LayoutContainer>
        <div className={styles.topSearchWrapper}>
          <input type="text" placeholder={placeholder} className={styles.topSearchInput} />
          <button className={styles.topSearchBtn} aria-label="Buscar">
            <span className="material-icons">search</span>
          </button>
        </div>
      </LayoutContainer>
    </div>
  );
}
