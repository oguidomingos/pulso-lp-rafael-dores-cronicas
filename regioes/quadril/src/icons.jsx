import { Icon } from '@iconify/react'

// Wrapper: cada ícone é um componente React que renderiza um Icon do Iconify.
// className padrão definido por categoria. Pode ser sobrescrito por quem usa.
function makeIcon(name, defaultClass = 'w-6 h-6') {
  return function IconWrap({ className = defaultClass }) {
    return <Icon icon={name} className={className} aria-hidden="true" />
  }
}

// ── UI / Navegação ──────────────────────────────────────────────────────────
export const WhatsAppIcon     = makeIcon('mdi:whatsapp', 'w-5 h-5')
export const StarIcon         = makeIcon('mdi:star', 'w-5 h-5 text-yellow-400')
export const ChevronDownIcon  = makeIcon('lucide:chevron-down', 'w-5 h-5')
export const MapPinIcon       = makeIcon('lucide:map-pin', 'w-5 h-5')
export const ClockIcon        = makeIcon('lucide:clock', 'w-5 h-5')
export const CheckIcon        = makeIcon('lucide:check', 'w-4 h-4 text-white')
export const AlertIcon        = makeIcon('lucide:triangle-alert')

// ── Hero highlights / Diferenciais ──────────────────────────────────────────
export const ShieldIcon       = makeIcon('lucide:badge-check', 'w-5 h-5')
export const UserIcon         = makeIcon('lucide:user-round-check', 'w-5 h-5')
export const ScalpelIcon      = makeIcon('healthicons:orthopaedics-outline', 'w-5 h-5')

// ── Procedimentos clínicos ──────────────────────────────────────────────────
export const SyringeIcon      = makeIcon('lucide:syringe')
export const ViscousIcon      = makeIcon('lucide:droplet')
export const RegenIcon        = makeIcon('lucide:refresh-cw')
export const NerveBlockIcon   = makeIcon('mdi:flash-off')
export const UltrasoundIcon   = makeIcon('lucide:waves')
export const EvaluationIcon   = makeIcon('lucide:clipboard-list')

// ── Regiões anatômicas (Hero focusIcon) ─────────────────────────────────────
export const KneeJointIcon    = makeIcon('streamline-ultimate:medical-specialty-knee-1')
export const ShoulderIcon     = makeIcon('mdi:arm-flex')
export const SpineIcon        = makeIcon('healthicons:spine-outline')
export const HipIcon          = makeIcon('healthicons:leg-outline')
export const FootIcon         = makeIcon('healthicons:foot-outline')
export const HandIcon         = makeIcon('mdi:hand-back-right')
export const WristIcon        = makeIcon('mdi:hand-back-left')

// ── Sintomas (conceitos de movimento, dor e função) ─────────────────────────
export const StairsIcon       = makeIcon('mdi:stairs')
export const CrackIcon        = makeIcon('mdi:waveform')
export const SwellingIcon     = makeIcon('mdi:water-circle')
export const StiffnessIcon    = makeIcon('lucide:lock-keyhole')
export const CrouchIcon       = makeIcon('mdi:weight-lifter')
export const BlockIcon        = makeIcon('lucide:ban')
export const InstabilityIcon  = makeIcon('mdi:scale-unbalanced')
export const WalkingIcon      = makeIcon('healthicons:walking-outline')
export const MoonIcon         = makeIcon('lucide:moon')
export const LightningIcon    = makeIcon('lucide:zap')
export const ArmRaiseIcon     = makeIcon('healthicons:arm-outline')
export const HandReachIcon    = makeIcon('mdi:tshirt-crew-outline')
export const TingleIcon       = makeIcon('mdi:vibrate')
export const GripIcon         = makeIcon('mdi:hand-okay')
export const BowDownIcon      = makeIcon('mdi:cellphone-text')
export const SitIcon          = makeIcon('lucide:armchair')
export const HeelIcon         = makeIcon('mdi:walk')
export const ShoeIcon         = makeIcon('mdi:shoe-formal')
export const CoughIcon        = makeIcon('lucide:wind')
export const TypingIcon       = makeIcon('lucide:keyboard')
export const LegIrradiationIcon = makeIcon('lucide:trending-down')

// ── Específicos de causas/procedimentos (anti-repetição) ────────────────────
export const FrozenIcon          = makeIcon('mdi:lock')
export const DislocationIcon     = makeIcon('lucide:unlink')
export const LumbarIcon          = makeIcon('healthicons:back-pain-outline')
export const MechanicalLoadIcon  = makeIcon('mdi:hammer-wrench')
export const NeckPainIcon        = makeIcon('mdi:head-snowflake-outline')
export const PainTreatmentIcon   = makeIcon('healthicons:pain-managment-outline')
export const GroinIcon           = makeIcon('mdi:meditation')
export const PlantarIcon         = makeIcon('mdi:shoe-print')
export const BandageIcon         = makeIcon('mdi:bandage')
export const ReturnToSportIcon   = makeIcon('mdi:run-fast')
export const OverloadIcon        = makeIcon('mdi:weight')
export const ScanIcon            = makeIcon('lucide:scan')
export const InflammationIcon    = makeIcon('lucide:flame')

// ── Tendões específicos por região anatômica ────────────────────────────────
export const RotatorCuffIcon     = makeIcon('healthicons:sling-outline')
export const PatellarTendonIcon  = makeIcon('icon-park-outline:muscle')
export const GluteTendonIcon     = makeIcon('lucide:biceps-flexed')
export const AchillesTendonIcon  = makeIcon('game-icons:achilles-heel')
export const HandTendonIcon      = makeIcon('material-symbols:healing')

// ── Lesões anatômicas específicas ───────────────────────────────────────────
export const KneeBandageIcon     = makeIcon('game-icons:knee-bandage')
export const KneeCapIcon         = makeIcon('game-icons:knee-cap')
export const KneelingIcon        = makeIcon('game-icons:kneeling')
export const TwistIcon           = makeIcon('game-icons:twister')
export const RehabIcon           = makeIcon('healthicons:physical-therapy-outline')

// ── Causas (estruturas e mecanismos) ────────────────────────────────────────
export const CartilageIcon    = makeIcon('healthicons:joints-outline')
export const MeniscusIcon     = makeIcon('mdi:moon-waxing-crescent')
export const LigamentIcon     = makeIcon('lucide:link')
export const TendonIcon       = makeIcon('lucide:activity')
export const BursitisIcon     = makeIcon('lucide:circle-dot')
export const SportsIcon       = makeIcon('lucide:dumbbell')
export const HerniaIcon       = makeIcon('mdi:vector-difference-ab')
export const NerveCompressIcon= makeIcon('healthicons:nerve-outline')
export const CystIcon         = makeIcon('lucide:droplets')
export const DeformityIcon    = makeIcon('mdi:vector-curve')
export const ImpactIcon       = makeIcon('lucide:swords')
export const TriggerFingerIcon= makeIcon('mdi:hand-pointing-up')
export const DiscIcon         = makeIcon('lucide:disc-3')
export const StenosisIcon     = makeIcon('mdi:arrow-collapse-horizontal')
