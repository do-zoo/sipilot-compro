'use client'
import {
  Anchor,
  Box,
  Button,
  Container,
  createStyles,
  Group,
  Header,
} from '@mantine/core'
import { useIntersection } from '@mantine/hooks'
import { Sidebar } from '@sipilot/components/Sidebar'
import Image from 'next/image'
import { useRef } from 'react'
import textLogo from '@sipilot/assets/png/logo-text-white.png'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  group: {
    justifyContent: 'space-between',
    [theme.fn.largerThan('md')]: {
      justifyContent: 'space-between',
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colors.dark[6],
    }),
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
            <Box component={Link} href="/">
              <Image src={textLogo} alt="Logo" />
            </Box>
            <Group>
              <Group className={classes.hiddenMobile}>
                <Anchor
                  href="/"
                  component={Link}
                  type="button"
                  className={classes.link}
                  scroll
                >
                  Home
                </Anchor>
                <Anchor
                  href="/packages"
                  component={Link}
                  type="button"
                  className={classes.link}
                  scroll
                >
                  Pricing
                </Anchor>
                <Anchor
                  href="/blog"
                  component={Link}
                  type="button"
                  className={classes.link}
                  scroll
                >
                  Blog
                </Anchor>
                <Anchor
                  href="#footer"
                  component="a"
                  type="button"
                  className={classes.link}
                >
                  Become a member
                </Anchor>
              </Group>
            </Group>
            <Button
              variant="outline"
              size="lg"
              component="a"
              href="#footer"
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
