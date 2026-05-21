import { memo } from 'react';
import type { Category } from '@/types/category';
import { IconWrapper } from '@/components/IconWrapper';
import { SubcategoryList } from '../SubcategoryList';
import styles from './CategoryCard.module.css';

interface Props {
  category: Category;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

function CategoryCardComponent({ category, isExpanded, onToggle }: Props) {
  const panelId = `subcategories-${category.id}`;

  return (
    <article
      className={[styles.card, isExpanded ? styles.expanded : '']
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type="button"
        className={styles.button}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={() => onToggle(category.id)}
      >
        <div className={styles.iconBox}>
          <IconWrapper name={category.icon} />
        </div>

        <div className={styles.body}>
          <h2 className={styles.title}>{category.name}</h2>
          <span className={styles.count}>{category.count} cartas</span>
        </div>

        <IconWrapper
          name="expand_more"
          size={22}
          className={[styles.caret, isExpanded ? styles.caretOpen : '']
            .filter(Boolean)
            .join(' ')}
        />
      </button>

      {isExpanded ? (
        <SubcategoryList
          subcategories={category.subcategories}
          id={panelId}
        />
      ) : null}
    </article>
  );
}

export const CategoryCard = memo(CategoryCardComponent);
