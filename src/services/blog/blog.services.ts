import { AxiosRequestConfig } from 'axios'
import service from '../_base-services'

export const blogServices = {
  async getCarouselData() {
    const { data } = await service.get('post?perPage=5&published_only=true')
    return data?.data?.items
  },
  async categorized() {
    const { data } = await service.get('post?published_only=true')
    return data?.data?.items
  },
  async getAll(options: AxiosRequestConfig<unknown>) {
    const { data } = await service.get('post', {
      params: {
        published_only: true,
        ...options.params,
      },
    })
    return data?.data?.items
  },
  async getBySlug(slug: string) {
    const { data } = await service.get(`post/${slug}`)
    return data?.data
  },
  async random() {
    const { data } = await service.get(`post/random`)
    return data?.data
  },
}
