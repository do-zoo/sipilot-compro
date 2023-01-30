import { homeServices } from '@sipilot/services/pages/home.service'
import { mockData } from 'mockData'
import Content from './content'

async function getData() {
  if (process.env.NODE_ENV === 'development') {
    return mockData
  }
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
