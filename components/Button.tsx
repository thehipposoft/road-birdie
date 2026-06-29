import Link from 'next/link'

export type ButtonColor = 'main-yellow' | 'main-blue' | 'main-black' | 'main-navy' | 'white'

const BG: Record<ButtonColor, string> = {
  'main-yellow': 'bg-main-yellow',
  'main-blue':   'bg-main-blue',
  'main-black':  'bg-main-black',
  'main-navy':   'bg-main-navy',
  'white':       'bg-white',
}

// Pseudo-elemento que sube desde abajo en hover
const BEFORE_BG: Record<ButtonColor, string> = {
  'main-yellow': 'before:bg-main-yellow',
  'main-blue':   'before:bg-main-blue',
  'main-black':  'before:bg-main-black',
  'main-navy':   'before:bg-main-navy',
  'white':       'before:bg-white',
}

const TEXT: Record<ButtonColor, string> = {
  'main-yellow': 'text-main-black',
  'main-blue':   'text-white',
  'main-black':  'text-white',
  'main-navy':   'text-white',
  'white':       'text-main-black',
}

const HOVER_TEXT: Record<ButtonColor, string> = {
  'main-yellow': 'hover:text-main-black',
  'main-blue':   'hover:text-white',
  'main-black':  'hover:text-white',
  'main-navy':   'hover:text-white',
  'white':       'hover:text-main-black',
}

// Solo se aplica cuando color="white"
const HOVER_BORDER: Record<ButtonColor, string> = {
  'main-yellow': 'hover:border-main-yellow',
  'main-blue':   'hover:border-main-blue',
  'main-black':  'hover:border-main-black',
  'main-navy':   'hover:border-main-navy',
  'white':       'hover:border-white',
}

interface ButtonProps {
  texto: string
  color: ButtonColor
  colorHover: ButtonColor
  href?: string
  arrow?: boolean
}

const buildClassName = (color: ButtonColor, colorHover: ButtonColor) =>
  [
    'relative overflow-hidden inline-flex items-center justify-center',
    'px-8 py-3.5 rounded-full cursor-pointer',
    'font-ui text-sm font-medium',
    'transition-colors duration-300',
    BG[color],
    TEXT[color],
    HOVER_TEXT[colorHover],
    // Borde solo en variante white
    ...(color === 'white' ? ['border border-main-navy', HOVER_BORDER[colorHover]] : []),
    // Pseudo-elemento: parte oculto en el fondo y sube al hacer hover
    'before:absolute before:inset-x-0 before:bottom-0 before:h-0',
    'before:transition-all before:duration-500 before:ease-in-out',
    'hover:before:h-full',
    BEFORE_BG[colorHover],
  ].join(' ')

export const Button = ({ texto, color, colorHover, href, arrow = false }: ButtonProps) => {
  const className = buildClassName(color, colorHover)

  const content = (
    <span className="relative z-10 flex items-center gap-2 ">
      {texto}
      {arrow && (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  )

  if (href) {
    return <Link href={href} className={className}>{content}</Link>
  }

  return <button type="button" className={className}>{content}</button>
}
