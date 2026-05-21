import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './IndicatorsBlock.module.css';

interface Props {
  totalCards: number;
  totalCategories: number;
  totalAgencies: number;
}

export function IndicatorsBlock({ totalCards, totalCategories, totalAgencies }: Props) {
  return (
    <section id="indicadores" className={styles.section} aria-labelledby="indicadores-title">
      <LayoutContainer>
        <header className={styles.heading}>
          <h2 id="indicadores-title" className={styles.title}>INDICADORES</h2>
          <p className={styles.subtitle}>Acompanhe o desempenho dos serviços.</p>
        </header>

        <div className={styles.row}>
          <article className={styles.stat}>
            <span className={styles.value}>{totalCards.toLocaleString('pt-BR')}</span>
            <span className={styles.label}>Cartas de serviço</span>
          </article>

          <article className={styles.stat}>
            <span className={styles.value}>{totalCategories}</span>
            <span className={styles.label}>Áreas temáticas</span>
          </article>

          <article className={styles.stat}>
            <span className={styles.value}>{totalAgencies}</span>
            <span className={styles.label}>Órgãos do Estado</span>
          </article>
        </div>
      </LayoutContainer>
    </section>
  );
}
