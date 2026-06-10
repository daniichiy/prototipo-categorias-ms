import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CIDADAO_FEATURED } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPageV3.module.css';

type SectionKey = 'descricao' | 'instrucoes' | 'quem' | 'onde' | 'prazos' | 'outras';

function AccordionSection({
  id,
  title,
  open,
  onToggle,
  children,
}: {
  id: SectionKey;
  title: string;
  open: boolean;
  onToggle: (id: SectionKey) => void;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.accordion} ${open ? styles.accordionOpen : ''}`}>
      <button
        type="button"
        className={styles.accordionHeader}
        aria-expanded={open}
        onClick={() => onToggle(id)}
      >
        <span className={styles.accordionTitle}>{title}</span>
        <span className={`material-icons ${styles.accordionIcon} ${open ? styles.accordionIconOpen : ''}`} aria-hidden="true">
          expand_more
        </span>
      </button>

      <div className={styles.accordionBody} aria-hidden={!open}>
        <div className={styles.accordionBodyInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Layout específico para o Boletim de acidente: seções em accordion + serviços relacionados
const service = CIDADAO_FEATURED.find((s) => s.id === 'boletim-acidente-transito')!;

const ALL_SECTIONS: SectionKey[] = ['descricao', 'instrucoes', 'quem', 'onde', 'prazos', 'outras'];

const RELATED_SERVICES = [
  {
    id: 'boletim-ocorrencias-online',
    title: 'Registrar boletim de ocorrências',
    icon: 'local_police',
    category: 'Justiça e Segurança',
  },
  {
    id: 'consultar-boletim-ocorrencias',
    title: 'Consultar boletim de ocorrências',
    icon: 'manage_search',
    category: 'Justiça e Segurança',
  },
  {
    id: 'antecedentes-criminais',
    title: 'Solicitar antecedentes criminais',
    icon: 'description',
    category: 'Justiça e Segurança',
  },
];

export function ServiceDetailPageV3() {
  const [openSections, setOpenSections] = useState<Set<SectionKey>>(new Set(['descricao']));
  const [showStickyBar, setShowStickyBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const toggle = (key: SectionKey) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isOpen = (key: SectionKey) => openSections.has(key);

  const allExpanded = ALL_SECTIONS.every((k) => openSections.has(k));

  const toggleAll = () => {
    setOpenSections(allExpanded ? new Set() : new Set(ALL_SECTIONS));
  };

  const channelIcon =
    service.channel === 'Online' ? 'computer' :
    service.channel === 'Presencial' ? 'place' : 'sync_alt';

  return (
    <main className={styles.page}>
      {showStickyBar && (
        <div className={styles.stickyBar} role="banner" aria-label="Barra de acesso rápido ao serviço">
          <LayoutContainer>
            <div className={styles.stickyBarInner}>
              {service.externalUrl && (
                <a
                  href={service.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.stickyBarBtn}
                  aria-label="Acessar serviço no portal oficial"
                >
                  Acessar serviço
                </a>
              )}
            </div>
          </LayoutContainer>
        </div>
      )}

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
            </div>
          </div>
        </LayoutContainer>
      </div>

      <LayoutContainer>
        <div className={styles.layout}>
          <article className={styles.content}>
            <div className={styles.accordionToolbar}>
              <button
                type="button"
                className={styles.expandAllBtn}
                onClick={toggleAll}
                aria-expanded={allExpanded}
              >
                <span className="material-icons" aria-hidden="true">
                  {allExpanded ? 'unfold_less' : 'unfold_more'}
                </span>
                {allExpanded ? 'Recolher' : 'Expandir'}
              </button>
            </div>

            <AccordionSection id="descricao" title="O que é este serviço?" open={isOpen('descricao')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.description}</p>
            </AccordionSection>

            <AccordionSection id="instrucoes" title="Instruções para realizar o serviço" open={isOpen('instrucoes')} onToggle={toggle}>
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
            </AccordionSection>

            <AccordionSection id="quem" title="Quem pode utilizar este serviço?" open={isOpen('quem')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.whoCanUse}</p>
            </AccordionSection>

            <AccordionSection id="onde" title="Onde é o serviço?" open={isOpen('onde')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.where}</p>
            </AccordionSection>

            <AccordionSection id="prazos" title="Prazos" open={isOpen('prazos')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.deadline}</p>
            </AccordionSection>

            {service.otherInfo && service.otherInfo.length > 0 && (
              <AccordionSection id="outras" title="Outras Informações" open={isOpen('outras')} onToggle={toggle}>
                <dl className={styles.infoList}>
                  {service.otherInfo.map((info) => (
                    <div key={info.title} className={styles.infoItem}>
                      <dt className={styles.infoTerm}>{info.title}</dt>
                      <dd className={styles.infoDef}>{info.content}</dd>
                    </div>
                  ))}
                </dl>
              </AccordionSection>
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
              <h3 className={styles.sideTitle}>Canal de atendimento</h3>
              <p className={styles.sideText}>
                <span className="material-icons" aria-hidden="true" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 4 }}>
                  {channelIcon}
                </span>
                {service.channel}
              </p>
            </div>

            {/* Serviços relacionados na lateral */}
            <section className={styles.relatedSection}>
              <h2 className={styles.relatedTitle}>Serviços relacionados</h2>
              <div className={styles.relatedGrid}>
                {RELATED_SERVICES.map((rel) => (
                  <Link key={rel.id} to={`/servico/${rel.id}`} className={styles.relatedCard}>
                    <span className={`material-icons ${styles.relatedCardIcon}`} aria-hidden="true">
                      {rel.icon}
                    </span>
                    <div className={styles.relatedCardBody}>
                      <p className={styles.relatedCardTitle}>{rel.title}</p>
                      <p className={styles.relatedCardCategory}>{rel.category}</p>
                    </div>
                    <span className={`material-icons ${styles.relatedCardArrow}`} aria-hidden="true">
                      chevron_right
                    </span>
                  </Link>
                ))}
              </div>
            </section>

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
