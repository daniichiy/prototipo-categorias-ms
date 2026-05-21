import { LayoutContainer } from '@/components/LayoutContainer';
import { SectionHeader } from '@/components/SectionHeader';
import { CategoryGrid } from '@/features/categories/CategoryGrid';
import { useCategories } from '@/hooks/useCategories';
import styles from './App.module.css';

export function App() {
  const { data, loading, error } = useCategories();

  return (
    <main className={styles.page}>
      <LayoutContainer as="section" className={styles.section}>
        <SectionHeader
          id="categorias-title"
          title="Categorias"
          subtitle="Encontre o serviço desejado navegando pelas categorias abaixo."
        />

        {loading ? (
          <p className={styles.status}>Carregando categorias…</p>
        ) : error ? (
          <p className={styles.status} role="alert">
            Não foi possível carregar as categorias.
          </p>
        ) : (
          <CategoryGrid categories={data} labelledBy="categorias-title" />
        )}
      </LayoutContainer>
    </main>
  );
}
