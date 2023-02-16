'use client'
import { Box } from '@mantine/core'
import { PackagesAlt, PackagesDetail } from '@sipilot/components/Sections'
import FAQ from '@sipilot/components/Sections/Faq.section'
import Navbar from './navbar'

export default function Packages() {
  // const theme = useMantineTheme()

  return (
    <Box>
      <Navbar />
      <PackagesAlt />
      <PackagesDetail />
      <FAQ />
    </Box>
  )
}
