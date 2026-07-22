import type { ComponentType } from 'react'
import { Button } from '@/components/Button'
import { CaravanSlider } from '@/components/CaravanSlider'
import type { WordPressCamperTechnicalSpecs } from '@/lib/wordpress/types'

interface TechnicalSpecConfig {
  key: keyof WordPressCamperTechnicalSpecs
  label: string
  icon: ComponentType<{ className?: string }>
}

// TODO(wordpress): todavia no hay un campo de galeria/slider por camper, es mock del print
const SLIDER_IMAGES = [
  '/assets/images/vans/caravanSlider1.webp',
  '/assets/images/vans/caravanSlider2.webp',
  '/assets/images/vans/caravanSlider3.webp',
  '/assets/images/vans/caravanSlider4.webp',
]

const ChassisIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M9.96 12.45V2.49a.83.83 0 0 0-.748-.826L9.13 1.66H2.49a.83.83 0 0 0-.83.83v9.13h1.66a.83.83 0 0 1 0 1.66H1.66a1.66 1.66 0 0 1-1.652-1.496L0 11.62V2.49A2.49 2.49 0 0 1 2.49 0h6.64l.246.012A2.49 2.49 0 0 1 11.62 2.49v9.96a.83.83 0 1 1-1.66 0" />
    <path fill="#4570af" d="M11.63 11.64a.83.83 0 1 1 0 1.66H6.65a.83.83 0 0 1 0-1.66zM16.63 11.62V8.59L13.74 4.98V4.98H10.82a.83.83 0 0 1 0-1.66h2.923l.185.01a1.66 1.66 0 0 1 1.108.614h.001l2.887 3.61.084.113c.183.272.281.593.282.922v3.03a1.66 1.66 0 0 1-1.66 1.66h-1.66a.83.83 0 1 1 0-1.66z" />
    <path fill="#4570af" d="M14.14 12.47a.83.83 0 1 0-1.66 0 .83.83 0 0 0 1.66 0m1.66 0a2.49 2.49 0 1 1-4.98 0 2.49 2.49 0 0 1 4.98 0M5.8 12.47a.83.83 0 1 0-1.66 0 .83.83 0 0 0 1.66 0m1.66 0a2.49 2.49 0 1 1-4.98 0 2.49 2.49 0 0 1 4.98 0" />
  </svg>
)

const YearIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M4.14 4.15V.83a.83.83 0 0 1 1.66 0v3.32a.83.83 0 0 1-1.66 0M10.8 4.15V.83a.83.83 0 0 1 1.66 0v3.32a.83.83 0 1 1-1.66 0" />
    <path fill="#4570af" d="M14.94 4.18a.83.83 0 0 0-.83-.83H2.49a.83.83 0 0 0-.83.83V15.8c0 .458.372.83.83.83h11.62a.83.83 0 0 0 .83-.83zM16.6 15.8a2.49 2.49 0 0 1-2.49 2.49H2.49A2.49 2.49 0 0 1 0 15.8V4.18a2.49 2.49 0 0 1 2.49-2.49h11.62a2.49 2.49 0 0 1 2.49 2.49z" />
    <path fill="#4570af" d="M15.77 6.66a.83.83 0 0 1 0 1.66H.83a.83.83 0 1 1 0-1.66z" />
  </svg>
)

const ConnectivityIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="m9.138 12.495.085.004a.83.83 0 0 1 0 1.652l-.085.004H9.13a.83.83 0 1 1 0-1.66zM9.13 0a13.28 13.28 0 0 1 8.854 3.382.83.83 0 0 1-1.108 1.237 11.62 11.62 0 0 0-15.492 0A.83.83 0 0 1 .276 3.382 13.28 13.28 0 0 1 9.13 0" />
    <path fill="#4570af" d="M9.577 4.169a9.13 9.13 0 0 1 5.617 2.295l.327.304.058.063a.83.83 0 0 1-1.156 1.18l-.064-.058-.268-.248a7.47 7.47 0 0 0-4.596-1.878l-.365-.009a7.47 7.47 0 0 0-4.961 1.887l-.268.248a.83.83 0 0 1-1.162-1.185l.326-.304A9.13 9.13 0 0 1 9.13 4.158zM9.13 8.335a4.98 4.98 0 0 1 3.308 1.258l.178.166.058.062a.83.83 0 0 1-1.156 1.18l-.064-.056-.119-.111a3.32 3.32 0 0 0-4.529.11L6.742 11A.83.83 0 0 1 5.644 9.76l.178-.166A4.98 4.98 0 0 1 9.13 8.335" />
  </svg>
)

const WaterIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M6.64 8.479c0-.66-.316-1.354-1.114-2.005a6.4 6.4 0 0 1-1.374-1.57 6.2 6.2 0 0 1-1.384 1.575c-.794.635-1.108 1.34-1.108 2 0 1.395 1.133 2.531 2.49 2.531s2.49-1.136 2.49-2.531m1.66 0c0 2.29-1.855 4.191-4.15 4.191S0 10.769 0 8.479c0-1.25.616-2.404 1.73-3.296a4.64 4.64 0 0 0 1.606-2.636l.018-.071a.83.83 0 0 1 1.61.071c.2 1.006.807 1.985 1.611 2.64C7.67 6.082 8.3 7.215 8.3 8.48" />
    <path fill="#4570af" d="M9.992 0a.83.83 0 0 1 .81.667l.08.351c.44 1.75 1.526 3.423 2.946 4.559 1.808 1.446 2.8 3.243 2.8 5.21l-.003.245a6.623 6.623 0 0 1-11.121 4.64l-.177-.17-.057-.063a.83.83 0 0 1 1.166-1.168l.063.056.133.128a4.965 4.965 0 0 0 8.337-3.662v-.003l-.008-.254c-.08-1.267-.755-2.53-2.171-3.663a10.4 10.4 0 0 1-2.803-3.516 10 10 0 0 1-.49.885.83.83 0 1 1-1.407-.88A8.3 8.3 0 0 0 9.176.66l.018-.072A.83.83 0 0 1 9.992 0" />
  </svg>
)

const BathingIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M0 10.79C0 9.65.42 8.52 1.013 7.78l.09-.094A.83.83 0 0 1 2.49 8.3a1.245 1.245 0 0 0 1.245 1.245l.123-.006A1.244 1.244 0 0 0 4.98 8.3c0-.672-.155-1.003-.43-1.52l-.312-.599c-.54-1.079-.612-2.156-.235-3.204.364-1.009 1.118-1.92 2.09-2.772L6.182.14a.83.83 0 0 1 1.273.528c.375 1.876 1.51 3.699 3.025 4.91 1.809 1.447 2.801 3.246 2.801 5.213l-.008.327a6.64 6.64 0 0 1-13.264 0zM6.64 8.3a2.905 2.905 0 0 1-2.76 2.902l-.145.003c-.766 0-1.5-.303-2.043-.841q-.031.21-.032.426l.006.245a4.98 4.98 0 0 0 9.948 0l.006-.245c0-1.352-.668-2.708-2.179-3.916A10.43 10.43 0 0 1 6.236 2.42c-.323.393-.543.764-.67 1.119-.214.593-.193 1.2.156 1.899l.297.558c.31.58.621 1.258.621 2.303" />
  </svg>
)

const EnergyIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M11.65 9.16a2.49 2.49 0 1 0-4.98 0 2.49 2.49 0 0 0 4.98 0m1.66 0a4.15 4.15 0 1 1-8.3 0 4.15 4.15 0 0 1 8.3 0M8.33 2.49V.83a.83.83 0 1 1 1.66 0v1.66a.83.83 0 1 1-1.66 0M8.33 17.49v-1.66a.83.83 0 1 1 1.66 0v1.66a.83.83 0 1 1-1.66 0M2.692 2.684a.83.83 0 0 1 1.11-.057l.064.057 1.17 1.17.057.064a.83.83 0 0 1-1.167 1.167l-.063-.057-1.17-1.17-.058-.064a.83.83 0 0 1 .057-1.11M13.284 13.292a.83.83 0 0 1 1.11-.056l.064.056 1.17 1.17.057.064a.83.83 0 0 1-1.167 1.167l-.064-.057-1.17-1.17-.057-.063a.83.83 0 0 1 .057-1.11M2.49 8.33a.83.83 0 1 1 0 1.66H.83a.83.83 0 1 1 0-1.66zM17.49 8.33a.83.83 0 1 1 0 1.66h-1.66a.83.83 0 1 1 0-1.66zM3.926 13.227a.83.83 0 0 1 1.167 1.167l-.057.063-1.17 1.17a.83.83 0 1 1-1.174-1.173l1.17-1.17zM14.518 2.627a.83.83 0 0 1 1.167 1.167l-.057.064-1.17 1.17a.83.83 0 0 1-1.174-1.174l1.17-1.17z" />
  </svg>
)

const InsuranceIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M13.28 4.15c-1.925 0-4.174-1.11-5.718-2.457a.14.14 0 0 0-.184.001C5.89 2.99 3.726 4.08 1.842 4.146l-.182.003v5.81l.007.342c.074 1.681.696 2.927 1.642 3.896.902.925 2.13 1.626 3.542 2.173l.616.225.018.006c1.665-.581 3.116-1.345 4.146-2.402 1.01-1.035 1.649-2.384 1.649-4.24zm1.66 5.81c0 2.294-.813 4.058-2.12 5.4-1.284 1.317-3.01 2.19-4.795 2.813l-.006.002c-.356.12-.74.116-1.094-.01l-.014-.005-.004-.001v-.001c-1.784-.618-3.504-1.487-4.786-2.8C.895 14.102.104 12.473.01 10.385L0 9.96V4.15a1.66 1.66 0 0 1 1.66-1.66l.267-.01c1.359-.1 3.097-.934 4.366-2.042L6.3.432l.126-.099a1.8 1.8 0 0 1 2.088 0l.126.099.007.006.26.22c1.334 1.074 3.068 1.832 4.373 1.832a1.66 1.66 0 0 1 1.66 1.66z" />
    <path fill="#4570af" d="M9.436 6.827a.83.83 0 0 1 1.168 1.167l-.057.063-3.32 3.32a.83.83 0 0 1-1.11.057l-.064-.057-1.66-1.66-.057-.063a.83.83 0 0 1 1.168-1.167l.063.056L6.64 9.617l2.733-2.734z" />
  </svg>
)

const CapacityIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#4570af" d="M11.62 15.81v-1.66a2.49 2.49 0 0 0-2.244-2.478l-.246-.012H4.15a2.49 2.49 0 0 0-2.49 2.49v1.66a.83.83 0 0 1-1.66 0v-1.66A4.15 4.15 0 0 1 4.15 10h4.98l.206.005a4.15 4.15 0 0 1 3.944 4.145v1.66a.83.83 0 1 1-1.66 0M14.132 4.15a2.49 2.49 0 0 0-1.668-2.35l-.197-.06-.081-.026A.83.83 0 0 1 12.6.116l.083.017.166.046a4.15 4.15 0 0 1-.166 7.988.83.83 0 0 1-.416-1.606 2.49 2.49 0 0 0 1.865-2.411M16.635 15.81v-1.659l-.009-.206a2.49 2.49 0 0 0-1.661-2.144l-.197-.06-.082-.025a.83.83 0 0 1 .413-1.599l.084.018.165.046a4.15 4.15 0 0 1 2.947 3.969v1.66a.83.83 0 0 1-1.66 0M9.13 4.15a2.49 2.49 0 1 0-4.98 0 2.49 2.49 0 0 0 4.98 0m1.66 0a4.15 4.15 0 1 1-8.3 0 4.15 4.15 0 0 1 8.3 0" />
  </svg>
)

// Mismo path que InsuranceIcon en main-yellow (#E7C57E), para "Secure booking & flexible cancellation"
const SecureBookingIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fill="#E7C57E" d="M13.28 4.15c-1.925 0-4.174-1.11-5.718-2.457a.14.14 0 0 0-.184.001C5.89 2.99 3.726 4.08 1.842 4.146l-.182.003v5.81l.007.342c.074 1.681.696 2.927 1.642 3.896.902.925 2.13 1.626 3.542 2.173l.616.225.018.006c1.665-.581 3.116-1.345 4.146-2.402 1.01-1.035 1.649-2.384 1.649-4.24zm1.66 5.81c0 2.294-.813 4.058-2.12 5.4-1.284 1.317-3.01 2.19-4.795 2.813l-.006.002c-.356.12-.74.116-1.094-.01l-.014-.005-.004-.001v-.001c-1.784-.618-3.504-1.487-4.786-2.8C.895 14.102.104 12.473.01 10.385L0 9.96V4.15a1.66 1.66 0 0 1 1.66-1.66l.267-.01c1.359-.1 3.097-.934 4.366-2.042L6.3.432l.126-.099a1.8 1.8 0 0 1 2.088 0l.126.099.007.006.26.22c1.334 1.074 3.068 1.832 4.373 1.832a1.66 1.66 0 0 1 1.66 1.66z" />
    <path fill="#E7C57E" d="M9.436 6.827a.83.83 0 0 1 1.168 1.167l-.057.063-3.32 3.32a.83.83 0 0 1-1.11.057l-.064-.057-1.66-1.66-.057-.063a.83.83 0 0 1 1.168-1.167l.063.056L6.64 9.617l2.733-2.734z" />
  </svg>
)

const TECHNICAL_SPEC_CONFIG: TechnicalSpecConfig[] = [
  { key: 'chassis', label: 'Chassis', icon: ChassisIcon },
  { key: 'year', label: 'Year', icon: YearIcon },
  { key: 'connectivity', label: 'Connectivity', icon: ConnectivityIcon },
  { key: 'water', label: 'Water', icon: WaterIcon },
  { key: 'bathing', label: 'Bathing', icon: BathingIcon },
  { key: 'energy', label: 'Energy', icon: EnergyIcon },
  { key: 'insurance', label: 'Insurance', icon: InsuranceIcon },
  { key: 'capacity', label: 'Capacity', icon: CapacityIcon },
]

interface CaravanInfoProps {
  title: string
  description: string
  technicalSpecs: WordPressCamperTechnicalSpecs
  name?: string
  detailsHref?: string
}

export const CaravanInfo = ({ title, description, technicalSpecs, name, detailsHref }: CaravanInfoProps) => (
  <section className="w-full bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex items-start justify-between gap-6">
        {name && <h3 className="font-display italic text-8xl leading-none text-main-navy">{name}</h3>}
        <h2 className={`${name && "max-w-110"} font-display text-5xl font-semibold text-main-black`}>{title}</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
        <div className="flex flex-col gap-6">
          <CaravanSlider images={SLIDER_IMAGES} alt={`${name ?? title} camper van`} className="h-180" />
          <p className="font-body text-base text-light-gray max-w-xl">{description}</p>
        </div>

        <div className="flex flex-col gap-6 bg-gray-50 py-6 px-8 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2">
            <ChassisIcon className="w-6 h-6" />
            <p className="font-display text-2xl font-bold tracking-wide text-main-blue uppercase">Technical Specs</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {TECHNICAL_SPEC_CONFIG.map(({ key, label, icon: Icon }) => (
              <div key={key} className="flex flex-col items-center gap-3 py-6 rounded-2xl bg-graybg/60 text-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="font-ui text-[11px] font-medium tracking-widest text-light-gray uppercase">{label}</p>
                <p className="font-ui text-sm font-semibold text-main-black">{technicalSpecs[key]}</p>
              </div>
            ))}
          </div>

          <Button texto="Book this Camper" color="main-yellow" colorHover="main-navy" href="#" arrow customClass="w-full" />

          {detailsHref && (
            <Button texto="More about this camper" color="main-blue" colorHover="main-navy" href={detailsHref} arrow customClass="w-full" />
          )}

          <div className="flex items-center gap-2">
            <SecureBookingIcon className="w-5 h-5" />
            <p className="font-ui text-xs text-light-gray">Secure booking &amp; flexible cancellation</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
