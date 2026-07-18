import { Faq } from '@/components/Faq'
import { Fleet } from '@/components/Fleet'
import { SingleCaravan } from '@/components/SingleCaravan'

export default function FleetSlugPage() {
  return (
    <div>
      <SingleCaravan name="Pelican" image="/assets/images/vans/pelican.webp" />
      <Fleet
        titulo="Ready to hit the road?"
        descripcion="Curated, fully-equipped vans designed to be your home away from home."
      />
      <Faq />
    </div>
  )
}
