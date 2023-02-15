import { homeServices } from '@sipilot/services/pages/home.service'
import { useQuery } from '@tanstack/react-query'

function useMainContent() {
  return useQuery({
    queryKey: ['main-content'],
    queryFn: homeServices.getHomeData,
  })
}

export default useMainContent
