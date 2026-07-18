'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const HEADER_OFFSET = -100

// Al navegar a otra ruta con un hash (ej. /#faqs) hace el scroll suave
// una vez que Lenis y la sección destino ya están montados
const HashScroll = () => {
  const lenis = useLenis()
  const pathname = usePathname()

  useEffect(() => {
    if (!lenis || !window.location.hash) return

    lenis.scrollTo(window.location.hash, { offset: HEADER_OFFSET })
  }, [lenis, pathname])

  return null
}

export const SmoothScroll = () => (
  <>
    <ReactLenis root />
    <HashScroll />
  </>
)
