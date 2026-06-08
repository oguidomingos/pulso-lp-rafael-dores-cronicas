import {
  KneeJointIcon, StairsIcon, CrackIcon, SwellingIcon, StiffnessIcon, KneelingIcon, BlockIcon, InstabilityIcon, WalkingIcon,
  CartilageIcon, KneeBandageIcon, LigamentIcon, PatellarTendonIcon, BursitisIcon, SportsIcon,
  EvaluationIcon, SyringeIcon, ViscousIcon, RegenIcon, NerveBlockIcon, UltrasoundIcon,
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
  slug: 'joelho',
  name: 'Joelho',
  bgSvg: './img/hero-bg.jpg',
  formMsg: 'Conte sobre sua dor no joelho',
  hero: {
    subhead: 'Avaliação ortopédica detalhada para dor no joelho, lesões de menisco e ligamentos, artrose e desgaste articular. Procedimentos minimamente invasivos guiados por ultrassom.',
    highlightFocus: 'Foco em alívio da dor',
    focusIcon: KneeJointIcon,
  },
  sintomas: {
    h2: 'Você reconhece algum desses sinais?',
    subhead: 'A dor no joelho pode se manifestar de várias formas. Quanto mais cedo for avaliada, maiores as chances de tratamento conservador e alívio sustentado.',
    btnText: 'Quero uma avaliação do meu joelho',
    items: [
      { icon: StairsIcon, title: 'Dor ao subir ou descer escadas', desc: 'Desconforto na frente ou nos lados do joelho ao mudar de degrau.' },
      { icon: CrackIcon, title: 'Estalos e crepitação', desc: 'Sensação de "areia" ou estalidos ao dobrar ou esticar o joelho.' },
      { icon: SwellingIcon, title: 'Inchaço e derrame articular', desc: 'Joelho aumentado de volume, quente ou com aspecto de "água por dentro".' },
      { icon: StiffnessIcon, title: 'Rigidez matinal', desc: 'Dificuldade para movimentar o joelho ao acordar ou após longo período sentado.' },
      { icon: KneelingIcon, title: 'Dor ao agachar', desc: 'Dor ao agachar, ajoelhar ou levantar de cadeiras baixas.' },
      { icon: BlockIcon, title: 'Bloqueio articular', desc: 'Sensação de joelho "trancando" ou falhando em movimentos.' },
      { icon: InstabilityIcon, title: 'Sensação de falseio', desc: 'Joelho que parece "ceder" e dá insegurança ao caminhar.' },
      { icon: WalkingIcon, title: 'Dor ao caminhar', desc: 'Dor persistente após curtas caminhadas, em pé prolongado ou em descidas.' },
    ],
  },
  causas: {
    h2: 'O que pode estar por trás da sua dor no joelho',
    subhead: 'Existem várias causas para dor no joelho. Só uma avaliação clínica detalhada, complementada por exames de imagem quando necessário, permite o diagnóstico correto.',
    items: [
      { icon: CartilageIcon, title: 'Artrose (osteoartrose)', desc: 'Desgaste da cartilagem articular, comum a partir dos 45 a 50 anos, com dor mecânica e rigidez.' },
      { icon: KneeBandageIcon, title: 'Lesão de menisco', desc: 'Rupturas traumáticas (esportes) ou degenerativas, frequentemente associadas a bloqueios e estalos.' },
      { icon: LigamentIcon, title: 'Lesões ligamentares (LCA, LCP, LCM, LCL)', desc: 'Entorses e rupturas que causam instabilidade, falseios e inchaço após trauma ou esforço.' },
      { icon: PatellarTendonIcon, title: 'Tendinopatia patelar e quadricipital', desc: 'Inflamação ou degeneração do tendão, comum em corredores e em situações de sobrecarga.' },
      { icon: BursitisIcon, title: 'Bursite e síndrome femoropatelar', desc: 'Dor anterior do joelho, atrás da patela ou em pontos específicos, ligada a sobrecarga e biomecânica.' },
      { icon: SportsIcon, title: 'Lesões esportivas e por sobreuso', desc: 'Sobrecarga em treinos, retornos rápidos ao exercício e movimentos repetitivos.' },
    ],
  },
  procedimentos: {
    h2: 'Procedimentos para dor no joelho',
    subhead: 'Técnicas minimamente invasivas guiadas por ultrassom, com foco em precisão, segurança e alívio da dor, sempre individualizadas para cada paciente.',
    items: [
      { icon: EvaluationIcon, title: 'Avaliação ortopédica do joelho', desc: 'Anamnese detalhada, exame físico completo e leitura de exames de imagem para definir a melhor conduta.' },
      { icon: SyringeIcon, title: 'Infiltração intra-articular guiada por US', desc: 'Aplicação precisa de medicamento dentro do joelho, com ultrassom em tempo real para maior segurança.' },
      { icon: ViscousIcon, title: 'Viscossuplementação (cuidado articular)', desc: 'Procedimento voltado à proteção, lubrificação e conforto da articulação do joelho.' },
      { icon: RegenIcon, title: 'Terapia regenerativa', desc: 'Técnica voltada ao estímulo da recuperação tecidual e melhora funcional em joelhos com desgaste.' },
      { icon: NerveBlockIcon, title: 'Bloqueio dos nervos geniculares', desc: 'Procedimento para controle da dor crônica do joelho em pacientes com indicação específica.' },
      { icon: UltrasoundIcon, title: 'Procedimentos guiados por ultrassom', desc: 'Aspiração de derrame articular, infiltrações em bursas e tendões com precisão guiada por imagem.' },
    ],
  },
  quando: {
    intro: 'Se algum dos sinais abaixo descreve sua situação, é importante buscar avaliação ortopédica. Identificar a causa cedo amplia as opções de tratamento conservador e ajuda a evitar agravamento da lesão.',
    signs: [
      'Dor no joelho que persiste por mais de 1 a 2 semanas',
      'Inchaço, calor local ou vermelhidão na articulação',
      'Sensação de joelho "falseando" ou bloqueando',
      'Dificuldade de subir/descer escadas ou agachar',
      'Dor que limita seu trabalho, esporte ou rotina',
      'Trauma recente com dor intensa, deformidade ou perda de movimento',
    ],
  },
  comoFunciona: {
    step1: 'História da dor, exame físico do joelho, testes específicos para ligamentos, meniscos e estabilidade. Análise de exames já realizados.',
  },
  diferenciaisH2: 'Por que pacientes com dor no joelho nos escolhem',
  galeria: {
    alt1: 'Avaliação ortopédica do joelho',
    alt2: 'Procedimento minimamente invasivo guiado por ultrassom',
  },
  depoimentos: [
    { name: 'Maria Cristina', text: 'Foi o primeiro médico que me sugeriu um tratamento eficaz para as dores que estava sentindo nos joelhos.', rating: 5 },
    { name: 'Inerilda', text: 'Cheguei no consultório com dor e ao término da consulta e procedimentos, estava bem melhor. Hoje fiz outro procedimento e sei que será um ótimo resultado. Gratidão Dr. Rafael Rocha!!', rating: 5 },
    { name: 'Paulo', text: 'Já sai de lá descendo 11 andares de escada! Top demais.', rating: 5 },
    { name: 'Amanda Ferreira', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
    { name: 'Darlene Aquino', text: 'Ótimo tratamento, passa confiança pro paciente. Gostei muito, super recomendo.', rating: 5 },
    { name: 'Ana Cristina G. B. de Menezes', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
  ],
  faq: {
    h2: 'Perguntas frequentes sobre dor no joelho',
    bottomMsg: 'Ainda tem dúvidas sobre a sua dor no joelho?',
    items: [
      { q: 'Quando devo procurar um ortopedista por dor no joelho?', a: 'Sempre que a dor no joelho persistir por mais de 1 a 2 semanas, vier acompanhada de inchaço, estalos, sensação de falseio, bloqueios ou após trauma. Avaliação precoce amplia as opções de tratamento conservador.' },
      { q: 'Toda dor no joelho precisa de cirurgia?', a: 'Não. A maior parte dos casos é tratada de forma conservadora, com reabilitação, ajuste de carga e, quando indicado, procedimentos minimamente invasivos. A cirurgia é avaliada apenas quando outras condutas não são suficientes.' },
      { q: 'Como é a infiltração guiada por ultrassom?', a: 'É um procedimento ambulatorial em que o medicamento é aplicado dentro da articulação ou estrutura-alvo com auxílio do ultrassom em tempo real. Isso aumenta a precisão e a segurança, comparado à infiltração feita "às cegas".' },
      { q: 'Preciso de encaminhamento para agendar a consulta?', a: 'Não. Você pode preencher o formulário desta página para iniciar o atendimento pelo WhatsApp. Se o seu convênio exigir, verifique as regras do plano.' },
      { q: 'O Dr. Rafael atende por convênio?', a: 'Sim, atendemos diversos convênios e planos de saúde. Pelo WhatsApp você pode confirmar se o seu plano é atendido e quais procedimentos estão cobertos.' },
      { q: 'Quanto tempo leva para sentir alívio após o procedimento?', a: 'Depende do diagnóstico, da técnica utilizada e do quadro de cada paciente. Algumas pessoas relatam alívio em poucos dias, outras precisam de um período maior. Não existe garantia de cura ou de resultado idêntico para todos os casos.' },
    ],
  },
  cta: {
    msg: 'Não conviva com a dor no joelho.',
    sub: 'Agende sua avaliação ortopédica em Brasília.',
  },
  footerDesc: 'Atendimento ortopédico para dor no joelho em Brasília-DF. Procedimentos minimamente invasivos guiados por ultrassom.',
}
