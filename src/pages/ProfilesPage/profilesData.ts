// ARQUIVO GERADO por data/build_profiles.py — NAO editar a mao.
// Fonte: data/cartas-com-descricao.xlsx (classificacao deterministica multi-rotulo).

export interface PerfilCard {
  orgaoLabel: string;
  titulo: string;
  meta: string;
  status: string;
  statusTone: 'info' | 'success' | 'warning';
}

export interface PerfilCarta {
  orgao: string;
  titulo: string;
  oQueE: string;
}

export interface TopOrgao {
  orgao: string;
  qtd: number;
}

export interface Perfil {
  id: string;
  nome: string;
  icon: string;
  cor: string;
  total: number;
  pctDoTotal: number;
  topOrgaos: TopOrgao[];
  exclusivas: number;
  compartilhadas: number;
  cards: PerfilCard[];
  cartas: PerfilCarta[];
}

export interface PerfisGlobais {
  totalCartas: number;
  multiPerfil: number;
  cobertura: number;
  gerados: string;
}

export const PERFIS_GLOBAIS: PerfisGlobais = {"totalCartas": 1219, "multiPerfil": 570, "cobertura": 79.1, "gerados": "data/build_profiles.py"};

export const PERFIS: Perfil[] = [
  {
    "id": "agronegocio",
    "nome": "Agronegócio",
    "icon": "leaf",
    "cor": "#2E7D32",
    "total": 328,
    "pctDoTotal": 26.9,
    "topOrgaos": [
      {
        "orgao": "SEFAZ MS",
        "qtd": 116
      },
      {
        "orgao": "IAGRO",
        "qtd": 115
      },
      {
        "orgao": "AGRAER",
        "qtd": 23
      },
      {
        "orgao": "IMASUL",
        "qtd": 22
      },
      {
        "orgao": "SEMADESC",
        "qtd": 12
      }
    ],
    "exclusivas": 73,
    "compartilhadas": 255,
    "cards": [
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Emitir licença de fretamento contínuo de transporte intermunicipal de passageiros",
        "meta": "Licença mensal, relativa ao deslocamento de pessoas em circuito fechado (ida e volta), por período determin...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Participar das atividades de educação ambiental da AGEMS",
        "meta": "As atividades desenvolvidas pela AGEMS integram um projeto de atuação da Agência na educação ambiental form...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Contratar mão de obra prisional",
        "meta": "Possibilidade de empregadores interessados contratarem pessoas em cumprimento de pena para executarem ativi...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Localizar pessoa privada de liberdade",
        "meta": "Acesso aos familiares, visitantes, advogados e demais interessados, ao nome e localização da Unidade Prisio...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Aderir ao programa de verticalização da produção agropecuária do estado do MS",
        "meta": "Programa de incentivo às agroindústrias com o objetivo de resgatar a cidadania do pequeno produtor rural, e...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Realizar consulta a titulação primitiva para ratificação de faixa de fronteira",
        "meta": "É uma consulta feita ao Acervo da AGRAER, identificando o Título Primitivo ao qual o polígono do imóvel inf...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "meta": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestã...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Solicitar atendimento técnico para acesso a recursos financeiros disponibilizados por instituições do sistema nacional de crédito rural",
        "meta": "Atendimento técnico a produtores interessados em acessar recursos financeiros, disponibilizados por Institu...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Solicitar cadastramento da agricultura rural familiar",
        "meta": "O Cadastro Nacional da Agricultura Familiar (CAF) é o instrumento oficial de identificação e qualificação d...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AGEMS",
        "titulo": "Emitir licença de fretamento contínuo de transporte intermunicipal de passageiros",
        "oQueE": "Licença mensal, relativa ao deslocamento de pessoas em circuito fechado (ida e volta), por período determinado, com quantidade de viagens, frequência e horários pré-definidos. U..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Participar das atividades de educação ambiental da AGEMS",
        "oQueE": "As atividades desenvolvidas pela AGEMS integram um projeto de atuação da Agência na educação ambiental formal e não-formal, com foco no saneamento básico e contemplando todos os..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Contratar mão de obra prisional",
        "oQueE": "Possibilidade de empregadores interessados contratarem pessoas em cumprimento de pena para executarem atividades laborais relacionadas ao serviço oferecido pela empresa."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Localizar pessoa privada de liberdade",
        "oQueE": "Acesso aos familiares, visitantes, advogados e demais interessados, ao nome e localização da Unidade Prisional, onde a pessoa privada de liberdade está sob custódia do Sistema P..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Aderir ao programa de verticalização da produção agropecuária do estado do MS",
        "oQueE": "Programa de incentivo às agroindústrias com o objetivo de resgatar a cidadania do pequeno produtor rural, excluído do processo econômico, inserindo-o no processo produtivo atrav..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Realizar consulta a titulação primitiva para ratificação de faixa de fronteira",
        "oQueE": "É uma consulta feita ao Acervo da AGRAER, identificando o Título Primitivo ao qual o polígono do imóvel informado está inserido, sendo utilizado como referência para solicitação..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "oQueE": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestão, produção, beneficiamento e comercialização das atividades e dos ser..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar atendimento técnico para acesso a recursos financeiros disponibilizados por instituições do sistema nacional de crédito rural",
        "oQueE": "Atendimento técnico a produtores interessados em acessar recursos financeiros, disponibilizados por Instituições do Sistema Nacional de Crédito Rural (SNCR), para aplicação excl..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar cadastramento da agricultura rural familiar",
        "oQueE": "O Cadastro Nacional da Agricultura Familiar (CAF) é o instrumento oficial de identificação e qualificação das Unidades Familiares de Produção Agrária, os Empreendimentos Familia..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de inteiro teor",
        "oQueE": "É a transcrição fiel do título primitivo conforme consta no microfilme ou livro fundiário. Tem a finalidade de comprovar que determinado imóvel foi titulado pelo Estado."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de legitimidade dominial",
        "oQueE": "Serviço utilizado para comprovar a veracidade da matrícula de um imóvel. Esta certidão apesar de não ser obrigatória, é recomendada para o cidadão que está comprando um imóvel e..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de localização quanto ao município",
        "oQueE": "É a comprovação em qual município o imóvel está inserido; geralmente utilizada para transferência da matrícula de comarca ou para averbação da Certificação do INCRA junto a matr..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de localização quanto ao município para pessoa física",
        "oQueE": "É a comprovação em qual município a pessoa nasceu, baseado na declaração do requerente e documentos históricos dos imóveis e lugarejos da região, encontrados no Acervo Fundiário..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de localização quanto a titulação primitiva",
        "oQueE": "Serviço utilizado para verificar a existência de terras devolutas dentro do perímetro do imóvel."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar Certidão de Regularidade Dominial de Imóvel Rural em Faixa de Fronteira",
        "oQueE": "A Certidão de Regularidade Dominial de Imóvel Rural em Faixa de Fronteira tem por objetivo validar a cadeia dominial apresentada ao Registro de Imóveis, no procedimento de ratif..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de veracidade de Matricula para fins de compensação de reserva ambiental",
        "oQueE": "Serviço utilizado para compensação de reserva legal dentro de parques estaduais (unidades de conservação estaduais). Certidão solicitada pelo IMASUL para habilitar o imóvel para..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar cópias processuais",
        "oQueE": "Cópia de processo administrativo ou de processo de Títulos Primitivos."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar declaração de inexistência de projeto de assentamento",
        "oQueE": "É uma declaração atestando que não consta projeto de assentamento previsto para a área de interesse do requerente, junto ao Setor de Agrimensura e Assentamento até a presente da..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar Declaração de Não Beneficiário do Programa Nacional de Crédito Fundiário - PNCF",
        "oQueE": "Serviço destinado à consulta no banco de dados estadual de beneficiários do Programa Nacional de Crédito Fundiário (PNCF), com a finalidade de emitir declaração que comprove que..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar parecer técnico",
        "oQueE": "Parecer técnico em assuntos fundiários, cartográficos e de agrimensura dentro das responsabilidades desta agência."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar regularização de excesso",
        "oQueE": "Serviço utilizado para regularização de excesso de área existente no imóvel e posterior retificação na matrícula. Trata-se de quando a área registrada na matrícula é menor do qu..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar regularização de parcelas em assentamentos implantados pelo Estado de MS",
        "oQueE": "É a regularização fundiária de uma parcela de um referido assentamento, nos moldes das exigências estabelecidas pela Legislação Fundiária e Portaria Agraer."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar regularização de terras devolutas",
        "oQueE": "Serviço utilizado para regularização de terras devolutas ocupadas, ou seja, terras sem titulo expedido pelo Estado."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar ultimação de título provisório",
        "oQueE": "Serviço utilizado para regularização de terras nas quais já foi emitido título provisório válido e será transformado em título definitivo."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar viabilização e aquisição de terra através do programa nacional de crédito fundiário",
        "oQueE": "Viabilizar a aquisição de terras pelo Programa Nacional de Crédito Fundiário – PNCF Terra Brasil. Programa que tem como objetivo principal o acesso à terra, contribuindo para a..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Obter certidão de ocorrência",
        "oQueE": "É a emissão do documento que comprova que o cidadão foi atendido por uma equipe do Corpo de Bombeiros Militar em ocorrências de incêndio (em residência, comércio, indústria, ter..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar atendimento para ações de defesa civil",
        "oQueE": "É o conjunto de ações destinadas à proteção e socorro de pessoas e bens, em caso de desastres, infortúnio ou calamidade, mesmo que preventivamente, diante de situação que acarre..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar busca e salvamento de pessoas ou bens",
        "oQueE": "É o conjunto de operações necessárias à localização, acesso e remoção com segurança de pessoas ou bens em situação de perigo, para local seguro. A busca e/ou salvamento é inicia..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Alterar espécie do veículo para coleção - Mesmo proprietário",
        "oQueE": "Mudança da espécie do veículo para coleção. Veículo de coleção é aquele fabricado há mais de trinta anos, original ou modificado, que possui valor histórico próprio."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Atualizar endereço do veículo",
        "oQueE": "Atualização do endereço do veículo, sem mudança de município."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar mudança de categoria",
        "oQueE": "Alteração da categoria do veículo, com emissão de novo certificado de registro de veículos (CRV)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Mudança de Categoria na Carteira Nacional de Habilitação - CNH",
        "oQueE": "Cadastro de processo para Mudança de Cagetogia na Carteira Nacional de Habilitação - CNH"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar mudança de placas para o novo padrão Mercosul",
        "oQueE": "É a atualização das placas de seu veículo (padrão antigo - placa cinza) para o novo padrão Mercosul."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar vistoria",
        "oQueE": "É uma inspeção realizada em veículos para verificar suas condições físicas, mecânicas e documentais. Essa inspeção pode ser feita por diferentes motivos, como transferência de p..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Trocar endereço do registro do veículo - mesmo proprietário (dono)",
        "oQueE": "Por meio desse serviço, você pode solicitar a troca de endereço do registro de seu veículo quando ocorrer mudança de cidade , dentro do Mato Grosso do Sul."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar a confecção de carteira nacional do artesão",
        "oQueE": "A carteira Nacional do Artesão é uma identificação nacional para artesãos e trabalhadores manuais de todo o Brasil. O documento tem abrangência nacional e oferece diversos benef..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Viabilizar apoios de fomento para impulsionar o desenvolvimento esportivo de federações, clubes, associações e prefeituras municipais",
        "oQueE": "Este serviço justifica-se na finalidade da Fundação de Desporto e Lazer de Mato Grosso do Sul que busca “fomentar, planejar, executar e difundir programas, projetos e atividades..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Anunciar vagas de emprego",
        "oQueE": "Plataformas digitais para facilitar o cadastramento de vagas de emprego por parte dos empregadores de Campo Grande"
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Reservar sala para atender candidatos",
        "oQueE": "Além dos demais serviços disponíveis ao empregador, a Funtrab dispõe do 'Espaço Empregador' para uso do empresário, de segunda a sexta, caso queira realizar o processo de seleçã..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar seguro-desemprego",
        "oQueE": "É um benefício, que pode ser solicitado por todos os trabalhadores, que forem dispensados sem justa causa pelo empregador."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Utilizar serviço psicossocial do trabalho",
        "oQueE": "Atendimento aos trabalhadores desempregados com pouca ou nenhuma qualificação profissional, baixa escolaridade, acima de 50 anos, idosos e pessoas com deficiência (PcD) e egress..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Aderir ao PACPOA-MS",
        "oQueE": "Adesão dos municípios ou consórcios de municípios ao Programa de Apoio à Comercialização de Produtos de Origem Animal – PACPOA-MS"
      },
      {
        "orgao": "IAGRO",
        "titulo": "Aderir ao PECOMS",
        "oQueE": "Programa para conversão das multas sanitárias em bens e serviços com o objetivo de dar suporte à IAGRO."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Alterar registro de empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Alterar registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóxicos. prestadores..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Atualizar cadastro de núcleo avícola comercial",
        "oQueE": "Atualização dos dados cadastrais dos núcleos avícolas comerciais registrados na Iagro. Em atendimento aos Decretos n° 13.064 de 05 de novembro de 2010 e n° 13.983 de 17 de junho..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Autorizar cultivos em unidades de pesquisa ou demonstrativa",
        "oQueE": "Autorizar a implantação de Unidades de Pesquisa ou Demonstrativa com cultivos de soja ou algodão em Mato Grosso do Sul. ⚠️ Excepcionalmente, a IAGRO poderá autorizar o cultivo e..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar apiário ou meliponário",
        "oQueE": "Serviço de cadastramento de apiários e meliponários que não possuem Inscrição Estadual. Observação: Caso o produtor possua Inscrição Estadual, deverá fazer o seu cadastro atravé..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar área com plantio florestal",
        "oQueE": "Cadastrar na Iagro área com plantio de florestas das espécies Eucalyptus , Corymbia , Pinus , Hevea e Ilex em Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar área com produção de citros",
        "oQueE": "Cadastro anual obrigatório de áreas de produção com finalidade econômica ou que possuam 50 ou mais plantas de citros (laranja, limão e tangerinas)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar área de plantio de soja ou algodão",
        "oQueE": "Cadastrar ou registrar na IAGRO toda e qualquer área cultivada com soja ou algodão em Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar colaborador do serviço de inspeção municipal/federal",
        "oQueE": "Cadastro na IAGRO no sistema e-SANIAGRO dos colaboradores do serviço de inspeção municipal/federal, para que possam realizar serviços pertinente às suas funções."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar e alterar registro de produtos agrotóxicos",
        "oQueE": "Cadastrar, alterar, transferir titularidade ou cancelar registro de produtos agrotóxicos no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar estabelecimento manipulador de subprodutos de origem animal não comestíveis para emissão de GTS",
        "oQueE": "Cadastramento de estabelecimentos do estado do Mato Grosso do Sul que manipulam e comercializam subprodutos de origem animal não comestíveis, de uso industrial ou técnico, no si..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar frigorífico",
        "oQueE": "Cadastro do frigorífico na Iagro (sistema e-Saniagro) para que o vendedor do gado possa emitir a GTA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar granjas de reprodutores suínos certificada  (GRSC)",
        "oQueE": "Cadastramento de propriedade ou estabelecimento que tem objetivo de comercializar suínos ou seu material genético para reprodução. Atender os requisitos definidos na Portaria SD..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar indústria produtos agrotóxicos no e-saniagro",
        "oQueE": "Cadastro de indústrias de produtos agrotóxicos no sistema e-saniagro para posterior cadastro de produtos agrtóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar laboratório e veterinário para uso do aplicativo resenha virtual",
        "oQueE": "Cadastramento de laboratórios privados e de médicos veterinários para utilizar o sistema Resenha Virtual de Equídeos (app e e-sanigro)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar manejador de suídeos asselvajados",
        "oQueE": "Cadastramento dos manejadores de espécies exóticas invasoras, para que possam transportar carcaças de javalis abatidos ."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar marca de rebanho",
        "oQueE": "Alteração ou a inserção de marca de rebanho na ficha sanitária."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar médico veterinário para realizar vacinação contra brucelose",
        "oQueE": "Cadastramento de profissional que deseja executar as atividades de vacinação contra brucelose no Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar no aplicativo transportador",
        "oQueE": "Cadastro online de motoristas e veículos (transportadores) de cargas vivas para utilizar o App Transportador."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar ou atualizar empresa integradora de ave ou suíno",
        "oQueE": "Cadastro ou atualização das informações cadastrais de empresas integradoras que atuam na produção de aves e suínos no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar ou atualizar laboratório de diagnóstico em sanidade avícola",
        "oQueE": "Cadastro ou atualização dos dados cadastrais de laboratórios que executam análises laboratoriais relacionadas à sanidade avícola, especialmente aquelas vinculadas aos programas..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar ou atualizar médico veterinário - avicultura ou suinocultura",
        "oQueE": "Cadastro ou atualização dos dados cadastrais de médicos veterinários que atuam no setor privado das cadeias produtivas da avicultura e da suinocultura no Estado de Mato Grosso d..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar propriedade como unidade de confinamento",
        "oQueE": "Formalização do cadastro de propriedades rurais como unidades de confinamento de bovinos e bubalinos, para fins de controle sanitário e adequação fiscal junto à SEFAZ/MS."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar propriedade rural de fora do MS",
        "oQueE": "Cadastramento no Sistema e-SANIAGRO de propriedades rurais de fora do estado do Mato Grosso do Sul, para que possa ser dada a anuência de documentos de trânsito, com a confirmaç..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar responsável técnico de revenda de produtos veterinários",
        "oQueE": "Cadastramento de responsáveis técnicos das revendas de produtos de uso veterinário."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda de aves vivas",
        "oQueE": "Emissão do certificado de cadastro de estabelecimento de venda de aves vivas. Modelo do certificado."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda de sêmen",
        "oQueE": "Cadastramento de revendas (comércio/estabelecimento) ou propriedade rural que comercializa material de multiplicação animal (sêmen)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda produtos veterinários",
        "oQueE": "Cadastro de estabelecimento (comércio) que atuam na comercialização de produtos de uso veterinário."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar-se como profissional habilitado para cultivos e estabelecimentos de insumos agrícolas",
        "oQueE": "Cadastramento de Engenheiros Agrônomos, Engenheiros Florestais ou Técnicos Agrícolas, na Iagro, como profissionais habilitados para cultivos agrícolas de soja, algodão, floresta..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cancelar o registro de estabelecimento comercial e prestador de serviço de agrotóxico",
        "oQueE": "Requerimento de baixa do registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóx..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cancelar registro de núcleo avícola comercial",
        "oQueE": "Suspensão ou o encerramento das atividades."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Certificar estabelecimento de criação livre de brucelose e/ou tuberculose animal",
        "oQueE": "A obtenção do certificado de estabelecimento de criação livre de brucelose e/ou tuberculose."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Certificar propriedade de descanso de ovinos para abate (PDOA)",
        "oQueE": "Certificação de propriedade rural como Propriedade de Descanso de Ovinos para Abate (PDOA) após vistoria, autorização, cadastro e emissão de certificação."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Classificar produtos e subprodutos de origem vegetal",
        "oQueE": "Realizar a classificação de produtos e subprodutos vegetais para determinar as qualidades intrínsecas e extrínsecas Produtos classificados pela Iagro: alho, amendoim, batata, ca..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar autenticidade de guia de trânsito animal - GTA",
        "oQueE": "Consultar e verificar a veracidade quanto aos dados e emissão da Guia de Trânsito Animal."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar Auto de Infração e Multa on-line",
        "oQueE": "Consultar através do módulo de multas do e-Saniagro Auto de Infração e Multa existente no CPF/CNPJ e inscrição estadual - IE, do interessado. Emitir DAEMS (à vista ou parcelado)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar comércio de aves vivas",
        "oQueE": "Consulta da situação dos estabelecimentos que comercializam aves vivas."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar documentos referente ao trânsito de animais",
        "oQueE": "O Sistema E-SANIAGRO é um Sistema on line que permite ao produtor, através do portal GAP (login, código de acesso e senha particular) realizar: emissão da guia de trânsito anima..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar equídeos identificados",
        "oQueE": "Consulta de equídeos identificados na resenha virtual utilizando ao menos duas informações sobre o animal (numeração da certidão de identificação do animal, chip, associação de..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar eventos com aglomeração de animais",
        "oQueE": "Consultar a listagem de eventos autorizados pela Iagro para o qual o promotor/responsável pela organização cumpriu todos os requisitos necessários para a realização do evento."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar informações oficiais",
        "oQueE": "Permite ao usuário realizar a busca de informações referente ao saldo (quantitativo) de animais por espécie, informes das Campanhas de Vacinação contra Febre Aftosa e verificar..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar legislaçâo",
        "oQueE": "Consulta a legislação relacionada à defesa agropecuária no Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar núcleos ativos (ave e suíno)",
        "oQueE": "Consulta da listagem de núcleos de aves e suínos do MS pela inscrição estadual ou código PGA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar ocorrências de ferrugem asiática da soja",
        "oQueE": "Consultar as ocorrências da doença Ferrugem Asiática da Soja no estado de Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar on line o trâmite das análises de solos e calcários",
        "oQueE": "Por meio de consulta online é possível acompanhar o andamento (trâmite) das análises das amostras de solos e calcários encaminhadas ao LABSOLOS."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar produtos agrotóxicos",
        "oQueE": "Consulta quanto ao devido cadastramento do produto junto à Iagro e acesso as informações técnicas (bula) para a correta utilização pelo usuário."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar relatório de fiscalização em comércio de agrotóxico",
        "oQueE": "Consulta de relatório resultado de fiscalização realizada pela Iagro em comerciante de produtos agrotóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar relatório de fiscalização em propriedade rural",
        "oQueE": "Consulta de relatório resultado de fiscalização ou vigilância realizada pela Iagro em propriedade rural."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar vacinas e antígenos nas lojas agropecuárias",
        "oQueE": "Permite realizar a busca de quais lojas agropecuárias são credenciadas a vender vacinas e antígenos, no município selecionado."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Controlar população de morcegos hematófagos",
        "oQueE": "Vistoria de possíveis abrigos de morcegos com captura e controle da população desta espécie como forma de prevenção à raiva dos herbívoros."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Credenciar laboratório de alimentos e/ou água de abastecimento",
        "oQueE": "Credenciamento de laboratórios de análises de produtos de origem animal e água de abastecimento."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Credenciar médico veterinário para atendimento a aglomeração de animais",
        "oQueE": "Credenciamento de médico veterinário autônomo para atendimento a eventos com aglomeração de animais."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Credenciar responsável técnico para emissão de GTS",
        "oQueE": "Credenciamento de médicos veterinários privados ou responsáveis técnicos de nível superior (RT), que comprovadamente prestem assistência técnica a estabelecimentos que manipulem..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Declarar a prestação de serviços de aplicação de agrotóxicos",
        "oQueE": "Declarar a prestação de serviços de aplicação de agrotóxicos"
      },
      {
        "orgao": "IAGRO",
        "titulo": "Declarar saldo de rebanho e atualizar cadastro",
        "oQueE": "Declaraçao semestral de saldo de rebanho e atualização cadastral, realizada nos seguintes períodos: de 1º a 31 de maio e de 1º a 30 de novembro, podendo ser ajustado caso a data..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Desabilitar ficha sanitária",
        "oQueE": "Solicitação junto a Iagro para desabilitação da sua ficha sanitária."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Elaborar plano de ação para positividade de salmonelas",
        "oQueE": "Elaboração e apresentação de plano de ação pelo médico veterinário responsável quando o estabelecimento avícola de corte tiver resultado positivo para Salmonela de controle ofic..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitário de Origem Consolidado (CFOC)",
        "oQueE": "Emissão de documento de Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitário de Origem Consolidado (CFOC) por Responsável Técnico de Unidade de Produção (UP)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Guia de Trânsito Animal (GTA)",
        "oQueE": "Emissão de guia de trânsito animal (GTA) intraestadual e interestadual."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Guia de Trânsito de Subprodutos de origem animal não comestíveis eletrônica (e-GTS)",
        "oQueE": "Emissão de guia de trânsito de subprodutos de origem animal não comestíveis eletrônica (e-GTS)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Permissão de Trânsito Vegetal (PTV)",
        "oQueE": "Solicitação de emissão de documento de Permissão de Trânsito de Vegetais (PTV) que acompanha o trânsito da partida de plantas ou produtos vegetais que possuam restrições ou cond..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Habilitar ficha sanitária",
        "oQueE": "Serviço de cadastramento para pessoa física ou jurídica (empresa), incluindo as cooperativas ou prestadoras de serviço, que exerçam atividades ou evento, com ou sem finalidade e..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Habilitar ou renovar responsável técnico para emissão de Certificado Fitossanitário de Origem (CFO) e Certificado Fitossanitário de Origem Consolidado (CFOC)",
        "oQueE": "Habilitação/Renovação de Habilitação de Responsável Técnico para emissão de Certificado Fitossanitário de Origem (CFO) e Certificado Fitossanitário de Origem Consolidado (CFOC)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Inscrever Unidade de Produção para emissão de Certificado Fitossanitário de Origem (CFO).",
        "oQueE": "Inscrição de Unidade de Produção para emissão de Certificado Fitossanitário de Origem (CFO) e posterior solicitação de emissão do documento de Permissão de Trânsito de Vegetais..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Inscrever Unidade de Produção para emissão de Certificado Fitossanitário de Origem Consolidada (CFOC).",
        "oQueE": "Inscrição de Unidade de Consolidação para emissão de Certificado Fitossanitário de Origem Consolidado (CFOC) e posterior solicitação de emissão do documento de Permissão de Trân..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Notificar Ferrugem Asiática da Soja",
        "oQueE": "Comunicar ou notificar à IAGRO o surgimento da Ferrugem Asiática da Soja , imediatamente após a sua detecção na área cultivada. ⚠️ A notificação é uma medida sanitária obrigatór..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Notificar suspeita ou casos confirmados de doenças e/ou mortalidade de animais.",
        "oQueE": "Notificação é uma comunicação formal, é informar alguém sobre um acontecimento ou situação que está ocorrendo. Aqui estamos nos referindo a notificação como a comunicação ao Ser..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Obter selo arte",
        "oQueE": "Processo avaliador para a concessão do Selo Arte ao produto indicado pelo serviço de inspeção oficial."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Participar do seminário socioeducativo área animal",
        "oQueE": "O seminário socioeducativo é um benefício, opcional, e visa aprimorar questões relacionadas à área animal para obter desconto de 25% na multa."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de anemia infecciosa equina",
        "oQueE": "Diagnóstico sorológico da anemia infecciosa equina por meio da técnica de IDGA ou ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Doença de Aujeszky",
        "oQueE": "Diagnóstico da doença de aujeszky por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de mormo",
        "oQueE": "Diagnóstico de mormo por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Peste Suína Africana",
        "oQueE": "Diagnóstico de peste suína africana por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de peste suína clássica",
        "oQueE": "Diagnóstico da peste suína clássica por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Síndrome Reprodutiva e Respiratória dos Suínos",
        "oQueE": "Diagnóstico da síndrome reprodutiva e respiratória dos suínos por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar transferência do registro no Serviço de Inspeção Estadual (SIE)",
        "oQueE": "Transferência da titularidade do registro do estabelecimento registrado junto ao Serviço de Inspeção Estadual - SIE, para outra pessoa física ou jurídica."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Reemitir ou substituir DAEMS vencida",
        "oQueE": "Serviço para reemitir/substituir um DAEMS vencida (pendente de pagamento)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar a vacinação contra brucelose",
        "oQueE": "Registro online no sistema e-saniagro da vacinação contra brucelose, obrigatória em fêmeas bovinas e bubalinas de 3 a 8 meses de idade."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Requerimento de novo registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóxicos..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar estabelecimento comerciante de mudas cítricas",
        "oQueE": "Registro obrigatório do estabelecimento, junto a IAGRO, para o comércio de mudas cítricas (plantas dos gêneros Citrus , Fortunella e Poncirus)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar estabelecimento no serviço de inspeção estadual (SIE)",
        "oQueE": "Registrar estabelecimento de produtos de origem animal no serviço de inspeção estadual (SIE)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar núcleo avícola comercial",
        "oQueE": "Registro dos núcleos avícolas comerciais de corte e postura e ensino/pesquisa."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar produtos de origem animal junto ao Serviço de Inspeção Estadual (SIE)",
        "oQueE": "Registro de produtos junto ao serviço de inspeção estadual (SIE)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar Relatório Semestral Fitossanitário de Área de Citros",
        "oQueE": "Relatório Semestral obrigatório referente aos resultados do monitoramento do psilídeo Diaphorina citri e das erradicações de plantas sintomáticas para a praga quarentenária HLB."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Regularizar cadastro de animais aquáticos (anistia)",
        "oQueE": "Regularização do cadastramento dos produtores de animais aquáticos, sem ônus, até 31/12/2027."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Regularizar estoque de agrotóxicos",
        "oQueE": "Este serviço tem como objetivo regularizar o saldo registrado no sistema E-Saniagro, alinhando-o com o estoque físico existente no estabelecimento comerciante de agrotóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Regularizar rebanho de caprino e ovino (anistia)",
        "oQueE": "Regularização de rebanho de caprinos e/ou ovinos, sem ônus, até 31/12/2025."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Renovar credenciamento de responsável técnico para emissão de GTS",
        "oQueE": "Renovação de credenciamento de médicos veterinários privados ou responsáveis técnicos de nível superior (RT), que comprovadamente prestem assistência técnica a estabelecimentos..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Renovar registro de empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Renovação do certificado de registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço*, comerciantes, transportadoras e armazenadoras de produtos agr..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Renovar registro de núcleo avícola",
        "oQueE": "Solicitação de renovação do registro de núcleos avícolas comerciais de corte, postura e ensino/pesquisa."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer a Manutenção da Unidade de Produção de Cultura Perene",
        "oQueE": "Manter os dados das Unidades de Produção de cultura perene atualizados anualmente e com saldo disponível para emissão do documento de Certificação Fitossanitária de Origem (CFO)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer  autorização para aquisição/importação de mudas cítricas - estabelecimentos",
        "oQueE": "Requerimento de autorização para aquisição ou importação de mudas cítricas a ser solicitado por estabelecimento registrado na IAGRO."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer autorização para aquisição/importação e plantio de mudas cítricas",
        "oQueE": "Requerimento para autorização de aquisição/importação e plantio de mudas cítricas."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer certificado de destruição de soqueira de algodão",
        "oQueE": "Este serviço permite que o produtor rural ou instituição de pesquisa solicite o Certificado de Destruição de Soqueira de Algodão à IAGRO, após o cumprimento das medidas fitossan..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer Habilitação de Colheita em Unidade de Produção de Citros",
        "oQueE": "Requerimento para habilitação da Unidade de Produção ou de seus talhões específicos para colheita, após vistoria prévia feita pelo Responsável Técnico (RT) com objetivo de verif..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar adesão ao sistema brasileiro de inspeção de produtos de origem animal (SISBI/POA)",
        "oQueE": "Adesão de estabelecimentos SIE no sistema brasileiro de inspeção de produtos de origem animal (SISBI/POA)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar análise de amostra de calcário",
        "oQueE": "Análises químicas e físicas de amostras de calcários para fins de controle de qualidade."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar análise de amostra de solo",
        "oQueE": "Análises químicas e físicas de amostras de solos para fins de fertilidade, ou seja, são realizadas para verificar se o solo necessita de correção para que se possa plantar uma d..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar análise e reanálise de sementes",
        "oQueE": "Analisar e reanalisar a qualidade de amostras de sementes. FORRAGEIRAS: Análises realizadas: Análise de pureza, Determinação de outras sementes por número, Peso de mil sementes,..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar autorização para eventos com aglomeração de animais",
        "oQueE": "Solicitação de autorização para a realização de eventos com aglomeração de animais."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar cadastro e recadastro de suinoculturas",
        "oQueE": "O cadastramento de suinocultura tecnificada na Iagro"
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar cancelamento de GTA",
        "oQueE": "Solicitação de cancelamento de GTA por problemas que impossibilitaram o embarque e/ou o trânsito dos animais."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar exame de  leptospirose",
        "oQueE": "Diagnóstico de leptospirose por meio da técnica Soroaglutinação Microscópica (SAM)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar exame de raiva",
        "oQueE": "D iagnóstico da raiva por meio das técnicas de imunofluorescência direta (IFD) e PCR em tempo real."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar palestra para produtores e educadores",
        "oQueE": "Solicitação de cursos, palestras ou seminários para produtores rurais, comunidades locais e profissionais ligados à agropecuária, incluindo a formação de professores e multiplic..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar participação em seminário socioeducativo da área vegetal",
        "oQueE": "O seminário socioeducativo da área vegetal é um benefício facultativo a autuados por falta de cadastramento de áreas de plantio de soja, que visa obter desconto no valor da mult..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar pré-vistoria para instalação de núcleo avícola",
        "oQueE": "Solicitação da vistoria prévia de uma área para implantação de qualquer estabelecimento avícola (comercial, de reprodução ou de ensino/pesquisa) no Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar ressarcimento de valor pelo Iagro",
        "oQueE": "Ressarcimento de Valores pagos pelo contribuinte, por cancelamento de e-GTA, duplicidade de pagamento ou pagamentos equivocados."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar vistoria de sala de exame de MVH no PNCEBT",
        "oQueE": "Vistoria e fiscalização da sala de exame para realização de testes diagnósticos de brucelose e tuberculose para habilitação de médico veterinário no Programa Nacional de Control..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Suspender ou cancelar registro junto ao Serviço de Inspeção Estadual - SIE a pedido",
        "oQueE": "Suspensão ou cancelamento do registro junto ao Serviço de Inspeção Estadual (SIE), a pedido do próprio estabelecimento."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Termo de Habilitação de colheita",
        "oQueE": "Requerimento de Termo de Habilitação de colheita para Unidade de Produção de frutos do gênero Citrus, ou de seus talhões específicos, com objetivo de comprovar a verificação da..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Utilizar o APP Transportador",
        "oQueE": "Registro das informações detalhadas sobre o transporte / trânsito de animais."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Apresentar monitoramento de outorga de recursos hídricos",
        "oQueE": "O monitoramento de outorga de recursos hídricos constitui instrumento essencial para o acompanhamento das condições quantitativas e qualitativas dos usos autorizados, permitindo..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Cadastrar ações de educação ambiental no SisEA",
        "oQueE": "O SisEA-MS é o Sistema Estadual de Informações em Educação Ambiental do Imasul. Ele permite o cadastro de programas, projetos, campanhas e ações de educação ambiental realizados..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Descentralizar o licenciamento ambiental",
        "oQueE": "Trata-se da transferência da competência para licenciar, fiscalizar e monitorar atividades de impacto local, que deixa de ser exercida pelo órgão estadual e passa a ser atribuiç..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer acesso ao sistema de logística reversa de embalagens em geral",
        "oQueE": "A Logística Reversa de Embalagens em Geral é um instrumento de desenvolvimento econômico e social previsto na Política Nacional de Resíduos Sólidos (PNRS), instituída pela Lei F..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer participação no rateio do ICMS Ecológico - Componente Resíduo Sólidos",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar aprovação de plano de manejo de RPPN",
        "oQueE": "Reserva Particular do Patrimônio Natural (RPPN) é uma categoria de unidade de conservação criada pela vontade do proprietário rural, sem desapropriação de terra e em caráter per..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para a pesca amadora e/ou desportiva",
        "oQueE": "A Autorização Ambiental para Pesca Amadora e/ou Desportiva serve para autorizar o uso de recursos pesqueiros para a atividade de pesca desportiva ou de lazer, limitando a quanti..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para Corte Isolado de Árvores Nativas (CANI)",
        "oQueE": "Corte Isolado de Árvores Nativas – CANI. Atividade que não enquadrada como supressão vegetal, trata-se de área anteriormente convertida para uso alternativo do solo compresença..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para manejo de fauna ex situ",
        "oQueE": "Manejo de fauna ex situ é a ação autorizada para atendimento das finalidades de pesquisa científica de conservação de manutenção, de criação, de reprodução, de comercialização,..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para pesca profissional",
        "oQueE": "A Autorização Ambiental para Pesca Comercial (AAPC) serve para autorizar o uso de recursos pesqueiros para a atividade de pesca comercial para quem trabalha como pescador profis..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar Autorização Ambiental para Supressão Vegetal",
        "oQueE": "A supressão é o corte raso de qualquer tipo de vegetação nativa passível de autorização existente no território do estado de Mato Grosso do Sul, que somente poderá ser realizada..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar cadastro e outorga de uso de recursos hídricos (CEURH)",
        "oQueE": "Os diversos usos da água podem ser concorrentes, gerando conflitos entre setores usuários e impactos ambientais. Nesse sentido, gerenciar recursos hídricos é uma necessidade pre..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar compensação de reserva legal em unidade de conservação por meio de doação de terras para o Estado",
        "oQueE": "Trata-se de um serviço destinado à regularização ambiental e fundiária por meio da compensação de Reserva Legal em Unidades de Conservação de domínio público, conforme estabelec..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar cópia de processo ambiental",
        "oQueE": "Permite ao interessado solicitar cópias de processos administrativos ambientais."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar credenciamento e/ou renovação de credenciamento de laboratório",
        "oQueE": "O Credenciamento e/ou renovação de credenciamento de laboratório é um processo obrigatório para os laboratórios públicos ou privados que atuam na área ambiental e realizam mediç..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar declaração negativa relativo a multa ambiental",
        "oQueE": "Emitir declaração a fim de constar ou não multas ambientais em nome do solicitante ou propriedade rural."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar de criação (ou ampliação) de RPPN",
        "oQueE": "É o instrumento oficial estadual para a criação ou ampliação de uma Unidade de Conservação da categoria de Reserva Particular do Patrimônio Natural (RPPN). A base legal para a c..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar inscrição de UC no Cadastro Estadual de Unidades de Conservação (CEUC)",
        "oQueE": "O Cadastro Estadual de Unidades de Conservação (CEUC) é o instrumento de reconhecimento oficial das unidades de conservação no Estado de Mato Grosso do Sul, com vistas à partiçã..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar inscrição no Cadastro Ambiental Rural - CARMS",
        "oQueE": "O Cadastro Ambiental Rural é um registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais, com a finalidade de integrar as informações ambientais..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar licença ambiental",
        "oQueE": "O Licenciamento Ambiental é um instrumento que autoriza pessoas física ou jurídica a desenvolver implantar e operar empreendimentos ou atividades no âmbito do estado de Mato Gro..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar participação no ICMS Ecológico – Componente Unidades de Conservação e Terras Indígenas",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar vista de processo ambiental",
        "oQueE": "Permite ao interessado acessar o conteúdo de processos ambientais para consulta."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Registrar abertura ou alteração de empresa",
        "oQueE": "Abertura: é o processo de registro empresarial para abertura de empreendimento comercial constituído para explorar um ou mais ramos de negócios e oferecer ao mercado serviços e/..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar o encerramento de fornecimento de gás natural",
        "oQueE": "Refere-se ao encerramento do fornecimento de gás para clientes interligados à rede de distribuição."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Cadastrar Câmara Arbitral",
        "oQueE": "Este serviço permite que Câmaras Arbitrais se cadastrem para atuar na resolução de conflitos em contratos de parceria do Estado de Mato Grosso do Sul, conforme a Lei nº 5.829/20..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "IPVA ou LICENCIAMENTO - emitir boleto",
        "oQueE": "Emita seu boleto aqui. Este serviço permite que o proprietário de veículo com débito de IPVA ou licenciamento inscrito em dívida ativa consulte os valores e emita o boleto para..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pagar ou parcelar débito inscrito em dívida ativa",
        "oQueE": "Este serviço permite que o cidadão com débito inscrito em dívida ativa parcele ou pague o valor devido. Para IPVA e Licenciamento Anual de veículos, o pagamento e o parcelamento..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto florestinha – educação ambiental",
        "oQueE": "O Projeto Florestinha é um projeto socioambiental criado em 23 de novembro de 1992, e oficialmente regulamentando por meio da Portaria nº 16/13/PM-3/PMMS de 22 de outubro de 201..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Policiamento Rural – Guardião da vida, do Progresso e da Segurança no Campo",
        "oQueE": "É o serviço da Polícia Militar responsável pelo policiamento ostensivo e pela preservação da ordem pública nas áreas rurais. Atua na prevenção e combate aos crimes no campo, gar..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Solicitar Resgate de Animal Silvestre",
        "oQueE": "É o atendimento realizado pela Polícia Militar Ambiental para recolhimento, contenção e encaminhamento de animal silvestre encontrado fora do seu habitat natural, ferido, debili..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Participar de licitação",
        "oQueE": "É o processo licitatório para aquisição de bens e a contratação de serviços comuns (contratados pelo Rito Procedimental similar ao Pregão), assim como os procedimentos de licita..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento pelo Programa Direitos Humanos em Ação",
        "oQueE": "Esse serviço oferece ações educativas sobre direitos humanos, com o objetivo de: Informar, orientar e conscientizar pessoas e grupos; Fortalecer o empoderamento individual e col..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar orientação para retificação do nome no registro civil",
        "oQueE": "Pessoas travestis e transexuais que desejam alterar o nome e gênero de registro em sua documentação de nascimento pelo nome social podem procurar diretamente, sem a presença de..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Participar dos projetos do programa MS desporto escolar  PRODESC – treinamento desportivo",
        "oQueE": "Um instrumento essencial de efetivação de uma política esportiva escolar que fortalece as competências e estimula as potencialidades dos alunos-atletas, além de prepará-los para..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Análise das obrigações socioeconômicas pactuadas em Termo de Acordo - Benefício da Lei Complementar nº 93/2001",
        "oQueE": "Este serviço é o canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 comprove, de forma espontânea ou mediante i..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - controle de empresas interdependentes (art. 57-A da Lei nº 1.810/1997) - apenas para contribuintes de Mato Grosso do Sul",
        "oQueE": "Reconhecimento da condição de interdependência, prevista no art. 57-A da Lei nº 1.810/1997 , entre empresa de Mato Grosso do Sul e empresa de outra Unidade da Federação que lhe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - aquisição de milho e soja para uso na ração animal, com diferimento do ICMS",
        "oQueE": "Solicitar Autorização Específica para aquisição de milho e soja com diferimento do pagamento do ICMS, nas operações internas realizadas por produtor rural, para uso como ração a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - credenciamento para remessa de alumínio a estabelecimentos de outra UF, assumindo a responsabilidade pelo pagamento do ICMS (art. 47-A, § 5º, II do Anexo III ao RICMS)",
        "oQueE": "Credenciamento de empresas para realizar operações interestaduais com alumínio em formas brutas e quaisquer outras mercadorias classificadas na posição NCM/SH 7601, destinadas a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito outorgado e redução do percentual de MVA nas operações internas realizadas por estabelecimentos comerciais atacadistas (Decreto nº 15.368/2020) - apenas para atacadistas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 4º do Decreto nº 15.368/2020 , para utilização de: Crédito outorgado previsto nos artigos 1º e 3º desse decreto, nas operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito outorgado nas operações internas e interestaduais com açúcar pelos fabricantes de açúcar",
        "oQueE": "Solicitar Autorização Específica para usufruir do crédito outorgado previsto no art. 2º do Decreto nº 9.745/1999 , incidente nas operações internas e interestaduais com açúcar e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações com os produtos resultantes da industrialização do leite (art. 1º do Decreto nº 6.996/1993) - apenas para industrializadores de leite",
        "oQueE": "Concessão de Autorização Específica para utilização de crédito presumido previsto no art. 1º do Decreto nº 6.996/1993 , nas operações internas e interestaduais, sobre o valor do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações internas ou interestaduais com produtos cerâmicos (art. 77, II do Anexo I ao RICMS) - apenas para indústrias",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 77, II do Anexo I ao Regulamento do ICMS , para utilização do benefício de crédito presumido sobre o valor do imposto incid..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de embalagens plásticas e latas produzidas em MS para acondicionar os produtos do adquirente (Resolução Interna SEF de 1993) - apenas para indústrias e abatedores de animais",
        "oQueE": "Concessão de Autorização Específica, prevista na Resolução Interna SEF 000/1993 , para que indústrias e estabelecimentos abatedores de aves, bovinos, suínos e outros animais adq..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por empresa industrializadora de ração animal, na operação interna (art. 7º do Decreto nº 9.895/2000) - apenas para indústrias de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 7º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas, dentro do Estado de Mato Grosso do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por indústrias, na operação interna (art. 3º do Decreto nº 9.895/2000) - apenas para indústrias, exceto fabricantes de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 3º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas de estabelecimentos comerciais ou d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas operações internas com couro bovino ou bufalino e produtos químicos adquiridos por industrializadores de couro (Decreto nº 11.796/2005) - apenas para indústrias de couro",
        "oQueE": "Concessão de Autorização Específica, prevista nos art. 3º e 4º do Decreto nº 11.796/2005 , para aquisição de couro bovino ou bufalino e de produtos químicos utilizados em seu pr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas saídas internas de algodão em pluma, realizadas por produtor, para outro estabelecimento do mesmo produtor (art. 10, II do Decreto nº 9.895/2000) - apenas para produtores de algodão",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 10, II do Decreto nº 9.895/2000 , para receber algodão em pluma produzido e beneficiado em MS, de outro estabelecimento pro..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS no recebimento de grãos da CONAB - para estabelecimentos industriais, comerciais ou de cooperativas (art. 1º, § 1º, II, c do Anexo II ao RICMS)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º, § 1º, II, c do Anexo II ao Regulamento do ICMS , para recebimento de produtos agropecuários da Companhia Nacional de Ab..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS Garantido-Abate (Decreto nº 12.056/2006) - serviço exclusivo para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica de diferimento do ICMS Garantido-Abate - apenas para Atacadistas de Carne inscritos no CAE 4.17.00 (autorização prevista no art...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS incidente na aquisição de gado bovino e bufalino em pé para abate (Decreto nº 12.056/2006) - serviço exclusivo para frigoríficos (CAE 3.17.03)",
        "oQueE": "Concessão ou renovação de Autorização Específica de Diferimento do ICMS nas aquisições de gado bovino e bufalino para abate - apenas para frigoríficos inscritos no CAE 3.17.03 (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - apenas para usinas e industriais de combustíveis, derivados ou não de petróleo",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - serviço exclusivo para cerealistas ou comercializadoras de cereais",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS Garantido-Abate - serviços exclusivos para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica (prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS nas operações com gado bovino e bufalino para abate ou diferimento do ICMS Garantido-Abate - exclusivo para frigoríficos",
        "oQueE": "Concessão ou renovação de Autorização Específica ( prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interesta..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS nas saídas interestaduais - empresas NÃO ENQUADRADAS como cerealistas ou comercializadoras de cereais, usinas ou industriais de combustíveis, frigoríficos e atacadistas de carne",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestaduais de produ..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - percentual de valor diferenciado de MVA para produtos alimentícios (art. 6º-D do Anexo III ao RICMS) - apenas para indústrias de alimentos",
        "oQueE": "Concessão de autorização específica, prevista no artigo 6º-D do Anexo III ao Regulamento do ICMS , para que estabelecimentos industriais localizados neste Estado realizem operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações com produtos resultantes da industrialização da mandioca (art. 60-B do Anexo I ao RICMS) - apenas para industrializadores de mandioca",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-B do Anexo I ao Regulamento do ICMS , para utilização do benefício de redução de base de cálculo nas operações internas..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações internas com máquinas novas relacionadas no Decreto nº 16.114/2023 - apenas para empresas comercializadoras das máquinas citadas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 2º do Decreto nº 16.114/2023 , para utilização do benefício de redução de base de cálculo nas operações internas com máquin..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas saídas de farinha de mandioca promovidas por produtor rural (art. 60-F do Anexo I ao RICMS) - apenas para produtores rurais",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-F do Anexo I ao Regulamento ICMS , para utilização do benefício de redução de base de cálculo nas saídas internas e inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - remessa interna para industrialização com diferimento do ICMS incidente sobre o valor do serviço de industrialização, no retorno dos produtos ao estabelecimento de origem (Decreto nº 11.236/2003)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º-A do Decreto nº 11.236/2003 , para que a indústria detentora de benefício ou incentivo fiscal aplique o diferimento ao I..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - inclusão de franqueadora no regime especial de transportadora conveniada (Anexo XII ao RICMS) - apenas para transportadoras de MS com regime especial de transportadora conveniada",
        "oQueE": "Autorização SAT para que empresa que possui Regime Especial de Transportadora Conveniada, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , inclua em seu regime especial..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - alteração de dados cadastrais",
        "oQueE": "Solicitar alteração de informações cadastrais da pessoa ou do estabelecimento, relativamente à atividade explorada, à natureza jurídica, ao endereço pessoal do contribuinte e a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - baixa da inscrição estadual",
        "oQueE": "Solicitar a baixa da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de apicultor e de meliponicultor",
        "oQueE": "Solicitar inscrição estadual de Apicultor e de Meliponicultor no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de pescador profissional",
        "oQueE": "Solicitar inscrição estadual de Pescador Profissional no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural",
        "oQueE": "Solicitar inscrição estadual de produtor rural no Cadastro da Agropecuária – CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural em terras indígenas",
        "oQueE": "Solicitar inscrição estadual de produtor em Terras Indígenas no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição estadual provisória para produtor rural em processo de regularização fundiária, assentamento, posse ou propriedade litigiosa",
        "oQueE": "Solicitar inscrição estadual provisória do estabelecimento no Cadastro da Agropecuária - CAP, nos casos em que a posse imobiliária do imóvel rural esteja submetida a processo de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação da inscrição estadual",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação de inscrição estadual suspensa por vencimento de contrato",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP, a qual foi suspensa em virtude do vencimento do contrato de arrendamento, comodato, cessão gratui..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - suspensão temporária da inscrição estadual a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual no Cadastro da Agropecuária, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro de contabilistas - inclusão e alteração de dados do contabilista",
        "oQueE": "Solicitar a inclusão e a alteração dos dados cadastrais de contabilista, pessoa física ou jurídica, no Cadastro de Contabilistas do Estado de MS, a fim de que o profissional ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de cerealista",
        "oQueE": "Concessão de inscrição no Cadastro do Comércio, Indústria e Serviços (CCIS) para estabelecimentos que tenham por atividade o beneficiamento elementar ou primário e o comércio at..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de empresas",
        "oQueE": "Solicitar a Inscrição Estadual no Cadastro de Contribuintes do Comércio, Indústria e Serviços - CCIS. Observação: empresas industriais ou comerciais de combustíveis, derivados o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cancelamento ou suspensão de inscrição estadual de terceiro no cadastro",
        "oQueE": "Solicitação de suspensão ou cancelamento de inscrição estadual, protocolado pelo PROPRIETÁRIO e/ou por TERCEIRO interessado, em razão da perda do direito de utilização da área (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão negativa de débitos estaduais)",
        "oQueE": "Emitir, pela internet e sem custo, a certidão negativa de débitos estaduais, que é um documento que comprova que a pessoa física ou jurídica não possui débitos ou irregularidade..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão positiva de débitos estaduais)",
        "oQueE": "Solicitar a certidão positiva de débitos estaduais, que é o documento que informa a existência de débitos exigíveis (que podem ser cobrados pelo Estado) ou outras pendências fis..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Contestação de despacho de descumprimento de obrigações socioeconômicas - Resolução/SEFAZ nº 3.475/2025",
        "oQueE": "Canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 apresente recurso administrativo à notificação da Secretaria..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Concessão de credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com a suspensão da cobrança do ICMS, nos te..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para recebimento de soja e milho em grãos e arroz em casca para depósito, remetidos por produtores rurais do Estado de Mato Grosso, com a suspensão da cobrança do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de produtos agrícolas para depósito situado em Goiás, com a suspensão da cobrança do ICMS, nos termos do Protocolo ICMS 10/98..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de soja e milho em grãos e arroz em casca , de produção agrícola do remetente, para depósito situado em Mato Grosso, com a su..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Crédito Outorgado - Análise dos investimentos necessária para a fruição do benefício de crédito outorgado previsto em Termo de Acordo - Lei Complementar nº 93/2001",
        "oQueE": "Este serviço é um canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 comprove, de forma espontânea ou mediante..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração anual de produtor (DAP) - pedido de cópia",
        "oQueE": "Solicitar cópia de Declaração Anual de Produtor (DAP)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Desvincular CAR - Cadastro Ambiental Rural por transmissão de propriedade",
        "oQueE": "Solicitar a desvinculação do Cadastro Ambiental Rural - CAR na inscrição estadual do transmitente a qual está vinculado no cadastro da SEFAZ, quando este não tenha providenciado..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "e-Fazenda - cadastro",
        "oQueE": "Realizar o cadastramento na plataforma eletrônica e-Fazenda , disponibilizada na área de acesso restrito dos endereços eletrônicos www.ms.gov.br e www.sefaz.ms.gov.br . O e-Faze..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - credenciamento voluntário",
        "oQueE": "Serviço disponibilizado aos contribuintes alcançados pelo § 2º ao art. 4º do Subanexo XIV ao Anexo XV ao Regulamento do ICMS que não são obrigados à entrega de arquivos (EFD) e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fornecimento de dados e documentos fiscais do próprio requerente",
        "oQueE": "Solicitação para fornecimento de dados e documentos fiscais do próprio REQUERENTE (exceto arquivos xml), tais como: documentos fiscais eletrônicos ou físicos ( Nota Fiscal, Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "FUNDERSUL - autorização para depósito da contribuição à entidade que tenha por objetivo atividades tendentes à defesa animal ou vegetal",
        "oQueE": "Solicitar autorização para depósito da contribuição do FUNDERSUL a entidade que tenha por objetivo atividades tendentes à defesa sanitária animal ou vegetal"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - comunicação da apropriação de crédito nos termos do art. 17, § 3º, II, “a”, da Resolução/SEFAZ nº 3.426/2025 (limite de 300 Uferms)",
        "oQueE": "Comunicação, por parte do contribuinte obrigado à EFD, da utilização de crédito fiscal, limitado a 300 Uferms, sujeito a posterior homologação, decorrente de restituição de indé..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Diferencial de Alíquotas - dispensa da cobrança na aquisição de maquinário por industrial ou produtor rural",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS Diferencial de Alíquotas na aquisição interestadual de bem destinado ao ativo fixo de estabelecimento industrial ou agropecuário"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, ap..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS Equalização Simples Nacional ou a reconsideração da decisão..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de motocicleta nova para mototaxista ou moto-entregador",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículos motorizados de duas rodas (motocicleta), quando destinados a pessoas físicas que exercem atividades de mototáxi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção para as contas de energia elétrica, telefone e internet de templos religiosos de qualquer culto - concessão, renovação ou revogação",
        "oQueE": "Solicitar a concessão, renovação ou revogação da isenção do ICMS para as contas de serviços públicos estaduais próprios, delegados, terceirizados ou privatizados de energia elét..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural para fim específico de irrigação",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural, para fim específico de irrigação, a base de cálculo do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural que exerça a atividade de avicultura de corte",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural cuja atividade seja avicultura de corte (galináceos). A..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS ST-SN, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente em formato eletrônico,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS ST-SN, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, após encerrada a única so..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS ST-SN ou a reconsideração da decisão proferida pelas autori..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - consulta de débito",
        "oQueE": "Este serviço é de autoatendimento para a consulta de débitos do IPVA, sendo que essa consulta pode ser feita no site da SEFAZ/MS ou na plataforma de serviços e-Fazenda"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção geral (exceto táxi)",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para os seguintes veículos: Máquina agrícola e de terraplenagem, trator e aeronave..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção para imóvel rural",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis para imóvel rural cuja área total, na matrícula, seja inferior ao módulo da região e seja destinado para herdeiro ou para o cônjuge sobrev..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Levantamento ou devolução de garantia oferecida para: obtenção e renovação de regime especial ou autorização específica; cadastro como distribuidora de combustíveis estabelecida em MS ou como contribuinte substituto tributário de MS",
        "oQueE": "Devolução de garantia vigente ou dentro do prazo de 365 dias após sua vigência (art. 17 e 18 do Subanexo Único ao Anexo V ao Regulamento do ICMS ) oferecida pelo contribuinte pa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal Avulsa Eletrônica (NFA-e) de expedição exclusiva das repartições fiscais do Estado, para ser utilizada nas seguintes hipóteses: Saídas de mercadorias prom..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - baixa de pendência de NFP-e de remessa com suspensão/não-incidência do ICMS, se comprovado o retorno da mercadoria",
        "oQueE": "Solicitar a baixa da pendência da NFP-e emitida com suspensão ou não-incidência do ICMS, desde que comprovado que a mercadoria retornou dentro do prazo determinado pela legislaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento dentro do prazo de 144h",
        "oQueE": "Solicitar, em prazo não superior a cento e quarenta e quatro horas, o cancelamento da Nota Fiscal de Produtor Eletrônica (NFP-e)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento extemporâneo",
        "oQueE": "Solicitar o cancelamento extemporâneo (após decorrido o prazo de cento e quarenta e quatro horas, contado do momento em que foi concedida a Autorização de Uso da NFP-e) de Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento extemporâneo (não autorizado on-line)",
        "oQueE": "Solicitar o cancelamento extemporâneo (após decorrido o prazo de cento e quarenta e quatro horas, contado do momento em que foi concedida a Autorização de Uso da NFP-e) de Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - desbloqueio para emissão",
        "oQueE": "Solicitar o desbloqueio para emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em virtude de não quitação do débito ensejador do bloqueio, cujo pagamento de DAEMS tenha sido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em substituição à Nota Fiscal de Produtor (NFP), modelo 4. Observações: Considera-se Nota Fiscal de Produtor Eletrônica (NF..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) / Nota fiscal avulsa eletrônica (NFA-e) - emissão de carta de correção eletrônica (CC-e)",
        "oQueE": "Emissão de Carta de Correção Eletrônica para notas emitidas no sistema da SEFAZ/MS (NFP-e/NFA-e). Observação: após a emissão de uma Nota Fiscal de Produtor Eletrônica (NFP-e) ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - transferência interestadual de mercadorias - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) quando se tratar de remessa de bens ou mercadorias entre estabelecimentos de mesma titularidade (transferências), sem a inc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - desbloqueio para impressão de formulário",
        "oQueE": "Solicitar o desbloqueio para impressão de formulário Nota Fiscal de Produtor, Série Especial (NFP/SE) em virtude de não quitação do débito ensejador do bloqueio, cujo pagamento..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - impressão de formulário",
        "oQueE": "Solicitar o fornecimento de talão de Nota Fiscal do Produtor, Série Especial (NFP/SE)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - prestação de contas de notas emitidas e não baixadas automaticamente ou canceladas",
        "oQueE": "Prestar contas de Nota Fiscal de Produtor, Série Especial (NFP/SE) emitidas e não baixadas automaticamente ou canceladas."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal eletrônica (NF-e), modelo 55 - credenciamento",
        "oQueE": "Solicitar credenciamento para emissão de Nota Fiscal Eletrônica (NF-e), modelo 55. A Nota Fiscal Eletrônica (NF-e), modelo 55, é o documento emitido e armazenado eletronicamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal fatura de serviços de comunicação eletrônica (NFCom) - credenciamento voluntário",
        "oQueE": "Solicitação de credenciamento para a emissão de Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom). A NFCom, modelo 62, é o documento emitido e armazenado eletroni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) de IPVA - exercícios anteriores (autoparcelamento)",
        "oQueE": "Parcelamento de débitos de IPVA, referentes a exercícios anteriores ao vigente, não inscritos em dívida ativa e realizado pelo próprio contribuinte, mediante acesso ao módulo Au..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) relativo ao ICMS - autoparcelamento",
        "oQueE": "Parcelamento de débitos de ICMS, não inscritos em dívida ativa, realizado pelo próprio contribuinte, mediante acesso ao módulo Autoparcelamento , no e-Fazenda , na Internet."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PROAPE - reembolso em dinheiro do incentivo fiscal pago ao produtor rural",
        "oQueE": "Solicitação de reembolso, em dinheiro, do valor nominal relativo ao incentivo fiscal pago ao produtor rural no âmbito do Programa de Avanços na Pecuária de Mato Grosso do Sul (P..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PROAPE - transferência de valores relativos ao incentivo fiscal pago ao produtor rural",
        "oQueE": "Solicitar a transferência do valor nominal relativo ao incentivo fiscal pago ao produtor rural para outro estabelecimento, quando o contribuinte não possuir débitos suficientes..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de agravo em face da não admissibilidade da impugnação pela 1ª instância",
        "oQueE": "Recebimento e apreciação de Agravo pelo chefe da Unidade de Consultas e Julgamento (UCJUL) ou pelo julgador que negou a admissibilidade da impugnação e encaminhamento ao Tribuna..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de recurso especial ao Tribunal Administrativo Tributário (TAT) em face de decisão proferida em 2ª instância",
        "oQueE": "Recebimento, análise de admissibilidade de Recurso Especial interposto em face de decisão de 2ª instância de Processo Administrativo Tributário e, tendo sido admitido, julgado e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Procuração digital para acesso ao e-Fazenda - cadastro de procurador/representante legal em caso de incapacidade, espólio e demanda judicial",
        "oQueE": "Solicitar o cadastro de procuração digital para que outra pessoa, responsável legal por menor de idade (incapaz) e representante legal do espólio (inventariante), acesse o e-Faz..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento mensal do ICMS diferencial de alíquota devido na entrada de mercadorias destinadas ao uso, consumo ou ativo fixo (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher mensalmente o ICMS Diferenc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período mensal, do ICMS devido nas saídas interestaduais de soja e farelo de soja - indústrias de óleo de soja (art. 4º, I, a do Anexo V ao RICMS, c/c art. 74, III do RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, a do Anexo V ao Regulamento do ICMS , combinado com o art. 74, III do Regulamento do ICMS , que permite a dilatação de praz..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS ST devido na entrada de mercadorias no estado - concessionárias de veículos ou máquinas agrícolas (art. 4º, I, b do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS ST devido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS substituição tributária devido na entrada de mercadorias no estado de MS (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - frigorífico de outra UF - cadastro como substituto tributário responsável pelo pagamento da diferença de peso ou preço - frigoríficos do estado de São Paulo (Protocolo ICMS 03/88)",
        "oQueE": "Cadastro de frigorífico do Estado de São Paulo como substituto tributário para que se responsabilize pelo recolhimento do ICMS incidente sobre a diferença a maior de peso ou pre..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005)",
        "oQueE": "Concessão de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de exportações..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - frigoríficos",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - indústrias de combustíveis e usinas de açúcar e álcool",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura, inclusive algodão em pluma, exceto soja e milho (Decreto nº 11.803/2005)",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura soja e milho em grãos (Decreto nº 11.803/2005) - cerealista/comercializador de soja e/ou milho",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial para facilitar o cumprimento de obrigação acessória (art. 4º, II do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, II do Anexo V ao Regulamento do ICMS , facilitador do cumprimento de obrigação acessória, que consiste em: a) Autorização para..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - Ponta Porã (art. 5º-A do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação com o objetivo de estimular os estabelecimentos situados neste Estado, possuidores do Regime Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - programa de estímulo à exportação pelos portos do rio Paraguai (art. 1º, § único, inciso I do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação pelos Portos do Rio Paraguai, com o objetivo de estimular os estabelecimentos situados neste Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário do ICMS devido sobre autopeças adquiridas em outra Unidade da Federação - apenas para atacadistas/distribuidoras de autopeças (art. 4º, I, c, 4 do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, c, 4 do Anexo V ao Regulamento do ICMS , para apurar e recolher o ICMS ST relativo a peças automotivas adquiridas em outr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário responsável pelo pagamento semanal do ICMS Transporte devido por transportadora desta ou de outra UF ou por transportador autônomo (Decreto nº 14.923/2018)",
        "oQueE": "Regime Especial para que o remetente da mercadoria assuma a responsabilidade, na condição de substituto tributário, pelo pagamento semanal do ICMS incidente nas prestações de se..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportadora conveniada por meio de Termo de Acordo para atuar como fiel depositária das mercadorias que transporta (Anexo XII ao RICMS)",
        "oQueE": "Concessão ou renovação de Regime Especial, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , por meio de Termo de Acordo assinado entre a empresa transportadora e a Secr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportador ferroviário deste estado apurar e recolher o ICMS transporte por período mensal (art. 50 do Anexo V ao RICMS, Ajuste SINIEF 19/89)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 50 do Anexo V ao Regulamento do ICMS ( Ajuste SINIEF 19/89 ), para que a empresa concessionária de serviços de transporte ferroviá..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Registro especial e prévio das empresas optantes pelo Simples Nacional para realizar operações interestaduais com produtos do §3º do art. 1º da Resolução/SEFAZ nº 2.611/2015",
        "oQueE": "Concessão de autorização para registro especial e prévio de empresa enquadrada no regime de pagamento do ICMS previsto na Lei Complementar Federal nº 123/2006 (Simples Nacional)..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Restituição/Ressarcimento de indébito tributário - pedido",
        "oQueE": "Solicitação, por parte de pessoa física ou jurídica de restituição/ressarcimento de indébito nas hipóteses previstas: no art. 127 da Lei Estadual nº 2.315/2001 decorrente de: a...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "SOCRED - solicitação de crédito fiscal do ICMS referente a operações e prestações relacionadas a produtos e à atividade agropecuária",
        "oQueE": "Solicitar a homologação de créditos fiscais do ICMS, decorrentes de operações com produtos da agropecuária, inclusive animais vivos, e de origem extrativa, inclusive quando bene..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 12.415/2007",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado utilizar o crédito outorgado previsto no Decreto nº 12.415/2007 , desde que não realize oper..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de verificação fiscal de exportação (TVF-Exportação) - baixa",
        "oQueE": "Solicitar a baixa de Termo de Verificação Fiscal (TVF) lavrado em decorrência de mercadoria destinada à exportação, com fim específico de exportação ou para formação de lote de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Transferência de animal registrado no SMEPA (sistema de monitoramento de estoque de produtos agropecuários)",
        "oQueE": "Solicitar a transferência de animal registrado que tenha sido remetido para outra Inscrição Estadual, mas não foi acobertado por NFP-e com a vinculação correta do animal."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Criar senha de carteira de Pesca",
        "oQueE": "Este serviço ajuda a criar ou trocar a senha da sua carteira de pesca. Você pode solicitar suporte por telefone, WhatsApp ou e-mail"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Visitar Bioparque Pantanal",
        "oQueE": "Visitação ao Bioparque Pantanal. - Maior aquário de água doce do mundo. É um empreendimento orgânico de experiências e conhecimento para TODOS! Inclusivo, acessível, científico,..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar cadastro de áreas de Florestas Plantadas.",
        "oQueE": "Cadastro de áreas de florestas plantadas, solicitação de créditos de reposição florestal, declaração de débitos e negociação de volumetria (compra e venda de créditos)."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar credenciamento de instituições no SIATER",
        "oQueE": "Sistema online de credenciamento de Entidades Públicas e Privadas prestadoras de ATER (Assistência Técnica e Extensão Rural) conforme regras estabelecidas pela LEI 12.188/2010,..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa de Ovinos e Caprinos",
        "oQueE": "O Subprograma Cordeiro de Qualidade visa consolidar a ovinocaprinocultura no Estado de Mato Grosso do Sul. A ovinocaprinocultura sul mato-grossense apresenta grande potencial pa..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Leitão Vida",
        "oQueE": "I ncentivo para os produtores de suínos que produzem de forma sustentável e eficiente, cumprindo as normas ambientais, sanitárias e trabalhistas, de acordo com a exigência do me..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa MS INDUSTRIA",
        "oQueE": "Este programa é uma parceria entre a SEMADESC e a SEFAZ, que concede incentivos fiscais vinculados ao ICMS para empreendimentos do setor industrial. Os incentivos são destinados..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Peixe Vida",
        "oQueE": "O Subprograma Peixe Vida visa estimular os produtores do Estado a explorar, de forma sustentável, a atividade de produção de peixes, como alternativa econômica para diversificaç..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Precoce MS",
        "oQueE": "O Subprograma é operacionalizado por meio de uma parceria entre a SEMADESC, a SEFAZ e os Serviços de Inspeção Animal da Superintendência Federal de Agricultura - SFA/MS, da Agên..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações do programa CONECTA-MS",
        "oQueE": "O CONECTA MS tem por objetivo garantir a inclusão digital, interligando comunidades remotas, assentamentos rurais e aldeias, possibilitando a qualificação dos moradores destes l..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações do programa MS PDAgro",
        "oQueE": "O PDAgro visa incrementar o plantio de culturas de algodão, arroz, feijão, girassol, milho, sorgo e trigo em Mato Grosso do Sul, com o objetivo de diversificar, ampliar, aperfei..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações sobre o FCO",
        "oQueE": "Com objetivo de contribuir para o desenvolvimento econômico e social do MS, o FCO – Fundo Constitucional do Centro Oeste é um recurso que beneficia as empresas e os produtores r..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado, diretamente ou por meio de seus representantes legais, poderá solicita vista ou cópia do processo ou documento devendo o pedido ser instruído com documento que co..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar parecer de viabilidade técnica de condição sanitária",
        "oQueE": "Parecer que avalia as condições sanitárias de saúde ambiental e do trabalhador para fins de autorização para armazenamento, comércio e aplicação de agrotóxicos por empresas no e..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Reingresso especial",
        "oQueE": "O reingresso especial é o retorno do discente que não tenha concluído o curso no prazo regular previsto no Projeto Pedagógico, que tenha sido excluído por reprovação ou desligad..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atualização de dados cadastrais do acadêmico",
        "oQueE": "Mudanças de e-mail, endereço, telefone e estado civil são alguns exemplos de situações que demandam a atualização cadastral."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atualização de dados cadastrais no SAU - Sistema Acadêmico da UEMS",
        "oQueE": "Quando o acadêmico muda de endereço, e-mail, ou acontece alguma alteração no nome (casamento, divórcio ou outros casos) ou número de documento, o mesmo deve apresentar na secret..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar doação de mudas",
        "oQueE": "É um serviço vinculado ao Programa de Educação Tutorial (PET) da UEMS, o qual realiza atividades de ensino, extensão e pesquisa, integrando-se com a comunidade interna e externa..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar visita cultural do acervo bibliográfico, audiovisual e digital",
        "oQueE": "Visitação cultural do Acervo bibliográfico, audiovisual e digital legado pela Profa. Maria da Glória Sá Rosa"
      }
    ]
  },
  {
    "id": "condutor",
    "nome": "Condutor",
    "icon": "car",
    "cor": "#1565C0",
    "total": 151,
    "pctDoTotal": 12.4,
    "topOrgaos": [
      {
        "orgao": "DETRAN",
        "qtd": 62
      },
      {
        "orgao": "SEFAZ MS",
        "qtd": 41
      },
      {
        "orgao": "IAGRO",
        "qtd": 22
      },
      {
        "orgao": "AEM",
        "qtd": 3
      },
      {
        "orgao": "AGEMS",
        "qtd": 3
      }
    ],
    "exclusivas": 30,
    "compartilhadas": 121,
    "cards": [
      {
        "orgaoLabel": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "meta": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "meta": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados p...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar verificação de veículo tanque",
        "meta": "Serviço de verificação de veículos-tanque rodoviários utilizados para transporte de produtos líquidos a gra...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Parcelar débitos de taxa de fiscalização e de multas da AGEMS",
        "meta": "Oportunidade para parcelar débitos de multas e taxas de fiscalização junto à Agência Estadual de Regulação...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Solicitar registro ou vistoria de veículo de linha de transporte intermunicipal de passageiros",
        "meta": "Credenciamento, nova vistoria ou renovação de vistoria de ônibus e micro-ônibus utilizado no serviço de lin...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Solicitar vistoria de veículo de passageiros de viagem intermunicipal na modalidade fretamento",
        "meta": "Vistoria periódica de veículo utilizado para transporte de passageiros na modalidade de fretamento entre mu...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "meta": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria ent...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial fora do local de lotação ou de exercício (perícia em trânsito)",
        "meta": "É o atendimento pericial presencial ao servidor, familiar ou dependente que necessita de avaliação pericial...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGESUL",
        "titulo": "Recorrer das multas de trânsito em rodovias de MS",
        "meta": "O usuário que cometeu uma infração de trânsito nas rodovias do estado de MS pode: - contestar a imposição d...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "oQueE": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos relativos às multas, às taxas de serviços metrológicos e preços públic..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "oQueE": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados por infringência aos dispositivos da legislação metrológica, quer seja..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação de veículo tanque",
        "oQueE": "Serviço de verificação de veículos-tanque rodoviários utilizados para transporte de produtos líquidos a granel."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Parcelar débitos de taxa de fiscalização e de multas da AGEMS",
        "oQueE": "Oportunidade para parcelar débitos de multas e taxas de fiscalização junto à Agência Estadual de Regulação de Serviços Públicos de Mato Grosso do Sul - AGEMS"
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar registro ou vistoria de veículo de linha de transporte intermunicipal de passageiros",
        "oQueE": "Credenciamento, nova vistoria ou renovação de vistoria de ônibus e micro-ônibus utilizado no serviço de linha regular de transporte rodoviário intermunicipal de passageiros."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar vistoria de veículo de passageiros de viagem intermunicipal na modalidade fretamento",
        "oQueE": "Vistoria periódica de veículo utilizado para transporte de passageiros na modalidade de fretamento entre municípios de Mato Grosso do Sul. A vistoria da AGEMS é obrigatória, poi..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "oQueE": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria entre o Governo do Estado de MS com a AGEPEN e o Tribunal de Justiça de M..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial fora do local de lotação ou de exercício (perícia em trânsito)",
        "oQueE": "É o atendimento pericial presencial ao servidor, familiar ou dependente que necessita de avaliação pericial fora do local de lotação ou exercício: o servidor que estiver, tempor..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Recorrer das multas de trânsito em rodovias de MS",
        "oQueE": "O usuário que cometeu uma infração de trânsito nas rodovias do estado de MS pode: - contestar a imposição de penalidade de multa a partir da Notificação de Autuação (NA); - cont..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Solicitar autorização especial de trânsito - A.E.T",
        "oQueE": "Autorização Especial de Trânsito (A.E.T.) é o documento expedido pela agência estadual de gestão de empreendimentos (AGESUL), órgão executivo rodoviário do estado do mato grosso..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Obter certidão de ocorrência",
        "oQueE": "É a emissão do documento que comprova que o cidadão foi atendido por uma equipe do Corpo de Bombeiros Militar em ocorrências de incêndio (em residência, comércio, indústria, ter..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar atendimento pré-hospitalar",
        "oQueE": "É o conjunto de ações destinadas ao atendimento de emergências fora do ambiente hospitalar, destinado às vítimas de trauma (acidentes de trânsito, domésticos, de trabalho, etc.)..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Alterar espécie do veículo para coleção - Mesmo proprietário",
        "oQueE": "Mudança da espécie do veículo para coleção. Veículo de coleção é aquele fabricado há mais de trinta anos, original ou modificado, que possui valor histórico próprio."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Atualizar endereço de condutor (CNH/PPD)",
        "oQueE": "Atualização dos dados referentes ao endereço/domicílio do/a condutor/a, no prontuário da carteira nacional de habilitação."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Atualizar endereço do veículo",
        "oQueE": "Atualização do endereço do veículo, sem mudança de município."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Buscar atendimento Guichê 60+",
        "oQueE": "Atendimento personalizado e humanizado para pessoas com mais de 60 anos em Campo Grande e Dourados."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Comunicar venda de veículo",
        "oQueE": "O proprietário tem até 30 dias para comunicar a venda do seu veículo ao Detran-MS, de maneira a isentá-lo de qualquer responsabilidade sobre o veículo após a data do preenchimen..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Contestar multa, autuação ou penalidades",
        "oQueE": "Você contesta multa de trânsito. Você contesta autuação de trânsito. Você contesta penalidade de trânsito."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Atualização de Instrutor de Trânsito",
        "oQueE": "Curso destinado a atualização de profissionais formados no curso de Instrutor."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Reciclagem para Condutor Infrator",
        "oQueE": "Curso destinado aos condutores penalizados por Suspensão da CNH e nas demais situações estabelecidas pelos artigos 268 do CTB e 87 da Resolução 1.020 do Contran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Curso de Direção Defensiva",
        "oQueE": "O Curso de Direção Defensiva é destinado às instituições públicas e privadas que possuem vínculo empregatício com pessoas habilitadas que se utilizam de veículos automotores par..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Curso de Formação de condutores para 1º habilitação",
        "oQueE": "Curso destinado aos candidatos à primeira habilitação que desejam obter a Autorização para Conduzir Ciclomotor ou a CNH nas categorias A ou B."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir certidão de prontuário da carteira nacional de habilitação",
        "oQueE": "Documento expedido para condutores, que estejam com o registro na base Detran-MS, contendo histórico de dados da carteira nacional de habilitação (CNH)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir certidões de veículos",
        "oQueE": "Realização de serviço de emissão de certidões relacionadas a veículos para fins diversos."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir documento anual do veículo (CRLV-e)",
        "oQueE": "Você emite o documento do veículo. Você paga os débitos antes da emissão. Você faz o processo pela internet. Você não precisa ir ao Detran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir guia de licenciamento anual",
        "oQueE": "Emissão da guia para realizar o licenciamento anual de veículos."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir guias para pagamento de multas",
        "oQueE": "Emissão de guia para pagamento de multas de trânsito. Aos proprietários que aderirem ao sistema de notificação eletrônica (SNE), cujo serviço está integrado ao aplicativo cartei..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Falar com a Glória",
        "oQueE": "A Glória é a atendente virtual do Detran-MS com suporte de inteligência artificial para atendimento exclusivo via WhatsApp no número (67)3368-0500."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Fazer curso especializado para condutores de veículos de transporte de produtos perigosos (MOPP)",
        "oQueE": "Curso com carga horária de 40h/a para qualificar e atualizar os instrutores de trânsito, especializado para a docência do curso de condutores de transporte de produtos perigosos."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Fazer transferência digital de veículo",
        "oQueE": "Você transfere o veículo para outra pessoa. Você faz o processo pela internet. Você não precisa ir ao Detran. Você não precisa ir ao cartório."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Identificar condutor infrator em autuações",
        "oQueE": "Indicar o real infrator de autuações decorrentes de infrações de trânsito de circulação, parada e estacionamento, nas quais não houve abordagem no ato da infração. O prazo para..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Participar de movimentos nacionais: maio amarelo e semana nacional do trânsito",
        "oQueE": "O movimento Maio Amarelo nasceu com uma só proposta: chamar a atenção da sociedade para o alto índice de mortos e feridos no trânsito em todo o mundo. O objetivo do movimento é..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Participar do Programa CNH MS Social",
        "oQueE": "O Programa CNH MS Social concede gratuitamente o processo de habilitação para condução de veículos automotores às pessoas em situação de vulnerabilidade social. Não há processo..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Pedir alienação do veículo em nome do mesmo proprietário",
        "oQueE": "Nos casos em que o veículo possuir inclusão ou exclusão de gravame, ou seja, for financiado, refinanciado ou tiver o contrato de financiamento quitado, é necessário que o propri..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Pedir Renovação da Carteira Nacional de Habilitação - CNH",
        "oQueE": "Você renova sua CNH. Você faz exames obrigatórios. Você comprova aptidão para dirigir."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Pedir revisão de exame teórico",
        "oQueE": "Solicitação de revisão de nota para candidatos que realizaram a prova teórica e discordam do resultado final.Solicitação de revisão de nota para candidatos que realizaram a prov..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Protocolar defesa e recurso a processo administrativo de suspensão/cassação de CNH",
        "oQueE": "Serviço destinado a protocolar recurso para processo administrativo de suspensão/cassação de CNH."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Realizar inscrição no programa vencendo o medo de dirigir",
        "oQueE": "O programa destina-se a condutores (as) ou candidatos (as) à habilitação que possuem medo e/ou fobia de dirigir, trata-se de uma assistência educativa e terapêutica, ofertando,..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar adição de categoria na Carteira Nacional de Habilitação - CNH",
        "oQueE": "Cadastro de processo para Adicionar categoria A ou B, na carteira Nacional de habilitação - CNH."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico",
        "oQueE": "Agendamento para realização do exame/reexame teórico-técnico para obtenção da carteira nacional de habilitação (CNH)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Condutor Infrator",
        "oQueE": "Agendamento para realização de exame teórico-técnico para condutores infratores (curso de reciclagem)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Curso Especializado",
        "oQueE": "Agendamento para realização de exame teórico-técnico para homologação de Curso Especializado"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Renovação CNH",
        "oQueE": "Agendamento para realização de exame teórico-técnico para Renovação de CNH (CNH vencida a mais de 05 anos)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Alteração de Dados na Carteira Nacional de Habilitação - CNH",
        "oQueE": "Cadastro de processo para alteração de dados no prontuário da Carteira Nacional de Habilitação (nome, filiação, documentos de identificação, etc.)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "SOLICITAR ATENDIMENTO ÀS INSTITUIÇÕES DE ENSINO SUPERIOR",
        "oQueE": "O Programa é desenvolvido pelo Detran/MS, por meio da Gerência de Projetos e Campanhas, junto às Instituições de Ensino Superior, visando sensibilizar acadêmicos e veteranos sob..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar atendimento em eventos de instituições públicas e privadas",
        "oQueE": "O Programa de atendimento aos eventos socais, culturais, educativos, desporto e lazer, organizados por instituições públicas e privadas, oferece atividades educativas de trânsit..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Avaliação por Junta Médica/Psicológica em Processo de Habilitação",
        "oQueE": "Avaliação realizada por junta composta por três médicos/psicólogos peritos, especialistas em medicina/psicologia do tráfego, em grau de recurso da avaliação do perito singular o..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar baixa definitiva do veículo",
        "oQueE": "Baixa definitiva do cadastro do veículo."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar campanhas e ações educativas de trânsito",
        "oQueE": "As campanhas e ações educativas de trânsito são desenvolvidas conforme cronograma anual do CONTRAN (Conselho Nacional de Trânsito), considerando as necessidades locais, com obje..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Carteira Nacional de Habilitação - Definitiva",
        "oQueE": "Cadastro de processo para emissão de Carteira Nacional de Habilitação Definitiva"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar desvinculação de multas de veículos adquiridos em leilões",
        "oQueE": "Solicitação de desvinculação de débitos e restrições existentes nos veículos arrematados em leilões públicos oficiais para registro no DETRAN/MS. Não há custo de desembaraço par..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar inscrição no Programa Cidade Escola de Trânsito - Detranzinho",
        "oQueE": "A Cidade Escola de Trânsito – Detranzinho, inaugurada em setembro de 1998 e iniciando suas operações em 27 de maio de 1999, representa um espaço dinâmico voltado para a vivência..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar licença de aprendizagem de direção veicular - LADV",
        "oQueE": "Solicitar licença de aprendizagem de direção veicular - LADV - necessária aos candidatos a obtenção de habilitação na realização de aulas práticas de direção veicular."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar mudança de categoria",
        "oQueE": "Alteração da categoria do veículo, com emissão de novo certificado de registro de veículos (CRV)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Mudança de Categoria na Carteira Nacional de Habilitação - CNH",
        "oQueE": "Cadastro de processo para Mudança de Cagetogia na Carteira Nacional de Habilitação - CNH"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar mudança de placas para o novo padrão Mercosul",
        "oQueE": "É a atualização das placas de seu veículo (padrão antigo - placa cinza) para o novo padrão Mercosul."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar palestras educativas de trânsito em empresa públicas e privadas",
        "oQueE": "O Programa de Palestras em Empresas Públicas e Privadas (PROSEGUE) oferece palestras educativas acerca de temas relacionados ao trânsito e à prevenção dos acidentes: Legislação..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar prévia autorização para alteração de característica de veículo",
        "oQueE": "Autorização para que sejam feitas modificações nas características de fábrica do veículo."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar primeiro emplacamento de veículo",
        "oQueE": "Destinado ao registro de veículos novos (zero KM)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Processo Primeira Habilitação (Permissão para Dirigir-PpD)",
        "oQueE": "Cadastro de processo de obtenção da Primeira Habilitação (Permissão para Dirigir - PpD) nas categorias A e B."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai à escola",
        "oQueE": "O Programa “Detran vai à escola” atende as Instituições de Ensino de Mato Grosso do Sul, fomentando a educação e segurança de trânsito, apoiando e promovendo ações educativas à..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai onde o idoso está",
        "oQueE": "Atendimento nos Centros de Convivência e Assistência Social, movimentos e associações, tendo como finalidade o desenvolvimento do Programa “Prevenção, Mobilidade, Acessibilidade..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Reabilitação - Carteira Nacional de Habilitação/CNH (condutor)",
        "oQueE": "Cadastro de processo de Reabilitação para condutor/a cassado/a."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Reabilitação - Permissão para Dirigir/PpD (permissionado)",
        "oQueE": "Cadastro de processo de Reabilitação (novo processo de primeira habilitação)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar registro de estrangeiro",
        "oQueE": "Cadastro de processo para realizar Registro Estrangeiro (troca de documento de habilitação estrangeira para a CNH brasileira)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar registros de certificados de cursos especializados para condutores de veículos",
        "oQueE": "Registro de certificados de cursos especializados para condutores de veículos."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar remarcação de chassi ou motor do veículo",
        "oQueE": "Solicitação de serviços de marcação, remarcação, gravação, regravação de chassi ou motor."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Renovação de CNH com Exercício de Atividade Remunerada - EAR",
        "oQueE": "Renovação dos exames exigidos para condução de veículos automotores (CNH), com exercício de atividade remunerada-EAR (motorista profissional)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Segunda Via da Carteira Nacional de Habilitação - CNH ou Permissão para Dirigir-PpD",
        "oQueE": "Solicitar cadastro de processo para emissão de Segunda Via da carteira Nacional de Habilitação - CNH ou da Permissão para Dirigir - PpD"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar vistoria",
        "oQueE": "É uma inspeção realizada em veículos para verificar suas condições físicas, mecânicas e documentais. Essa inspeção pode ser feita por diferentes motivos, como transferência de p..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Transferir propriedade do veículo",
        "oQueE": "É o processo de transferência de titularidade, ou seja, troca de proprietário (dono) do veículo."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Trocar endereço do registro do veículo - mesmo proprietário (dono)",
        "oQueE": "Por meio desse serviço, você pode solicitar a troca de endereço do registro de seu veículo quando ocorrer mudança de cidade , dentro do Mato Grosso do Sul."
      },
      {
        "orgao": "FCMS",
        "titulo": "Visitar e contemplar obras plásticas de arte contemporânea do acervo do MARCO - Museu de Arte Contemporânea",
        "oQueE": "Visitação e contemplação de obras plásticas de arte contemporânea do acervo do Museu de Arte Contemporânea."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Aderir ao PECOMS",
        "oQueE": "Programa para conversão das multas sanitárias em bens e serviços com o objetivo de dar suporte à IAGRO."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar apiário ou meliponário",
        "oQueE": "Serviço de cadastramento de apiários e meliponários que não possuem Inscrição Estadual. Observação: Caso o produtor possua Inscrição Estadual, deverá fazer o seu cadastro atravé..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar no aplicativo transportador",
        "oQueE": "Cadastro online de motoristas e veículos (transportadores) de cargas vivas para utilizar o App Transportador."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar propriedade rural de fora do MS",
        "oQueE": "Cadastramento no Sistema e-SANIAGRO de propriedades rurais de fora do estado do Mato Grosso do Sul, para que possa ser dada a anuência de documentos de trânsito, com a confirmaç..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar autenticidade de guia de trânsito animal - GTA",
        "oQueE": "Consultar e verificar a veracidade quanto aos dados e emissão da Guia de Trânsito Animal."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar Auto de Infração e Multa on-line",
        "oQueE": "Consultar através do módulo de multas do e-Saniagro Auto de Infração e Multa existente no CPF/CNPJ e inscrição estadual - IE, do interessado. Emitir DAEMS (à vista ou parcelado)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar documentos referente ao trânsito de animais",
        "oQueE": "O Sistema E-SANIAGRO é um Sistema on line que permite ao produtor, através do portal GAP (login, código de acesso e senha particular) realizar: emissão da guia de trânsito anima..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitário de Origem Consolidado (CFOC)",
        "oQueE": "Emissão de documento de Certificado Fitossanitário de Origem (CFO) ou Certificado Fitossanitário de Origem Consolidado (CFOC) por Responsável Técnico de Unidade de Produção (UP)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Guia de Trânsito Animal (GTA)",
        "oQueE": "Emissão de guia de trânsito animal (GTA) intraestadual e interestadual."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Guia de Trânsito de Subprodutos de origem animal não comestíveis eletrônica (e-GTS)",
        "oQueE": "Emissão de guia de trânsito de subprodutos de origem animal não comestíveis eletrônica (e-GTS)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Emitir Permissão de Trânsito Vegetal (PTV)",
        "oQueE": "Solicitação de emissão de documento de Permissão de Trânsito de Vegetais (PTV) que acompanha o trânsito da partida de plantas ou produtos vegetais que possuam restrições ou cond..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Habilitar ou renovar responsável técnico para emissão de Certificado Fitossanitário de Origem (CFO) e Certificado Fitossanitário de Origem Consolidado (CFOC)",
        "oQueE": "Habilitação/Renovação de Habilitação de Responsável Técnico para emissão de Certificado Fitossanitário de Origem (CFO) e Certificado Fitossanitário de Origem Consolidado (CFOC)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Inscrever Unidade de Produção para emissão de Certificado Fitossanitário de Origem (CFO).",
        "oQueE": "Inscrição de Unidade de Produção para emissão de Certificado Fitossanitário de Origem (CFO) e posterior solicitação de emissão do documento de Permissão de Trânsito de Vegetais..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Inscrever Unidade de Produção para emissão de Certificado Fitossanitário de Origem Consolidada (CFOC).",
        "oQueE": "Inscrição de Unidade de Consolidação para emissão de Certificado Fitossanitário de Origem Consolidado (CFOC) e posterior solicitação de emissão do documento de Permissão de Trân..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Participar do seminário socioeducativo área animal",
        "oQueE": "O seminário socioeducativo é um benefício, opcional, e visa aprimorar questões relacionadas à área animal para obter desconto de 25% na multa."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer a Manutenção da Unidade de Produção de Cultura Perene",
        "oQueE": "Manter os dados das Unidades de Produção de cultura perene atualizados anualmente e com saldo disponível para emissão do documento de Certificação Fitossanitária de Origem (CFO)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer Habilitação de Colheita em Unidade de Produção de Citros",
        "oQueE": "Requerimento para habilitação da Unidade de Produção ou de seus talhões específicos para colheita, após vistoria prévia feita pelo Responsável Técnico (RT) com objetivo de verif..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar cancelamento de GTA",
        "oQueE": "Solicitação de cancelamento de GTA por problemas que impossibilitaram o embarque e/ou o trânsito dos animais."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar participação em seminário socioeducativo da área vegetal",
        "oQueE": "O seminário socioeducativo da área vegetal é um benefício facultativo a autuados por falta de cadastramento de áreas de plantio de soja, que visa obter desconto no valor da mult..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar vistoria de sala de exame de MVH no PNCEBT",
        "oQueE": "Vistoria e fiscalização da sala de exame para realização de testes diagnósticos de brucelose e tuberculose para habilitação de médico veterinário no Programa Nacional de Control..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Termo de Habilitação de colheita",
        "oQueE": "Requerimento de Termo de Habilitação de colheita para Unidade de Produção de frutos do gênero Citrus, ou de seus talhões específicos, com objetivo de comprovar a verificação da..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Utilizar o APP Transportador",
        "oQueE": "Registro das informações detalhadas sobre o transporte / trânsito de animais."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar agendamento de visitas em parques estaduais e outras unidades de conservação da natureza",
        "oQueE": "Serviço que possibilita agendar visitas de ecoturismo, lazer, trilhas, contemplação e outras atividades em contato com a natureza, feitas dentro de Unidades de Conservação que o..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar compensação de reserva legal em unidade de conservação por meio de doação de terras para o Estado",
        "oQueE": "Trata-se de um serviço destinado à regularização ambiental e fundiária por meio da compensação de Reserva Legal em Unidades de Conservação de domínio público, conforme estabelec..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar declaração negativa relativo a multa ambiental",
        "oQueE": "Emitir declaração a fim de constar ou não multas ambientais em nome do solicitante ou propriedade rural."
      },
      {
        "orgao": "PGE MS",
        "titulo": "IPVA ou LICENCIAMENTO - emitir boleto",
        "oQueE": "Emita seu boleto aqui. Este serviço permite que o proprietário de veículo com débito de IPVA ou licenciamento inscrito em dívida ativa consulte os valores e emita o boleto para..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pagar ou parcelar débito inscrito em dívida ativa",
        "oQueE": "Este serviço permite que o cidadão com débito inscrito em dívida ativa parcele ou pague o valor devido. Para IPVA e Licenciamento Anual de veículos, o pagamento e o parcelamento..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar Transação Tributária",
        "oQueE": "Este serviço permite que contribuintes negociem débitos tributários e não tributários inscritos em Dívida Ativa do Estado de Mato Grosso do Sul, administrada pela Procuradoria-G..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto social no trânsito. centro educativo de múltiplas atividades de trânsito (CEMATRAN )",
        "oQueE": "O Centro Educativo de Múltiplas Atividades de Trânsito – CEMATRAN é um Projeto Social desenvolvido e localizado na sede da Polícia Militar Rodoviária e atende crianças e adolesc..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Policiamento de trânsito – Proteção de vidas no trânsito das cidades",
        "oQueE": "O serviço de policiamento ostensivo de trânsito é exercido pela Polícia Militar na fiscalização e educação de trânsito com os objetivos de proteger vidas no exercício do direito..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Realizar boletim on-line de acidente de trânsito – atendimento sem vítimas",
        "oQueE": "O boletim on-line de trânsito da Polícia Militar possui o objetivo de registro de acidentes de trânsito sem vítimas para posterior validação por parte da PMMS."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar curso normal médio – habilitação para docência na educação infantil e anos iniciais do ensino fundamental",
        "oQueE": "Formação mínima para o exercício da docência na educação infantil e nos anos iniciais do ensino fundamental, de nível médio, na modalidade Normal e Qualificação Profissional em..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de cientificação (ACT) - prorrogação de prazo para pagamento",
        "oQueE": "Solicitar a prorrogação do prazo estabelecido no Auto de Cientificação (ACT) lavrado concomitantemente ao Auto de Lançamento e Imposição de Multa (ALIM), antes do fim do prazo p..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM) - impugnação",
        "oQueE": "A impugnação é a peça de defesa formal do contribuinte contra a exigência fiscal, consubstanciada no Auto de Lançamento e de Imposição de Multa (ALIM), a qual, apresentada tempe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 1 - solicitação de lavratura",
        "oQueE": "Solicitação de lavratura de auto de lançamento e de imposição de multa Mod. 1, que somente pode ser feita quando houver pendências tributárias originadas por tipos de documentos..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a termo de apreensão (TA), conforme art. 4º da Instrução Normativa/SAT nº 001/2020",
        "oQueE": "Solicitação de lavratura de Auto de lançamento e de imposição de multa (ALIM - mod. 2) que poderá ser realizada quando houver um Termo de Apreensão (TA) emitido para a cobrança..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - contraditório e ampla defesa",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2, que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - parcelamento de débito fiscal",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2 , que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Escrituração Fiscal Digital (EFD) ou notificação por falta de pagamento de ICMS apurado."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de informação e apuração do ICMS benefícios fiscais (GIA-BF) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa quando omisso na apresentação da Guia de Informação e Apuração do ICMS Benefícios Fiscais (GIA-BF), após entrega da declaração e pagament..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de trânsito suspensa - prorrogação do prazo de suspensão",
        "oQueE": "É a disponibilização de canais de acesso direcionados ao cidadão/contribuinte para protocolo e apreciação de solicitação de prorrogação de prazo de suspensão de Guia de Trânsito..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia nacional de informação e apuração do ICMS substituição tributária (GIA-ST) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Guia Nacional de Informação e Apuração do ICMS Substituição Tributária (GIA-ST)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência física ou visual",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículo automotor novo, quando adquirido por pessoas portadoras de deficiência física ou visual, diretamente ou por inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência mental, síndrome de down ou autista",
        "oQueE": "Solicitar a concessão de isenção do ICMS na aquisição de veículo automotor novo quando adquirido por pessoas portadoras de deficiência mental severa ou profunda, síndrome de Dow..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de motocicleta nova para mototaxista ou moto-entregador",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículos motorizados de duas rodas (motocicleta), quando destinados a pessoas físicas que exercem atividades de mototáxi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - liberação da entrada de mercadorias procedentes de outras unidades da federação e destinadas à demonstração em feiras e eventos realizados no estado, com suspensão da cobrança do ICMS",
        "oQueE": "Solicitar a liberação da entrada de mercadorias procedentes de outras Unidades da Federação destinadas à demonstração em feiras e eventos realizados no Estado, com suspensão da..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - alegação/comunicação de venda de veículo",
        "oQueE": "Use este serviço para transferir a responsabilidade do pagamento do IPVA para o comprador, quando você vende um veículo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - apreensão",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de apreensão do veículo. O cancelamento pode ser relativo inclusive à parte propor..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - inutilização ou perecimento",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de inutilização ou perecimento do veículo. O cancelamento pode ser relativo inclus..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - roubo, furto ou apropriação indébita",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de roubo, furto ou apropriação indébita do veículo. O cancelamento pode ser relati..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - compensação de pagamento indevido",
        "oQueE": "Use este serviço para pedir a compensação do valor referente ao Imposto sobre a Propriedade de Veículos Automotores (IPVA) pago em duplicidade, indevidamente ou em valor maior q..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - consulta de débito",
        "oQueE": "Este serviço é de autoatendimento para a consulta de débitos do IPVA, sendo que essa consulta pode ser feita no site da SEFAZ/MS ou na plataforma de serviços e-Fazenda"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - impugnação do lançamento",
        "oQueE": "Use este serviço para pedir a revisão do valor do IPVA lançado ou de penalidade aplicada. Este serviço é relativo apenas ao valor do IPVA ou às multas relativas ao IPVA, não se..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - imunidade",
        "oQueE": "Use este serviço para solicitar o reconhecimento da IMUNIDADE do IPVA para veículos automotores integrantes do patrimônio dos seguintes entes : União, os Estados, o Distrito Fed..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção 2022 - Decreto nº 15.703/2021",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para o exercício de 2022 caso ela não tenha recebido o benefício automaticamente...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção geral (exceto táxi)",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para os seguintes veículos: Máquina agrícola e de terraplenagem, trator e aeronave..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção - táxi",
        "oQueE": "Utilize este serviço para solicitar a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para veículo rodoviário autorizado a operar como táxi ou moto-táxi , com c..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - leilão - desvinculação de débitos anteriores - Administração Pública e leiloeiros oficiais",
        "oQueE": "Use este serviço para solicitar a desvinculação dos débitos do IPVA anteriores à aquisição de veículo automotor adquirido em leilão , tendo como comitente a Administração Públic..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - leilão - desvinculação de débitos anteriores - particulares",
        "oQueE": "Use este serviço para solicitar a desvinculação dos débitos do IPVA anteriores à aquisição de veículo automotor adquirido em leilão , tendo como comitente a Administração Públic..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - redução da base de cálculo do IPVA para veículos de Frotista",
        "oQueE": "Use este serviço para solicitar a redução na base de cálculo do IPVA de veículos de Frotista (pessoa, física ou jurídica, que possua ao menos 30 veículos tributáveis, registrado..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - redução para pessoa com deficiência (PcD)",
        "oQueE": "Use este serviço para solicitar a redução do IPVA de veículo para uso de pessoa com deficiência (PcD), conforme definições no Regulamento. Considera-se PcD aquela com deficiênci..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - restituição de pagamento indevido",
        "oQueE": "Use este serviço para pedir a restituição do valor referente ao Imposto sobre a Propriedade de Veículos Automotores (IPVA) pago em duplicidade, indevidamente ou em valor maior q..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - troca de veículo - redução para pessoa com deficiência (PCD)",
        "oQueE": "Use este serviço para solicitar a transferência do benefício de redução do IPVA para pessoa com deficiência (PCD), de um veículo para outro, relacionado ao mesmo beneficiário. O..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - veículo recebido em sorteio da Administração Pública",
        "oQueE": "Use este serviço para regularizar o IPVA devido em casos de veículos recebidos em virtude de sorteio efetuado pela Administração Pública."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Microempresa Simples Nacional - reconsideração da análise para enquadramento no benefício do Decreto nº 16.177/2023",
        "oQueE": "Trata-se de pedido de reconsideração da análise para enquadramento no benefício previsto pelo Decreto nº 16.177/2023 . Considerando que a habilitação cadastral para usufruir do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal Avulsa Eletrônica (NFA-e) de expedição exclusiva das repartições fiscais do Estado, para ser utilizada nas seguintes hipóteses: Saídas de mercadorias prom..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em substituição à Nota Fiscal de Produtor (NFP), modelo 4. Observações: Considera-se Nota Fiscal de Produtor Eletrônica (NF..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) de IPVA - exercícios anteriores (autoparcelamento)",
        "oQueE": "Parcelamento de débitos de IPVA, referentes a exercícios anteriores ao vigente, não inscritos em dívida ativa e realizado pelo próprio contribuinte, mediante acesso ao módulo Au..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS ST devido na entrada de mercadorias no estado - concessionárias de veículos ou máquinas agrícolas (art. 4º, I, b do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS ST devido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS substituição tributária devido na entrada de mercadorias no estado de MS (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportadora conveniada por meio de Termo de Acordo para atuar como fiel depositária das mercadorias que transporta (Anexo XII ao RICMS)",
        "oQueE": "Concessão ou renovação de Regime Especial, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , por meio de Termo de Acordo assinado entre a empresa transportadora e a Secr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Restituição/Ressarcimento de indébito tributário - pedido",
        "oQueE": "Solicitação, por parte de pessoa física ou jurídica de restituição/ressarcimento de indébito nas hipóteses previstas: no art. 127 da Lei Estadual nº 2.315/2001 decorrente de: a...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "SMEPA - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de declaração no Sistema de Monitoramento de Estoques de Produtos Agrícolas (SMEPA)."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Visitar Bioparque Pantanal",
        "oQueE": "Visitação ao Bioparque Pantanal. - Maior aquário de água doce do mundo. É um empreendimento orgânico de experiências e conhecimento para TODOS! Inclusivo, acessível, científico,..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviço de protocolo integrado",
        "oQueE": "Recebimento e envio de correspondências da UEMS. O trânsito das correspondências ocorre via malotes, sendo o trajeto UEMS – UNIDADES –UEMS (este serviço é considerado como “inte..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar serviços de gestão de de patrimônio, infraestrutura e reserva de veículos oficiais",
        "oQueE": "Solicitar demandas no que diz respeito à infraestrutura, reserva de carros e patrimônio das unidades de Campo Grande"
      }
    ]
  },
  {
    "id": "empresario",
    "nome": "Empresário",
    "icon": "briefcase",
    "cor": "#6A1B9A",
    "total": 375,
    "pctDoTotal": 30.8,
    "topOrgaos": [
      {
        "orgao": "SEFAZ MS",
        "qtd": 170
      },
      {
        "orgao": "IAGRO",
        "qtd": 41
      },
      {
        "orgao": "AGEMS",
        "qtd": 17
      },
      {
        "orgao": "JUCEMS",
        "qtd": 16
      },
      {
        "orgao": "AEM",
        "qtd": 13
      }
    ],
    "exclusivas": 38,
    "compartilhadas": 337,
    "cards": [
      {
        "orgaoLabel": "AEM",
        "titulo": "Requerer autorização de empresas permissionárias para fins de reparo e manutenção de instrumentos de medição regulamentados",
        "meta": "Autorizar sociedades empresariais e pelas não empresariais (sociedades simples) que requeiram a autorização...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Requerer calibração de massas",
        "meta": "Realização de verificação metrológica de pesos-padrão e calibração de massas e peças diversas. O Laboratóri...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "meta": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar análise e ensaio de cronotacógrafo",
        "meta": "Análise de ensaios de cronotacógrafos enviados pelos PAC (Posto Autorizados de Cronotacógrafos). Após a rea...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "meta": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados p...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar pedido de vista e cópia",
        "meta": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do proce...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar registro e avaliação da conformidade de empresas credenciadas ao INMETRO",
        "meta": "Avaliar a conformidade dos serviços das empresas que prestam serviços com declaração da conformidade do for...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar verificação de medidores de umidade de grãos",
        "meta": "A verificação metrológica tem por objetivo constatar a conformidade dos medidores com o modelo previamente...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AEM",
        "titulo": "Requerer autorização de empresas permissionárias para fins de reparo e manutenção de instrumentos de medição regulamentados",
        "oQueE": "Autorizar sociedades empresariais e pelas não empresariais (sociedades simples) que requeiram a autorização para fins de reparo e manutenção de instrumentos de medição regulamen..."
      },
      {
        "orgao": "AEM",
        "titulo": "Requerer calibração de massas",
        "oQueE": "Realização de verificação metrológica de pesos-padrão e calibração de massas e peças diversas. O Laboratório é Acreditado pela Coordenação Geral de Acreditação – CGCRE ( NBR ISO..."
      },
      {
        "orgao": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "oQueE": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos relativos às multas, às taxas de serviços metrológicos e preços públic..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar análise e ensaio de cronotacógrafo",
        "oQueE": "Análise de ensaios de cronotacógrafos enviados pelos PAC (Posto Autorizados de Cronotacógrafos). Após a realização da selagem em Posto de Selagem ou da selagem e do ensaio em PA..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "oQueE": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados por infringência aos dispositivos da legislação metrológica, quer seja..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar registro e avaliação da conformidade de empresas credenciadas ao INMETRO",
        "oQueE": "Avaliar a conformidade dos serviços das empresas que prestam serviços com declaração da conformidade do fornecedor, de acordo com os regulamentos previstos nas Portarias Aprovad..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação de medidores de umidade de grãos",
        "oQueE": "A verificação metrológica tem por objetivo constatar a conformidade dos medidores com o modelo previamente aprovado, bem como verificar se os mesmos cumprem com os erros máximos..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação de veículo tanque",
        "oQueE": "Serviço de verificação de veículos-tanque rodoviários utilizados para transporte de produtos líquidos a granel."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação metrológica de medidores de energia elétrica",
        "oQueE": "Realização de verificação metrológica de medidores de energia elétrica."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação metrológica de taxímetro, moto taxímetro e medidores de velocidade",
        "oQueE": "Verificação de Taxímetros/Mototaxímetros e Medidores de Velocidade: Tem por finalidade, realizar testes metrológicos, com finalidade de APROVAR OU REPROVAR os instrumentos, de a..."
      },
      {
        "orgao": "AEM",
        "titulo": "Verificação metrológica de instrumentos de medição",
        "oQueE": "Realizar a Verificação metrológica de bombas medidoras de combustíveis líquidos, balanças em geral (verificação subsequente e após reparo), dispositivos adicionais, esfigmomanôm..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar regularização de imóveis urbanos e rurais",
        "oQueE": "Regularização fundiária Urbana tem como objetivo regularizar loteamentos/assentamentos irregulares e à titulação aos ocupantes, buscando a ocupação do solo de maneira eficiente,..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Assinar Acordo de Cooperação Técnica sobre arborização urbana e rede de energia",
        "oQueE": "Esse serviço é uma oportunidade de os Municípios obterem apoio para lidar com questões envolvendo arborização urbana e a segurança na rede elétrica. O Acordo é parte do Projeto..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Celebrar convênio de cooperação para regulação e fiscalização dos serviços de saneamento básico",
        "oQueE": "Acordo bilateral celebrado entre a Agência Estadual de Regulação de Serviços Públicos de MS e os Municípios, visando a união de esforços para atingir um interesse público em com..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Consultar horários e tarifas de linhas de transporte rodoviário intermunicipal de passageiros",
        "oQueE": "Aplicativo MS TRIP, que informa sobre horários, empresas operadoras e tarifas de todas as linhas de viagem de ônibus entre municípios de Mato Grosso do Sul."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Consultar valor de pedágio das rodovias concedidas em MS",
        "oQueE": "Informação sobre valores de pedágio cobrado nas rodovias concedidas de Mato Grosso do Sul."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Emitir licença de fretamento contínuo de transporte intermunicipal de passageiros",
        "oQueE": "Licença mensal, relativa ao deslocamento de pessoas em circuito fechado (ida e volta), por período determinado, com quantidade de viagens, frequência e horários pré-definidos. U..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Emitir licença de fretamento para transporte estudantil",
        "oQueE": "Licença emitida pela AGEMS para cada mês-calendário, relativa ao transporte de pessoas com as mesmas características de fretamento contínuo, visando o deslocamento de professore..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Emitir licença de viagem eventual ou turística intermunicipal",
        "oQueE": "Autorização emitida pela AGEMS para operadores transportarem passageiros em viagens de circuito fechado, com origem e destino definidos. Chama-se Licença de Viagem Eventual - Vi..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Obter credenciamento como Verificador Independente",
        "oQueE": "Autorização fornecida pela AGEMS às empresas aptas a atuarem como Verificador Independente, após análise dos documentos e atestados previstos na Portaria nº 175/2020. O Verifica..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Parcelar débitos de taxa de fiscalização e de multas da AGEMS",
        "oQueE": "Oportunidade para parcelar débitos de multas e taxas de fiscalização junto à Agência Estadual de Regulação de Serviços Públicos de Mato Grosso do Sul - AGEMS"
      },
      {
        "orgao": "AGEMS",
        "titulo": "Participar das atividades de educação ambiental da AGEMS",
        "oQueE": "As atividades desenvolvidas pela AGEMS integram um projeto de atuação da Agência na educação ambiental formal e não-formal, com foco no saneamento básico e contemplando todos os..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Participar de audiência e consulta pública promovida pela AGEMS",
        "oQueE": "Participar de Audiências e Consultas Públicas promovidas pela AGEMS a respeito de decisões sobre os serviços regulados."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Pedir cadastro para prestar serviço de fretamento rodoviário intermunicipal",
        "oQueE": "Cadastramento de operador interessado em atuar no ramo de viagens entre municípios de Mato Grosso do Sul na modalidade de fretamento, nas seguintes categorias: 1 – FRETAMENTO EV..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Recorrer de notificação ou autuação oriunda de fiscalização da AGEMS",
        "oQueE": "Opção de apresentar defesa em relação a autuação emitida pela AGEMS por infração na operação de serviços regulados e fiscalizados pela Agência."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar registro ou vistoria de veículo de linha de transporte intermunicipal de passageiros",
        "oQueE": "Credenciamento, nova vistoria ou renovação de vistoria de ônibus e micro-ônibus utilizado no serviço de linha regular de transporte rodoviário intermunicipal de passageiros."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar vistoria de veículo de passageiros de viagem intermunicipal na modalidade fretamento",
        "oQueE": "Vistoria periódica de veículo utilizado para transporte de passageiros na modalidade de fretamento entre municípios de Mato Grosso do Sul. A vistoria da AGEMS é obrigatória, poi..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Contratar mão de obra prisional",
        "oQueE": "Possibilidade de empregadores interessados contratarem pessoas em cumprimento de pena para executarem atividades laborais relacionadas ao serviço oferecido pela empresa."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar atendimento para reinserção social do egresso",
        "oQueE": "Atendimento social prestado ao pré-egresso, egresso e seus familiares, buscando a reinserção do individuo na sociedade. O atendimento é desenvolvido pelo Escritório Social, send..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar atestado de permanência carcerária",
        "oQueE": "A Declaração de Cárcere, também denominada Atestado de Permanência Carcerária, é documento oficial emitido e assinado pelo Diretor da Unidade Prisional onde a pessoa privada de..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar Carteira de Visitante do Sistema Prisional",
        "oQueE": "A Agepen (Agência Estadual de Administração do Sistema Penitenciário) de Mato Grosso do Sul lançou uma nova ferramenta que facilita a vida de familiares de pessoas privadas de l..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "oQueE": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria entre o Governo do Estado de MS com a AGEPEN e o Tribunal de Justiça de M..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar transferência de custodiado",
        "oQueE": "A solicitação de transferência consiste em requerimento de natureza judicial e administrativa, destinado à realocação do custodiado de uma unidade prisional para outra, no âmbit..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "oQueE": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico, para servidores que estão afastados do trabalho por motivo de saúde."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientação para entrar no mercado de trabalho, com apoio da previdência (Jovem Pensionista)",
        "oQueE": "Serviço de apoio aos jovens que recebem pensão a se prepararem para trabalhar. Ele oferece cursos, oficinas e orientação para que o jovem possa aprender uma profissão, se desenv..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientações sobre seus direitos e deveres previdenciários, por meio do PROEP - Programa de Educação Previdenciária do Regime Próprio de Previdência Social de MS",
        "oQueE": "Este serviço ajuda você a entender melhor seus direitos e deveres como segurado da previdência do Estado, por meio de participação no PROEP - Programa de Educação Previdenciária..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Registrar a entrega de solicitações, acompanhadas ou não de documentos e de processos no setor de protocolo registro e arquivo",
        "oQueE": "É o serviço de recebimento, registro, envio e arquivamento de documentos ou processos administrativos e previdenciários, por meio da classificação, distribuição, controle de tra..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Aderir ao programa de verticalização da produção agropecuária do estado do MS",
        "oQueE": "Programa de incentivo às agroindústrias com o objetivo de resgatar a cidadania do pequeno produtor rural, excluído do processo econômico, inserindo-o no processo produtivo atrav..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "oQueE": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestão, produção, beneficiamento e comercialização das atividades e dos ser..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Cadastrar empresas e profissionais que exerçam atividades relacionadas à prevenção contra incêndio, pânico e outros riscos",
        "oQueE": "É o ato de se solicitar, junto ao Corpo de Bombeiros Militar, o cadastramento de empresas e profissionais que exerçam atividades relacionadas à prevenção contra incêndio, pânico..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Obter certidão de ocorrência",
        "oQueE": "É a emissão do documento que comprova que o cidadão foi atendido por uma equipe do Corpo de Bombeiros Militar em ocorrências de incêndio (em residência, comércio, indústria, ter..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar busca e salvamento de pessoas ou bens",
        "oQueE": "É o conjunto de operações necessárias à localização, acesso e remoção com segurança de pessoas ou bens em situação de perigo, para local seguro. A busca e/ou salvamento é inicia..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Curso de Formação de condutores para 1º habilitação",
        "oQueE": "Curso destinado aos candidatos à primeira habilitação que desejam obter a Autorização para Conduzir Ciclomotor ou a CNH nas categorias A ou B."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Participar de movimentos nacionais: maio amarelo e semana nacional do trânsito",
        "oQueE": "O movimento Maio Amarelo nasceu com uma só proposta: chamar a atenção da sociedade para o alto índice de mortos e feridos no trânsito em todo o mundo. O objetivo do movimento é..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "SOLICITAR ATENDIMENTO ÀS INSTITUIÇÕES DE ENSINO SUPERIOR",
        "oQueE": "O Programa é desenvolvido pelo Detran/MS, por meio da Gerência de Projetos e Campanhas, junto às Instituições de Ensino Superior, visando sensibilizar acadêmicos e veteranos sob..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar atendimento em eventos de instituições públicas e privadas",
        "oQueE": "O Programa de atendimento aos eventos socais, culturais, educativos, desporto e lazer, organizados por instituições públicas e privadas, oferece atividades educativas de trânsit..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar inscrição no Programa Cidade Escola de Trânsito - Detranzinho",
        "oQueE": "A Cidade Escola de Trânsito – Detranzinho, inaugurada em setembro de 1998 e iniciando suas operações em 27 de maio de 1999, representa um espaço dinâmico voltado para a vivência..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar palestras educativas de trânsito em empresa públicas e privadas",
        "oQueE": "O Programa de Palestras em Empresas Públicas e Privadas (PROSEGUE) oferece palestras educativas acerca de temas relacionados ao trânsito e à prevenção dos acidentes: Legislação..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar primeiro emplacamento de veículo",
        "oQueE": "Destinado ao registro de veículos novos (zero KM)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Processo Primeira Habilitação (Permissão para Dirigir-PpD)",
        "oQueE": "Cadastro de processo de obtenção da Primeira Habilitação (Permissão para Dirigir - PpD) nas categorias A e B."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai onde o idoso está",
        "oQueE": "Atendimento nos Centros de Convivência e Assistência Social, movimentos e associações, tendo como finalidade o desenvolvimento do Programa “Prevenção, Mobilidade, Acessibilidade..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Reabilitação - Permissão para Dirigir/PpD (permissionado)",
        "oQueE": "Cadastro de processo de Reabilitação (novo processo de primeira habilitação)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Trocar endereço do registro do veículo - mesmo proprietário (dono)",
        "oQueE": "Por meio desse serviço, você pode solicitar a troca de endereço do registro de seu veículo quando ocorrer mudança de cidade , dentro do Mato Grosso do Sul."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Obter descontos em instituições de ensino parceiras",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Oferecer parceria de descontos para servidores estaduais",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar programa ou cursos de capacitação continuada",
        "oQueE": "A Escolagov promove, elabora e executa programas e projetos de qualificação e formação profissional dos agentes públicos estaduais, como meio de desenvolvimento do serviço públi..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Apoiar a educação básica das escolas públicas de Mato Grosso do Sul",
        "oQueE": "Esse serviço consiste em atender as demandas das escolas públicas de Mato Grosso do Sul, por meio de projetos, em articulação com a Secretaria de Estado de Educação (SED/MS) e a..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Orientações para solicitação de certidão negativa de tombamento",
        "oQueE": "A Certidão Negativa de Tombamento é um documento oficial que atesta que determinado imóvel ou bem não está protegido por tombamento em nível municipal, estadual ou federal. Este..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar a confecção de carteira nacional do artesão",
        "oQueE": "A carteira Nacional do Artesão é uma identificação nacional para artesãos e trabalhadores manuais de todo o Brasil. O documento tem abrangência nacional e oferece diversos benef..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar apoio a projetos culturais por meio de editais públicos",
        "oQueE": "Investimento em projetos de produção cultural sul-mato-grossense em suas mais diversas manifestações, priorizando a circulação das artes por todas as regiões do Estado como form..."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Acessar gratuitamente programas da TV educativa (Portal da Educativa)",
        "oQueE": "O Portal da Educativa reúne o conteúdo das produções da TV Educativa para visualização sob demanda. O site está no ar desde junho de 2015, e tem conteúdos (esporte, de entreteni..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para as pesquisas com parcerias internacionais",
        "oQueE": "Este serviço consiste na promoção de ações visando a internacionalização das pesquisas executadas no Estado, por meio de apoio financeiro a pesquisadores que buscam inserir seus..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para financiamento de atividades de pesquisa, desenvolvimento tecnológico e inovação em empresas",
        "oQueE": "Apoio financeiro, na forma de subvenção econômica, aplicado no financiamento de atividades de pesquisa, desenvolvimento tecnológico e inovação em empresas."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar concessão de bolsas de estudo",
        "oQueE": "Este serviço consiste na concessão de bolsas de estudo para qualificação de recursos humanos em várias modalidades e públicos, desde bolsas para alunos do ensino fundamental e m..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar apoio financeiro federações, clubes e associações esportivas de MS",
        "oQueE": "Trata-se de apoio financeiro a eventos, ações ou atividades que envolvam as organizações da sociedade civil (osc), que visem a fomentar as práticas esportivas."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Viabilizar apoios de fomento para impulsionar o desenvolvimento esportivo de federações, clubes, associações e prefeituras municipais",
        "oQueE": "Este serviço justifica-se na finalidade da Fundação de Desporto e Lazer de Mato Grosso do Sul que busca “fomentar, planejar, executar e difundir programas, projetos e atividades..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Acessar plataforma de inteligência turística de Mato Grosso do Sul",
        "oQueE": "A Alumia é a Plataforma de Inteligência Turística do Mato Grosso do Sul. Tem como objetivo oferecer dados e informações atualizadas, de forma organizada e de qualidade, a empres..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Consultar edição e publicação de edital de chamamento público para eventos geradores de fluxo turístico",
        "oQueE": "Elaboração e publicação de edital de chamamento público para apoio a eventos geradores de fluxo turístico, com municípios e organizações da sociedade civil sem fins lucrativos,..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Consultar homologação e orientação técnica quanto ao cadastro de prestadores de serviços turísticos no CADASTUR",
        "oQueE": "A FUNDTUR é órgão do governo do estado responsável pela homologação do cadastros realizados prestadores de serviços turísticos no Sistema CADASTUR do Ministério do Turismo. Para..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Solicitar participação em eventos promocionais do turismo",
        "oQueE": "A Fundação de Turismo de Mato Grosso do Sul (FUNDTUR) participa de feiras e eventos, além de formatar ações promocionais com o intuito de promover o Mato Grosso do Sul como dest..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Reservar sala para atender candidatos",
        "oQueE": "Além dos demais serviços disponíveis ao empregador, a Funtrab dispõe do 'Espaço Empregador' para uso do empresário, de segunda a sexta, caso queira realizar o processo de seleçã..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar qualificação social e profissional",
        "oQueE": "O serviço \"MS Qualifica\" é um programa do governo de Mato Grosso do Sul que oferece cursos para aumentar a qualificação profissional da população, com o objetivo de melhorar a e..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Utilizar serviço psicossocial do trabalho",
        "oQueE": "Atendimento aos trabalhadores desempregados com pouca ou nenhuma qualificação profissional, baixa escolaridade, acima de 50 anos, idosos e pessoas com deficiência (PcD) e egress..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Alterar registro de empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Alterar registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóxicos. prestadores..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar apiário ou meliponário",
        "oQueE": "Serviço de cadastramento de apiários e meliponários que não possuem Inscrição Estadual. Observação: Caso o produtor possua Inscrição Estadual, deverá fazer o seu cadastro atravé..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar estabelecimento manipulador de subprodutos de origem animal não comestíveis para emissão de GTS",
        "oQueE": "Cadastramento de estabelecimentos do estado do Mato Grosso do Sul que manipulam e comercializam subprodutos de origem animal não comestíveis, de uso industrial ou técnico, no si..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar granjas de reprodutores suínos certificada  (GRSC)",
        "oQueE": "Cadastramento de propriedade ou estabelecimento que tem objetivo de comercializar suínos ou seu material genético para reprodução. Atender os requisitos definidos na Portaria SD..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar indústria produtos agrotóxicos no e-saniagro",
        "oQueE": "Cadastro de indústrias de produtos agrotóxicos no sistema e-saniagro para posterior cadastro de produtos agrtóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar ou atualizar empresa integradora de ave ou suíno",
        "oQueE": "Cadastro ou atualização das informações cadastrais de empresas integradoras que atuam na produção de aves e suínos no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar propriedade rural de fora do MS",
        "oQueE": "Cadastramento no Sistema e-SANIAGRO de propriedades rurais de fora do estado do Mato Grosso do Sul, para que possa ser dada a anuência de documentos de trânsito, com a confirmaç..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda de aves vivas",
        "oQueE": "Emissão do certificado de cadastro de estabelecimento de venda de aves vivas. Modelo do certificado."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda de sêmen",
        "oQueE": "Cadastramento de revendas (comércio/estabelecimento) ou propriedade rural que comercializa material de multiplicação animal (sêmen)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar revenda produtos veterinários",
        "oQueE": "Cadastro de estabelecimento (comércio) que atuam na comercialização de produtos de uso veterinário."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar-se como profissional habilitado para cultivos e estabelecimentos de insumos agrícolas",
        "oQueE": "Cadastramento de Engenheiros Agrônomos, Engenheiros Florestais ou Técnicos Agrícolas, na Iagro, como profissionais habilitados para cultivos agrícolas de soja, algodão, floresta..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cancelar o registro de estabelecimento comercial e prestador de serviço de agrotóxico",
        "oQueE": "Requerimento de baixa do registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóx..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Certificar estabelecimento de criação livre de brucelose e/ou tuberculose animal",
        "oQueE": "A obtenção do certificado de estabelecimento de criação livre de brucelose e/ou tuberculose."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar Auto de Infração e Multa on-line",
        "oQueE": "Consultar através do módulo de multas do e-Saniagro Auto de Infração e Multa existente no CPF/CNPJ e inscrição estadual - IE, do interessado. Emitir DAEMS (à vista ou parcelado)..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar comércio de aves vivas",
        "oQueE": "Consulta da situação dos estabelecimentos que comercializam aves vivas."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar equídeos identificados",
        "oQueE": "Consulta de equídeos identificados na resenha virtual utilizando ao menos duas informações sobre o animal (numeração da certidão de identificação do animal, chip, associação de..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar núcleos ativos (ave e suíno)",
        "oQueE": "Consulta da listagem de núcleos de aves e suínos do MS pela inscrição estadual ou código PGA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar on line o trâmite das análises de solos e calcários",
        "oQueE": "Por meio de consulta online é possível acompanhar o andamento (trâmite) das análises das amostras de solos e calcários encaminhadas ao LABSOLOS."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar relatório de fiscalização em comércio de agrotóxico",
        "oQueE": "Consulta de relatório resultado de fiscalização realizada pela Iagro em comerciante de produtos agrotóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Credenciar responsável técnico para emissão de GTS",
        "oQueE": "Credenciamento de médicos veterinários privados ou responsáveis técnicos de nível superior (RT), que comprovadamente prestem assistência técnica a estabelecimentos que manipulem..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Elaborar plano de ação para positividade de salmonelas",
        "oQueE": "Elaboração e apresentação de plano de ação pelo médico veterinário responsável quando o estabelecimento avícola de corte tiver resultado positivo para Salmonela de controle ofic..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Habilitar ficha sanitária",
        "oQueE": "Serviço de cadastramento para pessoa física ou jurídica (empresa), incluindo as cooperativas ou prestadoras de serviço, que exerçam atividades ou evento, com ou sem finalidade e..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de anemia infecciosa equina",
        "oQueE": "Diagnóstico sorológico da anemia infecciosa equina por meio da técnica de IDGA ou ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Doença de Aujeszky",
        "oQueE": "Diagnóstico da doença de aujeszky por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de mormo",
        "oQueE": "Diagnóstico de mormo por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Peste Suína Africana",
        "oQueE": "Diagnóstico de peste suína africana por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de peste suína clássica",
        "oQueE": "Diagnóstico da peste suína clássica por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar exame de Síndrome Reprodutiva e Respiratória dos Suínos",
        "oQueE": "Diagnóstico da síndrome reprodutiva e respiratória dos suínos por meio da técnica de ELISA."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Realizar transferência do registro no Serviço de Inspeção Estadual (SIE)",
        "oQueE": "Transferência da titularidade do registro do estabelecimento registrado junto ao Serviço de Inspeção Estadual - SIE, para outra pessoa física ou jurídica."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Requerimento de novo registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço, comerciantes, transportadoras e armazenadoras de produtos agrotóxicos..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar estabelecimento comerciante de mudas cítricas",
        "oQueE": "Registro obrigatório do estabelecimento, junto a IAGRO, para o comércio de mudas cítricas (plantas dos gêneros Citrus , Fortunella e Poncirus)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar estabelecimento no serviço de inspeção estadual (SIE)",
        "oQueE": "Registrar estabelecimento de produtos de origem animal no serviço de inspeção estadual (SIE)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Regularizar estoque de agrotóxicos",
        "oQueE": "Este serviço tem como objetivo regularizar o saldo registrado no sistema E-Saniagro, alinhando-o com o estoque físico existente no estabelecimento comerciante de agrotóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Renovar credenciamento de responsável técnico para emissão de GTS",
        "oQueE": "Renovação de credenciamento de médicos veterinários privados ou responsáveis técnicos de nível superior (RT), que comprovadamente prestem assistência técnica a estabelecimentos..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Renovar registro de empresa comerciante de agrotóxico e prestador de serviço",
        "oQueE": "Renovação do certificado de registro de estabelecimentos comerciais, empresas fabricantes, prestadoras de serviço*, comerciantes, transportadoras e armazenadoras de produtos agr..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer  autorização para aquisição/importação de mudas cítricas - estabelecimentos",
        "oQueE": "Requerimento de autorização para aquisição ou importação de mudas cítricas a ser solicitado por estabelecimento registrado na IAGRO."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar adesão ao sistema brasileiro de inspeção de produtos de origem animal (SISBI/POA)",
        "oQueE": "Adesão de estabelecimentos SIE no sistema brasileiro de inspeção de produtos de origem animal (SISBI/POA)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar exame de  leptospirose",
        "oQueE": "Diagnóstico de leptospirose por meio da técnica Soroaglutinação Microscópica (SAM)."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar exame de raiva",
        "oQueE": "D iagnóstico da raiva por meio das técnicas de imunofluorescência direta (IFD) e PCR em tempo real."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar pré-vistoria para instalação de núcleo avícola",
        "oQueE": "Solicitação da vistoria prévia de uma área para implantação de qualquer estabelecimento avícola (comercial, de reprodução ou de ensino/pesquisa) no Mato Grosso do Sul."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Suspender ou cancelar registro junto ao Serviço de Inspeção Estadual - SIE a pedido",
        "oQueE": "Suspensão ou cancelamento do registro junto ao Serviço de Inspeção Estadual (SIE), a pedido do próprio estabelecimento."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Cadastrar ações de educação ambiental no SisEA",
        "oQueE": "O SisEA-MS é o Sistema Estadual de Informações em Educação Ambiental do Imasul. Ele permite o cadastro de programas, projetos, campanhas e ações de educação ambiental realizados..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Descentralizar o licenciamento ambiental",
        "oQueE": "Trata-se da transferência da competência para licenciar, fiscalizar e monitorar atividades de impacto local, que deixa de ser exercida pelo órgão estadual e passa a ser atribuiç..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer acesso ao sistema de logística reversa de embalagens em geral",
        "oQueE": "A Logística Reversa de Embalagens em Geral é um instrumento de desenvolvimento econômico e social previsto na Política Nacional de Resíduos Sólidos (PNRS), instituída pela Lei F..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer participação no rateio do ICMS Ecológico - Componente Resíduo Sólidos",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar compensação de reserva legal em unidade de conservação por meio de doação de terras para o Estado",
        "oQueE": "Trata-se de um serviço destinado à regularização ambiental e fundiária por meio da compensação de Reserva Legal em Unidades de Conservação de domínio público, conforme estabelec..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar inscrição de UC no Cadastro Estadual de Unidades de Conservação (CEUC)",
        "oQueE": "O Cadastro Estadual de Unidades de Conservação (CEUC) é o instrumento de reconhecimento oficial das unidades de conservação no Estado de Mato Grosso do Sul, com vistas à partiçã..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar participação no ICMS Ecológico – Componente Unidades de Conservação e Terras Indígenas",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Autenticar livro digital",
        "oQueE": "O Livro Digital (livros contábeis ou não dos empresários individuais, das sociedades, bem como dos livros dos agentes auxiliares do comércio) consiste no envio eletrônico da esc..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar solicitações - processo, livro ou serviço",
        "oQueE": "Trata-se de um serviço web que permite consultar os serviços solicitados junto a JUCEMS, tais como: Processos de aberturas, alterações, extinções ou outros documentos de interes..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar tabela de prazos",
        "oQueE": "Consultar tabela de prazos é um serviço disponibilizado pela JUCEMS, com o intuito de publicitar os prazos de execução dos serviços prestados pela JUCEMS."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar tabela de preços",
        "oQueE": "Consultar tabela de preços é um serviço disponibilizado pela JUCEMS, com o intuito de publicitar as especificações de atos integrantes da tabela de preços, com seus respectivos..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Emitir certidão de inteiro teor digital",
        "oQueE": "A Certidão de Inteiro Teor Digital é a fotocópia dos atos arquivados pela empresa na Junta Comercial. A JUCEMS oferece a certidão de inteiro teor digital, obtida através do down..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Emitir certidão específica digital",
        "oQueE": "A Certidão Específica Digital é o extrato de informações particularizadas solicitadas para finalidade de comprovação de dados constantes de atos arquivados, no limite de três in..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Emitir certidão simplificada digital",
        "oQueE": "A Certidão Simplificada Digital é um extrato de informações que espelham a situação atual da empresa de acordo com os atos arquivados e o seu último registro assentado até o mom..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Emitir ficha cadastral digital",
        "oQueE": "A Ficha Cadastral Digital é o extrato atualizado dos dados da empresa, sem valor legal, com mais informações que a Certidão Simplificada. Além de conter o nome empresarial, o en..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Pesquisar viabilidade",
        "oQueE": "Pesquisa prévia (VIABILIDADE) é uma consulta eletrônica antecipada, onde se coleta as informações do endereço, atividade econômica e nome empresarial da empresa, tendo como resu..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Reclame jucems",
        "oQueE": "O Reclame JUCEMS é um canal de atendimento pelo qual você poderá reclamar da perda de prazo para cumprimento das exigências, discordância das exigências formuladas nos processos..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Registrar abertura ou alteração de empresa",
        "oQueE": "Abertura: é o processo de registro empresarial para abertura de empreendimento comercial constituído para explorar um ou mais ramos de negócios e oferecer ao mercado serviços e/..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Registrar extinção de empresa",
        "oQueE": "É o processo de registro do encerramento das atividades empresariais, equivale à extinção/dissolução. As empresas são constituídas para cumprir seus objetos sociais e quando por..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Solicitar relatório de empresas",
        "oQueE": "Trata-se de um serviço para venda de informação de empresas, realizado através de relatórios estatísticos (quantitativo) ou com informações detalhadas dos empreendimentos regist..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Validar documentos",
        "oQueE": "É uma plataforma web oferecida aos usuários que desejam ter acesso, de forma facilitada, aos serviços digitais da JUCEMS. Ela reúne todas as informações necessárias para efetiva..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Licitar e contratar",
        "oQueE": "As licitações e contratações diretas são as ferramentas por meio das quais a MSGÁS adquire ou contrata insumos, materiais, serviços e obras para a realização de suas atividades."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar a religação de fornecimento de gás natural em até 4 horas",
        "oQueE": "Trata-se do reestabelecimento do fornecimento de gás natural a uma unidade consumidora que tenha sido desligada a pedido do cliente ou por débito, ou seja, a religação só pode s..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar religação de fornecimento de gás natural em até 48 horas",
        "oQueE": "Trata-se do restabelecimento do fornecimento de gás natural a uma unidade consumidora que tenha sido desligada a pedido do cliente ou por débito, ou seja, a religação só pode se..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Propor acordo na Câmara Administrativa de Solução de Conflitos (CASC - saúde) para receber medicamentos",
        "oQueE": "Este serviço permite a formalização de acordos para fornecer ao cidadão medicamentos não previstos no SUS, evitando novas ações judiciais ou resolvendo processos já em andamento..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar peticionamento em processo administrativo",
        "oQueE": "Este serviço permite que cidadãos, empresas e servidores estaduais iniciem processos administrativos junto aos órgãos do Poder Executivo Estadual. O peticionamento pode ser feit..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do programa mulher segura (PROMUSE)",
        "oQueE": "Programa Mulher Segura – PROMUSE é um programa que realiza o monitoramento e proteção das mulheres em situação de violência doméstica e familiar. Policiais Militares devidamente..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto bom de bola e bom na escola",
        "oQueE": "O Projeto Bom de Bola, Bom na Escola – PBBBE, criado pela Portaria n.º 05/12-PM3, 20 de março de 2012 e com base no Estatuto da Criança e do Adolescente – ECA, tem por finalidad..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto florestinha – educação ambiental",
        "oQueE": "O Projeto Florestinha é um projeto socioambiental criado em 23 de novembro de 1992, e oficialmente regulamentando por meio da Portaria nº 16/13/PM-3/PMMS de 22 de outubro de 201..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto tiro adaptado",
        "oQueE": "O Projeto Tiro Esportivo Adaptado, tem como objetivo reabilitar o deficiente físico e reintegrá-lo à sociedade, alcançando, também, seus familiares que tenham interesse na práti..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Rádio Patrulha – Proteção de vidas nas cidades",
        "oQueE": "O serviço de policiamento ostensivo de rádio patrulha exercício pela polícia militar está em todas as cidades do Estado e possui o objetivo de prevenção de infrações penais e at..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Solicitar Resgate de Animal Silvestre",
        "oQueE": "É o atendimento realizado pela Polícia Militar Ambiental para recolhimento, contenção e encaminhamento de animal silvestre encontrado fora do seu habitat natural, ferido, debili..."
      },
      {
        "orgao": "SAD",
        "titulo": "Aderir ao cadastro de fornecedores",
        "oQueE": "O Unidade de Cadastro de Fornecedores (UCAF) , diretamente subordinado à Superintendência de Gestão de Compras e Materiais, administra e controla o cadastro dos fornecedores do..."
      },
      {
        "orgao": "SAD",
        "titulo": "Seleção e Ingresso de Pessoal por meio de Concursos Públicos, Processos Seletivos Internos e Processos Seletivos Simplificados",
        "oQueE": "Compete à Secretaria de Estado de Administração o planejamento, a coordenação e a execução do processo de recrutamento, seleção e de admissão de pessoal, mediante a realização d..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Participar de licitação",
        "oQueE": "É o processo licitatório para aquisição de bens e a contratação de serviços comuns (contratados pelo Rito Procedimental similar ao Pregão), assim como os procedimentos de licita..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar conserto de rede",
        "oQueE": "Conserto de rede é para os casos de vazamento de água no meio da rua ou próximo ao meio fio ou na calçada."
      },
      {
        "orgao": "SEAD",
        "titulo": "Acessar cursos da Escola do SUAS/MS",
        "oQueE": "A Escola é um espaço criado pelo Governo do Estado de Mato Grosso do Sul para formar e capacitar profissionais da área de assistência social. Ela oferece cursos, oficinas, semin..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar apoio e orientação às organizações da sociedade civil",
        "oQueE": "Têm como objetivo orientar, capacitar e acompanhar instituições governamentais e não governamentais na formalização de parcerias, elaboração de projetos e captação de recursos...."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento pelo Programa Direitos Humanos em Ação",
        "oQueE": "Esse serviço oferece ações educativas sobre direitos humanos, com o objetivo de: Informar, orientar e conscientizar pessoas e grupos; Fortalecer o empoderamento individual e col..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar bloqueio de ligação de telemarketing",
        "oQueE": "Serviço gratuito que permite ao cidadão ou à empresa bloquear chamadas telefônicas não autorizadas realizadas por empresas de telemarketing ou por estabelecimentos que utilizem..."
      },
      {
        "orgao": "SEC",
        "titulo": "Central de Orientação à Cidadania e Gestão Pública",
        "oQueE": "A Central de Orientação à Cidadania e Gestão Pública é um serviço que oferece suporte técnico, articulação institucional e orientação estratégica a gestores públicos municipais,..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar carteira de identificação por nome social - CNS",
        "oQueE": "A carteira de nome social permite o reconhecimento de transexuais e travestis pelo nome com o qual se identificam. O documento é válido para tratamento nominal nos órgãos e enti..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar orientação técnica para a criação e fortalecimento de associações comunitárias",
        "oQueE": "A Subsecretaria de Políticas Públicas para Assuntos Comunitários fornece orientação técnica e capacitação para criar e fortalecer associações e cooperativas locais. Promovemos a..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Emitir, no formato digital, a Carteira de Identificação Estudantil de Mato Grosso do Sul",
        "oQueE": "É É a emissão, no formato digital, da Carteira de Identificação Estudantil de Mato Grosso do Sul (CDIEMS) que beneficia o pagamento de meia entrada para os estudantes, conforme..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar certificação do Ensino Médio por meio do Enem, no período de 2009 a 2012",
        "oQueE": "É a certificação de conclusão do Ensino Médio, com utilização dos resultados do Exame Nacional do Ensino Médio – ENEM especificante referente aos anos de 2009 a 2012."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Educação de Jovens e Adultos",
        "oQueE": "Modalidade de ensino que busca oportunizar a escolarização ou complementação dos estudos na educação básica. Oferta dos anos finais e do ensino médio a jovens, adultos e idosos..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula na educação infantil",
        "oQueE": "É a primeira etapa da Educação Básica, a qual visa garantir a concepção que vincula educar e cuidar, ampliando os conhecimentos construídos pelas crianças no ambiente familiar e..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula no ensino fundamental",
        "oQueE": "O Ensino Fundamental é a etapa intermediária da Educação Básica, com duração de 9 anos, frequentada pela criança dos 6 aos 14 anos. É dividida em anos iniciais (1º ao 5º ano), q..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula no ensino médio em tempo integral",
        "oQueE": "É um Programa de oferta do Ensino Médio em Tempo Integral – EMTI, que tem como proposta pedagógica a formação integral do jovem, estimulando não só o desenvolvimento da aprendiz..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o programa das escolas cívico-militares",
        "oQueE": "As Escolas Cívico-Militares são estabelecimentos públicos estaduais de ensino, que ministram o ensino regular na educação básica, nas etapas ensino fundamental (do 6º ao 9º ano)..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar participação no curso de libras",
        "oQueE": "O curso de Libras tem como objetivo promover a acessibilidade comunicacional para profissionais da educação que atuam com estudantes surdos, oferecendo formação certificada e co..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar produção e adaptação de materiais didáticos em Libras",
        "oQueE": "Este serviço visa garantir a acessibilidade educacional para estudantes surdos por meio da criação e adaptação de conteúdos pedagógicos em Língua Brasileira de Sinais (Libras)...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Análise das obrigações socioeconômicas pactuadas em Termo de Acordo - Benefício da Lei Complementar nº 93/2001",
        "oQueE": "Este serviço é o canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 comprove, de forma espontânea ou mediante i..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a emissão do Atestado de Inexistência para fins de manutenção do diferimento do ICMS Diferencial de Alíquotas ou do ICMS Importação na aquisição de máquinas e equipame..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a termo de apreensão (TA), conforme art. 4º da Instrução Normativa/SAT nº 001/2020",
        "oQueE": "Solicitação de lavratura de Auto de lançamento e de imposição de multa (ALIM - mod. 2) que poderá ser realizada quando houver um Termo de Apreensão (TA) emitido para a cobrança..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - contraditório e ampla defesa",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2, que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - parcelamento de débito fiscal",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2 , que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - controle de empresas interdependentes (art. 57-A da Lei nº 1.810/1997) - apenas para contribuintes de Mato Grosso do Sul",
        "oQueE": "Reconhecimento da condição de interdependência, prevista no art. 57-A da Lei nº 1.810/1997 , entre empresa de Mato Grosso do Sul e empresa de outra Unidade da Federação que lhe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - aquisição de milho e soja para uso na ração animal, com diferimento do ICMS",
        "oQueE": "Solicitar Autorização Específica para aquisição de milho e soja com diferimento do pagamento do ICMS, nas operações internas realizadas por produtor rural, para uso como ração a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - armazenagem de álcool combustível ou açúcar em outra usina com diferimento do ICMS",
        "oQueE": "Solicitar Autorização Específica para armazenagem de álcool combustível ou açúcar em outra destilaria localizada dentro do Estado de MS com o diferimento do pagamento do ICMS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - concessão ou renovação do diferimento do EAC previsto no Convênio ICMS nº 15/2023, no cumprimento de obrigações, que dispõe sobre o regime de tributação monofásica do ICMS",
        "oQueE": "Os contribuintes deverão estar relacionados no Anexo II ou IV do Ato COTEPE/ICMS nº 43/2023 para a concessão do diferimento do imposto retido estabelecido nos §§ 2º e 5º da cláu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - credenciamento para remessa de alumínio a estabelecimentos de outra UF, assumindo a responsabilidade pelo pagamento do ICMS (art. 47-A, § 5º, II do Anexo III ao RICMS)",
        "oQueE": "Credenciamento de empresas para realizar operações interestaduais com alumínio em formas brutas e quaisquer outras mercadorias classificadas na posição NCM/SH 7601, destinadas a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito outorgado e redução do percentual de MVA nas operações internas realizadas por estabelecimentos comerciais atacadistas (Decreto nº 15.368/2020) - apenas para atacadistas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 4º do Decreto nº 15.368/2020 , para utilização de: Crédito outorgado previsto nos artigos 1º e 3º desse decreto, nas operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido incidente nas operações com energia elétrica e serviços de comunicação",
        "oQueE": "Concessão de Autorização Específica para utilização do benefício de crédito presumido sobre o valor do imposto incidente nas operações com energia elétrica ou serviços de comuni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações com os produtos resultantes da industrialização do leite (art. 1º do Decreto nº 6.996/1993) - apenas para industrializadores de leite",
        "oQueE": "Concessão de Autorização Específica para utilização de crédito presumido previsto no art. 1º do Decreto nº 6.996/1993 , nas operações internas e interestaduais, sobre o valor do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações internas ou interestaduais com produtos cerâmicos (art. 77, II do Anexo I ao RICMS) - apenas para indústrias",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 77, II do Anexo I ao Regulamento do ICMS , para utilização do benefício de crédito presumido sobre o valor do imposto incid..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de embalagens plásticas e latas produzidas em MS para acondicionar os produtos do adquirente (Resolução Interna SEF de 1993) - apenas para indústrias e abatedores de animais",
        "oQueE": "Concessão de Autorização Específica, prevista na Resolução Interna SEF 000/1993 , para que indústrias e estabelecimentos abatedores de aves, bovinos, suínos e outros animais adq..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por empresa industrializadora de ração animal, na operação interna (art. 7º do Decreto nº 9.895/2000) - apenas para indústrias de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 7º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas, dentro do Estado de Mato Grosso do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por indústrias, na operação interna (art. 3º do Decreto nº 9.895/2000) - apenas para indústrias, exceto fabricantes de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 3º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas de estabelecimentos comerciais ou d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas operações internas com couro bovino ou bufalino e produtos químicos adquiridos por industrializadores de couro (Decreto nº 11.796/2005) - apenas para indústrias de couro",
        "oQueE": "Concessão de Autorização Específica, prevista nos art. 3º e 4º do Decreto nº 11.796/2005 , para aquisição de couro bovino ou bufalino e de produtos químicos utilizados em seu pr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas saídas internas de algodão em pluma, realizadas por produtor, para outro estabelecimento do mesmo produtor (art. 10, II do Decreto nº 9.895/2000) - apenas para produtores de algodão",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 10, II do Decreto nº 9.895/2000 , para receber algodão em pluma produzido e beneficiado em MS, de outro estabelecimento pro..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS no recebimento de grãos da CONAB - para estabelecimentos industriais, comerciais ou de cooperativas (art. 1º, § 1º, II, c do Anexo II ao RICMS)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º, § 1º, II, c do Anexo II ao Regulamento do ICMS , para recebimento de produtos agropecuários da Companhia Nacional de Ab..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS Garantido-Abate (Decreto nº 12.056/2006) - serviço exclusivo para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica de diferimento do ICMS Garantido-Abate - apenas para Atacadistas de Carne inscritos no CAE 4.17.00 (autorização prevista no art...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS incidente na aquisição de gado bovino e bufalino em pé para abate (Decreto nº 12.056/2006) - serviço exclusivo para frigoríficos (CAE 3.17.03)",
        "oQueE": "Concessão ou renovação de Autorização Específica de Diferimento do ICMS nas aquisições de gado bovino e bufalino para abate - apenas para frigoríficos inscritos no CAE 3.17.03 (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - apenas para usinas e industriais de combustíveis, derivados ou não de petróleo",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - serviço exclusivo para cerealistas ou comercializadoras de cereais",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS Garantido-Abate - serviços exclusivos para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica (prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS nas operações com gado bovino e bufalino para abate ou diferimento do ICMS Garantido-Abate - exclusivo para frigoríficos",
        "oQueE": "Concessão ou renovação de Autorização Específica ( prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interesta..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS nas saídas interestaduais - empresas NÃO ENQUADRADAS como cerealistas ou comercializadoras de cereais, usinas ou industriais de combustíveis, frigoríficos e atacadistas de carne",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestaduais de produ..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização Específica mediante Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 9.578/1999",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado assumir a responsabilidade pelo ICMS ST devido e adotar como base de cálculo do ICMS valor d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - percentual de valor diferenciado de MVA para produtos alimentícios (art. 6º-D do Anexo III ao RICMS) - apenas para indústrias de alimentos",
        "oQueE": "Concessão de autorização específica, prevista no artigo 6º-D do Anexo III ao Regulamento do ICMS , para que estabelecimentos industriais localizados neste Estado realizem operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações com produtos resultantes da industrialização da mandioca (art. 60-B do Anexo I ao RICMS) - apenas para industrializadores de mandioca",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-B do Anexo I ao Regulamento do ICMS , para utilização do benefício de redução de base de cálculo nas operações internas..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações internas com máquinas novas relacionadas no Decreto nº 16.114/2023 - apenas para empresas comercializadoras das máquinas citadas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 2º do Decreto nº 16.114/2023 , para utilização do benefício de redução de base de cálculo nas operações internas com máquin..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas saídas de farinha de mandioca promovidas por produtor rural (art. 60-F do Anexo I ao RICMS) - apenas para produtores rurais",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-F do Anexo I ao Regulamento ICMS , para utilização do benefício de redução de base de cálculo nas saídas internas e inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - remessa interna para industrialização com diferimento do ICMS incidente sobre o valor do serviço de industrialização, no retorno dos produtos ao estabelecimento de origem (Decreto nº 11.236/2003)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º-A do Decreto nº 11.236/2003 , para que a indústria detentora de benefício ou incentivo fiscal aplique o diferimento ao I..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - inclusão de franqueadora no regime especial de transportadora conveniada (Anexo XII ao RICMS) - apenas para transportadoras de MS com regime especial de transportadora conveniada",
        "oQueE": "Autorização SAT para que empresa que possui Regime Especial de Transportadora Conveniada, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , inclua em seu regime especial..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF)",
        "oQueE": "Solicitar a Autorização para Impressão de Documentos Fiscais - AIDF e discriminar as características do documento fiscal a ser impresso, observando, no preenchimento do formulár..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF) - quando não concedida por meio eletrônico",
        "oQueE": "Solicitar a Autorização para Impressão de Documentos Fiscais - AIDF e discriminar as características do documento fiscal a ser impresso, observando, no preenchimento do formulár..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Bilhete de passagem eletrônico (BP-e), modelo 63 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Bilhete de Passagem Eletrônico (BP-e), modelo 63. O Bilhete de Passagem Eletrônico (BP-e), modelo 63, é um documento de existência ape..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - alteração de dados cadastrais",
        "oQueE": "Solicitar alteração de informações cadastrais da pessoa ou do estabelecimento, relativamente à atividade explorada, à natureza jurídica, ao endereço pessoal do contribuinte e a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - baixa da inscrição estadual",
        "oQueE": "Solicitar a baixa da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de apicultor e de meliponicultor",
        "oQueE": "Solicitar inscrição estadual de Apicultor e de Meliponicultor no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de pescador profissional",
        "oQueE": "Solicitar inscrição estadual de Pescador Profissional no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural",
        "oQueE": "Solicitar inscrição estadual de produtor rural no Cadastro da Agropecuária – CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural em terras indígenas",
        "oQueE": "Solicitar inscrição estadual de produtor em Terras Indígenas no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição estadual provisória para produtor rural em processo de regularização fundiária, assentamento, posse ou propriedade litigiosa",
        "oQueE": "Solicitar inscrição estadual provisória do estabelecimento no Cadastro da Agropecuária - CAP, nos casos em que a posse imobiliária do imóvel rural esteja submetida a processo de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação da inscrição estadual",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação de inscrição estadual suspensa por vencimento de contrato",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP, a qual foi suspensa em virtude do vencimento do contrato de arrendamento, comodato, cessão gratui..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - suspensão temporária da inscrição estadual a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual no Cadastro da Agropecuária, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro de contabilistas - inclusão e alteração de dados do contabilista",
        "oQueE": "Solicitar a inclusão e a alteração dos dados cadastrais de contabilista, pessoa física ou jurídica, no Cadastro de Contabilistas do Estado de MS, a fim de que o profissional ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - alteração de dados cadastrais",
        "oQueE": "Alterar dados cadastrais de contribuinte inscrito no Cadastro de Comércio, Indústria e Serviços - CCIS, relativamente à composição do capital ou dos sócios, do ramo de negócio o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - baixa da inscrição estadual",
        "oQueE": "Solicitar a baixa de Inscrição Estadual de contribuintes inscritos no Cadastro de Comércio, Indústria e Serviços - CCIS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de cerealista",
        "oQueE": "Concessão de inscrição no Cadastro do Comércio, Indústria e Serviços (CCIS) para estabelecimentos que tenham por atividade o beneficiamento elementar ou primário e o comércio at..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte de outras unidades da federação como substituto tributário nas operações com combustíveis líquidos e gasosos e lubrificantes e respectivas manutenções cadastrais",
        "oQueE": "O contribuinte de outras Unidades da Federação solicitar o cadastramento como Substituto Tributário nas operações com combustíveis líquidos e gasosos e lubrificantes e respectiv..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outras unidades da federação como responsável pelo recolhimento do ICMS nas operações destinadas a consumidor final (ICMS DIFCON)",
        "oQueE": "Contribuinte localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS para realizar o recolhimento, no prazo mensal, do ICMS nas..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outra unidade da federação como substituto tributário do ICMS mediante Termo de Responsabilidade",
        "oQueE": "Contribuinte do comércio ou indústria localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS, na condição de contribuinte subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outra unidade da federação como substituto tributário por força de Convênio ou Protocolo",
        "oQueE": "Contribuinte do comércio ou indústria localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS, na condição de contribuinte subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de empresa do ramo de combustíveis líquidos e gasosos e lubrificantes",
        "oQueE": "Solicitar a inscrição no Cadastro do Comércio, Indústria e Serviços (CCIS) de empresa do ramo de combustíveis líquidos e gasosos e lubrificantes, derivados ou não de petróleo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de empresas",
        "oQueE": "Solicitar a Inscrição Estadual no Cadastro de Contribuintes do Comércio, Indústria e Serviços - CCIS. Observação: empresas industriais ou comerciais de combustíveis, derivados o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de frigoríficos",
        "oQueE": "Solicitar a inscrição no Cadastro de Comércio, Indústria e Serviços - CCIS de estabelecimentos frigoríficos, matadouros, abatedouros e similares"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição estadual temporária para empresas do ramo de construção civil",
        "oQueE": "Solicitação de inscrição estadual no Cadastro de Contribuintes do Comércio, Indústria e Serviços - CCIS, por Empresa de construção civil estabelecida em outra unidade da Federaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - reativação da inscrição estadual",
        "oQueE": "Solicitar a reativação da Inscrição Estadual do Cadastro de Comércio, Indústria e Serviços - CCIS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - suspensão da eficácia temporária a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisação das atividades."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cancelamento ou suspensão de inscrição estadual de terceiro no cadastro",
        "oQueE": "Solicitação de suspensão ou cancelamento de inscrição estadual, protocolado pelo PROPRIETÁRIO e/ou por TERCEIRO interessado, em razão da perda do direito de utilização da área (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão de registro e depósito convênio 190 - emissão",
        "oQueE": "Solicitar a emissão de Certidão de Registro e Depósito dos atos instituidores dos benefícios e incentivos fiscais, na forma prescrita pela cláusula segunda, I, e terceira, I, do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Concessão de credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com a suspensão da cobrança do ICMS, nos te..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para recebimento de soja e milho em grãos e arroz em casca para depósito, remetidos por produtores rurais do Estado de Mato Grosso, com a suspensão da cobrança do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de produtos agrícolas para depósito situado em Goiás, com a suspensão da cobrança do ICMS, nos termos do Protocolo ICMS 10/98..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de soja e milho em grãos e arroz em casca , de produção agrícola do remetente, para depósito situado em Mato Grosso, com a su..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Débito fiscal - baixa de notificação CRD",
        "oQueE": "Solicitar a baixa de notificação de cobrança de ICMS quando o débito já foi pago ou parcelado, mas ainda aparece em aberto no sistema, ou no caso de pagamento feito de forma equ..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração de compras para aquisições interestaduais de materiais de construção por consumidor final não contribuinte do ICMS ou por empresas do ramo da construção civil",
        "oQueE": "Solicitar, antes da entrada dos materiais no território do Estado de MS , a emissão da Declaração de Compras para fins de registro dos dados contidos nas notas fiscais de aquisi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração de Substituição Tributária, Diferencial de Alíquotas e Antecipação (DeSTDA) - entrega e retificação",
        "oQueE": "Contribuinte do ICMS optante pelo Simples Nacional, inscrito no MS, enviar as informações, mensalmente e em meio digital, dos resultados da apuração do ICMS referentes à Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Demonstrativos de PPD de ICMS e ITCD",
        "oQueE": "Solicitar demonstrativo de pedidos de parcelamentos e reparcelamentos de ICMS e ITCD no âmbito da SEFAZ/MS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Desvincular CAR - Cadastro Ambiental Rural por transmissão de propriedade",
        "oQueE": "Solicitar a desvinculação do Cadastro Ambiental Rural - CAR na inscrição estadual do transmitente a qual está vinculado no cadastro da SEFAZ, quando este não tenha providenciado..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "e-Fazenda - cadastro",
        "oQueE": "Realizar o cadastramento na plataforma eletrônica e-Fazenda , disponibilizada na área de acesso restrito dos endereços eletrônicos www.ms.gov.br e www.sefaz.ms.gov.br . O e-Faze..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Escrituração Fiscal Digital (EFD) ou notificação por falta de pagamento de ICMS apurado."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - credenciamento voluntário",
        "oQueE": "Serviço disponibilizado aos contribuintes alcançados pelo § 2º ao art. 4º do Subanexo XIV ao Anexo XV ao Regulamento do ICMS que não são obrigados à entrega de arquivos (EFD) e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - entrega",
        "oQueE": "Enviar o arquivo digital da EFD, sendo que o mesmo será gerado pelo contribuinte de acordo com as especificações do leiaute definido em Ato COTEPE e conterá a totalidade das inf..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Exclusão ou inclusão de pessoa no quadro societário de empresa inscrita no CCE",
        "oQueE": "Exclusão de pessoa do quadro societário da empresa, quando esta não solicitar a alteração Inclusão de pessoa, que representa legalmente a empresa no QSA, quando esta não constar..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fusão/Incorporação (art. 13-A e 13-B do Anexo V ao Regulamento do ICMS)",
        "oQueE": "Ficha informativa sobre os procedimentos necessários para assumir a condição de beneficiário dos regimes especiais e das autorizações específicas vigentes dos estabelecimentos d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de informação e apuração do ICMS benefícios fiscais (GIA-BF) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa quando omisso na apresentação da Guia de Informação e Apuração do ICMS Benefícios Fiscais (GIA-BF), após entrega da declaração e pagament..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia nacional de informação e apuração do ICMS substituição tributária (GIA-ST) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Guia Nacional de Informação e Apuração do ICMS Substituição Tributária (GIA-ST)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia para liberação de mercadoria estrangeira sem comprovação do recolhimento do ICMS (GLME) - análise e concessão de visto",
        "oQueE": "Concessão de visto em Guia para Liberação de Mercadoria Estrangeira sem Comprovação do Recolhimento do ICMS - GLME, mediante constatação do atendimento das condições necessárias..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - autorização para transferência de saldo credor acumulado para estabelecimento",
        "oQueE": "Solicitar a autorização para transferência de saldo credor acumulado do ICMS entre estabelecimentos de um mesmo titular ou para terceiros, conforme previsto no artigo 68 do Regu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - cálculo para recolhimento espontâneo (Normal, Transporte, Equalização e Substituição Tributária)",
        "oQueE": "Solicitar o cálculo do valor do ICMS para recolhimento espontâneo (Normal, Transporte, Equalização e Substituição Tributária)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - compensação centralizada de saldos devedores e credores",
        "oQueE": "Solicitar compensação centralizada de saldos devedores e credores de ICMS por contribuinte que possui mais de um estabelecimento no Estado."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - comunicação da apropriação de crédito nos termos do art. 17, § 3º, II, “a”, da Resolução/SEFAZ nº 3.426/2025 (limite de 300 Uferms)",
        "oQueE": "Comunicação, por parte do contribuinte obrigado à EFD, da utilização de crédito fiscal, limitado a 300 Uferms, sujeito a posterior homologação, decorrente de restituição de indé..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - comunicação de registro extemporâneo de crédito fiscal",
        "oQueE": "Comunicação de registro extemporâneo de crédito de ICMS, nos termos do art. 56 do Regulamento do ICMS ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Diferencial de Alíquotas - dispensa da cobrança na aquisição de maquinário por industrial ou produtor rural",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS Diferencial de Alíquotas na aquisição interestadual de bem destinado ao ativo fixo de estabelecimento industrial ou agropecuário"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, ap..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS Equalização Simples Nacional ou a reconsideração da decisão..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Estimativa - revisão de valores ou reconsideração do enquadramento",
        "oQueE": "Apresentar pedido de revisão de valores ou de reconsideração, sem efeito suspensivo, do enquadramento no Regime de Estimativa, em até cinco dias contados da notificação do valor..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de crédito de equivalência de exportação",
        "oQueE": "Solicitar a inclusão, em sistema próprio, do crédito correspondente aos valores recolhidos a título de antecipação (Equivalência Exportação) para compensar débitos relativos a o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de crédito fiscal de contribuinte inscrito no cadastro do comércio, indústria e serviços (CCIS)",
        "oQueE": "Solicitar a homologação de crédito fiscal em favor de contribuinte inscrito no Cadastro de Comércio, Indústria e Serviços, que promova saídas interestaduais e cujo ICMS é exigid..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de transferência de crédito realizada por distribuidora de combustíveis",
        "oQueE": "Solicitar a homologação de transferência de saldo credor de ICMS, realizada por distribuidora de combustíveis localizada no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens de uso exclusivo em processo de geração e de transmissão de sons e imagens ou de composição e impressão jornalística",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de bens de uso exclusivo em processo de geração e de transmissão de sons e imagens ou de composição e impressão jorn..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens, por estabelecimentos não industriais ou industriais não contribuintes, de uso em funções específicas, relacionadas com as atividades do importador",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de máquina, equipamento técnico e/ou partes e peças para sua montagem, sem similares produzidos no país, de uso em f..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - inclusão de item na listagem de matéria-prima/mercadoria para fins de diferimento do imposto - benefício previsto em Termo de Acordo",
        "oQueE": "Solicitar a inclusão de itens na listagem de matérias-primas/mercadorias autorizadas para fins de diferimento do ICMS Importação, benefício concedido por Termo de Acordo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - isenção sobre operações de importação de bens destinados à pesquisa científica e tecnológica",
        "oQueE": "Solicitar a isenção do ICMS incidente sobre as importações de aparelhos, máquinas, equipamentos, instrumentos, suas partes, peças de reposição, acessórios, matérias-primas, prod..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - suspensão da cobrança do imposto nas operações sob regime especial aduaneiro de admissão temporária",
        "oQueE": "Solicitar a suspensão da cobrança do ICMS sob regime especial aduaneiro de admissão temporária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo de passageiros para taxista",
        "oQueE": "Solicitar a isenção do ICMS nas aquisições de automóveis novos de passageiros equipados com motor de cilindrada não superior a dois mil centímetros cúbicos (2.0l), movidos a com..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência física ou visual",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículo automotor novo, quando adquirido por pessoas portadoras de deficiência física ou visual, diretamente ou por inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência mental, síndrome de down ou autista",
        "oQueE": "Solicitar a concessão de isenção do ICMS na aquisição de veículo automotor novo quando adquirido por pessoas portadoras de deficiência mental severa ou profunda, síndrome de Dow..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de motocicleta nova para mototaxista ou moto-entregador",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículos motorizados de duas rodas (motocicleta), quando destinados a pessoas físicas que exercem atividades de mototáxi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção para as contas de energia elétrica, telefone e internet de templos religiosos de qualquer culto - concessão, renovação ou revogação",
        "oQueE": "Solicitar a concessão, renovação ou revogação da isenção do ICMS para as contas de serviços públicos estaduais próprios, delegados, terceirizados ou privatizados de energia elét..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção sobre mercadorias vendidas à Administração Pública Estadual",
        "oQueE": "Solicitar a isenção do ICMS nas aquisições com o objetivo de atender especificamente contrato de fornecimento celebrado entre o destinatário e órgãos da Administração Pública Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - liberação da entrada de mercadorias procedentes de outras unidades da federação e destinadas à demonstração em feiras e eventos realizados no estado, com suspensão da cobrança do ICMS",
        "oQueE": "Solicitar a liberação da entrada de mercadorias procedentes de outras Unidades da Federação destinadas à demonstração em feiras e eventos realizados no Estado, com suspensão da..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - prorrogação de prazo para retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do imposto",
        "oQueE": "Solicitar prorrogação de prazo para o retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do ICMS desde que o pedido de prorrogação seja aprese..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural para fim específico de irrigação",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural, para fim específico de irrigação, a base de cálculo do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural que exerça a atividade de avicultura de corte",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural cuja atividade seja avicultura de corte (galináceos). A..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - solicitação, por empresa do Simples Nacional, de registro de crédito de que trata o art. 19, da Resolução/SEFAZ nº 3.026/2025 (limite de 300 Uferms)",
        "oQueE": "Solicitação, por parte do contribuinte enquadrado no Simples Nacional, nos termos da Lei Complementar Federal nº 123/2006 , de registro de crédito fiscal, limitado a 300 Uferms,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST - homologação de crédito por venda de combustível ao estado do Mato Grosso do Sul",
        "oQueE": "Solicitar homologação de crédito por venda de combustíveis ao Estado do MS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST - pedido de ressarcimento - Subanexo II ao Anexo III do RICMS",
        "oQueE": "Solicitar ressarcimento do ICMS relativo a operações subsequentes, retido ou pago por antecipação pelo regime de substituição tributária, nas hipóteses em que a base de cálculo..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS ST-SN, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente em formato eletrônico,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS ST-SN, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, após encerrada a única so..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS ST-SN ou a reconsideração da decisão proferida pelas autori..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção 2022 - Decreto nº 15.703/2021",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para o exercício de 2022 caso ela não tenha recebido o benefício automaticamente...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - redução para pessoa com deficiência (PcD)",
        "oQueE": "Use este serviço para solicitar a redução do IPVA de veículo para uso de pessoa com deficiência (PcD), conforme definições no Regulamento. Considera-se PcD aquela com deficiênci..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - troca de veículo - redução para pessoa com deficiência (PCD)",
        "oQueE": "Use este serviço para solicitar a transferência do benefício de redução do IPVA para pessoa com deficiência (PCD), de um veículo para outro, relacionado ao mesmo beneficiário. O..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de remissão",
        "oQueE": "Solicitar o reconhecimento de remissão do ITCD Causa Mortis ou Doação, no caso específico. A remissão constitui perdão do débito tributário, e só pode ser feito por meio de lei...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Levantamento ou devolução de garantia oferecida para: obtenção e renovação de regime especial ou autorização específica; cadastro como distribuidora de combustíveis estabelecida em MS ou como contribuinte substituto tributário de MS",
        "oQueE": "Devolução de garantia vigente ou dentro do prazo de 365 dias após sua vigência (art. 17 e 18 do Subanexo Único ao Anexo V ao Regulamento do ICMS ) oferecida pelo contribuinte pa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Livros fiscais - autenticação",
        "oQueE": "Solicitar a autenticação dos seguintes livros fiscais: Apuração do ICMS, Registro de Entradas, Registro de Saídas, Registro de Inventário, Registro de Utilização de Documentos F..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Microempreendedor Individual (MEI) - reconsideração do ato de desenquadramento do SIMEI",
        "oQueE": "Solicitar a reconsideração do ato de desenquadramento de Microempreendedor Individual."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Microempresa Simples Nacional - reconsideração da análise para enquadramento no benefício do Decreto nº 16.177/2023",
        "oQueE": "Trata-se de pedido de reconsideração da análise para enquadramento no benefício previsto pelo Decreto nº 16.177/2023 . Considerando que a habilitação cadastral para usufruir do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal Avulsa Eletrônica (NFA-e) de expedição exclusiva das repartições fiscais do Estado, para ser utilizada nas seguintes hipóteses: Saídas de mercadorias prom..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de consumidor eletrônica (NFC-e), modelo 65 - credenciamento e CSC",
        "oQueE": "Solicitar o credenciamento para a emissão de Nota Fiscal de Consumidor Eletrônica (NF-e), modelo 65. A Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65, é o documento emi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de empresas - cancelamento por motivo de extravio",
        "oQueE": "Solicitar o cancelamento de Nota Fiscal por motivo de extravio."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de energia elétrica eletrônica (NF3-e), modelo 66 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Nota Fiscal de Energia Elétrica Eletrônica (NF3-e), modelo 66. A Nota Fiscal de Energia Elétrica Eletrônica (NF3-e), modelo 66, é o do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - baixa de pendência de NFP-e de remessa com suspensão/não-incidência do ICMS, se comprovado o retorno da mercadoria",
        "oQueE": "Solicitar a baixa da pendência da NFP-e emitida com suspensão ou não-incidência do ICMS, desde que comprovado que a mercadoria retornou dentro do prazo determinado pela legislaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - desbloqueio para emissão",
        "oQueE": "Solicitar o desbloqueio para emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em virtude de não quitação do débito ensejador do bloqueio, cujo pagamento de DAEMS tenha sido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em substituição à Nota Fiscal de Produtor (NFP), modelo 4. Observações: Considera-se Nota Fiscal de Produtor Eletrônica (NF..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - transferência interestadual de mercadorias - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) quando se tratar de remessa de bens ou mercadorias entre estabelecimentos de mesma titularidade (transferências), sem a inc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal eletrônica (NF-e), modelo 55 - credenciamento",
        "oQueE": "Solicitar credenciamento para emissão de Nota Fiscal Eletrônica (NF-e), modelo 55. A Nota Fiscal Eletrônica (NF-e), modelo 55, é o documento emitido e armazenado eletronicamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal fatura de serviços de comunicação eletrônica (NFCom) - credenciamento voluntário",
        "oQueE": "Solicitação de credenciamento para a emissão de Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom). A NFCom, modelo 62, é o documento emitido e armazenado eletroni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) relativo ao ICMS - autoparcelamento",
        "oQueE": "Parcelamento de débitos de ICMS, não inscritos em dívida ativa, realizado pelo próprio contribuinte, mediante acesso ao módulo Autoparcelamento , no e-Fazenda , na Internet."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de reconsideração de despacho de indeferimento de atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a reconsideração do despacho de indeferimento proferido na análise do Atestado de Inexistência no mercado interno do Estado de bem idêntico ou similar para fins de dif..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PROAPE - transferência de valores relativos ao incentivo fiscal pago ao produtor rural",
        "oQueE": "Solicitar a transferência do valor nominal relativo ao incentivo fiscal pago ao produtor rural para outro estabelecimento, quando o contribuinte não possuir débitos suficientes..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Prorrogação de atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a prorrogação do prazo de vigência de Atestado de Inexistência no mercado interno do Estado de bem idêntico ou similar para fins de diferimento do ICMS na modalidade d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Providência cadastral para apreciação da Superintendência",
        "oQueE": "Solicitação de inscrição, suspensão, reativação, alteração, etc., no Cadastro de Contribuinte Estadual (CCE), bem como os pedidos de reconsideração e/ou revisão desses, que por..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - concessão ou renovação de tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de transporte e na armazenagem de etanol combustível pelo sistema dutoviário",
        "oQueE": "Solicitar a concessão ou renovação do Regime Especial para ter tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de tran..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento mensal do ICMS diferencial de alíquota devido na entrada de mercadorias destinadas ao uso, consumo ou ativo fixo (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher mensalmente o ICMS Diferenc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período mensal, do ICMS devido nas saídas interestaduais de soja e farelo de soja - indústrias de óleo de soja (art. 4º, I, a do Anexo V ao RICMS, c/c art. 74, III do RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, a do Anexo V ao Regulamento do ICMS , combinado com o art. 74, III do Regulamento do ICMS , que permite a dilatação de praz..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS ST devido na entrada de mercadorias no estado - concessionárias de veículos ou máquinas agrícolas (art. 4º, I, b do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS ST devido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS substituição tributária devido na entrada de mercadorias no estado de MS (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - frigorífico de outra UF - cadastro como substituto tributário responsável pelo pagamento da diferença de peso ou preço - frigoríficos do estado de São Paulo (Protocolo ICMS 03/88)",
        "oQueE": "Cadastro de frigorífico do Estado de São Paulo como substituto tributário para que se responsabilize pelo recolhimento do ICMS incidente sobre a diferença a maior de peso ou pre..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005)",
        "oQueE": "Concessão de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de exportações..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - frigoríficos",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - indústrias de combustíveis e usinas de açúcar e álcool",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura, inclusive algodão em pluma, exceto soja e milho (Decreto nº 11.803/2005)",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura soja e milho em grãos (Decreto nº 11.803/2005) - cerealista/comercializador de soja e/ou milho",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial para facilitar o cumprimento de obrigação acessória (art. 4º, II do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, II do Anexo V ao Regulamento do ICMS , facilitador do cumprimento de obrigação acessória, que consiste em: a) Autorização para..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - Ponta Porã (art. 5º-A do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação com o objetivo de estimular os estabelecimentos situados neste Estado, possuidores do Regime Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - programa de estímulo à exportação pelos portos do rio Paraguai (art. 1º, § único, inciso I do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação pelos Portos do Rio Paraguai, com o objetivo de estimular os estabelecimentos situados neste Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário do ICMS devido sobre autopeças adquiridas em outra Unidade da Federação - apenas para atacadistas/distribuidoras de autopeças (art. 4º, I, c, 4 do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, c, 4 do Anexo V ao Regulamento do ICMS , para apurar e recolher o ICMS ST relativo a peças automotivas adquiridas em outr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário responsável pelo pagamento semanal do ICMS Transporte devido por transportadora desta ou de outra UF ou por transportador autônomo (Decreto nº 14.923/2018)",
        "oQueE": "Regime Especial para que o remetente da mercadoria assuma a responsabilidade, na condição de substituto tributário, pelo pagamento semanal do ICMS incidente nas prestações de se..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportadora conveniada por meio de Termo de Acordo para atuar como fiel depositária das mercadorias que transporta (Anexo XII ao RICMS)",
        "oQueE": "Concessão ou renovação de Regime Especial, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , por meio de Termo de Acordo assinado entre a empresa transportadora e a Secr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportador ferroviário deste estado apurar e recolher o ICMS transporte por período mensal (art. 50 do Anexo V ao RICMS, Ajuste SINIEF 19/89)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 50 do Anexo V ao Regulamento do ICMS ( Ajuste SINIEF 19/89 ), para que a empresa concessionária de serviços de transporte ferroviá..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Registro especial e prévio das empresas optantes pelo Simples Nacional para realizar operações interestaduais com produtos do §3º do art. 1º da Resolução/SEFAZ nº 2.611/2015",
        "oQueE": "Concessão de autorização para registro especial e prévio de empresa enquadrada no regime de pagamento do ICMS previsto na Lei Complementar Federal nº 123/2006 (Simples Nacional)..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Requerimento de dispensa do cumprimento da equivalência - Decreto nº 16.576/2025",
        "oQueE": "Este serviço é um canal para que o contribuinte que promova a exportação de soja em grão ou milho solicite a dispensa de firmar o compromisso de equivalência previsto na alínea..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Requerimento de incentivos fiscais com compromisso de obrigações recíprocas",
        "oQueE": "Solicitação de incentivos fiscais com base na Lei Complementar Estadual nº 93/2001 , na Lei Estadual nº 4.049/2011 , na Lei Complementar Federal nº 160/2017 , no Decreto Estadua..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Restituição/Ressarcimento de indébito tributário - pedido",
        "oQueE": "Solicitação, por parte de pessoa física ou jurídica de restituição/ressarcimento de indébito nas hipóteses previstas: no art. 127 da Lei Estadual nº 2.315/2001 decorrente de: a...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - impugnação do ato de indeferimento do pedido de reconsideração da opção pelo regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Apresentar a impugnação ao ato de indeferimento de reconsideração da opção pelo Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - impugnação do indeferimento de reconsideração do ato de exclusão do regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Impugnar o indeferimento da reconsideração do ato de exclusão do Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - reconsideração do ato de exclusão do regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Solicitar a reconsideração do ato de exclusão do Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - reconsideração do ato de indeferimento da opção pelo regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Solicitar a reconsideração do ato de indeferimento da opção pelo Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "SOCRED - solicitação de crédito fiscal do ICMS referente a operações e prestações relacionadas a produtos e à atividade agropecuária",
        "oQueE": "Solicitar a homologação de créditos fiscais do ICMS, decorrentes de operações com produtos da agropecuária, inclusive animais vivos, e de origem extrativa, inclusive quando bene..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Solicitar opção de pagamento da apuração do ICMS - Substituição Tributária - Resolução SEFAZ nº 3.157/2021",
        "oQueE": "Solicitação de pagamento parcelado do ICMS, conforme disposto no § 2º do art. 3°-C da Resolução/SEFAZ n° 3.157/2021 , por estabelecimento atacadista excluído da condição de subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Substituição de benefícios por crédito presumido nos moldes do artigo 31 da Lei Complementar nº 93/2001 - Empresas detentoras de Termo de Acordo do programa MS-Empreendedor",
        "oQueE": "Este serviço é um canal para que o contribuinte que é titular de Termo de Acordo firmado com base na Lei Complementar nº 93/2001 solicite a substituição de seu incentivo vigente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de Verificação Fiscal (TVF) ou Termo de Apreensão (TA) - baixa ou alteração",
        "oQueE": "Solicitação de baixa ou alteração, para Termo de Verificação Fiscal (TVF) ou Termo de Apreensão (TA), que deverá ser realizada através do link https://www.autoatendimento.ms.gov..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Transferência de animal registrado no SMEPA (sistema de monitoramento de estoque de produtos agropecuários)",
        "oQueE": "Solicitar a transferência de animal registrado que tenha sido remetido para outra Inscrição Estadual, mas não foi acobertado por NFP-e com a vinculação correta do animal."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Participar do programa de trainee de Gestão Pública - TGP",
        "oQueE": "O Programa Trainee de Gestão Pública seleciona profissionais, nos primeiros anos de carreira, de diversas áreas do conhecimento, para atuação na concepção, implementação e avali..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar adesão ao Programa MS Ativo",
        "oQueE": "O MS ATIVO Municipalismo fortalece e qualifica a parceria entre o Estado e os Municípios para enfrentar desafios e aprimorar a Gestão Pública, elevando a qualidade dos serviços..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar Primeiro acesso aos canais Institucionais Oficiais",
        "oQueE": "Permite criar o primeiro acesso aos canais institucionais oficiais, como e-mail e rede."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar emissão de certidão de atendimento de emergência",
        "oQueE": "É a entrega de um documento oficial, chamado Certidão de Atendimento, que prova o registro de uma ligação feita por um cidadão aos números de emergência 190 (Polícia Militar) ou..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa de Ovinos e Caprinos",
        "oQueE": "O Subprograma Cordeiro de Qualidade visa consolidar a ovinocaprinocultura no Estado de Mato Grosso do Sul. A ovinocaprinocultura sul mato-grossense apresenta grande potencial pa..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Leitão Vida",
        "oQueE": "I ncentivo para os produtores de suínos que produzem de forma sustentável e eficiente, cumprindo as normas ambientais, sanitárias e trabalhistas, de acordo com a exigência do me..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa MS INDUSTRIA",
        "oQueE": "Este programa é uma parceria entre a SEMADESC e a SEFAZ, que concede incentivos fiscais vinculados ao ICMS para empreendimentos do setor industrial. Os incentivos são destinados..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Peixe Vida",
        "oQueE": "O Subprograma Peixe Vida visa estimular os produtores do Estado a explorar, de forma sustentável, a atividade de produção de peixes, como alternativa econômica para diversificaç..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Precoce MS",
        "oQueE": "O Subprograma é operacionalizado por meio de uma parceria entre a SEMADESC, a SEFAZ e os Serviços de Inspeção Animal da Superintendência Federal de Agricultura - SFA/MS, da Agên..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações do programa CONECTA-MS",
        "oQueE": "O CONECTA MS tem por objetivo garantir a inclusão digital, interligando comunidades remotas, assentamentos rurais e aldeias, possibilitando a qualificação dos moradores destes l..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações sobre o FCO",
        "oQueE": "Com objetivo de contribuir para o desenvolvimento econômico e social do MS, o FCO – Fundo Constitucional do Centro Oeste é um recurso que beneficia as empresas e os produtores r..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado, diretamente ou por meio de seus representantes legais, poderá solicita vista ou cópia do processo ou documento devendo o pedido ser instruído com documento que co..."
      },
      {
        "orgao": "SES",
        "titulo": "Enviar documentos do Componente Especializado da Assistência Farmacêutica por meio digital",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitação, renovação e retirada de medicamentos do componente especializado - Assistência Farmacêutica Estadual",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar análise de projetos EAS - estabelecimento assistencial de saúde",
        "oQueE": "Todos os serviços de saúde que pretendem construir ou reformar uma estrutura física para oferecer um determinado serviço de saúde devem, antes , apresentar um projeto arquiteton..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar captação de órgãos e tecidos para transplante",
        "oQueE": "O Transplante salva a vida de muitos pacientes terminalmente doentes e melhora a qualidade de vida de outros, mas, para sua realização, necessita de um doador. Esse procedimento..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar cursos de educação profissional na área da saúde",
        "oQueE": "A ETSUS Profa. Ena de Araújo Galvão foi criada em 21 de julho de 1986, como Centro Formador de Recursos Humanos para a Saúde, pelo Decreto n. 3646, sendo transformada em Escola..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar fornecimento de medicamentos da assistência farmacêutica estadual - componente básico",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar fornecimento de medicamentos da assistência farmacêutica estadual - componente estratégico",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar licença sanitária ou sua renovação (alvará).",
        "oQueE": "Verificação pelas autoridades sanitárias da conformidade do empreendimento com as normas sanitárias vigentes. Todos os serviços de interesse da saúde (pessoa física ou jurídica)..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar parecer de viabilidade técnica de condição sanitária",
        "oQueE": "Parecer que avalia as condições sanitárias de saúde ambiental e do trabalhador para fins de autorização para armazenamento, comércio e aplicação de agrotóxicos por empresas no e..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar teleconsultoria",
        "oQueE": "TELECONSULTORIA SÍNCRONA O programa disponibiliza atualmente o serviço de teleconsultoria síncrona (por webconferência de profissional para profissional), nas especialidades de..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar telediagnóstico em eletrocardiograma",
        "oQueE": "Serviço de telediagnóstico em eletrocardiograma que disponibiliza laudos de eletrocardiograma on-line, para interpretação através Plataforma Nacional de Telediagnóstico (PNTD) q..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar telediagnóstico em teledermatologia",
        "oQueE": "A Teledermatologia em demartologia é um modelo funcional de diagnóstico em dermatologia via internet, através do Sistema de Telemedicina e Telessaúde (STT), que possibilita e fa..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar capacitação sobre economia criativa",
        "oQueE": "Capacitação sobre Economia Criativa é a realização de cursos promovidos e ofertados pela Superintendência de Economia Criativa da SETESC, em parceria com o Sistema S e demais Se..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Atendimento da equipe de comunicação",
        "oQueE": "A Diretoria de Comunicação Social (DCS) realiza atendimento ao público nos meios de comunicação oficiais da UEMS que são gerenciados pelo setor, a saber: Perfil do instagram @ue..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Divulgação nas redes sociais",
        "oQueE": "Consiste em divulgar atividades acadêmicas e administrativas de interesse da universidade por meio das redes sociais oficiais da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Realização de cursos, palestras e formações em Direitos Humanos",
        "oQueE": "Este serviço permite que cidadãos, empresas, escolas, associações, centros comunitários, órgãos e entidades públicas possam solicitar cursos, formações ou palestras sobre Direit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar apoio ao empreendedorismo solidário",
        "oQueE": "É um programa de apoio ao empreendedorismo solidário onde a incubadora apoia empresas, grupos, associações e cooperativas populares voltadas ao atendimento de coletividades que..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial em curso de graduação",
        "oQueE": "Informação e orientação sobre procedimento de matrícula inicial. A matrícula inicial refere-se à matrícula dos candidatos aprovados no processo seletivo da UEMS, na primeira cha..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar reconhecimento de identidade de gênero nos documentos acadêmicos",
        "oQueE": "A Divisão de Estágio Programas e Projetos de Ensino – Setor de Estágios Curriculares é responsável pelo assessoramento e pela instrução de todo o processo para firmar convênio d..."
      }
    ]
  },
  {
    "id": "familia",
    "nome": "Família",
    "icon": "users",
    "cor": "#C2185B",
    "total": 150,
    "pctDoTotal": 12.3,
    "topOrgaos": [
      {
        "orgao": "SED MS",
        "qtd": 44
      },
      {
        "orgao": "SEAD",
        "qtd": 21
      },
      {
        "orgao": "UEMS",
        "qtd": 17
      },
      {
        "orgao": "FUNTRAB",
        "qtd": 10
      },
      {
        "orgao": "SES",
        "qtd": 8
      }
    ],
    "exclusivas": 44,
    "compartilhadas": 106,
    "cards": [
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "EMISSÃO DE BOLETOS VIA SITE OFICIAL",
        "meta": "Autoatendimento via acesso ao site oficial da AGEHAB, através do link https://habix.agehab.ms.gov.br/admini...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar atendimento nos postos fácil",
        "meta": "Atendimento ao público em geral, realização de inscrição, atualização de dados cadastrais, requerimento de...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar atendimento via whatsapp",
        "meta": "Serve para solicitação do envio de boletos de prestação mensal ou quitação do saldo devedor do contrato imo...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar inscrição para participação nos programas habitacionais",
        "meta": "Atendimento e cadastramento de pretendente a participação em programas habitacionais.",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar pedido de vista e cópia",
        "meta": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do proce...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar regularização de imóveis urbanos e rurais",
        "meta": "Regularização fundiária Urbana tem como objetivo regularizar loteamentos/assentamentos irregulares e à titu...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Localizar pessoa privada de liberdade",
        "meta": "Acesso aos familiares, visitantes, advogados e demais interessados, ao nome e localização da Unidade Prisio...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar atendimento para reinserção social do egresso",
        "meta": "Atendimento social prestado ao pré-egresso, egresso e seus familiares, buscando a reinserção do individuo n...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AGEHAB",
        "titulo": "EMISSÃO DE BOLETOS VIA SITE OFICIAL",
        "oQueE": "Autoatendimento via acesso ao site oficial da AGEHAB, através do link https://habix.agehab.ms.gov.br/administracao/BoletoOnline para solicitação de emissão de boletos de prestaç..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar atendimento nos postos fácil",
        "oQueE": "Atendimento ao público em geral, realização de inscrição, atualização de dados cadastrais, requerimento de serviços pertinente a contratos, prestações, segunda via ou substituiç..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar atendimento via whatsapp",
        "oQueE": "Serve para solicitação do envio de boletos de prestação mensal ou quitação do saldo devedor do contrato imobiliário ao beneficiário dos programas habitacionais."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar inscrição para participação nos programas habitacionais",
        "oQueE": "Atendimento e cadastramento de pretendente a participação em programas habitacionais."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar regularização de imóveis urbanos e rurais",
        "oQueE": "Regularização fundiária Urbana tem como objetivo regularizar loteamentos/assentamentos irregulares e à titulação aos ocupantes, buscando a ocupação do solo de maneira eficiente,..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Localizar pessoa privada de liberdade",
        "oQueE": "Acesso aos familiares, visitantes, advogados e demais interessados, ao nome e localização da Unidade Prisional, onde a pessoa privada de liberdade está sob custódia do Sistema P..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar atendimento para reinserção social do egresso",
        "oQueE": "Atendimento social prestado ao pré-egresso, egresso e seus familiares, buscando a reinserção do individuo na sociedade. O atendimento é desenvolvido pelo Escritório Social, send..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar Carteira de Visitante do Sistema Prisional",
        "oQueE": "A Agepen (Agência Estadual de Administração do Sistema Penitenciário) de Mato Grosso do Sul lançou uma nova ferramenta que facilita a vida de familiares de pessoas privadas de l..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial fora do local de lotação ou de exercício (perícia em trânsito)",
        "oQueE": "É o atendimento pericial presencial ao servidor, familiar ou dependente que necessita de avaliação pericial fora do local de lotação ou exercício: o servidor que estiver, tempor..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial por motivo de doença em pessoa da família",
        "oQueE": "É o afastamento concedido ao servidor público quando um familiar próximo — como pai, mãe, cônjuge ou filho — fica doente e depende economicamente dele. A licença é autorizada ap..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "oQueE": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestão, produção, beneficiamento e comercialização das atividades e dos ser..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar cadastramento da agricultura rural familiar",
        "oQueE": "O Cadastro Nacional da Agricultura Familiar (CAF) é o instrumento oficial de identificação e qualificação das Unidades Familiares de Produção Agrária, os Empreendimentos Familia..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de legitimidade dominial",
        "oQueE": "Serviço utilizado para comprovar a veracidade da matrícula de um imóvel. Esta certidão apesar de não ser obrigatória, é recomendada para o cidadão que está comprando um imóvel e..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de localização quanto ao município",
        "oQueE": "É a comprovação em qual município o imóvel está inserido; geralmente utilizada para transferência da matrícula de comarca ou para averbação da Certificação do INCRA junto a matr..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de veracidade de Matricula para fins de compensação de reserva ambiental",
        "oQueE": "Serviço utilizado para compensação de reserva legal dentro de parques estaduais (unidades de conservação estaduais). Certidão solicitada pelo IMASUL para habilitar o imóvel para..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar regularização de excesso",
        "oQueE": "Serviço utilizado para regularização de excesso de área existente no imóvel e posterior retificação na matrícula. Trata-se de quando a área registrada na matrícula é menor do qu..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar viabilização e aquisição de terra através do programa nacional de crédito fundiário",
        "oQueE": "Viabilizar a aquisição de terras pelo Programa Nacional de Crédito Fundiário – PNCF Terra Brasil. Programa que tem como objetivo principal o acesso à terra, contribuindo para a..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar atendimento em eventos de instituições públicas e privadas",
        "oQueE": "O Programa de atendimento aos eventos socais, culturais, educativos, desporto e lazer, organizados por instituições públicas e privadas, oferece atividades educativas de trânsit..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar inscrição no Programa Cidade Escola de Trânsito - Detranzinho",
        "oQueE": "A Cidade Escola de Trânsito – Detranzinho, inaugurada em setembro de 1998 e iniciando suas operações em 27 de maio de 1999, representa um espaço dinâmico voltado para a vivência..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai à escola",
        "oQueE": "O Programa “Detran vai à escola” atende as Instituições de Ensino de Mato Grosso do Sul, fomentando a educação e segurança de trânsito, apoiando e promovendo ações educativas à..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai onde o idoso está",
        "oQueE": "Atendimento nos Centros de Convivência e Assistência Social, movimentos e associações, tendo como finalidade o desenvolvimento do Programa “Prevenção, Mobilidade, Acessibilidade..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Concorrer ao Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública",
        "oQueE": "O Governo do Estado, sob coordenação da Fundação Escola de Governo de Mato Grosso do Sul, realiza o Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública, com o objetivo de in..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Confirmar a autenticidade de certificações",
        "oQueE": "A Escolagov emite certificação das suas capacitações, tanto na modalidade presencial como a distância. Com o objetivo de conferência da autenticidade do certificado em mãos, há..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Obter descontos em instituições de ensino parceiras",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Oferecer parceria de descontos para servidores estaduais",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar programa ou cursos de capacitação continuada",
        "oQueE": "A Escolagov promove, elabora e executa programas e projetos de qualificação e formação profissional dos agentes públicos estaduais, como meio de desenvolvimento do serviço públi..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Apoiar a educação básica das escolas públicas de Mato Grosso do Sul",
        "oQueE": "Esse serviço consiste em atender as demandas das escolas públicas de Mato Grosso do Sul, por meio de projetos, em articulação com a Secretaria de Estado de Educação (SED/MS) e a..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar a confecção de carteira nacional do artesão",
        "oQueE": "A carteira Nacional do Artesão é uma identificação nacional para artesãos e trabalhadores manuais de todo o Brasil. O documento tem abrangência nacional e oferece diversos benef..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar concessão de bolsas de estudo",
        "oQueE": "Este serviço consiste na concessão de bolsas de estudo para qualificação de recursos humanos em várias modalidades e públicos, desde bolsas para alunos do ensino fundamental e m..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar apoio às prefeituras municipais",
        "oQueE": "Trata-se de apoio financeiro a eventos, ações, atividades e infraestrutura nos municípios de Mato Grosso do Sul, estabelecendo convênios e oferecendo aos municípios parcerias pa..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar atendimento religioso a pacientes internados e familiares",
        "oQueE": "A Capelania contribui para a promoção do bem-estar de servidores, pacientes e acompanhantes, na prestação de ações a pessoa hospitalizada ou não compartilha a fé e realiza ativi..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Anunciar vagas de emprego",
        "oQueE": "Plataformas digitais para facilitar o cadastramento de vagas de emprego por parte dos empregadores de Campo Grande"
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Cadastrar às vagas de emprego",
        "oQueE": "A Funtrab possui 36 agências públicas de empregos, a Funtrab na Capital e as Casas do Trabalhador nos municípios do interior e, em todas são disponibilizadas vagas de emprego."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Consultar vagas de emprego",
        "oQueE": "Verificar as vagas de emprego no SINE (Sistema Nacional de Emprego)"
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Reservar sala para atender candidatos",
        "oQueE": "Além dos demais serviços disponíveis ao empregador, a Funtrab dispõe do 'Espaço Empregador' para uso do empresário, de segunda a sexta, caso queira realizar o processo de seleçã..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar orientação como baixar a carteira de trabalho digital",
        "oQueE": "A Carteira de Trabalho e Previdência Social (CTPS) é o documento que registra a vida profissional do trabalhador e garante o acesso aos direitos trabalhistas previstos em lei. A..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar qualificação social e profissional",
        "oQueE": "O serviço \"MS Qualifica\" é um programa do governo de Mato Grosso do Sul que oferece cursos para aumentar a qualificação profissional da população, com o objetivo de melhorar a e..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar seguro-desemprego",
        "oQueE": "É um benefício, que pode ser solicitado por todos os trabalhadores, que forem dispensados sem justa causa pelo empregador."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Utilizar serviço psicossocial do trabalho",
        "oQueE": "Atendimento aos trabalhadores desempregados com pouca ou nenhuma qualificação profissional, baixa escolaridade, acima de 50 anos, idosos e pessoas com deficiência (PcD) e egress..."
      },
      {
        "orgao": "PCMS",
        "titulo": "Atender, Registrar e Apurar as infrações penais que configurem violência e familiar contra a mulher",
        "oQueE": "I - atender, registrar e apurar: a) as infrações penais que configurem violência doméstica e familiar contra a mulher, independentemente de orientação sexual, decorrente de qual..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do programa educacional de resistência às drogas e à violência (PROERD)",
        "oQueE": "O Programa Educacional de Resistência às Drogas e à Violência (PROERD) constitui uma forma de atuação da PMMS direcionada à prevenção ao uso/abuso de drogas e a práticas violent..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do programa mulher segura (PROMUSE)",
        "oQueE": "Programa Mulher Segura – PROMUSE é um programa que realiza o monitoramento e proteção das mulheres em situação de violência doméstica e familiar. Policiais Militares devidamente..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto bom de bola e bom na escola",
        "oQueE": "O Projeto Bom de Bola, Bom na Escola – PBBBE, criado pela Portaria n.º 05/12-PM3, 20 de março de 2012 e com base no Estatuto da Criança e do Adolescente – ECA, tem por finalidad..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto florestinha – educação ambiental",
        "oQueE": "O Projeto Florestinha é um projeto socioambiental criado em 23 de novembro de 1992, e oficialmente regulamentando por meio da Portaria nº 16/13/PM-3/PMMS de 22 de outubro de 201..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto social no trânsito. centro educativo de múltiplas atividades de trânsito (CEMATRAN )",
        "oQueE": "O Centro Educativo de Múltiplas Atividades de Trânsito – CEMATRAN é um Projeto Social desenvolvido e localizado na sede da Polícia Militar Rodoviária e atende crianças e adolesc..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do projeto tiro adaptado",
        "oQueE": "O Projeto Tiro Esportivo Adaptado, tem como objetivo reabilitar o deficiente físico e reintegrá-lo à sociedade, alcançando, também, seus familiares que tenham interesse na práti..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Solicitar ronda escolar – escola segura e família forte",
        "oQueE": "O Projeto Escola Segura, Família Forte tem por finalidade implementar ações preventivas para harmonizar o convívio no ambiente escolar e no seu entorno, fortalecendo os vínculos..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Acessar cursos da Escola do SUAS/MS",
        "oQueE": "A Escola é um espaço criado pelo Governo do Estado de Mato Grosso do Sul para formar e capacitar profissionais da área de assistência social. Ela oferece cursos, oficinas, semin..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Emitir, no formato digital, a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista",
        "oQueE": "É o serviço que permite solicitar a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA). Essa carteira é um documento oficial que ajuda a identificar..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar acolhimento institucional para mulheres vítimas de violência doméstica",
        "oQueE": "A Casa Abrigo oferece acolhimento temporário, seguro e sigiloso a mulheres em situação de violência doméstica, garantindo proteção imediata, moradia, alimentação e atendimento p..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar apoio e orientação às organizações da sociedade civil",
        "oQueE": "Têm como objetivo orientar, capacitar e acompanhar instituições governamentais e não governamentais na formalização de parcerias, elaboração de projetos e captação de recursos...."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento aos consumidores endividados e superendividados",
        "oQueE": "Núcleo permanente de atendimento ao consumidor endividado/superendividado - NUPACE - É um núcleo que atende consumidores endividados e superendividados, oferecendo atendimento m..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento a pessoas em situação de violação de direitos",
        "oQueE": "Este serviço atende pessoas que tiveram seus direitos violados ou que precisam de orientação sobre direitos humanos no Estado de Mato Grosso do Sul. A equipe oferece escuta, ori..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento em residências inclusivas regionalizadas para adultos com deficiência",
        "oQueE": "É um serviço de acolhimento institucional destinado a jovens e adultos com deficiência, em situação de dependência e que não dispõem de condições de autossustento ou de suporte..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento no Procon/MS",
        "oQueE": "Canal que recebe, analisa, avalia e encaminha as manifestações de pessoas físicas e jurídicas, visando a transparência e harmonia nas relações de consumo."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento pelo Programa Direitos Humanos em Ação",
        "oQueE": "Esse serviço oferece ações educativas sobre direitos humanos, com o objetivo de: Informar, orientar e conscientizar pessoas e grupos; Fortalecer o empoderamento individual e col..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar bloqueio de ligação de telemarketing",
        "oQueE": "Serviço gratuito que permite ao cidadão ou à empresa bloquear chamadas telefônicas não autorizadas realizadas por empresas de telemarketing ou por estabelecimentos que utilizem..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar capacitação para conselheiros tutelares e municipais dos direitos da criança e do adolescente",
        "oQueE": "Disponibiliza suporte técnico, orientação, formações presenciais e on-line aos Conselhos Tutelares e aos Conselhos Municipais dos Direitos da Criança e do Adolescente (CMDCA) de..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar carteira do Passe Livre Intermunicipal",
        "oQueE": "É um benefício estadual que assegura gratuidade ou desconto nas passagens de ônibus intermunicipais, em Mato Grosso do Sul, para pessoas idosas (a partir de 60 anos) e pessoas c..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar emissão de certidão de nascimento e documentos básicos",
        "oQueE": "O serviço tem como objetivo assegurar que todas as pessoas tenham acesso à certidão de nascimento e aos principais documentos civis, com prioridade para as populações em situaçã..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar inclusão no Programa Cuidar de Quem Cuida",
        "oQueE": "É um benefício mensal de R$ 900,00 a cuidadores não remunerados de pessoas com deficiência com grau II ou grau III de dependência. O grau de dependência nível II se aplica para..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar inclusão no Programa Mais Social",
        "oQueE": "O Programa Mais Social oferece apoio financeiro e alimentar a famílias em situação de vulnerabilidade em Mato Grosso do Sul. O benefício é de R$ 450,00 por mês, pago por cartão..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar inscrição no programa Energia Social: Conta de Luz Zero",
        "oQueE": "O Programa Energia Social: Conta de Luz Zero visa garantir o pagamento integral dos valores mensais de consumo de energia elétrica para famílias de baixa renda residentes no est..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar o benefício do MS Supera",
        "oQueE": "É um benefício social mensal no valor de um salário mínimo nacional aos estudantes matriculados em cursos de educação profissional técnica (nível médio) ou de graduação (univers..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar orientação Procon/MS",
        "oQueE": "Disponibilidade de informações e dados, de forma presencial ou virtual, a pessoa física ou jurídica, na condição de consumidor ou fornecedor, visando atender as diretrizes previ..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar pré-cadastro no Programa Criança na Creche",
        "oQueE": "O Programa de Apoio à Mulher Trabalhadora e Chefe de Família – Criança na Creche é uma iniciativa do Governo do Estado que oferece auxílio financeiro mensal para mulheres que cr..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar atendimento pelo centro especializado de Atendimento à Mulher, à Criança e ao Adolescente em Situação de Violência - CEAMCA",
        "oQueE": "O CEAMCA é importante equipamento do Governo do Estado na prevenção à violência contra mulheres e meninas, crianças e adolescentes cujos direitos foram violados. Oferece atendim..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar orientação para retificação do nome no registro civil",
        "oQueE": "Pessoas travestis e transexuais que desejam alterar o nome e gênero de registro em sua documentação de nascimento pelo nome social podem procurar diretamente, sem a presença de..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Confirmar continuidade em escola da Rede Estadual de Ensino",
        "oQueE": "Renovação da matrícula para o próximo ano escolar."
      },
      {
        "orgao": "SED MS",
        "titulo": "Consultar notas e frequência de estudantes",
        "oQueE": "Este serviço refere-se ao boletim escolar que está no painel do estudante e pode ser acessado por estudantes ou por seus responsáveis, durante todo o ano escolar."
      },
      {
        "orgao": "SED MS",
        "titulo": "Emitir certificado do ensino médio",
        "oQueE": "Certificar os estudantes concluintes da etapa do Ensino Médio, sendo vedada a antecipação da certificação. A unidade escolar expede o Certificado de conclusão, juntamente com o..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Emitir, no formato digital, a Carteira de Identificação Estudantil de Mato Grosso do Sul",
        "oQueE": "É É a emissão, no formato digital, da Carteira de Identificação Estudantil de Mato Grosso do Sul (CDIEMS) que beneficia o pagamento de meia entrada para os estudantes, conforme..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Participar do programa arte e cultura na escola",
        "oQueE": "Programa que oferta atividades artístico-culturais, tais como: dança, teatro, música, bandas, fanfarras, orquestra, capoeira, circo, artes plásticas e cinema, no contraturno das..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Participar dos projetos do programa MS desporto escolar  PRODESC – treinamento desportivo",
        "oQueE": "Um instrumento essencial de efetivação de uma política esportiva escolar que fortalece as competências e estimula as potencialidades dos alunos-atletas, além de prepará-los para..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Realizar exame de audiometria",
        "oQueE": "A audiometria tonal é um exame realizado por fonoaudiólogo, em cabine acústica, para avaliar a capacidade auditiva e identificar possíveis alterações. Utiliza sons de diferentes..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar a Educação de Jovens e Adultos aos Privados de liberdade",
        "oQueE": "Oferecimento da educação básica, na modalidade Educação de Jovens e Adultos - EJA e Projeto Avanço do Jovem na Aprendizagem -AJA- UNEI/MS, destinado à comunidade que está em sit..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar a educação do campo",
        "oQueE": "É uma modalidade da educação que ocorre em Espaços Rurais, com o objetivo de atender às especificidades da comunidade."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Atendimento Educacional Especializado nas Salas de Recursos Multifuncionais da Rede Estadual de Ensino",
        "oQueE": "O Atendimento Educacional Especializado (AEE) é um serviço pedagógico complementar, oferecido em horário diferente ao das aulas regulares, nas Salas de Recursos Multifuncionais..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar autorização para oferta da educação profissional técnica de nível médio",
        "oQueE": "São atos autorizativos, emanados do Conselho Estadual de Educação de Mato Grosso do Sul (CEE/MS), visando: I – ao credenciamento da instituição de ensino; II – à autorização de..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar avaliação funcional da visão",
        "oQueE": "A Avaliação Funcional da Visão é um procedimento educacional que analisa como o estudante com deficiência visual utiliza sua visão residual em situações de aprendizagem e intera..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar avaliação para identificação para Altas Habilidades ou Superdotação",
        "oQueE": "É destinado à avaliação e identificação de estudantes com indicadores de Altas Habilidades ou Superdotação (AH/SD), com o objetivo de promover o Atendimento Educacional Especial..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar a verificação de vida escolar e autenticidade de documentos escolares de estudantes do sistema de ensino de Mato Grosso do Sul",
        "oQueE": "É a verificação da autenticidade de documentos escolares emitidos por instituições de ensino privadas ou estaduais, que estão ativas ou não."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar certificação do Ensino Médio por meio do Enem, no período de 2009 a 2012",
        "oQueE": "É a certificação de conclusão do Ensino Médio, com utilização dos resultados do Exame Nacional do Ensino Médio – ENEM especificante referente aos anos de 2009 a 2012."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e autorização de instituições públicas e privadas para oferta da educação básica",
        "oQueE": "Atos autorizativos do Conselho Estadual de Educação de Mato Grosso do Sul para a oferta da educação básica no Sistema Estadual de Ensino."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e autorização de instituições públicas e privadas para oferta de Cursos de ensino médio, educa profissional técnica de nível médio e educ. de Jovens e adultos, nas etapas do ensino fundamental e do ensino médio, na modalidade EaD",
        "oQueE": "Atos de credenciamento e autorização do Conselho Estadual de Educação do Estado de Mato Grosso do Sul para a oferta de cursos de ensino médio, de Educação Profissional Técnica d..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e autorização de instituições públicas e privadas para oferta de educação escolar para estudantes com necessidades educacionais especiais",
        "oQueE": "Atos de credenciamento e autorização para a oferta da educação escolar para estudantes que apresentam necessidades educacionais especiais, em todas as etapas e modalidades da ed..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e recredenciamento, autorização, reconhecimento e renovação de reconhecimento de Curso da Educação Superior",
        "oQueE": "Estabelece dispositivos para a regulação, a supervisão e a avaliação de instituições de educação superior e de seus cursos de graduação e sequenciais do Sistema Estadual de Ensi..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar curso normal médio – habilitação para docência na educação infantil e anos iniciais do ensino fundamental",
        "oQueE": "Formação mínima para o exercício da docência na educação infantil e nos anos iniciais do ensino fundamental, de nível médio, na modalidade Normal e Qualificação Profissional em..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar cursos técnicos e qualificação profissional - integrado, concomitante e subsequente ao ensino médio",
        "oQueE": "Oferta de Cursos de Educação Profissional à população sul-mato-grossense que esteja matriculada no ensino médio ou concluído essa etapa da educação básica. Os cursos operacional..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Educação de Jovens e Adultos",
        "oQueE": "Modalidade de ensino que busca oportunizar a escolarização ou complementação dos estudos na educação básica. Oferta dos anos finais e do ensino médio a jovens, adultos e idosos..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Educação Escolar Indígena",
        "oQueE": "É uma modalidade de educação específica, diferenciada, intercultural, bilíngue/multilíngue e comunitária, para atender às comunidades indígenas de MS conforme define a legislaçã..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar  Educação Quilombola",
        "oQueE": "A educação quilombola é compreendida como um processo amplo que inclui a família, a convivência com os outros, as relações de trabalho e com o sagrado e as vivências nas escolas..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar equivalência de estudos",
        "oQueE": "A Equivalência de estudos é a equiparação formal aos estudos do Brasil dos conhecimentos adquiridos pelos estudantes em países estrangeiros e poderá ser de estudos completos e i..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar inserção e acompanhamento da pessoa com deficiência no mercado de trabalho",
        "oQueE": "É um serviço destinado à inserção e acompanhamento da pessoa com deficiência (PcD) no mercado de trabalho, numa perspectiva inclusiva, objetivando possibilitar ao cidadão a igua..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Materiais Didáticos e Paradidáticos Acessíveis para Estudantes com Deficiência Visual nos Formatos Braille, Ampliado e Áudio",
        "oQueE": "Consiste na oferta de materiais pedagógicos acessíveis para estudantes com deficiência visual, conforme a Avaliação Funcional da Visão. Os formatos incluem: material ampliado pa..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula de estudantes da educação especial na Rede Estadual de Ensino",
        "oQueE": "Estudantes da educação especial que desejam ingressar na Rede Estadual de Ensino devem acessar o site da matrícula digital (https://www.matriculadigital.ms.gov.br/MatriculaDigit..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula na educação infantil",
        "oQueE": "É a primeira etapa da Educação Básica, a qual visa garantir a concepção que vincula educar e cuidar, ampliando os conhecimentos construídos pelas crianças no ambiente familiar e..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula na etapa do ensino médio",
        "oQueE": "O ensino médio é a etapa final da educação básica, com duração mínima de 3 anos e tem como finalidades: a consolidação e o aprofundamento dos conhecimentos adquiridos no ensino..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula no ensino fundamental",
        "oQueE": "O Ensino Fundamental é a etapa intermediária da Educação Básica, com duração de 9 anos, frequentada pela criança dos 6 aos 14 anos. É dividida em anos iniciais (1º ao 5º ano), q..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula no ensino fundamental em tempo integral",
        "oQueE": "A educação integral em tempo integral é a oferta das etapas da educação básica – educação infantil, ensino fundamental e ensino médio, em tempo integral, assegurando o desenvolv..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar matrícula no ensino médio em tempo integral",
        "oQueE": "É um Programa de oferta do Ensino Médio em Tempo Integral – EMTI, que tem como proposta pedagógica a formação integral do jovem, estimulando não só o desenvolvimento da aprendiz..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o Avanço do Jovem na Aprendizagem em Mato Grosso do Sul",
        "oQueE": "É um projeto de correção de fluxo (distorção idade/ano) para adolescentes de 15 a 17 anos que não concluíram a etapa do ensino fundamental. No caso do ensino médio, são duas Tra..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o credenciamento e a autorização de instituições públicas e privadas para a oferta do atendimento educacional especializado na educação básica na modalidade educação especial (AEE)",
        "oQueE": "Atos de credenciamento pelo Conselho Estadual de Educação do Estado de Mato Grosso do Sul para a oferta do Atendimento Educacional Especializado na educação básica, modalidade e..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o curso Normal Médio  Indígena território etnoeducacional Povos do Pantanal",
        "oQueE": "Oferta do Normal Médio Indígena Território Etnoeducacional Povos do Pantanal para indígenas concluintes do ensino médio ou equivalente."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o curso Normal Médio Intercultural Indígena",
        "oQueE": "É uma modalidade de educação específica, diferenciada, intercultural, bilíngue/multilíngue e comunitária, para atender às comunidades indígenas de MS conforme define a legislaçã..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o programa das escolas cívico-militares",
        "oQueE": "As Escolas Cívico-Militares são estabelecimentos públicos estaduais de ensino, que ministram o ensino regular na educação básica, nas etapas ensino fundamental (do 6º ao 9º ano)..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar participação no curso de libras",
        "oQueE": "O curso de Libras tem como objetivo promover a acessibilidade comunicacional para profissionais da educação que atuam com estudantes surdos, oferecendo formação certificada e co..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar pré-matrícula presencial e digital",
        "oQueE": "A Rede Estadual de Ensino oferece a pré-matrícula online ou presencial para facilitar e tornar o processo mais acessível a todos."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar produção e adaptação de materiais didáticos em Libras",
        "oQueE": "Este serviço visa garantir a acessibilidade educacional para estudantes surdos por meio da criação e adaptação de conteúdos pedagógicos em Língua Brasileira de Sinais (Libras)...."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar transferência de estudante",
        "oQueE": "Você solicita a transferência de escola. A transferência ocorre entre unidades escolares."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - imunidade",
        "oQueE": "Use este serviço para solicitar o reconhecimento da IMUNIDADE do IPVA para veículos automotores integrantes do patrimônio dos seguintes entes : União, os Estados, o Distrito Fed..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção coletiva",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis ou Doação para diversos beneficiários de uma só vez, relativo a programas habitacionais ou de regularização fundiária, dispensando a neces..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção para imóvel rural",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis para imóvel rural cuja área total, na matrícula, seja inferior ao módulo da região e seja destinado para herdeiro ou para o cônjuge sobrev..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção para imóvel urbano",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis para imóvel urbano, cuja construção seja de padrão popular ou inferior , que sirva de habitação para herdeiro ou para o cônjuge sobrevivente."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar credenciamento de visitante ao socioeducando",
        "oQueE": "O serviço de credenciamento de visitantes ao socioeducando é uma iniciativa voltada para regularizar e facilitar a entrada de familiares e pessoas autorizadas nas Unidades Educa..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Leitão Vida",
        "oQueE": "I ncentivo para os produtores de suínos que produzem de forma sustentável e eficiente, cumprindo as normas ambientais, sanitárias e trabalhistas, de acordo com a exigência do me..."
      },
      {
        "orgao": "SES",
        "titulo": "Atender a pacientes com hemofilia, outras coagulopatias e anemia falciforme",
        "oQueE": "Farmácia de distribuição de fatores de coagulação para pessoas com hemofilia e outras coagulopatias. Farmácia que distribui medicamento específico (PENV-Oral) para portadores de..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS. É realizado por um setor..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar e Declarações",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS ou para discentes e docent..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar captação de órgãos e tecidos para transplante",
        "oQueE": "O Transplante salva a vida de muitos pacientes terminalmente doentes e melhora a qualidade de vida de outros, mas, para sua realização, necessita de um doador. Esse procedimento..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar cursos de educação profissional na área da saúde",
        "oQueE": "A ETSUS Profa. Ena de Araújo Galvão foi criada em 21 de julho de 1986, como Centro Formador de Recursos Humanos para a Saúde, pelo Decreto n. 3646, sendo transformada em Escola..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar documentos relativos a vida acadêmica",
        "oQueE": "É um setor de apoio acadêmico-administrativo, diretamente vinculado à Direção da Escola de Saúde Pública. A gestão acadêmica exerce um papel importante nos processos de organiza..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar programa remédio em casa - PRC",
        "oQueE": "O Programa Remédio em Casa (PRC) é um serviço que busca garantir maior comodidade, continuidade do tratamento e adesão terapêutica, especialmente para pacientes com dificuldades..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar teleconsultoria",
        "oQueE": "TELECONSULTORIA SÍNCRONA O programa disponibiliza atualmente o serviço de teleconsultoria síncrona (por webconferência de profissional para profissional), nas especialidades de..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar agendamento do Cine Pet",
        "oQueE": "Solicitar a exibição do Cine Pet para conscientizar contra maus-tratos e abandono de animais nas escolas da Rede Estadual de Ensino e Rede Municipal de Ensino, por intermédio de..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Inscrever nas aulas piano e violino",
        "oQueE": "A Casa da Cultura oferece aulas de piano para crianças, jovens e adultos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Inscrever no processo de seleção unificada SISU sistema de seleção unificada",
        "oQueE": "O SiSU (Sistema de Seleção Unificada) é um sistema online do Ministério da Educação em que a UEMS e outras instituições públicas de ensino superior brasileiras oferecem vagas ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo seletivo permanente – histórico escolar",
        "oQueE": "Processo seletivo de ingresso aos cursos de graduação da UEMS, destinado ao preenchimento das vagas remanescentes dos processos principais de seleção (Vestibular e SiSU), subsid..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes",
        "oQueE": "O Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes, destinam-se aos/as candidatos/as que realizaram o Exame Nacional do Ensino Médio (ENEM), nos últimos dez anos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Realização de cursos, palestras e formações em Direitos Humanos",
        "oQueE": "Este serviço permite que cidadãos, empresas, escolas, associações, centros comunitários, órgãos e entidades públicas possam solicitar cursos, formações ou palestras sobre Direit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar acesso à assistência jurídica gratuita",
        "oQueE": "Serve para atuar em causas jurídicas nas àreas de direito de família, crimes e ações trabalhista. Atuando em ações de alimentos, inventário, divórcio correspondem há boa parte d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atualização de dados cadastrais no SAU - Sistema Acadêmico da UEMS",
        "oQueE": "Quando o acadêmico muda de endereço, e-mail, ou acontece alguma alteração no nome (casamento, divórcio ou outros casos) ou número de documento, o mesmo deve apresentar na secret..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar cancelamento de matrícula por iniciativa do acadêmico",
        "oQueE": "Esta serviço cancela a matrícula do aluno mediante requerimento de cancelamento de matrícula"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição acadêmico especial",
        "oQueE": "Acadêmico especial é o matriculado para cursar disciplinas ou módulos isolados dos cursos de graduação da UEMS, oriundo de cursos de graduação de outra instituição de ensino sup..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial",
        "oQueE": "Refere-se à matrícula dos candidatos participantes do vestibular ou do ENEM (Exame Nacional do Ensino Médio) devidamente cadastrados e classificados no SISU (Sistema de Seleção..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial em curso de graduação",
        "oQueE": "Informação e orientação sobre procedimento de matrícula inicial. A matrícula inicial refere-se à matrícula dos candidatos aprovados no processo seletivo da UEMS, na primeira cha..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula para Portador de diploma",
        "oQueE": "Informação e Orientação sobre documentação, procedimentos e prazos para a Solicitação de Matrícula de Portador de Diploma"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar Reingresso",
        "oQueE": "O reingresso é o retorno do acadêmico em situação de Abandono de Curso por não renovação de matrícula."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar reingresso ao curso de graduação",
        "oQueE": "O reingresso é o retorno do acadêmico em situação de abandono de curso por não renovação de matrícula. A DRA presta informação e Orientação sobre documentação, procedimentos par..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar trancamento especial de matrícula de graduação",
        "oQueE": "É o trancamento compulsório por motivo de tratamento da saúde, superior a 60 (sessenta) dias, contados em dias corridos ou em datas alternadas; ou por prestação de serviço milit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Trancamento de matrícula de graduação",
        "oQueE": "Interrupção temporária dos estudos, mantendo o acadêmico vinculado à UEMS com direito à renovação de matrícula."
      },
      {
        "orgao": "UEMS",
        "titulo": "Transferência interna",
        "oQueE": "A transferência interna é a possibilidade do acadêmico, a partir da segunda série/terceiro semestre do curso de origem, migrar de curso no âmbito da UEMS, quando da disponibilid..."
      }
    ]
  },
  {
    "id": "saude",
    "nome": "Saúde",
    "icon": "heart-pulse",
    "cor": "#D32F2F",
    "total": 131,
    "pctDoTotal": 10.7,
    "topOrgaos": [
      {
        "orgao": "SES",
        "qtd": 31
      },
      {
        "orgao": "SEFAZ MS",
        "qtd": 24
      },
      {
        "orgao": "DETRAN",
        "qtd": 11
      },
      {
        "orgao": "AGEPREV",
        "qtd": 9
      },
      {
        "orgao": "FUNSAU",
        "qtd": 9
      }
    ],
    "exclusivas": 26,
    "compartilhadas": 105,
    "cards": [
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Consultar horários e tarifas de linhas de transporte rodoviário intermunicipal de passageiros",
        "meta": "Aplicativo MS TRIP, que informa sobre horários, empresas operadoras e tarifas de todas as linhas de viagem...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Consultar valor de pedágio das rodovias concedidas em MS",
        "meta": "Informação sobre valores de pedágio cobrado nas rodovias concedidas de Mato Grosso do Sul.",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Participar das atividades de educação ambiental da AGEMS",
        "meta": "As atividades desenvolvidas pela AGEMS integram um projeto de atuação da Agência na educação ambiental form...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Participar de audiência e consulta pública promovida pela AGEMS",
        "meta": "Participar de Audiências e Consultas Públicas promovidas pela AGEMS a respeito de decisões sobre os serviço...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar autorização para prestação de assistência religiosa",
        "meta": "Trata-se de cadastro e credenciamento de entidades religiosas e de seus agentes para que possam prestar ass...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "meta": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria ent...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "meta": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico,...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Receber apoio para emitir o contracheque (aposentado ou pensionista)",
        "meta": "A Ageprev oferece orientação e apoio para que aposentados e pensionistas do Regime Próprio de Previdência S...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Receber apoio para viver bem após a aposentadoria e a pensão (Apoio psicossocial e previdenciário)",
        "meta": "Este serviço oferece apoio psicossocial para quem já se aposentou ou recebe pensão. A Ageprev ajuda você a...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AGEMS",
        "titulo": "Consultar horários e tarifas de linhas de transporte rodoviário intermunicipal de passageiros",
        "oQueE": "Aplicativo MS TRIP, que informa sobre horários, empresas operadoras e tarifas de todas as linhas de viagem de ônibus entre municípios de Mato Grosso do Sul."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Consultar valor de pedágio das rodovias concedidas em MS",
        "oQueE": "Informação sobre valores de pedágio cobrado nas rodovias concedidas de Mato Grosso do Sul."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Participar das atividades de educação ambiental da AGEMS",
        "oQueE": "As atividades desenvolvidas pela AGEMS integram um projeto de atuação da Agência na educação ambiental formal e não-formal, com foco no saneamento básico e contemplando todos os..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Participar de audiência e consulta pública promovida pela AGEMS",
        "oQueE": "Participar de Audiências e Consultas Públicas promovidas pela AGEMS a respeito de decisões sobre os serviços regulados."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar autorização para prestação de assistência religiosa",
        "oQueE": "Trata-se de cadastro e credenciamento de entidades religiosas e de seus agentes para que possam prestar assistência religiosa aos custodiados dentro das Unidades Prisionais da A..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "oQueE": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria entre o Governo do Estado de MS com a AGEPEN e o Tribunal de Justiça de M..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "oQueE": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico, para servidores que estão afastados do trabalho por motivo de saúde."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber apoio para emitir o contracheque (aposentado ou pensionista)",
        "oQueE": "A Ageprev oferece orientação e apoio para que aposentados e pensionistas do Regime Próprio de Previdência Social de Mato Grosso do Sul (RPPS/MS) possam consultar e emitir seu co..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber apoio para viver bem após a aposentadoria e a pensão (Apoio psicossocial e previdenciário)",
        "oQueE": "Este serviço oferece apoio psicossocial para quem já se aposentou ou recebe pensão. A Ageprev ajuda você a cuidar da saúde, se organizar financeiramente e planejar essa nova fas..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer o auxílio-invalidez ao aposentado por incapacidade definitiva",
        "oQueE": "Para o aposentado civil, é o pagamento de uma parcela complementar de 25% ( vinte e cinco por cento) do valor da remuneração bruta mensal, limitada a um salário-mínimo, ao segur..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial fora do local de lotação ou de exercício (perícia em trânsito)",
        "oQueE": "É o atendimento pericial presencial ao servidor, familiar ou dependente que necessita de avaliação pericial fora do local de lotação ou exercício: o servidor que estiver, tempor..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para concessão de licença para tratamento de saúde",
        "oQueE": "Licença a que o servidor faz jus, quando acometido de doença que não lhe permita exercer as atividades do cargo, sendo possível sua concessão com apresentação do atestado médico..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para exames admissionais",
        "oQueE": "Os exames admissionais são executados pelos peritos objetivando a aferição do bem-estar físico, mental e social dos servidores, considerando inclusive, a ocupação, o cargo e as..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para readaptação provisória ou definitiva",
        "oQueE": "O servidor que teve perda em sua capacidade laboral, decorrente de alteração do estado de saúde física ou mental, é submetido à avaliação pericial, por intermédio do Grupo de Pe..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para realizar exame periódico de saúde do Servidor",
        "oQueE": "O exame periódico é uma avaliação médica feita regularmente para cuidar da saúde dos servidores públicos. Ele serve para identificar precocemente qualquer problema de saúde que..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Obter certidão de ocorrência",
        "oQueE": "É a emissão do documento que comprova que o cidadão foi atendido por uma equipe do Corpo de Bombeiros Militar em ocorrências de incêndio (em residência, comércio, indústria, ter..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar atendimento pré-hospitalar",
        "oQueE": "É o conjunto de ações destinadas ao atendimento de emergências fora do ambiente hospitalar, destinado às vítimas de trauma (acidentes de trânsito, domésticos, de trabalho, etc.)..."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Acessar dados do portal da transparência",
        "oQueE": "Consultar os dados do Poder Executivo Estadual sobre despesas, receitas, contratos, convênios, licitações, organograma do governo, servidores públicos, patrimônio, orçamento, re..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Reciclagem para Condutor Infrator",
        "oQueE": "Curso destinado aos condutores penalizados por Suspensão da CNH e nas demais situações estabelecidas pelos artigos 268 do CTB e 87 da Resolução 1.020 do Contran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Pedir Renovação da Carteira Nacional de Habilitação - CNH",
        "oQueE": "Você renova sua CNH. Você faz exames obrigatórios. Você comprova aptidão para dirigir."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Pedir revisão de exame teórico",
        "oQueE": "Solicitação de revisão de nota para candidatos que realizaram a prova teórica e discordam do resultado final.Solicitação de revisão de nota para candidatos que realizaram a prov..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Protocolar defesa e recurso a processo administrativo de suspensão/cassação de CNH",
        "oQueE": "Serviço destinado a protocolar recurso para processo administrativo de suspensão/cassação de CNH."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico",
        "oQueE": "Agendamento para realização do exame/reexame teórico-técnico para obtenção da carteira nacional de habilitação (CNH)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Condutor Infrator",
        "oQueE": "Agendamento para realização de exame teórico-técnico para condutores infratores (curso de reciclagem)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Curso Especializado",
        "oQueE": "Agendamento para realização de exame teórico-técnico para homologação de Curso Especializado"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Renovação CNH",
        "oQueE": "Agendamento para realização de exame teórico-técnico para Renovação de CNH (CNH vencida a mais de 05 anos)"
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Avaliação por Junta Médica/Psicológica em Processo de Habilitação",
        "oQueE": "Avaliação realizada por junta composta por três médicos/psicólogos peritos, especialistas em medicina/psicologia do tráfego, em grau de recurso da avaliação do perito singular o..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai onde o idoso está",
        "oQueE": "Atendimento nos Centros de Convivência e Assistência Social, movimentos e associações, tendo como finalidade o desenvolvimento do Programa “Prevenção, Mobilidade, Acessibilidade..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Renovação de CNH com Exercício de Atividade Remunerada - EAR",
        "oQueE": "Renovação dos exames exigidos para condução de veículos automotores (CNH), com exercício de atividade remunerada-EAR (motorista profissional)."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar consulta de livros e catálogos de artes visuais da biblioteca do MARCO - Museu de Arte Contemporânea.",
        "oQueE": "Consulta e pesquisa no acervo de livros de artes visuais da biblioteca pública do Museu de Arte Contemporânea com 6 mil exemplares de obras específicas em artes plásticas."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar consulta e empréstimo de publicações, periódicos, livros e obras raras do acervo da biblioteca estadual",
        "oQueE": "Consulta local de obras raras e empréstimo de livros do acervo de 44 mil publicações dentre periódicos e livros.Documento com foto;"
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar visitação e consulta de fotografias, filmes, vídeos, cartazes, discos de vinil e registros sonoros do acervo do MIS- Museu da Imagem e do Som",
        "oQueE": "Visitação e consulta a fotografias, filmes, vídeos, cartazes, discos de vinil e registros sonoros e visuais do acervo do Museu da Imagem e do Som."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Solicitar rede de rádio e tv para pronunciamentos oficiais",
        "oQueE": "Formação de rede educativa de rádio e televisão para atender à solicitação de transmissão de pronunciamentos do Governador do Estado e, eventualmente, para transmissão de comuni..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitação ao Programa de Formação e Capacitação Esportiva oferecido pela UCAPES aos profissionais de Educação Física e Acadêmicos, nas diversas áreas: esporte, treinamentos, paradesporto, saúde e gestão esportiva",
        "oQueE": "É um programa de Capacitação Esportiva voltado aos profissionais e acadêmicos de Educação Física, que buscam qualificação em diferentes áreas da Educação Física de forma eficien..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Consultar edição e publicação de edital de chamamento público para eventos geradores de fluxo turístico",
        "oQueE": "Elaboração e publicação de edital de chamamento público para apoio a eventos geradores de fluxo turístico, com municípios e organizações da sociedade civil sem fins lucrativos,..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar agendamento de internação para procedimentos e cirurgias",
        "oQueE": "Serviço para agendamento de internações para realização de cirurgias e procedimentos."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar atendimento de urgência e emergência",
        "oQueE": "Atendimento de urgência e emergência hospitalar nas especialidades de Clínica Médica, Clinica Cirúrgica, Pediátrica e Ginecologia e Obstetrícia."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar atendimento religioso a pacientes internados e familiares",
        "oQueE": "A Capelania contribui para a promoção do bem-estar de servidores, pacientes e acompanhantes, na prestação de ações a pessoa hospitalizada ou não compartilha a fé e realiza ativi..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar coleta e doação de leite materno",
        "oQueE": "O Banco de Leite Humano do Hospital Regional de Mato do Sul é responsável pelo fornecimento de leite materno e humano para os bebês internados na Unidade de Tratamento Intensivo..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar consulta médica especializada",
        "oQueE": "Serviço com capacidade para atender pacientes internos e externos que necessitem de consulta prestada por profissional de saúde especializado."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar exames de hemodinâmica",
        "oQueE": "Realização de exames e procedimentos de Cardiologia Intervencionista, Radiologia Intervencionista, Estudo Eletrofisiológico e Neuroradiologia Intervencionista."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar exames para diagnóstico de doenças cardíacas",
        "oQueE": "Realização de exames complementares para diagnostico de doenças cardiológicas."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar resultados de exames e cópia de prontuário médico",
        "oQueE": "Setor responsável pela guarda, fornecimento e organização dos prontuários dos pacientes e retirada de resultados de exames e cópia de prontuário médico."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar serviço de imagem e diagnóstico",
        "oQueE": "Este serviço oferece a população os exames relacionados abaixo, conforme número de vagas e formas de agendamento- Considerando a Pandemia de Corona vírus, este serviço atende um..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Consultar vagas de emprego",
        "oQueE": "Verificar as vagas de emprego no SINE (Sistema Nacional de Emprego)"
      },
      {
        "orgao": "IMASUL",
        "titulo": "Apresentar monitoramento de outorga de recursos hídricos",
        "oQueE": "O monitoramento de outorga de recursos hídricos constitui instrumento essencial para o acompanhamento das condições quantitativas e qualitativas dos usos autorizados, permitindo..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Realizar consulta de andamentos de processos",
        "oQueE": "Permite consultar o andamento de processos ambientais protocolados no IMASUL, como licenciamento, autos de infração, solicitações e demais procedimentos administrativos, de form..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar cadastro e outorga de uso de recursos hídricos (CEURH)",
        "oQueE": "Os diversos usos da água podem ser concorrentes, gerando conflitos entre setores usuários e impactos ambientais. Nesse sentido, gerenciar recursos hídricos é uma necessidade pre..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar vista de processo ambiental",
        "oQueE": "Permite ao interessado acessar o conteúdo de processos ambientais para consulta."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar solicitações - processo, livro ou serviço",
        "oQueE": "Trata-se de um serviço web que permite consultar os serviços solicitados junto a JUCEMS, tais como: Processos de aberturas, alterações, extinções ou outros documentos de interes..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar tabela de prazos",
        "oQueE": "Consultar tabela de prazos é um serviço disponibilizado pela JUCEMS, com o intuito de publicitar os prazos de execução dos serviços prestados pela JUCEMS."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Consultar tabela de preços",
        "oQueE": "Consultar tabela de preços é um serviço disponibilizado pela JUCEMS, com o intuito de publicitar as especificações de atos integrantes da tabela de preços, com seus respectivos..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Pesquisar viabilidade",
        "oQueE": "Pesquisa prévia (VIABILIDADE) é uma consulta eletrônica antecipada, onde se coleta as informações do endereço, atividade econômica e nome empresarial da empresa, tendo como resu..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Consultar editais de concursos e processos seletivos da PGE/MS",
        "oQueE": "Acesse a página de Concursos Públicos e Processos Seletivos aqui. Este serviço permite que você acesse os editais dos concursos e processos seletivos da PGE/MS. Esses editais tr..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pedir Revisão de Dívida Inscrita (PRDI)",
        "oQueE": "O Pedido de Revisão de Dívida Inscrita (PRDI) permite que o contribuinte solicite à Procuradoria-Geral do Estado de Mato Grosso do Sul (PGE/MS) a reanálise administrativa dos dé..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Propor acordo na Câmara Administrativa de Solução de Conflitos (CASC - saúde) para receber medicamentos",
        "oQueE": "Este serviço permite a formalização de acordos para fornecer ao cidadão medicamentos não previstos no SUS, evitando novas ações judiciais ou resolvendo processos já em andamento..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar Certidão de Regularidade Fiscal",
        "oQueE": "Este serviço permite solicitar a certidão de débitos inscritos em dívida ativa do Estado. A certidão pode ser: Negativa, quando não há dívida; Positiva, quando há dívida registr..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar informações sobre débitos inscritos em dívida ativa cobrados em processo judicial",
        "oQueE": "Este serviço permite consultar a situação de débitos inscritos em dívida ativa cobrados judicialmente pelo Estado de Mato Grosso do Sul. Também é possível obter informações sobr..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Consultar débitos",
        "oQueE": "Consulta de débitos existentes."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento a pessoas em situação de violação de direitos",
        "oQueE": "Este serviço atende pessoas que tiveram seus direitos violados ou que precisam de orientação sobre direitos humanos no Estado de Mato Grosso do Sul. A equipe oferece escuta, ori..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento em residências inclusivas regionalizadas para adultos com deficiência",
        "oQueE": "É um serviço de acolhimento institucional destinado a jovens e adultos com deficiência, em situação de dependência e que não dispõem de condições de autossustento ou de suporte..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Consultar notas e frequência de estudantes",
        "oQueE": "Este serviço refere-se ao boletim escolar que está no painel do estudante e pode ser acessado por estudantes ou por seus responsáveis, durante todo o ano escolar."
      },
      {
        "orgao": "SED MS",
        "titulo": "Realizar exame de audiometria",
        "oQueE": "A audiometria tonal é um exame realizado por fonoaudiólogo, em cabine acústica, para avaliar a capacidade auditiva e identificar possíveis alterações. Utiliza sons de diferentes..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar certificação do Ensino Médio por meio do Enem, no período de 2009 a 2012",
        "oQueE": "É a certificação de conclusão do Ensino Médio, com utilização dos resultados do Exame Nacional do Ensino Médio – ENEM especificante referente aos anos de 2009 a 2012."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM) - impugnação",
        "oQueE": "A impugnação é a peça de defesa formal do contribuinte contra a exigência fiscal, consubstanciada no Auto de Lançamento e de Imposição de Multa (ALIM), a qual, apresentada tempe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - concessão ou renovação do diferimento do EAC previsto no Convênio ICMS nº 15/2023, no cumprimento de obrigações, que dispõe sobre o regime de tributação monofásica do ICMS",
        "oQueE": "Os contribuintes deverão estar relacionados no Anexo II ou IV do Ato COTEPE/ICMS nº 43/2023 para a concessão do diferimento do imposto retido estabelecido nos §§ 2º e 5º da cláu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização Específica mediante Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 9.578/1999",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado assumir a responsabilidade pelo ICMS ST devido e adotar como base de cálculo do ICMS valor d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - suspensão da eficácia temporária a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisação das atividades."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cancelamento ou suspensão de inscrição estadual de terceiro no cadastro",
        "oQueE": "Solicitação de suspensão ou cancelamento de inscrição estadual, protocolado pelo PROPRIETÁRIO e/ou por TERCEIRO interessado, em razão da perda do direito de utilização da área (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão circunstanciada de débitos estaduais)",
        "oQueE": "Solicitar a certidão circunstanciada de débitos estaduais (certidão positiva com efeito de negativa), que pode ser emitida quando existem débitos que ainda não venceram, estão g..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Consulta tributária",
        "oQueE": "Prestação de orientação oficial visando ao cumprimento da legislação tributária."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Concessão de credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com a suspensão da cobrança do ICMS, nos te..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para recebimento de soja e milho em grãos e arroz em casca para depósito, remetidos por produtores rurais do Estado de Mato Grosso, com a suspensão da cobrança do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de produtos agrícolas para depósito situado em Goiás, com a suspensão da cobrança do ICMS, nos termos do Protocolo ICMS 10/98..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de soja e milho em grãos e arroz em casca , de produção agrícola do remetente, para depósito situado em Mato Grosso, com a su..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de trânsito suspensa - prorrogação do prazo de suspensão",
        "oQueE": "É a disponibilização de canais de acesso direcionados ao cidadão/contribuinte para protocolo e apreciação de solicitação de prorrogação de prazo de suspensão de Guia de Trânsito..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Estimativa - revisão de valores ou reconsideração do enquadramento",
        "oQueE": "Apresentar pedido de revisão de valores ou de reconsideração, sem efeito suspensivo, do enquadramento no Regime de Estimativa, em até cinco dias contados da notificação do valor..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - suspensão da cobrança do imposto nas operações sob regime especial aduaneiro de admissão temporária",
        "oQueE": "Solicitar a suspensão da cobrança do ICMS sob regime especial aduaneiro de admissão temporária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - liberação da entrada de mercadorias procedentes de outras unidades da federação e destinadas à demonstração em feiras e eventos realizados no estado, com suspensão da cobrança do ICMS",
        "oQueE": "Solicitar a liberação da entrada de mercadorias procedentes de outras Unidades da Federação destinadas à demonstração em feiras e eventos realizados no Estado, com suspensão da..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - prorrogação de prazo para retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do imposto",
        "oQueE": "Solicitar prorrogação de prazo para o retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do ICMS desde que o pedido de prorrogação seja aprese..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - consulta de débito",
        "oQueE": "Este serviço é de autoatendimento para a consulta de débitos do IPVA, sendo que essa consulta pode ser feita no site da SEFAZ/MS ou na plataforma de serviços e-Fazenda"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - baixa de pendência de NFP-e de remessa com suspensão/não-incidência do ICMS, se comprovado o retorno da mercadoria",
        "oQueE": "Solicitar a baixa da pendência da NFP-e emitida com suspensão ou não-incidência do ICMS, desde que comprovado que a mercadoria retornou dentro do prazo determinado pela legislaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal fatura de serviços de comunicação eletrônica (NFCom) - credenciamento voluntário",
        "oQueE": "Solicitação de credenciamento para a emissão de Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom). A NFCom, modelo 62, é o documento emitido e armazenado eletroni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de agravo em face da não admissibilidade da impugnação pela 1ª instância",
        "oQueE": "Recebimento e apreciação de Agravo pelo chefe da Unidade de Consultas e Julgamento (UCJUL) ou pelo julgador que negou a admissibilidade da impugnação e encaminhamento ao Tribuna..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Providência cadastral para apreciação da Superintendência",
        "oQueE": "Solicitação de inscrição, suspensão, reativação, alteração, etc., no Cadastro de Contribuinte Estadual (CCE), bem como os pedidos de reconsideração e/ou revisão desses, que por..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - concessão ou renovação de tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de transporte e na armazenagem de etanol combustível pelo sistema dutoviário",
        "oQueE": "Solicitar a concessão ou renovação do Regime Especial para ter tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de tran..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 12.415/2007",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado utilizar o crédito outorgado previsto no Decreto nº 12.415/2007 , desde que não realize oper..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de verificação fiscal de exportação (TVF-Exportação) - baixa",
        "oQueE": "Solicitar a baixa de Termo de Verificação Fiscal (TVF) lavrado em decorrência de mercadoria destinada à exportação, com fim específico de exportação ou para formação de lote de..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar adesão ao Programa MS Ativo",
        "oQueE": "O MS ATIVO Municipalismo fortalece e qualifica a parceria entre o Estado e os Municípios para enfrentar desafios e aprimorar a Gestão Pública, elevando a qualidade dos serviços..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Visitar Bioparque Pantanal",
        "oQueE": "Visitação ao Bioparque Pantanal. - Maior aquário de água doce do mundo. É um empreendimento orgânico de experiências e conhecimento para TODOS! Inclusivo, acessível, científico,..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Acessar os dados estatísticos online",
        "oQueE": "Serviço de consulta pública aos dados estatísticos e indicadores de segurança pública acessível gratuitamente a qualquer cidadão."
      },
      {
        "orgao": "SES",
        "titulo": "Apresentar defesa e/ou recurso em processo administrativo sanitário PAS",
        "oQueE": "O processo administrativo sanitário acontece quando é verificado durante inspeção sanitária infrações à legislação sanitária ( Disposto no código sanitário de MS Art. 341 da Lei..."
      },
      {
        "orgao": "SES",
        "titulo": "Atender a pacientes com hemofilia, outras coagulopatias e anemia falciforme",
        "oQueE": "Farmácia de distribuição de fatores de coagulação para pessoas com hemofilia e outras coagulopatias. Farmácia que distribui medicamento específico (PENV-Oral) para portadores de..."
      },
      {
        "orgao": "SES",
        "titulo": "Consultar medicamentos ofertados pelo Sistema Único de Saúde - SUS",
        "oQueE": "Os medicamentos do SUS estão organizados nos Componentes Básico, Estratégico e Especializado da Assistência Farmacêutica, cada um com fluxos específicos de acesso, conforme prot..."
      },
      {
        "orgao": "SES",
        "titulo": "Consultar os estoques dos medicamentos do Componente Especializado da Assistência Farmacêutica – CEAF",
        "oQueE": "Você consulta os estoques de medicamentos das farmácias públicas estaduais. A consulta acontece em tempo real no painel do CEAF. A Secretaria de Estado de Saúde oferece esse ser..."
      },
      {
        "orgao": "SES",
        "titulo": "Consultar receita médica digital",
        "oQueE": "O usuário pode consultar e emitir receita de medicamentos (receituário básico) que foi prescrita após uma teleconsulta ou teleinterconsulta."
      },
      {
        "orgao": "SES",
        "titulo": "Enviar documentos do Componente Especializado da Assistência Farmacêutica por meio digital",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Realizar doação de sangue",
        "oQueE": "Trata-se de doação voluntária para coleta de sangue, produção e distribuição, para atender a demanda de pacientes que necessitam de Hemocomponentes no estado."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitação de Consulta",
        "oQueE": "Disponibiliza canal digital para que o usuário/paciente do Sistema Único de Saúde possa SOLICITAR CONSULTA médica."
      },
      {
        "orgao": "SES",
        "titulo": "SOLICITAÇÃO DE MEDICAMENTOS DO COMPONENTE ESPECIALIZADO",
        "oQueE": "Trata-se de possibilidade do usuário/cidadão, devidamente habilitado por recomendação médica e com documentação adequada, pedir pelo sistema o medicamento recomendado pelo profi..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitação, renovação e retirada de medicamentos do componente especializado - Assistência Farmacêutica Estadual",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS. É realizado por um setor..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar e Declarações",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS ou para discentes e docent..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar análise de projetos EAS - estabelecimento assistencial de saúde",
        "oQueE": "Todos os serviços de saúde que pretendem construir ou reformar uma estrutura física para oferecer um determinado serviço de saúde devem, antes , apresentar um projeto arquiteton..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar cadastramento de doador voluntário de medula óssea",
        "oQueE": "Cadastro de candidato de doador voluntário de medula óssea."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar captação de órgãos e tecidos para transplante",
        "oQueE": "O Transplante salva a vida de muitos pacientes terminalmente doentes e melhora a qualidade de vida de outros, mas, para sua realização, necessita de um doador. Esse procedimento..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar cursos de educação profissional na área da saúde",
        "oQueE": "A ETSUS Profa. Ena de Araújo Galvão foi criada em 21 de julho de 1986, como Centro Formador de Recursos Humanos para a Saúde, pelo Decreto n. 3646, sendo transformada em Escola..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar documentos relativos a vida acadêmica",
        "oQueE": "É um setor de apoio acadêmico-administrativo, diretamente vinculado à Direção da Escola de Saúde Pública. A gestão acadêmica exerce um papel importante nos processos de organiza..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar fornecimento de medicamentos da assistência farmacêutica estadual - componente básico",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar fornecimento de medicamentos da assistência farmacêutica estadual - componente estratégico",
        "oQueE": "A Assistência Farmacêutica engloba um conjunto de ações voltadas à promoção, proteção e recuperação da saúde, por meio da garantia do acesso aos medicamentos e da promoção do se..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar licença sanitária ou sua renovação (alvará).",
        "oQueE": "Verificação pelas autoridades sanitárias da conformidade do empreendimento com as normas sanitárias vigentes. Todos os serviços de interesse da saúde (pessoa física ou jurídica)..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar medicamentos especializados",
        "oQueE": "O usuário pode solicitar medicamentos do componente especializado fornecidos pela Assistência Farmacêutica Especializada preenchendo os dados necessários."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar parecer de viabilidade técnica de condição sanitária",
        "oQueE": "Parecer que avalia as condições sanitárias de saúde ambiental e do trabalhador para fins de autorização para armazenamento, comércio e aplicação de agrotóxicos por empresas no e..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar programa remédio em casa - PRC",
        "oQueE": "O Programa Remédio em Casa (PRC) é um serviço que busca garantir maior comodidade, continuidade do tratamento e adesão terapêutica, especialmente para pacientes com dificuldades..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar Teleconsulta",
        "oQueE": "O usuário pode solicitar uma teleconsulta da especialidade médica desejada, respeitando a organização da agenda do Núcleo de Telessaúde de Mato Grosso do Sul."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar teleconsultoria",
        "oQueE": "TELECONSULTORIA SÍNCRONA O programa disponibiliza atualmente o serviço de teleconsultoria síncrona (por webconferência de profissional para profissional), nas especialidades de..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar telediagnóstico em eletrocardiograma",
        "oQueE": "Serviço de telediagnóstico em eletrocardiograma que disponibiliza laudos de eletrocardiograma on-line, para interpretação através Plataforma Nacional de Telediagnóstico (PNTD) q..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar telediagnóstico em teledermatologia",
        "oQueE": "A Teledermatologia em demartologia é um modelo funcional de diagnóstico em dermatologia via internet, através do Sistema de Telemedicina e Telessaúde (STT), que possibilita e fa..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar teleducação",
        "oQueE": "A Teleducação é uma atividade educacional que utiliza as ferramentas tecnológicas para ministrar ações educacionais à distância como cursos, webaulas, webnários, reuniões de mat..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar tratamento fora de domicílio",
        "oQueE": "É um programa do SUS instituido pela Portaria de Consolidação N° 1 do Ministerio da Saúde de 28 de setembro de 2017, que busca garantir o encaminhamento de pacientes a outras un..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar agendamento do Cine Pet",
        "oQueE": "Solicitar a exibição do Cine Pet para conscientizar contra maus-tratos e abandono de animais nas escolas da Rede Estadual de Ensino e Rede Municipal de Ensino, por intermédio de..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Consulta sobre licitações",
        "oQueE": "Trata da possibilidade de qualquer pessoa de solicitar esclarecimentos ou mesmo impugnar os editais de licitação por irregularidade"
      },
      {
        "orgao": "UEMS",
        "titulo": "Inscrever no processo de seleção unificada SISU sistema de seleção unificada",
        "oQueE": "O SiSU (Sistema de Seleção Unificada) é um sistema online do Ministério da Educação em que a UEMS e outras instituições públicas de ensino superior brasileiras oferecem vagas ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes",
        "oQueE": "O Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes, destinam-se aos/as candidatos/as que realizaram o Exame Nacional do Ensino Médio (ENEM), nos últimos dez anos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar abono de faltas",
        "oQueE": "O abono de faltas será concedido quando o aluno participar, em períodos compatíveis com as atividades acadêmicas, em: I. exercícios ou manobras militares, convocados por órgão d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar acesso a consulta supervisionada a acervo bibliográfico, digital e audiovisual",
        "oQueE": "Espaço destinado à pesquisa bibliográfica, audiovisual e digital do Acervo de Maria da Glória Sá Rosa, exclusivamente no local, mediante acompanhamento."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição para a realização de proficiência",
        "oQueE": "Estrangeiros que pretendem ter sua proficiência avaliada para competência leitora nas línguas inglês, espanhol, francês e português devem realizar provas e assim são avaliados p..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial",
        "oQueE": "Refere-se à matrícula dos candidatos participantes do vestibular ou do ENEM (Exame Nacional do Ensino Médio) devidamente cadastrados e classificados no SISU (Sistema de Seleção..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar trancamento especial de matrícula de graduação",
        "oQueE": "É o trancamento compulsório por motivo de tratamento da saúde, superior a 60 (sessenta) dias, contados em dias corridos ou em datas alternadas; ou por prestação de serviço milit..."
      }
    ]
  },
  {
    "id": "contribuinte",
    "nome": "Contribuinte",
    "icon": "file-text",
    "cor": "#00838F",
    "total": 319,
    "pctDoTotal": 26.2,
    "topOrgaos": [
      {
        "orgao": "SEFAZ MS",
        "qtd": 263
      },
      {
        "orgao": "PGE MS",
        "qtd": 10
      },
      {
        "orgao": "IAGRO",
        "qtd": 7
      },
      {
        "orgao": "IMASUL",
        "qtd": 6
      },
      {
        "orgao": "MSGÁS",
        "qtd": 6
      }
    ],
    "exclusivas": 54,
    "compartilhadas": 265,
    "cards": [
      {
        "orgaoLabel": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "meta": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "meta": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados p...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar verificação metrológica de taxímetro, moto taxímetro e medidores de velocidade",
        "meta": "Verificação de Taxímetros/Mototaxímetros e Medidores de Velocidade: Tem por finalidade, realizar testes met...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Celebrar convênio de cooperação para regulação e fiscalização dos serviços de saneamento básico",
        "meta": "Acordo bilateral celebrado entre a Agência Estadual de Regulação de Serviços Públicos de MS e os Municípios...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Obter credenciamento como Verificador Independente",
        "meta": "Autorização fornecida pela AGEMS às empresas aptas a atuarem como Verificador Independente, após análise do...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Parcelar débitos de taxa de fiscalização e de multas da AGEMS",
        "meta": "Oportunidade para parcelar débitos de multas e taxas de fiscalização junto à Agência Estadual de Regulação...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Recorrer de notificação ou autuação oriunda de fiscalização da AGEMS",
        "meta": "Opção de apresentar defesa em relação a autuação emitida pela AGEMS por infração na operação de serviços re...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Solicitar vistoria de veículo de passageiros de viagem intermunicipal na modalidade fretamento",
        "meta": "Vistoria periódica de veículo utilizado para transporte de passageiros na modalidade de fretamento entre mu...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Requerer a inclusão e/ou exclusão de dependentes de pensão previdenciária",
        "meta": "É o procedimento para registrar ou retirar dependentes na pensão previdenciária. A inclusão pode ser necess...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AEM",
        "titulo": "Requerer regularização de débitos / parcelamentos",
        "oQueE": "O Setor de cobrança é responsável pela cobrança de todos os débitos pendentes não quitados nos vencimentos relativos às multas, às taxas de serviços metrológicos e preços públic..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar atendimento os processos de autos de infração",
        "oQueE": "O setor jurídico da AEM/MS é o setor que formaliza e acompanha os processos de Autos de Infração lavrados por infringência aos dispositivos da legislação metrológica, quer seja..."
      },
      {
        "orgao": "AEM",
        "titulo": "Solicitar verificação metrológica de taxímetro, moto taxímetro e medidores de velocidade",
        "oQueE": "Verificação de Taxímetros/Mototaxímetros e Medidores de Velocidade: Tem por finalidade, realizar testes metrológicos, com finalidade de APROVAR OU REPROVAR os instrumentos, de a..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Celebrar convênio de cooperação para regulação e fiscalização dos serviços de saneamento básico",
        "oQueE": "Acordo bilateral celebrado entre a Agência Estadual de Regulação de Serviços Públicos de MS e os Municípios, visando a união de esforços para atingir um interesse público em com..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Obter credenciamento como Verificador Independente",
        "oQueE": "Autorização fornecida pela AGEMS às empresas aptas a atuarem como Verificador Independente, após análise dos documentos e atestados previstos na Portaria nº 175/2020. O Verifica..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Parcelar débitos de taxa de fiscalização e de multas da AGEMS",
        "oQueE": "Oportunidade para parcelar débitos de multas e taxas de fiscalização junto à Agência Estadual de Regulação de Serviços Públicos de Mato Grosso do Sul - AGEMS"
      },
      {
        "orgao": "AGEMS",
        "titulo": "Recorrer de notificação ou autuação oriunda de fiscalização da AGEMS",
        "oQueE": "Opção de apresentar defesa em relação a autuação emitida pela AGEMS por infração na operação de serviços regulados e fiscalizados pela Agência."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar vistoria de veículo de passageiros de viagem intermunicipal na modalidade fretamento",
        "oQueE": "Vistoria periódica de veículo utilizado para transporte de passageiros na modalidade de fretamento entre municípios de Mato Grosso do Sul. A vistoria da AGEMS é obrigatória, poi..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a inclusão e/ou exclusão de dependentes de pensão previdenciária",
        "oQueE": "É o procedimento para registrar ou retirar dependentes na pensão previdenciária. A inclusão pode ser necessária, por exemplo, para garantir direitos previdenciários e para fim d..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a isenção de imposto de renda",
        "oQueE": "Serviço que garante o direito à isenção do imposto de renda para aposentados, reformados ou pensionistas portadores de doença grave, contagiosa, incurável ou incapacitante, conf..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Emitir documento anual do veículo (CRLV-e)",
        "oQueE": "Você emite o documento do veículo. Você paga os débitos antes da emissão. Você faz o processo pela internet. Você não precisa ir ao Detran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar desvinculação de multas de veículos adquiridos em leilões",
        "oQueE": "Solicitação de desvinculação de débitos e restrições existentes nos veículos arrematados em leilões públicos oficiais para registro no DETRAN/MS. Não há custo de desembaraço par..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Orientações para solicitação de certidão negativa de tombamento",
        "oQueE": "A Certidão Negativa de Tombamento é um documento oficial que atesta que determinado imóvel ou bem não está protegido por tombamento em nível municipal, estadual ou federal. Este..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar a confecção de carteira nacional do artesão",
        "oQueE": "A carteira Nacional do Artesão é uma identificação nacional para artesãos e trabalhadores manuais de todo o Brasil. O documento tem abrangência nacional e oferece diversos benef..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cadastrar propriedade como unidade de confinamento",
        "oQueE": "Formalização do cadastro de propriedades rurais como unidades de confinamento de bovinos e bubalinos, para fins de controle sanitário e adequação fiscal junto à SEFAZ/MS."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar documentos referente ao trânsito de animais",
        "oQueE": "O Sistema E-SANIAGRO é um Sistema on line que permite ao produtor, através do portal GAP (login, código de acesso e senha particular) realizar: emissão da guia de trânsito anima..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar relatório de fiscalização em comércio de agrotóxico",
        "oQueE": "Consulta de relatório resultado de fiscalização realizada pela Iagro em comerciante de produtos agrotóxicos."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar relatório de fiscalização em propriedade rural",
        "oQueE": "Consulta de relatório resultado de fiscalização ou vigilância realizada pela Iagro em propriedade rural."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Requerer certificado de destruição de soqueira de algodão",
        "oQueE": "Este serviço permite que o produtor rural ou instituição de pesquisa solicite o Certificado de Destruição de Soqueira de Algodão à IAGRO, após o cumprimento das medidas fitossan..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar ressarcimento de valor pelo Iagro",
        "oQueE": "Ressarcimento de Valores pagos pelo contribuinte, por cancelamento de e-GTA, duplicidade de pagamento ou pagamentos equivocados."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar vistoria de sala de exame de MVH no PNCEBT",
        "oQueE": "Vistoria e fiscalização da sala de exame para realização de testes diagnósticos de brucelose e tuberculose para habilitação de médico veterinário no Programa Nacional de Control..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Descentralizar o licenciamento ambiental",
        "oQueE": "Trata-se da transferência da competência para licenciar, fiscalizar e monitorar atividades de impacto local, que deixa de ser exercida pelo órgão estadual e passa a ser atribuiç..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer acesso ao sistema de logística reversa de embalagens em geral",
        "oQueE": "A Logística Reversa de Embalagens em Geral é um instrumento de desenvolvimento econômico e social previsto na Política Nacional de Resíduos Sólidos (PNRS), instituída pela Lei F..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer participação no rateio do ICMS Ecológico - Componente Resíduo Sólidos",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar cadastro e outorga de uso de recursos hídricos (CEURH)",
        "oQueE": "Os diversos usos da água podem ser concorrentes, gerando conflitos entre setores usuários e impactos ambientais. Nesse sentido, gerenciar recursos hídricos é uma necessidade pre..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar inscrição de UC no Cadastro Estadual de Unidades de Conservação (CEUC)",
        "oQueE": "O Cadastro Estadual de Unidades de Conservação (CEUC) é o instrumento de reconhecimento oficial das unidades de conservação no Estado de Mato Grosso do Sul, com vistas à partiçã..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar participação no ICMS Ecológico – Componente Unidades de Conservação e Terras Indígenas",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Acessar agência virtual",
        "oQueE": "Prestar atendimento ao consumidor para solicitações de segunda via de fatura, atualização de boleto, históricos de consumo e quitação de débito via internet."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Acessar o aplicativo MSGÁS (acompanhamento do consumo, emissão de 2ª via de fatura)",
        "oQueE": "Prestar atendimento ao consumidor para solicitações de segunda via de fatura, atualização de boleto, histórico de consumo e quitação de débito."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Aderir ao débito automático da fatura de consumo",
        "oQueE": "Prestar atendimento ao consumidor de adesão ao débito automático"
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Retirar quitação de débito anual",
        "oQueE": "Prestar atendimento ao consumidor para solicitações de declaração de quitação anual de débitos."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar a religação de fornecimento de gás natural em até 4 horas",
        "oQueE": "Trata-se do reestabelecimento do fornecimento de gás natural a uma unidade consumidora que tenha sido desligada a pedido do cliente ou por débito, ou seja, a religação só pode s..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar religação de fornecimento de gás natural em até 48 horas",
        "oQueE": "Trata-se do restabelecimento do fornecimento de gás natural a uma unidade consumidora que tenha sido desligada a pedido do cliente ou por débito, ou seja, a religação só pode se..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Emitir boleto para pagar débito inscrito em dívida ativa e protestado",
        "oQueE": "Emita seu boleto aqui. Este serviço permite que o contribuinte com débito inscrito em dívida ativa do Estado de MS e protestado consulte os valores devidos e emita o boleto (DAE..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Emitir DAEMS – pagar emolumentos e taxas à PGE",
        "oQueE": "Emita seu Documento de Arrecadação do Estado aqui. Este serviço permite que Cartórios gerem o Documento de Arrecadação do Estado de Mato Grosso do Sul (DAEMS) para pagar emolume..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "IPVA ou LICENCIAMENTO - emitir boleto",
        "oQueE": "Emita seu boleto aqui. Este serviço permite que o proprietário de veículo com débito de IPVA ou licenciamento inscrito em dívida ativa consulte os valores e emita o boleto para..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pagar ou parcelar débito inscrito em dívida ativa",
        "oQueE": "Este serviço permite que o cidadão com débito inscrito em dívida ativa parcele ou pague o valor devido. Para IPVA e Licenciamento Anual de veículos, o pagamento e o parcelamento..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pedir Revisão de Dívida Inscrita (PRDI)",
        "oQueE": "O Pedido de Revisão de Dívida Inscrita (PRDI) permite que o contribuinte solicite à Procuradoria-Geral do Estado de Mato Grosso do Sul (PGE/MS) a reanálise administrativa dos dé..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar Certidão de Regularidade Fiscal",
        "oQueE": "Este serviço permite solicitar a certidão de débitos inscritos em dívida ativa do Estado. A certidão pode ser: Negativa, quando não há dívida; Positiva, quando há dívida registr..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar cópia de processo administrativo de débito inscrito em dívida ativa",
        "oQueE": "Este serviço permite solicitar cópias de processos administrativos que tratam de débitos inscritos em dívida ativa, nos quais o cidadão seja parte interessada."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar informações sobre débitos inscritos em dívida ativa cobrados em processo judicial",
        "oQueE": "Este serviço permite consultar a situação de débitos inscritos em dívida ativa cobrados judicialmente pelo Estado de Mato Grosso do Sul. Também é possível obter informações sobr..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar Transação Tributária",
        "oQueE": "Este serviço permite que contribuintes negociem débitos tributários e não tributários inscritos em Dívida Ativa do Estado de Mato Grosso do Sul, administrada pela Procuradoria-G..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Verificar recolhimento do ITCD em processos de inventário e similares",
        "oQueE": "Este serviço verifica se o Imposto sobre Transmissão Causa Mortis e Doação (ITCD) foi recolhido corretamente em processos judiciais de inventário, arrolamento, divórcio e situaç..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Participar do programa mulher segura (PROMUSE)",
        "oQueE": "Programa Mulher Segura – PROMUSE é um programa que realiza o monitoramento e proteção das mulheres em situação de violência doméstica e familiar. Policiais Militares devidamente..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Policiamento de trânsito – Proteção de vidas no trânsito das cidades",
        "oQueE": "O serviço de policiamento ostensivo de trânsito é exercido pela Polícia Militar na fiscalização e educação de trânsito com os objetivos de proteger vidas no exercício do direito..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Consultar débitos",
        "oQueE": "Consulta de débitos existentes."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar emissão de certidão negativa de débitos",
        "oQueE": "Emissão de certidão negativa da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar emissão de declaração anual de quitação de débitos",
        "oQueE": "Emissão de declaração anual de quitação de débitos da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar parcelamento de contas de água e/ou esgoto",
        "oQueE": "Concessão de parcelamento de débitos em aberto"
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar religação da água",
        "oQueE": "É a solicitação de religação de ligações de água e/ou esgoto, que estão cortadas por débito após efetuar o pagamento dos mesmos."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Análise das obrigações socioeconômicas pactuadas em Termo de Acordo - Benefício da Lei Complementar nº 93/2001",
        "oQueE": "Este serviço é o canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 comprove, de forma espontânea ou mediante i..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a emissão do Atestado de Inexistência para fins de manutenção do diferimento do ICMS Diferencial de Alíquotas ou do ICMS Importação na aquisição de máquinas e equipame..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de cientificação (ACT) - prorrogação de prazo para pagamento",
        "oQueE": "Solicitar a prorrogação do prazo estabelecido no Auto de Cientificação (ACT) lavrado concomitantemente ao Auto de Lançamento e Imposição de Multa (ALIM), antes do fim do prazo p..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM) - impugnação",
        "oQueE": "A impugnação é a peça de defesa formal do contribuinte contra a exigência fiscal, consubstanciada no Auto de Lançamento e de Imposição de Multa (ALIM), a qual, apresentada tempe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 1 - solicitação de lavratura",
        "oQueE": "Solicitação de lavratura de auto de lançamento e de imposição de multa Mod. 1, que somente pode ser feita quando houver pendências tributárias originadas por tipos de documentos..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a termo de apreensão (TA), conforme art. 4º da Instrução Normativa/SAT nº 001/2020",
        "oQueE": "Solicitação de lavratura de Auto de lançamento e de imposição de multa (ALIM - mod. 2) que poderá ser realizada quando houver um Termo de Apreensão (TA) emitido para a cobrança..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - contraditório e ampla defesa",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2, que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Auto de lançamento e de imposição de multa (ALIM), mod. 2 - solicitação de lavratura referente a TVF e/ou TA - parcelamento de débito fiscal",
        "oQueE": "Solicitação de lavratura de Auto de Lançamento e de Imposição de Multa, mod. 2 , que somente poderá ser realizada quando houver um ou mais Termos de Verificação Fiscal (TVF) e/o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - controle de empresas interdependentes (art. 57-A da Lei nº 1.810/1997) - apenas para contribuintes de Mato Grosso do Sul",
        "oQueE": "Reconhecimento da condição de interdependência, prevista no art. 57-A da Lei nº 1.810/1997 , entre empresa de Mato Grosso do Sul e empresa de outra Unidade da Federação que lhe..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - aquisição de milho e soja para uso na ração animal, com diferimento do ICMS",
        "oQueE": "Solicitar Autorização Específica para aquisição de milho e soja com diferimento do pagamento do ICMS, nas operações internas realizadas por produtor rural, para uso como ração a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - armazenagem de álcool combustível ou açúcar em outra usina com diferimento do ICMS",
        "oQueE": "Solicitar Autorização Específica para armazenagem de álcool combustível ou açúcar em outra destilaria localizada dentro do Estado de MS com o diferimento do pagamento do ICMS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - concessão ou renovação do diferimento do EAC previsto no Convênio ICMS nº 15/2023, no cumprimento de obrigações, que dispõe sobre o regime de tributação monofásica do ICMS",
        "oQueE": "Os contribuintes deverão estar relacionados no Anexo II ou IV do Ato COTEPE/ICMS nº 43/2023 para a concessão do diferimento do imposto retido estabelecido nos §§ 2º e 5º da cláu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - credenciamento para remessa de alumínio a estabelecimentos de outra UF, assumindo a responsabilidade pelo pagamento do ICMS (art. 47-A, § 5º, II do Anexo III ao RICMS)",
        "oQueE": "Credenciamento de empresas para realizar operações interestaduais com alumínio em formas brutas e quaisquer outras mercadorias classificadas na posição NCM/SH 7601, destinadas a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito outorgado e redução do percentual de MVA nas operações internas realizadas por estabelecimentos comerciais atacadistas (Decreto nº 15.368/2020) - apenas para atacadistas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 4º do Decreto nº 15.368/2020 , para utilização de: Crédito outorgado previsto nos artigos 1º e 3º desse decreto, nas operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito outorgado nas operações internas e interestaduais com açúcar pelos fabricantes de açúcar",
        "oQueE": "Solicitar Autorização Específica para usufruir do crédito outorgado previsto no art. 2º do Decreto nº 9.745/1999 , incidente nas operações internas e interestaduais com açúcar e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido incidente nas operações com energia elétrica e serviços de comunicação",
        "oQueE": "Concessão de Autorização Específica para utilização do benefício de crédito presumido sobre o valor do imposto incidente nas operações com energia elétrica ou serviços de comuni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações com os produtos resultantes da industrialização do leite (art. 1º do Decreto nº 6.996/1993) - apenas para industrializadores de leite",
        "oQueE": "Concessão de Autorização Específica para utilização de crédito presumido previsto no art. 1º do Decreto nº 6.996/1993 , nas operações internas e interestaduais, sobre o valor do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - crédito presumido nas operações internas ou interestaduais com produtos cerâmicos (art. 77, II do Anexo I ao RICMS) - apenas para indústrias",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 77, II do Anexo I ao Regulamento do ICMS , para utilização do benefício de crédito presumido sobre o valor do imposto incid..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de embalagens plásticas e latas produzidas em MS para acondicionar os produtos do adquirente (Resolução Interna SEF de 1993) - apenas para indústrias e abatedores de animais",
        "oQueE": "Concessão de Autorização Específica, prevista na Resolução Interna SEF 000/1993 , para que indústrias e estabelecimentos abatedores de aves, bovinos, suínos e outros animais adq..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por empresa industrializadora de ração animal, na operação interna (art. 7º do Decreto nº 9.895/2000) - apenas para indústrias de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 7º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas, dentro do Estado de Mato Grosso do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS na aquisição de produtos agrícolas por indústrias, na operação interna (art. 3º do Decreto nº 9.895/2000) - apenas para indústrias, exceto fabricantes de ração animal",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 3º do Decreto nº 9.895/2000 , para aquisição de milho, soja e outros produtos agrícolas de estabelecimentos comerciais ou d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas operações internas com couro bovino ou bufalino e produtos químicos adquiridos por industrializadores de couro (Decreto nº 11.796/2005) - apenas para indústrias de couro",
        "oQueE": "Concessão de Autorização Específica, prevista nos art. 3º e 4º do Decreto nº 11.796/2005 , para aquisição de couro bovino ou bufalino e de produtos químicos utilizados em seu pr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS nas saídas internas de algodão em pluma, realizadas por produtor, para outro estabelecimento do mesmo produtor (art. 10, II do Decreto nº 9.895/2000) - apenas para produtores de algodão",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 10, II do Decreto nº 9.895/2000 , para receber algodão em pluma produzido e beneficiado em MS, de outro estabelecimento pro..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do ICMS no recebimento de grãos da CONAB - para estabelecimentos industriais, comerciais ou de cooperativas (art. 1º, § 1º, II, c do Anexo II ao RICMS)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º, § 1º, II, c do Anexo II ao Regulamento do ICMS , para recebimento de produtos agropecuários da Companhia Nacional de Ab..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS Garantido-Abate (Decreto nº 12.056/2006) - serviço exclusivo para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica de diferimento do ICMS Garantido-Abate - apenas para Atacadistas de Carne inscritos no CAE 4.17.00 (autorização prevista no art...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - diferimento do lançamento e do pagamento do ICMS incidente na aquisição de gado bovino e bufalino em pé para abate (Decreto nº 12.056/2006) - serviço exclusivo para frigoríficos (CAE 3.17.03)",
        "oQueE": "Concessão ou renovação de Autorização Específica de Diferimento do ICMS nas aquisições de gado bovino e bufalino para abate - apenas para frigoríficos inscritos no CAE 3.17.03 (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - apenas para usinas e industriais de combustíveis, derivados ou não de petróleo",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais (art. 72, V do Anexo V ao RICMS) - serviço exclusivo para cerealistas ou comercializadoras de cereais",
        "oQueE": "Concessão ou renovação de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS Garantido-Abate - serviços exclusivos para atacadistas de carne (CAE 4.17.00)",
        "oQueE": "Concessão ou renovação de Autorização Específica (prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interestad..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS devido nas saídas interestaduais - diferimento do ICMS nas operações com gado bovino e bufalino para abate ou diferimento do ICMS Garantido-Abate - exclusivo para frigoríficos",
        "oQueE": "Concessão ou renovação de Autorização Específica ( prevista no art. 72, V do Anexo V ao Regulamento do ICMS ) de prazo para pagamento semanal do ICMS devido nas saídas interesta..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - dilatação do prazo para pagamento semanal do ICMS nas saídas interestaduais - empresas NÃO ENQUADRADAS como cerealistas ou comercializadoras de cereais, usinas ou industriais de combustíveis, frigoríficos e atacadistas de carne",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 72, V do Anexo V ao Regulamento do ICMS , de prazo para pagamento semanal do ICMS devido nas saídas interestaduais de produ..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização Específica mediante Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 9.578/1999",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado assumir a responsabilidade pelo ICMS ST devido e adotar como base de cálculo do ICMS valor d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - percentual de valor diferenciado de MVA para produtos alimentícios (art. 6º-D do Anexo III ao RICMS) - apenas para indústrias de alimentos",
        "oQueE": "Concessão de autorização específica, prevista no artigo 6º-D do Anexo III ao Regulamento do ICMS , para que estabelecimentos industriais localizados neste Estado realizem operaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações com produtos resultantes da industrialização da mandioca (art. 60-B do Anexo I ao RICMS) - apenas para industrializadores de mandioca",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-B do Anexo I ao Regulamento do ICMS , para utilização do benefício de redução de base de cálculo nas operações internas..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas operações internas com máquinas novas relacionadas no Decreto nº 16.114/2023 - apenas para empresas comercializadoras das máquinas citadas",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 2º do Decreto nº 16.114/2023 , para utilização do benefício de redução de base de cálculo nas operações internas com máquin..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - redução de base de cálculo nas saídas de farinha de mandioca promovidas por produtor rural (art. 60-F do Anexo I ao RICMS) - apenas para produtores rurais",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 60-F do Anexo I ao Regulamento ICMS , para utilização do benefício de redução de base de cálculo nas saídas internas e inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - remessa interna para industrialização com diferimento do ICMS incidente sobre o valor do serviço de industrialização, no retorno dos produtos ao estabelecimento de origem (Decreto nº 11.236/2003)",
        "oQueE": "Concessão de Autorização Específica, prevista no art. 1º-A do Decreto nº 11.236/2003 , para que a indústria detentora de benefício ou incentivo fiscal aplique o diferimento ao I..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização - inclusão de franqueadora no regime especial de transportadora conveniada (Anexo XII ao RICMS) - apenas para transportadoras de MS com regime especial de transportadora conveniada",
        "oQueE": "Autorização SAT para que empresa que possui Regime Especial de Transportadora Conveniada, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , inclua em seu regime especial..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF)",
        "oQueE": "Solicitar a Autorização para Impressão de Documentos Fiscais - AIDF e discriminar as características do documento fiscal a ser impresso, observando, no preenchimento do formulár..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF) - cancelamento do pedido",
        "oQueE": "Solicitar o cancelamento da Autorização para Impressão de Documentos Fiscais (AIDF)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF) - comprovação intempestiva",
        "oQueE": "Solicitar a comprovação intempestiva da Autorização para Impressão de Documentos Fiscais (AIDF)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização para impressão de documentos fiscais (AIDF) - quando não concedida por meio eletrônico",
        "oQueE": "Solicitar a Autorização para Impressão de Documentos Fiscais - AIDF e discriminar as características do documento fiscal a ser impresso, observando, no preenchimento do formulár..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Bilhete de passagem eletrônico (BP-e), modelo 63 - compartilhamento do BP-e com a AGEMS",
        "oQueE": "Solicitar o compartilhamento do Bilhete de Passagem Eletrônico (BP-e), modelo 63 com a AGEMS - Agência Estadual de Regulação de Serviços Públicos de Mato Grosso do Sul, a fim de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Bilhete de passagem eletrônico (BP-e), modelo 63 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Bilhete de Passagem Eletrônico (BP-e), modelo 63. O Bilhete de Passagem Eletrônico (BP-e), modelo 63, é um documento de existência ape..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - alteração de dados cadastrais",
        "oQueE": "Solicitar alteração de informações cadastrais da pessoa ou do estabelecimento, relativamente à atividade explorada, à natureza jurídica, ao endereço pessoal do contribuinte e a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - baixa da inscrição estadual",
        "oQueE": "Solicitar a baixa da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de apicultor e de meliponicultor",
        "oQueE": "Solicitar inscrição estadual de Apicultor e de Meliponicultor no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de pescador profissional",
        "oQueE": "Solicitar inscrição estadual de Pescador Profissional no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural",
        "oQueE": "Solicitar inscrição estadual de produtor rural no Cadastro da Agropecuária – CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição de produtor rural em terras indígenas",
        "oQueE": "Solicitar inscrição estadual de produtor em Terras Indígenas no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - inscrição estadual provisória para produtor rural em processo de regularização fundiária, assentamento, posse ou propriedade litigiosa",
        "oQueE": "Solicitar inscrição estadual provisória do estabelecimento no Cadastro da Agropecuária - CAP, nos casos em que a posse imobiliária do imóvel rural esteja submetida a processo de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação da inscrição estadual",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - reativação de inscrição estadual suspensa por vencimento de contrato",
        "oQueE": "Solicitar a reativação da inscrição estadual no Cadastro da Agropecuária - CAP, a qual foi suspensa em virtude do vencimento do contrato de arrendamento, comodato, cessão gratui..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - suspensão temporária da inscrição estadual a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual no Cadastro da Agropecuária, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro de contabilistas - inclusão e alteração de dados do contabilista",
        "oQueE": "Solicitar a inclusão e a alteração dos dados cadastrais de contabilista, pessoa física ou jurídica, no Cadastro de Contabilistas do Estado de MS, a fim de que o profissional ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - alteração de dados cadastrais",
        "oQueE": "Alterar dados cadastrais de contribuinte inscrito no Cadastro de Comércio, Indústria e Serviços - CCIS, relativamente à composição do capital ou dos sócios, do ramo de negócio o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - baixa da inscrição estadual",
        "oQueE": "Solicitar a baixa de Inscrição Estadual de contribuintes inscritos no Cadastro de Comércio, Indústria e Serviços - CCIS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de cerealista",
        "oQueE": "Concessão de inscrição no Cadastro do Comércio, Indústria e Serviços (CCIS) para estabelecimentos que tenham por atividade o beneficiamento elementar ou primário e o comércio at..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte de outras unidades da federação como substituto tributário nas operações com combustíveis líquidos e gasosos e lubrificantes e respectivas manutenções cadastrais",
        "oQueE": "O contribuinte de outras Unidades da Federação solicitar o cadastramento como Substituto Tributário nas operações com combustíveis líquidos e gasosos e lubrificantes e respectiv..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outras unidades da federação como responsável pelo recolhimento do ICMS nas operações destinadas a consumidor final (ICMS DIFCON)",
        "oQueE": "Contribuinte localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS para realizar o recolhimento, no prazo mensal, do ICMS nas..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outra unidade da federação como substituto tributário do ICMS mediante Termo de Responsabilidade",
        "oQueE": "Contribuinte do comércio ou indústria localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS, na condição de contribuinte subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de contribuinte localizado em outra unidade da federação como substituto tributário por força de Convênio ou Protocolo",
        "oQueE": "Contribuinte do comércio ou indústria localizado em outra Unidade da Federação solicitar inscrição no Cadastro de Contribuintes do Estado de MS, na condição de contribuinte subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de empresa do ramo de combustíveis líquidos e gasosos e lubrificantes",
        "oQueE": "Solicitar a inscrição no Cadastro do Comércio, Indústria e Serviços (CCIS) de empresa do ramo de combustíveis líquidos e gasosos e lubrificantes, derivados ou não de petróleo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de empresas",
        "oQueE": "Solicitar a Inscrição Estadual no Cadastro de Contribuintes do Comércio, Indústria e Serviços - CCIS. Observação: empresas industriais ou comerciais de combustíveis, derivados o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição de frigoríficos",
        "oQueE": "Solicitar a inscrição no Cadastro de Comércio, Indústria e Serviços - CCIS de estabelecimentos frigoríficos, matadouros, abatedouros e similares"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - inscrição estadual temporária para empresas do ramo de construção civil",
        "oQueE": "Solicitação de inscrição estadual no Cadastro de Contribuintes do Comércio, Indústria e Serviços - CCIS, por Empresa de construção civil estabelecida em outra unidade da Federaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - reativação da inscrição estadual",
        "oQueE": "Solicitar a reativação da Inscrição Estadual do Cadastro de Comércio, Indústria e Serviços - CCIS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - suspensão da eficácia temporária a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisação das atividades."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cancelamento ou suspensão de inscrição estadual de terceiro no cadastro",
        "oQueE": "Solicitação de suspensão ou cancelamento de inscrição estadual, protocolado pelo PROPRIETÁRIO e/ou por TERCEIRO interessado, em razão da perda do direito de utilização da área (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão de registro e depósito convênio 190 - emissão",
        "oQueE": "Solicitar a emissão de Certidão de Registro e Depósito dos atos instituidores dos benefícios e incentivos fiscais, na forma prescrita pela cláusula segunda, I, e terceira, I, do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão circunstanciada de débitos estaduais)",
        "oQueE": "Solicitar a certidão circunstanciada de débitos estaduais (certidão positiva com efeito de negativa), que pode ser emitida quando existem débitos que ainda não venceram, estão g..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão negativa de débitos estaduais)",
        "oQueE": "Emitir, pela internet e sem custo, a certidão negativa de débitos estaduais, que é um documento que comprova que a pessoa física ou jurídica não possui débitos ou irregularidade..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Certidão tributária estadual - emissão (certidão positiva de débitos estaduais)",
        "oQueE": "Solicitar a certidão positiva de débitos estaduais, que é o documento que informa a existência de débitos exigíveis (que podem ser cobrados pelo Estado) ou outras pendências fis..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Comprovação de destinação de parte do IRPJ ao Fundo Estadual para a Infância e a Adolescência (FEINAD/MS) ou ao Fundo Estadual dos Direitos da Pessoa Idosa (FEDPI/MS)",
        "oQueE": "Este serviço constitui o canal oficial para que o contribuinte, beneficiário de incentivos fiscais previstos na legislação sul-mato-grossense, realize a comprovação da destinaçã..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Comunicação pelo contabilista das hipóteses de que trata o inciso III do artigo 1º da Portaria/SAT nº 1.834/2007",
        "oQueE": "Comunicação realizada pelo contabilista responsável sempre que ocorrer uma ou mais das hipóteses elencadas no inciso III do artigo 1º da Portaria/SAT nº 1.834/2007 ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Conhecimento de transporte eletrônico (CT-e), modelo 57 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Conhecimento de Transporte Eletrônico (CT-e), modelo 57. O Conhecimento de Transporte Eletrônico (CT-e), modelo 57, é um documento de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Conhecimento de transporte eletrônico (CT-e), modelo 57 e Conhecimento de transporte eletrônico para outros serviços (CT-e OS), modelo 67 - cancelamento extemporâneo",
        "oQueE": "Solicitação de pedido de cancelamento extemporâneo, após decorrido o prazo de cento e sessenta e oito horas, contado do momento em que foi concedida a Autorização de Uso do CT-e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Conhecimento de transporte eletrônico para outros serviços (CT-e OS), modelo 67 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Conhecimento de Transporte Eletrônico para Outros Serviços (CT-e OS), modelo 67. O Conhecimento de Transporte Eletrônico para Outros S..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Consulta tributária",
        "oQueE": "Prestação de orientação oficial visando ao cumprimento da legislação tributária."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Contestação de despacho de descumprimento de obrigações socioeconômicas - Resolução/SEFAZ nº 3.475/2025",
        "oQueE": "Canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 apresente recurso administrativo à notificação da Secretaria..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Contribuições previstas na Lei Complementar nº 93/2001 (FADEFE e PRÓ-DESENVOLVE) - pedido de parcelamento de débito (PPD)",
        "oQueE": "Solicitação de parcelamento para os débitos das contribuições previstas nos arts. 23-A, § 2º, inciso I; 24-C, 24-D e 27-A a 27-C na Lei Complementar nº 93/2001 , na forma dispos..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Concessão de credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com a suspensão da cobrança do ICMS, nos te..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para recebimento de soja e milho em grãos e arroz em casca para depósito, remetidos por produtores rurais do Estado de Mato Grosso, com a suspensão da cobrança do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de produtos agrícolas para depósito situado em Goiás, com a suspensão da cobrança do ICMS, nos termos do Protocolo ICMS 10/98..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de soja e milho em grãos e arroz em casca , de produção agrícola do remetente, para depósito situado em Mato Grosso, com a su..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Crédito Outorgado - Análise dos investimentos necessária para a fruição do benefício de crédito outorgado previsto em Termo de Acordo - Lei Complementar nº 93/2001",
        "oQueE": "Este serviço é um canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 comprove, de forma espontânea ou mediante..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Débito fiscal - baixa de notificação CRD",
        "oQueE": "Solicitar a baixa de notificação de cobrança de ICMS quando o débito já foi pago ou parcelado, mas ainda aparece em aberto no sistema, ou no caso de pagamento feito de forma equ..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração anual de produtor (DAP) - pedido de cópia",
        "oQueE": "Solicitar cópia de Declaração Anual de Produtor (DAP)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração de compras para aquisições interestaduais de materiais de construção por consumidor final não contribuinte do ICMS ou por empresas do ramo da construção civil",
        "oQueE": "Solicitar, antes da entrada dos materiais no território do Estado de MS , a emissão da Declaração de Compras para fins de registro dos dados contidos nas notas fiscais de aquisi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Declaração de Substituição Tributária, Diferencial de Alíquotas e Antecipação (DeSTDA) - entrega e retificação",
        "oQueE": "Contribuinte do ICMS optante pelo Simples Nacional, inscrito no MS, enviar as informações, mensalmente e em meio digital, dos resultados da apuração do ICMS referentes à Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Demonstrativos de PPD de ICMS e ITCD",
        "oQueE": "Solicitar demonstrativo de pedidos de parcelamentos e reparcelamentos de ICMS e ITCD no âmbito da SEFAZ/MS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Desvincular CAR - Cadastro Ambiental Rural por transmissão de propriedade",
        "oQueE": "Solicitar a desvinculação do Cadastro Ambiental Rural - CAR na inscrição estadual do transmitente a qual está vinculado no cadastro da SEFAZ, quando este não tenha providenciado..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Documento de arrecadação do estado de Mato Grosso do Sul (DAEMS) - emissão",
        "oQueE": "Solicitar a emissão de DAEMS - Documento de Arrecadação do Estado de Mato Grosso do Sul"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Documento de arrecadação do estado de Mato Grosso do Sul (DAEMS) - retificação ou apostilamento",
        "oQueE": "Solicitar alteração de dados incorretos do Documento de Arrecadação Estadual (DAEMS) emitido e pago."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Documentos fiscais - inutilização por vencimento ou não utilização",
        "oQueE": "Solicitar a inutilização de documentos fiscais vencidos ou não utilizados."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "e-Fazenda - cadastro",
        "oQueE": "Realizar o cadastramento na plataforma eletrônica e-Fazenda , disponibilizada na área de acesso restrito dos endereços eletrônicos www.ms.gov.br e www.sefaz.ms.gov.br . O e-Faze..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Escrituração Fiscal Digital (EFD) ou notificação por falta de pagamento de ICMS apurado."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - credenciamento voluntário",
        "oQueE": "Serviço disponibilizado aos contribuintes alcançados pelo § 2º ao art. 4º do Subanexo XIV ao Anexo XV ao Regulamento do ICMS que não são obrigados à entrega de arquivos (EFD) e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - dispensa de entrega",
        "oQueE": "Solicitar a dispensa de entrega de Escrituração Fiscal Digital (EFD) em virtude de não se incluir nas regras de obrigatoriedade."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - entrega",
        "oQueE": "Enviar o arquivo digital da EFD, sendo que o mesmo será gerado pelo contribuinte de acordo com as especificações do leiaute definido em Ato COTEPE e conterá a totalidade das inf..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Escrituração fiscal digital (EFD) - retificação",
        "oQueE": "Apresentar o arquivo digital de retificação da Escrituração Fiscal Digital para substituição integral do arquivo digital da EFD regularmente recebido pela administração tributária."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Exclusão ou inclusão de pessoa no quadro societário de empresa inscrita no CCE",
        "oQueE": "Exclusão de pessoa do quadro societário da empresa, quando esta não solicitar a alteração Inclusão de pessoa, que representa legalmente a empresa no QSA, quando esta não constar..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "FADEFE/MS (Fundo de apoio ao desenvolvimento econômico e de equilíbrio fiscal do estado) - baixa de notificação de débito",
        "oQueE": "Solicitar a baixa de notificação de cobrança do FADEFE - Equilíbrio Fiscal, código 928, cujo débito esteja quitado, sem que o sistema tenha efetuado a baixa automaticamente. Obs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fale Conosco",
        "oQueE": "O Fale Conosco é um canal de relacionamento que possui o intuito de orientar o consulente (contribuinte ou não) a solucionar dúvidas pertinentes à legislação tributária."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fornecimento de dados e documentos fiscais do próprio requerente",
        "oQueE": "Solicitação para fornecimento de dados e documentos fiscais do próprio REQUERENTE (exceto arquivos xml), tais como: documentos fiscais eletrônicos ou físicos ( Nota Fiscal, Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "FUNDERSUL - autorização para depósito da contribuição à entidade que tenha por objetivo atividades tendentes à defesa animal ou vegetal",
        "oQueE": "Solicitar autorização para depósito da contribuição do FUNDERSUL a entidade que tenha por objetivo atividades tendentes à defesa sanitária animal ou vegetal"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fusão/Incorporação (art. 13-A e 13-B do Anexo V ao Regulamento do ICMS)",
        "oQueE": "Ficha informativa sobre os procedimentos necessários para assumir a condição de beneficiário dos regimes especiais e das autorizações específicas vigentes dos estabelecimentos d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de informação e apuração do ICMS benefícios fiscais (GIA-BF) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa quando omisso na apresentação da Guia de Informação e Apuração do ICMS Benefícios Fiscais (GIA-BF), após entrega da declaração e pagament..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de trânsito suspensa - prorrogação do prazo de suspensão",
        "oQueE": "É a disponibilização de canais de acesso direcionados ao cidadão/contribuinte para protocolo e apreciação de solicitação de prorrogação de prazo de suspensão de Guia de Trânsito..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia nacional de informação e apuração do ICMS substituição tributária (GIA-ST) - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de Guia Nacional de Informação e Apuração do ICMS Substituição Tributária (GIA-ST)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia para liberação de mercadoria estrangeira sem comprovação do recolhimento do ICMS (GLME) - análise e concessão de visto",
        "oQueE": "Concessão de visto em Guia para Liberação de Mercadoria Estrangeira sem Comprovação do Recolhimento do ICMS - GLME, mediante constatação do atendimento das condições necessárias..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - autorização para transferência de saldo credor acumulado para estabelecimento",
        "oQueE": "Solicitar a autorização para transferência de saldo credor acumulado do ICMS entre estabelecimentos de um mesmo titular ou para terceiros, conforme previsto no artigo 68 do Regu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - cálculo para recolhimento espontâneo (Normal, Transporte, Equalização e Substituição Tributária)",
        "oQueE": "Solicitar o cálculo do valor do ICMS para recolhimento espontâneo (Normal, Transporte, Equalização e Substituição Tributária)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - compensação centralizada de saldos devedores e credores",
        "oQueE": "Solicitar compensação centralizada de saldos devedores e credores de ICMS por contribuinte que possui mais de um estabelecimento no Estado."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - comunicação da apropriação de crédito nos termos do art. 17, § 3º, II, “a”, da Resolução/SEFAZ nº 3.426/2025 (limite de 300 Uferms)",
        "oQueE": "Comunicação, por parte do contribuinte obrigado à EFD, da utilização de crédito fiscal, limitado a 300 Uferms, sujeito a posterior homologação, decorrente de restituição de indé..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - comunicação de registro extemporâneo de crédito fiscal",
        "oQueE": "Comunicação de registro extemporâneo de crédito de ICMS, nos termos do art. 56 do Regulamento do ICMS ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Diferencial de Alíquotas - dispensa da cobrança na aquisição de maquinário por industrial ou produtor rural",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS Diferencial de Alíquotas na aquisição interestadual de bem destinado ao ativo fixo de estabelecimento industrial ou agropecuário"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS Equalização Simples Nacional, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, ap..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Equalização Simples Nacional - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS Equalização Simples Nacional ou a reconsideração da decisão..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Estimativa - revisão de valores ou reconsideração do enquadramento",
        "oQueE": "Apresentar pedido de revisão de valores ou de reconsideração, sem efeito suspensivo, do enquadramento no Regime de Estimativa, em até cinco dias contados da notificação do valor..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de crédito de equivalência de exportação",
        "oQueE": "Solicitar a inclusão, em sistema próprio, do crédito correspondente aos valores recolhidos a título de antecipação (Equivalência Exportação) para compensar débitos relativos a o..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de crédito fiscal de contribuinte inscrito no cadastro do comércio, indústria e serviços (CCIS)",
        "oQueE": "Solicitar a homologação de crédito fiscal em favor de contribuinte inscrito no Cadastro de Comércio, Indústria e Serviços, que promova saídas interestaduais e cujo ICMS é exigid..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - homologação de transferência de crédito realizada por distribuidora de combustíveis",
        "oQueE": "Solicitar a homologação de transferência de saldo credor de ICMS, realizada por distribuidora de combustíveis localizada no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens de uso exclusivo em processo de geração e de transmissão de sons e imagens ou de composição e impressão jornalística",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de bens de uso exclusivo em processo de geração e de transmissão de sons e imagens ou de composição e impressão jorn..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de bens de uso exclusivo em processo de produção industrial ou agropecuária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - dispensa da cobrança de ICMS sobre a importação de bens, por estabelecimentos não industriais ou industriais não contribuintes, de uso em funções específicas, relacionadas com as atividades do importador",
        "oQueE": "Solicitar a dispensa do pagamento de ICMS sobre a importação de máquina, equipamento técnico e/ou partes e peças para sua montagem, sem similares produzidos no país, de uso em f..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS Importação - inclusão de item na listagem de matéria-prima/mercadoria para fins de diferimento do imposto - benefício previsto em Termo de Acordo",
        "oQueE": "Solicitar a inclusão de itens na listagem de matérias-primas/mercadorias autorizadas para fins de diferimento do ICMS Importação, benefício concedido por Termo de Acordo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - isenção sobre operações de importação de bens destinados à pesquisa científica e tecnológica",
        "oQueE": "Solicitar a isenção do ICMS incidente sobre as importações de aparelhos, máquinas, equipamentos, instrumentos, suas partes, peças de reposição, acessórios, matérias-primas, prod..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - suspensão da cobrança do imposto nas operações sob regime especial aduaneiro de admissão temporária",
        "oQueE": "Solicitar a suspensão da cobrança do ICMS sob regime especial aduaneiro de admissão temporária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo de passageiros para taxista",
        "oQueE": "Solicitar a isenção do ICMS nas aquisições de automóveis novos de passageiros equipados com motor de cilindrada não superior a dois mil centímetros cúbicos (2.0l), movidos a com..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência física ou visual",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículo automotor novo, quando adquirido por pessoas portadoras de deficiência física ou visual, diretamente ou por inte..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de automóvel novo para portadores de deficiência mental, síndrome de down ou autista",
        "oQueE": "Solicitar a concessão de isenção do ICMS na aquisição de veículo automotor novo quando adquirido por pessoas portadoras de deficiência mental severa ou profunda, síndrome de Dow..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção na aquisição de motocicleta nova para mototaxista ou moto-entregador",
        "oQueE": "Solicitar a isenção do pagamento do ICMS na aquisição de veículos motorizados de duas rodas (motocicleta), quando destinados a pessoas físicas que exercem atividades de mototáxi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção para as contas de energia elétrica, telefone e internet de templos religiosos de qualquer culto - concessão, renovação ou revogação",
        "oQueE": "Solicitar a concessão, renovação ou revogação da isenção do ICMS para as contas de serviços públicos estaduais próprios, delegados, terceirizados ou privatizados de energia elét..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - isenção sobre mercadorias vendidas à Administração Pública Estadual",
        "oQueE": "Solicitar a isenção do ICMS nas aquisições com o objetivo de atender especificamente contrato de fornecimento celebrado entre o destinatário e órgãos da Administração Pública Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - liberação da entrada de mercadorias procedentes de outras unidades da federação e destinadas à demonstração em feiras e eventos realizados no estado, com suspensão da cobrança do ICMS",
        "oQueE": "Solicitar a liberação da entrada de mercadorias procedentes de outras Unidades da Federação destinadas à demonstração em feiras e eventos realizados no Estado, com suspensão da..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - prorrogação de prazo para retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do imposto",
        "oQueE": "Solicitar prorrogação de prazo para o retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do ICMS desde que o pedido de prorrogação seja aprese..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural para fim específico de irrigação",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural, para fim específico de irrigação, a base de cálculo do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - redução da base de cálculo nas operações internas com energia elétrica destinada a produtor rural que exerça a atividade de avicultura de corte",
        "oQueE": "Solicitar a redução da base de cálculo do ICMS nas operações internas com energia elétrica destinada a propriedade rural cuja atividade seja avicultura de corte (galináceos). A..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - solicitação, por empresa do Simples Nacional, de registro de crédito de que trata o art. 19, da Resolução/SEFAZ nº 3.026/2025 (limite de 300 Uferms)",
        "oQueE": "Solicitação, por parte do contribuinte enquadrado no Simples Nacional, nos termos da Lei Complementar Federal nº 123/2006 , de registro de crédito fiscal, limitado a 300 Uferms,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST - homologação de crédito por venda de combustível ao estado do Mato Grosso do Sul",
        "oQueE": "Solicitar homologação de crédito por venda de combustíveis ao Estado do MS."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST - pedido de ressarcimento - Subanexo II ao Anexo III do RICMS",
        "oQueE": "Solicitar ressarcimento do ICMS relativo a operações subsequentes, retido ou pago por antecipação pelo regime de substituição tributária, nas hipóteses em que a base de cálculo..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 1ª revisão de cobrança - módulo Informações Fiscais",
        "oQueE": "Solicitação de revisão de apuração da cobrança do ICMS ST-SN, realizada pela SEFAZ/MS, na forma prevista na Resolução/SEFAZ nº 3.033/2019 , exclusivamente em formato eletrônico,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - 2ª revisão da cobrança - sistema e-SAP",
        "oQueE": "Solicitação de nova revisão da apuração do ICMS ST-SN, realizada pela SEFAZ/MS, ou a reconsideração da decisão proferida pelas autoridades competentes, após encerrada a única so..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS ST-SN - revisão na hipótese de o contribuinte não ser o destinatário da mercadoria",
        "oQueE": "Solicitação, na hipótese de o contribuinte não ser o destinatário da mercadoria , de nova revisão da cobrança do ICMS ST-SN ou a reconsideração da decisão proferida pelas autori..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Impugnação ao Índice de Participação dos Municípios - IPM",
        "oQueE": "Apresentar impugnação ao índice de participação dos municípios (IPM) publicado no diário oficial do Estado de Mato Grosso do Sul através de Resolução/SEFAZ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - alegação/comunicação de venda de veículo",
        "oQueE": "Use este serviço para transferir a responsabilidade do pagamento do IPVA para o comprador, quando você vende um veículo."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - apreensão",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de apreensão do veículo. O cancelamento pode ser relativo inclusive à parte propor..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - inutilização ou perecimento",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de inutilização ou perecimento do veículo. O cancelamento pode ser relativo inclus..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - cancelamento de débito - roubo, furto ou apropriação indébita",
        "oQueE": "Use este serviço para pedir o cancelamento de débitos do IPVA posteriores à data da ocorrência de roubo, furto ou apropriação indébita do veículo. O cancelamento pode ser relati..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - compensação de pagamento indevido",
        "oQueE": "Use este serviço para pedir a compensação do valor referente ao Imposto sobre a Propriedade de Veículos Automotores (IPVA) pago em duplicidade, indevidamente ou em valor maior q..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - consulta de débito",
        "oQueE": "Este serviço é de autoatendimento para a consulta de débitos do IPVA, sendo que essa consulta pode ser feita no site da SEFAZ/MS ou na plataforma de serviços e-Fazenda"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - impugnação do lançamento",
        "oQueE": "Use este serviço para pedir a revisão do valor do IPVA lançado ou de penalidade aplicada. Este serviço é relativo apenas ao valor do IPVA ou às multas relativas ao IPVA, não se..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - imunidade",
        "oQueE": "Use este serviço para solicitar o reconhecimento da IMUNIDADE do IPVA para veículos automotores integrantes do patrimônio dos seguintes entes : União, os Estados, o Distrito Fed..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção 2022 - Decreto nº 15.703/2021",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para o exercício de 2022 caso ela não tenha recebido o benefício automaticamente...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção geral (exceto táxi)",
        "oQueE": "Use este serviço para pedir a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para os seguintes veículos: Máquina agrícola e de terraplenagem, trator e aeronave..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - isenção - táxi",
        "oQueE": "Utilize este serviço para solicitar a isenção do Imposto sobre Propriedade de Veículo Automotor (IPVA) para veículo rodoviário autorizado a operar como táxi ou moto-táxi , com c..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - leilão - desvinculação de débitos anteriores - Administração Pública e leiloeiros oficiais",
        "oQueE": "Use este serviço para solicitar a desvinculação dos débitos do IPVA anteriores à aquisição de veículo automotor adquirido em leilão , tendo como comitente a Administração Públic..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - leilão - desvinculação de débitos anteriores - particulares",
        "oQueE": "Use este serviço para solicitar a desvinculação dos débitos do IPVA anteriores à aquisição de veículo automotor adquirido em leilão , tendo como comitente a Administração Públic..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - redução da base de cálculo do IPVA para veículos de Frotista",
        "oQueE": "Use este serviço para solicitar a redução na base de cálculo do IPVA de veículos de Frotista (pessoa, física ou jurídica, que possua ao menos 30 veículos tributáveis, registrado..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - redução para pessoa com deficiência (PcD)",
        "oQueE": "Use este serviço para solicitar a redução do IPVA de veículo para uso de pessoa com deficiência (PcD), conforme definições no Regulamento. Considera-se PcD aquela com deficiênci..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - restituição de pagamento indevido",
        "oQueE": "Use este serviço para pedir a restituição do valor referente ao Imposto sobre a Propriedade de Veículos Automotores (IPVA) pago em duplicidade, indevidamente ou em valor maior q..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - troca de veículo - redução para pessoa com deficiência (PCD)",
        "oQueE": "Use este serviço para solicitar a transferência do benefício de redução do IPVA para pessoa com deficiência (PCD), de um veículo para outro, relacionado ao mesmo beneficiário. O..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - veículo recebido em sorteio da Administração Pública",
        "oQueE": "Use este serviço para regularizar o IPVA devido em casos de veículos recebidos em virtude de sorteio efetuado pela Administração Pública."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - concessão de desconto de 30% no pagamento do ITCD incidente sobre doações de bens e direitos",
        "oQueE": "Solicitar cálculo do Imposto sobre Transmissão Causa Mortis e Doação (ITCD) para doações de bens ou direitos, com a aplicação do desconto de 30% estabelecido pela Lei nº 6.472/2..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - pedido de parcelamento de débito (PPD)",
        "oQueE": "Solicitação de parcelamento de débito relativo ao ITCD Causa Mortis e Doações. O pedido deve ser assinado por todos os herdeiros/donatários ou procurador com poderes específicos..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de alteração de e-mail vinculado à declaração de ITCD",
        "oQueE": "Solicitar a alteração do e-mail vinculado à Declaração de ITCD já enviada para análise, seja pelo fato de não ter mais acesso ao e-mail informado, seja pelo fato de ter havido a..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de atualização de DAEMS referente à Declaração de ITCD",
        "oQueE": "Solicitar a atualização do DAEMS vinculado à Declaração de ITCD, em face de já ter ocorrido o seu vencimento."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de cálculo do imposto nas doações de quaisquer bens e direitos",
        "oQueE": "Solicitar o cálculo do Imposto sobre Doação de quaisquer bens ou direitos (ITCD)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de cálculo do imposto sobre inventário (judicial e extrajudicial) e arrolamento",
        "oQueE": "Solicitar o cálculo do Imposto sobre Transmissão \"Causa Mortis\" (ITCD)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de cancelamento de declaração de ITCD",
        "oQueE": "Solicitar cancelamento de Declaração de ITCD já enviada para análise."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção coletiva",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis ou Doação para diversos beneficiários de uma só vez, relativo a programas habitacionais ou de regularização fundiária, dispensando a neces..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção para imóvel rural",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis para imóvel rural cuja área total, na matrícula, seja inferior ao módulo da região e seja destinado para herdeiro ou para o cônjuge sobrev..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção para imóvel urbano",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis para imóvel urbano, cuja construção seja de padrão popular ou inferior , que sirva de habitação para herdeiro ou para o cônjuge sobrevivente."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de isenção pelo valor da transmissão",
        "oQueE": "Solicitar isenção do ITCD Causa Mortis ou Doação, quando o valor da transmissão não ultrapassar R$ 100.000,00 (cem mil reais), por beneficiário (donatário ou herdeiro)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de não incidência",
        "oQueE": "Solicitar a emissão de declaração de não incidência do ITCD Causa Mortis ou Doação no caso específico."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de remissão",
        "oQueE": "Solicitar o reconhecimento de remissão do ITCD Causa Mortis ou Doação, no caso específico. A remissão constitui perdão do débito tributário, e só pode ser feito por meio de lei...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de restituição/compensação de ITCD indevido",
        "oQueE": "Solicitar a compensação de valor pago indevidamente em Declaração de ITCD com o valor devido em outra Declaração de ITCD, desde que se trate dos mesmos sujeitos passivos (herdei..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de retificação de declaração de ITCD",
        "oQueE": "Solicitar alteração em Declaração de ITCD já enviada para análise."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Levantamento ou devolução de garantia oferecida para: obtenção e renovação de regime especial ou autorização específica; cadastro como distribuidora de combustíveis estabelecida em MS ou como contribuinte substituto tributário de MS",
        "oQueE": "Devolução de garantia vigente ou dentro do prazo de 365 dias após sua vigência (art. 17 e 18 do Subanexo Único ao Anexo V ao Regulamento do ICMS ) oferecida pelo contribuinte pa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Livros fiscais - autenticação",
        "oQueE": "Solicitar a autenticação dos seguintes livros fiscais: Apuração do ICMS, Registro de Entradas, Registro de Saídas, Registro de Inventário, Registro de Utilização de Documentos F..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Manifesto eletrônico de documentos fiscais (MDF-e), modelo 58 - cancelamento extemporâneo",
        "oQueE": "Solicitação de pedido de cancelamento extemporâneo, após decorrido o prazo de vinte e quatro horas, contado do momento em que foi concedida a Autorização de Uso do MDF-e, de Man..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Mercadoria recolhida para leilão - entrega ou liberação",
        "oQueE": "Solicitar liberação e entrega de mercadoria recolhida para leilão."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Microempreendedor Individual (MEI) - reconsideração do ato de desenquadramento do SIMEI",
        "oQueE": "Solicitar a reconsideração do ato de desenquadramento de Microempreendedor Individual."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Microempresa Simples Nacional - reconsideração da análise para enquadramento no benefício do Decreto nº 16.177/2023",
        "oQueE": "Trata-se de pedido de reconsideração da análise para enquadramento no benefício previsto pelo Decreto nº 16.177/2023 . Considerando que a habilitação cadastral para usufruir do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - cancelamento dentro do prazo de 144h",
        "oQueE": "Solicitar, em prazo não superior a cento e quarenta e quatro horas a partir da emissão, o cancelamento da Nota Fiscal Avulsa Eletrônica (NFA-e)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - cancelamento extemporâneo",
        "oQueE": "Solicitar o cancelamento extemporâneo (após decorrido o prazo de cento e quarenta e quatro horas, contado do momento em que foi concedida a Autorização de Uso da NFA-e) de Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal avulsa eletrônica (NFA-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal Avulsa Eletrônica (NFA-e) de expedição exclusiva das repartições fiscais do Estado, para ser utilizada nas seguintes hipóteses: Saídas de mercadorias prom..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de consumidor eletrônica (NFC-e), modelo 65 - credenciamento e CSC",
        "oQueE": "Solicitar o credenciamento para a emissão de Nota Fiscal de Consumidor Eletrônica (NF-e), modelo 65. A Nota Fiscal de Consumidor Eletrônica (NFC-e), modelo 65, é o documento emi..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de empresas - cancelamento por motivo de extravio",
        "oQueE": "Solicitar o cancelamento de Nota Fiscal por motivo de extravio."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de energia elétrica eletrônica (NF3-e), modelo 66 - credenciamento",
        "oQueE": "Solicitar o credenciamento para emissão de Nota Fiscal de Energia Elétrica Eletrônica (NF3-e), modelo 66. A Nota Fiscal de Energia Elétrica Eletrônica (NF3-e), modelo 66, é o do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - baixa de pendência de NFP-e de remessa com suspensão/não-incidência do ICMS, se comprovado o retorno da mercadoria",
        "oQueE": "Solicitar a baixa da pendência da NFP-e emitida com suspensão ou não-incidência do ICMS, desde que comprovado que a mercadoria retornou dentro do prazo determinado pela legislaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento dentro do prazo de 144h",
        "oQueE": "Solicitar, em prazo não superior a cento e quarenta e quatro horas, o cancelamento da Nota Fiscal de Produtor Eletrônica (NFP-e)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento extemporâneo",
        "oQueE": "Solicitar o cancelamento extemporâneo (após decorrido o prazo de cento e quarenta e quatro horas, contado do momento em que foi concedida a Autorização de Uso da NFP-e) de Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - cancelamento extemporâneo (não autorizado on-line)",
        "oQueE": "Solicitar o cancelamento extemporâneo (após decorrido o prazo de cento e quarenta e quatro horas, contado do momento em que foi concedida a Autorização de Uso da NFP-e) de Nota..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - desbloqueio para emissão",
        "oQueE": "Solicitar o desbloqueio para emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em virtude de não quitação do débito ensejador do bloqueio, cujo pagamento de DAEMS tenha sido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) em substituição à Nota Fiscal de Produtor (NFP), modelo 4. Observações: Considera-se Nota Fiscal de Produtor Eletrônica (NF..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) / Nota fiscal avulsa eletrônica (NFA-e) - emissão de carta de correção eletrônica (CC-e)",
        "oQueE": "Emissão de Carta de Correção Eletrônica para notas emitidas no sistema da SEFAZ/MS (NFP-e/NFA-e). Observação: após a emissão de uma Nota Fiscal de Produtor Eletrônica (NFP-e) ou..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - transferência interestadual de mercadorias - emissão",
        "oQueE": "Emissão de Nota Fiscal de Produtor Eletrônica (NFP-e) quando se tratar de remessa de bens ou mercadorias entre estabelecimentos de mesma titularidade (transferências), sem a inc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - desbloqueio para impressão de formulário",
        "oQueE": "Solicitar o desbloqueio para impressão de formulário Nota Fiscal de Produtor, Série Especial (NFP/SE) em virtude de não quitação do débito ensejador do bloqueio, cujo pagamento..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - impressão de formulário",
        "oQueE": "Solicitar o fornecimento de talão de Nota Fiscal do Produtor, Série Especial (NFP/SE)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor, série especial (NFP/SE) - prestação de contas de notas emitidas e não baixadas automaticamente ou canceladas",
        "oQueE": "Prestar contas de Nota Fiscal de Produtor, Série Especial (NFP/SE) emitidas e não baixadas automaticamente ou canceladas."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal eletrônica (NF-e), modelo 55 - cancelamento extemporâneo",
        "oQueE": "Solicitação de pedido de cancelamento extemporâneo de Nota Fiscal Eletrônica - NF-e, modelo 55, após decorrido o prazo de cento e quarenta e quatro horas contado do momento em q..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal eletrônica (NF-e), modelo 55 - credenciamento",
        "oQueE": "Solicitar credenciamento para emissão de Nota Fiscal Eletrônica (NF-e), modelo 55. A Nota Fiscal Eletrônica (NF-e), modelo 55, é o documento emitido e armazenado eletronicamente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal eletrônica (NF-e), modelo 55 - pedido de reabilitação para emissão",
        "oQueE": "Pedido de reabilitação para emissão de Nota Fiscal Eletrônica (NF-e), modelo 55."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal fatura de serviços de comunicação eletrônica (NFCom) - credenciamento voluntário",
        "oQueE": "Solicitação de credenciamento para a emissão de Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom). A NFCom, modelo 62, é o documento emitido e armazenado eletroni..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal - revalidação do prazo de validade",
        "oQueE": "Solicitar a revalidação do prazo de validade da Nota Fiscal, quando houver a efetiva saída."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de aquisição de formulário de segurança (PAFS)",
        "oQueE": "Solicitação, pelo contribuinte, para que possa adquirir formulário de segurança a fim de utilizá-lo quando houver necessidade de operar em contingência no uso da NF-e ou CT-e."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) de IPVA - exercícios anteriores (autoparcelamento)",
        "oQueE": "Parcelamento de débitos de IPVA, referentes a exercícios anteriores ao vigente, não inscritos em dívida ativa e realizado pelo próprio contribuinte, mediante acesso ao módulo Au..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de parcelamento de débito (PPD) relativo ao ICMS - autoparcelamento",
        "oQueE": "Parcelamento de débitos de ICMS, não inscritos em dívida ativa, realizado pelo próprio contribuinte, mediante acesso ao módulo Autoparcelamento , no e-Fazenda , na Internet."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de reconsideração de despacho de indeferimento de atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a reconsideração do despacho de indeferimento proferido na análise do Atestado de Inexistência no mercado interno do Estado de bem idêntico ou similar para fins de dif..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pedido de repactuação de incentivos fiscais - art. 24-F da Lei Complementar nº 93/2001",
        "oQueE": "Solicitação de repactuação dos Termos de Acordo concedidos com fulcro na Lei Complementar nº 93/2001 , na Lei Estadual nº 4.049/2011 , na Lei Complementar Federal nº 160/2017 ,..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Pendências fiscais e/ou cadastrais - regularização",
        "oQueE": "Solicitar a regularização de pendências fiscais e/ou cadastrais detectadas pelo Sistema de Crédito Tributário (PNDFIS)"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Preço médio ponderado ao consumidor final (PMPF) e valor real pesquisado (VRP) - atualização da lista do preço médio ponderado e do valor real pesquisado",
        "oQueE": "Solicitar inclusão e/ou exclusão de mercadorias, alteração de valores e de especificações de produtos das listas denominadas de PMPF - Preço Médio Ponderado ao Consumidor Final..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PROAPE - reembolso em dinheiro do incentivo fiscal pago ao produtor rural",
        "oQueE": "Solicitação de reembolso, em dinheiro, do valor nominal relativo ao incentivo fiscal pago ao produtor rural no âmbito do Programa de Avanços na Pecuária de Mato Grosso do Sul (P..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PROAPE - transferência de valores relativos ao incentivo fiscal pago ao produtor rural",
        "oQueE": "Solicitar a transferência do valor nominal relativo ao incentivo fiscal pago ao produtor rural para outro estabelecimento, quando o contribuinte não possuir débitos suficientes..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - aditamento de razões pelo sujeito passivo",
        "oQueE": "Aditamento de razões pelo sujeito passivo, conforme previsto no art. 27, II, b; art. 76, § 1°, II, § 3°, II e art. 84, parágrafo único, todos da Lei nº 2.315/2001 ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de agravo em face da não admissibilidade da impugnação pela 1ª instância",
        "oQueE": "Recebimento e apreciação de Agravo pelo chefe da Unidade de Consultas e Julgamento (UCJUL) ou pelo julgador que negou a admissibilidade da impugnação e encaminhamento ao Tribuna..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de pedido de esclarecimento em face do resultado de julgamento em 1ª ou 2ª instância",
        "oQueE": "Recebimento e julgamento de pedido de esclarecimento em face do resultado de julgamento em 1ª ou 2ª instância (Recurso Voluntário ou Recurso Especial), na forma estabelecida na..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de recurso especial ao Tribunal Administrativo Tributário (TAT) em face de decisão proferida em 2ª instância",
        "oQueE": "Recebimento, análise de admissibilidade de Recurso Especial interposto em face de decisão de 2ª instância de Processo Administrativo Tributário e, tendo sido admitido, julgado e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de recurso voluntário ao Tribunal Administrativo Tributário (TAT) em face de decisão proferida em 1ª instância",
        "oQueE": "Recebimento e julgamento de Recurso Voluntário interposto em face de decisão de 1ª instância de Processo Administrativo Tributário, na forma estabelecida na Lei nº 2.315/2001 ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - pedido de esclarecimento em face da decisão de admissibilidade de recurso especial proferida pelo presidente do Tribunal Administrativo Tributário",
        "oQueE": "Recebimento e julgamento de pedido de esclarecimento em face admissibilidade (admitindo ou não) de recurso especial proferida pelo presidente do Tribunal Administrativo Tributár..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - solicitação de vista, cópias ou certidões",
        "oQueE": "Concessão de vista aos autos processuais na repartição ou no órgão em que se encontrem e fornecimento de cópias ou certidões de Processo Administrativo Tributário."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Procuração - comunicação de cancelamento",
        "oQueE": "Comunicar o cancelamento ou revogação de procuração"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Procuração digital para acesso ao e-Fazenda - cadastro de procurador/representante legal em caso de incapacidade, espólio e demanda judicial",
        "oQueE": "Solicitar o cadastro de procuração digital para que outra pessoa, responsável legal por menor de idade (incapaz) e representante legal do espólio (inventariante), acesse o e-Faz..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "PRÓ-DESENVOLVE (Fundo Estadual Pró-Desenvolvimento Econômico) - baixa de notificação de débito",
        "oQueE": "Solicitar a baixa de notificação de cobrança da contribuição ao Fundo Estadual Pró-Desenvolvimento Econômico (PRÓ-DESENVOLVE), códigos de recolhimento 935 e 936, cujo débito est..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Prorrogação de atestado de inexistência para fins de diferimento do ICMS diferencial de alíquotas e de importação na aquisição de máquinas e equipamentos industriais - Termo de Acordo",
        "oQueE": "Solicitar a prorrogação do prazo de vigência de Atestado de Inexistência no mercado interno do Estado de bem idêntico ou similar para fins de diferimento do ICMS na modalidade d..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Providência cadastral para apreciação da Superintendência",
        "oQueE": "Solicitação de inscrição, suspensão, reativação, alteração, etc., no Cadastro de Contribuinte Estadual (CCE), bem como os pedidos de reconsideração e/ou revisão desses, que por..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - concessão ou renovação de tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de transporte e na armazenagem de etanol combustível pelo sistema dutoviário",
        "oQueE": "Solicitar a concessão ou renovação do Regime Especial para ter tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de tran..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento mensal do ICMS diferencial de alíquota devido na entrada de mercadorias destinadas ao uso, consumo ou ativo fixo (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher mensalmente o ICMS Diferenc..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período mensal, do ICMS devido nas saídas interestaduais de soja e farelo de soja - indústrias de óleo de soja (art. 4º, I, a do Anexo V ao RICMS, c/c art. 74, III do RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, a do Anexo V ao Regulamento do ICMS , combinado com o art. 74, III do Regulamento do ICMS , que permite a dilatação de praz..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS ST devido na entrada de mercadorias no estado - concessionárias de veículos ou máquinas agrícolas (art. 4º, I, b do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS ST devido..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - dilatação de prazo para pagamento, por período quinzenal, do ICMS substituição tributária devido na entrada de mercadorias no estado de MS (art. 4º, I, b do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, I, b do Anexo V ao Regulamento do ICMS , que permite a dilatação de prazo para apurar e recolher quinzenalmente o ICMS Substit..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - frigorífico de outra UF - cadastro como substituto tributário responsável pelo pagamento da diferença de peso ou preço - frigoríficos do estado de São Paulo (Protocolo ICMS 03/88)",
        "oQueE": "Cadastro de frigorífico do Estado de São Paulo como substituto tributário para que se responsabilize pelo recolhimento do ICMS incidente sobre a diferença a maior de peso ou pre..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005)",
        "oQueE": "Concessão de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de exportações..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - frigoríficos",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos industrializados ou semielaborados (Decreto nº 11.803/2005) - indústrias de combustíveis e usinas de açúcar e álcool",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que consiste na permissão para a realização de operações de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura, inclusive algodão em pluma, exceto soja e milho (Decreto nº 11.803/2005)",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - operações de exportação, saídas com o fim específico de exportação e remessas para formação de lote de produtos in natura soja e milho em grãos (Decreto nº 11.803/2005) - cerealista/comercializador de soja e/ou milho",
        "oQueE": "Concessão ou renovação de Regime Especial de controle e fiscalização, previsto no art. 3º do Decreto nº 11.803/2005 , que permite realizar operações de exportações e de saída co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial para facilitar o cumprimento de obrigação acessória (art. 4º, II do Anexo V ao RICMS)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 4º, II do Anexo V ao Regulamento do ICMS , facilitador do cumprimento de obrigação acessória, que consiste em: a) Autorização para..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - Ponta Porã (art. 5º-A do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação com o objetivo de estimular os estabelecimentos situados neste Estado, possuidores do Regime Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - PROEXPRP - programa de estímulo à exportação pelos portos do rio Paraguai (art. 1º, § único, inciso I do Decreto nº 14.426/2016)",
        "oQueE": "Celebração de Termo de Compromisso referente ao Programa de Estímulo à Exportação pelos Portos do Rio Paraguai, com o objetivo de estimular os estabelecimentos situados neste Es..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário do ICMS devido sobre autopeças adquiridas em outra Unidade da Federação - apenas para atacadistas/distribuidoras de autopeças (art. 4º, I, c, 4 do Anexo V ao RICMS e art. 5º do Decreto nº 14.383/2016)",
        "oQueE": "Concessão de Regime Especial, previsto no artigo 4º, I, c, 4 do Anexo V ao Regulamento do ICMS , para apurar e recolher o ICMS ST relativo a peças automotivas adquiridas em outr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - substituto tributário responsável pelo pagamento semanal do ICMS Transporte devido por transportadora desta ou de outra UF ou por transportador autônomo (Decreto nº 14.923/2018)",
        "oQueE": "Regime Especial para que o remetente da mercadoria assuma a responsabilidade, na condição de substituto tributário, pelo pagamento semanal do ICMS incidente nas prestações de se..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportadora conveniada por meio de Termo de Acordo para atuar como fiel depositária das mercadorias que transporta (Anexo XII ao RICMS)",
        "oQueE": "Concessão ou renovação de Regime Especial, previsto no art. 12 do Anexo XII ao Regulamento do ICMS , por meio de Termo de Acordo assinado entre a empresa transportadora e a Secr..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - transportador ferroviário deste estado apurar e recolher o ICMS transporte por período mensal (art. 50 do Anexo V ao RICMS, Ajuste SINIEF 19/89)",
        "oQueE": "Concessão de Regime Especial, previsto no art. 50 do Anexo V ao Regulamento do ICMS ( Ajuste SINIEF 19/89 ), para que a empresa concessionária de serviços de transporte ferroviá..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Registro especial e prévio das empresas optantes pelo Simples Nacional para realizar operações interestaduais com produtos do §3º do art. 1º da Resolução/SEFAZ nº 2.611/2015",
        "oQueE": "Concessão de autorização para registro especial e prévio de empresa enquadrada no regime de pagamento do ICMS previsto na Lei Complementar Federal nº 123/2006 (Simples Nacional)..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Requerimento de dispensa do cumprimento da equivalência - Decreto nº 16.576/2025",
        "oQueE": "Este serviço é um canal para que o contribuinte que promova a exportação de soja em grão ou milho solicite a dispensa de firmar o compromisso de equivalência previsto na alínea..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Requerimento de incentivos fiscais com compromisso de obrigações recíprocas",
        "oQueE": "Solicitação de incentivos fiscais com base na Lei Complementar Estadual nº 93/2001 , na Lei Estadual nº 4.049/2011 , na Lei Complementar Federal nº 160/2017 , no Decreto Estadua..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Restituição/Ressarcimento de indébito tributário - pedido",
        "oQueE": "Solicitação, por parte de pessoa física ou jurídica de restituição/ressarcimento de indébito nas hipóteses previstas: no art. 127 da Lei Estadual nº 2.315/2001 decorrente de: a...."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - impugnação do ato de indeferimento do pedido de reconsideração da opção pelo regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Apresentar a impugnação ao ato de indeferimento de reconsideração da opção pelo Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - impugnação do indeferimento de reconsideração do ato de exclusão do regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Impugnar o indeferimento da reconsideração do ato de exclusão do Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - reconsideração do ato de exclusão do regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Solicitar a reconsideração do ato de exclusão do Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Simples Nacional - reconsideração do ato de indeferimento da opção pelo regime tributário diferenciado, simplificado e favorecido",
        "oQueE": "Solicitar a reconsideração do ato de indeferimento da opção pelo Simples Nacional."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "SMEPA - baixa de notificação",
        "oQueE": "Solicitar a baixa de pendência de multa, de omisso de apresentação de declaração no Sistema de Monitoramento de Estoques de Produtos Agrícolas (SMEPA)."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "SOCRED - solicitação de crédito fiscal do ICMS referente a operações e prestações relacionadas a produtos e à atividade agropecuária",
        "oQueE": "Solicitar a homologação de créditos fiscais do ICMS, decorrentes de operações com produtos da agropecuária, inclusive animais vivos, e de origem extrativa, inclusive quando bene..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Solicitar opção de pagamento da apuração do ICMS - Substituição Tributária - Resolução SEFAZ nº 3.157/2021",
        "oQueE": "Solicitação de pagamento parcelado do ICMS, conforme disposto no § 2º do art. 3°-C da Resolução/SEFAZ n° 3.157/2021 , por estabelecimento atacadista excluído da condição de subs..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Substituição de benefícios por crédito presumido nos moldes do artigo 31 da Lei Complementar nº 93/2001 - Empresas detentoras de Termo de Acordo do programa MS-Empreendedor",
        "oQueE": "Este serviço é um canal para que o contribuinte que é titular de Termo de Acordo firmado com base na Lei Complementar nº 93/2001 solicite a substituição de seu incentivo vigente..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de Acordo - concessão e renovação - distribuidora de medicamentos localizada neste Estado - tratamento tributário do Decreto nº 12.415/2007",
        "oQueE": "Solicitar a autorização para a distribuidora de medicamentos localizada neste Estado utilizar o crédito outorgado previsto no Decreto nº 12.415/2007 , desde que não realize oper..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de verificação fiscal de exportação (TVF-Exportação) - baixa",
        "oQueE": "Solicitar a baixa de Termo de Verificação Fiscal (TVF) lavrado em decorrência de mercadoria destinada à exportação, com fim específico de exportação ou para formação de lote de..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Termo de Verificação Fiscal (TVF) ou Termo de Apreensão (TA) - baixa ou alteração",
        "oQueE": "Solicitação de baixa ou alteração, para Termo de Verificação Fiscal (TVF) ou Termo de Apreensão (TA), que deverá ser realizada através do link https://www.autoatendimento.ms.gov..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Transferência de animal registrado no SMEPA (sistema de monitoramento de estoque de produtos agropecuários)",
        "oQueE": "Solicitar a transferência de animal registrado que tenha sido remetido para outra Inscrição Estadual, mas não foi acobertado por NFP-e com a vinculação correta do animal."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar cadastro de áreas de Florestas Plantadas.",
        "oQueE": "Cadastro de áreas de florestas plantadas, solicitação de créditos de reposição florestal, declaração de débitos e negociação de volumetria (compra e venda de créditos)."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa MS INDUSTRIA",
        "oQueE": "Este programa é uma parceria entre a SEMADESC e a SEFAZ, que concede incentivos fiscais vinculados ao ICMS para empreendimentos do setor industrial. Os incentivos são destinados..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar inclusão no programa Precoce MS",
        "oQueE": "O Subprograma é operacionalizado por meio de uma parceria entre a SEMADESC, a SEFAZ e os Serviços de Inspeção Animal da Superintendência Federal de Agricultura - SFA/MS, da Agên..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Assessoria de projetos especiais",
        "oQueE": "Este serviço consiste na assessoria especializada para servidores, docentes e técnicos que desejam desenvolver projetos de pesquisa e extensão no âmbito da gerência de Campo Gra..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviços de fiscalização de contratos",
        "oQueE": "Informação sobre serviços de fiscalização em contratos terceirizados referentes aos serviços de: manutenção, higiene, limpeza e segurança da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar serviços de fiscalização de contratos",
        "oQueE": "Informação sobre serviços de fiscalização em contratos terceirizados referentes aos serviços de: manutenção, higiene, limpeza e segurança da UEMS."
      }
    ]
  },
  {
    "id": "estudante",
    "nome": "Estudante",
    "icon": "graduation-cap",
    "cor": "#F9A825",
    "total": 216,
    "pctDoTotal": 17.7,
    "topOrgaos": [
      {
        "orgao": "UEMS",
        "qtd": 121
      },
      {
        "orgao": "DETRAN",
        "qtd": 12
      },
      {
        "orgao": "SED MS",
        "qtd": 11
      },
      {
        "orgao": "ESCOLAGOV",
        "qtd": 9
      },
      {
        "orgao": "IMASUL",
        "qtd": 9
      }
    ],
    "exclusivas": 84,
    "compartilhadas": 132,
    "cards": [
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor em período de formação na ACADEPOL",
        "meta": "É o pagamento da contribuição previdenciária devida pelo servidor durante o período de formação na Academia...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Pedir nova análise da Perícia Médica (recorrer de decisão)",
        "meta": "É a forma de o servidor contestar uma decisão da Perícia Médica Oficial Estadual. Existem duas maneiras: Pe...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "meta": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico,...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Receber orientação para entrar no mercado de trabalho, com apoio da previdência (Jovem Pensionista)",
        "meta": "Serviço de apoio aos jovens que recebem pensão a se prepararem para trabalhar. Ele oferece cursos, oficinas...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Receber orientações sobre seus direitos e deveres previdenciários, por meio do PROEP - Programa de Educação Previdenciária do Regime Próprio de Previdência Social de MS",
        "meta": "Este serviço ajuda você a entender melhor seus direitos e deveres como segurado da previdência do Estado, p...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Requerer o auxílio-invalidez ao aposentado por incapacidade definitiva",
        "meta": "Para o aposentado civil, é o pagamento de uma parcela complementar de 25% ( vinte e cinco por cento) do val...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para exames admissionais",
        "meta": "Os exames admissionais são executados pelos peritos objetivando a aferição do bem-estar físico, mental e so...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGESUL",
        "titulo": "Recorrer das multas de trânsito em rodovias de MS",
        "meta": "O usuário que cometeu uma infração de trânsito nas rodovias do estado de MS pode: - contestar a imposição d...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "meta": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestã...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor em período de formação na ACADEPOL",
        "oQueE": "É o pagamento da contribuição previdenciária devida pelo servidor durante o período de formação na Academia de Polícia Civil (Acadepol). Quando autorizado por decisão judicial,..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pedir nova análise da Perícia Médica (recorrer de decisão)",
        "oQueE": "É a forma de o servidor contestar uma decisão da Perícia Médica Oficial Estadual. Existem duas maneiras: Pedido de reconsideração – solicitar nova análise do laudo, apresentando..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "oQueE": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico, para servidores que estão afastados do trabalho por motivo de saúde."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientação para entrar no mercado de trabalho, com apoio da previdência (Jovem Pensionista)",
        "oQueE": "Serviço de apoio aos jovens que recebem pensão a se prepararem para trabalhar. Ele oferece cursos, oficinas e orientação para que o jovem possa aprender uma profissão, se desenv..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientações sobre seus direitos e deveres previdenciários, por meio do PROEP - Programa de Educação Previdenciária do Regime Próprio de Previdência Social de MS",
        "oQueE": "Este serviço ajuda você a entender melhor seus direitos e deveres como segurado da previdência do Estado, por meio de participação no PROEP - Programa de Educação Previdenciária..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer o auxílio-invalidez ao aposentado por incapacidade definitiva",
        "oQueE": "Para o aposentado civil, é o pagamento de uma parcela complementar de 25% ( vinte e cinco por cento) do valor da remuneração bruta mensal, limitada a um salário-mínimo, ao segur..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para exames admissionais",
        "oQueE": "Os exames admissionais são executados pelos peritos objetivando a aferição do bem-estar físico, mental e social dos servidores, considerando inclusive, a ocupação, o cargo e as..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Recorrer das multas de trânsito em rodovias de MS",
        "oQueE": "O usuário que cometeu uma infração de trânsito nas rodovias do estado de MS pode: - contestar a imposição de penalidade de multa a partir da Notificação de Autuação (NA); - cont..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar assistência técnica e extensão rural",
        "oQueE": "ATER – serviço de educação não formal, de caráter continuado, no meio rural, que promove processos de gestão, produção, beneficiamento e comercialização das atividades e dos ser..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar atendimento técnico para acesso a recursos financeiros disponibilizados por instituições do sistema nacional de crédito rural",
        "oQueE": "Atendimento técnico a produtores interessados em acessar recursos financeiros, disponibilizados por Instituições do Sistema Nacional de Crédito Rural (SNCR), para aplicação excl..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar atendimento para ações de defesa civil",
        "oQueE": "É o conjunto de ações destinadas à proteção e socorro de pessoas e bens, em caso de desastres, infortúnio ou calamidade, mesmo que preventivamente, diante de situação que acarre..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar busca e salvamento de pessoas ou bens",
        "oQueE": "É o conjunto de operações necessárias à localização, acesso e remoção com segurança de pessoas ou bens em situação de perigo, para local seguro. A busca e/ou salvamento é inicia..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Atualização de Instrutor de Trânsito",
        "oQueE": "Curso destinado a atualização de profissionais formados no curso de Instrutor."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Reciclagem para Condutor Infrator",
        "oQueE": "Curso destinado aos condutores penalizados por Suspensão da CNH e nas demais situações estabelecidas pelos artigos 268 do CTB e 87 da Resolução 1.020 do Contran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Curso de Direção Defensiva",
        "oQueE": "O Curso de Direção Defensiva é destinado às instituições públicas e privadas que possuem vínculo empregatício com pessoas habilitadas que se utilizam de veículos automotores par..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Curso de Formação de condutores para 1º habilitação",
        "oQueE": "Curso destinado aos candidatos à primeira habilitação que desejam obter a Autorização para Conduzir Ciclomotor ou a CNH nas categorias A ou B."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Fazer curso especializado para condutores de veículos de transporte de produtos perigosos (MOPP)",
        "oQueE": "Curso com carga horária de 40h/a para qualificar e atualizar os instrutores de trânsito, especializado para a docência do curso de condutores de transporte de produtos perigosos."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Protocolar defesa e recurso a processo administrativo de suspensão/cassação de CNH",
        "oQueE": "Serviço destinado a protocolar recurso para processo administrativo de suspensão/cassação de CNH."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Realizar inscrição no programa vencendo o medo de dirigir",
        "oQueE": "O programa destina-se a condutores (as) ou candidatos (as) à habilitação que possuem medo e/ou fobia de dirigir, trata-se de uma assistência educativa e terapêutica, ofertando,..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Condutor Infrator",
        "oQueE": "Agendamento para realização de exame teórico-técnico para condutores infratores (curso de reciclagem)."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Agendamento de Exame/Reexame Teórico Técnico Curso Especializado",
        "oQueE": "Agendamento para realização de exame teórico-técnico para homologação de Curso Especializado"
      },
      {
        "orgao": "DETRAN",
        "titulo": "SOLICITAR ATENDIMENTO ÀS INSTITUIÇÕES DE ENSINO SUPERIOR",
        "oQueE": "O Programa é desenvolvido pelo Detran/MS, por meio da Gerência de Projetos e Campanhas, junto às Instituições de Ensino Superior, visando sensibilizar acadêmicos e veteranos sob..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar Avaliação por Junta Médica/Psicológica em Processo de Habilitação",
        "oQueE": "Avaliação realizada por junta composta por três médicos/psicólogos peritos, especialistas em medicina/psicologia do tráfego, em grau de recurso da avaliação do perito singular o..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar registros de certificados de cursos especializados para condutores de veículos",
        "oQueE": "Registro de certificados de cursos especializados para condutores de veículos."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Concorrer ao Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública",
        "oQueE": "O Governo do Estado, sob coordenação da Fundação Escola de Governo de Mato Grosso do Sul, realiza o Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública, com o objetivo de in..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Confirmar a autenticidade de certificações",
        "oQueE": "A Escolagov emite certificação das suas capacitações, tanto na modalidade presencial como a distância. Com o objetivo de conferência da autenticidade do certificado em mãos, há..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Obter descontos em instituições de ensino parceiras",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Oferecer parceria de descontos para servidores estaduais",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar cursos de aperfeiçoamento (carga horária acima de 120 horas)",
        "oQueE": "Oferta de vagas em cursos de aperfeiçoamento (carga horária acima de 120 horas), de forma a subsidiar o desenvolvimento profissional servidores públicos do estado."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar cursos de graduação e pós-graduação",
        "oQueE": "Oferta de vagas em cursos de graduação e pós-graduação, com vistas à formação contínua dos servidores públicos do estado."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar programa ou cursos de capacitação continuada",
        "oQueE": "A Escolagov promove, elabora e executa programas e projetos de qualificação e formação profissional dos agentes públicos estaduais, como meio de desenvolvimento do serviço públi..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Apoiar a educação básica das escolas públicas de Mato Grosso do Sul",
        "oQueE": "Esse serviço consiste em atender as demandas das escolas públicas de Mato Grosso do Sul, por meio de projetos, em articulação com a Secretaria de Estado de Educação (SED/MS) e a..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Fortalecer o regime de colaboração entre estado e município",
        "oQueE": "Esse serviço consiste em desenvolver projetos entre a rede estadual e a rede municipal de ensino voltados à educação básica de Mato Grosso do Sul."
      },
      {
        "orgao": "FADEB",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar apoio a projetos culturais por meio de editais públicos",
        "oQueE": "Investimento em projetos de produção cultural sul-mato-grossense em suas mais diversas manifestações, priorizando a circulação das artes por todas as regiões do Estado como form..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitação de Diárias para Servidores da Fundect",
        "oQueE": "Serviço destinado à solicitação de diárias para servidores da Fundect que necessitem realizar viagens a serviço, participação em eventos, reuniões técnicas, capacitações, visita..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para as pesquisas com parcerias internacionais",
        "oQueE": "Este serviço consiste na promoção de ações visando a internacionalização das pesquisas executadas no Estado, por meio de apoio financeiro a pesquisadores que buscam inserir seus..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para financiamento de atividades de pesquisa, desenvolvimento tecnológico e inovação em empresas",
        "oQueE": "Apoio financeiro, na forma de subvenção econômica, aplicado no financiamento de atividades de pesquisa, desenvolvimento tecnológico e inovação em empresas."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para o desenvolvimento de eventos técnico-científicos",
        "oQueE": "Este serviço consiste em conceder apoio financeiro para auxiliar e incentivar os pesquisadores na organização e realização de eventos técnico-científicos, visando fortalecer os..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar apoio financeiro para o desenvolvimento de projetos de pesquisa científica, tecnológica e de inovação",
        "oQueE": "Este serviço consiste na concessão de apoio financeiro para incentivar projetos de pesquisa científica, tecnológica e de inovação relevantes para o desenvolvimento econômico, cu..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar concessão de bolsas de estudo",
        "oQueE": "Este serviço consiste na concessão de bolsas de estudo para qualificação de recursos humanos em várias modalidades e públicos, desde bolsas para alunos do ensino fundamental e m..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitação ao Programa de Formação e Capacitação Esportiva oferecido pela UCAPES aos profissionais de Educação Física e Acadêmicos, nas diversas áreas: esporte, treinamentos, paradesporto, saúde e gestão esportiva",
        "oQueE": "É um programa de Capacitação Esportiva voltado aos profissionais e acadêmicos de Educação Física, que buscam qualificação em diferentes áreas da Educação Física de forma eficien..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Acessar plataforma de inteligência turística de Mato Grosso do Sul",
        "oQueE": "A Alumia é a Plataforma de Inteligência Turística do Mato Grosso do Sul. Tem como objetivo oferecer dados e informações atualizadas, de forma organizada e de qualidade, a empres..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar qualificação social e profissional",
        "oQueE": "O serviço \"MS Qualifica\" é um programa do governo de Mato Grosso do Sul que oferece cursos para aumentar a qualificação profissional da população, com o objetivo de melhorar a e..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar palestra para produtores e educadores",
        "oQueE": "Solicitação de cursos, palestras ou seminários para produtores rurais, comunidades locais e profissionais ligados à agropecuária, incluindo a formação de professores e multiplic..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Apresentar monitoramento de outorga de recursos hídricos",
        "oQueE": "O monitoramento de outorga de recursos hídricos constitui instrumento essencial para o acompanhamento das condições quantitativas e qualitativas dos usos autorizados, permitindo..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Requerer participação no rateio do ICMS Ecológico - Componente Resíduo Sólidos",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para a pesca amadora e/ou desportiva",
        "oQueE": "A Autorização Ambiental para Pesca Amadora e/ou Desportiva serve para autorizar o uso de recursos pesqueiros para a atividade de pesca desportiva ou de lazer, limitando a quanti..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para manejo de fauna ex situ",
        "oQueE": "Manejo de fauna ex situ é a ação autorizada para atendimento das finalidades de pesquisa científica de conservação de manutenção, de criação, de reprodução, de comercialização,..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização ambiental para pesca profissional",
        "oQueE": "A Autorização Ambiental para Pesca Comercial (AAPC) serve para autorizar o uso de recursos pesqueiros para a atividade de pesca comercial para quem trabalha como pescador profis..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar cadastro e outorga de uso de recursos hídricos (CEURH)",
        "oQueE": "Os diversos usos da água podem ser concorrentes, gerando conflitos entre setores usuários e impactos ambientais. Nesse sentido, gerenciar recursos hídricos é uma necessidade pre..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar licença ambiental",
        "oQueE": "O Licenciamento Ambiental é um instrumento que autoriza pessoas física ou jurídica a desenvolver implantar e operar empreendimentos ou atividades no âmbito do estado de Mato Gro..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar participação no ICMS Ecológico – Componente Unidades de Conservação e Terras Indígenas",
        "oQueE": "O ICMS Ecológico é um mecanismo de repartição de receitas tributárias pertencentes aos municípios, baseado em um conjunto de critérios ambientais, estabelecidos para determinar..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar realização de atividade acadêmica e outros usos nos Parques Estaduais",
        "oQueE": "Procedimento administrativo destinado à emissão de autorização oficial para a realização de visitas técnicas, atividades acadêmicas dentro dos Parques Estaduais."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Consultar editais de concursos e processos seletivos da PGE/MS",
        "oQueE": "Acesse a página de Concursos Públicos e Processos Seletivos aqui. Este serviço permite que você acesse os editais dos concursos e processos seletivos da PGE/MS. Esses editais tr..."
      },
      {
        "orgao": "SAD",
        "titulo": "Seleção e Ingresso de Pessoal por meio de Concursos Públicos, Processos Seletivos Internos e Processos Seletivos Simplificados",
        "oQueE": "Compete à Secretaria de Estado de Administração o planejamento, a coordenação e a execução do processo de recrutamento, seleção e de admissão de pessoal, mediante a realização d..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Participar de licitação",
        "oQueE": "É o processo licitatório para aquisição de bens e a contratação de serviços comuns (contratados pelo Rito Procedimental similar ao Pregão), assim como os procedimentos de licita..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Acessar cursos da Escola do SUAS/MS",
        "oQueE": "A Escola é um espaço criado pelo Governo do Estado de Mato Grosso do Sul para formar e capacitar profissionais da área de assistência social. Ela oferece cursos, oficinas, semin..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar apoio e orientação às organizações da sociedade civil",
        "oQueE": "Têm como objetivo orientar, capacitar e acompanhar instituições governamentais e não governamentais na formalização de parcerias, elaboração de projetos e captação de recursos...."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar atendimento pelo Programa Direitos Humanos em Ação",
        "oQueE": "Esse serviço oferece ações educativas sobre direitos humanos, com o objetivo de: Informar, orientar e conscientizar pessoas e grupos; Fortalecer o empoderamento individual e col..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar o benefício do MS Supera",
        "oQueE": "É um benefício social mensal no valor de um salário mínimo nacional aos estudantes matriculados em cursos de educação profissional técnica (nível médio) ou de graduação (univers..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Atendimento Educacional Especializado nas Salas de Recursos Multifuncionais da Rede Estadual de Ensino",
        "oQueE": "O Atendimento Educacional Especializado (AEE) é um serviço pedagógico complementar, oferecido em horário diferente ao das aulas regulares, nas Salas de Recursos Multifuncionais..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar autorização para oferta da educação profissional técnica de nível médio",
        "oQueE": "São atos autorizativos, emanados do Conselho Estadual de Educação de Mato Grosso do Sul (CEE/MS), visando: I – ao credenciamento da instituição de ensino; II – à autorização de..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e autorização de instituições públicas e privadas para oferta de Cursos de ensino médio, educa profissional técnica de nível médio e educ. de Jovens e adultos, nas etapas do ensino fundamental e do ensino médio, na modalidade EaD",
        "oQueE": "Atos de credenciamento e autorização do Conselho Estadual de Educação do Estado de Mato Grosso do Sul para a oferta de cursos de ensino médio, de Educação Profissional Técnica d..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar credenciamento e recredenciamento, autorização, reconhecimento e renovação de reconhecimento de Curso da Educação Superior",
        "oQueE": "Estabelece dispositivos para a regulação, a supervisão e a avaliação de instituições de educação superior e de seus cursos de graduação e sequenciais do Sistema Estadual de Ensi..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar curso normal médio – habilitação para docência na educação infantil e anos iniciais do ensino fundamental",
        "oQueE": "Formação mínima para o exercício da docência na educação infantil e nos anos iniciais do ensino fundamental, de nível médio, na modalidade Normal e Qualificação Profissional em..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar cursos técnicos e qualificação profissional - integrado, concomitante e subsequente ao ensino médio",
        "oQueE": "Oferta de Cursos de Educação Profissional à população sul-mato-grossense que esteja matriculada no ensino médio ou concluído essa etapa da educação básica. Os cursos operacional..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Educação de Jovens e Adultos",
        "oQueE": "Modalidade de ensino que busca oportunizar a escolarização ou complementação dos estudos na educação básica. Oferta dos anos finais e do ensino médio a jovens, adultos e idosos..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o Avanço do Jovem na Aprendizagem em Mato Grosso do Sul",
        "oQueE": "É um projeto de correção de fluxo (distorção idade/ano) para adolescentes de 15 a 17 anos que não concluíram a etapa do ensino fundamental. No caso do ensino médio, são duas Tra..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o curso Normal Médio  Indígena território etnoeducacional Povos do Pantanal",
        "oQueE": "Oferta do Normal Médio Indígena Território Etnoeducacional Povos do Pantanal para indígenas concluintes do ensino médio ou equivalente."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar o curso Normal Médio Intercultural Indígena",
        "oQueE": "É uma modalidade de educação específica, diferenciada, intercultural, bilíngue/multilíngue e comunitária, para atender às comunidades indígenas de MS conforme define a legislaçã..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar participação no curso de libras",
        "oQueE": "O curso de Libras tem como objetivo promover a acessibilidade comunicacional para profissionais da educação que atuam com estudantes surdos, oferecendo formação certificada e co..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Comprovação de destinação de parte do IRPJ ao Fundo Estadual para a Infância e a Adolescência (FEINAD/MS) ou ao Fundo Estadual dos Direitos da Pessoa Idosa (FEDPI/MS)",
        "oQueE": "Este serviço constitui o canal oficial para que o contribuinte, beneficiário de incentivos fiscais previstos na legislação sul-mato-grossense, realize a comprovação da destinaçã..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Contestação de despacho de descumprimento de obrigações socioeconômicas - Resolução/SEFAZ nº 3.475/2025",
        "oQueE": "Canal para que o contribuinte que é titular de benefícios fiscais concedidos com base na Lei Complementar nº 93/2001 apresente recurso administrativo à notificação da Secretaria..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - isenção sobre operações de importação de bens destinados à pesquisa científica e tecnológica",
        "oQueE": "Solicitar a isenção do ICMS incidente sobre as importações de aparelhos, máquinas, equipamentos, instrumentos, suas partes, peças de reposição, acessórios, matérias-primas, prod..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "IPVA - imunidade",
        "oQueE": "Use este serviço para solicitar o reconhecimento da IMUNIDADE do IPVA para veículos automotores integrantes do patrimônio dos seguintes entes : União, os Estados, o Distrito Fed..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de pedido de esclarecimento em face do resultado de julgamento em 1ª ou 2ª instância",
        "oQueE": "Recebimento e julgamento de pedido de esclarecimento em face do resultado de julgamento em 1ª ou 2ª instância (Recurso Voluntário ou Recurso Especial), na forma estabelecida na..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de recurso especial ao Tribunal Administrativo Tributário (TAT) em face de decisão proferida em 2ª instância",
        "oQueE": "Recebimento, análise de admissibilidade de Recurso Especial interposto em face de decisão de 2ª instância de Processo Administrativo Tributário e, tendo sido admitido, julgado e..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - interposição de recurso voluntário ao Tribunal Administrativo Tributário (TAT) em face de decisão proferida em 1ª instância",
        "oQueE": "Recebimento e julgamento de Recurso Voluntário interposto em face de decisão de 1ª instância de Processo Administrativo Tributário, na forma estabelecida na Lei nº 2.315/2001 ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - pedido de esclarecimento em face da decisão de admissibilidade de recurso especial proferida pelo presidente do Tribunal Administrativo Tributário",
        "oQueE": "Recebimento e julgamento de pedido de esclarecimento em face admissibilidade (admitindo ou não) de recurso especial proferida pelo presidente do Tribunal Administrativo Tributár..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar credenciamento de instituições no SIATER",
        "oQueE": "Sistema online de credenciamento de Entidades Públicas e Privadas prestadoras de ATER (Assistência Técnica e Extensão Rural) conforme regras estabelecidas pela LEI 12.188/2010,..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações do programa CONECTA-MS",
        "oQueE": "O CONECTA MS tem por objetivo garantir a inclusão digital, interligando comunidades remotas, assentamentos rurais e aldeias, possibilitando a qualificação dos moradores destes l..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar informações sobre o FCO",
        "oQueE": "Com objetivo de contribuir para o desenvolvimento econômico e social do MS, o FCO – Fundo Constitucional do Centro Oeste é um recurso que beneficia as empresas e os produtores r..."
      },
      {
        "orgao": "SES",
        "titulo": "Apresentar defesa e/ou recurso em processo administrativo sanitário PAS",
        "oQueE": "O processo administrativo sanitário acontece quando é verificado durante inspeção sanitária infrações à legislação sanitária ( Disposto no código sanitário de MS Art. 341 da Lei..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS. É realizado por um setor..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar 2ª via – Certificados, Diplomas, Histórico Escolar e Declarações",
        "oQueE": "Este serviço é destinado aos egressos que necessitam de segunda via de Certificado, Diplomas e/ou Históricos Escolares dos cursos ofertados pela ETSUS ou para discentes e docent..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar cursos de educação profissional na área da saúde",
        "oQueE": "A ETSUS Profa. Ena de Araújo Galvão foi criada em 21 de julho de 1986, como Centro Formador de Recursos Humanos para a Saúde, pelo Decreto n. 3646, sendo transformada em Escola..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar documentos relativos a vida acadêmica",
        "oQueE": "É um setor de apoio acadêmico-administrativo, diretamente vinculado à Direção da Escola de Saúde Pública. A gestão acadêmica exerce um papel importante nos processos de organiza..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar teleducação",
        "oQueE": "A Teleducação é uma atividade educacional que utiliza as ferramentas tecnológicas para ministrar ações educacionais à distância como cursos, webaulas, webnários, reuniões de mat..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar capacitação sobre economia criativa",
        "oQueE": "Capacitação sobre Economia Criativa é a realização de cursos promovidos e ofertados pela Superintendência de Economia Criativa da SETESC, em parceria com o Sistema S e demais Se..."
      },
      {
        "orgao": "UEMS",
        "titulo": "2ª via de certificado de conclusão de curso",
        "oQueE": "A segunda via do diploma será expedida somente em caso excepcional: roubo, perda ou extravio; danificação; sentença judicial ou amparado pelo Art.56 e/ou 57 da Lei nº 14.382/2022."
      },
      {
        "orgao": "UEMS",
        "titulo": "2ª via do diploma",
        "oQueE": "A segunda via do diploma será expedida somente em caso excepcional: roubo, perda ou extravio; danificação; sentença judicial ou amparado pelo Art.56 e/ou 57 da Lei nº 14.382/2022."
      },
      {
        "orgao": "UEMS",
        "titulo": "Acessar os cursos por quem já é graduado",
        "oQueE": "Consiste no acesso aos cursos de graduação da UEMS, sem necessidade de realização de ENEM, por pessoas que já possuem uma graduação em curso de nível superior."
      },
      {
        "orgao": "UEMS",
        "titulo": "Assessoria de projetos especiais",
        "oQueE": "Este serviço consiste na assessoria especializada para servidores, docentes e técnicos que desejam desenvolver projetos de pesquisa e extensão no âmbito da gerência de Campo Gra..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Assistência administrativa à coordenação do curso de ciências biológicas",
        "oQueE": "O assistente da coordenação é um serviço técnico administrativo, onde é feito o apoio à coordenação de curso na organização e guarda das folhas de frequência dos professores que..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Atendimento da equipe de comunicação",
        "oQueE": "A Diretoria de Comunicação Social (DCS) realiza atendimento ao público nos meios de comunicação oficiais da UEMS que são gerenciados pelo setor, a saber: Perfil do instagram @ue..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Atendimento Educacional Especializado",
        "oQueE": "Consiste na possibilidade do acadêmico em solicitar, mediante apresentação de laudo, o serviço do Atendimento Educacional Especilizado, o qual tem tem como função identificar, e..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Autenticidade de validação e veracidade de diploma",
        "oQueE": "É destinado para dar Autenticidade e Veracidade de Diploma."
      },
      {
        "orgao": "UEMS",
        "titulo": "Consulta sobre licitações",
        "oQueE": "Trata da possibilidade de qualquer pessoa de solicitar esclarecimentos ou mesmo impugnar os editais de licitação por irregularidade"
      },
      {
        "orgao": "UEMS",
        "titulo": "Criação de Conta Microsoft Office 365 na versão Student",
        "oQueE": "O aluno da UEMS pode solicitar a criação conta para acessar os recursos do Office 365 para estudantes"
      },
      {
        "orgao": "UEMS",
        "titulo": "Criação do login microsoft",
        "oQueE": "O aluno da Universidade pode solicitar a criação do nome de usuário e senha para acessar os recursos do Office 365 para estudantes e do Microsoft Teams"
      },
      {
        "orgao": "UEMS",
        "titulo": "Declaração das remunerações de contribuições previdenciárias para fins de benefício junto ao INSS",
        "oQueE": "É o documento que comprova as Remunerações de Contribuições Previdenciárias junto ao INSS, enquanto o segurado teve vínculo como não-estatutário ou comissionado na Universidade..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Declaração para fins de proporcionalização ou isenção do desconto do INSS acima do teto",
        "oQueE": "É o documento que informa o valor de contribuição previdenciária dos servidores que possuem mais de um vínculo empregatício, para fins de proporcionalização / isenção do descont..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Desenvolvimento de projetos ambientais",
        "oQueE": "Desenvolvimento de projetos ambientais nos espaços universitários"
      },
      {
        "orgao": "UEMS",
        "titulo": "Divulgação nas redes sociais",
        "oQueE": "Consiste em divulgar atividades acadêmicas e administrativas de interesse da universidade por meio das redes sociais oficiais da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Fazer publicação de obras em e-book",
        "oQueE": "Consiste na seleção, avaliação, editoração, revisão gramatical, normalização e diagramação de obras para publicações com o selo \"Editora UEMS\"."
      },
      {
        "orgao": "UEMS",
        "titulo": "Informações sobre os processos de avaliação dos cursos de graduação da UEMS",
        "oQueE": "Possibilita à população o acesso a informações a respeito das avaliações interna e externa dos cursos de graduação"
      },
      {
        "orgao": "UEMS",
        "titulo": "Informações sobre os processos seletivos",
        "oQueE": "Disponibiliza informações aos cidadãos que queiram ingressar nos cursos da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Ingressar em curso como portador de diploma",
        "oQueE": "O ingresso de portador de diploma de curso superior consiste no acesso de diplomados aos cursos de graduação da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Inscrever nas aulas piano e violino",
        "oQueE": "A Casa da Cultura oferece aulas de piano para crianças, jovens e adultos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Inscrever no processo de seleção unificada SISU sistema de seleção unificada",
        "oQueE": "O SiSU (Sistema de Seleção Unificada) é um sistema online do Ministério da Educação em que a UEMS e outras instituições públicas de ensino superior brasileiras oferecem vagas ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Participar do coral",
        "oQueE": "O coral ensina e explora o conhecimento musical e cultural do interessado"
      },
      {
        "orgao": "UEMS",
        "titulo": "Passe do estudante",
        "oQueE": "Cartão que possibilita ao estudante, dentro do municipio de Campo grande, usufruir gratuitamento do transporte coletivo de sua residência à Universidade e vice-versa, no qual o..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de confecção de carteirinha da biblioteca",
        "oQueE": "Consiste na possibilidade dos usuários solicitarem suas carteirinhas em formato impresso para empréstimo domiciliar de exemplares do acervo."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de Declaração de Tempo de Contribuição ao RGPS (DTC)",
        "oQueE": "O cidadão que tem ou teve vínculo com a UEMS como servidor contratado ou comissionado que teve a contribuição recolhida para o INSS pode solicitar uma Declaração de Tempo de Con..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de Declaração de Vínculo",
        "oQueE": "O cidadão que tem ou teve vínculo com a UEMS como servidor efetivo, contratado ou comissionado pode solicitar uma declaração do vínculo com a Instituição."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de empréstimo de exemplar",
        "oQueE": "Consiste na possibilidade do usuário solicitar empréstimo de exemplar da unidade local ou de outra unidade."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de empréstimo domiciliar de exemplar",
        "oQueE": "Consiste na possibilidade do usuário solicitar empréstimo domiciliar de exemplar da unidade local ou de outra unidade."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo de seleção de docentes temporários",
        "oQueE": "Consiste em selecionar docentes para atuar no ensino superior por tempo determinado"
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo Seletivo de Docentes",
        "oQueE": "Seleção de docentes para atender aos cursos de graduação."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo seletivo para ingresso aos cursos de graduação para refugiados, migrantes em situação de vulnerabilidade e apátridas",
        "oQueE": "O Processo seletivo visa o ingresso de candidatos/as Refugiados/as, Migrantes em situação de vulnerabilidade e Apátridas residentes no Brasil aos cursos de graduação da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo seletivo permanente – histórico escolar",
        "oQueE": "Processo seletivo de ingresso aos cursos de graduação da UEMS, destinado ao preenchimento das vagas remanescentes dos processos principais de seleção (Vestibular e SiSU), subsid..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes",
        "oQueE": "O Processo Seletivo Permanente - Notas do ENEM - Vagas Remanescentes, destinam-se aos/as candidatos/as que realizaram o Exame Nacional do Ensino Médio (ENEM), nos últimos dez anos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processo Seletivo Vestibular",
        "oQueE": "Processos seletivos de ingresso aos cursos de graduação da UEMS, na qual os/as candidatos/as se inscrevem e realizam as provas objetivas e de redação, concorrendo a uma vaga em..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Processos licitatórios da Universidade Estadual de Mato Grosso do Sul",
        "oQueE": "Consiste na viabilidade de pessoas jurídicas fornecerem produtos ou prestarem serviços para a Universidade Estadual de Mato Grosso do Sul"
      },
      {
        "orgao": "UEMS",
        "titulo": "Produção de material gráfico e audiovisual",
        "oQueE": "A Diretoria de Comunicação Social (DCS) oferece o serviço de criação de materiais gráficos e audiovisuais, sujeito à disponibilidade e ordem de prioridade. Esses serviços estão..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Produção de material jornalístico ou cobertura jornalística de evento",
        "oQueE": "A Diretoria de Comunicação Social (DCS) disponibiliza serviços de cobertura de eventos e criação de materiais jornalísticos, sujeitos à disponibilidade e agenda da equipe."
      },
      {
        "orgao": "UEMS",
        "titulo": "Programa de mobilidade internacional",
        "oQueE": "Consiste na inscrição e participação de alunos e servidores no programa de mobilidade internacional da UEMS para ações de ensino, pesquisa e extensão em instituições estrangeira..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Programa  Institucional de Bolsas aos Alunos da Pós Graduação - PIBAP",
        "oQueE": "Gerenciar as bolsas de auxílio à estudante recebidas da CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, bem como as bolsas PIBAP recebidas da própria instit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Programa Institucional de Iniciação Científica – PIC",
        "oQueE": "Tem como finalidade o aprendizado, o desenvolvimento e o aperfeiçoamento de técnicas, metodologias e princípios de iniciação à pesquisa."
      },
      {
        "orgao": "UEMS",
        "titulo": "Programa UEMS acolhe – ações de acolhimento linguístico, humanístico e educacional a imigrantes internacionais",
        "oQueE": "Ações de extensão desenvolvidas no âmbito da Universidade Estadual de Mato Grosso do Sul com a finalidade de atendimento diferenciado em diversas áreas do conhecimento a comunid..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Projetos de arquitetura, engenharia, urbanização e infraestrutura das áreas físicas da UEMS",
        "oQueE": "Desenvolvimento de projetos arquitetônicos complementares e de ocupação do espaço físico das unidades universitárias da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Projetos de pesquisa",
        "oQueE": "Promover a produção do conhecimento científico, estimular a produção científica da comunidade acadêmica da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Realização de cursos, palestras e formações em Direitos Humanos",
        "oQueE": "Este serviço permite que cidadãos, empresas, escolas, associações, centros comunitários, órgãos e entidades públicas possam solicitar cursos, formações ou palestras sobre Direit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Recebimento de doação de livros",
        "oQueE": "Consiste no recebimento de doação de livros para serem incorporados ao acervo"
      },
      {
        "orgao": "UEMS",
        "titulo": "Recuperação de senha do login UEMS",
        "oQueE": "O serviço é destinado aos alunos que não se lembram ou não conseguem alterar a senha do Portal do Acadêmico."
      },
      {
        "orgao": "UEMS",
        "titulo": "Recuperação de senha Microsoft e do e-mail institucional",
        "oQueE": "Consiste na possibilidade do aluno solicitar a recuperação de senha do e-mail institucional e do Teams/Office para o Help Desk da Diretoria de Informática."
      },
      {
        "orgao": "UEMS",
        "titulo": "Redefinição de senha do login UEMS dos alunos de pós-graduação",
        "oQueE": "Este serviço consiste na alteração e recuperação da senha do loginUEMS dos alunos de pós-graduação que desejam acessar serviços como o Acesso Café da Rede Nacional de Ensino e P..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Reingresso especial",
        "oQueE": "O reingresso especial é o retorno do discente que não tenha concluído o curso no prazo regular previsto no Projeto Pedagógico, que tenha sido excluído por reprovação ou desligad..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Renovar o empréstimo de livro",
        "oQueE": "Consiste na possibilidade do usuário solicitar que seu empréstimo de livro seja renovado por mais um tempo caso não tenha feito essa renovação pelo Sistema Acadêmico."
      },
      {
        "orgao": "UEMS",
        "titulo": "Requerimento de 2ª via de diploma/certificado",
        "oQueE": "Requerimento de 2ª via de diploma/certificado"
      },
      {
        "orgao": "UEMS",
        "titulo": "Reserva de laboratório de ensino de geografia (LEG)",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso ou reserva do Laboratório de Ensino de Geografia."
      },
      {
        "orgao": "UEMS",
        "titulo": "Seleção do Programa Institucional de Monitoria (PIM)",
        "oQueE": "O Programa Institucional de Monitoria (PIM) representa um espaço de atuação dentro do âmbito universitário onde os acadêmicos que possuem mérito e rendimento acadêmico satisfató..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviço de inclusão e diversidade",
        "oQueE": "Suporte financeiro destinado a auxiliar as necessidades dos alunos de comprovada vulnerabilidade socioeconômica"
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviço de protocolo integrado",
        "oQueE": "Recebimento e envio de correspondências da UEMS. O trânsito das correspondências ocorre via malotes, sendo o trajeto UEMS – UNIDADES –UEMS (este serviço é considerado como “inte..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviços de fiscalização de contratos",
        "oQueE": "Informação sobre serviços de fiscalização em contratos terceirizados referentes aos serviços de: manutenção, higiene, limpeza e segurança da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviços de telefonia",
        "oQueE": "O usuário pode solicitar serviços de manutenção corretiva para os serviços de telefonia existentes na UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviços de transporte",
        "oQueE": "Serviço de transporte para pessoas, materiais e documentos com abrangência intermunicipal e interestadual, cujo objetivo é a realização de atividades administrativas e as voltad..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Serviços gerais e conservação e asseio das áreas físicas",
        "oQueE": "Suporte referente ao serviço de asseio e conservação para atender demandas cotidianas e eventos na Unidade Universitária."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de certificados",
        "oQueE": "Solicitação de certificados emitidos a partir de projetos de projetos de ensino, pesquisa e/ou extensão (ex.: jornadas acadêmicas, programas de monitorias, PIBIC, PIBID, PIBEX)."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de diploma e certificados universitários",
        "oQueE": "O acadêmico, assim que completar seu curso pode solicitar o diploma ou certificado onde será comprovado sua conclusão"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de documentos",
        "oQueE": "Consiste em solicitar quaisquer dos seguintes documentos: Declaração de caráter pedagógico (visitas técnicas, palestras, entre outras de acordo com a autorização da Coordenação..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de emissão de diploma de graduação",
        "oQueE": "Solicitação de emissão de diploma de acadêmicos concluintes do curso de graduação mediante conferência de dados e assinatura e formulário específico"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de login UEMS para alunos da pós-graduação",
        "oQueE": "Este serviço consiste na criação de um usuário e senha que possibilitam que o aluno tenha acesso à funcionalidades como o Acesso Café da Rede Nacional de Ensino e Pesquisa e ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de registro de ISBN  vinculado à Fundação Universidade Estadual de Mato Grosso do Sul",
        "oQueE": "O ISBN - International Standard Book Number - é um padrão numérico criado com o objetivo de fornecer uma espécie de “RG” para publicações monográficas, como livros, artigos e ap..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de revisão de prova",
        "oQueE": "Não concordando com a nota da avaliação, o acadêmico, a contar da data da revisão, terá o direito a recurso da revisão de prova junto à secretaria acadêmica, apresentando requer..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar abono de faltas",
        "oQueE": "O abono de faltas será concedido quando o aluno participar, em períodos compatíveis com as atividades acadêmicas, em: I. exercícios ou manobras militares, convocados por órgão d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar acesso à assistência jurídica gratuita",
        "oQueE": "Serve para atuar em causas jurídicas nas àreas de direito de família, crimes e ações trabalhista. Atuando em ações de alimentos, inventário, divórcio correspondem há boa parte d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar acesso a consulta supervisionada a acervo bibliográfico, digital e audiovisual",
        "oQueE": "Espaço destinado à pesquisa bibliográfica, audiovisual e digital do Acervo de Maria da Glória Sá Rosa, exclusivamente no local, mediante acompanhamento."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar acesso ao processo seletivo de ingresso aos cursos de graduação para refugiados, migrantes em situação de vulnerabilidade e apátridas",
        "oQueE": "O processo seletivo visa o ingresso de candidatos(as) refugiados(as), migrantes em situação de vulnerabilidade e apátridas residentes no Brasil aos cursos de graduação da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar apoio ao empreendedorismo solidário",
        "oQueE": "É um programa de apoio ao empreendedorismo solidário onde a incubadora apoia empresas, grupos, associações e cooperativas populares voltadas ao atendimento de coletividades que..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar aproveitamento de disciplinas",
        "oQueE": "Comprovação de elevada experiência vivenciada pelo acadêmico, que o tenha levado a apropriação de conhecimentos e ao desenvolvimento de habilidades indispensáveis a sua formação..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar assessoria de cerimonial e reservas (salas de aula, auditório, sala de webconferência S09-D1, sala de reuniões S09-D2 e teatro de arena)",
        "oQueE": "O Cerimonial é um serviço de assessoramento da comunidade acadêmica para a coordenar, supervisionar e controlar a execução de atividades de cerimonial universitário de responsab..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atendimento excepcional por licença médica",
        "oQueE": "Terá direito a atendimento excepcional, o acadêmico que apresente laudo ou atestado médico a partir de 15 (quinze) até 60 (sessenta) dias de afastamento no ano letivo, exceto pa..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atualização de dados cadastrais do acadêmico",
        "oQueE": "Mudanças de e-mail, endereço, telefone e estado civil são alguns exemplos de situações que demandam a atualização cadastral."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar atualização de dados cadastrais no SAU - Sistema Acadêmico da UEMS",
        "oQueE": "Quando o acadêmico muda de endereço, e-mail, ou acontece alguma alteração no nome (casamento, divórcio ou outros casos) ou número de documento, o mesmo deve apresentar na secret..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar bolsa de pós-graduação – PIBAP",
        "oQueE": "Gerenciar as bolsas de auxílio a estudantes recebidas da CAPES – Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, bem como as bolsas PIBAP recebidas da própria insti..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar cadastro de atividades complementares de ensino (ACE)",
        "oQueE": "Entende-se por Atividade Complementar de Ensino (ACE), toda a atividade que é elaborada e proposta por docentes, da UEMS, visando oferecer a ampliação de uma dimensão específica..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar cancelamento de matrícula por iniciativa do acadêmico",
        "oQueE": "Esta serviço cancela a matrícula do aluno mediante requerimento de cancelamento de matrícula"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar cedência de espaço por cidadão externo",
        "oQueE": "É a cedência de espaço de uso comum para demais, ou seja, referente à cedência de espaço de uso comum da Unidade Universitária de Campo Grande para o público"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar  certificado de atividades complementares de ensino (ACE)",
        "oQueE": "Os certificados de Atividades Complementares de Ensino (ACE) são expedidos para os(as) participantes que obtiverem frequência igual ou superior a 75% da carga horária da ACE."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar cessão de espaço",
        "oQueE": "Cessão do espaço da universidade para eventos"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar doação de mudas",
        "oQueE": "É um serviço vinculado ao Programa de Educação Tutorial (PET) da UEMS, o qual realiza atividades de ensino, extensão e pesquisa, integrando-se com a comunidade interna e externa..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar emissão de certificados de projetos de ensino",
        "oQueE": "Os certificados de Projetos de Ensino são expedidos para os(as) participantes que obtiverem frequência igual ou superior a 75% da carga horária do Projeto de Ensino."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar empréstimo de materiais",
        "oQueE": "Consiste no empréstimo de alguns dos materiais didáticos disponíveis nos laboratórios dos cursos, os quais podem ser solicitados mediante requerimento."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar Informações sobre o reconhecimento ou renovação do reconhecimento de cursos de graduação",
        "oQueE": "Consiste na possibilidade do usuário solicitar informações referentes ao trâmite dos processos de Reconhecimento e Renovação de Reconhecimento dos cursos de Graduação da UEMS ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição acadêmico especial",
        "oQueE": "Acadêmico especial é o matriculado para cursar disciplinas ou módulos isolados dos cursos de graduação da UEMS, oriundo de cursos de graduação de outra instituição de ensino sup..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição em curso de língua estrangeira e especiais",
        "oQueE": "Cursos de línguas: inglês, espanhol, francês, latim, libras, com oferta permanente; Cursos especiais, na área de conhecimentos de línguas e linguagens: produção de textos, semió..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição no vestibular",
        "oQueE": "Processos seletivos de ingresso aos cursos de graduação da UEMS, na qual os(as) candidatos(as) se inscrevem e realizam as provas objetivas e de redação, concorrendo a uma vaga e..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar inscrição para a realização de proficiência",
        "oQueE": "Estrangeiros que pretendem ter sua proficiência avaliada para competência leitora nas línguas inglês, espanhol, francês e português devem realizar provas e assim são avaliados p..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar interpretação em eventos e reuniões institucionais da UEMS",
        "oQueE": "Consiste na possibilidade do usuário solicitar o serviço de Interpretação em eventos e reuniões institucionais da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial",
        "oQueE": "Refere-se à matrícula dos candidatos participantes do vestibular ou do ENEM (Exame Nacional do Ensino Médio) devidamente cadastrados e classificados no SISU (Sistema de Seleção..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial em curso de graduação",
        "oQueE": "Informação e orientação sobre procedimento de matrícula inicial. A matrícula inicial refere-se à matrícula dos candidatos aprovados no processo seletivo da UEMS, na primeira cha..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula para Portador de diploma",
        "oQueE": "Informação e Orientação sobre documentação, procedimentos e prazos para a Solicitação de Matrícula de Portador de Diploma"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar o desenvolvimento de projetos ambientais",
        "oQueE": "Desenvolvimento de projetos ambientais."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar o uso do laboratório de informática",
        "oQueE": "O Laboratório de informática caracteriza-se por sua natureza didático-pedagógica, servindo de complemento aos usuários, na busca pela informação e do conhecimento, tem por final..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar passe estudantil",
        "oQueE": "Cartão que possibilita ao estudante, dentro do município de Campo Grande, usufruir gratuitamente do transporte coletivo de sua residência à Universidade e vice-versa, cujo percu..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar pedido de renovação de empréstimo de livro",
        "oQueE": "Consiste na possibilidade do usuário solicitar que seu empréstimo de livro seja renovado por mais um tempo caso não tenha feito essa renovação pelo Sistema Acadêmico."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e preencham o Formulário de V..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar processo de concurso público docente",
        "oQueE": "Consiste em selecionar docentes para provimento do cargo de professor efetivo de Ensino Superior da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar reconhecimento de identidade de gênero nos documentos acadêmicos",
        "oQueE": "A Divisão de Estágio Programas e Projetos de Ensino – Setor de Estágios Curriculares é responsável pelo assessoramento e pela instrução de todo o processo para firmar convênio d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar Reingresso",
        "oQueE": "O reingresso é o retorno do acadêmico em situação de Abandono de Curso por não renovação de matrícula."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar reingresso ao curso de graduação",
        "oQueE": "O reingresso é o retorno do acadêmico em situação de abandono de curso por não renovação de matrícula. A DRA presta informação e Orientação sobre documentação, procedimentos par..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar reserva do laboratório de informática multiuso da UEMS Campo Grande – Bloco F Sala T10",
        "oQueE": "Permite aos alunos, técnicos e professores realizar reservas para uso do laboratório de informática."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar serviços de fiscalização de contratos",
        "oQueE": "Informação sobre serviços de fiscalização em contratos terceirizados referentes aos serviços de: manutenção, higiene, limpeza e segurança da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar serviços de gestão de de patrimônio, infraestrutura e reserva de veículos oficiais",
        "oQueE": "Solicitar demandas no que diz respeito à infraestrutura, reserva de carros e patrimônio das unidades de Campo Grande"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar serviços de telefonia",
        "oQueE": "O usuário pode solicitar serviços de manutenção corretiva para os serviços de telefonia existentes na UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar suporte de serviço de asseio e conservação  nos espaços físicos",
        "oQueE": "Suporte referente ao serviço de asseio conservação par atender demandas cotidianas e eventos na Unidade Universitária."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar suporte em informática aos alunos, técnicos e professores da UEMS Campo Grande",
        "oQueE": "Permite aos alunos, técnicos e professores solicitar auxílio sobre informática."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar Tradução e interpretação de vídeos institucionais da UEMS",
        "oQueE": "Consiste na possibilidade do usuário solicitar o serviço deTradução e interpretação de vídeos institucionais da UEMS"
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar trancamento especial de matrícula de graduação",
        "oQueE": "É o trancamento compulsório por motivo de tratamento da saúde, superior a 60 (sessenta) dias, contados em dias corridos ou em datas alternadas; ou por prestação de serviço milit..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar utilização do espaço e/ou equipamentos do Laboratório de Geoprocessamento (LAGEO)",
        "oQueE": "Consiste na possibilidade do usuário acessar o laboratório e/ou seus equipamentos."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar visita cultural do acervo bibliográfico, audiovisual e digital",
        "oQueE": "Visitação cultural do Acervo bibliográfico, audiovisual e digital legado pela Profa. Maria da Glória Sá Rosa"
      },
      {
        "orgao": "UEMS",
        "titulo": "Suporte para sistemas institucionais da UEMS",
        "oQueE": "Consiste na possibilidade do usuário solicitar suporte para sistemas institucionais da UEMS."
      },
      {
        "orgao": "UEMS",
        "titulo": "Trancamento de matrícula de graduação",
        "oQueE": "Interrupção temporária dos estudos, mantendo o acadêmico vinculado à UEMS com direito à renovação de matrícula."
      },
      {
        "orgao": "UEMS",
        "titulo": "Transferência externa",
        "oQueE": "Informação e orientação sobre documentação, procedimentos e prazos para a solicitação de transferência externa A transferência externa é o ingresso de acadêmicos oriundos de out..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Transferência interna",
        "oQueE": "A transferência interna é a possibilidade do acadêmico, a partir da segunda série/terceiro semestre do curso de origem, migrar de curso no âmbito da UEMS, quando da disponibilid..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Utilizar o espaço e equipamentos do laboratório de estudos (LAET)",
        "oQueE": "Consiste na possibilidade de reservar o Laboratório de Estudos Territoriais (LAET) ou utilizar os materiais nele disponíveis."
      }
    ]
  },
  {
    "id": "servidor",
    "nome": "Servidor Público",
    "icon": "shield-check",
    "cor": "#455A64",
    "total": 136,
    "pctDoTotal": 11.2,
    "topOrgaos": [
      {
        "orgao": "AGEPREV",
        "qtd": 35
      },
      {
        "orgao": "SEFAZ MS",
        "qtd": 15
      },
      {
        "orgao": "UEMS",
        "qtd": 13
      },
      {
        "orgao": "ESCOLAGOV",
        "qtd": 7
      },
      {
        "orgao": "SAD",
        "qtd": 6
      }
    ],
    "exclusivas": 45,
    "compartilhadas": 91,
    "cards": [
      {
        "orgaoLabel": "AEM",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar emissão de Carteira de Identidade Funcional",
        "meta": "A Identidade Funcional é um documento oficial da identificação profissional, que comprova a situação funcio...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "meta": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria ent...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPEN",
        "titulo": "Solicitar peticionamento processual",
        "meta": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem...",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Agendar o atendimento presencial",
        "meta": "Permite que o servidor ou segurado agende dia e horário para ser atendido presencialmente junto a Gerência...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Buscar atendimento previdenciário – servidores, aposentados e pensionistas",
        "meta": "É o atendimento presencial, por telefone e/ou por e-mail, que é prestado aos segurados e seus dependentes,...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEPREV",
        "titulo": "Comunicar óbito de servidor ou pensionista",
        "meta": "É o canal para informar oficialmente à Ageprev o falecimento de um servidor aposentado ou pensionista, evit...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AEM",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar emissão de Carteira de Identidade Funcional",
        "oQueE": "A Identidade Funcional é um documento oficial da identificação profissional, que comprova a situação funcional do servidor público, bem como o seu cargo e prerrogativas associad..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar orientações para cumprimento de alternativas penais",
        "oQueE": "A Central Integrada de alternativas Penais, criada no Estado do Mato Grosso do Sul por meio de parceria entre o Governo do Estado de MS com a AGEPEN e o Tribunal de Justiça de M..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Agendar o atendimento presencial",
        "oQueE": "Permite que o servidor ou segurado agende dia e horário para ser atendido presencialmente junto a Gerência de Atendimento ao Segurado - Gease/Ageprev, evitando filas e garantind..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Buscar atendimento previdenciário – servidores, aposentados e pensionistas",
        "oQueE": "É o atendimento presencial, por telefone e/ou por e-mail, que é prestado aos segurados e seus dependentes, tanto os servidores ativos quanto os aposentados e pensionistas, nas q..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Comunicar óbito de servidor ou pensionista",
        "oQueE": "É o canal para informar oficialmente à Ageprev o falecimento de um servidor aposentado ou pensionista, evitando pagamentos indevidos e agilizando o processo de pensão ou encerra..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Fazer o recenseamento previdenciário",
        "oQueE": "Procedimento pelo qual servidores públicos estaduais efetivos, ativos, civis e militares, aposentados e pensionistas, definidos como segurados, da Administração Direta e Indiret..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor cedido sem ônus para o órgão de origem",
        "oQueE": "É o pagamento da contribuição previdenciária devida ao RPPS/MS pelo servidor ativo cedido para outro órgão, sem ônus para o órgão de origem. Nessa situação, o órgão que recebe o..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor em licença para acompanhamento de cônjuge",
        "oQueE": "É o pagamento mensal da contribuição previdenciária do servidor que está em licença sem remuneração para acompanhar o cônjuge transferido para outra localidade. Esse recolhiment..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor em licença para trato de interesse particular (TIP)",
        "oQueE": "É o pagamento mensal da contribuição previdenciária pelo servidor que está afastado do trabalho em período de licença sem remuneração (licença para trato de interesse particular..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pagar contribuição previdenciária – servidor em período de formação na ACADEPOL",
        "oQueE": "É o pagamento da contribuição previdenciária devida pelo servidor durante o período de formação na Academia de Polícia Civil (Acadepol). Quando autorizado por decisão judicial,..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Pedir nova análise da Perícia Médica (recorrer de decisão)",
        "oQueE": "É a forma de o servidor contestar uma decisão da Perícia Médica Oficial Estadual. Existem duas maneiras: Pedido de reconsideração – solicitar nova análise do laudo, apresentando..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Realizar Perícia Médica Remota",
        "oQueE": "É a realização de avaliação médica à distância, por meio de videoconferência ou outro recurso tecnológico, para servidores que estão afastados do trabalho por motivo de saúde."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber apoio para emitir o contracheque (aposentado ou pensionista)",
        "oQueE": "A Ageprev oferece orientação e apoio para que aposentados e pensionistas do Regime Próprio de Previdência Social de Mato Grosso do Sul (RPPS/MS) possam consultar e emitir seu co..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber apoio para viver bem após a aposentadoria e a pensão (Apoio psicossocial e previdenciário)",
        "oQueE": "Este serviço oferece apoio psicossocial para quem já se aposentou ou recebe pensão. A Ageprev ajuda você a cuidar da saúde, se organizar financeiramente e planejar essa nova fas..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientação para entrar no mercado de trabalho, com apoio da previdência (Jovem Pensionista)",
        "oQueE": "Serviço de apoio aos jovens que recebem pensão a se prepararem para trabalhar. Ele oferece cursos, oficinas e orientação para que o jovem possa aprender uma profissão, se desenv..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Receber orientações sobre seus direitos e deveres previdenciários, por meio do PROEP - Programa de Educação Previdenciária do Regime Próprio de Previdência Social de MS",
        "oQueE": "Este serviço ajuda você a entender melhor seus direitos e deveres como segurado da previdência do Estado, por meio de participação no PROEP - Programa de Educação Previdenciária..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Registrar a entrega de solicitações, acompanhadas ou não de documentos e de processos no setor de protocolo registro e arquivo",
        "oQueE": "É o serviço de recebimento, registro, envio e arquivamento de documentos ou processos administrativos e previdenciários, por meio da classificação, distribuição, controle de tra..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a aposentadoria, reserva ou reforma",
        "oQueE": "É o pedido de concessão do benefício de aposentadoria, reserva ou reforma ao segurado do Regime Próprio de Previdência Social de Mato Grosso do Sul (RPPS/MS) ou ao Sistema de Pr..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a inclusão e/ou exclusão de dependentes de pensão previdenciária",
        "oQueE": "É o procedimento para registrar ou retirar dependentes na pensão previdenciária. A inclusão pode ser necessária, por exemplo, para garantir direitos previdenciários e para fim d..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a isenção de imposto de renda",
        "oQueE": "Serviço que garante o direito à isenção do imposto de renda para aposentados, reformados ou pensionistas portadores de doença grave, contagiosa, incurável ou incapacitante, conf..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a pensão previdenciária",
        "oQueE": "A pensão por morte é um benefício concedido aos dependentes do segurado, que tenha pago mais de 18 (dezoito) contribuições. Também pode ser solicitada, em caso de desapareciment..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a redução da contribuição previdenciária",
        "oQueE": "É o serviço para o segurado aposentado, reformado e pensionista pedir a redução do valor descontado a título de contribuição previdenciária, desde que seja portador de patologia..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a reversão de cota de pensão",
        "oQueE": "É o pedido para redistribuir a cota da pensão entre os demais dependentes, quando um dos pensionistas falece ou perde o direito ao benefício."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a revisão de proventos - alteração de aposentadoria",
        "oQueE": "É o serviço destinado a revisar concessões de aposentadoria, corrigindo eventuais falhas na implantação em folha de pagamento, como reajustes não aplicados ou aplicados de forma..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a revisão de proventos de pensão previdenciária",
        "oQueE": "É a reanálise das concessões de pensão por morte, de transferência de cotas, bem como correção de equívocos na implantação em folha de pagamento, correção de reajustes não efetu..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a revisão de reforma",
        "oQueE": "É o serviço que permite ao militar reformado pedir a reavaliação do cálculo do benefício, quando houver erro, omissão ou informação incorreta nos valores concedidos, bem como qu..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer o auxílio-invalidez ao aposentado por incapacidade definitiva",
        "oQueE": "Para o aposentado civil, é o pagamento de uma parcela complementar de 25% ( vinte e cinco por cento) do valor da remuneração bruta mensal, limitada a um salário-mínimo, ao segur..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial fora do local de lotação ou de exercício (perícia em trânsito)",
        "oQueE": "É o atendimento pericial presencial ao servidor, familiar ou dependente que necessita de avaliação pericial fora do local de lotação ou exercício: o servidor que estiver, tempor..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para comunicação de acidente de trabalho - CAT",
        "oQueE": "Considera-se acidente de trabalho toda lesão corporal ou perturbação da capacidade funcional que, no exercício do trabalho, ou por motivo dele, resultar de causa externa, súbita..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para concessão de licença para tratamento de saúde",
        "oQueE": "Licença a que o servidor faz jus, quando acometido de doença que não lhe permita exercer as atividades do cargo, sendo possível sua concessão com apresentação do atestado médico..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para exames admissionais",
        "oQueE": "Os exames admissionais são executados pelos peritos objetivando a aferição do bem-estar físico, mental e social dos servidores, considerando inclusive, a ocupação, o cargo e as..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para readaptação provisória ou definitiva",
        "oQueE": "O servidor que teve perda em sua capacidade laboral, decorrente de alteração do estado de saúde física ou mental, é submetido à avaliação pericial, por intermédio do Grupo de Pe..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial para realizar exame periódico de saúde do Servidor",
        "oQueE": "O exame periódico é uma avaliação médica feita regularmente para cuidar da saúde dos servidores públicos. Ele serve para identificar precocemente qualquer problema de saúde que..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a avaliação pericial por motivo de doença em pessoa da família",
        "oQueE": "É o afastamento concedido ao servidor público quando um familiar próximo — como pai, mãe, cônjuge ou filho — fica doente e depende economicamente dele. A licença é autorizada ap..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar a concessão de horário especial para servidor com dependente com deficiência",
        "oQueE": "É o direito do servidor público estadual de pedir redução ou flexibilização de sua jornada de trabalho, sem compensação de horas, quando precisar prestar assistência direta a cô..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Solicitar Peticionamento Processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar certidão de localização quanto ao município",
        "oQueE": "É a comprovação em qual município o imóvel está inserido; geralmente utilizada para transferência da matrícula de comarca ou para averbação da Certificação do INCRA junto a matr..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Acessar dados do portal da transparência",
        "oQueE": "Consultar os dados do Poder Executivo Estadual sobre despesas, receitas, contratos, convênios, licitações, organograma do governo, servidores públicos, patrimônio, orçamento, re..."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "CGP",
        "titulo": "Emitir certidão de antecedentes criminais",
        "oQueE": "Obtenção de Antecedentes Criminais, emitido pelo Instituto de Identificação da Coordenadoria-Geral de Perícias/SEJUSP/MS, que tem por objetivo informar a existência ou a inexist..."
      },
      {
        "orgao": "CGP",
        "titulo": "Solicitar carteira de identidade",
        "oQueE": "A Carteira de Identidade, ou RG, é feita pelo Instituto de Identificação da Coordenadoria-Geral de Perícias. É um documento oficial válido em todo o Brasil."
      },
      {
        "orgao": "CGP",
        "titulo": "Solicitar cópia de laudos periciais",
        "oQueE": "Possibilita a obtenção de cópia de laudos periciais produzidos pelas unidades de criminalística, de medicina legal, de identificação e de laboratório forense da Coordenadoria-Ge..."
      },
      {
        "orgao": "CGP",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "CGP",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Cursar a Reciclagem para Condutor Infrator",
        "oQueE": "Curso destinado aos condutores penalizados por Suspensão da CNH e nas demais situações estabelecidas pelos artigos 268 do CTB e 87 da Resolução 1.020 do Contran."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Protocolar defesa e recurso a processo administrativo de suspensão/cassação de CNH",
        "oQueE": "Serviço destinado a protocolar recurso para processo administrativo de suspensão/cassação de CNH."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Solicitar programa Detran vai à escola",
        "oQueE": "O Programa “Detran vai à escola” atende as Instituições de Ensino de Mato Grosso do Sul, fomentando a educação e segurança de trânsito, apoiando e promovendo ações educativas à..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Concorrer ao Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública",
        "oQueE": "O Governo do Estado, sob coordenação da Fundação Escola de Governo de Mato Grosso do Sul, realiza o Prêmio Sul-Mato-Grossense de Inovação na Gestão Pública, com o objetivo de in..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Obter descontos em instituições de ensino parceiras",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Oferecer parceria de descontos para servidores estaduais",
        "oQueE": "A ESCOLAGOV/MS, por meio de parceria com instituições privadas, visa estimular o aprimoramento pessoal e profissional dos servidores públicos do poder executivo estadual de Mato..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar cursos de aperfeiçoamento (carga horária acima de 120 horas)",
        "oQueE": "Oferta de vagas em cursos de aperfeiçoamento (carga horária acima de 120 horas), de forma a subsidiar o desenvolvimento profissional servidores públicos do estado."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar cursos de graduação e pós-graduação",
        "oQueE": "Oferta de vagas em cursos de graduação e pós-graduação, com vistas à formação contínua dos servidores públicos do estado."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Realizar programa ou cursos de capacitação continuada",
        "oQueE": "A Escolagov promove, elabora e executa programas e projetos de qualificação e formação profissional dos agentes públicos estaduais, como meio de desenvolvimento do serviço públi..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitação de Diárias para Servidores da Fundect",
        "oQueE": "Serviço destinado à solicitação de diárias para servidores da Fundect que necessitem realizar viagens a serviço, participação em eventos, reuniões técnicas, capacitações, visita..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitação ao Programa de Formação e Capacitação Esportiva oferecido pela UCAPES aos profissionais de Educação Física e Acadêmicos, nas diversas áreas: esporte, treinamentos, paradesporto, saúde e gestão esportiva",
        "oQueE": "É um programa de Capacitação Esportiva voltado aos profissionais e acadêmicos de Educação Física, que buscam qualificação em diferentes áreas da Educação Física de forma eficien..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Solicitar atendimento religioso a pacientes internados e familiares",
        "oQueE": "A Capelania contribui para a promoção do bem-estar de servidores, pacientes e acompanhantes, na prestação de ações a pessoa hospitalizada ou não compartilha a fé e realiza ativi..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar orientação como baixar a carteira de trabalho digital",
        "oQueE": "A Carteira de Trabalho e Previdência Social (CTPS) é o documento que registra a vida profissional do trabalhador e garante o acesso aos direitos trabalhistas previstos em lei. A..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Cancelar registro de núcleo avícola comercial",
        "oQueE": "Suspensão ou o encerramento das atividades."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Consultar documentos referente ao trânsito de animais",
        "oQueE": "O Sistema E-SANIAGRO é um Sistema on line que permite ao produtor, através do portal GAP (login, código de acesso e senha particular) realizar: emissão da guia de trânsito anima..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Suspender ou cancelar registro junto ao Serviço de Inspeção Estadual - SIE a pedido",
        "oQueE": "Suspensão ou cancelamento do registro junto ao Serviço de Inspeção Estadual (SIE), a pedido do próprio estabelecimento."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "PCMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Consultar editais de concursos e processos seletivos da PGE/MS",
        "oQueE": "Acesse a página de Concursos Públicos e Processos Seletivos aqui. Este serviço permite que você acesse os editais dos concursos e processos seletivos da PGE/MS. Esses editais tr..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pedir Revisão de Dívida Inscrita (PRDI)",
        "oQueE": "O Pedido de Revisão de Dívida Inscrita (PRDI) permite que o contribuinte solicite à Procuradoria-Geral do Estado de Mato Grosso do Sul (PGE/MS) a reanálise administrativa dos dé..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar peticionamento em processo administrativo",
        "oQueE": "Este serviço permite que cidadãos, empresas e servidores estaduais iniciem processos administrativos junto aos órgãos do Poder Executivo Estadual. O peticionamento pode ser feit..."
      },
      {
        "orgao": "SAD",
        "titulo": "Aderir ao cadastro de fornecedores",
        "oQueE": "O Unidade de Cadastro de Fornecedores (UCAF) , diretamente subordinado à Superintendência de Gestão de Compras e Materiais, administra e controla o cadastro dos fornecedores do..."
      },
      {
        "orgao": "SAD",
        "titulo": "Participar de licitação na modalidade leilão",
        "oQueE": "Este serviço consiste na realização de licitações na modalidade leilão para a venda (alienação) de bens que pertencem ao Estado de Mato Grosso do Sul. Ele abrange tanto bens móv..."
      },
      {
        "orgao": "SAD",
        "titulo": "Seleção e Ingresso de Pessoal por meio de Concursos Públicos, Processos Seletivos Internos e Processos Seletivos Simplificados",
        "oQueE": "Compete à Secretaria de Estado de Administração o planejamento, a coordenação e a execução do processo de recrutamento, seleção e de admissão de pessoal, mediante a realização d..."
      },
      {
        "orgao": "SAD",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SAD",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SAD",
        "titulo": "Solicitar serviço de protocolos",
        "oQueE": "Os serviços de protocolos são oferecidos pelos órgãos do Poder Executivo Estadual, sendo eles: recebimento, classificação, registro, distribuição, controle da tramitação, expedi..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar capacitação para conselheiros tutelares e municipais dos direitos da criança e do adolescente",
        "oQueE": "Disponibiliza suporte técnico, orientação, formações presenciais e on-line aos Conselhos Tutelares e aos Conselhos Municipais dos Direitos da Criança e do Adolescente (CMDCA) de..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar inclusão no Programa Mais Social",
        "oQueE": "O Programa Mais Social oferece apoio financeiro e alimentar a famílias em situação de vulnerabilidade em Mato Grosso do Sul. O benefício é de R$ 450,00 por mês, pago por cartão..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar orientação técnica para a criação e fortalecimento de associações comunitárias",
        "oQueE": "A Subsecretaria de Políticas Públicas para Assuntos Comunitários fornece orientação técnica e capacitação para criar e fortalecer associações e cooperativas locais. Promovemos a..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar avaliação funcional da visão",
        "oQueE": "A Avaliação Funcional da Visão é um procedimento educacional que analisa como o estudante com deficiência visual utiliza sua visão residual em situações de aprendizagem e intera..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar Materiais Didáticos e Paradidáticos Acessíveis para Estudantes com Deficiência Visual nos Formatos Braille, Ampliado e Áudio",
        "oQueE": "Consiste na oferta de materiais pedagógicos acessíveis para estudantes com deficiência visual, conforme a Avaliação Funcional da Visão. Os formatos incluem: material ampliado pa..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Autorização específica - concessão ou renovação do diferimento do EAC previsto no Convênio ICMS nº 15/2023, no cumprimento de obrigações, que dispõe sobre o regime de tributação monofásica do ICMS",
        "oQueE": "Os contribuintes deverão estar relacionados no Anexo II ou IV do Ato COTEPE/ICMS nº 43/2023 para a concessão do diferimento do imposto retido estabelecido nos §§ 2º e 5º da cláu..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro da agropecuária (CAP) - suspensão temporária da inscrição estadual a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual no Cadastro da Agropecuária, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisa..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cadastro do comércio, indústria e serviços (CCIS) - suspensão da eficácia temporária a pedido do contribuinte e sua prorrogação",
        "oQueE": "Solicitação da suspensão temporária da eficácia da inscrição estadual, a requerimento do contribuinte, por prazo de até um ano, nos casos de paralisação das atividades."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Cancelamento ou suspensão de inscrição estadual de terceiro no cadastro",
        "oQueE": "Solicitação de suspensão ou cancelamento de inscrição estadual, protocolado pelo PROPRIETÁRIO e/ou por TERCEIRO interessado, em razão da perda do direito de utilização da área (..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Concessão de credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Goiás, com a suspensão da cobrança do ICMS, nos te..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento para recebimento de produtos agrícolas para depósito, remetidos por produtores rurais do estado de Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para recebimento de soja e milho em grãos e arroz em casca para depósito, remetidos por produtores rurais do Estado de Mato Grosso, com a suspensão da cobrança do..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Goiás, com suspensão da cobrança do ICMS (Protocolo ICMS 10/98)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de produtos agrícolas para depósito situado em Goiás, com a suspensão da cobrança do ICMS, nos termos do Protocolo ICMS 10/98..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Credenciamento - remessa de produtos agrícolas para depósito em Mato Grosso, com suspensão da cobrança do ICMS (Protocolo ICMS 10/05)",
        "oQueE": "Credenciamento para efetuar remessas interestaduais de soja e milho em grãos e arroz em casca , de produção agrícola do remetente, para depósito situado em Mato Grosso, com a su..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Guia de trânsito suspensa - prorrogação do prazo de suspensão",
        "oQueE": "É a disponibilização de canais de acesso direcionados ao cidadão/contribuinte para protocolo e apreciação de solicitação de prorrogação de prazo de suspensão de Guia de Trânsito..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS importação - suspensão da cobrança do imposto nas operações sob regime especial aduaneiro de admissão temporária",
        "oQueE": "Solicitar a suspensão da cobrança do ICMS sob regime especial aduaneiro de admissão temporária"
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - liberação da entrada de mercadorias procedentes de outras unidades da federação e destinadas à demonstração em feiras e eventos realizados no estado, com suspensão da cobrança do ICMS",
        "oQueE": "Solicitar a liberação da entrada de mercadorias procedentes de outras Unidades da Federação destinadas à demonstração em feiras e eventos realizados no Estado, com suspensão da..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ICMS - prorrogação de prazo para retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do imposto",
        "oQueE": "Solicitar prorrogação de prazo para o retorno de mercadorias ou bens remetidos ou recebidos com suspensão ou não incidência do ICMS desde que o pedido de prorrogação seja aprese..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Nota fiscal de produtor eletrônica (NFP-e) - baixa de pendência de NFP-e de remessa com suspensão/não-incidência do ICMS, se comprovado o retorno da mercadoria",
        "oQueE": "Solicitar a baixa da pendência da NFP-e emitida com suspensão ou não-incidência do ICMS, desde que comprovado que a mercadoria retornou dentro do prazo determinado pela legislaç..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Providência cadastral para apreciação da Superintendência",
        "oQueE": "Solicitação de inscrição, suspensão, reativação, alteração, etc., no Cadastro de Contribuinte Estadual (CCE), bem como os pedidos de reconsideração e/ou revisão desses, que por..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Regime especial - concessão ou renovação de tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de transporte e na armazenagem de etanol combustível pelo sistema dutoviário",
        "oQueE": "Solicitar a concessão ou renovação do Regime Especial para ter tratamento diferenciado no cumprimento de obrigações tributárias relativas ao ICMS na prestação de serviço de tran..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Redefinir a senha do login de rede",
        "oQueE": "Realizar troca da senha de login na rede pelo servidor."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar acesso ao Wordpress",
        "oQueE": "Concede permissão de acesso ao site WordPress para que o servidor possa realizar manutenção em sites específicos do Governo."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar capacitação e qualificação para atuar como agente voluntário de Defesa Civil - AVDC",
        "oQueE": "Consiste na Capacitação e qualificação do instruindo (Agente Voluntário de Defesa Civil – AVDC) para atuar em situações de desastres, emergência e calamidade pública com objetiv..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar treinamento do WordPress",
        "oQueE": "Oferece treinamento no gerenciador de conteúdos WordPress para que o servidor possa gerenciar conteúdo em sites específicos do Governo"
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar pedido de acesso à processo administrativo disciplinar ou à sindicância no âmbito da Corregedoria da (SAS)",
        "oQueE": "Este serviço permite que o cidadão, servidor público ou órgãos do poder Judiciário, Ministério Público e demais interessados, solicite acesso a processos administrativos discipl..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar telediagnóstico em teledermatologia",
        "oQueE": "A Teledermatologia em demartologia é um modelo funcional de diagnóstico em dermatologia via internet, através do Sistema de Telemedicina e Telessaúde (STT), que possibilita e fa..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar capacitação sobre economia criativa",
        "oQueE": "Capacitação sobre Economia Criativa é a realização de cursos promovidos e ofertados pela Superintendência de Economia Criativa da SETESC, em parceria com o Sistema S e demais Se..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Assessoria de projetos especiais",
        "oQueE": "Este serviço consiste na assessoria especializada para servidores, docentes e técnicos que desejam desenvolver projetos de pesquisa e extensão no âmbito da gerência de Campo Gra..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Declaração das remunerações de contribuições previdenciárias para fins de benefício junto ao INSS",
        "oQueE": "É o documento que comprova as Remunerações de Contribuições Previdenciárias junto ao INSS, enquanto o segurado teve vínculo como não-estatutário ou comissionado na Universidade..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Declaração para fins de proporcionalização ou isenção do desconto do INSS acima do teto",
        "oQueE": "É o documento que informa o valor de contribuição previdenciária dos servidores que possuem mais de um vínculo empregatício, para fins de proporcionalização / isenção do descont..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de Declaração de Tempo de Contribuição ao RGPS (DTC)",
        "oQueE": "O cidadão que tem ou teve vínculo com a UEMS como servidor contratado ou comissionado que teve a contribuição recolhida para o INSS pode solicitar uma Declaração de Tempo de Con..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Pedido de Declaração de Vínculo",
        "oQueE": "O cidadão que tem ou teve vínculo com a UEMS como servidor efetivo, contratado ou comissionado pode solicitar uma declaração do vínculo com a Instituição."
      },
      {
        "orgao": "UEMS",
        "titulo": "Programa de mobilidade internacional",
        "oQueE": "Consiste na inscrição e participação de alunos e servidores no programa de mobilidade internacional da UEMS para ações de ensino, pesquisa e extensão em instituições estrangeira..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitação de login UEMS para alunos da pós-graduação",
        "oQueE": "Este serviço consiste na criação de um usuário e senha que possibilitam que o aluno tenha acesso à funcionalidades como o Acesso Café da Rede Nacional de Ensino e Pesquisa e ao..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar abono de faltas",
        "oQueE": "O abono de faltas será concedido quando o aluno participar, em períodos compatíveis com as atividades acadêmicas, em: I. exercícios ou manobras militares, convocados por órgão d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar manutenção e conservação dos espaços físicos da UEMS",
        "oQueE": "Compreendem a conservação, manutenção preventiva e corretiva de edificações, instalações, sistemas hidráulicos, sistemas elétricos, sistemas de refrigeração e serviços básicos d..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar matrícula inicial",
        "oQueE": "Refere-se à matrícula dos candidatos participantes do vestibular ou do ENEM (Exame Nacional do Ensino Médio) devidamente cadastrados e classificados no SISU (Sistema de Seleção..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar peticionamento processual",
        "oQueE": "O serviço é oferecido pelos órgãos e entidades do Poder Executivo Estadual aos Usuários Externos que podem ser pessoas físicas, jurídicas e servidores estaduais, que possuam dem..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar processo de concurso público docente",
        "oQueE": "Consiste em selecionar docentes para provimento do cargo de professor efetivo de Ensino Superior da UEMS"
      }
    ]
  },
  {
    "id": "cidadao_geral",
    "nome": "Cidadão Geral",
    "icon": "user",
    "cor": "#5B6770",
    "total": 255,
    "pctDoTotal": 20.9,
    "topOrgaos": [
      {
        "orgao": "SANESUL",
        "qtd": 41
      },
      {
        "orgao": "SEGOV MS",
        "qtd": 19
      },
      {
        "orgao": "SEFAZ MS",
        "qtd": 13
      },
      {
        "orgao": "CBMMS",
        "qtd": 8
      },
      {
        "orgao": "MSGÁS",
        "qtd": 8
      }
    ],
    "exclusivas": 255,
    "compartilhadas": 0,
    "cards": [
      {
        "orgaoLabel": "AEM",
        "titulo": "Fazer pedido de acesso à informação",
        "meta": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo E...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Registrar denúncia",
        "meta": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual.",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Registrar manifestação de ouvidoria",
        "meta": "A Ouvidoria da AEM/MS é responsável por receber e processar as manifestações da população no âmbito de suas...",
        "status": "Regular",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AEM",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "meta": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elog...",
        "status": "Vigente",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Fazer pedido de acesso à informação",
        "meta": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo E...",
        "status": "Sem pendencias",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Registrar denúncia",
        "meta": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual.",
        "status": "Em analise",
        "statusTone": "warning"
      },
      {
        "orgaoLabel": "AGEHAB",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "meta": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elog...",
        "status": "Disponivel",
        "statusTone": "info"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Fazer pedido de acesso à informação",
        "meta": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo E...",
        "status": "Em dia",
        "statusTone": "success"
      },
      {
        "orgaoLabel": "AGEMS",
        "titulo": "Obter o modelo oficial de adesivo com os contatos da Ouvidoria da AGEMS para ônibus e vans",
        "meta": "Obter o modelo oficial de adesivo com os contatos da Ouvidoria da AGEMS para pedido de informação, registro...",
        "status": "Regular",
        "statusTone": "success"
      }
    ],
    "cartas": [
      {
        "orgao": "AEM",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AEM",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AEM",
        "titulo": "Registrar manifestação de ouvidoria",
        "oQueE": "A Ouvidoria da AEM/MS é responsável por receber e processar as manifestações da população no âmbito de suas atividades delegadas pelo INMETRO."
      },
      {
        "orgao": "AEM",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEHAB",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Obter o modelo oficial de adesivo com os contatos da Ouvidoria da AGEMS para ônibus e vans",
        "oQueE": "Obter o modelo oficial de adesivo com os contatos da Ouvidoria da AGEMS para pedido de informação, registro de reclamação ou denúncia sobre o transporte rodoviário intermunicipa..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Registrar manifestação sobre serviços fiscalizados pela AGEMS",
        "oQueE": "A Ouvidoria é um espaço de comunicação com a Agência Reguladora, através do qual o cidadão pode registrar reclamações, denúncias, informação, sugestão ou elogios sobre os serviç..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGEMS",
        "titulo": "Utilizar o App MS TRIP para informações e serviços de transporte de passageiros",
        "oQueE": "MS TRIP é o aplicativo desenvolvido pela AGEMS que facilita o acesso a informações e serviços sobre o transporte regular de passageiros nas linhas intermunicipais. O APP permite..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Registrar elogio aos servidores",
        "oQueE": "Ao fazer um elogio, o usuário demonstra reconhecimento ou satisfação sobre o serviço oferecido (ou atendimento recebido) da Administração Pública Estadual e pode ser dirigida a..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGEPEN",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Falar com a ouvidoria",
        "oQueE": "É um serviço on-line, à disposição de usuários do MSPREV, mediante o qual um ouvidor recebe, realiza análise prévia, registra e providencia o tratamento adequado às manifestaçõe..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGEPREV",
        "titulo": "Requerer a certidão de tempo de contribuição e/ou declaração de tempo de contribuição",
        "oQueE": "A Certidão de Tempo de Contribuição/CTC (para ex-segurados que contribuíram para o Regime Próprio de Previdência Social/RPPS) e/ou a Declaração de Tempo de Contribuição/DTC (par..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Obter anuência para o reconhecimento de limites da faixa de domínio com propriedades rurais que confrontam e/ou margeiam as rodovias estaduais",
        "oQueE": "Consiste na solicitação por proprietários rurais de reconhecimento de limites das propriedades que confrontam rodovias pertencentes ao Sistema Rodoviário Estadual, sob jurisdiçã..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Permissão para a Utilização e/ou Ocupação das Faixas de Domínio",
        "oQueE": "Consiste em fornecer a terceiros, públicos ou particulares, o uso, a utilização e/ou a ocupação das Faixas de Domínio, e das áreas não-edificáveis, das estradas e rodovias do Es..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Solicitar emissão da autorização para a utilização/uso e/ou ocupação das faixas de domínios",
        "oQueE": "Consiste em fornecer a terceiros, públicos ou particulares, o uso, a utilização e/ou a ocupação das Faixas de Domínio, e das áreas não-edificáveis, das estradas e rodovias do Es..."
      },
      {
        "orgao": "AGESUL",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "AGRAER",
        "titulo": "Solicitar baixa de Hipoteca do Programa Nacional de Crédito Fundiário - PNCF",
        "oQueE": "Serviço destinado à análise e emissão de manifestação formal da Unidade Técnica Estadual (UTE) para fins de baixa de hipoteca incidente sobre imóvel financiado com recursos do P..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Analisar processos de segurança contra incêndio e pânico PSCIP",
        "oQueE": "O serviço de análise de processos de segurança contra incêndio e pânico visa à apresentação, por parte do interessado, das medidas de segurança previstas/existentes nos locais o..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar combate a incêndios urbanos e rurais",
        "oQueE": "Conjuntos de ações destinadas a ocorrências onde envolvem fogo não controlado, que pode ser extremamente danosa para os seres vivos e as estruturas. A exposição a um incêndio po..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar suporte técnico relacionado à segurança contra incêndio e pânico",
        "oQueE": "É a solicitação de atendimento (suporte técnico) prestado pela Diretoria de Atividades Técnicas para resolução de situações ou dúvidas que envolvam o serviço de segurança contra..."
      },
      {
        "orgao": "CBMMS",
        "titulo": "Solicitar vistorias relacionadas à segurança contra incêndio, pânico e outros riscos",
        "oQueE": "É a realização de vistorias nas edificações, nas instalações, nas ocupações temporárias e nas áreas de risco, visando à concessão do respectivo Certificado de Vistoria."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Avaliar programas de integridade de pessoas jurídicas de direito privado",
        "oQueE": "Avaliação dos programas de integridade das pessoas jurídicas de direito privado que, nos termos de legislação específica, devam apresentar seus programas de integridade aos órgã..."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupçãp praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referentes aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "CGE MS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e preencham o Formulário de V..."
      },
      {
        "orgao": "CGP",
        "titulo": "Fazer Pedido de Informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "CGP",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "CGP",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Fazer pedido de informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "DETRAN",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "ESCOLAGOV",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FADEB",
        "titulo": "Fazer Pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FADEB",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ílicito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FADEB",
        "titulo": "Registrar Reclamação, Solicitação, Sugestão e Elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Cadastro no Sistema Estadual de Bibliotecas Públicas de Mato Grosso do Sul (SEBP/MS)",
        "oQueE": "O Cadastro no Sistema Estadual de Bibliotecas Públicas de Mato Grosso do Sul (SEBP/MS) é o procedimento que identifica, integra e atualiza as bibliotecas públicas e comunitárias..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Fazer Pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual"
      },
      {
        "orgao": "FCMS",
        "titulo": "Registrar Denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FCMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FCMS",
        "titulo": "Solicitar liberação para exposição e comercialização de peças artesanais de MS",
        "oQueE": "Local para os artistas que são cadastrados no Programa do Artesanato Brasileiro e comercializar as suas peças como referência cultural regional."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Acessar notícias em tempo real gratuitamente (Portal da Educativa)",
        "oQueE": "O Portal da Educativa fornece notícias em tempo real de forma gratuita e ilimitada. O serviço dá livre acesso ao conteúdo jornalístico disponibilizado para qualquer cidadão no e..."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Acessar site para ouvir a rádio educativa fm 104,7 de forma gratuita (Portal da Educativa)",
        "oQueE": "O site Portal da Educativa reúne desde 2015 toda programação diária da rádio Educativa FM 104,7 ao vivo. O serviço dá livre acesso ao conteúdo disponibilizado para qualquer cida..."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Fazer Pedido de acesso a informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FERTEL - Educativa MS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDECT",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Fazer pedido de acesso à Informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Participar do projeto lazer nas cidades",
        "oQueE": "O projeto lazer nas cidades tem por objetivo levar o esporte de participação e lazer nas cidades do interior do estado, com uma programação conjunta com as prefeituras municipai..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar esporte de aventura e natureza",
        "oQueE": "Busca fomentar e desenvolver a prática dos esportes de aventura (mtb, corrida de trilha, rapel, sleck line, moto cross entre outros) de areia (beach tennis, futevôlei e vôlei de..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar esportes urbanos",
        "oQueE": "Busca fomentar e desenvolver a prática dos esportes urbanos e de participação (corrida de rua, ciclismo, skate e esportes indoor) aquáticos (natação) no estado de Mato Grosso do..."
      },
      {
        "orgao": "FUNDESPORTE",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Acessar indicadores da atividade turística do Mato Grosso Do Sul",
        "oQueE": "Acesso via página da internet, aos dados e indicadores disponibilizados de forma regular e periódica através de boletins informativos, diagnósticos e relatórios estatísticos, a..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Solicitar orientação técnica para o desenvolvimento do setor de turismo em Mato Grosso do Sul",
        "oQueE": "É uma das finalidades da Fundação de Turismo de Mato Grosso do Sul prestar orientação, através de seus técnicos, aos órgãos gestores do turismo dos municípios, às Instâncias de..."
      },
      {
        "orgao": "FUNDTUR",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNSAU",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "FUNTRAB",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Denunciar locais ou produtos e subprodutos clandestinos de origem animal",
        "oQueE": "Realizar denúncias a respeito de abates clandestinos de animais ou venda de produtos de origem animal irregulares."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "IAGRO",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Protocolar documentos administrativos ambientais",
        "oQueE": "Recebimento e registro de documentos destinados ao IMASUL, com geração de número único de protocolo (NUP) para acompanhamento."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar análise de sobreposição de imóveis rurais com unidades de conservação para anuência de concessão de crédito rural e certificação",
        "oQueE": "Trata-se de um serviço destinado à análise e manifestação do órgão ambiental quanto à existência de sobreposição entre imóveis rurais e Unidades de Conservação, no contexto de s..."
      },
      {
        "orgao": "IMASUL",
        "titulo": "Solicitar autorização para a realização de eventos e outros usos no Parque das Nações Indígenas (PNI)",
        "oQueE": "Procedimento administrativo destinado à emissão de Ofício de Autorização de Uso ou Termo de Autorização de Uso para a realização de eventos em espaço público."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "JUCEMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Acessar portal da transparência da MSGÁS",
        "oQueE": "Acesso, via página de internet ( http://transparencia.msgas.com.br ) , a dados da MSGÁS sobre despesas, receitas, contratos, convênios, licitações, organograma da companhia, fun..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Aderir à fatura de consumo online",
        "oQueE": "Prestar atendimento ao consumidor para solicitações de envio das faturas via e-mail, somente."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Atualizar cadastro",
        "oQueE": "Atualização de informações presentes no cadastro dos clientes da MSGÁS."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Emitir 2ª via da fatura",
        "oQueE": "Visa à emissão de segunda via da fatura de gás quando solicitado pelo usuário."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Ser atendido no Fale Conosco",
        "oQueE": "Atendimento à população através do site da MSGÁS ( www.msgas.com.br ) para dúvidas, elogios, esclarecimentos, reclamações e solicitações diversas."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar acompanhamento técnico em obras e/ou serviço de apoio",
        "oQueE": "Acompanhamento técnico pela MSGÁS de obras e serviços realizados próximos da rede de distribuição de gás natural a fim de preservar a tubulação de possíveis danos e oferecer seg..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar atendimento de emergência",
        "oQueE": "Atendimento gratuito e disponível 24 (vinte e quatro) horas por dia à população pelo telefone 0800-647-0300 para comunicação de casos emergenciais como cheiro de gás, alteração..."
      },
      {
        "orgao": "MSGÁS",
        "titulo": "Solicitar ligação de gás natural",
        "oQueE": "Este serviço refere-se à solicitação do cliente de interligação à rede de distribuição de gás natural para inicio de fornecimento."
      },
      {
        "orgao": "PCMS",
        "titulo": "Fazer pedido de  acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "PCMS",
        "titulo": "Registrar boletim de ocorrências on-line",
        "oQueE": "A Delegacia Virtual, permite ao cidadão: Registrar Boletim de Ocorrências on-line dos seguintes fatos: FURTO SIMPLES, DESAPARECIMENTO DE PESSOAS, EXTRAVIO DE DOCUMENTOS e LOCALI..."
      },
      {
        "orgao": "PCMS",
        "titulo": "Registrar boletins de ocorrência - B.O.",
        "oQueE": "O serviço de registro de ocorrências, consiste no registro de notícias criminais e de informações para conhecimento da Autoridade Policial. As ocorrências policiais podem ser re..."
      },
      {
        "orgao": "PCMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito da Polícia Civil de Mato Grosso do Sul."
      },
      {
        "orgao": "PCMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos da Polícia Civil de Mato Grosso do..."
      },
      {
        "orgao": "PCMS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Pedir acesso à informação",
        "oQueE": "Este serviço permite que qualquer pessoa solicite informações públicas de órgãos do Poder Executivo Estadual, conforme a Lei de Acesso à Informação (Lei Federal nº 12.527/2011)."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Propor acordo na Câmara Administrativa de Solução de Conflitos (CASC)",
        "oQueE": "Este serviço permite apresentar propostas de acordo ao Estado ou às suas autarquias e fundações para resolver conflitos, com ou sem processo judicial. É preciso explicar os fato..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Protocolar documentos na PGE",
        "oQueE": "Este serviço recebe e registra documentos encaminhados à Procuradoria-Geral do Estado de Mato Grosso do Sul (PGE/MS). Após o registro, os documentos são enviados à unidade respo..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Este serviço permite denunciar suposto ato ilícito, irregularidade ou corrupção praticados no Poder Executivo Estadual."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Este serviço permite registrar manifestações de ouvidoria como reclamações, solicitações, sugestões ou elogios sobre serviços públicos, ações do governo e atuação de servidores..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar consultoria e assessoramento jurídicos",
        "oQueE": "Este serviço permite que órgãos e entidades da Administração Pública Estadual recebam apoio jurídico da PGE/MS. O objetivo é garantir a legalidade dos atos administrativos, solu..."
      },
      {
        "orgao": "PGE MS",
        "titulo": "Solicitar vista e cópia de processo ou documento",
        "oQueE": "Este serviço permite que pessoas físicas, jurídicas, ou seus representantes legais, solicitem vista ou cópia de processos e documentos. O pedido deve comprovar a condição de int..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "PMMS",
        "titulo": "Inserir Força Tática – segundo nível de força para proteção de vidas nas cidades e campos",
        "oQueE": "O serviço de policiamento ostensivo de força tática possui o objetivo de reforçar as equipes de rádio patrulha em ocorrências com maior gravidade ou necessidade de maior emprego..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Realizar denúncia ou Disque Denúncia 181",
        "oQueE": "O disque denúncia é um serviço disponível à sociedade para realizar denúncias, de maneira e gratuita, de práticas de ilícitos via telefone através do número 181, ou registro on-..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "PMMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Solicitar o atendimento equoterapêutico.",
        "oQueE": "O Centro de Equoterapia da PMMS é uma instituição fundada em 3 de setembro de 2002, regida por estatuto, entidade civil, sem fins lucrativos, assistencial e de filantropia a por..."
      },
      {
        "orgao": "PMMS",
        "titulo": "Solicitar serviço de emergência e urgência 190",
        "oQueE": "O 190 é o telefone de emergência da Polícia Militar. Ele serve para que qualquer pessoa possa pedir ajuda imediata quando houver uma situação de risco, crime acontecendo ou amea..."
      },
      {
        "orgao": "SAD",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SAD",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SAD",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade de usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Informar extravazamento no reservatório de água da Sanesul",
        "oQueE": "Serviço destinado para verificação de qualquer tipo de extravazamento de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Portal Transparência Sanesul",
        "oQueE": "É o acesso via página de internet aos dados da Sanesul sobre informações institucionais, funcionários, contratos, licitações, água, esgoto, financeiro e E-SIC."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar 2ª via de conta",
        "oQueE": "É a emissão de 2ª via de conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar aferição de hidrômetro",
        "oQueE": "Aferição de hidrômetro das ligações de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar alteração da data de vencimento da conta de água e/ou esgoto",
        "oQueE": "Alteração da data de vencimento da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar alteração de titularidade da conta de água e/ou esgoto",
        "oQueE": "Alteração de titularidade/nome na conta de água e/ou esgoto"
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar a verificação da conta de água e/ou esgoto não entregue",
        "oQueE": "Este serviço é utilizado para verificar se uma conta realmente não foi entregue, quando o cliente reclama no atendimento."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar benefício da tarifa social",
        "oQueE": "É a concessão do benefício de tarifa diferenciada que pode ser concedido aos clientes de baixa renda que atendam aos critérios previstos na Portaria de AGEMS n° 211/2021."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar conserto de cavalete",
        "oQueE": "Conserto do cavalete quando existe vazamento em alguma parte do mesmo."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar consumo final da ligação",
        "oQueE": "É a solicitação a pedido do cliente de encerramento do fornecimento dos serviços de água e esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar deslocamento de ligação ou de cavalete de água",
        "oQueE": "Quando o cliente solicita o deslocamento do cavalete do local para caixa de proteção (Padrão SANESUL) no muro ou mureta."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar desobstrução de esgoto",
        "oQueE": "É quando há entupimento na caixa inspeção/til ou no poço de visita (PV) e há necessidade de desobstruir."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar histórico de consumo",
        "oQueE": "Emissão de histórico de consumo da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar histórico de faturamento",
        "oQueE": "Emissão de histórico de faturamento da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar histórico de pagamento",
        "oQueE": "Emissão de histórico de pagamento da conta de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar informações sobre dados cadastrais",
        "oQueE": "Este serviço é utilizado quando o cliente solicita informações sobre dados cadastrais tais como: informações sobre a titularidade, endereço, economia, número/data de instalação..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar levantamento de deslocamento de ligação ou de cavalete",
        "oQueE": "É o levantamento realizado no local, visando verificar para onde o cliente pretende deslocar o cavalete ou a ligação e se há viabilidade técnica para a execução do deslocamento."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar levantamento de ligação de água e/ou esgoto",
        "oQueE": "É o pedido do levantamento de ligação de água e/ou esgoto que deverá ser feito antes de implantar a ligação. É o levantamento realizado no local, com intuito de verificar a exis..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar ligação de água e/ou esgoto",
        "oQueE": "É a solicitação de implantação de ligação de água e/ou esgoto em local que ainda não possui ligação."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar padronização de cavalete soterrado",
        "oQueE": "Quando o cliente solicita a padronização de cavalete soterrado do local."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar recolocação de tampão de esgoto",
        "oQueE": "Este serviço é utilizado para executar recolocações e/ou substituições de tampas de poços de esgoto danificadas."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar religação de água em ligações cortadas por consumo final",
        "oQueE": "É a solicitação de religação de ligações de água e/ou esgoto que estão cortadas por consumo final."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar reparo de ramal de esgoto",
        "oQueE": "É o conserto no ramal de esgoto, visando reparar vazamentos, quebra ou amassamentos."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar reparo do ramal de água",
        "oQueE": "É o conserto de ramal de água visando reparar vazamento."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar retificação da conta de água e/ou esgoto por vazamento",
        "oQueE": "Retificação da conta de água e/ou esgoto por vazamento."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar substituição de hidrômetro das ligações de água e/ou esgoto",
        "oQueE": "Substituição de hidrômetro das ligações de água e/ou esgoto."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar substituição de registro",
        "oQueE": "É a substituição de registro do cavalete por estar danificado ou por motivo de vazamento."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar venda de água bruta e tratada",
        "oQueE": "Venda de água avulsa em locais não providos de rede de água."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação cadastral",
        "oQueE": "Este serviço é utilizado quando o cliente solicita alteração ou verificação de dados cadastrais da conta de água e/ou esgoto, etc."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação da pressão da água",
        "oQueE": "É uma vistoria realizada visando verificar a pressão da água em caso de anormalidade, caso esteja alta ou baixa."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de conta de água e/ou esgoto faturada com leitura incorreta ou pela média",
        "oQueE": "É quando o cliente solicita que seja feita leitura em campo, pois devido seu imóvel estar fechado fechado ou sem acesso ao cavalete, a conta foi faturada pela média de consumo d..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de excesso de consumo",
        "oQueE": "É a verificação de excesso de consumo quando o cliente alega não ser consumo, pois já verificou que não há vazamento interno."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de excesso de consumo na conta de água e/ou esgoto",
        "oQueE": "Este serviço é utilizado para verificar no local as instalações pertencentes à Sanesul, quando o cliente reclama de excesso de consumo e alega que não há vazamento de água no im..."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de falta de água no imóvel",
        "oQueE": "Solicitação de verificação de falta de água no imóvel do cliente ou na região toda."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de hidrômetro embaçado",
        "oQueE": "Este serviço é utilizado quando o cliente solicita uma verificação de hidrômetro embaçado da conta de água e/ou esgoto, etc."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de hidrômetro retirado.",
        "oQueE": "Este serviço é utilizado quando o cliente solicita uma verificação de hidrômetro retirado da conta de água e/ou esgoto, etc."
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação de irregularidade na ligação",
        "oQueE": "É uma vistoria realizada em ligações de água visando verificar as ocorrências de irregularidade"
      },
      {
        "orgao": "SANESUL",
        "titulo": "Solicitar verificação para ocorrências com água",
        "oQueE": "Serviço destinado para verificação de qualquer tipo de problema que afeta a qualidade da água, sendo cor, gosto sujeira ou odor da mesma."
      },
      {
        "orgao": "SEAD",
        "titulo": "Denunciar violação de direitos humanos pelo Disque 100",
        "oQueE": "O Disque 100 é um serviço nacional de escuta, orientação e encaminhamento de denúncias de violações de direitos humanos. O canal recebe, analisa e encaminha denúncias relacionad..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEAD",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEAD",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEAD",
        "titulo": "Solicitar fiscalização Procon/MS",
        "oQueE": "Fiscaliza as relações de consumo mediante denúncia formalizada pelos canais de atendimento do Procon/MS , por representações de pessoas físicas, instituições públicas ou associa..."
      },
      {
        "orgao": "SEC",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEC",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEC",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar atendimento no centro estadual de cidadania LGBT+ - CECLGBT+",
        "oQueE": "o CECLGBTQIA+ tem por atribuições o desenvolvimento das políticas de defesa de direitos e da cidadania do público LGBTQIA+, o atendimento psicossocial e jurídico de lésbicas, ga..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SEC",
        "titulo": "Solicitar serviço de promoção da igualdade racial",
        "oQueE": "A rede de atendimento étnico-racial em Mato Grosso do Sul contempla serviços das áreas de assistência social, segurança pública, justiça e saúde - são os serviços essenciais exi..."
      },
      {
        "orgao": "SED MS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SED MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SED MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referentes aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Denúncia Espontânea - solicitação",
        "oQueE": "Aplicação do benefício da Denúncia Espontânea a fim de sanar irregularidade decorrente de dever jurídico de natureza instrumental (falta do cumprimento de obrigação acessória) s..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Documentação cadastral, cópia de processo ou outra",
        "oQueE": "Solicitação de documentos apresentados para cadastro de contribuinte estadual, cópia de processos, requerimentos, dentre outras existentes nos arquivos relativos à administração..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Documentação fiscal solicitada por terceiro",
        "oQueE": "Solicitação POR TERCEIRO (que não figure no corpo da nota) de documentos fiscais eletrônicos ou físicos, como por exemplo, Nota Fiscal, Nota Fiscal de Produtor, Nota Fiscal de C..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - reclamação administrativa",
        "oQueE": "Use este serviço para solicitar a revisão de avaliação de bens realizada na Declaração de ITCD (DIT) ou para contestar uma multa aplicada indevidamente."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - recurso administrativo",
        "oQueE": "Use este serviço para solicitar um recurso ao Superintendente de Administração Tributária (SAT) da SEFAZ, referente ao resultado da análise da reclamação realizada pela unidade..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "ITCD - solicitação de prioridade na análise",
        "oQueE": "Solicitar a análise prioritária de Declaração de ITCD (DIT) ou de reclamação, nos casos em que o solicitante se enquadre em uma das hipóteses de deferimento previstas nesta Cart..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Liberação de gravame em CRLV em razão de aquisição de veículo adquirido com benefício fiscal",
        "oQueE": "Solicitar à SEFAZ/MS a manifestação acerca da liberação do gravame em CRLV junto ao DETRAN de veículos adquiridos com benefício fiscal."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Processo administrativo tributário (PAT) - manifestações em face de despacho saneador",
        "oQueE": "Manifestação em face de despacho saneador, conforme previsto nos artigos 30, 31, 51 e 64 da Lei nº 2.315/2001 ."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Revisão de informações de Meios de Pagamento - Regularize Já",
        "oQueE": "Trata-se da solicitação de revisão de diferenças apontadas relativas ao cruzamento das informações prestadas pelas instituições financeiras e as declaradas pelos contribuintes n..."
      },
      {
        "orgao": "SEFAZ MS",
        "titulo": "Solicitação de cópia de documentos, processos ou outra relativa a benefícios fiscais",
        "oQueE": "Solicitação realizada pelo contribuinte titular do benefício fiscal de documentação apresentada para a instrução de pedido de benefício fiscal concedido por Termo de Acordo, com..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Conceder acesso ao Gitlabs.",
        "oQueE": "Serviço de gestão dos códigos fontes, provendo a hospedagem e versionamento destes."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Conceder acesso ao Matomo",
        "oQueE": "Permite acesso ao sistema de BI Matomo para ver as estatísticas de análise web das aplicações"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Redefinir senha de e-mail SIRIEMA",
        "oQueE": "Realizar a solicitação de redefinir ou recuperar a senha de acesso do sistema SIRIEMA."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Redefinir senha do e-mail oficial",
        "oQueE": "Solicitar suporte técnico por telefone, Whatsapp ou e-mail. Recebendo ajuda para resolver dúvidas ou trocar senhas dos serviços do Governo"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Redefinir senha - LEGISLAÇÃO",
        "oQueE": "Realizar suporte técnico especializado por telefone, whatsapp ou e-mail para ajudar usuários com dúvidas ou trocas de senhas relacionadas à legislação"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar acesso ao Grafana",
        "oQueE": "Permite o acesso à aplicação web Grafana para visualizar gráficos, tabelas e alertas, usando os dados do sistema de monitoramento Zabbix."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar acesso aos Sistemas Institucionais mantidos pela SETDIG",
        "oQueE": "Permite acesso aos sistemas web e mainframe da SETDIG"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar apoio técnico no âmbito do plano P2R2 produtos químicos perigosos",
        "oQueE": "Consiste na prestação de apoio técnico - instruções e esclarecimentos - referente a dúvidas no âmbito do Plano Nacional de Prevenção, Preparação e Resposta Rápida à Emergências..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar apoio técnico/operacional em ocorrência de desastres",
        "oQueE": "Consiste no deslocamento de equipes técnicas da Coordenadoria Estadual de Proteção e Defesa Civil, até os locais de ocorrências de desastres para realizar o serviço de avaliação..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar aumento de quota de e-mail Oficial",
        "oQueE": "Concede aumento de espaço da caixa de e-mail"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar consultoria técnica de legislação da defesa civil",
        "oQueE": "A consultoria técnica presta informações, faz esclarecimentos e tira dúvidas acerca da legislação da Defesa Civil"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar liberação ou bloqueio de acesso a conteúdo da Internet",
        "oQueE": "Serviço para solicitar acesso ou bloqueio a conteúdos da internet (exceto redes sociais)."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar locação do auditório do Bioparque para realização de eventos",
        "oQueE": "Locação do auditório do Bioparque Pantanal para realização de eventos de característica técnica, científica, artística e cultural, com as normas para sua locação regidas por dis..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado ou seu representante legal poderão solicitar vista ou cópia de processo ou documento, desde que comprovem a qualidade de interessado e preencham o Formulário de Vi..."
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Solicitar Suporte de Tecnologia do Governo do Estado",
        "oQueE": "O serviço oferece suporte técnico para esclarecer dúvidas e resolver falhas nos sistemas do Governo do Estado"
      },
      {
        "orgao": "SEGOV MS",
        "titulo": "Usuário banido no proxy",
        "oQueE": "Ao tentar acessar páginas que violam as regras de proxy e firewall, o acesso é monitorado e pode resultar na inclusão em uma lista negra. Essa medida é necessária para proteger..."
      },
      {
        "orgao": "SEILOG",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEILOG",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEILOG",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Ouvidoria de Segurança Pública",
        "oQueE": "A Ouvidoria é um canal de comunicação direto entre o cidadão e a administração pública, garantindo a transparência, a eficiência e a qualidade dos serviços prestados à sociedade..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Registrar denúncia",
        "oQueE": "É o relato de atos ilícitos ou de irregularidades praticadas contra a Administração Pública, cuja solução dependa da atuação de um órgão de apuração. A denúncia poderá envolver..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar credenciamento de agentes religiosos",
        "oQueE": "O Serviço de credenciamento de agentes religiosos permite que líderes e representantes de instituições religiosas ofereçam apoio espiritual e emocional nas unidades educacionais..."
      },
      {
        "orgao": "SEJUSP",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Fazer pedido de acesso a informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Participar  da Consulta Pública e Instrumentos de Participação Social da Microrregião de Saneamento Básico (MSB)",
        "oQueE": "Serviço público destinado à promoção da participação social nos processos de planejamento, regulação e deliberação das funções públicas de interesse comum da Microrregião de San..."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SEMADESC",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SES",
        "titulo": "Consultar exames ambulatorial",
        "oQueE": "Os usuários podem consultar por meio deste canal as informações sobre os exames/procedimentos solicitados e sua posição na fila e o tempo de espera, em cumprimento à Lei Estadua..."
      },
      {
        "orgao": "SES",
        "titulo": "Consultar Fila ambulatorial",
        "oQueE": "Os usuários podem consultar por meio deste canal as informações sobre os sua posição na fila e a previsão de atendimento nas listas de espera, em cumprimento à Lei Estadual nº 4..."
      },
      {
        "orgao": "SES",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SES",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SES",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar orientação do profissional farmacêutico",
        "oQueE": "O Alô Farmacêutico é um serviço de atendimento e orientação ao usuário do Sistema Único de Saúde (SUS) sobre temas relacionados à Assistência Farmacêutica. Por meio desse canal,..."
      },
      {
        "orgao": "SES",
        "titulo": "Solicitar serviço de ouvidoria",
        "oQueE": "A Ouvidoria Estadual do SUS/MS é o canal oficial de comunicação entre o cidadão e a gestão pública estadual de saúde. Tem por finalidade receber, registrar, analisar, encaminhar..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Acessar delegacia virtual",
        "oQueE": "É uma aba desenvolvida pela (SUPROVA) Superintendência de Políticas Integradas de Proteção Animal em parceria com a Polícia Civil, dentro da Devir que permitirá denúncias online..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Fazer pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      },
      {
        "orgao": "SETESC",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "SETESC",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "SETESC",
        "titulo": "SIG PET",
        "oQueE": "O SIGPET (Sistema Gestor de Manejo Ético de Pets) é um sistema desenvolvido para gerenciar campanhas de castração de animais no Estado de Mato Grosso do Sul."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar caravana da castração",
        "oQueE": "É um projeto do Programa MS Vida Animal que visa a esterilização em massa de cães e gatos de Mato Grosso do Sul."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar certificado estadual de protetoras de animais de mato grosso do sul(CEPA)",
        "oQueE": "É um documento oficial que certifica que os protetores de animais em Mato Grosso do Sul estão aptos a participarem do Programa Estadual de Políticas de Proteção da Vida Animal n..."
      },
      {
        "orgao": "SETESC",
        "titulo": "Solicitar pedido de vista e cópia",
        "oQueE": "O interessado Pessoa Física, jurídica ou seu representante legal, poderão solicitar vista ou cópia do processo ou documento, desde que comprovem a qualidade de interessado e pre..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Orientações para consulta do acervo e ambiente virtual da biblioteca",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos empréstimos, suspensões, realizar reservas de livros, renovações e bloquear a carteirinha, em caso de perda"
      },
      {
        "orgao": "UEMS",
        "titulo": "Registrar denúncia",
        "oQueE": "Denunciar suposto ato ilícito, irregularidade ou corrupção praticados no âmbito do Poder Executivo Estadual."
      },
      {
        "orgao": "UEMS",
        "titulo": "Registrar reclamação, solicitação, sugestão e elogio",
        "oQueE": "Esse serviço se destina a registrar as manifestações de ouvidoria: reclamação, solicitação, sugestão e elogio referente aos serviços públicos do Poder Executivo Estadual, ações..."
      },
      {
        "orgao": "UEMS",
        "titulo": "Solicitar pedido de acesso à informação",
        "oQueE": "Consiste na possibilidade do usuário solicitar acesso à informação dos órgãos públicos do Poder Executivo Estadual."
      }
    ]
  }
];
