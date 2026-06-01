// Serviços PROATIVOS por perfil do cidadão — conteúdo ILUSTRATIVO (mock de demonstração).
// Não há fonte de dados reais do cidadão; serve para prototipar a experiência proativa
// (o portal antecipa o serviço com base no perfil, em vez de listar cartas de serviço).
import type { ProactiveItem } from '../DashboardPage/data';

export interface PerfilProativo {
  id: string;
  nome: string;
  icon: string;   // ícone do perfil (icons.tsx)
  cor: string;
  descricao: string;
  total: number;       // nº de cartas do perfil (do levantamento categoria→perfil)
  pctDoTotal: number;
  itens: ProactiveItem[];
}

// Carteirinhas / documentos digitais do perfil (mock ilustrativo).
export interface DocItem {
  nome: string;
  orgao: string;
  icon: string;
  situacao: string;
  tone: 'success' | 'warning' | 'info';
  codigo?: string;
}

// Documentos por perfil — o que o cidadão "leva para o Meu Painel" conforme o perfil.
export const DOCUMENTOS_PERFIL: Record<string, DocItem[]> = {
  condutor: [
    { nome: 'CNH Digital', orgao: 'Detran-MS', icon: 'id-card', situacao: 'Válida', tone: 'success', codigo: '04123456789' },
    { nome: 'Pontuação da CNH', orgao: 'Detran-MS', icon: 'alert-triangle', situacao: '7 de 40 pontos', tone: 'warning' },
  ],
  servidor: [
    { nome: 'Carteira Funcional', orgao: 'SAD-MS', icon: 'shield-check', situacao: 'Ativa', tone: 'success', codigo: 'MAT 123.456' },
  ],
  agronegocio: [
    { nome: 'Carteira de Pesca', orgao: 'Imasul', icon: 'droplet', situacao: 'Autorizada', tone: 'success', codigo: 'PESCA-2026-0481' },
  ],
  saude: [
    { nome: 'Cartão de Vacinação', orgao: 'SES-MS', icon: 'syringe', situacao: 'Em dia', tone: 'success' },
    { nome: 'Cartão SUS Online', orgao: 'SES-MS', icon: 'heart-pulse', situacao: 'Ativo', tone: 'success', codigo: '700 1234 5678 9012' },
    { nome: 'Cartão do Doador de Sangue', orgao: 'Hemosul', icon: 'heart-pulse', situacao: 'Apto a doar', tone: 'info' },
  ],
  estudante: [
    { nome: 'Carteira do Estudante (CDIEMS)', orgao: 'SED-MS', icon: 'graduation-cap', situacao: 'Válida 2026', tone: 'success', codigo: 'CDIEMS-2026' },
  ],
  familia: [
    { nome: 'CID — Carteira de Identificação Desportiva', orgao: 'Fundesporte', icon: 'star', situacao: 'Ativa', tone: 'info' },
  ],
  cidadao_geral: [
    { nome: 'Carteira de Identidade Nacional (CIN)', orgao: 'SEJUSP-MS', icon: 'id-card', situacao: 'Emitida', tone: 'success', codigo: '12.345.678-9' },
  ],
  contribuinte: [],
  empresario: [],
};

export const PERFIS_PROATIVOS: PerfilProativo[] = [
  {
    id: 'contribuinte', nome: 'Contribuinte', icon: 'file-text', cor: '#00838F',
    descricao: 'Sua relação tributária com o Estado: impostos, certidões e regularidade.',
    total: 219, pctDoTotal: 18.0,
    itens: [
      {
        id: 'ipva-desc', severity: 'warning', kind: 'Imposto', icon: 'alert-triangle',
        title: 'IPVA 2026 com desconto até o fim do mês',
        meta: 'Sefaz-MS • Cota única',
        body: 'Pague a cota única do IPVA com 15% de desconto. Após o prazo, só parcelado e sem desconto.',
        amount: 'R$ 1.240,00', secondary: 'Desconto válido até 30/06/2026',
        cta: 'Pagar com desconto', secondaryCta: 'Ver parcelamento', deadline: '12 dias',
      },
      {
        id: 'cnd', severity: 'info', kind: 'Certidão', icon: 'file-check',
        title: 'Sua Certidão Negativa de Débitos está disponível',
        meta: 'Sefaz-MS',
        body: 'Você está sem pendências. Emita a CND para participar de licitações ou comprovar regularidade.',
        secondary: 'Emissão gratuita e imediata',
        cta: 'Emitir CND', deadline: null,
      },
      {
        id: 'itcd', severity: 'success', kind: 'Regularidade', icon: 'check-circle',
        title: 'Nenhuma dívida ativa em seu nome',
        meta: 'Sefaz-MS • PGE-MS',
        body: 'Não há débitos inscritos em dívida ativa. Mantenha o pagamento de tributos em dia.',
        cta: 'Ver meus tributos', deadline: null,
      },
    ],
  },
  {
    id: 'condutor', nome: 'Condutor', icon: 'car', cor: '#1565C0',
    descricao: 'Tudo sobre dirigir e seu veículo: habilitação, multas e licenciamento.',
    total: 71, pctDoTotal: 5.8,
    itens: [
      {
        id: 'multa', severity: 'critical', kind: 'Trânsito', icon: 'alert-triangle',
        title: 'Multa com vencimento próximo',
        meta: 'Auto 21438122 • Detran-MS',
        body: 'Excesso de velocidade — Av. Afonso Pena, 12/05/2026. Pague com desconto ou indique condutor.',
        amount: 'R$ 195,23', secondary: 'Desconto de 20% por 12 dias',
        cta: 'Pagar com desconto', secondaryCta: 'Indicar condutor', deadline: '12 dias',
      },
      {
        id: 'cnh', severity: 'warning', kind: 'Documento', icon: 'id-card',
        title: 'Sua CNH vence em 30 dias',
        meta: 'Detran-MS • Categoria B',
        body: 'Renove pela internet sem ir a uma unidade. O processo leva em média 7 dias úteis.',
        secondary: 'Vencimento em 24/06/2026',
        cta: 'Iniciar renovação', secondaryCta: 'Ver detalhes', deadline: '30 dias',
      },
      {
        id: 'licenc', severity: 'info', kind: 'Veículo', icon: 'car',
        title: 'Licenciamento anual 2026 disponível',
        meta: 'Detran-MS',
        body: 'O CRLV digital de 2026 pode ser emitido após a quitação do IPVA e eventuais multas.',
        cta: 'Emitir CRLV', deadline: null,
      },
    ],
  },
  {
    id: 'agronegocio', nome: 'Agronegócio', icon: 'leaf', cor: '#2E7D32',
    descricao: 'Sua atividade no campo: defesa agropecuária, ambiental e recursos hídricos.',
    total: 187, pctDoTotal: 15.3,
    itens: [
      {
        id: 'gta', severity: 'warning', kind: 'Defesa agropecuária', icon: 'alert-triangle',
        title: 'GTA necessária para transporte de animais',
        meta: 'Iagro',
        body: 'Emita a Guia de Trânsito Animal antes de movimentar o rebanho. Sem GTA, o transporte é irregular.',
        secondary: 'Período de vacinação aberto',
        cta: 'Emitir GTA', secondaryCta: 'Ver rebanho', deadline: null,
      },
      {
        id: 'vacina', severity: 'info', kind: 'Sanidade animal', icon: 'syringe',
        title: 'Campanha de vacinação obrigatória',
        meta: 'Iagro • Febre aftosa',
        body: 'Declare a vacinação do rebanho dentro do período da campanha para manter a propriedade regular.',
        secondary: 'Declaração até 31/05/2026',
        cta: 'Declarar vacinação', deadline: '5 dias',
      },
      {
        id: 'outorga', severity: 'warning', kind: 'Recursos hídricos', icon: 'droplet',
        title: 'Outorga de uso da água a renovar',
        meta: 'Imasul',
        body: 'A autorização de uso de recursos hídricos da sua propriedade está próxima do vencimento.',
        secondary: 'Vence em 20/07/2026',
        cta: 'Renovar outorga', deadline: '50 dias',
      },
    ],
  },
  {
    id: 'empresario', nome: 'Empresário', icon: 'briefcase', cor: '#6A1B9A',
    descricao: 'Seu negócio: abertura, licenças e obrigações da empresa.',
    total: 129, pctDoTotal: 10.6,
    itens: [
      {
        id: 'das', severity: 'warning', kind: 'MEI', icon: 'alert-triangle',
        title: 'DAS do MEI vence dia 20',
        meta: 'Sefaz-MS • Simples Nacional',
        body: 'Pague a guia mensal do MEI para manter o CNPJ ativo e os benefícios previdenciários.',
        amount: 'R$ 76,90', secondary: 'Pode pagar via PIX no portal',
        cta: 'Pagar DAS', deadline: '6 dias',
      },
      {
        id: 'alvara', severity: 'info', kind: 'Licença', icon: 'file-check',
        title: 'Renovação de alvará de funcionamento',
        meta: 'Jucems',
        body: 'O alvará do seu estabelecimento pode ser renovado de forma 100% digital pela Junta Comercial.',
        secondary: 'Vence em 31/08/2026',
        cta: 'Renovar alvará', deadline: null,
      },
      {
        id: 'ie', severity: 'success', kind: 'Inscrição', icon: 'check-circle',
        title: 'Inscrição estadual ativa e regular',
        meta: 'Sefaz-MS',
        body: 'Sua inscrição estadual está regular. Mantenha as obrigações acessórias em dia.',
        cta: 'Ver situação fiscal', deadline: null,
      },
    ],
  },
  {
    id: 'servidor', nome: 'Servidor Público', icon: 'shield-check', cor: '#455A64',
    descricao: 'Sua vida funcional: carreira, previdência e capacitação.',
    total: 150, pctDoTotal: 12.3,
    itens: [
      {
        id: 'contracheque', severity: 'info', kind: 'Folha', icon: 'wallet',
        title: 'Contracheque de maio disponível',
        meta: 'SAD-MS',
        body: 'O demonstrativo de pagamento do mês já pode ser consultado e baixado em PDF.',
        cta: 'Ver contracheque', deadline: null,
      },
      {
        id: 'previd', severity: 'warning', kind: 'Previdência', icon: 'clock',
        title: 'Simulação de aposentadoria atualizada',
        meta: 'Ageprev',
        body: 'Com base no seu tempo de contribuição, você pode simular regras de aposentadoria disponíveis.',
        secondary: 'Tempo averbado: 22 anos',
        cta: 'Simular aposentadoria', secondaryCta: 'Averbar tempo', deadline: null,
      },
      {
        id: 'capacit', severity: 'success', kind: 'Capacitação', icon: 'graduation-cap',
        title: 'Novos cursos da Escolagov abertos',
        meta: 'Escolagov-MS',
        body: 'Inscrições abertas para capacitações gratuitas que contam pontos na sua progressão.',
        cta: 'Ver cursos', deadline: null,
      },
    ],
  },
  {
    id: 'saude', nome: 'Saúde', icon: 'heart-pulse', cor: '#D32F2F',
    descricao: 'Cuidado da sua saúde: vacinas, consultas e medicamentos.',
    total: 40, pctDoTotal: 3.3,
    itens: [
      {
        id: 'dose', severity: 'warning', kind: 'Vacinação', icon: 'syringe',
        title: 'Dose de reforço disponível',
        meta: 'SES-MS • Influenza',
        body: 'Sua próxima dose de reforço já pode ser agendada na unidade de saúde mais próxima.',
        secondary: 'Campanha aberta',
        cta: 'Agendar vacina', deadline: null,
      },
      {
        id: 'consulta', severity: 'info', kind: 'Atendimento', icon: 'calendar',
        title: 'Agendamento de consulta especializada',
        meta: 'SES-MS',
        body: 'Há vagas abertas para consultas especializadas via regulação estadual.',
        cta: 'Agendar consulta', deadline: null,
      },
      {
        id: 'cartaosus', severity: 'success', kind: 'Documento', icon: 'check-circle',
        title: 'Cartão SUS ativo',
        meta: 'SES-MS',
        body: 'Seu Cartão Nacional de Saúde está ativo e vinculado à sua unidade de referência.',
        cta: 'Ver Cartão SUS', deadline: null,
      },
    ],
  },
  {
    id: 'familia', nome: 'Família', icon: 'users', cor: '#C2185B',
    descricao: 'Cuidado do núcleo familiar: assistência social, habitação e cultura.',
    total: 28, pctDoTotal: 2.3,
    itens: [
      {
        id: 'cadunico', severity: 'warning', kind: 'Assistência social', icon: 'users',
        title: 'Atualização do CadÚnico necessária',
        meta: 'Setas-MS',
        body: 'Seu cadastro completa 2 anos. Atualize os dados para não perder acesso a benefícios.',
        secondary: 'Atualizar até 30/07/2026',
        cta: 'Atualizar CadÚnico', deadline: null,
      },
      {
        id: 'habitacao', severity: 'info', kind: 'Habitação', icon: 'home',
        title: 'Programa habitacional aberto para seu perfil',
        meta: 'Agehab • Casa MS',
        body: 'Com base no seu CadÚnico, você pode se inscrever no subsídio para a casa própria.',
        secondary: 'Inscrições até 30/07/2026',
        cta: 'Quero me inscrever', secondaryCta: 'Saber mais', deadline: null,
      },
      {
        id: 'matricula', severity: 'info', kind: 'Educação', icon: 'book-open',
        title: 'Pré-matrícula 2027 da rede estadual',
        meta: 'SED-MS',
        body: 'Garanta vaga para crianças e adolescentes na rede estadual de ensino.',
        cta: 'Fazer pré-matrícula', deadline: null,
      },
    ],
  },
  {
    id: 'estudante', nome: 'Estudante', icon: 'graduation-cap', cor: '#F9A825',
    descricao: 'Sua formação: ensino superior, bolsas, pesquisa e tecnologia.',
    total: 188, pctDoTotal: 15.4,
    itens: [
      {
        id: 'vestibular', severity: 'warning', kind: 'Ingresso', icon: 'alert-triangle',
        title: 'Inscrições do vestibular UEMS abertas',
        meta: 'UEMS',
        body: 'As inscrições para o processo seletivo da Universidade Estadual estão no prazo final.',
        secondary: 'Inscrições até 10/06/2026',
        cta: 'Inscrever-se', deadline: '9 dias',
      },
      {
        id: 'bolsa', severity: 'info', kind: 'Bolsa', icon: 'graduation-cap',
        title: 'Bolsa de estudo disponível',
        meta: 'Fundect • Vale Universidade',
        body: 'Programa de bolsas para estudantes de baixa renda do ensino superior está com edital aberto.',
        cta: 'Ver edital', deadline: null,
      },
      {
        id: 'cienciatec', severity: 'success', kind: 'Pesquisa', icon: 'sparkles',
        title: 'Editais de iniciação científica',
        meta: 'Fundect',
        body: 'Há editais abertos de fomento à pesquisa e iniciação científica para estudantes.',
        cta: 'Ver editais', deadline: null,
      },
    ],
  },
  {
    id: 'cidadao_geral', nome: 'Cidadão Geral', icon: 'user', cor: '#5B6770',
    descricao: 'Serviços universais: transparência, direitos, segurança e ouvidoria.',
    total: 207, pctDoTotal: 17.0,
    itens: [
      {
        id: 'ouvidoria', severity: 'info', kind: 'Ouvidoria', icon: 'bell',
        title: 'Acompanhe suas manifestações',
        meta: 'Ouvidoria-Geral do Estado',
        body: 'Registre reclamações, sugestões e elogios, e acompanhe o andamento das suas manifestações.',
        cta: 'Abrir ouvidoria', deadline: null,
      },
      {
        id: 'lai', severity: 'info', kind: 'Transparência', icon: 'file-text',
        title: 'Pedido de acesso à informação',
        meta: 'CGE-MS • LAI',
        body: 'Solicite acesso a informações dos órgãos do Poder Executivo Estadual pela Lei de Acesso.',
        cta: 'Fazer pedido', deadline: null,
      },
      {
        id: 'cin', severity: 'success', kind: 'Documento', icon: 'id-card',
        title: 'Carteira de Identidade Nacional (CIN)',
        meta: 'SEJUSP-MS',
        body: 'Agende a emissão da nova Carteira de Identidade Nacional com seu CPF como número único.',
        cta: 'Agendar emissão', deadline: null,
      },
    ],
  },
];
