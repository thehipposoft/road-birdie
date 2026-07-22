import Image from 'next/image'
import { CaravanInfo } from '@/components/CaravanInfo'
import { ImageGallery } from '@/components/ImageGallery'
import type { WordPressCamperInformation, WordPressCamperTechnicalSpecs } from '@/lib/wordpress/types'

const DECORATIVE_STARS = 3

interface SingleCaravanProps {
  name: string
  image: string
  technicalSpecs: WordPressCamperTechnicalSpecs
  information: WordPressCamperInformation
  galleryImages: string[]
}

interface CaravanFeatureConfig {
  key: keyof WordPressCamperInformation
  title: string
  icon: string
}

// TODO(wordpress): esta data va a venir del backend, por ahora es mock del print
const OVERVIEW = {
  title: 'Compact, clever, full of soul.',
  description:
    "Sleep under the stars, cook your own meals, shower in the wild: this baby's got everything you need to live the road life your way...",
}

const FEATURES_OVERVIEW = {
  title: 'Everything You Need for the Uncharted',
  description:
    "We believe adventure shouldn't come at the cost of comfort. The Explorer is equipped with high-end amenities that allow you to go off-grid without compromise.",
}

const FEATURE_CONFIG: CaravanFeatureConfig[] = [
  { key: 'kitchen', title: 'Equipped Kitchen', icon: '/assets/images/svg/kitchen.svg' },
  { key: 'battery', title: 'Off-Grid Ready', icon: '/assets/images/svg/battery.svg' },
  { key: 'pick_up', title: 'Pick up From', icon: '/assets/images/svg/pickup.svg' },
  { key: 'sleep', title: 'Comfortable Sleep', icon: '/assets/images/svg/sleep.svg' },
  { key: 'comfort', title: 'Premium Comfort', icon: '/assets/images/svg/comfort.svg' },
  { key: 'kilometers', title: 'Unlimited Freedom', icon: '/assets/images/svg/kilometers.svg' },
]

export const SingleCaravan = ({ name, image, technicalSpecs, information, galleryImages }: SingleCaravanProps) => (
  <>
    <section className="flex-1 flex items-end rounded-4xl min-h-screen relative overflow-hidden">
      <Image src={image} fill alt={`${name} camper van`} className="object-cover relative -z-10" />
      <div className="absolute w-full h-full bg-gradient-to-t from-white/50 via-white/10 to-transparent" />

      <div className="relative z-10 w-full px-12 pb-16">
        <p className="font-ui text-main-navy tracking-[0.4em] text-base">
          {Array.from({ length: DECORATIVE_STARS }).fill('*').join(' ')}
        </p>
        <h1 className="mt-2 font-display italic font-thin tracking-tighter text-8xl text-main-navy">{name}.</h1>
        <div className="mt-4 flex flex-col gap-1 w-40">
          <div className="h-[2px] w-full bg-main-navy" />
          <div className="h-[2px] w-full bg-main-navy" />
        </div>
      </div>
    </section>

    <CaravanInfo title={OVERVIEW.title} description={OVERVIEW.description} technicalSpecs={technicalSpecs} />

    <section className="w-full bg-white pb-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="font-display text-4xl font-extrabold text-main-black">{FEATURES_OVERVIEW.title}</h2>
          <p className="mt-3 font-body text-base text-light-gray">{FEATURES_OVERVIEW.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
          {FEATURE_CONFIG.map(({ key, title, icon }) => (
            <div key={key} className="flex flex-col gap-3">
              <Image src={icon} alt={title} width={32} height={32} />
              <p className="font-ui text-sm font-semibold text-main-black">{title}</p>
              <p className="font-body text-sm leading-relaxed text-light-gray">{information[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ImageGallery images={galleryImages} />
  </>
)
