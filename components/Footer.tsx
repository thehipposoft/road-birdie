import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About Road Birdie',        href: '/about'        },
  { label: 'The Road Birdie Fleet',    href: '#campers'      },
  { label: 'FaQs',                     href: '/faqs'         },
  { label: 'Recommended Destinations', href: '/destinations' },
  { label: 'Contact',                  href: '/contact'      },
] as const

export const Footer = () => (
  <footer className="w-full bg-graybg rounded-t-3xl mt-auto">
    <div className="max-w-300 mx-auto lg:px-10 px-8 lg:pt-16 pt-8 flex flex-col justify-between">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-16">

        {/* Logo */}
        <Image src={"/assets/images/logo/logo-footer2.png"} alt='Logo' width={250} height={100} className='mx-auto' />

        {/* Nav links */}
        <nav className="flex flex-col gap-3 lg:gap-5">
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
        <div className="flex flex-col gap-3 lg:gap-5">
          <div className="flex items-center gap-3">
            <Link href={"https://www.instagram.com/_roadbirdie/"} target="_blank" rel="noreferrer" className='hover:scale-110 duration-300'>
              <svg className="w-12 h-12" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#6590CC" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"></path><circle cx="96" cy="96" r="30" stroke="#6590CC" strokeWidth="12"></circle><circle cx="135" cy="57" r="9" fill="#6590CC"></circle></g></svg>
            </Link>
            <Link href={"https://wa.link/kcq42j"} target="_blank" rel="noreferrer" className='hover:scale-110 duration-300'>
              <svg className="w-10 h-10" fill="#6590CC" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
            </Link>
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
