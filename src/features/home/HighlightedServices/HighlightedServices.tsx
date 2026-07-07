import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutContainer } from '@/components/LayoutContainer';
import { CIDADAO_FEATURED_CARDS } from '@/data/featuredServices';
import type { Category } from '@/types/category';
import styles from './HighlightedServices.module.css';

type Audience = 'Cidadão' | 'Servidor Público' | 'Empresa' | 'Gestão Pública';

const AUDIENCES: { id: Audience; categoriesHint: string[] }[] = [
  { id: 'Cidadão', categoriesHint: [] },
  { id: 'Servidor Público', categoriesHint: ['trabalho-previdencia', 'administracao-publica', 'justica-seguranca', 'comunicacao-transparencia'] },
  { id: 'Empresa', categoriesHint: ['empresas-negocios', 'financas-impostos', 'agropecuaria-meio-ambiente', 'comunicacao-transparencia'] },
  { id: 'Gestão Pública', categoriesHint: ['comunicacao-transparencia', 'justica-seguranca', 'administracao-publica', 'financas-impostos'] },
];

interface DynamicItem {
  id: string;
  title: string;
  agency: string;
  icon: string;
  url?: string;
}

function buildDynamic(categories: Category[], hintIds: string[]): DynamicItem[] {
  const items: DynamicItem[] = [];
  for (const hintId of hintIds) {
    const cat = categories.find((c) => c.id === hintId);
    if (!cat) continue;
    const firstSub = cat.subcategories.find((s) => s.id !== 'demais-servicos') ?? cat.subcategories[0];
    if (!firstSub) continue;
    for (const card of firstSub.cards.slice(0, 2)) {
      items.push({ id: card.id, title: card.title, agency: card.agency || card.agencyCode, icon: cat.icon, url: card.url });
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

  const dynamicByAudience = useMemo(() => {
    const map = new Map<Audience, DynamicItem[]>();
    for (const a of AUDIENCES) {
      if (a.id === 'Cidadão') continue;
      map.set(a.id, buildDynamic(categories, a.categoriesHint));
    }
    return map;
  }, [categories]);

  const isCidadao = active === 'Cidadão';

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
          {isCidadao
            ? CIDADAO_FEATURED_CARDS.map((svc) =>
                svc.redirectUrl ? (
                  <li key={svc.id} className={styles.cell}>
                    <a
                      href={svc.redirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.card}
                      aria-label={`${svc.title} — ${svc.agency}. Abre o serviço no portal em nova aba.`}
                    >
                      <span className={`material-icons ${styles.cardIcon}`} aria-hidden="true">{svc.icon}</span>
                      <div className={styles.cardBody}>
                        <p className={styles.cardAgency}>{svc.agency}</p>
                        <h3 className={styles.cardTitle}>{svc.title}</h3>
                      </div>
                    </a>
                  </li>
                ) : (
                  <li key={svc.id} className={styles.cell}>
                    <Link
                      to={`/servico/${svc.id}`}
                      className={styles.card}
                      aria-label={`${svc.title} — ${svc.agency}`}
                    >
                      <span className={`material-icons ${styles.cardIcon}`} aria-hidden="true">{svc.icon}</span>
                      <div className={styles.cardBody}>
                        <p className={styles.cardAgency}>{svc.agency}</p>
                        <h3 className={styles.cardTitle}>{svc.title}</h3>
                      </div>
                    </Link>
                  </li>
                ),
              )
            : (dynamicByAudience.get(active) ?? []).map((item) => (
                <li key={item.id} className={styles.cell}>
                  <a
                    href={item.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                    aria-label={`${item.title} — ${item.agency}. Abre em nova aba.`}
                  >
                    <span className={`material-icons ${styles.cardIcon}`} aria-hidden="true">{item.icon}</span>
                    <div className={styles.cardBody}>
                      <p className={styles.cardAgency}>{item.agency}</p>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                    </div>
                  </a>
                </li>
              ))
          }
        </ul>
      </LayoutContainer>
    </section>
  );
}
