import { eventServices } from '@sipilot/services/events/events.servicxe'
import { homeServices } from '@sipilot/services/pages/home.service'
import Content from './content'

export default async function Page() {
  const data = await homeServices.getHomeData()
  const events = await eventServices.getAll()
  const upcomingEvent = await eventServices.upcoming()

  return (
    <div>
      <Content data={data} events={events} upcomingEvent={upcomingEvent} />
    </div>
  )
}
