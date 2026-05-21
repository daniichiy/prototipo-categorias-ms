import type { Subcategory } from '@/types/category';
import { AccordionItem } from '../AccordionItem';
import styles from './AccordionList.module.css';

interface Props {
  subcategories: Subcategory[];
}

export function AccordionList({ subcategories }: Props) {
  return (
    <div className={styles.list} role="region" aria-label="Subcategorias">
      {subcategories.map((sub, idx) => (
        <AccordionItem
          key={sub.id}
          subcategory={sub}
          defaultOpen={idx === 0}
        />
      ))}
    </div>
  );
}
