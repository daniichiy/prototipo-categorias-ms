import styles from './ServiceStartButton.module.css';

interface Props {
  url: string;
  label?: string;
}

export function ServiceStartButton({ url, label = 'Iniciar' }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.btnIniciar}>
      {label}
    </a>
  );
}
