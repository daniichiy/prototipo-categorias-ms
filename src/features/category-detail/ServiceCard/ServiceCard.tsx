import type { ServiceCard as ServiceCardType } from '@/types/category';
import styles from './ServiceCard.module.css';

interface Props {
  card: ServiceCardType;
}

export function ServiceCard({ card }: Props) {
  const isExternal = !!card.url;

  return (
    <a
      href={card.url || '#'}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={styles.card}
      aria-label={`${card.title} — ${card.agency}. Abre no portal oficial em nova aba.`}
    >
      <div className={styles.body}>
        <p className={styles.agency}>{card.agency || card.agencyCode}</p>
        <h4 className={styles.title}>{card.title}</h4>
      </div>

      <span className={`material-icons ${styles.arrow}`} aria-hidden="true">
        open_in_new
      </span>
    </a>
  );
}
