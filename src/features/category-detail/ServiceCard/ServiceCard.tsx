import type { ServiceCard as ServiceCardType } from '@/types/category';
import styles from './ServiceCard.module.css';

const ICON_BY_AGENCY: Record<string, string> = {
  SEFAZ: 'currency_exchange',
  UEMS: 'auto_stories',
  IAGRO: 'agriculture',
  DETRAN: 'directions_car',
  'SED MS': 'school',
  SANESUL: 'water_drop',
  AGEPREV: 'work',
  SES: 'medical_services',
  'SEGOV MS': 'account_balance',
  AGRAER: 'eco',
  SEAD: 'apartment',
  AGEMS: 'gavel',
  IMASUL: 'compost',
  'PGE MS': 'balance',
  JUCEMS: 'apartment',
  PMMS: 'security',
  AEM: 'inventory_2',
  'MSGÁS': 'electrical_services',
  SEMADESC: 'eco',
  AGEPEN: 'local_police',
};

function pickIcon(agencyCode: string): string {
  const norm = agencyCode.toUpperCase().trim();
  for (const [key, icon] of Object.entries(ICON_BY_AGENCY)) {
    if (norm.startsWith(key.toUpperCase())) return icon;
  }
  return 'description';
}

interface Props {
  card: ServiceCardType;
}

export function ServiceCard({ card }: Props) {
  const icon = pickIcon(card.agencyCode);
  const isExternal = !!card.url;

  return (
    <a
      href={card.url || '#'}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={styles.card}
      aria-label={`${card.title} — ${card.agency}. Abre no portal oficial em nova aba.`}
    >
      <span className={`material-icons ${styles.icon}`} aria-hidden="true">{icon}</span>

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
