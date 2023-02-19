export const blogServices = {
  async getCarouselData() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post?perPage=5&published_only=true`,
      {
        cache: 'no-store',
      }
    )
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data?.items
  },

  async categorized() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post?published_only=true`,
      {
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data?.items
  },

  async getAll(options: { params: Record<string, string> }) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/post?` +
        new URLSearchParams({
          published_only: 'true',
          ...options.params,
        }),
      {
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data?.items
  },

  async getBySlug(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${slug}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data
  },

  async random() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/random`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data
  },

  async getCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data?.items
  },
}
