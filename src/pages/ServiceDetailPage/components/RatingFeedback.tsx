import { useState } from 'react';
import styles from './RatingFeedback.module.css';

type Vote = 'up' | 'down' | null;

export function RatingFeedback() {
  const [vote, setVote] = useState<Vote>(null);

  const toggleVote = (next: Exclude<Vote, null>) =>
    setVote((v) => (v === next ? null : next));

  return (
    <div className={styles.ratingBlock}>
      <div className={styles.ratingThumbs}>
        <button
          type="button"
          className={`${styles.thumbBtn} ${vote === 'up' ? styles.thumbActive : ''}`}
          aria-label="Útil"
          aria-pressed={vote === 'up'}
          onClick={() => toggleVote('up')}
        >
          <span className="material-icons">thumb_up_off_alt</span>
        </button>
        <button
          type="button"
          className={`${styles.thumbBtn} ${vote === 'down' ? styles.thumbActiveDown : ''}`}
          aria-label="Não útil"
          aria-pressed={vote === 'down'}
          onClick={() => toggleVote('down')}
        >
          <span className="material-icons">thumb_down_off_alt</span>
        </button>
      </div>
      <button type="button" className={styles.feedbackBtn}>
        Como podemos melhorar o texto?
      </button>
    </div>
  );
}
