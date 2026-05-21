import type { ReactNode } from 'react';
import styles from './Tag.module.css';

type Variant = 'neutral' | 'success' | 'accent';

interface Props {
  children: ReactNode;
  variant?: Variant;
}

export function Tag({ children, variant = 'neutral' }: Props) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>;
}
