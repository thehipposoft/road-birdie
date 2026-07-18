import Image from 'next/image'
import { Button } from '@/components/Button'

export const Hero = () => (
  <section className="flex-1 flex items-center rounded-4xl min-h-screen relative">
    <Image src={"/assets/images/hero.webp"} fill alt='Road background' className='rounded-4xl relative -z-10' />
    <div className='absolute w-full h-full bg-[#EDEDED]/30'/>
    <div className="max-w-[1035px] mx-auto w-full px-6 relative z-10">
      <h1 className="font-display font-extrabold text-[130px] leading-none text-white uppercase">
        ON THE <span className="text-main-yellow">MOVE</span>
        <br />
        IN AUSTRALIA
      </h1>

      <div className="mt-10 flex items-center justify-center gap-4">
        <Button texto="Explore Campers" color="main-yellow" colorHover="main-navy" href="/campers" />
        <Button texto="Recommended Destinations" color="noborder-white" colorHover="main-navy" href="/destinations" />
      </div>
    </div>
  </section>
)
