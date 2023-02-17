export const eventServices = {
  async getAll() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event`, {
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data
  },
  async upcoming() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/event/upcoming`,
      {
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data
  },
}
