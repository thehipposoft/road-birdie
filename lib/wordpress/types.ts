export interface WordPressCamperTechnicalSpecs {
  chassis: string
  year: string
  connectivity: string
  water: string
  bathing: string
  energy: string
  insurance: string
  capacity: string
}

export interface WordPressCamperInformation {
  kitchen: string
  battery: string
  pick_up: string
  sleep: string
  comfort: string
  kilometers: string
}

// "portada" es el id del media destacado en WordPress
export interface WordPressCamperAcf {
  portada: number
  technical_specs: WordPressCamperTechnicalSpecs
  information: WordPressCamperInformation
}

export interface WordPressCamperGalleryImage {
  id: number
  url: string
  thumb: string
  medium: string
  large: string
  alt: string
  width: number
  height: number
}

export interface WordPressCamper {
  title: {
    rendered: string
  }
  acf: WordPressCamperAcf
  gallery: WordPressCamperGalleryImage[]
}
