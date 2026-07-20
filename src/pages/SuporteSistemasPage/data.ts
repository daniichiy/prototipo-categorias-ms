export interface SupportContact {
  /** Material Icon ligature — ignorado quando `brandIcon` está definido */
  icon: string;
  /** Ícone de marca desenhado em SVG (Material Icons não cobre marcas) */
  brandIcon?: 'whatsapp';
  label: string;
  /** Texto exibido no chip/link de contato */
  value: string;
  href: string;
  /** Abre em nova aba e exibe o ícone de link externo */
  external?: boolean;
}

export const SUPPORT_CONTACTS: SupportContact[] = [
  {
    icon: 'chat',
    brandIcon: 'whatsapp',
    label: 'Atendimento Whatsapp',
    value: '(67) 3318-3700',
    href: 'https://wa.me/556733183700',
    external: true,
  },
  {
    icon: 'call',
    label: 'Atendimento Telefônico',
    value: '(67) 3318-3600',
    href: 'tel:6733183600',
  },
];

export const SUPPORT_EMAIL: SupportContact = {
  icon: 'mail_outline',
  label: 'E-mail para suporte',
  value: 'suportems@ms.gov.br',
  href: 'mailto:suportems@ms.gov.br',
  external: true,
};

export const TICKET_LINK = {
  label: 'Abertura de chamado',
  href: 'https://www.ms.gov.br/',
};
