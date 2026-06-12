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
