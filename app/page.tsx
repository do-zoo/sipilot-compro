import { eventServices } from '@sipilot/services/events/events.servicxe'
import { homeServices } from '@sipilot/services/pages/home.service'
import Content from './content'

async function getData() {
  return await homeServices.getHomeData()
}

async function getEvent() {
  return await eventServices.getAll()
}

export default async function Page() {
  const data = await getData()
  const events = await getEvent()

  return (
    <div>
      <Content data={data} events={events} />
    </div>
  )
}
