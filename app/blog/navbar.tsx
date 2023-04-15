'use client'
import {
  Anchor,
  Container,
  createStyles,
  Group,
  Header,
  Box,
} from '@mantine/core'
import logoWithText from '@sipilot/assets/png/logo-with-text.png'
import { Sidebar } from '@sipilot/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
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

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}))

function Navbar() {
  const { classes } = useStyles()
  return (
    <Header
      height={80}
      style={{
        position: 'sticky',
        top: 0,
        background: '#1A1B1E',
        transition: 'background ease-in 100ms',
      }}
      withBorder={false}
    >
      <Container h="100%">
        <Group align="center" h="100%" className={classes.group}>
          <Group>
            <Box component={Link} href="/" scroll={false}>
              <Image src={logoWithText} alt="Logo" height={60} />
            </Box>
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
          {/* <TextInput
            placeholder="Search"
            radius="xl"
            className={classes.hiddenMobile}
            size="lg"
            rightSection={
              <IconSearch size={24} color={theme.colors.primary[9]} />
            }
          /> */}
          <Sidebar />
        </Group>
      </Container>
    </Header>
  )
}

export default Navbar
