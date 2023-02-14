import { homeServices } from '@sipilot/services/pages/home.service'
import Content from './content'

async function getData() {
  const { data } = await homeServices.getHomeData()
  return data
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <Content data={data} />
    </div>
  )
}
