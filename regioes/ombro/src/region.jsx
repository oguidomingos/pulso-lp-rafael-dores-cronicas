import {
  ShoulderIcon, ArmRaiseIcon, MoonIcon, GripIcon, CrackIcon, StiffnessIcon, SportsIcon, InstabilityIcon, LightningIcon,
  RotatorCuffIcon, BursitisIcon, ImpactIcon, CartilageIcon, FrozenIcon, DislocationIcon,
  EvaluationIcon, SyringeIcon, NerveBlockIcon, RegenIcon, UltrasoundIcon, ShieldIcon,
} from './icons.jsx'

export const DOCTOR = {
  clinicName: 'Lanner Especialidades',
  doctorName: 'Dr. Rafael Rocha',
  crm: 'CRM/DF 31.365',
  rqe: 'RQE 22.589',
  specialty: 'Ortopedista e Traumatologista em Brasília',
  whatsapp: '5561999190221',
  city: 'Brasília',
  state: 'DF',
  address: 'Rua 5 Norte, Lote 3 - Águas Claras, Brasília - DF, CEP: 71907-720, Sala 411',
  hours: 'Seg–Sex: 08h–18h',
  googleRating: '5.0',
  stats: { procedures: '3.000', surgeries: '500', patients: '5.000', specialties: '14' },
  doctorPhoto: './img/foto-sem-fundo.png',
  symbol: './img/simbolo.jpg',
  logoHorizontal: './img/logo-horizontal.jpg',
}

export const REGION = {
  slug: 'ombro',
  name: 'Ombro',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor no ombro',
  hero: {
    subhead: 'Avaliação ortopédica detalhada para dor no ombro, tendinites, bursites, lesões do manguito rotador, instabilidade e perda de movimento. Procedimentos guiados por ultrassom quando indicados, com foco em diagnóstico preciso e conduta individualizada.',
    highlightFocus: 'Foco em mobilidade',
    focusIcon: ShoulderIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais no ombro?',
    subhead: 'A dor no ombro pode limitar movimentos simples, como vestir uma camisa, levantar o braço ou dormir de lado. Uma avaliação adequada ajuda a identificar a causa e definir o melhor caminho de tratamento.',
    btnText: 'Quero uma avaliação do meu ombro',
    items: [
      { icon: ArmRaiseIcon, title: 'Dor ao levantar o braço', desc: 'Desconforto ao pegar objetos no alto, vestir roupas ou fazer movimentos acima da cabeça.' },
      { icon: MoonIcon, title: 'Dor para dormir de lado', desc: 'Incômodo ao apoiar o ombro no travesseiro ou ao mudar de posição durante a noite.' },
      { icon: GripIcon, title: 'Perda de força', desc: 'Sensação de fraqueza para carregar peso, empurrar, puxar ou sustentar o braço.' },
      { icon: CrackIcon, title: 'Estalos ou crepitação', desc: 'Ruídos, travamentos leves ou sensação de atrito ao movimentar o ombro.' },
      { icon: StiffnessIcon, title: 'Rigidez e limitação', desc: 'Dificuldade para alcançar as costas, pentear o cabelo ou girar o braço.' },
      { icon: SportsIcon, title: 'Dor após treino ou esforço', desc: 'Sintomas que aparecem depois de academia, esportes, trabalho manual ou movimentos repetitivos.' },
      { icon: InstabilityIcon, title: 'Ombro instável', desc: 'Sensação de que o ombro pode sair do lugar, principalmente após trauma ou luxação.' },
      { icon: LightningIcon, title: 'Dor irradiando para o braço', desc: 'Dor que desce para o braço e pode confundir a origem do problema.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor no ombro',
    subhead: 'Existem diferentes causas para dor no ombro. O diagnóstico depende da história clínica, exame físico e, quando necessário, exames de imagem.',
    items: [
      { icon: BursitisIcon, title: 'Tendinite e bursite', desc: 'Inflamações associadas a sobrecarga, movimentos repetitivos ou alterações biomecânicas.' },
      { icon: RotatorCuffIcon, title: 'Lesão do manguito rotador', desc: 'Alteração nos tendões responsáveis pela força e estabilidade do ombro.' },
      { icon: ImpactIcon, title: 'Síndrome do impacto', desc: 'Dor provocada pelo atrito de estruturas internas do ombro durante certos movimentos.' },
      { icon: FrozenIcon, title: 'Capsulite adesiva', desc: 'Rigidez progressiva, com dor e perda importante de movimento.' },
      { icon: DislocationIcon, title: 'Instabilidade e luxação', desc: 'Sensação de insegurança ou episódios em que o ombro sai do lugar.' },
      { icon: CartilageIcon, title: 'Artrose e desgaste articular', desc: 'Alterações degenerativas que podem causar dor, rigidez e perda funcional.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor no ombro',
    subhead: 'Quando indicados, procedimentos minimamente invasivos guiados por ultrassom podem auxiliar no cuidado da dor e na precisão da aplicação, sempre dentro de uma conduta individualizada.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica do ombro', desc: 'Anamnese, exame físico específico, testes funcionais e análise de exames já realizados.' },
      { icon: SyringeIcon, title: 'Infiltração guiada por ultrassom', desc: 'Aplicação precisa em articulação, bursa ou tendões, conforme indicação clínica.' },
      { icon: NerveBlockIcon, title: 'Bloqueios para dor', desc: 'Procedimentos voltados ao controle da dor em casos selecionados.' },
      { icon: RegenIcon, title: 'Terapia regenerativa', desc: 'Técnica indicada em situações específicas para estimular resposta tecidual.' },
      { icon: UltrasoundIcon, title: 'Aspiração ou tratamento de bursas', desc: 'Conduta guiada por imagem quando há indicação para abordagem local.' },
      { icon: ShieldIcon, title: 'Plano de reabilitação integrado', desc: 'Orientações alinhadas ao diagnóstico, com foco em retorno gradual à função.' },
    ],
  },
  quando: {
    intro: 'Se algum dos sinais abaixo descreve sua situação, é importante buscar avaliação ortopédica para entender a causa e evitar que a limitação avance.',
    signs: [
      'Dor no ombro por mais de 1 a 2 semanas',
      'Dificuldade para levantar o braço ou vestir roupas',
      'Dor noturna frequente',
      'Perda de força ou sensação de braço pesado',
      'Trauma, queda ou episódio de luxação',
      'Dor que limita trabalho, esporte ou rotina',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, exame físico do ombro, testes específicos para manguito rotador, impacto, instabilidade e mobilidade. Análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor no ombro nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica do ombro',
    alt2: 'Procedimento guiado por ultrassom',
  },
  depoimentos: [
    { name: 'Amanda F.', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene A.', text: 'Ótimo tratamento, passa confiança para o paciente. Gostei muito.', rating: 5 },
    { name: 'Ana C.', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor no ombro',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor no ombro?',
    items: [
      { q: 'Quando devo procurar um ortopedista por dor no ombro?', a: 'Quando a dor persiste, limita movimentos, atrapalha o sono ou aparece após trauma, queda ou esforço.' },
      { q: 'Toda dor no ombro precisa de cirurgia?', a: 'Não. Muitas causas podem ser conduzidas com tratamento conservador, reabilitação e procedimentos quando indicados.' },
      { q: 'Dor no ombro pode ser tendinite ou bursite?', a: 'Sim. Tendinites e bursites são causas comuns, mas o diagnóstico correto depende de avaliação clínica.' },
      { q: 'Como é a infiltração guiada por ultrassom?', a: 'O ultrassom ajuda a visualizar a estrutura alvo em tempo real, aumentando a precisão da aplicação.' },
      { q: 'Preciso levar exames?', a: 'Se tiver exames anteriores, leve para análise. Caso necessário, novos exames podem ser solicitados após a avaliação.' },
      { q: 'O atendimento é em Brasília?', a: 'Sim. O atendimento ocorre em Águas Claras, Brasília-DF.' },
    ],
  },
  cta: {
    msg: 'Não deixe a dor no ombro limitar sua rotina.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor no ombro em Brasília-DF. Procedimentos guiados por ultrassom quando indicados.',
}
