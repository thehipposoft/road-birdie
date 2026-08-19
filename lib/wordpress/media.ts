import type { WordPressMedia } from './types'

const MEDIA_ENDPOINT = 'https://admin.roadbirdie.com.au/wp-json/wp/v2/media'

export const getMediaUrl = async (id: number): Promise<string | null> => {
  const response = await fetch(`${MEDIA_ENDPOINT}/${id}`, { next: { revalidate: 3600 } })

  if (!response.ok) {
    return null
  }

  const media: WordPressMedia = await response.json()
  return media.source_url
}
