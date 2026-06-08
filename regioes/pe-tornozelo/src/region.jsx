import {
  FootIcon, WalkingIcon, HeelIcon, SwellingIcon, TwistIcon, LightningIcon, AchillesTendonIcon, StiffnessIcon, SportsIcon,
  CartilageIcon, LigamentIcon, BursitisIcon,
  PlantarIcon, BandageIcon, ScanIcon, OverloadIcon, ReturnToSportIcon, InflammationIcon,
  EvaluationIcon, SyringeIcon, RegenIcon, ShieldIcon, UltrasoundIcon,
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
  slug: 'pe-tornozelo',
  name: 'Pé e Tornozelo',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor no pé ou tornozelo',
  hero: {
    subhead: 'Avaliação ortopédica para dor no pé e tornozelo, fascite plantar, esporão, entorses, tendinites, instabilidade e dor ao caminhar. Conduta individualizada para identificar a causa e orientar o tratamento.',
    highlightFocus: 'Foco em pisada, dor e mobilidade',
    focusIcon: FootIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais no pé ou tornozelo?',
    subhead: 'Dores no pé e tornozelo podem comprometer caminhada, trabalho, treino e atividades simples. A avaliação ajuda a diferenciar sobrecarga, inflamação, lesões ligamentares e alterações mecânicas.',
    btnText: 'Quero uma avaliação do meu pé ou tornozelo',
    items: [
      { icon: WalkingIcon, title: 'Dor ao pisar', desc: 'Incômodo logo nos primeiros passos ou após longos períodos em pé.' },
      { icon: HeelIcon, title: 'Dor no calcanhar', desc: 'Dor ao acordar, caminhar ou apoiar o peso na região posterior ou inferior do pé.' },
      { icon: SwellingIcon, title: 'Inchaço no tornozelo', desc: 'Aumento de volume após torção, esforço ou ao fim do dia.' },
      { icon: TwistIcon, title: 'Torções repetidas', desc: 'Sensação de instabilidade e insegurança ao caminhar em pisos irregulares.' },
      { icon: LightningIcon, title: 'Dor na sola do pé', desc: 'Desconforto próximo ao arco plantar ou ao calcanhar.' },
      { icon: AchillesTendonIcon, title: 'Dor no tendão de Aquiles', desc: 'Incômodo atrás do tornozelo, principalmente ao correr, subir escadas ou iniciar movimentos.' },
      { icon: StiffnessIcon, title: 'Rigidez ou travamento', desc: 'Dificuldade para movimentar o tornozelo ou adaptar a pisada.' },
      { icon: SportsIcon, title: 'Dor após treino', desc: 'Sintomas relacionados a corrida, academia, impacto ou aumento recente de carga.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor no pé ou tornozelo',
    subhead: 'A dor nessa região pode envolver ossos, tendões, ligamentos, fáscia plantar e alterações da pisada. O diagnóstico correto depende de avaliação clínica.',
    items: [
      { icon: PlantarIcon, title: 'Fascite plantar', desc: 'Dor na sola do pé ou no calcanhar, comum nos primeiros passos do dia.' },
      { icon: BursitisIcon, title: 'Esporão de calcâneo', desc: 'Alteração óssea frequentemente associada a dor plantar e sobrecarga local.' },
      { icon: LigamentIcon, title: 'Entorse de tornozelo', desc: 'Lesão ligamentar após torção, podendo gerar dor, inchaço e instabilidade.' },
      { icon: InflammationIcon, title: 'Tendinite do Aquiles', desc: 'Dor no tendão posterior do tornozelo, associada a esforço, corrida ou sobrecarga.' },
      { icon: OverloadIcon, title: 'Tendinopatias e sobrecarga', desc: 'Alterações em tendões do pé e tornozelo por repetição, treino ou biomecânica.' },
      { icon: CartilageIcon, title: 'Artrose ou impacto no tornozelo', desc: 'Desgaste ou alterações mecânicas que causam dor, rigidez e limitação.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor no pé e tornozelo',
    subhead: 'Quando indicados, procedimentos guiados por ultrassom podem auxiliar na precisão do cuidado em tendões, bursas, articulações e pontos de dor.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica do pé e tornozelo', desc: 'Exame da pisada, mobilidade, estabilidade, dor localizada e análise de exames.' },
      { icon: SyringeIcon, title: 'Infiltração guiada por ultrassom', desc: 'Aplicação precisa em estruturas selecionadas conforme diagnóstico.' },
      { icon: ScanIcon, title: 'Tratamento de fascite plantar', desc: 'Conduta individualizada para dor plantar, sobrecarga e retorno gradual à atividade.' },
      { icon: RegenIcon, title: 'Terapia regenerativa', desc: 'Técnica voltada a casos específicos de tendinopatias e lesões por sobrecarga.' },
      { icon: BandageIcon, title: 'Cuidado em entorses e instabilidade', desc: 'Avaliação ligamentar e orientação para recuperação funcional.' },
      { icon: ReturnToSportIcon, title: 'Plano de retorno à caminhada ou esporte', desc: 'Orientações para carga progressiva, calçados, treino e prevenção de recorrência.' },
    ],
  },
  quando: {
    intro: 'Se a dor no pé ou tornozelo está dificultando sua pisada, caminhada ou prática esportiva, a avaliação ajuda a entender a causa e evitar recorrências.',
    signs: [
      'Dor ao pisar por mais de 1 a 2 semanas',
      'Inchaço persistente após torção',
      'Torções repetidas ou sensação de instabilidade',
      'Dor no calcanhar ao acordar',
      'Dor no tendão de Aquiles ou na sola do pé',
      'Dificuldade para caminhar, correr ou trabalhar em pé',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, exame físico do pé e tornozelo, avaliação da pisada, testes de estabilidade e análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor no pé ou tornozelo nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica do pé e tornozelo',
    alt2: 'Procedimento guiado por ultrassom',
  },
  depoimentos: [
    { name: 'Amanda F.', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene A.', text: 'Ótimo tratamento, passa confiança para o paciente. Gostei muito.', rating: 5 },
    { name: 'Ana C.', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor no pé e tornozelo',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor no pé ou tornozelo?',
    items: [
      { q: 'Dor no calcanhar pode ser fascite plantar?', a: 'Pode, especialmente quando piora nos primeiros passos do dia, mas a avaliação é necessária.' },
      { q: 'Torção de tornozelo precisa de avaliação?', a: 'Sim, principalmente se houver inchaço, dor persistente, dificuldade para apoiar ou torções repetidas.' },
      { q: 'Toda dor no pé é problema de pisada?', a: 'Não. A dor pode envolver fáscia plantar, tendões, ligamentos, ossos ou articulações.' },
      { q: 'Como é a infiltração guiada por ultrassom?', a: 'O ultrassom permite visualizar a estrutura alvo e orientar a aplicação com maior precisão.' },
      { q: 'Posso continuar treinando com dor?', a: 'Depende do diagnóstico e da intensidade dos sintomas. A avaliação define ajustes de carga e retorno seguro.' },
      { q: 'O atendimento é em Brasília?', a: 'Sim. O atendimento ocorre em Águas Claras, Brasília-DF.' },
    ],
  },
  cta: {
    msg: 'Não deixe a dor no pé ou tornozelo limitar sua pisada.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor no pé e tornozelo em Brasília-DF. Avaliação para fascite plantar, esporão, entorses, tendinites e instabilidade.',
}
