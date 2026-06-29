import Image from 'next/image'
import { Button } from '@/components/Button'

interface GridCardProps {
  name: string
  description: string
  features: string[]
  image: string
}

export const GridCard = ({ name, description, features, image }: GridCardProps) => (
  <article className="flex flex-col bg-white rounded-b-2xl">
    <div className="relative h-60 overflow-hidden rounded-tr-4xl">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>

    <div className="flex flex-col flex-1 p-6">
      <h3 className="font-display font-bold text-3xl text-main-black">{name}</h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-main-black/60">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="px-3 py-1 font-ui text-xs text-main-black/70 border border-main-black/15 rounded-full"
          >
            {feature}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          texto="View Details"
          color={'white'}
          colorHover={'main-blue'}
          href="#"
          arrow
        />
      </div>
    </div>
  </article>
)
