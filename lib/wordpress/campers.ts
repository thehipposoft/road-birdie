import type { WordPressCamper } from './types'

const CAMPERS_ENDPOINT = 'https://tan-sardine-149741.hostingersite.com/wp-json/wp/v2/camper'

export const getCampers = async (): Promise<WordPressCamper[]> => {
  const response = await fetch(CAMPERS_ENDPOINT)

  if (!response.ok) {
    throw new Error(`Failed to fetch campers: ${response.status}`)
  }

  return response.json()
}

export const getCamperBySlug = async (slug: string): Promise<WordPressCamper | null> => {
  const response = await fetch(`${CAMPERS_ENDPOINT}?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch camper "${slug}": ${response.status}`)
  }

  const campers: WordPressCamper[] = await response.json()
  return campers[0] ?? null
}
