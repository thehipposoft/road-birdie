@AGENTS.md
# Perfil del desarrollador
Soy desarrollador Front-End especializado en Next.js y TypeScript.
Construimos sitios web creativos, modernos y artísticos — visualmente
expresivos pero siempre claros y concisos. Y con un motion claro y smooth.

## Estilo de comunicación
- Los comentarios en el código deben ser cortos y directos
- Al revisar código, anotar los cambios con explicaciones breves
- Sin frases de relleno — ser preciso
- Responder en español siempre

## Estilo de código
- Siempre TypeScript — nunca `any`
- Preferir arrow functions y `const`
- Componentes: exports nombrados, PascalCase
- Hooks: camelCase, prefijo `use`
- Sin números mágicos — usar constantes con nombre
- Sin estilos inline — usar clases de Tailwind exclusivamente
- Orden de clases Tailwind: layout → espaciado → tipografía → visual → animación
- Imports absolutos con alias `@/` — nunca rutas relativas con `../`

## Principios de diseño
- Artístico y moderno, pero siempre legible
- El movimiento debe sentirse intencional, no decorativo
- Mobile-first siempre

## Qué NO sugerir
- Class Components
- CSS Modules (usamos Tailwind)
- Declaraciones con `var`
- Librerías de animación que no sean GSAP

## Patrones preferidos
- Data fetching: React Server Components + `fetch()` con cache
- Estado: `useState` / `useReducer` para local, Zustand para global
- Formularios: React Hook Form + Zod
- Imágenes: siempre `next/image` con `width` y `height` explícitos