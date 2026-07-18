interface PlaceholderProps {
  className?: string
}

// Placeholder de icono — reemplazar por los iconos definitivos
export const IconPlaceholder = ({ className = '' }: PlaceholderProps) => (
  <div className={`shrink-0 rounded-md border border-dashed border-main-black/25 bg-graybg ${className}`} aria-hidden="true" />
)

// Placeholder de imagen — reemplazar por la imagen definitiva
export const ImagePlaceholder = ({ className = '' }: PlaceholderProps) => (
  <div className={`flex items-center justify-center border border-dashed border-main-black/25 bg-graybg font-ui text-xs text-light-gray ${className}`}>
    Image placeholder
  </div>
)
