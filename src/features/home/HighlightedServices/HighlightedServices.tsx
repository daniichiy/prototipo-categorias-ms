import { useMemo, useState } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import type { Category, ServiceCard } from '@/types/category';
import styles from './HighlightedServices.module.css';

type Audience = 'Cidadão' | 'Servidor Público' | 'Empresa' | 'Gestão Pública';

const AUDIENCES: { id: Audience; categoriesHint: string[] }[] = [
  { id: 'Cidadão', categoriesHint: ['saude-cuidado', 'transito-transportes-infraestrutura', 'assistencia-social-habitacao-cidadania', 'ciencia-educacao-pesquisa'] },
  { id: 'Servidor Público', categoriesHint: ['trabalho-emprego-previdencia', 'administracao-publica'] },
  { id: 'Empresa', categoriesHint: ['empresa-industria-comercio', 'financas-impostos', 'agropecuaria-meio-ambiente'] },
  { id: 'Gestão Pública', categoriesHint: ['comunicacao-transparencia', 'justica-seguranca'] },
];

interface FeaturedItem {
  card: ServiceCard;
  categoryName: string;
  icon: string;
}

function buildFeatured(categories: Category[], hintIds: string[]): FeaturedItem[] {
  const items: FeaturedItem[] = [];
  for (const hintId of hintIds) {
    const cat = categories.find((c) => c.id === hintId);
    if (!cat) continue;
    const firstSub = cat.subcategories.find((s) => s.id !== 'demais-servicos') ?? cat.subcategories[0];
    if (!firstSub) continue;
    for (const card of firstSub.cards.slice(0, 2)) {
      items.push({ card, categoryName: cat.name, icon: cat.icon });
      if (items.length >= 8) return items;
    }
  }
  return items;
}

interface Props {
  categories: Category[];
}

export function HighlightedServices({ categories }: Props) {
  const [active, setActive] = useState<Audience>('Cidadão');

  const itemsByAudience = useMemo(() => {
    const map = new Map<Audience, FeaturedItem[]>();
    for (const a of AUDIENCES) {
      map.set(a.id, buildFeatured(categories, a.categoriesHint));
    }
    return map;
  }, [categories]);

  const items = itemsByAudience.get(active) ?? [];

  return (
    <section id="destaque" className={styles.section} aria-labelledby="destaque-title">
      <LayoutContainer>
        <header className={styles.heading}>
          <h2 id="destaque-title" className={styles.title}>SERVIÇOS EM DESTAQUE</h2>
          <p className={styles.subtitle}>Serviços recomendados por público alvo.</p>
        </header>

        <div role="tablist" aria-label="Filtrar por público" className={styles.tabs}>
          {AUDIENCES.map(({ id }) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={active === id}
              tabIndex={active === id ? 0 : -1}
              className={`${styles.tab} ${active === id ? styles.tabActive : ''}`}
              onClick={() => setActive(id)}
            >
              {id}
            </button>
          ))}
        </div>

        <ul className={styles.grid} role="tabpanel">
          {items.map(({ card, icon }) => (
            <li key={card.id} className={styles.cell}>
              <a
                href={card.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                aria-label={`${card.title} — ${card.agency}. Abre em nova aba.`}
              >
                <span className={`material-icons ${styles.cardIcon}`} aria-hidden="true">{icon}</span>
                <div className={styles.cardBody}>
                  <p className={styles.cardAgency}>{card.agency || card.agencyCode}</p>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </LayoutContainer>
    </section>
  );
}
