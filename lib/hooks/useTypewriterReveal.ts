'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { RefObject } from 'react'

const REVEAL_AMOUNT = 3.5
const CHAR_DURATION = 0.3

// El estado inicial (opacity-0, translate-y) se define en las clases de Tailwind
// del span, no acá, para evitar un flash del texto completo antes de hidratar.
export const useTypewriterReveal = (containerRef: RefObject<HTMLElement | null>, charSelector: string) => {
  useGSAP(
    () => {
      gsap.to(charSelector, {
        opacity: 1,
        y: 0,
        duration: CHAR_DURATION,
        stagger: { amount: REVEAL_AMOUNT },
        ease: 'power1.out',
      })
    },
    { scope: containerRef }
  )
}
