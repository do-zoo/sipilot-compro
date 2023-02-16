import Loader from '@sipilot/components/Loader'
import { blogServices } from '@sipilot/services/blog/blog.services'
import { Suspense } from 'react'
import BlogContent from './content'

export default async function Page() {
  const carouselData = await blogServices.getCarouselData()
  const randomPost = await blogServices.random()

  return (
    <Suspense fallback={<Loader />}>
      <BlogContent carousel={carouselData} random={randomPost} />
    </Suspense>
  )
}
