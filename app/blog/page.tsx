'use client'
import { Box } from '@mantine/core'
import {
  CategorizedBlog,
  RecommendationBlog,
} from '@sipilot/components/Sections/Blog'
import Navbar from './navbar'

export default function Blog() {
  // const theme = useMantineTheme()
  return (
    <Box>
      <Navbar />
      <RecommendationBlog />
      <CategorizedBlog />
    </Box>
  )
}
