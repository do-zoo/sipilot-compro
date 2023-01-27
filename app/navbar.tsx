'use client'
import {
  Box,
  Button,
  Container,
  createStyles,
  Group,
  Header,
} from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import textLogo from '@sipilot/assets/png/logo-text-white.png'
import { Sidebar } from '@sipilot/components/Sidebar'
import Image from 'next/image'
import { useRef } from 'react'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}))

function Navbar() {
  const { classes } = useStyles()
  const headerContainer = useRef<HTMLDivElement | null>(null)
  const { ref, entry } = useIntersection({
    root: headerContainer.current,
    threshold: 1,
    rootMargin: '60px',
  })
  return (
    <Box ref={ref}>
      <Header
        height={80}
        style={{
          position: 'fixed',
          top: 0,
          background: !entry?.isIntersecting ? '#1A1B1E' : 'transparent',
          transition: 'background ease-in 100ms',
        }}
        withBorder={false}
      >
        <Container h="100%">
          <Group position="apart" align="center" h="100%">
            <Image src={textLogo} alt="Logo" />
            <Button
              variant="outline"
              size="lg"
              className={classes.hiddenMobile}
            >
              Contact us
            </Button>
            <Sidebar />
          </Group>
        </Container>
      </Header>
    </Box>
  )
}

export default Navbar
