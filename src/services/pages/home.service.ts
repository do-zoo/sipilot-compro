import service from '../_base-services'

export const homeServices = {
  async getHomeData() {
    const { data } = await service.get('/maincontent')
    return data?.data
  },
}
