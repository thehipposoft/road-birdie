# Sistema de Diseño

Fuente de verdad para todos los tokens visuales del proyecto.
Claude Code debe leer este archivo antes de crear o modificar cualquier componente.

---

## Tipografía

| Rol       | Fuente      | Variable CSS         | Clase Tailwind       | Uso                              |
|-----------|-------------|----------------------|----------------------|----------------------------------|
| Display   | EB Garamond | `var(--font-display)`| `font-display`       | Títulos, headings (h1–h3)        |
| UI        | DM Sans     | `var(--font-ui)`     | `font-ui`            | Links, navegación, botones, CTAs |
| Body      | Inter       | `var(--font-body)`   | `font-body`          | Párrafos, texto general          |

### Reglas de uso
- `font-display` → solo para `h1`, `h2`, `h3` y textos grandes decorativos
- `font-ui` → links (`<a>`), nav, botones, labels, badges
- `font-body` → todo el texto corrido (`<p>`, `<li>`, `<span>`, etc.)
- **Nunca mezclar** EB Garamond en texto pequeño — pierde legibilidad bajo 18px

---

## Colores

| Token          | Hex       | Uso principal                            |
|----------------|-----------|------------------------------------------|
| `main-yellow`  | `#E7C57E` | Acento, highlights, CTAs, hover states   |
| `main-blue`    | `#4570AF` | Links activos, elementos interactivos    |
| `main-black`   | `#171A1F` | Texto principal, fondos oscuros          |
| `main-navy`    | `#2E3442` | Fondos secundarios, cards, superficies   |
| `light-gray`   | `#565D6D` | Textos secundarios, descripciones        |

### Reglas de uso
- El texto sobre `main-black` o `main-navy` → usar blanco o `main-yellow`
- `main-yellow` como acento, no como fondo de texto largo
- No usar colores fuera de esta paleta sin consultar primero

---

## Fuentes — implementación

Las fuentes se cargan desde `next/font/google` en `app/layout.tsx` y se exponen
como variables CSS. **No importar fuentes de ninguna otra forma.**

```tsx
// app/layout.tsx — referencia de implementación
import { EB_Garamond, DM_Sans, Inter } from 'next/font/google'

const displayFont = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const uiFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-ui',
  weight: ['400', '500', '600'],
})

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
})
```

---

## Notas para Claude Code

- Antes de crear un componente, verificar que los tokens de color y fuente que usás están en esta tabla
- Si necesitás un color o fuente que no está acá → preguntar antes de inventar
- El `tailwind.config.ts` mapea estos tokens — usar las clases de Tailwind, no valores hardcodeados