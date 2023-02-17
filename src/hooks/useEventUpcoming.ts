import { eventServices } from '@sipilot/services/events/events.servicxe'
import { useQuery } from '@tanstack/react-query'

function useEventUpcoming() {
  return useQuery({
    queryKey: ['event-upcoming'],
    queryFn: eventServices.upcoming,
  })
}

export default useEventUpcoming
