'use client'
import {
  Box,
  Button,
  Container,
  createStyles,
  Group,
  Header,
} from '@mantine/core'
import textLogo from '@sipilot/assets/png/logo-text-white.png'
import { Sidebar } from '@sipilot/components/Sidebar'
import Image from 'next/image'

const useStyles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}))

function Navbar() {
  const { classes } = useStyles()
  return (
    <Box>
      <Header
        height={80}
        style={{
          position: 'fixed',
          top: 0,
          background: 'transparent',
        }}
        withBorder={false}
      >
        <Container h="100%">
          <Group position="apart" align="center" h="100%">
            <Image src={textLogo} alt="Logo" />
            <Button
              variant="outline"
              size="xl"
              h={69}
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
