import { useState, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import type { ServiceDetail } from '@/data/featuredServices';

/* Cor primária (faixa azul) em RGB — espelha var(--color-primary). */
const PRIMARY: [number, number, number] = [10, 79, 159];

/**
 * Gera a carta de serviço como PDF de texto formatado (não screenshot) e
 * dispara o download. Documento A4, cabeçalho azul com título + órgão e as
 * mesmas seções exibidas na página.
 */
export function usePdfExport(service: ServiceDetail) {
  const [isGenerating, setIsGenerating] = useState(false);

  const exportPdf = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const marginX = 15;
      const marginTop = 15;
      const marginBottom = 18;
      const contentW = pageW - marginX * 2;

      let y = marginTop;

      const ensureSpace = (needed: number) => {
        if (y + needed > pageH - marginBottom) {
          pdf.addPage();
          y = marginTop;
        }
      };

      const addParagraph = (
        text: string,
        opts: { size?: number; style?: 'normal' | 'bold' | 'italic'; gap?: number; color?: [number, number, number] } = {},
      ) => {
        const { size = 11, style = 'normal', gap = 4, color = [0, 0, 0] } = opts;
        pdf.setFont('helvetica', style);
        pdf.setFontSize(size);
        pdf.setTextColor(...color);
        const lines = pdf.splitTextToSize(text, contentW) as string[];
        const lineH = size * 0.45;
        for (const line of lines) {
          ensureSpace(lineH);
          pdf.text(line, marginX, y);
          y += lineH;
        }
        y += gap;
      };

      /* Linha "Rótulo: valor" com rótulo em negrito e valor normal, com quebra. */
      const addLabelValue = (label: string, value: string, gap = 2) => {
        const size = 11;
        const lineH = size * 0.45;
        pdf.setFontSize(size);
        pdf.setTextColor(0, 0, 0);

        const labelText = `${label}: `;
        pdf.setFont('helvetica', 'bold');
        const labelW = pdf.getTextWidth(labelText);

        // Quebra do valor: 1ª linha cabe ao lado do rótulo; demais usam largura cheia.
        pdf.setFont('helvetica', 'normal');
        const words = value.split(' ');
        const lines: string[] = [];
        let cur = '';
        let maxW = contentW - labelW;
        for (const w of words) {
          const test = cur ? `${cur} ${w}` : w;
          if (pdf.getTextWidth(test) > maxW && cur) {
            lines.push(cur);
            cur = w;
            maxW = contentW;
          } else {
            cur = test;
          }
        }
        if (cur) lines.push(cur);

        ensureSpace(lineH);
        pdf.setFont('helvetica', 'bold');
        pdf.text(labelText, marginX, y);
        pdf.setFont('helvetica', 'normal');
        pdf.text(lines[0] ?? '', marginX + labelW, y);
        y += lineH;
        for (let i = 1; i < lines.length; i++) {
          ensureSpace(lineH);
          pdf.text(lines[i], marginX, y);
          y += lineH;
        }
        y += gap;
      };

      const addHeading = (text: string) => {
        ensureSpace(10);
        y += 2;
        addParagraph(text, { size: 13, style: 'bold', gap: 2, color: PRIMARY });
        ensureSpace(2);
        pdf.setDrawColor(...PRIMARY);
        pdf.setLineWidth(0.4);
        pdf.line(marginX, y - 1, marginX + contentW, y - 1);
        y += 3;
      };

      /* ── Cabeçalho azul: título + órgão ─────────────────────── */
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(16);
      const titleLines = pdf.splitTextToSize(service.title, contentW) as string[];
      const agencyLineH = 5;
      const titleLineH = 7;
      const headerH = 10 + titleLines.length * titleLineH + agencyLineH + 6;
      pdf.setFillColor(...PRIMARY);
      pdf.rect(0, 0, pageW, headerH, 'F');

      let hy = marginTop + 2;
      pdf.setTextColor(255, 255, 255);
      for (const line of titleLines) {
        pdf.text(line, marginX, hy);
        hy += titleLineH;
      }
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(service.agency, marginX, hy + 1);

      y = headerH + 8;

      /* ── Meta: atualização + avaliação ──────────────────────── */
      const updatedAt = service.updatedAt ?? '—';
      const rating = service.rating ?? 0;
      const ratingCount = service.ratingCount ?? 0;
      addParagraph(
        `Atualizado em: ${updatedAt}     Avaliação: ${rating.toFixed(1)} (${ratingCount})`,
        { size: 9, color: [90, 90, 90], gap: 2 },
      );

      if (service.popularName) {
        addParagraph(`Também buscado como: ${service.popularName}`, {
          size: 9,
          style: 'italic',
          color: [90, 90, 90],
          gap: 4,
        });
      }

      /* ── Seções (mesma ordem da página) ─────────────────────── */
      addHeading('O que é este serviço?');
      addParagraph(service.description);

      addHeading('Como fazer');
      for (const step of service.instructions) {
        const linkSuffix = step.link
          ? ` (${step.linkLabel ? `${step.linkLabel}: ` : ''}${step.link})`
          : '';
        addParagraph(`${step.step}. ${step.text}${linkSuffix}`, { gap: 2 });
      }
      y += 2;

      if (service.requirements && service.requirements.length > 0) {
        addHeading('Documentos necessários');
        for (const req of service.requirements) {
          addParagraph(`•  ${req}`, { gap: 2 });
        }
        y += 2;
      }

      addHeading('Quem pode utilizar este serviço?');
      addParagraph(service.whoCanUse);

      addHeading('Informações do atendimento');
      addLabelValue('Órgão', service.agency);
      addLabelValue('Prazos', service.deadline);
      addLabelValue('Custo', service.costs || 'Gratuito');
      addLabelValue('Canal', service.channel);
      addLabelValue('Onde', service.where);
      y += 2;

      if (service.otherInfo && service.otherInfo.length > 0) {
        addHeading('Saiba mais');
        for (const info of service.otherInfo) {
          addParagraph(info.title, { style: 'bold', gap: 1 });
          addParagraph(info.content, { gap: 4 });
        }
      }

      /* ── Rodapé: página X / Y ────────────────────────────────── */
      const total = pdf.getNumberOfPages();
      for (let i = 1; i <= total; i++) {
        pdf.setPage(i);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.setTextColor(120, 120, 120);
        pdf.text(`${i} / ${total}`, pageW - marginX, pageH - 10, { align: 'right' });
      }

      pdf.save(`carta-de-servico-${service.id}.pdf`);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
    } finally {
      setIsGenerating(false);
    }
  }, [service, isGenerating]);

  return { exportPdf, isGenerating };
}
