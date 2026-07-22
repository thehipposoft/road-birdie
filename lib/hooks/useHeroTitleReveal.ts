'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { RefObject } from 'react'

const CHAR_STAGGER = 0.06
const CHAR_DURATION = 0.3
const BUTTONS_DURATION = 0.6

// El estado inicial (opacity-0, translate-y) se define en las clases de Tailwind
// de los spans/botones, no acá, para evitar un flash del contenido antes de hidratar.
export const useHeroTitleReveal = (
  containerRef: RefObject<HTMLElement | null>,
  charSelector: string,
  buttonsSelector: string
) => {
  useGSAP(
    () => {
      const tl = gsap.timeline()

      tl.to(charSelector, {
        opacity: 1,
        y: 0,
        duration: CHAR_DURATION,
        stagger: CHAR_STAGGER,
        ease: 'power2.out',
      }).to(buttonsSelector, {
        opacity: 1,
        y: 0,
        duration: BUTTONS_DURATION,
        ease: 'power2.out',
      })
    },
    { scope: containerRef }
  )
}
