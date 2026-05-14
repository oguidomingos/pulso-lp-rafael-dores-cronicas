import { useState } from 'react'
import './App.css'

const m = {
  clinicName: 'Lanner Especialidades',
  doctorName: 'Dr. Rafael Rocha',
  crm: 'CRM/DF 31.365',
  specialty: 'Ortopedista e Traumatologista em Brasília',
  phone: '(61) 99919-0221',
  whatsapp: '5561991900221',
  city: 'Brasília',
  state: 'DF',
  address: 'Rua 5 Norte, Lote 3 - Águas Claras, Brasília - DF, CEP: 71907-720, Sala 411',
  hours: 'Seg–Sex: 08h–18h',
  googleRating: '5.0',
  googleReviews: '11',
  stats: { procedures: '5.000', surgeries: '500', patients: '3.000', specialties: '14' },
  doctorPhoto: './img/foto-sem-fundo.png',
  symbol: './img/simbolo.jpg',
  logoHorizontal: './img/logo-horizontal.jpg',
}

const WA_URL = `https://wa.me/${m.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20${encodeURIComponent(m.doctorName)}.`

// Cores
const COLOR_DARK = '#1a2a35'
const COLOR_DARKER = '#0f1e28'
const COLOR_CARD = '#0f3340'
const COLOR_SECTION = '#2b373f'
const COLOR_GREEN = '#2e9e6e'
const COLOR_BLUE_LIGHT = '#5bb4d0'
const COLOR_BLUE_DEEP = '#1d4e6b'

// ── Ícones ──────────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ── Botão WhatsApp ───────────────────────────────────────────────────────────
function BtnWA({ children, className = '', size = 'md' }) {
  const pad = size === 'lg' ? 'px-8 py-4 text-base' : 'px-5 py-2.5 text-sm'
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${pad} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#especialidades', label: 'Especialidades' },
    { href: '#procedimentos', label: 'Procedimentos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3">
            <img src={m.logoHorizontal} alt={m.doctorName} className="h-10 object-contain" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <BtnWA>Agende sua Consulta</BtnWA>
          </div>
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-gray-600 hover:text-brand-blue font-medium transition-colors py-1" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <BtnWA className="w-full justify-center mt-4">Agende sua Consulta</BtnWA>
          </div>
        )}
      </div>
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: COLOR_DARKER }}
    >
      {/* Background textura */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url(./img/textura-LP.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradiente desktop: clareia próximo à foto do doutor (lado direito) */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background: `linear-gradient(to right, ${COLOR_DARKER} 30%, rgba(27,74,107,0.5) 55%, rgba(91,180,208,0.18) 80%, rgba(140,210,235,0.12) 100%)`,
        }}
      />
      {/* Gradiente mobile: overlay suave */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(15,30,40,0.75) 0%, rgba(15,30,40,0.55) 100%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:pt-0 lg:pb-14 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: COLOR_BLUE_LIGHT }}>
              {m.clinicName}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Ortopedista e<br />
              <span style={{ color: COLOR_BLUE_LIGHT }}>Traumatologista</span><br />
              em Brasília
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-lg">
              Avaliação médica especializada para dores, lesões, fraturas e problemas articulares, com atendimento em Brasília.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Aceitamos convênios', 'Consulta personalizada', 'Procedimentos para dor', 'Cirurgias minimamente invasivas'].map(t => (
                <span key={t} className="flex items-center gap-2 text-sm bg-white/10 text-gray-200 px-3 py-1.5 rounded-full">
                  <CheckIcon />
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <BtnWA size="lg">Agende sua Consulta</BtnWA>
              <a href={`tel:${m.phone}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-lg transition-all border border-white/20">
                <PhoneIcon />
                {m.phone}
              </a>
            </div>

            {/* Rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <span className="text-white font-semibold">{m.googleRating}</span>
              <span className="text-gray-400 text-sm">{m.googleReviews} avaliações verificadas</span>
            </div>
          </div>

          {/* Foto */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: `radial-gradient(ellipse at center, ${COLOR_BLUE_LIGHT} 0%, transparent 70%)` }}
              />
              <img
                src={m.doctorPhoto}
                alt={m.doctorName}
                className="relative z-10 max-h-[550px] w-auto object-contain"
              />
              {/* Badge CRM */}
              <div
                className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-xl text-white"
                style={{ backgroundColor: COLOR_CARD }}
              >
                <p className="font-bold text-xl lg:text-2xl" style={{ color: COLOR_BLUE_LIGHT }}>{m.doctorName}</p>
                <p className="text-gray-300 font-medium text-base mt-0.5">{m.specialty}</p>
                <p className="text-gray-500 text-sm mt-0.5">{m.crm}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp fixo mobile */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-4 text-base shadow-xl"
      >
        <WhatsAppIcon className="w-6 h-6" />
        Agende Agora
      </a>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: '+45', label: 'Convênios Atendidos' },
    { value: `+${m.stats.procedures}`, label: 'Procedimentos Realizados' },
    { value: `+${m.stats.surgeries}`, label: 'Cirurgias' },
    { value: `+${m.stats.patients}`, label: 'Pacientes Atendidos' },
  ]
  return (
    <section style={{ backgroundColor: COLOR_DARK }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold" style={{ color: COLOR_BLUE_LIGHT }}>{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Sobre ─────────────────────────────────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_DARKER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="./img/foto-mesa.jpg" alt="Dr. Rafael Rocha" className="rounded-2xl w-full object-cover max-h-[500px]" />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Sobre o Médico</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">{m.doctorName}</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ortopedista e Traumatologista com formação sólida e comprometimento com o bem-estar dos pacientes.
              Atua com foco em procedimentos minimamente invasivos guiados por ultrassom para tratamento de dores,
              lesões e doenças osteoarticulares.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Atende na {m.clinicName} em Brasília-DF, oferecendo consultas especializadas, diagnóstico preciso e
              tratamentos eficazes para cada caso.
            </p>
            <div className="space-y-3 mb-8">
              {[
                `${m.crm} — Ortopedista e Traumatologista`,
                'Procedimentos guiados por ultrassom',
                `Atende em ${m.city}-${m.state}`,
                'Convênios aceitos',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLOR_GREEN }}>
                    <CheckIcon />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <BtnWA size="lg">Agendar Consulta</BtnWA>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Especialidades ────────────────────────────────────────────────────────────
function Especialidades() {
  const areas = [
    {
      title: 'Ortopedia',
      items: ['Artrose de Joelho', 'Artrose de Quadril', 'Artrose de Ombro', 'Artrite Reumatoide', 'Bursite'],
    },
    {
      title: 'Musculoesqueléticas',
      items: ['Lombalgia Crônica', 'Cervicalgia', 'Hérnia de Disco', 'Fibromialgia', 'Síndrome Miofascial'],
    },
    {
      title: 'Traumatologia',
      items: ['Fraturas', 'Lesões Ligamentares', 'Síndrome do Túnel do Carpo', 'Ciatalgia', 'Lesões Esportivas'],
    },
    {
      title: 'Procedimentos',
      items: ['Infiltrações guiadas por US', 'Proloterapia', 'PRP', 'Bloqueios nervosos', 'Viscossuplementação'],
    },
  ]
  return (
    <section id="especialidades" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_SECTION }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Especialidades</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Áreas de Atuação</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Diagnóstico preciso e tratamento das mais diversas condições ortopédicas e traumatológicas.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(a => (
            <div key={a.title} className="rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-colors" style={{ backgroundColor: COLOR_CARD }}>
              <h3 className="text-lg font-bold text-white mb-3">{a.title}</h3>
              <ul className="space-y-2">
                {a.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span style={{ color: COLOR_BLUE_LIGHT }} className="mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA>Consulte seu Caso</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── Procedimentos ─────────────────────────────────────────────────────────────
function Procedimentos() {
  const procs = [
    { title: 'Infiltração com Corticosteroide', desc: 'Redução rápida de inflamação em articulações e tendões com precisão guiada por ultrassom.' },
    { title: 'Viscossuplementação', desc: 'Reposição do líquido sinovial para lubrificação e proteção das articulações, especialmente joelhos.' },
    { title: 'PRP (Plasma Rico em Plaquetas)', desc: 'Aproveitamento dos fatores de crescimento do próprio sangue para regeneração tecidual.' },
    { title: 'Proloterapia', desc: 'Estímulo natural à regeneração de ligamentos e tendões com soluções injetáveis.' },
    { title: 'Bloqueio Nervoso', desc: 'Interrupção temporária de sinais de dor para alívio imediato e duradouro.' },
    { title: 'Aspiração de Cistos e Calcificações', desc: 'Remoção de depósitos e cistos que causam dor e limitação de movimento.' },
  ]
  return (
    <section id="procedimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_CARD }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Tratamentos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Procedimentos Minimamente Invasivos</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Técnicas guiadas por ultrassom para maior precisão, segurança e eficácia no alívio da dor.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {procs.map(p => (
            <div key={p.title} className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: COLOR_SECTION }}>
              <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${COLOR_BLUE_LIGHT}22` }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={COLOR_BLUE_LIGHT} strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <BtnWA size="lg">Agende sua Avaliação</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── Depoimentos ───────────────────────────────────────────────────────────────
// Depoimentos reais verificados via Doctoralia (mai/2026) — 11 avaliações, todos 5 estrelas
const TESTIMONIALS = [
  { name: 'Inerilda', text: 'Cheguei no consultório com dor e ao término da consulta e procedimentos, estava bem melhor. Hoje fiz outro procedimento e sei que será um ótimo resultado. Gratidão Dr. Rafael Rocha!!', rating: 5 },
  { name: 'Maria Cristina', text: 'Foi o primeiro médico que me sugeriu um tratamento eficaz para as dores que estava sentindo nos joelhos.', rating: 5 },
  { name: 'Amanda Ferreira', text: 'Profissional muito atencioso e empático. Me senti acolhida e bem cuidada.', rating: 5 },
  { name: 'Paulo', text: 'Já sai de lá descendo 11 andares de escada! Top demais.', rating: 5 },
  { name: 'Darlene Aquino', text: 'Ótimo tratamento, passa confiança pro paciente. Gostei muito, super recomendo.', rating: 5 },
  { name: 'Ana Cristina G. B. de Menezes', text: 'Ótimo atendimento, gentileza no trato com o paciente, tratamento muito satisfatório.', rating: 5 },
]

function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_DARKER }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Depoimentos</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">O que Nossos Pacientes Dizem</h2>
          <p className="text-gray-400 mt-3 text-sm">Avaliações verificadas no Doctoralia · {m.googleRating}⭐ ({m.googleReviews} avaliações)</p>
        </div>

        {/* Cards depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="rounded-2xl p-6 border border-white/10" style={{ backgroundColor: COLOR_CARD }}>
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-gray-300 mb-4 italic leading-relaxed">"{t.text}"</p>
              <div className="font-semibold text-white">{t.name}</div>
              <div className="text-sm text-gray-500">Paciente verificado · Doctoralia</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Localização ───────────────────────────────────────────────────────────────
function Localizacao() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: COLOR_SECTION }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Onde Estamos</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-6">Localização</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPinIcon />
                <div>
                  <p className="font-semibold text-white">{m.clinicName}</p>
                  <p>{m.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <ClockIcon />
                <span>{m.hours}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <PhoneIcon />
                <span>{m.phone}</span>
              </div>
            </div>
            <BtnWA size="lg">Fale pelo WhatsApp</BtnWA>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5!2d-48.0247!3d-15.8347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b0a1b2c3d4e%3A0x0!2zUnVhIDUgTm9ydGUsIExvdGUgMyAtIMOBZ3VhcyBDbGFyYXM!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Preciso de encaminhamento para agendar?',
    a: 'Não é necessário encaminhamento. Você pode agendar diretamente sua avaliação pelo WhatsApp ou telefone. Se seu convênio exigir, verifique as regras do seu plano.',
  },
  {
    q: 'O Dr. Rafael atende por convênio?',
    a: 'Sim! Atendemos diversos convênios e planos de saúde. Entre em contato pelo WhatsApp para verificar se o seu plano é atendido e quais procedimentos estão cobertos.',
  },
  {
    q: 'Por que procurar um ortopedista especializado?',
    a: 'O ortopedista e traumatologista possui formação específica para diagnosticar e tratar lesões, dores articulares, musculoesqueléticas e fraturas. Com técnicas avançadas e procedimentos minimamente invasivos guiados por ultrassom, é possível obter alívio significativo e duradouro, muitas vezes evitando cirurgias.',
  },
  {
    q: 'Como faço para agendar minha consulta?',
    a: 'É simples! Clique em qualquer botão "Agende sua Consulta" nesta página para ser direcionado ao nosso WhatsApp. Nossa equipe responderá rapidamente para encontrar o melhor horário para você.',
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="py-16 lg:py-24" style={{ backgroundColor: COLOR_CARD }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: COLOR_BLUE_LIGHT }}>Dúvidas</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden" style={{ backgroundColor: COLOR_SECTION }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 transition-transform text-gray-400 ${open === i ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon />
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Ainda tem dúvidas? Fale conosco!</p>
          <BtnWA>Tire suas Dúvidas</BtnWA>
        </div>
      </div>
    </section>
  )
}

// ── CTA Final ─────────────────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="py-12" style={{ backgroundColor: COLOR_DARK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 rounded-2xl p-8"
          style={{ backgroundColor: '#d0f1eb', color: '#1a2730' }}
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl font-bold" style={{ color: COLOR_BLUE_DEEP }}>{m.googleRating}</div>
            <div>
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="text-sm font-medium mt-0.5">{m.googleReviews} avaliações · Doctoralia</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-300" />
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold">Agende sua consulta hoje</p>
            <p className="text-sm text-gray-600">Atendimento rápido e humanizado</p>
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
          >
            <WhatsAppIcon />
            Agendar Agora
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white py-8 pb-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={m.symbol} alt="" className="h-8 w-8 object-contain rounded" />
              <span className="font-bold text-lg" style={{ color: COLOR_DARK }}>{m.doctorName}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ortopedista e Traumatologista em {m.city}-{m.state}.
              Procedimentos minimamente invasivos guiados por ultrassom na {m.clinicName}.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_DARK }}>Contato</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              <p>{m.address}</p>
              <p>{m.phone}</p>
              <p>{m.hours}</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: COLOR_DARK }}>Links</h4>
            <div className="space-y-2">
              {['#sobre', '#especialidades', '#procedimentos', '#depoimentos', '#faq'].map(href => (
                <a key={href} href={href} className="block text-gray-500 hover:text-blue-600 text-sm transition-colors capitalize">
                  {href.replace('#', '')}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} {m.doctorName} — {m.crm} — Ortopedista e Traumatologista
          </p>
          <p className="text-gray-400 text-xs">
            Desenvolvido por <span className="font-medium">Pulso Marketing Médico</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Sobre />
        <Especialidades />
        <Procedimentos />
        <Depoimentos />
        <Localizacao />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
