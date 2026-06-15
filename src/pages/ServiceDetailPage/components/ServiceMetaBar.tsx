import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceMetaBar.module.css';
import { StarRating } from './StarRating';

interface Props {
  updatedAt: string;
  rating: number;
  ratingCount: number;
  isExportingPdf: boolean;
  onExportPdf: () => void;
}

export function ServiceMetaBar({
  updatedAt,
  rating,
  ratingCount,
  isExportingPdf,
  onExportPdf,
}: Props) {
  return (
    <div className={styles.metaBar}>
      <LayoutContainer>
        <div className={styles.metaBarInner}>
          <span className={styles.metaDate}>Atualizado em: {updatedAt}</span>

          <StarRating rating={rating} count={ratingCount} />

          <div className={styles.metaActions}>
            <button type="button" className={styles.metaActionBtn} aria-label="Favoritar serviço">
              <span className="material-icons">bookmark_border</span>
            </button>
            <button
              type="button"
              className={styles.metaActionBtn}
              aria-label="Exportar PDF"
              onClick={onExportPdf}
              disabled={isExportingPdf}
              style={{
                opacity: isExportingPdf ? 0.5 : 1,
                cursor: isExportingPdf ? 'wait' : 'pointer',
              }}
            >
              <span className="material-icons">picture_as_pdf</span>
            </button>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}
