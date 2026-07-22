'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type MouseEvent } from 'react'
import { useNavClick } from '@/lib/hooks/useNavClick'
import { NAV_LINKS } from '@/lib/navLinks'
import { Button } from './Button'

const MOBILE_NAV_LINKS = [{ label: 'Home', href: '/' }, ...NAV_LINKS]

const HamburgerIcon = ({ open, className = '' }: { open: boolean; className?: string }) => (
  <div className={`relative w-6 h-4 ${className}`}>
    <span
      className={[
        'absolute inset-x-0 top-0 h-0.5 bg-main-black transition-transform duration-300 ease-out',
        open ? 'translate-y-[7px] rotate-45' : '',
      ].join(' ')}
    />
    <span
      className={[
        'absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-main-black transition-opacity duration-200 ease-out',
        open ? 'opacity-0' : 'opacity-100',
      ].join(' ')}
    />
    <span
      className={[
        'absolute inset-x-0 bottom-0 h-0.5 bg-main-black transition-transform duration-300 ease-out',
        open ? '-translate-y-[7px] -rotate-45' : '',
      ].join(' ')}
    />
  </div>
)

export const MenuMobile = () => {
  const [open, setOpen] = useState(false)
  const handleNavClick = useNavClick()

  const handleLinkClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)
    handleNavClick(href)(event)
  }

  return (
    <header className="lg:hidden">
      <div className="w-full bg-white fixed z-50 flex items-center justify-between px-6 py-4">
        <Link href={"/"} className="flex items-center" onClick={() => setOpen(false)}>
          <Image src={"/assets/images/logo/logo.svg"} alt="Logo roadbirdie" width={90} height={33} />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex items-center justify-center w-10 h-10 cursor-pointer"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={[
          'fixed inset-0 z-40 w-full h-full bg-white',
          'flex flex-col items-center justify-center gap-8',
          'transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <nav className="flex flex-col items-center gap-8">
          {MOBILE_NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              scroll={false}
              onClick={handleLinkClick(href)}
              className="font-ui text-2xl text-main-black font-medium"
            >
              {label}
            </Link>
          ))}

          <Button
            texto="Contact Us"
            href="/contact"
            color="main-blue"
            colorHover="main-navy"
            customClass="w-full"
          />
          
        </nav>
        <div className="mt-16 flex flex-col gap-1">
          <div className="h-1 w-85 bg-main-blue" />
          <div className="h-1 w-85 bg-main-yellow" />
          <div className="h-1 w-85 bg-main-blue" />
        </div>
      </div>
    </header>
  )
}
