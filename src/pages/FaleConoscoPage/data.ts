export interface ContactChannel {
  /** Material Icon ligature */
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'report',
    title: 'Denúncia',
    description: 'Comunique um ato ilícito praticado contra a administração pública',
    linkLabel: 'Deixar sua denuncia',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'report',
    title: 'Denúncia anônima',
    description:
      'Comunique um ato ilícito praticado contra a administração pública anonimamente.',
    linkLabel: 'Deixar sua denuncia anônima',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'thumbs_up_down',
    title: 'Elogio',
    description: 'Expresse se você está satisfeito com um atendimento público',
    linkLabel: 'Deixar elogio',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'heart_broken',
    title: 'Reclamação',
    description: 'Manifeste sua insatisfação com um serviço público',
    linkLabel: 'Deixar sua reclamação',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'emoji_objects',
    title: 'Simplifique',
    description: 'Sugira alguma ideia para desburocratizar o serviço público',
    linkLabel: 'Deixar sua ideia',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'content_paste_go',
    title: 'Solicitação',
    description: 'Peça um atendimento ou uma prestação de serviço',
    linkLabel: 'Realizar solicitação',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'mark_chat_read',
    title: 'Sugestões',
    description: 'Envie uma ideia ou proposta de melhoria dos serviços públicos',
    linkLabel: 'Deixar sua sugestão',
    href: 'https://www.ouvidoria.ms.gov.br/',
  },
  {
    icon: 'phone',
    title: 'Telefones úteis',
    description: 'Nossa lista de telefones do governo',
    linkLabel: 'Acessar telefones',
    href: 'https://www.ms.gov.br/',
  },
  {
    icon: 'support_agent',
    title: 'Suporte a sistemas',
    description: 'Nossos canais de suporte a sistemas',
    linkLabel: 'Acessar sistemas',
    href: 'https://www.ms.gov.br/',
  },
  {
    icon: 'account_balance',
    title: 'Secretárias e Órgãos',
    description: 'Acesse informações sobre secretarias e órgãos do governo',
    linkLabel: 'Acessar secretarias e órgãos',
    href: 'https://www.ms.gov.br/orgaos',
  },
  {
    icon: 'maps_ugc',
    title: 'Fala Servidor',
    description: 'Canal exclusivo de comunicação para servidores públicos',
    linkLabel: 'Acessar Fala Servidor',
    href: 'https://www.ms.gov.br/',
  },
];
