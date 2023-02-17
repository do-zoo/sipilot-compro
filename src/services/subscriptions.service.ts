export interface IEmailPayload {
  mail: string
}

export const subscriptionsServices = {
  async email(payload: IEmailPayload) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/emailSubscription`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
