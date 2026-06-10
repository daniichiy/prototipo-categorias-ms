export interface ServiceDetail {
  id: string;
  title: string;
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
}

export const CIDADAO_FEATURED: ServiceDetail[] = [
  {
    id: 'certidao-tributaria-estadual',
    title: 'Certidão tributária estadual - emissão (certidão circunstanciada de débitos estaduais)',
    agency: 'Secretaria de Estado de Fazenda de Mato Grosso do Sul',
    icon: 'paid',
    category: 'Finanças e Impostos',
    categorySlug: 'financas-impostos',
    channel: 'Online',
    description:
      'Emite certidão que comprova a situação fiscal do contribuinte perante o Fisco Estadual, confirmando a existência ou inexistência de débitos tributários estaduais — inscritos ou não em dívida ativa — referentes a tributos administrados pela Secretaria de Estado de Fazenda de Mato Grosso do Sul.',
    requirements: [
      'CPF (pessoa física) ou CNPJ (pessoa jurídica) do contribuinte a ser consultado.',
      'Acesso à internet para emissão pelo canal online.',
      'Não é necessário realizar cadastro prévio ou login no sistema para a consulta pública.',
      'Para contribuintes com Inscrição Estadual ativa, consulte também pelo número do CACMS.',
    ],
    whoCanUse:
      'Pessoa física ou jurídica com inscrição no Cadastro de Contribuintes do Estado de Mato Grosso do Sul (CACMS), ou qualquer interessado que necessite verificar ou comprovar a situação fiscal de um contribuinte perante o Fisco Estadual.',
    deadline:
      'A certidão é emitida de forma imediata, instantaneamente após a solicitação online. O documento gerado tem validade de 30 (trinta) dias corridos a partir da data de emissão.',
    costs: 'Gratuito. Não há cobrança de taxas ou emolumentos para emissão da certidão pelo canal online. Em caso de necessidade de autenticação física em cartório, eventuais custos são de responsabilidade do solicitante.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o portal de serviços da SEFAZ-MS e localize a opção "Certidão Tributária Estadual".',
        link: 'https://www.sefaz.ms.gov.br',
        linkLabel: 'Acessar SEFAZ-MS',
      },
      {
        step: 2,
        text: 'Selecione o tipo de pessoa: Física (CPF) ou Jurídica (CNPJ).',
      },
      {
        step: 3,
        text: 'Informe o número do CPF ou CNPJ do contribuinte a ser consultado e preencha o campo de verificação (CAPTCHA).',
      },
      {
        step: 4,
        text: 'Selecione "Certidão Circunstanciada de Débitos Estaduais" e clique em "Emitir".',
      },
      {
        step: 5,
        text: 'Verifique os dados exibidos e confirme a emissão do documento.',
      },
      {
        step: 6,
        text: 'Salve o arquivo PDF gerado ou imprima o documento. A certidão tem validade de 30 dias a partir da data de emissão.',
      },
    ],
    where: 'Exclusivamente pelo portal online da SEFAZ-MS, sem necessidade de deslocamento a unidades de atendimento presencial.',
    otherInfo: [
      {
        title: 'Validade',
        content: 'A certidão circunstanciada de débitos estaduais tem validade de 30 (trinta) dias corridos a partir da data de emissão, conforme legislação estadual vigente.',
      },
      {
        title: 'Legislação aplicável',
        content: 'Lei Estadual nº 1.810/1997 (Código Tributário Estadual de Mato Grosso do Sul); Decreto nº 9.203/1998 e suas alterações; Resolução SEFAZ nº 2.826/2015.',
      },
      {
        title: 'Certidão positiva com efeito de negativa',
        content: 'Quando existirem débitos com exigibilidade suspensa (parcelados, em discussão judicial ou administrativa), a certidão emitida pode ter efeito de negativa, indicando a situação regularizada temporariamente.',
      },
      {
        title: 'Canais de suporte',
        content: 'Dúvidas sobre a certidão podem ser esclarecidas pelo telefone 0800-647-0101 (SEFAZ-MS) ou presencialmente nas agências fazendárias distribuídas nos municípios do Estado.',
      },
    ],
    externalUrl: 'https://www.sefaz.ms.gov.br',
    attendanceOnlineUrl: 'https://www.sefaz.ms.gov.br/atendimento-virtual',
    attendancePresentialUrl: 'https://www.sefaz.ms.gov.br/agencias',
  },
  {
    id: 'consultar-fila-ambulatorial',
    title: 'Consultar Fila ambulatorial',
    agency: 'Secretaria de Estado de Saúde de Mato Grosso do Sul',
    icon: 'local_hospital',
    category: 'Saúde',
    categorySlug: 'saude',
    channel: 'Online',
    description:
      'Permite ao cidadão consultar sua posição na fila de espera para atendimento ambulatorial especializado no Sistema Único de Saúde (SUS) em Mato Grosso do Sul.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o Portal de Serviços da Secretaria de Saúde de MS.',
        link: 'https://www.saude.ms.gov.br',
        linkLabel: 'Acessar SES-MS',
      },
      {
        step: 2,
        text: 'Localize a opção "Consultar Fila Ambulatorial" e clique.',
      },
      {
        step: 3,
        text: 'Informe o número do Cartão Nacional de Saúde (CNS) ou CPF do paciente.',
      },
      {
        step: 4,
        text: 'Visualize sua posição na fila, a especialidade solicitada e a unidade de saúde de referência.',
      },
    ],
    whoCanUse:
      'Qualquer cidadão que esteja aguardando atendimento ambulatorial especializado pelo SUS no Estado de Mato Grosso do Sul e possua Cartão Nacional de Saúde (CNS).',
    where: 'Online, pelo portal da Secretaria de Estado de Saúde de Mato Grosso do Sul.',
    deadline: 'A consulta é imediata. O prazo de atendimento varia conforme a especialidade e a disponibilidade de vagas.',
    otherInfo: [
      {
        title: 'Cartão Nacional de Saúde',
        content: 'O CNS pode ser solicitado nas unidades de saúde do município de residência ou no portal Meu SUS Digital.',
      },
      {
        title: 'Dúvidas',
        content: 'Em caso de dúvidas, entre em contato com a Central de Regulação pelo telefone 0800-647-1101.',
      },
    ],
    externalUrl: 'https://www.saude.ms.gov.br',
  },
  {
    id: 'emitir-crlv-e',
    title: 'Emitir documento anual do veículo (CRLV-e)',
    agency: 'Departamento Estadual de Trânsito de Mato Grosso do Sul',
    icon: 'directions_car',
    category: 'Trânsito, Transportes e Infraestrutura',
    categorySlug: 'transito-transportes-infraestrutura',
    channel: 'Online',
    description:
      'Emite o Certificado de Registro e Licenciamento de Veículo eletrônico (CRLV-e), documento obrigatório que comprova o licenciamento anual do veículo e deve ser apresentado em fiscalizações de trânsito.',
    instructions: [
      {
        step: 1,
        text: 'Certifique-se de que o IPVA, seguro DPVAT e todas as multas do veículo estão quitados.',
      },
      {
        step: 2,
        text: 'Acesse o portal do DETRAN-MS ou o aplicativo "DETRAN Digital".',
        link: 'https://www.detran.ms.gov.br',
        linkLabel: 'Acessar DETRAN-MS',
      },
      {
        step: 3,
        text: 'Informe o RENAVAM e a placa do veículo.',
      },
      {
        step: 4,
        text: 'Selecione "Emitir CRLV-e" e confirme os dados do veículo.',
      },
      {
        step: 5,
        text: 'Baixe o documento em PDF ou salve no aplicativo. O CRLV-e tem validade digital e pode ser apresentado no celular.',
      },
    ],
    whoCanUse:
      'Proprietário do veículo ou responsável legal que tenha quitado o IPVA, seguro obrigatório e todas as multas do exercício vigente.',
    where: 'Online, pelo portal DETRAN-MS ou pelo aplicativo DETRAN Digital (disponível para iOS e Android).',
    deadline: 'Imediato após a verificação de quitação dos débitos. O licenciamento deve ser feito anualmente.',
    otherInfo: [
      {
        title: 'Validade',
        content: 'O CRLV-e tem validade para o exercício em que foi emitido (ano corrente).',
      },
      {
        title: 'Multa por falta do documento',
        content: 'Circular com o veículo sem o CRLV pode gerar multa de R$ 293,47 (infração grave) e retenção do veículo.',
      },
      {
        title: 'Custo',
        content: 'O valor do licenciamento inclui a taxa DETRAN e eventuais débitos pendentes do veículo.',
      },
    ],
    profiles: ['Cidadão', 'Servidor Público'],
    externalUrl: 'https://www.detran.ms.gov.br',
  },
  {
    id: 'renovacao-cnh',
    title: 'Pedir Renovação da Carteira Nacional de Habilitação - CNH',
    agency: 'Departamento Estadual de Trânsito de Mato Grosso do Sul',
    icon: 'directions_car',
    category: 'Trânsito, Transportes e Infraestrutura',
    categorySlug: 'transito-transportes-infraestrutura',
    channel: 'Online e Presencial',
    description:
      'Solicita a renovação da Carteira Nacional de Habilitação (CNH) vencida ou próxima ao vencimento, incluindo o agendamento dos exames médico e psicológico necessários.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o portal DETRAN-MS e selecione "Renovação de CNH".',
        link: 'https://www.detran.ms.gov.br',
        linkLabel: 'Acessar DETRAN-MS',
      },
      {
        step: 2,
        text: 'Informe o número do CPF e os dados da CNH atual.',
      },
      {
        step: 3,
        text: 'Realize o pagamento da taxa de renovação via boleto ou PIX.',
      },
      {
        step: 4,
        text: 'Agende o exame médico em uma clínica credenciada ao DETRAN-MS.',
      },
      {
        step: 5,
        text: 'Realize o exame médico (e psicológico, se necessário) e aguarde o resultado.',
      },
      {
        step: 6,
        text: 'Após aprovação, a nova CNH será enviada ao endereço cadastrado no prazo de até 30 dias.',
      },
    ],
    whoCanUse:
      'Condutor habilitado com CNH vencida ou a vencer, residente no Estado de Mato Grosso do Sul, sem penalidade de suspensão ou cassação em vigor.',
    where: 'Solicitação online pelo portal DETRAN-MS. Exames presenciais em clínicas credenciadas. Entrega da CNH pelo correio.',
    deadline: 'A CNH pode ser renovada com até 30 dias antes do vencimento ou a qualquer momento após o vencimento. O prazo de emissão é de até 30 dias após aprovação nos exames.',
    otherInfo: [
      {
        title: 'Documentos necessários',
        content: 'CPF, CNH atual (ou número de registro), comprovante de endereço e resultado dos exames médico e psicológico.',
      },
      {
        title: 'Validade da CNH',
        content: 'A CNH renovada tem validade de 5 anos para condutores abaixo de 50 anos; 3 anos para condutores entre 50 e 70 anos; e 1 ano para acima de 70 anos.',
      },
      {
        title: 'Custo',
        content: 'Taxa DETRAN de renovação + custo do exame médico conforme tabela da clínica credenciada.',
      },
    ],
    externalUrl: 'https://www.detran.ms.gov.br',
  },
  {
    id: 'boletim-acidente-transito',
    title: 'Realizar boletim on-line de acidente de trânsito – atendimento sem vítimas',
    agency: 'Polícia Militar de Mato Grosso do Sul',
    icon: 'local_police',
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
    deadline: 'O registro deve ser realizado preferencialmente no momento do acidente ou logo após. Recomenda-se o registro em até 24 horas.',
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
  },
  {
    id: 'boletim-ocorrencias-online',
    title: 'Registrar boletim de ocorrências on-line',
    agency: 'Polícia Civil de Mato Grosso do Sul',
    icon: 'local_police',
    category: 'Justiça e Segurança',
    categorySlug: 'justica-seguranca',
    channel: 'Online',
    description:
      'Permite registrar online Boletim de Ocorrência para crimes patrimoniais sem violência como furtos, extravios de documentos, estelionato e outros, sem necessidade de comparecimento à delegacia.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o portal da Polícia Civil de MS e selecione "Boletim de Ocorrência Online".',
        link: 'https://www.pc.ms.gov.br',
        linkLabel: 'Acessar PC-MS',
      },
      {
        step: 2,
        text: 'Selecione o tipo de ocorrência (furto, extravio, estelionato, etc.).',
      },
      {
        step: 3,
        text: 'Preencha os dados do solicitante: nome, CPF, endereço e contato.',
      },
      {
        step: 4,
        text: 'Descreva os fatos ocorridos com o máximo de detalhes possível.',
      },
      {
        step: 5,
        text: 'Confirme o registro e anote o número do BO gerado para acompanhamento.',
      },
    ],
    whoCanUse:
      'Qualquer cidadão que tenha sido vítima de crime sem violência ocorrido no Estado de Mato Grosso do Sul. Para crimes com violência, compareça pessoalmente à delegacia mais próxima.',
    where: 'Online, pelo portal da Polícia Civil de Mato Grosso do Sul. Disponível 24 horas por dia.',
    deadline: 'O registro pode ser feito a qualquer momento após o fato. Recomenda-se o registro o mais breve possível para preservar as informações.',
    otherInfo: [
      {
        title: 'Ocorrências que NÃO podem ser registradas online',
        content: 'Crimes com violência ou ameaça, flagrante delito, crimes contra a vida, tráfico de drogas e crimes contra a criança e adolescente devem ser registrados presencialmente.',
      },
      {
        title: 'Acompanhamento',
        content: 'O número do BO gerado pode ser usado para acompanhar o andamento da investigação pelo portal ou presencialmente na delegacia.',
      },
    ],
    externalUrl: 'https://www.pc.ms.gov.br',
  },
  {
    id: 'segunda-via-conta-agua',
    title: 'Solicitar 2ª via de conta',
    agency: 'Empresa de Saneamento de Mato Grosso do Sul',
    icon: 'water_drop',
    category: 'Finanças e Impostos',
    categorySlug: 'financas-impostos',
    channel: 'Online',
    description:
      'Solicita a segunda via da fatura de água e esgoto da SANESUL para pagamento ou comprovação, sem necessidade de deslocamento a unidades de atendimento.',
    instructions: [
      {
        step: 1,
        text: 'Acesse o portal de autoatendimento da SANESUL.',
        link: 'https://www.sanesul.ms.gov.br',
        linkLabel: 'Acessar SANESUL',
      },
      {
        step: 2,
        text: 'Informe o número da matrícula (inscrito na conta) ou o CPF/CNPJ do titular.',
      },
      {
        step: 3,
        text: 'Selecione o mês de referência da conta desejada.',
      },
      {
        step: 4,
        text: 'Clique em "Emitir 2ª Via" e aguarde a geração do boleto.',
      },
      {
        step: 5,
        text: 'Salve ou imprima o boleto para pagamento em qualquer banco, lotérica ou via PIX.',
      },
    ],
    whoCanUse:
      'Titular da conta de água e esgoto da SANESUL ou terceiro autorizado que necessite da segunda via para pagamento ou comprovação.',
    where: 'Online, pelo portal de autoatendimento da SANESUL. Também disponível pelo telefone 0800-722-0195 ou nas agências de atendimento.',
    deadline: 'Imediato. A 2ª via é gerada instantaneamente após a solicitação online.',
    otherInfo: [
      {
        title: 'Custo',
        content: 'Gratuito para emissão online. Pode haver taxa em caso de emissão presencial.',
      },
      {
        title: 'Pagamento',
        content: 'A 2ª via pode ser paga via boleto bancário, PIX, débito automático, internet banking ou presencialmente em agências bancárias e lotéricas.',
      },
    ],
    externalUrl: 'https://www.sanesul.ms.gov.br',
  },
  {
    id: 'programa-mais-social',
    title: 'Solicitar inclusão no Programa Mais Social',
    agency: 'Secretaria de Estado de Assistência Social e Direitos Humanos',
    icon: 'group',
    category: 'Assistência Social, Habitação e Cidadania',
    categorySlug: 'assistencia-social-habitacao-cidadania',
    channel: 'Presencial',
    description:
      'Solicita a inclusão no Programa Mais Social, política pública estadual de transferência de renda complementar ao Bolsa Família, voltada a famílias em situação de vulnerabilidade social em Mato Grosso do Sul.',
    instructions: [
      {
        step: 1,
        text: 'Verifique se você atende aos critérios de elegibilidade (renda per capita de até meio salário mínimo e estar no Cadastro Único - CadÚnico).',
      },
      {
        step: 2,
        text: 'Dirija-se ao CRAS (Centro de Referência de Assistência Social) do seu município.',
      },
      {
        step: 3,
        text: 'Apresente os documentos pessoais de todos os membros da família e o número do NIS (Número de Identificação Social).',
      },
      {
        step: 4,
        text: 'Preencha o formulário de solicitação com o assistente social responsável.',
      },
      {
        step: 5,
        text: 'Aguarde análise e aprovação da solicitação. Você será notificado sobre o resultado.',
      },
    ],
    whoCanUse:
      'Famílias residentes em Mato Grosso do Sul com renda familiar per capita de até meio salário mínimo, inscritas no Cadastro Único (CadÚnico) do Governo Federal e em situação de vulnerabilidade social.',
    where: 'Presencialmente nos CRAS (Centros de Referência de Assistência Social) do município de residência.',
    deadline: 'Não há prazo fixo. A análise é feita conforme disponibilidade de vagas e critérios do programa.',
    otherInfo: [
      {
        title: 'Documentos necessários',
        content: 'RG, CPF e comprovante de endereço de todos os membros da família; número do NIS; comprovante de renda (se houver); certidões de nascimento dos filhos menores.',
      },
      {
        title: 'Benefício',
        content: 'O valor do benefício é definido conforme regulamentação estadual e pode variar de acordo com a composição familiar.',
      },
      {
        title: 'CadÚnico',
        content: 'Caso sua família não esteja inscrita no CadÚnico, procure o CRAS para realizar o cadastramento antes de solicitar o benefício.',
      },
    ],
    externalUrl: 'https://www.assistenciasocial.ms.gov.br',
  },
];
