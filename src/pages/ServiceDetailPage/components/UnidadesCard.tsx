import styles from './UnidadesCard.module.css';

interface Unidade {
  name: string;
  address: string;
  hours?: string;
  pinLabel?: string;
  mapUrl?: string;
  embedUrl?: string;
}

interface Props {
  title?: string;
  unidades?: Unidade[];
}

const DEFAULT_UNIDADES: Unidade[] = [
  {
    name: '6º Batalhão de Polícia Militar',
    address: 'R. Treze de Junho, 1173 - Dom Bosco, Campo Grande - MS',
    pinLabel: 'PMMS',
    mapUrl:
      'https://www.google.com/maps?ll=-19.00405,-57.663937&z=16&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=11433620607000890705',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7544.711015622126!2d-57.663937!3d-19.00405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9387a0928b5033d9%3A0x9eac615d38dfcd51!2s6%C2%BA%20Batalh%C3%A3o%20de%20Policia%20Militar!5e0!3m2!1spt-BR!2sus!4v1781526149559!5m2!1spt-BR!2sus',
  },
  {
    name: '8º Batalhão de Polícia Militar',
    address: 'Rua Odilon Ribeiro dos Santos, 561 - Cohab III, Campo Grande - MS',
    pinLabel: 'PMMS',
  },
];

export function UnidadesCard({ title = 'Local de Atendimento', unidades = DEFAULT_UNIDADES }: Props) {
  const mapUrl = unidades.find((u) => u.mapUrl)?.mapUrl;
  const pinLabel = unidades.find((u) => u.pinLabel)?.pinLabel;
  const embedUrl = unidades.find((u) => u.embedUrl)?.embedUrl;

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
          <a
            href={mapUrl ?? '#'}
            target={mapUrl ? '_blank' : undefined}
            rel={mapUrl ? 'noopener noreferrer' : undefined}
            className={styles.mapLinkSmall}
          >
            Maps <span className="material-icons" style={{ fontSize: 14 }}>open_in_new</span>
          </a>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Mapa das unidades"
              className={styles.unidadesNewMapFrame}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <>
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
              {pinLabel && (
                <div className={styles.unidadesNewMapPin}>
                  <span className="material-icons">location_on</span>
                  <span className={styles.unidadesNewMapPinLabel}>{pinLabel}</span>
                </div>
              )}
            </>
          )}
        </div>

        {unidades.map((unidade, i) => (
          <div key={i} className={styles.unidadesNewInfo}>
            <h3 className={styles.unidadesNewInfoTitle}>{unidade.name}</h3>
            <p className={styles.unidadesNewInfoText}>{unidade.address}</p>
            {unidade.hours && <p className={styles.unidadesNewInfoText}>{unidade.hours}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
