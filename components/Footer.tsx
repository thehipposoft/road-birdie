import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About Road Birdie',        href: '/about'        },
  { label: 'The Road Birdie Fleet',    href: '/campers'      },
  { label: 'FaQs',                     href: '/faqs'         },
  { label: 'Recommended Destinations', href: '/destinations' },
  { label: 'Contact',                  href: '/contact'      },
] as const

export const Footer = () => (
  <footer className="w-full bg-graybg rounded-t-3xl mt-auto">
    <div className="max-w-[1200px] mx-auto px-10 pt-16 flex flex-col justify-between">
      <div className="grid grid-cols-3 gap-16">

        {/* Logo */}
        <Image src={"/assets/images/logo/logo-footer2.png"} alt='Logo' width={250} height={100} />

        {/* Nav links */}
        <nav className="flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-ui text-base text-main-black/70 transition-colors hover:text-main-black"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-main-blue" />
            <div className="w-10 h-10 rounded-full border-2 border-main-blue" />
          </div>
          <p className="font-body text-base text-main-black/70">+61 482 380 149</p>
          <p className="font-body text-base text-main-black/70">juliangago@gmail.com</p>
          <p className="font-body text-base text-main-black/70">Melbourne, Australia</p>
        </div>

      </div>
          {/* Líneas decorativas */}
      <div className="mt-16 flex flex-col gap-1">
        <div className="h-1 w-full bg-main-blue" />
        <div className="h-1 w-full bg-main-yellow" />
        <div className="h-1 w-full bg-main-blue" />
      </div>

      {/* Copyright */}
      <p className="pt-6 pb-4 text-sm text-center text-main-black/40">
        Created by{' '}
        <strong className="font-semibold text-main-black/60">Hipposoft</strong>
        {' '}| All Right Reserved
      </p>
    </div>
  </footer>
)
