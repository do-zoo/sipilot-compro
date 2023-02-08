export interface Content {
  body: string
  type?: 'list' | 'list-with-icon'
  list?: Record<'id' | 'body' | 'icon', string | number>[]
}
export interface Section {
  content: Content
  image: string
  title: string
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
