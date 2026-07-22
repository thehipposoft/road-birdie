import { notFound } from 'next/navigation'
import { Faq } from '@/components/Faq'
import { Fleet } from '@/components/Fleet'
import { SingleCaravan } from '@/components/SingleCaravan'
import { getCamperBySlug } from '@/lib/wordpress/campers'

interface CampersSlugPageProps {
  params: Promise<{ slug: string }>
}

export default async function CampersSlugPage({ params }: CampersSlugPageProps) {
  const { slug } = await params
  const camper = await getCamperBySlug(slug)

  if (!camper) {
    notFound()
  }

  return (
    <div>
      <SingleCaravan
        name={camper.title.rendered}
        image={`/assets/images/vans/${slug}.webp`}
        technicalSpecs={camper.acf.technical_specs}
        information={camper.acf.information}
        galleryImages={camper.gallery.map((image) => image.large)}
      />
      <Fleet
        titulo="Ready to hit the road?"
        descripcion="Curated, fully-equipped vans designed to be your home away from home."
      />
      <Faq />
    </div>
  )
}
