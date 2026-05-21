import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { Category } from '@/types/category';
import styles from './CategoryCard.module.css';

interface Props {
  category: Category;
}

function CategoryCardComponent({ category }: Props) {
  return (
    <Link
      to={`/categoria/${category.id}`}
      className={styles.tile}
      aria-label={`${category.name} — ${category.count} cartas de serviço`}
    >
      <span className={`material-icons ${styles.icon}`} aria-hidden="true">
        {category.icon}
      </span>
      <h3 className={styles.label}>{category.name}</h3>
      <span className={styles.count}>{category.count} cartas</span>
    </Link>
  );
}

export const CategoryCard = memo(CategoryCardComponent);
