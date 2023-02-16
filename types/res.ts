export interface Content {
  body: string
  type?: 'list' | 'list-with-icon'
  list?: Record<'id' | 'body' | 'icon', string | number>[]
  reviews?: Record<'name' | 'job' | 'message' | 'avatar', string>[]
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

export interface Event {
  id: string
  title: string
  slug: string
  excerpt: string
  publish_date: string
  expire: string
  imageUrl: string
}

export interface Blog {
  id: string
  title: string
  thumbnail: string[]
  slug: string
  published_at: string
  updated_at: string
  author: Author
  category: Category
  tags: Category[]
  excerpt: string
  body: string
}

interface Category {
  title: string
  slug: string
}

interface Author {
  name: string
  slug: string
}
