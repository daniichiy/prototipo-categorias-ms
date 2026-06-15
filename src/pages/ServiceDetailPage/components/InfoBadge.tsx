import styles from './InfoBadge.module.css';

interface Props {
  icon: string;
  title: string;
  value: string;
}

export function InfoBadge({ icon, title, value }: Props) {
  return (
    <div className={styles.channelBadge}>
      <span className={`material-icons ${styles.channelIcon}`} aria-hidden="true">
        {icon}
      </span>
      <div className={styles.badgeContent}>
        <span className={styles.badgeTitle}>{title}</span>
        <span>{value}</span>
      </div>
    </div>
  );
}
