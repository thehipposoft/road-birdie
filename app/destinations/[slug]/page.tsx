import { notFound } from 'next/navigation'
import { DestinationsSingle } from '@/components/DestinationsSingle'
import { TravelTips } from '@/components/TravelTips'
import { getCamperBySlug } from '@/lib/wordpress/campers'
import { getDestinationBySlug } from '@/lib/wordpress/destinations'
import { getMediaUrl } from '@/lib/wordpress/media'

interface DestinationsSlugPageProps {
  params: Promise<{ slug: string }>
}

export default async function DestinationsSlugPage({ params }: DestinationsSlugPageProps) {
  const { slug } = await params
  const destination = await getDestinationBySlug(slug)

  if (!destination) {
    notFound()
  }

  const perfectVanSlug = destination.acf.characteristics.perfect_van.toLowerCase()

  const [banner, perfectVanCamper] = await Promise.all([
    getMediaUrl(destination.acf.portada),
    getCamperBySlug(perfectVanSlug),
  ])

  return (
    <div>
      <DestinationsSingle
        title={destination.title.rendered}
        subtitle={destination.acf.sub_title}
        banner={banner}
        characteristics={destination.acf.characteristics}
        recommendedCamper={
          perfectVanCamper
            ? {
                name: perfectVanCamper.title.rendered,
                slug: perfectVanSlug,
                technicalSpecs: perfectVanCamper.acf.technical_specs,
              }
            : null
        }
      />
      <TravelTips />
    </div>
  )
}
