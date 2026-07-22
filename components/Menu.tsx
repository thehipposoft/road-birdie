'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { MenuMobile } from '@/components/MenuMobile'
import { useNavClick } from '@/lib/hooks/useNavClick'
import { NAV_LINKS } from '@/lib/navLinks'
import { Button } from './Button'

const MENU_ANIMATION_DELAY = 1.5
const MENU_ANIMATION_DURATION = 0.8

export const Menu = () => {
  const headerRef = useRef<HTMLElement>(null)
  const handleNavClick = useNavClick()

  useGSAP(
    () => {
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: MENU_ANIMATION_DURATION,
        delay: MENU_ANIMATION_DELAY,
        ease: 'power2.out',
      })
    },
    { scope: headerRef }
  )

  return (
    <>
      <header
        ref={headerRef}
        className="hidden lg:block w-full bg-transparent rounded-b-3xl fixed z-50 opacity-0 -translate-y-6"
      >
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

      <MenuMobile />
    </>
  )
}
