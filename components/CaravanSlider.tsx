'use client'

import Image from 'next/image'
import { useState, type CSSProperties } from 'react'

interface CaravanSliderProps {
  images: string[]
  alt: string
  className?: string
}

const ChevronIcon = ({ className = '', direction = 'left' }: { className?: string; direction?: 'left' | 'right' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d={direction === 'left' ? 'M15 6L9 12L15 18' : 'M9 6L15 12L9 18'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const CaravanSlider = ({ images, alt, className = '' }: CaravanSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isFirstSlide = activeIndex === 0
  const isLastSlide = activeIndex === images.length - 1

  const goToPrevious = () => setActiveIndex((index) => Math.max(index - 1, 0))
  const goToNext = () => setActiveIndex((index) => Math.min(index + 1, images.length - 1))

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out translate-x-[calc(var(--slide)*-100%)]"
        style={{ '--slide': activeIndex } as CSSProperties}
      >
        {images.map((src, index) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <Image src={src} fill alt={`${alt} ${index + 1}`} className="object-cover" />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-8 gap-4">
        {isFirstSlide ? (
          <div />
        ) : (
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-main-black transition-colors hover:bg-white"
          >
            <ChevronIcon direction="left" className="w-5 h-5" />
          </button>
        )}

        {isLastSlide ? (
          <div />
        ) : (
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-main-black transition-colors hover:bg-white"
          >
            <ChevronIcon direction="right" className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
