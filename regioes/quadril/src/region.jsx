import {
  HipIcon, MoonIcon, LightningIcon, WalkingIcon, StiffnessIcon, StairsIcon, BowDownIcon, CrackIcon, BlockIcon,
  CartilageIcon, BursitisIcon, GluteTendonIcon, ImpactIcon, MeniscusIcon, SpineIcon, GroinIcon,
  EvaluationIcon, SyringeIcon, ViscousIcon, RegenIcon, UltrasoundIcon, ShieldIcon,
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
  slug: 'quadril',
  name: 'Quadril',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor no quadril',
  hero: {
    subhead: 'Avaliação ortopédica para dor no quadril, artrose, bursite trocantérica, tendinopatias, dor na virilha e limitação para caminhar. Conduta individualizada para identificar a origem da dor e orientar o tratamento.',
    highlightFocus: 'Foco em movimento e conforto',
    focusIcon: HipIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais no quadril?',
    subhead: 'A dor no quadril pode aparecer na lateral, na virilha, no glúteo ou irradiar para a coxa. A localização da dor ajuda a direcionar a avaliação e definir a melhor conduta.',
    btnText: 'Quero uma avaliação do meu quadril',
    items: [
      { icon: MoonIcon, title: 'Dor na lateral do quadril', desc: 'Incômodo ao deitar de lado, caminhar ou subir escadas.' },
      { icon: GroinIcon, title: 'Dor na virilha', desc: 'Dor profunda que pode piorar ao caminhar, cruzar as pernas ou entrar no carro.' },
      { icon: WalkingIcon, title: 'Dificuldade para caminhar', desc: 'Dor ou rigidez que reduz a distância percorrida e limita a rotina.' },
      { icon: StiffnessIcon, title: 'Rigidez ao levantar', desc: 'Sensação de travamento ao sair da cama, da cadeira ou após ficar muito tempo sentado.' },
      { icon: StairsIcon, title: 'Dor ao subir escadas', desc: 'Desconforto ao apoiar o peso do corpo, subir degraus ou rampas.' },
      { icon: LightningIcon, title: 'Dor no glúteo ou coxa', desc: 'Sintomas que podem confundir a origem entre quadril, coluna e estruturas próximas.' },
      { icon: CrackIcon, title: 'Estalos ou sensação de encaixe', desc: 'Ruídos, ressalto ou sensação de atrito em determinados movimentos.' },
      { icon: BlockIcon, title: 'Perda de mobilidade', desc: 'Dificuldade para calçar sapatos, cortar unhas ou fazer rotação da perna.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor no quadril',
    subhead: 'A dor no quadril pode envolver articulação, tendões, bursas, músculos ou estruturas próximas. A avaliação clínica ajuda a diferenciar essas possibilidades.',
    items: [
      { icon: CartilageIcon, title: 'Artrose do quadril', desc: 'Desgaste articular que pode causar dor na virilha, rigidez e limitação progressiva.' },
      { icon: BursitisIcon, title: 'Bursite trocantérica', desc: 'Dor na lateral do quadril, comum ao deitar de lado ou caminhar por mais tempo.' },
      { icon: GluteTendonIcon, title: 'Tendinopatias glúteas', desc: 'Alterações nos tendões da região lateral, associadas a dor e perda de força.' },
      { icon: ImpactIcon, title: 'Impacto femoroacetabular', desc: 'Alteração no contato entre estruturas do quadril, podendo causar dor na virilha.' },
      { icon: MeniscusIcon, title: 'Lesão labral', desc: 'Lesão em estrutura interna do quadril, frequentemente associada a dor profunda e estalos.' },
      { icon: SpineIcon, title: 'Dor referida da coluna', desc: 'Sintomas na região do quadril que podem ter origem lombar ou neurológica.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor no quadril',
    subhead: 'Procedimentos guiados por ultrassom podem ser indicados em casos selecionados para melhorar a precisão da abordagem, conforme diagnóstico e objetivo terapêutico.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica do quadril', desc: 'Exame físico, análise da marcha, testes de mobilidade e leitura de exames.' },
      { icon: SyringeIcon, title: 'Infiltração guiada por ultrassom', desc: 'Aplicação em articulação, bursa ou tendões, conforme indicação.' },
      { icon: ViscousIcon, title: 'Viscossuplementação', desc: 'Procedimento voltado ao cuidado articular em quadros selecionados.' },
      { icon: RegenIcon, title: 'Terapia regenerativa', desc: 'Técnica indicada em situações específicas, com objetivo de estimular resposta tecidual.' },
      { icon: UltrasoundIcon, title: 'Tratamento de bursite e tendinopatias', desc: 'Conduta local guiada por imagem quando indicada.' },
      { icon: ShieldIcon, title: 'Plano de reabilitação integrado', desc: 'Orientação para retorno gradual à caminhada, treino e atividades diárias.' },
    ],
  },
  quando: {
    intro: 'Se a dor no quadril interfere na caminhada, no sono ou em movimentos simples, a avaliação ortopédica ajuda a identificar a causa e organizar o cuidado.',
    signs: [
      'Dor no quadril persistente por mais de 1 a 2 semanas',
      'Dor ao caminhar, subir escadas ou levantar da cadeira',
      'Dor ao deitar de lado',
      'Rigidez ou perda de mobilidade',
      'Dor na virilha ou na lateral do quadril',
      'Queda, trauma ou piora progressiva dos sintomas',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, exame físico do quadril, avaliação da marcha, testes de mobilidade e análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor no quadril nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica do quadril',
    alt2: 'Procedimento guiado por ultrassom',
  },
  depoimentos: [
    { name: 'Amanda F.', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene A.', text: 'Ótimo tratamento, passa confiança para o paciente. Gostei muito.', rating: 5 },
    { name: 'Ana C.', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor no quadril',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor no quadril?',
    items: [
      { q: 'Dor no quadril pode ser bursite?', a: 'Sim, principalmente quando a dor é lateral e piora ao deitar de lado, mas é necessário avaliar.' },
      { q: 'Dor na virilha pode ser do quadril?', a: 'Pode. Dor na virilha é uma apresentação comum de alterações articulares do quadril.' },
      { q: 'Toda dor no quadril é artrose?', a: 'Não. Tendinopatias, bursites, impacto, lesões labrais e dor referida da coluna também podem causar sintomas.' },
      { q: 'Como é a infiltração guiada por ultrassom?', a: 'O ultrassom auxilia na visualização da estrutura alvo e na precisão da aplicação.' },
      { q: 'Preciso parar de caminhar?', a: 'A orientação depende do diagnóstico. A avaliação ajuda a definir ajustes temporários e retorno gradual.' },
      { q: 'O atendimento é em Brasília?', a: 'Sim. O atendimento ocorre em Águas Claras, Brasília-DF.' },
    ],
  },
  cta: {
    msg: 'Não deixe a dor no quadril reduzir seus movimentos.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor no quadril em Brasília-DF. Avaliação para artrose, bursite, tendinopatias e limitação funcional.',
}
