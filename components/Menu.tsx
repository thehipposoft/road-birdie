'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'
import type { MouseEvent } from 'react'
import { Button } from './Button'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Campers', href: '/#campers' },
  { label: 'FAQs', href: '/#faqs' },
] as const

const HEADER_OFFSET = -100

export const Menu = () => {
  const lenis = useLenis()
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = href.split('#')
    if (!hash) return

    event.preventDefault()

    if (pathname === (path || '/')) {
      lenis?.scrollTo(`#${hash}`, { offset: HEADER_OFFSET })
      return
    }

    router.push(href)
  }

  return (
    <header className="w-full bg-transparent rounded-b-3xl fixed z-50">
      <div className="max-w-[1035px] mx-auto gap-6 flex items-center justify-between px-6 py-4">
        <div className='flex justify-between lg:min-h-14 bg-[#ECECEC] rounded-tr-full rounded-tl-2xl w-full pr-10 pl-8'>
          <Link href={"/"} className='flex items-center'>
            <Image src={"/assets/images/logo/logo.svg"} alt='Logo roadbirdie' width={110} height={40} />
          </Link>
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                scroll={false}
                onClick={handleNavClick(href)}
                className="font-ui text-sm text-main-black font-medium transition-colors hover:text-main-blue"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <Button
          texto='Contact Us'
          href="/contact"
          color="main-blue"
          colorHover='main-navy'
          customClass='w-36'
        >
        </Button>
      </div>
    </header>
  )
}
