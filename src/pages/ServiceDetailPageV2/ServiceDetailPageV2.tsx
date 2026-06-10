import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CIDADAO_FEATURED } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPageV2.module.css';

// Layout específico para o serviço CRLV-e: botão de acesso ao lado do título + perfis na sidebar
const service = CIDADAO_FEATURED.find((s) => s.id === 'emitir-crlv-e')!;

const SERVICE_RATING = 4.2;
const SERVICE_RATING_COUNT = 1406;

export function ServiceDetailPageV2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const channelIcon =
    service.channel === 'Online' ? 'computer' :
    service.channel === 'Presencial' ? 'place' : 'sync_alt';

  return (
    <main className={styles.page}>
      {/* Barra sticky — aparece quando o hero some da tela */}
      <div className={`${styles.stickyBar} ${showStickyBar ? styles.stickyBarVisible : ''}`} aria-hidden={!showStickyBar}>
        <div className={styles.stickyBarInner}>
          <p className={styles.stickyBarTitle}>{service.title}</p>
          {service.externalUrl && (
            <a
              href={service.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stickyBarBtn}
              tabIndex={showStickyBar ? 0 : -1}
            >
              Acessar serviço
            </a>
          )}
        </div>
      </div>

      <div ref={heroRef} className={styles.heroBand}>
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
            <div className={styles.heroBody}>
              <p className={styles.agencyLabel}>{service.agency}</p>

              {/* título + botão de acesso lado a lado */}
              <div className={styles.heroTitleRow}>
                <h1 className={styles.heroTitle}>{service.title}</h1>
                {service.externalUrl && (
                  <a
                    href={service.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.heroActionBtn}
                    aria-label="Acessar serviço no portal oficial"
                  >
                    Acessar serviço
                  </a>
                )}
              </div>

              {/* Avaliação estática — exibição apenas, sem interação */}
              <div className={styles.starRating} aria-label={`Avaliação: ${SERVICE_RATING} de 5 estrelas, ${SERVICE_RATING_COUNT.toLocaleString('pt-BR')} avaliações`}>
                <span className={styles.ratingScore}>{SERVICE_RATING.toFixed(1).replace('.', ',')}</span>
                {[1, 2, 3, 4, 5].map((star) => {
                  const fill = Math.min(1, Math.max(0, SERVICE_RATING - (star - 1)));
                  const icon = fill >= 0.75 ? 'star' : fill >= 0.25 ? 'star_half' : 'star_border';
                  return (
                    <span key={star} className={styles.starIcon} aria-hidden="true">
                      <span className="material-icons">{icon}</span>
                    </span>
                  );
                })}
                <span className={styles.ratingCount}>({SERVICE_RATING_COUNT.toLocaleString('pt-BR')})</span>
              </div>

              <span className={`${styles.channelBadge} ${styles[`channel${service.channel.replace(/\s/g, '').replace('e', 'E')}`]}`}>
                <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>
                  {channelIcon}
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
            {/* perfil — diferencial desta variante */}
            {service.profiles && service.profiles.length > 0 && (
              <div className={styles.sideCard}>
                <h3 className={styles.sideTitle}>Perfil</h3>
                <div className={styles.profileTagList}>
                  {service.profiles.map((p) => (
                    <span key={p} className={styles.profileTag}>
                      <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>person</span>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.sideCard}>
              <h3 className={styles.sideTitle}>Canal de atendimento</h3>
              <p className={styles.sideText}>
                <span className="material-icons" aria-hidden="true" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>
                  {channelIcon}
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
