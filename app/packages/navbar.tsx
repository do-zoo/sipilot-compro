'use client'
import {
  Container,
  createStyles,
  Group,
  Header,
  UnstyledButton,
} from '@mantine/core'
import logoWithText from '@sipilot/assets/png/logo-with-text.png'
import { Sidebar } from '@sipilot/components/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  group: {
    justifyContent: 'space-between',
    [theme.fn.largerThan('md')]: {
      justifyContent: 'center',
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
          <UnstyledButton component={Link} href="/" scroll>
            <Image src={logoWithText} alt="Logo" height={60} />
          </UnstyledButton>
          <Sidebar />
        </Group>
      </Container>
    </Header>
  )
}

export default Navbar
