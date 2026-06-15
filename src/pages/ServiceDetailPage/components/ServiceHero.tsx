import { useState, forwardRef } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceHero.module.css';

interface Props {
  icon: string;
  title: string;
  popularName?: string;
  truncateAt?: number;
}

/** Trunca em até `max` caracteres recuando ao último limite de palavra. */
function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(' ');
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trimEnd();
}

export const ServiceHero = forwardRef<HTMLDivElement, Props>(function ServiceHero(
  { icon, title, popularName, truncateAt = 60 },
  ref,
) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = !!popularName && popularName.length > truncateAt;
  const short = needsTruncate ? truncateAtWord(popularName!, truncateAt) : popularName ?? '';

  return (
    <div ref={ref} className={styles.hero}>
      <LayoutContainer>
        <div className={styles.heroInner}>
          <span className={`material-icons ${styles.heroIcon}`} aria-hidden="true">
            {icon}
          </span>
          <div className={styles.heroBody}>
            <h1 className={styles.heroTitle}>{title}</h1>
            {popularName && (
              <p className={styles.heroPopular}>
                <span className={styles.heroPopularLabel}>Também buscado como: </span>
                <span className={styles.heroPopularText}>
                  {expanded ? popularName : short}
                  {needsTruncate && !expanded && '…'}
                </span>
                {needsTruncate && (
                  <>
                    {' '}
                    <button
                      type="button"
                      className={styles.verMaisBtn}
                      onClick={() => setExpanded((e) => !e)}
                    >
                      {expanded ? 'ver menos' : 'ver mais'}
                    </button>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
});
