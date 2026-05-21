import styles from './PromoBanner.module.css';

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  deadline?: string;
}

export function PromoBanner({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaUrl,
  deadline,
}: Props) {
  return (
    <section className={styles.banner} aria-labelledby="promo-title">
      <div className={styles.inner}>
        <div className={styles.illustration} aria-hidden="true">
          <svg viewBox="0 0 160 100" className={styles.illustrationSvg}>
            <rect x="20" y="48" width="120" height="30" rx="6" fill="#003a8c" />
            <rect x="35" y="32" width="60" height="22" rx="4" fill="#0051a8" />
            <rect x="98" y="38" width="36" height="16" rx="3" fill="#0051a8" />
            <circle cx="48" cy="80" r="10" fill="#1a1a1a" />
            <circle cx="48" cy="80" r="4" fill="#cbd5e1" />
            <circle cx="120" cy="80" r="10" fill="#1a1a1a" />
            <circle cx="120" cy="80" r="4" fill="#cbd5e1" />
            <rect x="42" y="40" width="22" height="10" rx="2" fill="#bfdbff" opacity="0.8" />
            <rect x="68" y="40" width="22" height="10" rx="2" fill="#bfdbff" opacity="0.8" />
          </svg>
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="promo-title" className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <aside className={styles.side}>
          {deadline ? (
            <div className={styles.deadline}>
              <span className={styles.deadlineLabel}>Vencimento</span>
              <span className={styles.deadlineValue}>{deadline}</span>
            </div>
          ) : null}
          <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            {ctaLabel}
            <span className="material-icons" aria-hidden="true">arrow_forward</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
