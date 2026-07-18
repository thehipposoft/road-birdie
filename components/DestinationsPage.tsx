import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

type Region = {
  id: string
  name: string
  description: string
  image: string
}

const REGIONS: Region[] = [
  {
    id: 'byron-bay',
    name: 'Byron Bay',
    description: 'Sun-drenched beaches, lush rainforests, and the legendary Cape Byron lighthouse.',
    image: '/assets/images/destinations/byronbay.webp',
  },
  {
    id: 'great-ocean-road',
    name: 'Great Ocean Road',
    description: 'Iconic coastal drive featuring the world-famous limestone stacks of the Apostles.',
    image: '/assets/images/destinations/great-ocean-road.webp',
  },
  {
    id: 'tasmania',
    name: 'Tasmania',
    description: 'Wild wilderness, rugged peaks, and the cleanest air in the southern hemisphere.',
    image: '/assets/images/destinations/tasmania.png',
  },
  {
    id: 'gold-coast',
    name: 'Gold Coast',
    description: 'Where world-class surf meets high-end luxury and hinterland adventures.',
    image: '/assets/images/destinations/gold-coast.png',
  },
  {
    id: 'uluru',
    name: 'Uluru',
    description: 'The spiritual heart of Australia, breathtaking sunrises, and ancient stories.',
    image: '/assets/images/destinations/uluru.png',
  },
  {
    id: 'whitsundays',
    name: 'Whitsundays',
    description: 'A tropical paradise of 74 islands surrounded by the Great Barrier Reef.',
    image: '/assets/images/destinations/whitsundays.webp',
  },
]

const WavesIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M2 7c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0M2 13c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0M2 19c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0 3.5-1.5 5 0"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const HikingIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 22l2-8-3-2 1-5 4 2 2 3 3 1M9 14l-4 2M15 8l3 2-2 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DestinationsPage = () => (
  <main className="mx-auto max-w-[1200px] px-6 py-32">
    <h1 className="font-display text-5xl font-extrabold text-main-black">Explore the Regions</h1>
    <p className="mt-3 max-w-2xl font-body text-base text-light-gray">
      From the rugged red centre to the pristine tropical north, Australia&apos;s diversity is
      best experienced on four wheels.
    </p>

    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {REGIONS.map((region) => (
        <article key={region.id} className="relative h-115 overflow-hidden rounded-2xl">
          <Image src={region.image} alt={region.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6">
            <h2 className="font-display text-3xl font-medium text-white">{region.name}</h2>
            <p className="font-body text-sm leading-relaxed text-white/80">
              {region.description}
            </p>
            <Link
              href="#"
              className="inline-flex w-fit items-center rounded-full border border-white/70 px-6 py-2.5 font-ui text-sm text-white transition-colors duration-300 hover:bg-white hover:text-main-black"
            >
              Explore
            </Link>
          </div>
        </article>
      ))}
    </div>

    <section className="mt-40 flex justify-between items-center  gap-12 lg:grid-cols-2">
      <div className="flex flex-col gap-6 w-1/2">
        <h2 className="font-display text-4xl font-extrabold text-main-black">
          One of our favorites
        </h2>
        <p className="font-display text-xl font-semibold text-main-black/70">
          A winding ribbon of asphalt carved into the edge of the continent.
        </p>
        <p className="font-body text-base leading-relaxed text-light-gray">
          The Great Ocean Road is more than just a drive; it is a pilgrimage for the soul.
          Starting in Torquay and stretching to Allansford, the route takes you through
          rainforests, coastal hamlets, and alongside the legendary Twelve Apostles. Whether
          you&apos;re chasing the perfect swell at Bells Beach or watching the mist roll over the
          Otway ranges, every turn reveals a new masterpiece of nature.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-graybg px-4 py-2 font-ui text-xs text-main-black">
            <WavesIcon />
            Ideal for Surfing
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-graybg px-4 py-2 font-ui text-xs text-main-black">
            <HikingIcon />
            Hiking Trails
          </span>
        </div>

        <Button
          texto="Explore a Camper for this road"
          color="main-blue"
          colorHover="main-navy"
          href="#"
          arrow
        />
      </div>

      <div className="relative h-150 w-115 overflow-hidden rounded-2xl">
        <Image
          src="/assets/images/destinations/twelve-apostols.webp"
          alt="Twelve Apostles"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <p className="absolute bottom-6 left-6 font-display text-2xl font-medium text-white">
          Twelve Apostles
        </p>
      </div>
    </section>
  </main>
)
