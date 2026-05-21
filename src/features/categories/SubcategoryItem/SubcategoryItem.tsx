import type { Subcategory } from '@/types/category';
import styles from './SubcategoryItem.module.css';

interface Props {
  subcategory: Subcategory;
}

export function SubcategoryItem({ subcategory }: Props) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{subcategory.name}</span>
      <span className={styles.count} aria-label={`${subcategory.count} cartas`}>
        {subcategory.count}
      </span>
    </li>
  );
}
