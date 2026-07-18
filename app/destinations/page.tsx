import type { Metadata } from 'next'
import { DestinationsPage } from '@/components/DestinationsPage'
import { Faq } from '@/components/Faq'

export const metadata: Metadata = {
  title: 'Destinations | Road Birdie',
  description:
    "Explore Australia's most iconic regions — from Byron Bay to Uluru — best experienced on four wheels.",
  openGraph: {
    title: 'Destinations | Road Birdie',
    description:
      "Explore Australia's most iconic regions — from Byron Bay to Uluru — best experienced on four wheels.",
    type: 'website',
  },
}

export default function Destinations() {
  return (
    <div>
      <DestinationsPage />
      <Faq />
    </div>
  ) 
}
