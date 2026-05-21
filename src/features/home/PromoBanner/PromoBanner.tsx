import styles from './PromoBanner.module.css';

interface Props {
  imageUrl: string;
  ctaUrl: string;
  alt?: string;
}

export function PromoBanner({
  imageUrl,
  ctaUrl,
  alt = 'Banner promocional',
}: Props) {
  return (
    <section className={styles.banner} aria-label="Destaque">
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src={imageUrl}
          alt={alt}
          className={styles.img}
          loading="eager"
          decoding="async"
        />
      </a>
    </section>
  );
}
