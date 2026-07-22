import { IconPlaceholder } from '@/components/Placeholder'

const DECORATIVE_STARS = 3

interface TravelTip {
  title: string
  description: string
}

const TRAVEL_TIPS: TravelTip[] = [
  {
    title: 'Best Travel Seasons',
    description: 'Aim for Spring (Sept-Nov) or Autumn (March-May) for the perfect balance of mild weather and fewer crowds.',
  },
  {
    title: 'Camping Essentials',
    description: 'Pack high-quality linens, a versatile multi-tool, and always carry extra fresh water for off-grid stays.',
  },
  {
    title: 'Driving Distances',
    description: 'Australia is vast. Plan for 3-4 hours of driving per day to truly soak in the landscapes without fatigue.',
  },
  {
    title: 'Weather Tips',
    description: 'Coastal weather shifts quickly. Check the BOM app daily and always have a windbreaker ready for cliffside views.',
  },
]

export const TravelTips = () => (
  <section className="w-full bg-main-blue py-24">
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
      <h2 className="font-display text-8xl font-semibold uppercase leading-tight tracking-tighter text-main-yellow">
        Pro<br />Travel Tips
      </h2>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {TRAVEL_TIPS.map(({ title, description }) => (
          <div key={title} className="flex flex-col items-center gap-4 py-10 px-6 rounded-2xl bg-white text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-graybg">
              <IconPlaceholder className="w-5 h-5" />
            </div>
            <p className="font-display text-lg font-bold text-main-black">{title}</p>
            <p className="font-body text-sm leading-relaxed text-light-gray">{description}</p>
          </div>
        ))}
      </div>

      <p className="mt-16 font-ui text-xl tracking-[0.1em] text-main-yellow">
        {Array.from({ length: DECORATIVE_STARS }).fill('*').join(' ')}
      </p>
    </div>
  </section>
)
