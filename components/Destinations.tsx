import Image from 'next/image'
import Link from 'next/link'

type Destination = {
  id: string
  name: string
  image: string
  span: string
}

const DESTINATIONS: Destination[] = [
  { id: 'whitsundays',  name: 'Whitsundays',             image: '/assets/images/destinations/whitsundays-1.webp', span: 'col-span-2' },
  { id: 'lake-argyle',  name: 'Lake Argyle Holiday Park', image: '/assets/images/destinations/lake-1.png',         span: 'col-span-1' },
  { id: 'jervis-bay',   name: 'Jervis Bay',               image: '/assets/images/destinations/jervis-bay-1.png',   span: 'col-span-1' },
  { id: 'broome',       name: 'Broome',                   image: '/assets/images/destinations/broome-1.webp',      span: 'col-span-2' },
]

export const Destinations = () => (
  <section className="w-full bg-white py-20">
    <div className="max-w-[1200px] mx-auto px-6">

      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 items-start justify-between">
        <div>
          <h2 className="font-display text-5xl font-extrabold text-main-black">Infinite Horizons</h2>
          <p className="mt-2 font-body text-base text-light-gray max-w-sm">
            Where will your Road Birdie take you? Explore the diverse landscapes of the continent.
          </p>
        </div>
        <Link
          href="/destinations"
          className="shrink-0 px-6 py-3 font-ui text-sm text-main-black border border-main-black/20 rounded-full transition-opacity hover:opacity-60"
        >
          Explore All Destinations
        </Link>
      </div>

      <div className="lg:mt-12 mt-6 grid lg:grid-cols-3 grid-rows-3 gap-4">
        {DESTINATIONS.map(({ id, name, image, span }) => (
          <Link
            href={`/destinations/whitsundays`}
            key={id}
            className={`${span} relative h-88 rounded-2xl overflow-hidden group`}
          >
            <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent hover:opacity-0 duration-500" />
            <div className="absolute bottom-6 left-6">
              <p className="font-ui text-xs font-medium uppercase tracking-widest text-white/60">
                Destination
              </p>
              <p className="font-display text-2xl font-medium text-white">{name}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  </section>
)
