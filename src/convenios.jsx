export const CONVENIOS_ATENDIDOS = [
  'AFEB BRASAL',
  'AFFEGO',
  'ANAFE SAÚDE',
  'BACEN',
  'BRB (SAÚDE BRB)',
  'CAEME - GO',
  'CAESAN',
  'CAMED',
  'CARE PLUS',
  'CASEC (CODEVASF)',
  'CASEMBRAPA (EMBRAPA)',
  'CBMDF',
  'CLIQUE MÉDICOS',
  'CNTI',
  'CONAB',
  'EMBRATEL (TELOS)',
  'FAPES (BNDES)',
  'FASCAL',
  'GDF SAÚDE',
  'GEAP',
  'GRAVIA',
  'LIFE EMPRESARIAL',
  'LUMINAR SAÚDE (EVIDA)',
  'NOTRE DAME',
  'OMINT SAÚDE',
  'PF SAÚDE (POLÍCIA FEDERAL)',
  'PLAN ASSISTE (MPU)',
  'PLAS/JMU (STM)',
  'PMDF - CONSULTAS MÉDICAS',
  'PMDF - SAÚDE MENTAL E TERAPIAS',
  'POSTAL SAÚDE (ECT) - (SUSPENSO)',
  'PROASA',
  'PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)',
  'PRÓ-SAÚDE (TJDFT)',
  'PRÓ-SER (STJ)',
  'PRÓ-SOCIAL (TRF)',
  'REAL GRANDEZA (DEMAIS PLANOS)',
  'REAL GRANDEZA (SALVUS E SALUTEM)',
  'SAÚDE CAIXA',
  'SAÚDE PETROBRAS',
  'SERPRO',
  'SIS SENADO',
  'STF-MED (STF)',
  'TRE SAÚDE',
  'TRT SAÚDE',
  'TST SAÚDE',
  'UNAFISCO SAÚDE (DEMAIS PLANOS)',
  'UNAFISCO SAÚDE (PREMIUM)',
]

export function ConveniosAtendidos({
  isOpen = false,
  onToggleOpen,
  CtaButton,
  ShieldIcon,
  CheckIcon,
  ChevronDownIcon,
  palette = {},
}) {
  const colors = {
    section: '#2b373f',
    card: '#0f3340',
    accent: '#5bb4d0',
    iconBackground: 'rgba(91,180,208,0.16)',
    toggleBackground: 'rgba(255,255,255,0.06)',
    ...palette,
  }
  const conveniosPorLetra = CONVENIOS_ATENDIDOS.reduce((groups, convenio) => {
    const letter = convenio[0]
    groups[letter] = [...(groups[letter] || []), convenio]
    return groups
  }, {})
  const Cta = CtaButton
  const Shield = ShieldIcon
  const Check = CheckIcon
  const ChevronDown = ChevronDownIcon

  return (
    <section id="convenios" className="scroll-mt-24 py-16 lg:py-24" style={{ backgroundColor: colors.section }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          Lista de convênios
        </h2>

        <div className="mt-8 overflow-hidden rounded-xl border border-white/10" style={{ backgroundColor: colors.card }}>
          <button
            type="button"
            onClick={onToggleOpen}
            aria-expanded={isOpen}
            aria-controls="convenios-list"
            className="grid w-full grid-cols-[48px_minmax(0,1fr)_36px] items-center gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-white/5 sm:grid-cols-[54px_minmax(0,1fr)_40px] sm:px-6"
          >
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full sm:h-[54px] sm:w-[54px]"
              style={{ backgroundColor: colors.iconBackground, color: colors.accent }}
              aria-hidden="true"
            >
              <Shield />
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-bold leading-tight text-white sm:text-xl">
                Ver lista de convênios
              </span>
              <span className="mt-1 block text-sm text-gray-400">
                {CONVENIOS_ATENDIDOS.length} convênios disponíveis para consulta
              </span>
            </span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 sm:h-10 sm:w-10"
              style={{
                backgroundColor: colors.toggleBackground,
                color: colors.accent,
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
              aria-hidden="true"
            >
              <ChevronDown />
            </span>
          </button>

          <div
            id="convenios-list"
            className={`overflow-hidden border-t border-white/10 transition-all duration-500 ${isOpen ? 'max-h-[5200px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="grid gap-x-8 gap-y-6 px-5 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
              {Object.entries(conveniosPorLetra).map(([letter, convenios]) => (
                <div key={letter}>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold"
                      style={{ backgroundColor: colors.iconBackground, color: colors.accent }}
                    >
                      {letter}
                    </span>
                    <span className="text-sm font-semibold text-gray-400">
                      {convenios.length} {convenios.length === 1 ? 'convênio' : 'convênios'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {convenios.map(convenio => (
                      <li key={convenio} className="flex gap-2 text-sm leading-snug text-gray-200">
                        <span className="mt-0.5 flex-shrink-0" style={{ color: colors.accent }}>
                          <Check />
                        </span>
                        <span className="break-words">{convenio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Cta size="lg">Confirmar meu convênio</Cta>
        </div>
      </div>
    </section>
  )
}
