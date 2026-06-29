import { Contact } from '@/components/Contact'
import { Destinations } from '@/components/Destinations'
import { Faq } from '@/components/Faq'
import { Features } from '@/components/Features'
import { Fleet } from '@/components/Fleet'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <Fleet />
      <Features />
      <Testimonials />
      <Destinations />
      <Contact />
      <Faq />
    </div>
  )
}
