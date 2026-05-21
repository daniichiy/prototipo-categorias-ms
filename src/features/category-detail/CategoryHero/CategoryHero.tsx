import { Link } from 'react-router-dom';
import type { Category } from '@/types/category';
import { LayoutContainer } from '@/components/LayoutContainer';
import { Breadcrumb } from '@/components/Breadcrumb';
import styles from './CategoryHero.module.css';

interface Props {
  category: Category;
}

export function CategoryHero({ category }: Props) {
  return (
    <section className={styles.hero} aria-labelledby="category-headline">
      <LayoutContainer className={styles.inner}>
        <Breadcrumb
          items={[
            { label: 'Início', to: '/' },
            { label: 'Categorias', to: '/#categorias' },
            { label: category.name },
          ]}
        />

        <div className={styles.titleRow}>
          <div className={styles.titleBlock}>
            <span className={`material-icons ${styles.icon}`} aria-hidden="true">
              {category.icon}
            </span>
            <h1 id="category-headline" className={styles.title}>{category.name}</h1>
          </div>

          <Link to="/" className={styles.back}>
            <span className="material-icons" aria-hidden="true">arrow_back</span>
            <span>Voltar</span>
          </Link>
        </div>

        <p className={styles.count}>
          Serviços (<strong>{category.count}</strong>) em {category.subcategories.length} subcategorias
        </p>
      </LayoutContainer>
    </section>
  );
}
