import service from './_base-services'

export interface IEmailPayload {
  mail: string
}

export const subscriptionsServices = {
  async email(payload: IEmailPayload) {
    const { data } = await service.post('/emailSubscription', payload)
    return data?.data?.items
  },
}
