'use client'
import {
  Anchor,
  Burger,
  createStyles,
  Divider,
  Drawer,
  ScrollArea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { useEffect } from 'react'

const useStyles = createStyles((theme) => ({
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

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}))

export function Sidebar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  //   const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes } = useStyles()

  useEffect(() => () => closeDrawer(), [closeDrawer])

  return (
    <>
      <Burger
        opened={drawerOpened}
        onClick={toggleDrawer}
        className={classes.hiddenDesktop}
        color="white"
      />
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        styles={(theme) => ({
          drawer: {
            backgroundColor: theme.black,
            color: theme.white,
          },
        })}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={'dark.5'} />
          <Anchor
            href="/"
            type="button"
            className={classes.link}
            component={Link}
            scroll
          >
            Home
          </Anchor>
          <Anchor
            href="/packages"
            className={classes.link}
            type="button"
            component={Link}
            scroll
          >
            Pricing
          </Anchor>
          <Anchor
            href="/blog"
            className={classes.link}
            type="button"
            component={Link}
            scroll
          >
            Blog
          </Anchor>
        </ScrollArea>
      </Drawer>
    </>
  )
}
