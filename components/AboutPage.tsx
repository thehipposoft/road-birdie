import Image from 'next/image'

const MANIFESTO_LINES = [
  'Not just building vans',
  'but innovating how the journey',
  'is lived.',
  'Offering experiences to explore,',
  'preserve, and enjoy Australia',
  'your way.',
]

export const AboutPage = () => (
  <main>
    <div className=" bg-[#6588BA] mx-auto flex flex-col gap-12 mt-32">
      <div className="bg-[#6588BA] lg:w-300 mx-auto rounded-tr-4xl overflow-hidden flex min-h-[480px] pt-12">
        <div className="relative w-1/2 h-120 ">
          <Image
            src="/assets/images/about.webp"
            alt="Pareja disfrutando su campervan Road Birdie"
            fill
            className="object-cover rounded-tr-[150px]"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-16 py-14 gap-6">
          <h1 className="font-display text-7xl font-semibold text-main-yellow">About</h1>
          <p className="text-2xl font-display text-[#FFBC00]">
            We&apos;re a community driven- Australian company that designs and turns vans into
            mobile homes — managing them to offer travellers from around the world a road trip
            beyond the usual routes, unlocking the freedom to explore Australia.
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="h-1 bg-main-yellow lg:w-300 mx-auto" />

      {/* Section 2: texto izquierda, imagen derecha */}
      <div className="bg-[#6588BA] lg:w-300 mx-auto flex min-h-[480px]">
        <div className="w-1/2 flex flex-col items-center px-16 py-14 gap-20">
          <p className="font-ui text-white/40 tracking-[0.4em] text-sm">• • •</p>
          <p className="font-display text-2xl font-semibold text-[#FFBC00] uppercase text-center leading-5">
            {MANIFESTO_LINES.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </p>
        </div>
        <div className="relative w-1/2 rounded-tr-[150px] overflow-hidden">
          <Image
            src="/assets/images/features.webp"
            alt="Van estacionada junto al océano en Australia"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  </main>
)
