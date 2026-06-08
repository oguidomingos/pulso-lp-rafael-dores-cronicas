import {
  SpineIcon, BowDownIcon, LightningIcon, LegIrradiationIcon, TingleIcon, BlockIcon, SitIcon, SportsIcon,
  LumbarIcon, NeckPainIcon, MechanicalLoadIcon, PainTreatmentIcon,
  DiscIcon, HerniaIcon, CartilageIcon, StenosisIcon, NerveCompressIcon, BursitisIcon,
  EvaluationIcon, NerveBlockIcon, SyringeIcon, ShieldIcon, ClockIcon,
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
  slug: 'coluna',
  name: 'Coluna',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor na coluna',
  hero: {
    subhead: 'Avaliação ortopédica para dor lombar, dor cervical, dor nas costas, irradiação para braços ou pernas e suspeitas de hérnia de disco. Conduta individualizada para entender a origem da dor e orientar o tratamento adequado.',
    highlightFocus: 'Foco em diagnóstico e controle da dor',
    focusIcon: SpineIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais na coluna?',
    subhead: 'A dor na coluna pode surgir de forma localizada ou irradiar para outras partes do corpo. Avaliar a origem da dor ajuda a diferenciar sobrecarga, alterações degenerativas, compressões nervosas e outras causas.',
    btnText: 'Quero uma avaliação da minha coluna',
    items: [
      { icon: LumbarIcon, title: 'Dor lombar', desc: 'Dor na parte baixa das costas, com piora ao ficar sentado, levantar peso ou permanecer muito tempo em pé.' },
      { icon: BowDownIcon, title: 'Dor cervical', desc: 'Dor no pescoço, rigidez e desconforto ao virar a cabeça ou trabalhar em telas.' },
      { icon: LegIrradiationIcon, title: 'Dor irradiando para perna', desc: 'Sensação de dor, formigamento ou peso descendo para glúteo, coxa, panturrilha ou pé.' },
      { icon: LightningIcon, title: 'Dor irradiando para braço', desc: 'Desconforto que parte do pescoço e desce para ombro, braço ou mão.' },
      { icon: TingleIcon, title: 'Formigamento ou dormência', desc: 'Alteração de sensibilidade que pode indicar irritação ou compressão de estruturas nervosas.' },
      { icon: BlockIcon, title: 'Travamento da coluna', desc: 'Crises de dor com dificuldade para se movimentar, levantar ou endireitar o corpo.' },
      { icon: SitIcon, title: 'Dor ao sentar ou dirigir', desc: 'Incômodo que piora em posições mantidas por muito tempo.' },
      { icon: SportsIcon, title: 'Dor após esforço', desc: 'Sintomas relacionados a treino, trabalho físico, postura ou movimentos repetitivos.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor na coluna',
    subhead: 'A dor na coluna pode ter múltiplas origens. A avaliação médica ajuda a diferenciar dor muscular, alterações de disco, articulações, nervos e padrões de sobrecarga.',
    items: [
      { icon: MechanicalLoadIcon, title: 'Lombalgia mecânica', desc: 'Dor relacionada a sobrecarga, postura, esforço físico ou desequilíbrios musculares.' },
      { icon: HerniaIcon, title: 'Hérnia ou protrusão discal', desc: 'Alterações no disco que podem irritar estruturas nervosas e causar dor irradiada.' },
      { icon: BursitisIcon, title: 'Artrose facetária', desc: 'Desgaste nas articulações da coluna, comum em quadros de dor crônica ou rigidez.' },
      { icon: NeckPainIcon, title: 'Cervicalgia', desc: 'Dor no pescoço associada a postura, tensão, degeneração ou sobrecarga.' },
      { icon: NerveCompressIcon, title: 'Ciatalgia', desc: 'Dor irradiada para a perna, frequentemente associada à irritação do nervo ciático.' },
      { icon: StenosisIcon, title: 'Estenose ou alterações degenerativas', desc: 'Mudanças estruturais que podem reduzir espaço para nervos e gerar dor ou limitação.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor na coluna',
    subhead: 'Em casos selecionados, procedimentos minimamente invasivos podem auxiliar no controle da dor e na melhora funcional, sempre após avaliação clínica e indicação individual.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica da coluna', desc: 'História clínica, exame físico, testes neurológicos básicos e análise de exames de imagem.' },
      { icon: NerveBlockIcon, title: 'Bloqueios para dor', desc: 'Procedimentos voltados a estruturas específicas relacionadas ao quadro doloroso.' },
      { icon: SyringeIcon, title: 'Infiltrações guiadas por imagem', desc: 'Aplicações realizadas com apoio de imagem quando há indicação técnica.' },
      { icon: PainTreatmentIcon, title: 'Tratamento de dor irradiada', desc: 'Conduta voltada a sintomas que descem para braço ou perna, conforme diagnóstico.' },
      { icon: ShieldIcon, title: 'Plano conservador individualizado', desc: 'Orientações sobre medicação, reabilitação, ergonomia e retorno progressivo às atividades.' },
      { icon: ClockIcon, title: 'Acompanhamento da evolução', desc: 'Reavaliação conforme resposta ao tratamento e necessidade de novos exames.' },
    ],
  },
  quando: {
    intro: 'Se a dor na coluna está limitando sua rotina ou vem acompanhada de sintomas irradiados, a avaliação ajuda a identificar a causa e definir a conduta mais adequada.',
    signs: [
      'Dor na coluna persistente por mais de 1 a 2 semanas',
      'Dor que desce para braço ou perna',
      'Formigamento, dormência ou perda de força',
      'Dor que piora ao sentar, deitar ou levantar',
      'Crises recorrentes de travamento',
      'Dor após trauma, queda ou esforço importante',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, avaliação de mobilidade da coluna, testes funcionais, rastreio de sinais neurológicos e análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor na coluna nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica da coluna',
    alt2: 'Procedimento guiado por imagem',
  },
  depoimentos: [
    { name: 'Amanda F.', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene A.', text: 'Ótimo tratamento, passa confiança para o paciente. Gostei muito.', rating: 5 },
    { name: 'Ana C.', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor na coluna',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor na coluna?',
    items: [
      { q: 'Quando devo procurar avaliação por dor na coluna?', a: 'Quando a dor persiste, limita sua rotina, irradia para braço ou perna, ou vem acompanhada de formigamento.' },
      { q: 'Dor na coluna sempre é hérnia de disco?', a: 'Não. Existem várias causas possíveis, como sobrecarga muscular, artrose, alterações discais e dor facetária.' },
      { q: 'Dor descendo para a perna pode ser ciático?', a: 'Pode estar relacionada à irritação de estruturas nervosas, mas a confirmação depende de avaliação clínica.' },
      { q: 'Preciso de ressonância?', a: 'Nem sempre. A necessidade de exames depende da avaliação, dos sintomas e da evolução do quadro.' },
      { q: 'Toda dor na coluna precisa de cirurgia?', a: 'Não. Muitos quadros podem ser conduzidos com tratamento conservador e procedimentos quando indicados.' },
      { q: 'O atendimento é em Brasília?', a: 'Sim. O atendimento ocorre em Águas Claras, Brasília-DF.' },
    ],
  },
  cta: {
    msg: 'Não deixe a dor na coluna comandar sua rotina.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor na coluna em Brasília-DF. Avaliação individualizada para dor lombar, cervical e dor irradiada.',
}
