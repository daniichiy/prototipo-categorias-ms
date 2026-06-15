import { useRef } from 'react';
import { CIDADAO_FEATURED, type ServiceDetail } from '@/data/featuredServices';
import { LayoutContainer } from '@/components/LayoutContainer';
import styles from './ServiceDetailPage.module.css';
import { ALL_SECTIONS } from './types';
import { useAccordionSections } from './hooks/useAccordionSections';
import { useStickyOnScroll } from './hooks/useStickyOnScroll';
import { usePdfExport } from './hooks/usePdfExport';
import { TopSearchBar } from './components/TopSearchBar';
import { ServiceBreadcrumb } from './components/ServiceBreadcrumb';
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
  const pdfRef = useRef<HTMLElement>(null);

  const { exportPdf, isGenerating } = usePdfExport(pdfRef, {
    fileName: `carta-de-servico-${service.id}`,
    beforeCapture: () => sections.replace(ALL_SECTIONS),
    afterCapture: () => sections.replace(['descricao']),
  });

  const rating = service.rating ?? 4.5;
  const ratingCount = service.ratingCount ?? 892;
  const updatedAt = service.updatedAt ?? '—';

  return (
    <main className={styles.page} ref={pdfRef}>
      <TopSearchBar />

      {showStickyBar && (
        <div
          className={styles.stickyBar}
          role="banner"
          aria-label="Barra de acesso rápido ao serviço"
        />
      )}

      <ServiceBreadcrumb category={service.category} categorySlug={service.categorySlug} />

      <ServiceHero
        ref={heroRef}
        icon={service.icon}
        title={service.title}
        popularName={service.popularName}
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

            <RatingFeedback />
          </article>

          {/* Botão "Iniciar" fica FORA do <aside> — sibling do sidebar dentro da coluna direita.
              Mobile: vira CTA fixo via CSS (position:fixed). */}
          <div className={styles.sidebarColumn}>
            {service.externalUrl && <ServiceStartButton url={service.externalUrl} />}
            <ServiceSidebar service={service} />
          </div>
        </div>
      </LayoutContainer>
    </main>
  );
}
