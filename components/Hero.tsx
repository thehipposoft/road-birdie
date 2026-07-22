'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { useHeroTitleReveal } from '@/lib/hooks/useHeroTitleReveal'

interface TitleSegment {
  text: string
  highlight?: boolean
}

const HERO_TITLE_LINES: TitleSegment[][] = [
  [{ text: 'ON THE ' }, { text: 'MOVE', highlight: true }],
  [{ text: 'IN AUSTRALIA' }],
]

const CHAR_CLASS = 'hero-title-char'
const BUTTONS_CLASS = 'hero-buttons'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  useHeroTitleReveal(heroRef, `.${CHAR_CLASS}`, `.${BUTTONS_CLASS}`)

  return (
    <section className="flex-1 flex items-center rounded-4xl min-h-screen relative">
      <Image src={"/assets/images/hero.webp"} fill alt='Road background' className='rounded-4xl relative -z-10' />
      <div className='absolute w-full h-full bg-black/15'/>
      <div ref={heroRef} className="max-w-[1035px] mx-auto w-full px-6 relative z-10">
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[130px] leading-none text-white uppercase">
          {HERO_TITLE_LINES.map((segments, lineIndex) => (
            <span key={lineIndex} className="block">
              {segments.map((segment, segmentIndex) =>
                segment.text.split('').map((char, charIndex) => (
                  <span
                    key={`${lineIndex}-${segmentIndex}-${charIndex}`}
                    className={`${CHAR_CLASS} inline-block translate-y-3 opacity-0 ${segment.highlight ? 'text-main-yellow' : ''}`}
                  >
                    {char === ' ' ? ' ' : char}
                  </span>
                ))
              )}
            </span>
          ))}
        </h1>

        <div
          className={`${BUTTONS_CLASS} mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full translate-y-3 opacity-0`}
        >
          <Button
            texto="Explore Campers"
            color="main-yellow"
            colorHover="main-navy"
            href="/campers"
            customClass="w-full sm:w-auto"
          />
          <Button
            texto="Recommended Destinations"
            color="noborder-white"
            colorHover="main-navy"
            href="/destinations"
            customClass="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
