export interface PhoneEntry {
  service: string;
  phone: string;
  /** Observação exibida abaixo do nome do serviço */
  note?: string;
}

export interface PhoneGroup {
  id: string;
  label: string;
  /** Placeholder do campo de busca da aba */
  searchLabel: string;
  entries: PhoneEntry[];
}

export const PHONE_GROUPS: PhoneGroup[] = [
  {
    id: 'emergencia',
    label: 'EMERGÊNCIA',
    searchLabel: 'Buscar por emergência',
    entries: [
      { service: 'Bombeiro', phone: '193' },
      { service: 'Samu', phone: '192' },
      { service: 'PM', phone: '190' },
      { service: 'Polícia civil', phone: '181' },
      {
        service: 'Central de atendimento à Mulher',
        phone: '180',
        note: 'Denúncia de violação contra as mulheres',
      },
      { service: 'Policia Ambiental', phone: '(67) 3357-1501' },
      {
        service: 'Delegacia Especializada de Atendimento à Mulher (Deam)',
        phone: '(67) 4042-1324',
      },
      {
        service:
          'Delegacia Especializada de Repressão Crimes Ambientais e de atendimento ao Turista (DECAT)',
        phone: '(67) 3325-2567',
      },
      {
        service: 'Delegacia Especializada em Repressão ao Narcotráfico (DENAR)',
        phone: '(67) 3345-0000',
      },
      {
        service: 'Delegacia Especializada de Roubos e Furtos (DERF)',
        phone: '(67) 3368-6001',
      },
    ],
  },
  {
    id: 'servicos',
    label: 'SERVIÇOS',
    searchLabel: 'Buscar por serviço',
    entries: [
      { service: 'Procon', phone: '151', note: 'Capitais e Regiões — (67) 3316-9800' },
      {
        service: 'Detran',
        phone: '154',
        note: 'Central de informações interior — (67) 3368-0500 · Central Center — (67) 3368-0100',
      },
      {
        service: 'Agência de Previdência do Mato Grosso do Sul',
        phone: '(67) 3323-7359',
      },
      {
        service: 'Agência Estadual de Regulação de Serviços Públicos Transporte',
        phone: '(67) 3025-9500',
      },
      {
        service: 'Agência de Habitação População do Estado de Mato Grosso do Sul',
        phone: '(67) 3348-3100',
      },
      {
        service: 'Agência Estadual de Defesa Sanitária e Vegetal (IAGRO)',
        phone: '(67) 3901-2668 / 2717',
      },
      {
        service: 'Junta Comercial do Estado de Mato Grosso do Sul',
        phone: '(67) 3318-4429',
      },
      { service: 'Hemosul', phone: '(67) 3312-1500' },
      { service: 'Hospital Regional', phone: '(67) 3378-2500' },
      {
        service: 'Fácil Atendimento do Shopping Bosque dos Ipês',
        phone: '(67) 3314-8120',
      },
      { service: 'Fácil Atendimento do Aero Rancho', phone: '(67) 3368-0100' },
      { service: 'Fácil Atendimento General Osório', phone: '(67) 3314-4778' },
      { service: 'Fácil Atendimento Guaicurus', phone: '(67) 3317-2810' },
      { service: 'Fundação de Cultura', phone: '(67) 3316-9174' },
      { service: 'Fundação de Turismo', phone: '(67) 3318-7600' },
      { service: 'Fundação de Desporte e Lazer', phone: '(67) 3323-7200' },
      {
        service:
          'Fundação de Apoio ao Desenvolvimento de Ensino, Ciência e Tecnologia',
        phone: '(67) 3316-6700',
      },
      {
        service: 'Instituto de Meio Ambiente de Mato Grosso do Sul (IMASUL)',
        phone: '(67) 3318-6000',
      },
      {
        service: 'Empresa de Saneamento de Mato Grosso do Sul',
        phone: '0800 067 6010',
      },
      {
        service: 'MS Gás — Companhia de Gás de Mato Grosso do Sul',
        phone: '0800 647 0300',
      },
      { service: 'Bioparque Pantanal', phone: '(67) 99217-8189' },
      { service: 'Centro de Atendimento à Mulher', phone: '(67) 3361-7519' },
      { service: 'Centro de Controle de Zoonose (CCZ)', phone: '(67) 3313-5001' },
    ],
  },
];
