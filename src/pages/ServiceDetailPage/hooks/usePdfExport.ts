import { useState, useCallback, type RefObject } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface Options {
  fileName: string;
  beforeCapture?: () => void;
  afterCapture?: () => void;
  renderDelayMs?: number;
}

export function usePdfExport<T extends HTMLElement>(
  targetRef: RefObject<T>,
  options: Options,
) {
  const [isGenerating, setIsGenerating] = useState(false);

  const exportPdf = useCallback(async () => {
    if (!targetRef.current || isGenerating) return;
    setIsGenerating(true);
    options.beforeCapture?.();

    try {
      await new Promise((r) => setTimeout(r, options.renderDelayMs ?? 300));

      const canvas = await html2canvas(targetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = pdfHeight;
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${options.fileName}.pdf`);
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
    } finally {
      options.afterCapture?.();
      setIsGenerating(false);
    }
  }, [targetRef, isGenerating, options]);

  return { exportPdf, isGenerating };
}
