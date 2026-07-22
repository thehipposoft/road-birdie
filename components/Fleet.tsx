'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { GridCard } from '@/components/GridCard'

gsap.registerPlugin(ScrollTrigger)

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

interface FleetProps {
  titulo: string
  descripcion: string
}

const CARD_CLASS = 'fleet-card'
const CARD_STAGGER = 0.15
const CARD_DURATION = 0.6
const CARD_SCROLL_START = 'top 85%'

export const Fleet = ({ titulo, descripcion }: FleetProps) => {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to(`.${CARD_CLASS}`, {
        opacity: 1,
        y: 0,
        duration: CARD_DURATION,
        stagger: CARD_STAGGER,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: CARD_SCROLL_START,
        },
      })
    },
    { scope: gridRef }
  )

  return (
    <section className="py-20" id='campers'>
      <div className="lg:max-w-300 mx-auto px-6">
        <h2 className="font-display text-5xl text-main-black font-extrabold">{titulo}</h2>
        <p className="mt-3 font-body text-base text-light-gray">{descripcion}</p>

        <div
          ref={gridRef}
          className="mt-12 flex overflow-x-auto snap-x snap-mandatory gap-6 -mx-6 px-6 pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:snap-none lg:mx-0 lg:px-0 lg:pb-0"
        >
          {CAMPERS.map((camper) => (
            <div
              key={camper.id}
              className={`${CARD_CLASS} flex shrink-0 w-[85%] snap-center opacity-0 translate-y-6 lg:w-auto lg:shrink`}
            >
              <GridCard
                name={camper.name}
                description={camper.description}
                features={camper.features}
                image={camper.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
