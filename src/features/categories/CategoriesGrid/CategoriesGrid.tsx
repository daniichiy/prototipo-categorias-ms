import type { Category } from '@/types/category';
import { LayoutContainer } from '@/components/LayoutContainer';
import { CategoryCard } from '../CategoryCard';
import styles from './CategoriesGrid.module.css';

interface Props {
  categories: Category[];
}

export function CategoriesGrid({ categories }: Props) {
  return (
    <section
      id="categorias"
      className={styles.section}
      aria-labelledby="categorias-title"
    >
      <LayoutContainer>
        <header className={styles.heading}>
          <h2 id="categorias-title" className={styles.title}>CATEGORIAS</h2>
          <p className={styles.subtitle}>
            Encontre o serviço desejado navegando pelas categorias abaixo.
          </p>
        </header>

        <ul className={styles.grid}>
          {categories.map((category) => (
            <li key={category.id} className={styles.cell}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </LayoutContainer>
    </section>
  );
}
