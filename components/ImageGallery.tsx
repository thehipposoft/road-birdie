import Image from 'next/image'
import { ImagePlaceholder } from '@/components/Placeholder'

const GALLERY_TITLE = 'A Closer Look'

interface GalleryItem {
  id: string
  alt: string
  span: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'awning-setup', alt: 'Van with awning and camp chairs set up', span: 'col-span-2' },
  { id: 'bed', alt: 'Made-up bed inside the van', span: 'col-span-1' },
  { id: 'dinette', alt: 'Dinette with a window view', span: 'col-span-1 row-span-2' },
  { id: 'road-trip', alt: 'Van parked on an outback road', span: 'col-span-1' },
  { id: 'kitchen-setup', alt: 'Van side door open showing the outdoor kitchen setup', span: 'col-span-2' },
]

interface ImageGalleryProps {
  images: string[]
}

export const ImageGallery = ({ images }: ImageGalleryProps) => (
  <section className="w-full bg-white pb-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-display text-4xl font-extrabold text-main-black">{GALLERY_TITLE}</h2>

      <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-4 h-170">
        {GALLERY_ITEMS.map((item, index) => {
          const src = images[index]

          return (
            <div
              key={item.id}
              className={`${item.span} relative overflow-hidden rounded-2xl border border-main-black/10`}
            >
              {src ? (
                <Image src={src} alt={item.alt} fill className="object-cover object-top" />
              ) : (
                <ImagePlaceholder className="h-full w-full" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  </section>
)
