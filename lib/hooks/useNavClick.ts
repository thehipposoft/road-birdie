'use client'

import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'

const HEADER_OFFSET = -100

// Links con hash (ej. /#faqs) hacen scroll suave con Lenis si ya estamos
// en esa ruta, o navegan normalmente si estamos en otra página.
export const useNavClick = () => {
  const lenis = useLenis()
  const pathname = usePathname()
  const router = useRouter()

  return (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = href.split('#')
    if (!hash) return

    event.preventDefault()

    if (pathname === (path || '/')) {
      lenis?.scrollTo(`#${hash}`, { offset: HEADER_OFFSET })
      return
    }

    router.push(href)
  }
}
