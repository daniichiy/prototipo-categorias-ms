import styles from './SiteFooter.module.css';

const COLUMNS = [
  {
    title: 'SOBRE O MS.GOV.BR',
    links: [
      { label: 'O Portal', href: 'https://www.ms.gov.br/pagina/sobre-o-portal' },
      { label: 'Acessibilidade', href: 'https://www.ms.gov.br/pagina/acessibilidade' },
      { label: 'Mapa do site', href: 'https://www.ms.gov.br/pagina/mapa-do-site' },
    ],
  },
  {
    title: 'CONHEÇA MS',
    links: [
      { label: 'História', href: 'https://www.ms.gov.br/pagina/historia-de-ms' },
      { label: 'Símbolos', href: 'https://www.ms.gov.br/pagina/simbolos' },
      { label: 'Municípios', href: 'https://www.ms.gov.br/pagina/municipios' },
    ],
  },
  {
    title: 'INFORMAÇÕES',
    links: [
      { label: 'Agência de Notícias', href: 'https://agenciadenoticias.ms.gov.br/' },
      { label: 'Imprensa Oficial', href: 'https://www.imprensaoficial.ms.gov.br/' },
      { label: 'Concursos Públicos', href: 'https://www.concursos.ms.gov.br/' },
      { label: 'Compras Públicas', href: 'https://www.compras.ms.gov.br/' },
    ],
  },
  {
    title: 'NAVEGAÇÃO',
    links: [
      { label: 'Categorias', href: '#categorias' },
      { label: 'Serviços em destaque', href: '#destaque' },
      { label: 'Indicadores', href: '#indicadores' },
      { label: 'Apps do governo', href: '#apps' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBand}>
        <div className={styles.topInner}>
          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.column}>
              <p className={styles.columnTitle}>{col.title}</p>
              <ul className={styles.columnList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.addressBand}>
        <div className={styles.addressInner}>
          <div className={styles.addressBlock}>
            <p className={styles.addressTitle}>Governadoria do Estado de Mato Grosso do Sul</p>
            <p className={styles.addressLine}>Av. do Poeta Manoel de Barros</p>
            <p className={styles.addressLine}>Parque dos Poderes Governador Pedro Pedrossian</p>
            <p className={styles.addressLine}>Campo Grande — MS · CEP 79031-350</p>
            <a
              href="https://maps.app.goo.gl/SARZdG9Hw3NoxGUUA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <span className="material-icons" aria-hidden="true">place</span>
              Ver no mapa
            </a>
          </div>

          <div className={styles.brandBadge} aria-hidden="true">
            <span className={styles.badgeKicker}>GOVERNO DO ESTADO</span>
            <span className={styles.badgeName}>Mato Grosso do Sul</span>
            <span className={styles.badgeFlag} />
          </div>
        </div>
      </div>

      <div className={styles.setdigBand}>
        <div className={styles.setdigInner}>
          <p className={styles.setdigText}>
            <strong>SETDIG</strong> · Secretaria-Executiva de Transformação Digital
          </p>
          <ul className={styles.setdigLinks}>
            <li>
              <a href="https://www.ms.gov.br/pagina/termos-de-uso4858" target="_blank" rel="noopener noreferrer">
                Termos de uso
              </a>
            </li>
            <li>
              <a href="https://www.ms.gov.br/pagina/politica-de-privacidade7748" target="_blank" rel="noopener noreferrer">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
