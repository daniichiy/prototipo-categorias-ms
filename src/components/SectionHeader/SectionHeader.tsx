import styles from './SectionHeader.module.css';

interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeader({ title, subtitle, id }: Props) {
  return (
    <header className={styles.header}>
      <h1 id={id} className={styles.title}>
        {title}
      </h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
