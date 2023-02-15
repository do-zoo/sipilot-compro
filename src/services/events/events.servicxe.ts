import service from '../_base-services'

export const eventServices = {
  async getAll() {
    const { data } = await service.get('event')
    return data?.data
  },
}
