import { useState, useId } from 'react';
import type { Subcategory } from '@/types/category';
import { ServiceCardList } from '../ServiceCardList';
import styles from './AccordionItem.module.css';

interface Props {
  subcategory: Subcategory;
  defaultOpen?: boolean;
}

export function AccordionItem({ subcategory, defaultOpen = false }: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const reactId = useId();
  const panelId = `${reactId}-panel`;

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className={styles.name}>{subcategory.name}</span>
        <span className={styles.meta}>
          <span className={`material-icons ${styles.caret}`} aria-hidden="true">
            {isOpen ? 'expand_less' : 'expand_more'}
          </span>
        </span>
      </button>

      <div
        id={panelId}
        className={styles.panel}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.panelInner}>
          <ServiceCardList cards={subcategory.cards} />
        </div>
      </div>
    </div>
  );
}
