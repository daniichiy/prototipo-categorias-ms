export type ContactKind = 'phone' | 'whatsapp' | 'email' | 'link';

export interface OrgContact {
  kind: ContactKind;
  label: string;
  /** Um ou mais valores para o mesmo rótulo (ex.: dois telefones de protocolo) */
  values: string[];
  /** Ausente em itens de `kind: 'link'` cuja URL ainda não foi informada */
  href?: string;
}

export interface Organization {
  name: string;
  acronym: string;
  contacts: OrgContact[];
}

/** Índice oficial de órgãos — usado enquanto os sites individuais não são informados */
export const ORG_INDEX_URL = 'https://www.ms.gov.br/orgaos';

const phone = (label: string, ...values: string[]): OrgContact => ({
  kind: 'phone',
  label,
  values,
});

const whatsapp = (label: string, ...values: string[]): OrgContact => ({
  kind: 'whatsapp',
  label,
  values,
});

const email = (label: string, ...values: string[]): OrgContact => ({
  kind: 'email',
  label,
  values,
});

const link = (label: string, href?: string): OrgContact => ({
  kind: 'link',
  label,
  values: [],
  href,
});

export const ORGANIZATIONS: Organization[] = [
  {
    name: 'Agência de Desenvolvimento Agrário e Extensão Rural',
    acronym: 'AGRAER',
    contacts: [
      email('E-mail', 'presidencia@agraer.ms.gov.br'),
      phone('PABX', '(67) 3318-5100'),
    ],
  },
  {
    name: 'Agência de Habitação Popular do Estado de Mato Grosso do Sul',
    acronym: 'AGEHAB',
    contacts: [
      email('E-mail', 'gabinete@agehab.ms.gov.br'),
      phone('Telefone', '(67) 3348-3100'),
      whatsapp('Whatsapp', '(67) 3348-3168'),
      phone(
        'Setor de Cadastramento e Atendimento ao Público',
        '0800 647 3120',
        '(67) 3348-3165',
      ),
    ],
  },
  {
    name: 'Agência de Previdência Social de Mato Grosso do Sul',
    acronym: 'AGEPREV',
    contacts: [phone('Telefone', '(67) 3323-7350')],
  },
  {
    name: 'Agência Estadual de Administração do Sistema Penitenciário',
    acronym: 'AGEPEN',
    contacts: [
      phone('Telefone', '(67) 3901-1330'),
      phone('Ouvidoria — Telefone', '(67) 3901-3523'),
      whatsapp('Ouvidoria — WhatsApp', '(67) 99971-4323'),
      email('Ouvidoria — E-mail', 'ouvidoria@agepen.ms.gov.br'),
      phone('Monitoração Eletrônica — Telefone', '0800 643 5508'),
      email('Monitoração Eletrônica — E-mail', 'unidade.monitoramento@agepen.ms.gov.br'),
      phone('Central de Alvarás', '(67) 99879-8082'),
    ],
  },
  {
    name: 'Agência Estadual de Defesa Sanitária Animal e Vegetal',
    acronym: 'IAGRO',
    contacts: [
      email('E-mail', 'dirpres@iagro.ms.gov.br'),
      phone('Helpdesk e-Saniagro (dúvidas sistema)', '0800 647 6713'),
      whatsapp('Notificação Área Animal', '(67) 99961-9205'),
      whatsapp('Notificação Área Vegetal', '(67) 99971-8163'),
    ],
  },
  {
    name: 'Agência Estadual de Gestão de Empreendimentos de Mato Grosso do Sul',
    acronym: 'AGESUL',
    contacts: [
      email('E-mail', 'diretoria@agesul.ms.gov.br'),
      phone('Telefone', '(67) 3318-5300'),
    ],
  },
  {
    name: 'Agência Estadual de Metrologia',
    acronym: 'AEM MS | INMETRO',
    contacts: [
      email('E-mail', 'aemms@ms.gov.br'),
      phone('Telefone', '(67) 3317-5779'),
      phone('Ouvidoria', '0800 067 5220'),
      whatsapp('Ouvidoria — WhatsApp', '(67) 3317-5754'),
      email('Ouvidoria — E-mail', 'ouvidoria@aem.ms.gov.br'),
    ],
  },
  {
    name: 'Agência Estadual de Regulação de Serviços Públicos de Mato Grosso do Sul',
    acronym: 'AGEMS',
    contacts: [
      email('E-mail', 'presidencia@agems.ms.gov.br', 'agems@agems.ms.gov.br'),
      phone('Telefone', '(67) 3025-9500'),
      phone('Ouvidoria — Energia Elétrica', '0800 727 0167'),
      phone(
        'Ouvidoria — Sanesul / Gás Canalizado / Transporte Intermunicipal / Rodovias',
        '0800 600 0506',
      ),
      email('Ouvidoria — E-mail', 'ouvidoria@agems.ms.gov.br'),
      link('Sistema Integrado de Ouvidoria'),
    ],
  },
  {
    name: 'Companhia de Gás do Estado de Mato Grosso do Sul',
    acronym: 'MSGÁS',
    contacts: [
      email('E-mail', 'msgas@msgas.com.br'),
      phone('Telefone', '(67) 3312-2400'),
      phone('Emergência 24h', '0800 647 0300', '(67) 99680-0710'),
    ],
  },
  {
    name: 'Controladoria-Geral do Estado',
    acronym: 'CGE',
    contacts: [
      email('E-mail', 'cge@cge.ms.gov.br'),
      phone('Recepção', '(67) 3318-4053'),
      phone('Protocolo', '(67) 3318-4024'),
      phone('Secretaria do Gabinete', '(67) 3318-4024'),
    ],
  },
  {
    name: 'Coordenadoria-Geral de Perícias',
    acronym: 'CGP',
    contacts: [
      email('E-mail', 'cgpgab@cgp.sejusp.ms.gov.br'),
      email('E-mail Gabinete', 'cgpgab@cgp.sejusp.ms.gov.br'),
      phone('Telefone', '(67) 3314-5850'),
      phone('Informações sobre a Carteira de Identidade', '(67) 3345-6794'),
    ],
  },
  {
    name: 'Corpo de Bombeiros Militar',
    acronym: 'CBMMS',
    contacts: [
      email('E-mail', 'cmtgeral@cbm.ms.gov.br'),
      phone('Telefone', '(67) 3357-9400'),
      phone('Bombeiros', '193'),
    ],
  },
  {
    name: 'Departamento Estadual de Trânsito de Mato Grosso do Sul',
    acronym: 'DETRAN MS',
    contacts: [
      email('E-mail', 'dicoe@detran.ms.gov.br'),
      email('E-mail Assessoria de Comunicação Estratégica', 'ascoe@detran.ms.gov.br'),
      phone('Telefone', '(67) 3368-0500'),
      whatsapp('Whatsapp da Glória', '(67) 3368-0500'),
      phone('PABX', '(67) 3368-0100'),
      phone('Ouvidoria', '(67) 3369-0209'),
      phone('Assessoria de Comunicação Estratégica', '(67) 3368-0242'),
    ],
  },
  {
    name: 'Empresa de Saneamento de Mato Grosso do Sul',
    acronym: 'SANESUL',
    contacts: [
      email('E-mail', 'cac0800@sanesul.ms.gov.br'),
      phone('Telefone', '(67) 3318-7878'),
      phone('Atendimento 24h', '0800 067 6010'),
    ],
  },
  {
    name: 'Escritório de Parcerias Estratégicas',
    acronym: 'EPE',
    contacts: [
      email('E-mail', 'epe@segov.ms.gov.br'),
      phone('Telefone', '(67) 3378-9150'),
    ],
  },
  {
    name: 'Fundação de Apoio e Desenvolvimento Educação Básica de Mato Grosso do Sul',
    acronym: 'FADEB',
    contacts: [
      email('E-mail', 'fadeb@fadeb.ms.gov.br'),
      phone('Telefone', '(67) 3314-1100'),
    ],
  },
  {
    name: 'Fundação de Apoio ao Desenvolvimento do Ensino, Ciência e Tecnologia de Mato Grosso do Sul',
    acronym: 'FUNDECT',
    contacts: [phone('Telefone', '(67) 3316-6700')],
  },
  {
    name: 'Fundação de Cultura de Mato Grosso do Sul',
    acronym: 'FCMS',
    contacts: [
      email('E-mail', 'presidencia@fcms.ms.gov.br'),
      phone('Telefone', '(67) 3316-9174'),
    ],
  },
  {
    name: 'Fundação de Desporto e Lazer de Mato Grosso do Sul',
    acronym: 'FUNDESPORTE',
    contacts: [
      email('E-mail', 'presidente@fundesporte.ms.gov.br'),
      phone('Telefone', '(67) 3316-9196'),
    ],
  },
  {
    name: 'Fundação de Trabalho de Mato Grosso do Sul',
    acronym: 'FUNTRAB',
    contacts: [
      email('E-mail', 'comunicacao@funtrab.ms.gov.br'),
      phone('Telefone', '(67) 3320-1400'),
    ],
  },
  {
    name: 'Fundação de Turismo de Mato Grosso do Sul',
    acronym: 'FUNDTUR',
    contacts: [
      email('E-mail', 'fturismo@fundtur.ms.gov.br'),
      phone('Telefone', '(67) 3318-7600'),
    ],
  },
  {
    name: 'Fundação Escola de Governo',
    acronym: 'ESCOLAGOV',
    contacts: [
      email('E-mail', 'presidencia@escolgov.ms.gov.br'),
      phone('Telefone', '(67) 3348-6600'),
    ],
  },
  {
    name: 'Fundação Estadual Jornalista Luiz Chagas de Rádio e Televisão',
    acronym: 'FERTEL / Educativa MS',
    contacts: [
      email('E-mail', 'sac@portaldaeducativa.ms.gov.br'),
      phone('Telefone', '(67) 3318-3805'),
    ],
  },
  {
    name: 'Fundação Serviços de Saúde de MS',
    acronym: 'FUNSAU',
    contacts: [
      email('E-mail', 'presidencia@funsau.ms.gov.br'),
      phone('Telefone', '(67) 3378-2500'),
    ],
  },
  {
    name: 'Instituto de Meio Ambiente de Mato Grosso do Sul',
    acronym: 'IMASUL',
    contacts: [
      email('E-mail', 'atendimento@imasul.ms.gov.br'),
      phone('Telefone', '(67) 3318-6000'),
      phone(
        'Central de Atendimento',
        '(67) 3318-6056',
        '(67) 3318-6020',
        '(67) 3318-6022',
        '(67) 3318-6156',
      ),
      link('Atendimento Presencial com Agendamento'),
      phone('Suporte Técnico SIRIEMA', '(67) 3318-6000'),
    ],
  },
  {
    name: 'Junta Comercial do Estado de Mato Grosso do Sul',
    acronym: 'JUCEMS',
    contacts: [
      email('E-mail', 'presidencia@jucems.ms.gov.br'),
      phone('Telefone', '(67) 3316-4429'),
    ],
  },
  {
    name: 'Polícia Civil de Mato Grosso do Sul',
    acronym: 'PCMS',
    contacts: [
      email('E-mail', 'dgpc@pc.ms.gov.br'),
      phone('Telefone', '(67) 3318-7900'),
      phone('Polícia Militar', '190'),
      phone('Disque Denúncia', '181'),
      phone('Central de Atendimento à Mulher', '180'),
      whatsapp('SIGO WhatsApp', '(67) 3318-7980'),
      whatsapp('DEVIR WhatsApp', '(67) 3318-7981'),
    ],
  },
  {
    name: 'Polícia Militar de Mato Grosso do Sul',
    acronym: 'PMMS',
    contacts: [
      email('E-mail', 'pmms@pm.ms.gov.br'),
      phone('Telefone', '(67) 3318-4405'),
      phone('Polícia Militar', '190'),
    ],
  },
  {
    name: 'Procuradoria Geral do Estado de Mato Grosso do Sul',
    acronym: 'PGE',
    contacts: [
      email('E-mail', 'pgegabinete@pge.ms.gov.br'),
      phone('Protocolo', '(67) 3348-5637', '(67) 3348-5638'),
      email('E-mail Protocolo', 'protocolo@pge.ms.gov.br'),
      phone('Procuradoria de Dívida Ativa (PCDA)', '(67) 3348-5626', '(67) 3348-5631'),
      email('E-mail Dívida Ativa', 'contribuinte@pge.ms.gov.br'),
      phone('Assessoria de Comunicação e Imprensa', '(67) 3348-5689'),
      email('E-mail Assessoria de Comunicação e Imprensa', 'comunicacao@pge.ms.gov.br'),
    ],
  },
  {
    name: 'Secretaria de Estado de Administração',
    acronym: 'SAD',
    contacts: [
      email('E-mail', 'gabinete@sad.ms.gov.br'),
      phone('Telefone', '(67) 3318-1325'),
      phone('PABX', '(67) 3318-1400'),
    ],
  },
  {
    name: 'Secretaria de Estado da Cidadania',
    acronym: 'SEC',
    contacts: [
      email('E-mail', 'gabinete@sec.ms.gov.br'),
      link('Whatsapp da Vitória'),
      link('Whatsapp Canal da Cidadania'),
      phone('PABX', '(67) 3348-6650'),
    ],
  },
  {
    name: 'Secretaria de Estado da Casa Civil',
    acronym: 'SECC',
    contacts: [
      email('E-mail', 'gabinete@casacivil.ms.gov.br'),
      phone('Telefone', '(67) 3318-1000'),
      phone('Telefone recepção', '(67) 3318-1071', '(67) 3318-1072'),
    ],
  },
  {
    name: 'Secretaria de Estado de Assistência Social e dos Direitos Humanos',
    acronym: 'SEAD',
    contacts: [
      email('E-mail', 'gabinete@sead.ms.gov.br'),
      phone('Telefone', '(67) 3318-4141'),
    ],
  },
  {
    name: 'Secretaria de Estado de Educação',
    acronym: 'SED',
    contacts: [
      phone('Atendimento ao Público', '(67) 3318-2229'),
      phone('Central de Matrículas', '0800 647 0028'),
    ],
  },
  {
    name: 'Secretaria de Estado de Fazenda',
    acronym: 'SEFAZ',
    contacts: [
      phone('Telefone', '(67) 3318-3298'),
      link('Fale Conosco SEFAZ'),
      link('Denúncia — Fiscalização de Tributos Estaduais'),
      phone('Suporte Técnico', '(67) 3318-3600'),
      link('Suporte Técnico Whatsapp'),
    ],
  },
  {
    name: 'Secretaria de Estado de Governo e Gestão Estratégica',
    acronym: 'SEGOV',
    contacts: [
      email('E-mail', 'segov@ms.gov.br'),
      phone('Telefone recepção', '(67) 3318-1099'),
      phone('PABX', '(67) 3318-1099'),
      phone('Protocolo', '(67) 3318-1099'),
    ],
  },
  {
    name: 'Secretaria de Estado de Infraestrutura e Logística',
    acronym: 'SEILOG',
    contacts: [
      email('E-mail', 'gabinete@seilog.ms.gov.br'),
      phone('Telefone', '(67) 3318-5301'),
      phone('PABX', '(67) 3318-5300'),
      phone('Gabinete', '(67) 3318-5504'),
      phone('Protocolo', '(67) 3318-5409'),
    ],
  },
  {
    name: 'Secretaria de Estado de Justiça e Segurança Pública',
    acronym: 'SEJUSP',
    contacts: [
      email('E-mail', 'sejuspms@sejusp.ms.gov.br'),
      phone('Telefone', '(67) 3318-6700'),
      phone('Polícia Militar', '190'),
      phone('Bombeiros', '193'),
      phone('Disque Denúncia', '181'),
      phone('Central de Atendimento à Mulher', '180'),
    ],
  },
  {
    name: 'Secretaria de Meio Ambiente, Desenvolvimento, Ciência, Tecnologia e Inovação',
    acronym: 'SEMADESC',
    contacts: [
      email('E-mail', 'gabinete@semadesc.ms.gov.br'),
      phone('Telefone', '(67) 3318-5000'),
    ],
  },
  {
    name: 'Secretaria de Estado de Saúde',
    acronym: 'SES',
    contacts: [
      email('E-mail', 'gabinete.ses@saude.ms.gov.br'),
      phone('Telefone', '(67) 3318-1600'),
      phone('Helpdesk', '(67) 4042-2479'),
      email('E-mail Helpdesk', 'helpdesk@saude.ms.gov.br'),
      phone('Ouvidoria do SUS', '0800 647 0031'),
      link('Registre sua solicitação'),
    ],
  },
  {
    name: 'Secretaria de Estado de Turismo, Esporte e Cultura',
    acronym: 'SETESC',
    contacts: [
      email('E-mail', 'gabinete@setesc.ms.gov.br'),
      phone('Telefone', '(67) 3316-9101'),
    ],
  },
  {
    name: 'Universidade Estadual de Mato Grosso do Sul',
    acronym: 'UEMS',
    contacts: [email('E-mail', 'reitoria@uems.ms.gov.br')],
  },
];
