import type { ServiceDetail } from '@/data/featuredServices';
import styles from './ServiceSidebar.module.css';
import { InfoBadge } from './InfoBadge';
import { UnidadesCard } from './UnidadesCard';

const channelToIcon = (channel: ServiceDetail['channel']): string => {
  if (channel === 'Online') return 'computer';
  if (channel === 'Presencial') return 'place';
  return 'sync_alt';
};

export function ServiceSidebar({ service }: { service: ServiceDetail }) {
  return (
    <aside className={styles.sidebar}>
      <InfoBadge icon="account_balance" title="Órgão" value={service.agency} />
      <InfoBadge icon="schedule" title="Prazos" value={service.deadline} />
      <InfoBadge icon="payments" title="Custo" value={service.costs || 'Gratuito'} />
      <InfoBadge icon={channelToIcon(service.channel)} title="Canal" value={service.channel} />
      <UnidadesCard />
    </aside>
  );
}
