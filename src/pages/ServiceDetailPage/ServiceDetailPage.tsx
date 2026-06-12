import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { CIDADAO_FEATURED } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPage.module.css';

type SectionKey = 'descricao' | 'instrucoes' | 'documentos' | 'quem' | 'saibaMais';
const ALL_SECTIONS: SectionKey[] = ['descricao', 'instrucoes', 'documentos', 'quem', 'saibaMais'];

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
        <span
          className={`material-icons ${styles.accordionIcon} ${open ? styles.accordionIconOpen : ''}`}
          aria-hidden="true"
        >
          expand_more
        </span>
      </button>
      <div className={styles.accordionBody} aria-hidden={!open}>
        <div className={styles.accordionBodyInner}>{children}</div>
      </div>
    </div>
  );
}

const service = CIDADAO_FEATURED.find((s) => s.id === 'boletim-acidente-transito')!;

export function ServiceDetailPage() {
  const [openSections, setOpenSections] = useState<Set<SectionKey>>(new Set(['descricao']));
  const [popularExpanded, setPopularExpanded] = useState(false);
  const [thumbVote, setThumbVote] = useState<'up' | 'down' | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 },
    );
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const handleDownloadPDF = async () => {
    if (!pdfRef.current || isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    // Expandir todas as sessões para o PDF se não estiverem
    const previousSections = new Set(openSections);
    setOpenSections(new Set(ALL_SECTIONS));

    try {
      // Aguarda o React renderizar as sessões abertas
      await new Promise(resolve => setTimeout(resolve, 300));

      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`carta-de-servico-${service.id}.pdf`);
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
    } finally {
      // Restaurar estado anterior
      setOpenSections(previousSections);
      setIsGeneratingPdf(false);
    }
  };

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
  const toggleAll = () => setOpenSections(allExpanded ? new Set() : new Set(ALL_SECTIONS));

  const rating = service.rating ?? 4.5;
  const ratingCount = service.ratingCount ?? 892;
  const updatedAt = service.updatedAt ?? '—';

  const channelIcon =
    service.channel === 'Online' ? 'computer' :
      service.channel === 'Presencial' ? 'place' : 'sync_alt';

  const popularShort =
    service.popularName && service.popularName.length > 60
      ? service.popularName.slice(0, 60)
      : service.popularName ?? '';

  return (
    <main className={styles.page} ref={pdfRef}>
      {/* Top Search Bar */}
      <div className={styles.topSearchContainer}>
        <LayoutContainer>
          <div className={styles.topSearchWrapper}>
            <input
              type="text"
              placeholder="Pesquisar novo serviço..."
              className={styles.topSearchInput}
            />
            <button className={styles.topSearchBtn}>
              <span className="material-icons">search</span>
            </button>
          </div>
        </LayoutContainer>
      </div>

      {showStickyBar && (
        <div className={styles.stickyBar} role="banner" aria-label="Barra de acesso rápido ao serviço">

        </div>
      )}

      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <LayoutContainer>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumbList}>
              <li>
                <Link to="/" aria-label="Página inicial">
                  <span className="material-icons" aria-hidden="true" style={{ fontSize: 16, verticalAlign: 'middle' }}>
                    home
                  </span>
                </Link>
              </li>
              <li aria-hidden="true" className={styles.sep}>/</li>
              <li>
                <Link to={`/categoria/${service.categorySlug}`} className={styles.breadcrumbLink}>
                  {service.category}
                </Link>
              </li>
            </ol>
          </nav>
        </LayoutContainer>
      </div>

      {/* Hero */}
      <div ref={heroRef} className={styles.hero}>
        <LayoutContainer>
          <div className={styles.heroInner}>
            <span className={`material-icons ${styles.heroIcon}`} aria-hidden="true">
              {service.icon}
            </span>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              {service.popularName && (
                <p className={styles.heroPopular}>
                  {popularExpanded ? service.popularName : popularShort}
                  {service.popularName.length > 60 && (
                    <>
                      {!popularExpanded && '… '}
                      <button
                        type="button"
                        className={styles.verMaisBtn}
                        onClick={() => setPopularExpanded((e) => !e)}
                      >
                        {popularExpanded ? 'ver menos' : 'ver mais'}
                      </button>
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        </LayoutContainer>
      </div>

      {/* Meta bar */}
      <div className={styles.metaBar}>
        <LayoutContainer>
          <div className={styles.metaBarInner}>
            <span className={styles.metaDate}>Atualizado em: {updatedAt}</span>

            <div
              className={styles.metaRatingWrapper}
              aria-label={`Avaliação: ${rating.toFixed(1)} de 5 estrelas, ${ratingCount.toLocaleString('pt-BR')} avaliações`}
            >
              <span className={styles.metaRatingLabel}>Avaliação:</span>
              <div className={styles.metaRatingPill}>
                <span className={styles.metaRatingScore}>{rating.toFixed(1).replace('.', ',')}</span>
                <span className={styles.metaStars} aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const fill = Math.min(1, Math.max(0, rating - (star - 1)));
                    const icon = fill >= 0.75 ? 'star' : fill >= 0.25 ? 'star_half' : 'star_border';
                    return (
                      <span key={star} className="material-icons" style={{ fontSize: 18 }}>
                        {icon}
                      </span>
                    );
                  })}
                </span>
                <span className={styles.metaRatingCount}>({ratingCount.toLocaleString('pt-BR')})</span>
              </div>
            </div>

            <div className={styles.metaActions}>
              <button type="button" className={styles.metaActionBtn} aria-label="Favoritar serviço">
                <span className="material-icons">bookmark_border</span>
              </button>
              <button
                type="button"
                className={styles.metaActionBtn}
                aria-label="Exportar PDF"
                onClick={handleDownloadPDF}
                style={{ opacity: isGeneratingPdf ? 0.5 : 1, cursor: isGeneratingPdf ? 'wait' : 'pointer' }}
                disabled={isGeneratingPdf}
              >
                <span className="material-icons">picture_as_pdf</span>
              </button>
            </div>
          </div>
        </LayoutContainer>
      </div>

      {/* Conteúdo principal */}
      <LayoutContainer>
        <div className={styles.contentGrid}>
          <article className={styles.accordionCol}>
            <AccordionSection id="descricao" title="O que é este serviço?" open={isOpen('descricao')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.description}</p>
            </AccordionSection>

            <AccordionSection id="instrucoes" title="Como fazer" open={isOpen('instrucoes')} onToggle={toggle}>
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
                          <span className="material-icons" aria-hidden="true" style={{ fontSize: 14 }}>
                            open_in_new
                          </span>
                          {inst.linkLabel ?? inst.link}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </AccordionSection>

            <AccordionSection id="documentos" title="Documentos necessários" open={isOpen('documentos')} onToggle={toggle}>
              {service.requirements && service.requirements.length > 0 ? (
                <ul className={styles.docList}>
                  {service.requirements.map((req, i) => (
                    <li key={i} className={styles.docItem}>{req}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.sectionText}>
                  Não há documentos específicos exigidos além dos informados nas instruções do serviço.
                </p>
              )}
            </AccordionSection>

            <AccordionSection id="quem" title="Quem pode utilizar este serviço?" open={isOpen('quem')} onToggle={toggle}>
              <p className={styles.sectionText}>{service.whoCanUse}</p>
            </AccordionSection>

            {service.otherInfo && service.otherInfo.length > 0 && (
              <AccordionSection id="saibaMais" title="Saiba mais" open={isOpen('saibaMais')} onToggle={toggle}>
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

            {/* Bloco de avaliação */}
            <div className={styles.ratingBlock}>
              <div className={styles.ratingThumbs}>
                <button
                  type="button"
                  className={`${styles.thumbBtn} ${thumbVote === 'up' ? styles.thumbActive : ''}`}
                  aria-label="Útil"
                  aria-pressed={thumbVote === 'up'}
                  onClick={() => setThumbVote((v) => (v === 'up' ? null : 'up'))}
                >
                  <span className="material-icons">thumb_up_off_alt</span>
                </button>
                <button
                  type="button"
                  className={`${styles.thumbBtn} ${thumbVote === 'down' ? styles.thumbActiveDown : ''}`}
                  aria-label="Não útil"
                  aria-pressed={thumbVote === 'down'}
                  onClick={() => setThumbVote((v) => (v === 'down' ? null : 'down'))}
                >
                  <span className="material-icons">thumb_down_off_alt</span>
                </button>
              </div>
              <button type="button" className={styles.feedbackBtn}>
                Como podemos melhorar o texto?
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {service.externalUrl && (
              <a
                href={service.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnIniciar}
              >
                Iniciar
              </a>
            )}

            <div className={styles.channelBadge}>
              <span className={`material-icons ${styles.channelIcon}`} aria-hidden="true">account_balance</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Órgão</span>
                <span>{service.agency}</span>
              </div>
            </div>

            <div className={styles.channelBadge}>
              <span className={`material-icons ${styles.channelIcon}`} aria-hidden="true">schedule</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Prazos</span>
                <span>{service.deadline}</span>
              </div>
            </div>

            <div className={styles.channelBadge}>
              <span className={`material-icons ${styles.channelIcon}`} aria-hidden="true">payments</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Custo</span>
                <span>{service.costs || 'Gratuito'}</span>
              </div>
            </div>

            <div className={styles.channelBadge}>
              <span className={`material-icons ${styles.channelIcon}`} aria-hidden="true">
                {channelIcon}
              </span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Canal</span>
                <span>{service.channel}</span>
              </div>
            </div>

            <UnidadesCard />
          </aside>
        </div>
      </LayoutContainer>
    </main>
  );
}

function UnidadesCard() {
  return (
    <div className={styles.unidadesNewCard}>
      <div className={styles.unidadesNewHeader}>
        Local de Atendimento
      </div>
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
          <span className="material-icons" style={{ fontSize: 48, color: '#A9AEB1', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>map</span>
          <div className={styles.unidadesNewMapPin}>
            <span className="material-icons">location_on</span>
            <span className={styles.unidadesNewMapPinLabel}>Seid</span>
          </div>
        </div>

        <div className={styles.unidadesNewInfo}>
          <h3 className={styles.unidadesNewInfoTitle}>Secretaria para Inclusão da Pessoa com Deficiência - Sede</h3>
          <p className={styles.unidadesNewInfoText}>Rua Álvaro Mendes, , Teresina, Piauí</p>
          <p className={styles.unidadesNewInfoText}>7h30 às 13h30</p>
        </div>
      </div>
    </div>
  );
}
