import { useParams, Link, Navigate } from 'react-router-dom';
import { CIDADAO_FEATURED } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPage.module.css';

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = CIDADAO_FEATURED.find((s) => s.id === id);

  if (!service) return <Navigate to="/" replace />;

  return (
    <main className={styles.page}>
      <div className={styles.heroBand}>
        <LayoutContainer>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol className={styles.breadcrumbList}>
              <li><Link to="/">Portal MS</Link></li>
              <li aria-hidden="true" className={styles.sep}>›</li>
              <li><Link to={`/categoria/${service.categorySlug}`}>{service.category}</Link></li>
              <li aria-hidden="true" className={styles.sep}>›</li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <div className={styles.heroContent}>
            <span className={`material-icons ${styles.heroIcon}`} aria-hidden="true">
              {service.icon}
            </span>
            <div>
              <p className={styles.agencyLabel}>{service.agency}</p>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <span className={`${styles.channelBadge} ${styles[`channel${service.channel.replace(/\s/g, '').replace('e', 'E')}`]}`}>
                <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>
                  {service.channel === 'Online' ? 'computer' : service.channel === 'Presencial' ? 'place' : 'sync_alt'}
                </span>
                {service.channel}
              </span>
            </div>
          </div>
        </LayoutContainer>
      </div>

      <LayoutContainer>
        <div className={styles.layout}>
          <article className={styles.content}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>O que é este serviço?</h2>
              <p className={styles.sectionText}>{service.description}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Instruções para realizar o serviço</h2>
              <ol className={styles.stepList}>
                {service.instructions.map((inst) => (
                  <li key={inst.step} className={styles.stepItem}>
                    <span className={styles.stepNumber}>{inst.step}</span>
                    <div className={styles.stepBody}>
                      <p className={styles.stepText}>{inst.text}</p>
                      {inst.link && (
                        <a
                          href={inst.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.stepLink}
                        >
                          <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>open_in_new</span>
                          {inst.linkLabel ?? inst.link}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Quem pode utilizar este serviço?</h2>
              <p className={styles.sectionText}>{service.whoCanUse}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Onde é o serviço?</h2>
              <p className={styles.sectionText}>{service.where}</p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Prazos</h2>
              <p className={styles.sectionText}>{service.deadline}</p>
            </section>

            {service.otherInfo && service.otherInfo.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Outras Informações</h2>
                <dl className={styles.infoList}>
                  {service.otherInfo.map((info) => (
                    <div key={info.title} className={styles.infoItem}>
                      <dt className={styles.infoTerm}>{info.title}</dt>
                      <dd className={styles.infoDef}>{info.content}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <div className={styles.ratingBlock}>
              <p className={styles.ratingQuestion}>Esta informação foi útil para você?</p>
              <div className={styles.ratingButtons}>
                <button type="button" className={`${styles.ratingBtn} ${styles.ratingYes}`}>
                  <span className="material-icons" aria-hidden="true">thumb_up</span>
                  Sim
                </button>
                <button type="button" className={`${styles.ratingBtn} ${styles.ratingNo}`}>
                  <span className="material-icons" aria-hidden="true">thumb_down</span>
                  Não
                </button>
              </div>
            </div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Acessar serviço</h3>
              {service.externalUrl ? (
                <a
                  href={service.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sideBtn}
                >
                  <span className="material-icons" aria-hidden="true">open_in_new</span>
                  Acessar no portal oficial
                </a>
              ) : (
                <p className={styles.sideMuted}>Atendimento presencial. Consulte o endereço abaixo.</p>
              )}
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Canal de atendimento</h3>
              <p className={styles.sideText}>
                <span className="material-icons" aria-hidden="true" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>
                  {service.channel === 'Online' ? 'computer' : service.channel === 'Presencial' ? 'place' : 'sync_alt'}
                </span>
                {service.channel}
              </p>
            </div>

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Órgão responsável</h3>
              <p className={styles.sideText}>{service.agency}</p>
            </div>

            <Link to="/" className={styles.backLink}>
              <span className="material-icons" aria-hidden="true">arrow_back</span>
              Voltar à página inicial
            </Link>
          </aside>
        </div>
      </LayoutContainer>
    </main>
  );
}
