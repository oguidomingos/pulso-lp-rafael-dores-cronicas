import {
  HandIcon, TingleIcon, GripIcon, TypingIcon, WristIcon, BlockIcon, SwellingIcon, SportsIcon, StiffnessIcon, LightningIcon,
  NerveCompressIcon, HandTendonIcon, TriggerFingerIcon, CystIcon, CartilageIcon, LigamentIcon,
  InflammationIcon, ScanIcon,
  EvaluationIcon, SyringeIcon, UltrasoundIcon, RegenIcon, ShieldIcon,
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
  slug: 'mao-punho',
  name: 'Mão e Punho',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor na mão ou punho',
  hero: {
    subhead: 'Avaliação ortopédica para dor na mão e punho, formigamento, síndrome do túnel do carpo, tendinites, lesões por esforço repetitivo, rigidez e perda de força. Conduta individualizada para entender a origem dos sintomas.',
    highlightFocus: 'Foco em função, força e precisão',
    focusIcon: HandIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais na mão ou punho?',
    subhead: 'Dores na mão e no punho podem atrapalhar trabalho, digitação, treino, tarefas domésticas e sono. A avaliação ajuda a identificar se o problema envolve tendões, nervos, articulações ou sobrecarga.',
    btnText: 'Quero uma avaliação da minha mão ou punho',
    items: [
      { icon: TingleIcon, title: 'Formigamento nos dedos', desc: 'Sensação de dormência, choque ou perda de sensibilidade, principalmente à noite.' },
      { icon: TypingIcon, title: 'Dor ao digitar ou escrever', desc: 'Incômodo em atividades repetitivas, uso de mouse, celular ou ferramentas.' },
      { icon: GripIcon, title: 'Perda de força', desc: 'Dificuldade para segurar objetos, abrir potes ou carregar peso.' },
      { icon: WristIcon, title: 'Dor no punho', desc: 'Desconforto ao apoiar a mão, fazer força ou movimentar o punho.' },
      { icon: BlockIcon, title: 'Estalos ou travamentos', desc: 'Dedo que prende, punho que estala ou sensação de bloqueio em movimentos.' },
      { icon: SwellingIcon, title: 'Inchaço ou caroço', desc: 'Aumento de volume, nódulo ou cisto visível na região do punho ou mão.' },
      { icon: SportsIcon, title: 'Dor após esforço repetitivo', desc: 'Sintomas relacionados a trabalho, treino, instrumentos, celular ou tarefas manuais.' },
      { icon: StiffnessIcon, title: 'Rigidez nos dedos', desc: 'Dificuldade para fechar a mão, movimentar os dedos ou iniciar movimentos pela manhã.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor na mão ou punho',
    subhead: 'A dor nessa região pode envolver nervos, tendões, articulações e estruturas pequenas que exigem avaliação cuidadosa.',
    items: [
      { icon: NerveCompressIcon, title: 'Síndrome do túnel do carpo', desc: 'Compressão nervosa associada a formigamento, dormência e perda de força.' },
      { icon: HandTendonIcon, title: 'Tendinites e tenossinovites', desc: 'Inflamações de tendões relacionadas a sobrecarga, repetição ou esforço.' },
      { icon: TriggerFingerIcon, title: 'Dedo em gatilho', desc: 'Travamento ou estalo doloroso ao dobrar e esticar o dedo.' },
      { icon: CystIcon, title: 'Cisto sinovial', desc: 'Nódulo comum no punho ou na mão, que pode causar dor ou incômodo funcional.' },
      { icon: CartilageIcon, title: 'Artrose nas mãos', desc: 'Desgaste articular que pode gerar dor, rigidez e deformidades progressivas.' },
      { icon: LigamentIcon, title: 'Lesões ligamentares ou traumáticas', desc: 'Alterações após quedas, torções, impacto ou esforço intenso.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor na mão e punho',
    subhead: 'Procedimentos guiados por ultrassom podem ser indicados para maior precisão em estruturas pequenas, sempre conforme avaliação e diagnóstico.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica da mão e punho', desc: 'Exame físico, testes de força, sensibilidade, mobilidade e análise de exames.' },
      { icon: SyringeIcon, title: 'Infiltração guiada por ultrassom', desc: 'Aplicação precisa em tendões, articulações ou estruturas indicadas.' },
      { icon: InflammationIcon, title: 'Tratamento para tendinites', desc: 'Conduta individualizada para dor por sobrecarga e movimentos repetitivos.' },
      { icon: ScanIcon, title: 'Avaliação de compressões nervosas', desc: 'Investigação de formigamento, dormência e perda de força.' },
      { icon: RegenIcon, title: 'Terapia regenerativa', desc: 'Técnica indicada em casos específicos, conforme quadro clínico.' },
      { icon: ShieldIcon, title: 'Plano de retorno às atividades', desc: 'Orientações para trabalho, digitação, treino e uso funcional da mão.' },
    ],
  },
  quando: {
    intro: 'Se a dor, o formigamento ou a perda de força estão atrapalhando o uso da mão, a avaliação ortopédica ajuda a definir a origem do problema e a melhor conduta.',
    signs: [
      'Formigamento ou dormência frequente nos dedos',
      'Dor no punho ou mão por mais de 1 a 2 semanas',
      'Perda de força ou queda de objetos da mão',
      'Dedo travando ou estalando',
      'Nódulo, inchaço ou caroço no punho',
      'Dor após queda, trauma ou esforço repetitivo',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, exame físico da mão e punho, testes de sensibilidade, força, tendões, articulações e análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor na mão ou punho nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica da mão e punho',
    alt2: 'Procedimento guiado por ultrassom',
  },
  depoimentos: [
    { name: 'Amanda F.', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene A.', text: 'Ótimo tratamento, passa confiança para o paciente. Gostei muito.', rating: 5 },
    { name: 'Ana C.', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor na mão e punho',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor na mão ou punho?',
    items: [
      { q: 'Formigamento na mão pode ser túnel do carpo?', a: 'Pode, especialmente quando ocorre nos dedos e piora à noite, mas a avaliação é necessária.' },
      { q: 'Dor no punho ao digitar é tendinite?', a: 'Pode estar relacionada a tendinites, sobrecarga ou outras alterações. O diagnóstico depende do exame.' },
      { q: 'Dedo travando precisa de avaliação?', a: 'Sim. O dedo em gatilho pode causar travamentos progressivos e deve ser avaliado.' },
      { q: 'Cisto no punho é perigoso?', a: 'Muitos cistos são benignos, mas devem ser avaliados se causam dor, crescimento ou limitação.' },
      { q: 'Como é a infiltração guiada por ultrassom?', a: 'O ultrassom ajuda a visualizar estruturas pequenas e orientar a aplicação com precisão.' },
      { q: 'O atendimento é em Brasília?', a: 'Sim. O atendimento ocorre em Águas Claras, Brasília-DF.' },
    ],
  },
  cta: {
    msg: 'Não deixe a dor na mão ou punho limitar suas atividades.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor na mão e punho em Brasília-DF. Avaliação para formigamento, túnel do carpo, tendinites, rigidez e perda de força.',
}
