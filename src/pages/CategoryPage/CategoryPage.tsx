import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCategory } from '@/hooks/useCategory';
import { LayoutContainer } from '@/components/LayoutContainer';
import { CategoryHero } from '@/features/category-detail/CategoryHero';
import { AccordionList } from '@/features/category-detail/AccordionList';
import styles from './CategoryPage.module.css';

export function CategoryPage() {
  const { id } = useParams<{ id: string }>();
  const { data: category, loading, notFound } = useCategory(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (loading) {
    return (
      <LayoutContainer>
        <p className={styles.status}>Carregando categoria…</p>
      </LayoutContainer>
    );
  }

  if (notFound || !category) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className={styles.page}>
      <CategoryHero category={category} />

      <section className={styles.body}>
        <LayoutContainer>
          <AccordionList subcategories={category.subcategories} />
        </LayoutContainer>
      </section>
    </main>
  );
}
