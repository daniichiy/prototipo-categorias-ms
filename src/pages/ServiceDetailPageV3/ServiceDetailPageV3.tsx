import { useState } from 'react';
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

// Layout específico para o Boletim de acidente: seções em accordion
const service = CIDADAO_FEATURED.find((s) => s.id === 'boletim-acidente-transito')!;

export function ServiceDetailPageV3() {
  const [openSections, setOpenSections] = useState<Set<SectionKey>>(new Set(['descricao']));

  const toggle = (key: SectionKey) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isOpen = (key: SectionKey) => openSections.has(key);

  const channelIcon =
    service.channel === 'Online' ? 'computer' :
    service.channel === 'Presencial' ? 'place' : 'sync_alt';

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
