import { eventServices } from '@sipilot/services/events/events.servicxe'
import { homeServices } from '@sipilot/services/pages/home.service'
import Content from './content'

async function getData() {
  const { data } = await homeServices.getHomeData()
  return data
}

async function getEvent() {
  const { data } = await eventServices.getAll()
  return data
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
