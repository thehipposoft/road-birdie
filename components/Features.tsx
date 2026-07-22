import type { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'

type FeatureItem = {
  id: string
  title: string
  description: ReactNode
  icon: string
}

const FEATURES: FeatureItem[] = [
  {
    id: 'support',
    title: 'Personalized Support',
    description: (
      <>
        You&apos;re never on your own. We offer{' '}
        <strong>fast</strong>, <strong>personalised customer support</strong>, 24/7.{' '}
        Because things don&apos;t always happen on schedule.
      </>
    ),
    icon: '/assets/images/svg/support.svg',
  },
  {
    id: 'equipped',
    title: 'Fully Equipped',
    description:
      "From spices to surfboard racks, we've thought of everything you need for the road.",
    icon: '/assets/images/svg/equiped.svg',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'Our fleet uses solar energy and we offset every kilometer driven on your trip.',
    icon: '/assets/images/svg/sustainability.svg',
  },
  {
    id: 'insurance',
    title: 'Insurance included',
    description: (
      <>
        The total price you see already includes both the rental and the insurance,{' '}
        <strong>No hidden costs</strong>.
      </>
    ),
    icon: '/assets/images/svg/insurance.svg',
  },
]

export const Features = () => (
  <section className="w-full bg-white py-20">
    <div className="lg:max-w-[1200px] mx-auto px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-12">

        {/* Left: image card */}
        <div className="relative rounded-t-3xl overflow-hidden lg:min-h-162.5 min-h-130">
          <Image src={"/assets/images/features.webp"} alt='' fill className='object-cover' />
          <div className="absolute inset-x-8 top-8">
            <h2 className="font-display font-bold text-5xl leading-tight text-main-black">
              Why Adventurers<br />Choose Us
            </h2>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex bg-main-yellow">
            <div className="flex items-center justify-center bg-graybg rounded-r-2xl">
              <Image src={"/assets/images/logo/logo-footer.png"} alt='' width={120} height={60} />
            </div>
            <div className="flex flex-1 items-center lg:gap-20 bg-main-yellow lg:pl-20 py-5">
              <div>
                <p className="font-display font-bold text-3xl text-main-black">98%</p>
                <p className="font-ui text-xs font-semibold tracking-widest text-main-black uppercase">
                  Customer<br/> Satisfaction
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-main-black">24/7</p>
                <p className="font-ui text-xs font-semibold tracking-widest text-main-black uppercase">
                  Roadside<br/> Assistance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: features grid + CTA */}
        <div className="flex flex-col gap-20 py-4">
          <div className="grid grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl bg-main-blue/10">
                  <Image src={feature.icon} alt="" fill className="object-contain p-3" />
                </div>
                <div>
                  <h3 className="font-display text-center text-2xl text-main-navy font-extrabold">{feature.title}</h3>
                  <p className="mt-2 font-body text-center text-sm leading-relaxed text-main-navy">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

         <div className='text-center'>
          <Button href='/campers' texto='Explore Campers' color='main-blue' colorHover='main-yellow' />
         </div>
        </div>

      </div>
    </div>
  </section>
)
