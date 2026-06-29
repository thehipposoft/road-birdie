import Image from 'next/image'

const RATING_STARS = 4

export const Testimonials = () => (
  <section className=" w-full bg-main-navy lg:min-h-[90vh] h-full flex relative items-end">
        <div className="w-[60%] lg:pl-20 absolute z-30 left-0 flex flex-col justify-center gap-10 py-20 bg-main-navy lg:min-h-[90vh] custom-shape">
          <div className='w-md'>
            <p className="font-display italic text-2xl leading-relaxed text-white text-center">
              &ldquo;Our three weeks in Victoria was the most peaceful experience we&apos;ve ever
              had. Road Birdie thought of every detail—from the high-quality coffee beans to the
              secret campsite map. We&apos;ll never travel any other way.&rdquo;
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="font-ui text-main-yellow tracking-[0.4em] text-base">
                {Array.from({ length: RATING_STARS }).fill('*').join(' ')}
              </p>
              <p className="font-ui font-bold text-sm tracking-widest text-white uppercase">
                Sarah &amp; James Mitchell
              </p>
              <p className="font-body text-sm text-white/50">Melbourne, Australia</p>
            </div>
          </div>
        </div>
        <div className="absolute w-2/3 right-0 lg:h-[90vh] rounded-tr-3xl z-20">
          <Image
            src="/assets/images/testimonials.webp"
            alt="Sarah and James Mitchell in their Road Birdie campervan"
            fill
            className="object-cover"
          />
        </div>
        <div className="lg:w-[1200px] z-40 mx-auto flex flex-col gap-1 pb-8">
          <div className="h-1 w-full bg-graybg" />
          <div className="h-1 w-full bg-graybg" />
          <div className="h-1 w-full bg-graybg" />
        </div> 
  </section>
)
      