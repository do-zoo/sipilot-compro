import service from '../_base-services'

export const eventServices = {
  async getAll() {
    const { data } = await service.get('event')
    return data?.data
  },
  async upcoming() {
    const { data } = await service.get('event/upcoming')
    return data?.data
  },
}
