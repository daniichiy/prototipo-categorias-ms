import { useState, forwardRef } from 'react';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceHero.module.css';

interface Props {
  icon: string;
  title: string;
  popularName?: string;
  truncateAt?: number;
}

export const ServiceHero = forwardRef<HTMLDivElement, Props>(function ServiceHero(
  { icon, title, popularName, truncateAt = 60 },
  ref,
) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = !!popularName && popularName.length > truncateAt;
  const short = needsTruncate ? popularName!.slice(0, truncateAt) : popularName ?? '';

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
                {expanded ? popularName : short}
                {needsTruncate && (
                  <>
                    {!expanded && '… '}
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
