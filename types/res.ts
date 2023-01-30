import { StaticImageData } from 'next/image'

export interface Section {
  content: string
  image: string | StaticImageData
}

export interface HomeData {
  '1': Section
  '2': Section
  '3': Section
  '4': Section
  '5': Section
  '6': Section
  '7': Section
  '8': Section
  '9': Section
}
