import type { ElementType, ReactNode } from 'react';
import styles from './LayoutContainer.module.css';

interface Props {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function LayoutContainer({ children, as: Tag = 'div', className }: Props) {
  return (
    <Tag className={[styles.container, className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
}
