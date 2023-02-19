import { blogServices } from '@sipilot/services/blog/blog.services'
import { useQuery } from '@tanstack/react-query'

function useCategories() {
  return useQuery(['categories'], () => blogServices.getCategories())
}

export default useCategories
