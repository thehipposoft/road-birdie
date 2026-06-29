import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Campers', href: '/campers' },
  { label: 'FAQs', href: '/#faqs' },
] as const

export const Menu = () => (
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
              className="font-ui text-sm text-main-black font-medium transition-colors hover:text-main-blue"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <Link
        href="/contact"
        className="flex items-center px-2 justify-center lg:min-h-14 font-bold py-3 font-ui text-sm text-white bg-main-blue rounded-full transition-opacity hover:opacity-90 min-w-32"
      >
        Contact Us ↗
      </Link>
    </div>
  </header>
)
