import { GridCard } from '@/components/GridCard'

type CamperData = {
  id: string
  name: string
  description: string
  features: string[]
  image: string
  featured?: boolean
}

const CAMPERS: CamperData[] = [
  {
    id: 'eagle',
    name: 'Eagle',
    description:
      'The perfect companion for couples seeking a compact yet luxurious escape. Minimalist design meets maximum comfort.',
    features: ['Queen Bed', 'Kitchenette', 'Solar Power', 'AC/Heating'],
    image: '/assets/images/vans/eagle.webp',
  },
  {
    id: 'condor',
    name: 'Condor',
    description:
      'Spacious enough for a family of four, featuring smart storage solutions and a professional-grade kitchen setup.',
    features: ['Sleeps 4', 'Hot Shower', 'Stovetop', 'Extended Range'],
    image: '/assets/images/vans/condor.webp',
  },
  {
    id: 'pelican',
    name: 'Pelican',
    description:
      'Tough on the outside, soft on the inside. Built for those who want to venture off the beaten track with confidence.',
    features: ['4x4 Capabilities', 'Heavy Duty Tires', 'Wi-Fi Hub', 'Outdoor Grill'],
    image: '/assets/images/vans/pelican.webp',
    featured: true,
  },
]

export const Fleet = () => (
  <section className=" py-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-display text-5xl text-main-black font-extrabold">The Road Birdie Fleet</h2>
      <p className="mt-3 font-body text-base text-light-gray">
        Curated, fully-equipped vans designed to be your home away from home.
      </p>

      <div className="mt-12 grid grid-cols-3 gap-6">
        {CAMPERS.map((camper) => (
          <GridCard
            key={camper.id}
            name={camper.name}
            description={camper.description}
            features={camper.features}
            image={camper.image}
          />
        ))}
      </div>
    </div>
  </section>
)
