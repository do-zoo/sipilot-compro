import { blogServices } from '@sipilot/services/blog/blog.services'
import { useQuery } from '@tanstack/react-query'

function useCategorizedBlog({ params = {} }) {
  return useQuery(['categorized-blog', params], () =>
    blogServices.getAll({ params })
  )
}

export default useCategorizedBlog
