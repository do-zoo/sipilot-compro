import Loader from '@sipilot/components/Loader'
import { blogServices } from '@sipilot/services/blog/blog.services'
import { Suspense } from 'react'
import BlogSlugContent from './content'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await blogServices.getBySlug(params.slug)

  return (
    <Suspense fallback={<Loader />}>
      <BlogSlugContent data={blog} />
    </Suspense>
  )
}
