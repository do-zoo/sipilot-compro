import Loader from '@sipilot/components/Loader'
import { blogServices } from '@sipilot/services/blog/blog.services'
import { Suspense } from 'react'
import BlogSlugContent from './content'

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await blogServices.getBySlug(params?.slug)
  return (
    <Suspense fallback={<Loader />}>
      <BlogSlugContent data={blog} />
    </Suspense>
  )
}

// export async function generateStaticParams() {
//   const posts = await blogServices.getAll();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
