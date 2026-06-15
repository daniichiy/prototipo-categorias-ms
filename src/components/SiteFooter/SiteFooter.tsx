import styles from './SiteFooter.module.css';

const COLUMNS: { title?: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'SOBRE O MS.GOV.BR',
    links: [
      { label: 'Saiba Mais', href: 'https://www.ms.gov.br/pagina/sobre-o-portal' },
      { label: 'Perguntas Frequentes', href: 'https://www.ms.gov.br/pagina/perguntas-frequentes' },
      { label: 'Avalie o Portal', href: 'https://www.ms.gov.br/pagina/avalie-o-portal' },
    ],
  },
  {
    title: 'CONHEÇA MS',
    links: [
      { label: 'Terra de Riquezas', href: 'https://www.ms.gov.br/pagina/terra-de-riquezas' },
      { label: 'História', href: 'https://www.ms.gov.br/pagina/historia-de-ms' },
      { label: 'Turismo', href: 'https://www.ms.gov.br/pagina/turismo' },
      { label: 'Bioparque Pantanal', href: 'https://www.ms.gov.br/pagina/bioparque-pantanal' },
    ],
  },
  {
    title: 'INFORMAÇÕES',
    links: [
      { label: 'Agência de Notícias', href: 'https://agenciadenoticias.ms.gov.br/' },
      { label: 'Imprensa', href: 'https://www.imprensaoficial.ms.gov.br/' },
      { label: 'Diário Oficial', href: 'https://www.diariooficial.ms.gov.br/' },
      { label: 'Transparência', href: 'https://www.transparencia.ms.gov.br/' },
      { label: 'Acesso à Informação', href: 'https://www.ms.gov.br/pagina/acesso-a-informacao' },
    ],
  },
  {
    title: 'NAVEGAÇÃO',
    links: [
      { label: 'Acessibilidade', href: 'https://www.ms.gov.br/pagina/acessibilidade' },
      { label: 'Mapa do site', href: 'https://www.ms.gov.br/pagina/mapa-do-site' },
      { label: 'LGPD', href: 'https://www.ms.gov.br/pagina/lgpd' },
    ],
  },
  {
    links: [
      { label: 'Concursos Públicos', href: 'https://www.concursos.ms.gov.br/' },
      { label: 'Compras Públicas', href: 'https://www.compras.ms.gov.br/' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBand}>
        <div className={styles.topInner}>
          {COLUMNS.map((col, index) => (
            <div key={col.title ?? `col-${index}`} className={styles.column}>
              {col.title && <p className={styles.columnTitle}>{col.title}</p>}
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
            <p className={styles.addressLine}>Campo Grande - MS</p>
            <p className={styles.addressLine}>CEP: 79031350</p>
            <a
              href="https://maps.app.goo.gl/SARZdG9Hw3NoxGUUA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <span className="material-icons" aria-hidden="true">place</span>
              MAPA
            </a>
          </div>

          <img
            src="/logo-ms-rodape.svg"
            alt="Governo de Mato Grosso do Sul — Fazer bem-feito para fazer dar certo"
            className={styles.logo}
          />
        </div>
      </div>

      <div className={styles.setdigBand}>
        <div className={styles.setdigInner}>
          <p className={styles.setdigText}>
            <strong>SETDIG</strong> | Secretaria-Executiva de Transformação Digital
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
