import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './NewsBlock.module.css';

const NEWS = [
  {
    badge: 'Gestão',
    date: '21 maio 2026',
    title: 'Mutirão Agraer leva cidadania e serviços às famílias rurais de Itaquiraí',
    tone: 'a' as const,
  },
  {
    badge: 'Saúde',
    date: '21 maio 2026',
    title: 'MS, PR e Paraguai discutem protocolo conjunto de dados e calendário vacinal',
    tone: 'b' as const,
  },
  {
    badge: 'Saúde',
    date: '21 maio 2026',
    title: 'Mato Grosso do Sul é destaque nacional em aleitamento materno exclusivo',
    tone: 'c' as const,
  },
];

export function NewsBlock() {
  return (
    <section id="noticias" className={styles.section} aria-labelledby="noticias-title">
      <LayoutContainer>
        <header className={styles.heading}>
          <h2 id="noticias-title" className={styles.title}>NOTÍCIAS</h2>
          <p className={styles.subtitle}>Confira as últimas notícias do estado.</p>
        </header>

        <ul className={styles.grid}>
          {NEWS.map((news, idx) => (
            <li key={idx} className={styles.cell}>
              <article className={styles.card}>
                <div className={`${styles.thumb} ${styles[`tone-${news.tone}`]}`} aria-hidden="true">
                  <span className="material-icons">image</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <span className={styles.badge}>{news.badge}</span>
                    <span className={styles.date}>{news.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{news.title}</h3>
                  <a href="#" className={styles.cardLink}>
                    Continue lendo
                    <span className="material-icons" aria-hidden="true">arrow_forward</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <a href="https://agenciadenoticias.ms.gov.br/" target="_blank" rel="noopener noreferrer" className={styles.allBtn}>
            Ver todas
          </a>
        </div>
      </LayoutContainer>
    </section>
  );
}
