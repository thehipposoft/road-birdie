import type { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About Us | Road Birdie',
  description:
    "We're a community-driven Australian company that designs and turns vans into mobile homes — offering travellers from around the world a road trip beyond the usual routes, unlocking the freedom to explore Australia.",
  openGraph: {
    title: 'About Us | Road Birdie',
    description:
      'Community-driven, sustainability-focused campervan experiences across Australia. Discover our story.',
    type: 'website',
  },
}

export default function About() {
  return <AboutPage />
}
