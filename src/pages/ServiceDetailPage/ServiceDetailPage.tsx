import { CIDADAO_FEATURED, type ServiceDetail } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPage.module.css';
import { useAccordionSections } from './hooks/useAccordionSections';
import { useStickyOnScroll } from './hooks/useStickyOnScroll';
import { usePdfExport } from './hooks/usePdfExport';
import { ServiceTopBar } from './components/ServiceTopBar';
import { ServiceHero } from './components/ServiceHero';
import { ServiceMetaBar } from './components/ServiceMetaBar';
import { ServiceStartButton } from './components/ServiceStartButton';
import { ServiceSidebar } from './components/ServiceSidebar';
import { RatingFeedback } from './components/RatingFeedback';
import { DescriptionSection } from './components/sections/DescriptionSection';
import { InstructionsSection } from './components/sections/InstructionsSection';
import { RequirementsSection } from './components/sections/RequirementsSection';
import { WhoCanUseSection } from './components/sections/WhoCanUseSection';
import { MoreInfoSection } from './components/sections/MoreInfoSection';

const DEFAULT_SERVICE = CIDADAO_FEATURED.find((s) => s.id === 'boletim-acidente-transito')!;

interface Props {
  service?: ServiceDetail;
}

export function ServiceDetailPage({ service = DEFAULT_SERVICE }: Props) {
  const sections = useAccordionSections(['descricao']);
  const { ref: heroRef, stuck: showStickyBar } = useStickyOnScroll<HTMLDivElement>();

  const { exportPdf, isGenerating } = usePdfExport(service);

  const rating = service.rating ?? 4.5;
  const ratingCount = service.ratingCount ?? 892;
  const updatedAt = service.updatedAt ?? '—';

  return (
    <main className={styles.page}>
      <ServiceTopBar category={service.category} categorySlug={service.categorySlug} />

      {showStickyBar && (
        <div
          className={styles.stickyBar}
          role="banner"
          aria-label="Barra de acesso rápido ao serviço"
        />
      )}

      <ServiceHero
        ref={heroRef}
        icon={service.icon}
        title={service.title}
        popularName={service.popularName}
        channel={service.channel}
      />

      <ServiceMetaBar
        updatedAt={updatedAt}
        rating={rating}
        ratingCount={ratingCount}
        isExportingPdf={isGenerating}
        onExportPdf={exportPdf}
      />

      <LayoutContainer>
        <div className={styles.contentGrid}>
          <article className={styles.accordionCol}>
            <DescriptionSection
              description={service.description}
              open={sections.isOpen('descricao')}
              onToggle={sections.toggle}
            />
            <InstructionsSection
              instructions={service.instructions}
              open={sections.isOpen('instrucoes')}
              onToggle={sections.toggle}
            />
            <RequirementsSection
              requirements={service.requirements}
              open={sections.isOpen('documentos')}
              onToggle={sections.toggle}
            />
            <WhoCanUseSection
              whoCanUse={service.whoCanUse}
              open={sections.isOpen('quem')}
              onToggle={sections.toggle}
            />
            {service.otherInfo && service.otherInfo.length > 0 && (
              <MoreInfoSection
                otherInfo={service.otherInfo}
                open={sections.isOpen('saibaMais')}
                onToggle={sections.toggle}
              />
            )}

          </article>

          {/* Coluna direita no desktop (botão Iniciar + sidebar). No mobile vira
              display:contents → botão fica no topo e a sidebar vai após as seções. */}
          <div className={styles.sidebarColumn}>
            {service.externalUrl && (
              <div className={styles.startWrap}>
                <ServiceStartButton url={service.externalUrl} />
              </div>
            )}
            <div className={styles.sidebarWrap}>
              <ServiceSidebar service={service} />
            </div>
          </div>

          <div className={styles.feedbackWrap}>
            <RatingFeedback />
          </div>
        </div>
      </LayoutContainer>
    </main>
  );
}
