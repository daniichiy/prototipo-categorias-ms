export interface Citizen {
  name: string;
  firstName: string;
  cpf: string;
  email: string;
  lastLogin: string;
}

export interface ProactiveItem {
  id: string;
  severity: 'critical' | 'warning' | 'info' | 'success';
  kind: string;
  icon: string;
  title: string;
  meta: string;
  body: string;
  amount?: string;
  secondary?: string;
  cta: string;
  secondaryCta?: string;
  deadline?: string | null;
}

export interface Solicitacao {
  id: string;
  servico: string;
  orgao: string;
  status: 'em-analise' | 'aguardando-doc' | 'concluido' | 'rejeitado';
  etapa: number;
  totalEtapas: number;
  atualizado: string;
  prazo: string;
}

export interface Notificacao {
  id: number;
  kind: 'urgent' | 'info' | 'success';
  orgao: string;
  title: string;
  time: string;
  unread: boolean;
}

export interface Documento {
  id: string;
  nome: string;
  orgao: string;
  codigo: string;
  validade?: string;
  verified?: boolean;
  warning?: boolean;
}

export interface Favorito {
  id: string;
  nome: string;
  icon: string;
  orgao: string;
}

export interface Recomendado {
  id: string;
  titulo: string;
  desc: string;
  orgao: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Agendamento {
  id: string;
  servico: string;
  orgao: string;
  local: string;
  data: string;
  hora: string;
}

export const CITIZEN: Citizen = {
  name: 'Daniele Lins',
  firstName: 'Daniele',
  cpf: '123.456.789-09',
  email: 'daniele.lins@email.com.br',
  lastLogin: '24/05/2026 às 18:42',
};

export const PROACTIVE: ProactiveItem[] = [
  {
    id: 'multa',
    severity: 'critical',
    kind: 'Trânsito',
    icon: 'alert-triangle',
    title: 'Multa de trânsito com vencimento próximo',
    meta: 'Auto de Infração 21438122 • Detran-MS',
    body: 'Excesso de velocidade em até 20% acima do permitido — Av. Afonso Pena, 12/05/2026.',
    amount: 'R$ 195,23',
    secondary: 'Pague em até 12 dias para desconto de 20%',
    cta: 'Pagar com desconto',
    secondaryCta: 'Indicar condutor',
    deadline: '12 dias',
  },
  {
    id: 'cnh',
    severity: 'warning',
    kind: 'Documento',
    icon: 'id-card',
    title: 'Sua CNH vence em 30 dias',
    meta: 'Detran-MS • Categoria B',
    body: 'Renove pela internet sem precisar comparecer a uma unidade. O processo leva em média 7 dias úteis.',
    secondary: 'Vencimento em 24/06/2026',
    cta: 'Iniciar renovação',
    secondaryCta: 'Ver detalhes',
    deadline: '30 dias',
  },
  {
    id: 'beneficio',
    severity: 'info',
    kind: 'Habitação',
    icon: 'home',
    title: 'Benefício habitacional disponível para o seu perfil',
    meta: 'Agehab — Programa Casa MS',
    body: 'Com base no seu cadastro no CadÚnico, você pode se inscrever no programa de subsídio para entrada da casa própria.',
    secondary: 'Inscrições abertas até 30/07/2026',
    cta: 'Quero me inscrever',
    secondaryCta: 'Saber mais',
    deadline: null,
  },
];

export const SOLICITACOES: Solicitacao[] = [
  { id: '2026/0048-291', servico: 'Carteira de Identidade Nacional — 1ª via', orgao: 'SEJUSP', status: 'em-analise', etapa: 3, totalEtapas: 5, atualizado: 'há 2 dias', prazo: '5 dias úteis' },
  { id: '2026/0044-118', servico: 'Renovação de CNH', orgao: 'Detran-MS', status: 'aguardando-doc', etapa: 2, totalEtapas: 4, atualizado: 'hoje, 09:14', prazo: 'Aguardando você' },
  { id: '2026/0041-007', servico: 'Auxílio Reconstrução', orgao: 'Setas', status: 'em-analise', etapa: 4, totalEtapas: 6, atualizado: 'há 4 dias', prazo: '8 dias úteis' },
];

export const NOTIFICACOES: Notificacao[] = [
  { id: 1, kind: 'urgent', orgao: 'Detran-MS', title: 'Nova autuação registrada em seu nome', time: 'Há 1 hora', unread: true },
  { id: 2, kind: 'info', orgao: 'SES-MS', title: 'Sua próxima dose de reforço está disponível', time: 'Há 1 dia', unread: true },
  { id: 3, kind: 'success', orgao: 'SEJUSP', title: 'CIN foi aprovada para impressão', time: 'Há 2 dias', unread: true },
  { id: 4, kind: 'info', orgao: 'SED', title: 'Boletim escolar do 1º bimestre publicado', time: 'Há 3 dias', unread: false },
  { id: 5, kind: 'info', orgao: 'Agehab', title: 'Novo programa de habitação social', time: 'Há 5 dias', unread: false },
];

export const DOCUMENTOS: Documento[] = [
  { id: 'cin', nome: 'Carteira de Identidade — CIN', orgao: 'SEJUSP', codigo: '12.345.678-9', validade: '07/2031', verified: true },
  { id: 'cnh', nome: 'CNH Digital', orgao: 'Detran-MS', codigo: '04123456789', validade: '24/06/2026', warning: true },
  { id: 'sus', nome: 'Cartão SUS', orgao: 'SES-MS', codigo: '700 1234 5678 9012', verified: true },
  { id: 'titulo', nome: 'Título de Eleitor', orgao: 'TRE-MS', codigo: '1234 5678 9012', verified: true },
];

export const FAVORITOS: Favorito[] = [
  { id: 'ipva', nome: 'IPVA', icon: 'car', orgao: 'Sefaz-MS' },
  { id: 'cnh', nome: 'CNH', icon: 'id-card', orgao: 'Detran-MS' },
  { id: 'sus', nome: 'Cartão SUS', icon: 'heart-pulse', orgao: 'SES-MS' },
  { id: 'matricula', nome: 'Matrícula escolar', icon: 'book-open', orgao: 'SED' },
  { id: 'cadunico', nome: 'CadÚnico', icon: 'users', orgao: 'Setas' },
  { id: 'certidao', nome: 'Certidão negativa', icon: 'file-check', orgao: 'Sefaz-MS' },
];

export const RECOMENDADOS: Recomendado[] = [
  { id: 'vacina', titulo: 'Calendário vacinal em dia?', desc: 'Você pode ter doses de reforço pendentes para Influenza e COVID-19.', orgao: 'SES-MS', icon: 'syringe' },
  { id: 'matricula', titulo: 'Pré-matrícula 2027 já está aberta', desc: 'Garanta vaga para crianças e adolescentes na rede estadual.', orgao: 'SED', icon: 'graduation-cap' },
  { id: 'mei', titulo: 'É MEI? Emita seu DAS de maio', desc: 'Vencimento em 20/05. Pode pagar pelo PIX direto pelo portal.', orgao: 'Sefaz-MS', icon: 'briefcase' },
];

export const HISTORICO = [
  { label: 'Consulta de IPVA 2026', date: 'Hoje · 14:22', orgao: 'Sefaz-MS' },
  { label: 'Emissão de Certidão Negativa', date: 'Ontem · 09:15', orgao: 'Sefaz-MS' },
  { label: 'Login na conta gov.br', date: '22/05 · 18:42', orgao: 'gov.br' },
  { label: 'Atualização de endereço', date: '20/05 · 11:30', orgao: 'SEJUSP' },
];

export const AGENDAMENTOS: Agendamento[] = [
  { id: 'ag1', servico: 'Emissão de Carteira de Identidade (CIN)', orgao: 'SEJUSP', local: 'Campo Grande — Unidade Centro', data: '28/05/2026', hora: '10:30' },
  { id: 'ag2', servico: 'Perícia médica para renovação de CNH', orgao: 'Detran-MS', local: 'Campo Grande — Sede Administrativa', data: '03/06/2026', hora: '14:00' },
];

export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Início', icon: 'home' },
  { id: 'servicos', label: 'Serviços', icon: 'grid' },
  { id: 'documentos', label: 'Documentos', icon: 'wallet' },
  { id: 'solicitacoes', label: 'Solicitações', icon: 'file-text' },
  { id: 'notificacoes', label: 'Notificações', icon: 'bell' },
  { id: 'perfil', label: 'Perfil', icon: 'user' },
];
