export interface ContactChannel {
  /** Material Icon ligature */
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  /** Link externo — ignorado quando `to` está definido */
  href: string;
  /** Rota interna do protótipo */
  to?: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: 'report',
    title: 'Denúncia',
    description: 'Comunique um ato ilícito praticado contra a administração pública',
    linkLabel: 'Deixar sua denuncia',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'report',
    title: 'Denúncia anônima',
    description:
      'Comunique um ato ilícito praticado contra a administração pública anonimamente.',
    linkLabel: 'Deixar sua denuncia anônima',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'thumbs_up_down',
    title: 'Elogio',
    description: 'Expresse se você está satisfeito com um atendimento público',
    linkLabel: 'Deixar elogio',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'heart_broken',
    title: 'Reclamação',
    description: 'Manifeste sua insatisfação com um serviço público',
    linkLabel: 'Deixar sua reclamação',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'emoji_objects',
    title: 'Simplifique',
    description: 'Sugira alguma ideia para desburocratizar o serviço público',
    linkLabel: 'Deixar sua ideia',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'content_paste_go',
    title: 'Solicitação',
    description: 'Peça um atendimento ou uma prestação de serviço',
    linkLabel: 'Realizar solicitação',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'mark_chat_read',
    title: 'Sugestões',
    description: 'Envie uma ideia ou proposta de melhoria dos serviços públicos',
    linkLabel: 'Deixar sua sugestão',
    href: 'https://falabr.cgu.gov.br/v2/',
  },
  {
    icon: 'phone',
    title: 'Telefones úteis',
    description: 'Nossa lista de telefones do governo',
    linkLabel: 'Acessar telefones',
    href: 'https://www.ms.gov.br/',
    to: '/fale-conosco/telefones-uteis',
  },
  {
    icon: 'support_agent',
    title: 'Suporte a sistemas',
    description: 'Nossos canais de suporte a sistemas',
    linkLabel: 'Acessar sistemas',
    href: 'https://www.ms.gov.br/',
    to: '/fale-conosco/suporte-a-sistemas',
  },
  {
    icon: 'account_balance',
    title: 'Secretarias e Órgãos',
    description: 'Acesse informações sobre secretarias e órgãos do governo',
    linkLabel: 'Acessar secretarias e órgãos',
    href: 'https://www.ms.gov.br/orgaos',
    to: '/fale-conosco/secretarias-e-orgaos',
  },
  {
    icon: 'maps_ugc',
    title: 'Fala Servidor',
    description: 'Canal exclusivo de comunicação para servidores públicos',
    linkLabel: 'Acessar Fala Servidor',
    href: 'https://www.canaldedenuncia.ms.gov.br/',
  },
];
