import { useMemo } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { CategoriesGrid } from '@/features/categories/CategoriesGrid';
import { PromoBanner } from '@/features/home/PromoBanner';
import { SearchBar } from '@/features/home/SearchBar';
import { HighlightedServices } from '@/features/home/HighlightedServices';
import { NewsBlock } from '@/features/home/NewsBlock';
import { IndicatorsBlock } from '@/features/home/IndicatorsBlock';
import { AppsBlock } from '@/features/home/AppsBlock';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './HomePage.module.css';

export function HomePage() {
  const { data: categories, loading, error } = useCategories();

  const totals = useMemo(() => {
    const totalCards = categories.reduce((sum, c) => sum + c.count, 0);
    const agencies = new Set<string>();
    categories.forEach((c) =>
      c.subcategories.forEach((s) =>
        s.cards.forEach((card) => agencies.add(card.agencyCode))
      )
    );
    return { totalCards, totalCategories: categories.length, totalAgencies: agencies.size };
  }, [categories]);

  if (loading) {
    return (
      <LayoutContainer>
        <p className={styles.status}>Carregando…</p>
      </LayoutContainer>
    );
  }

  if (error) {
    return (
      <LayoutContainer>
        <p className={styles.status} role="alert">Erro ao carregar categorias.</p>
      </LayoutContainer>
    );
  }

  return (
    <main className={styles.page}>
      {/* <PromoBanner
        imageUrl="/banner-ipva.png"
        ctaUrl="https://www.sefaz.ms.gov.br/ipva/"
        alt="IPVA 2026 — campanha oficial do Governo do Estado de Mato Grosso do Sul"
      /> */}

      <SearchBar />

      <HighlightedServices categories={categories} />

      <CategoriesGrid categories={categories} />

      <NewsBlock />

      <IndicatorsBlock
        totalCards={totals.totalCards}
        totalCategories={totals.totalCategories}
        totalAgencies={totals.totalAgencies}
      />

      <AppsBlock />
    </main>
  );
}
