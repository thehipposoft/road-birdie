import { ImagePlaceholder } from '@/components/Placeholder'

const GALLERY_TITLE = 'A Closer Look'

interface GalleryImageItem {
  id: string
  type: 'image'
  alt: string
  span: string
  inset?: boolean
}

interface GalleryFeatureItem {
  id: string
  type: 'feature'
  alt: string
  span: string
  features: string[]
}

type GalleryItem = GalleryImageItem | GalleryFeatureItem

// TODO(wordpress): esta data va a venir del backend, por ahora es mock del print
const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'awning-setup', type: 'image', alt: 'Van with awning and camp chairs set up', span: 'col-span-2', inset: true },
  { id: 'bed', type: 'image', alt: 'Made-up bed inside the van', span: 'col-span-1' },
  { id: 'dinette', type: 'image', alt: 'Dinette with a window view', span: 'col-span-1 row-span-2' },
  { id: 'road-trip', type: 'image', alt: 'Van parked on an outback road', span: 'col-span-1' },
  {
    id: 'kitchen-setup',
    type: 'feature',
    alt: 'Van side door open showing the outdoor kitchen setup',
    span: 'col-span-2',
    features: [
      'Dine under the awning with **folding table + chairs**.',
      '**20L fridge** to keep your meals fresh.',
      '**Sink** + **62L water tank**.',
    ],
  },
]

const renderWithBold = (text: string) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-semibold text-main-black">{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  )

export const ImageGallery = () => (
  <section className="w-full bg-white pb-20">
    <div className="max-w-[1200px] mx-auto px-6">
      <h2 className="font-display text-4xl font-extrabold text-main-black">{GALLERY_TITLE}</h2>

      <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-4 h-160">
        {GALLERY_ITEMS.map((item) =>
          item.type === 'feature' ? (
            <div
              key={item.id}
              className={`${item.span} flex overflow-hidden rounded-2xl border border-main-black/10 bg-[#F3F1E7]`}
            >
              <ImagePlaceholder className="h-full w-1/2" />
              <ul className="flex flex-col justify-center gap-4 w-1/2 p-6 font-display text-base text-main-black">
                {item.features.map((feature) => (
                  <li key={feature} className="ml-4 list-disc marker:text-main-black/40">
                    {renderWithBold(feature)}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              key={item.id}
              className={`${item.span} overflow-hidden rounded-2xl border border-main-black/10 `}
            >
              <ImagePlaceholder className="h-full w-full" />
            </div>
          )
        )}
      </div>
    </div>
  </section>
)
