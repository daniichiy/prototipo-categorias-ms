import styles from './UnidadesCard.module.css';

interface Unidade {
  name: string;
  address: string;
  hours: string;
  pinLabel?: string;
}

interface Props {
  title?: string;
  unidade?: Unidade;
}

const DEFAULT_UNIDADE: Unidade = {
  name: 'Secretaria para Inclusão da Pessoa com Deficiência - Sede',
  address: 'Rua Álvaro Mendes, , Teresina, Piauí',
  hours: '7h30 às 13h30',
  pinLabel: 'Seid',
};

export function UnidadesCard({ title = 'Local de Atendimento', unidade = DEFAULT_UNIDADE }: Props) {
  return (
    <div className={styles.unidadesNewCard}>
      <div className={styles.unidadesNewHeader}>{title}</div>
      <div className={styles.unidadesNewBody}>
        <div className={styles.unidadesNewSearch}>
          <input type="text" placeholder="Filtrar unidades" />
          <span className="material-icons">search</span>
        </div>

        <p className={styles.unidadesNewText}>Unidades que prestam o serviço:</p>

        <div className={styles.unidadesNewMap}>
          <a href="#" className={styles.mapLinkSmall}>
            Maps <span className="material-icons" style={{ fontSize: 14 }}>open_in_new</span>
          </a>
          <span
            className="material-icons"
            style={{
              fontSize: 48,
              color: '#A9AEB1',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            map
          </span>
          {unidade.pinLabel && (
            <div className={styles.unidadesNewMapPin}>
              <span className="material-icons">location_on</span>
              <span className={styles.unidadesNewMapPinLabel}>{unidade.pinLabel}</span>
            </div>
          )}
        </div>

        <div className={styles.unidadesNewInfo}>
          <h3 className={styles.unidadesNewInfoTitle}>{unidade.name}</h3>
          <p className={styles.unidadesNewInfoText}>{unidade.address}</p>
          <p className={styles.unidadesNewInfoText}>{unidade.hours}</p>
        </div>
      </div>
    </div>
  );
}
