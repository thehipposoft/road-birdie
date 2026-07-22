import type { WordPressDestination } from './types'

const DESTINATIONS_ENDPOINT = 'https://tan-sardine-149741.hostingersite.com/wp-json/wp/v2/destination'

export const getDestinations = async (): Promise<WordPressDestination[]> => {
  const response = await fetch(DESTINATIONS_ENDPOINT, { next: { revalidate: 3600 } })

  if (!response.ok) {
    throw new Error(`Failed to fetch destinations: ${response.status}`)
  }

  return response.json()
}

export const getDestinationBySlug = async (slug: string): Promise<WordPressDestination | null> => {
  const response = await fetch(`${DESTINATIONS_ENDPOINT}?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch destination "${slug}": ${response.status}`)
  }

  const destinations: WordPressDestination[] = await response.json()
  return destinations[0] ?? null
}
