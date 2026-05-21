import type { Category } from '@/types/category';
import { useSingleExpand } from '@/hooks/useSingleExpand';
import { CategoryCard } from '../CategoryCard';
import styles from './CategoryGrid.module.css';

interface Props {
  categories: Category[];
  labelledBy?: string;
}

export function CategoryGrid({ categories, labelledBy }: Props) {
  const { expandedId, toggle } = useSingleExpand();

  return (
    <div
      role="region"
      aria-labelledby={labelledBy}
      className={styles.grid}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isExpanded={expandedId === category.id}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}
