import { blogServices } from '@sipilot/services/blog/blog.services'
import { useQuery } from '@tanstack/react-query'

function useBlogs() {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogServices.getCarouselData,
  })
}

export default useBlogs
