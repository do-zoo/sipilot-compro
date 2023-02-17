export const homeServices = {
  async getHomeData() {
    const res = await fetch(`${process.env.API_URL}/maincontent`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    return data?.data
  },
}
