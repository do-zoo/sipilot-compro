'use client' // Error components must be Client components

import Loader from '@sipilot/components/Loader'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({}: { error: Error; reset: () => void }) {
  const router = useRouter()
  useEffect(() => {
    // Log the error to an error reporting service
    router.replace('blog')
  }, [router])

  return <Loader />
}
