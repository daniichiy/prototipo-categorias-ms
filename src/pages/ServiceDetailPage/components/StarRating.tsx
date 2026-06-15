import styles from './StarRating.module.css';

interface Props {
  rating: number;
  count: number;
}

export function StarRating({ rating, count }: Props) {
  return (
    <div
      className={styles.metaRatingWrapper}
      aria-label={`Avaliação: ${rating.toFixed(1)} de 5 estrelas, ${count.toLocaleString('pt-BR')} avaliações`}
    >
      <span className={styles.metaRatingLabel} style={{ fontWeight: 700, fontSize: 16 }}>
        Avaliação:
      </span>
      <span
        className={styles.metaStars}
        style={{ display: 'flex', gap: 4, alignItems: 'center' }}
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star - 0.5;
          const color = filled ? 'var(--color-primary-600, #002F5F)' : '#EAEBEC';
          return (
            <span key={star} className="material-icons" style={{ fontSize: 24, color }}>
              star
            </span>
          );
        })}
        <span
          style={{
            fontSize: 16,
            color: 'var(--color-text-light, #6E757A)',
            marginLeft: 4,
            fontWeight: 500,
          }}
        >
          ({count.toLocaleString('pt-BR')})
        </span>
      </span>
    </div>
  );
}
