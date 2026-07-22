import Image from 'next/image'
import { CaravanInfo } from '@/components/CaravanInfo'
import { IconPlaceholder, ImagePlaceholder } from '@/components/Placeholder'
import type { WordPressCamperTechnicalSpecs, WordPressDestinationCharacteristics } from '@/lib/wordpress/types'

interface CharacteristicConfig {
  key: keyof WordPressDestinationCharacteristics
  label: string
}

const CHARACTERISTIC_CONFIG: CharacteristicConfig[] = [
  { key: 'distance', label: 'Distance' },
  { key: 'duration', label: 'Duration' },
  { key: 'best_season', label: 'Best Season' },
  { key: 'perfect_van', label: 'The Perfect Van' },
  { key: 'starting_from', label: 'Starting From' },
]

// TODO(wordpress): esta data va a venir del backend, por ahora es mock del print
const RECOMMENDED_CAMPER_OVERVIEW = {
  title: 'The perfect match for this adventure.',
  description:
    "Sleep under the stars, cook your own meals, shower in the wild: this baby's got everything you need to live the road life your way...",
}

interface RecommendedCamper {
  name: string
  slug: string
  technicalSpecs: WordPressCamperTechnicalSpecs
}

interface DestinationsSingleProps {
  title: string
  subtitle: string
  banner: string | null
  characteristics: WordPressDestinationCharacteristics
  recommendedCamper: RecommendedCamper | null
}

export const DestinationsSingle = ({
  title,
  subtitle,
  banner,
  characteristics,
  recommendedCamper,
}: DestinationsSingleProps) => (
  <>
    <section className="relative mb-24">
      <div className="relative flex items-center justify-center min-h-screen rounded-4xl overflow-hidden">
        {banner ? (
          <Image src={banner} fill alt={title} className="object-cover -z-10" />
        ) : (
          <ImagePlaceholder className="absolute inset-0 -z-10" />
        )}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
          <h1 className="font-display text-8xl font-extrabold uppercase leading-none text-white">{title}</h1>
          <p className="font-ui text-sm font-medium tracking-[0.3em] uppercase text-white/80">{subtitle}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-1/2 px-6">
        <div className="flex divide-x divide-main-black/10 rounded-2xl bg-white shadow-xl">
          {CHARACTERISTIC_CONFIG.map(({ key, label }) => (
            <div key={key} className="flex flex-col items-center gap-2 px-10 py-6 text-center">
              <IconPlaceholder className="w-6 h-6" />
              <p className="font-ui text-[10px] font-medium tracking-widest text-light-gray uppercase">{label}</p>
              <p className="font-ui text-base font-semibold text-main-black">{characteristics[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {recommendedCamper && (
      <CaravanInfo
        name={`${recommendedCamper.name}.`}
        title={RECOMMENDED_CAMPER_OVERVIEW.title}
        description={RECOMMENDED_CAMPER_OVERVIEW.description}
        technicalSpecs={recommendedCamper.technicalSpecs}
        detailsHref={`/campers/${recommendedCamper.slug}`}
      />
    )}
  </>
)
