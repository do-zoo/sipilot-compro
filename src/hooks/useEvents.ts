import { eventServices } from '@sipilot/services/events/events.servicxe'
import { useQuery } from '@tanstack/react-query'

function useEvents() {
  return useQuery({ queryKey: ['events'], queryFn: eventServices.getAll })
}

export default useEvents
