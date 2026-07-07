export interface ServiceDetail {
  id: string;
  title: string;
  popularName?: string;
  agency: string;
  icon: string;
  category: string;
  categorySlug: string;
  description: string;
  requirements?: string[];
  whoCanUse: string;
  deadline: string;
  costs?: string;
  instructions: { step: number; text: string; link?: string; linkLabel?: string }[];
  where: string;
  channel: 'Online' | 'Presencial' | 'Online e Presencial';
  otherInfo?: { title: string; content: string }[];
  externalUrl?: string;
  attendanceOnlineUrl?: string;
  attendancePresentialUrl?: string;
  profiles?: string[];
  updatedAt?: string;
  rating?: number;
  ratingCount?: number;
}

/**
 * Card exibido na seção "Serviços em destaque" (aba Cidadão).
 * Quando `redirectUrl` está presente, o card abre o serviço real no portal
 * ms.gov.br em nova aba; caso contrário, abre a carta-protótipo interna
 * (rota /servico/:id).
 */
export interface FeaturedCard {
  id: string;
  title: string;
  agency: string;
  icon: string;
  redirectUrl?: string;
}

/**
 * Serviços em destaque para o público "Cidadão", extraídos do ms.gov.br.
 * A ordem espelha o portal. Apenas o boletim de acidente de trânsito é uma
 * carta interna do protótipo; os demais redirecionam para o portal.
 */
export const CIDADAO_FEATURED_CARDS: FeaturedCard[] = [
  {
    id: 'certidao-tributaria-estadual',
    title: 'Certidão tributária estadual - emissão (certidão circunstanciada de débitos estaduais)',
    agency: 'Secretaria de Estado de Fazenda de Mato Grosso do Sul',
    icon: 'currency_exchange',
    redirectUrl:
      'https://www.ms.gov.br/financas-e-impostos/certidao-tributaria-estadual-emissao-certidao-circunstanciada-de-debitos-estaduais174',
  },
  {
    id: 'consultar-fila-ambulatorial',
    title: 'Consultar Fila ambulatorial',
    agency: 'Secretaria de Estado de Saúde de Mato Grosso do Sul',
    icon: 'medical_services',
    redirectUrl: 'https://www.ms.gov.br/saude-e-cuidado/consultar-fila-ambulatorial118',
  },
  {
    id: 'crlv-e-licenciamento-digital',
    title: 'Emitir documento anual do veículo (CRLV-e)',
    agency: 'Departamento Estadual de Trânsito de Mato Grosso do Sul',
    icon: 'directions_car',
    redirectUrl: 'https://www.ms.gov.br/transito-e-transportes/emissao-de-crlv-e-licenciamento-digital13',
  },
  {
    id: 'renovacao-cnh',
    title: 'Pedir Renovação da Carteira Nacional de Habilitação - CNH',
    agency: 'Departamento Estadual de Trânsito de Mato Grosso do Sul',
    icon: 'directions_car',
    redirectUrl: 'https://www.ms.gov.br/transito-e-transportes/emissao-da-carteira-nacional-de-habilitacao174',
  },
  {
    // Carta-protótipo interna (página de detalhe completa)
    id: 'boletim-acidente-transito',
    title: 'Realizar boletim on-line de acidente de trânsito – atendimento sem vítimas',
    agency: 'Polícia Militar de Mato Grosso do Sul',
    icon: 'local_police',
  },
  {
    id: 'registrar-boletim-ocorrencias-online',
    title: 'Registrar boletim de ocorrências on-line',
    agency: 'Polícia Civil de Mato Grosso do Sul',
    icon: 'security',
    redirectUrl: 'https://www.ms.gov.br/seguranca/delegacia-virtual-devir105',
  },
  {
    id: 'segunda-via-conta',
    title: 'Solicitar 2ª via de conta',
    agency: 'Empresa de Saneamento de Mato Grosso do Sul',
    icon: 'apartment',
    redirectUrl:
      'https://www.ms.gov.br/empresa-industria-e-comercio/solicitar-emissao-de-2a-via-de-conta-de-agua-e-esgoto113',
  },
  {
    id: 'inclusao-programa-mais-social',
    title: 'Solicitar inclusão no Programa Mais Social',
    agency: 'Secretaria de Estado de Assistência Social e Direitos Humanos',
    icon: 'diversity_3',
    redirectUrl: 'https://www.ms.gov.br/assistencia-social/solicitacao-de-inclusao-no-programa-mais-social118',
  },
];

export const CIDADAO_FEATURED: ServiceDetail[] = [
  {
    id: 'boletim-acidente-transito',
    title: 'Realizar boletim on-line de acidente de trânsito – atendimento sem vítimas',
    popularName: 'Boletim de acidente online, BO de trânsito sem vítimas, registro de sinistro de trânsito',
    agency: 'Polícia Militar de Mato Grosso do Sul',
    icon: 'local_police',
    updatedAt: '12/06/2026',
    rating: 4.5,
    ratingCount: 892,
    category: 'Justiça e Segurança',
    categorySlug: 'justica-seguranca',
    channel: 'Online',
    description:
      'Permite registrar online o Boletim de Ocorrência de acidente de trânsito sem vítimas, evitando deslocamento às delegacias e agilizando o atendimento para fins de seguro e documentação.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o portal da Polícia Militar de MS e selecione "Boletim de Acidente Online".',
        link: 'https://www.pm.ms.gov.br',
        linkLabel: 'Acessar PM-MS',
      },
      {
        step: 2,
        text: 'Informe os dados do condutor, veículo e local do acidente.',
      },
      {
        step: 3,
        text: 'Confirme que o acidente não possui vítimas e que há acordo entre as partes.',
      },
      {
        step: 4,
        text: 'Descreva as circunstâncias do acidente e anexe fotos dos danos, se disponível.',
      },
      {
        step: 5,
        text: 'Conclua o registro e salve ou imprima o número do boletim para acompanhamento.',
      },
    ],
    whoCanUse:
      'Condutor envolvido em acidente de trânsito SEM vítimas ocorrido no Estado de Mato Grosso do Sul, com acordo entre os envolvidos sobre as circunstâncias do acidente.',
    where: 'Online, pelo portal da Polícia Militar de Mato Grosso do Sul. Disponível 24 horas por dia, 7 dias por semana.',
    deadline: '2 dias úteis',
    otherInfo: [
      {
        title: 'Quando NÃO usar este serviço',
        content: 'Se houver vítimas, crimes de trânsito (embriaguez, fuga), veículo furtado ou desacordo entre as partes, acione a PM pelo 190 ou compareça presencialmente à delegacia.',
      },
      {
        title: 'Validade para seguro',
        content: 'O boletim eletrônico tem validade legal para acionamento de seguro de veículo. Verifique com sua seguradora os procedimentos específicos.',
      },
    ],
    externalUrl: 'https://www.pm.ms.gov.br',
  }
];
