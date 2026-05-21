import type { Subcategory } from '@/types/category';
import { SubcategoryItem } from '../SubcategoryItem';
import styles from './SubcategoryList.module.css';

interface Props {
  subcategories: Subcategory[];
  id: string;
}

export function SubcategoryList({ subcategories, id }: Props) {
  return (
    <ul id={id} className={styles.list}>
      {subcategories.map((sub) => (
        <SubcategoryItem key={sub.id} subcategory={sub} />
      ))}
    </ul>
  );
}
