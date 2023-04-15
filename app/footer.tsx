'use client'
import {
  Anchor,
  Box,
  Button,
  Container,
  Footer,
  Grid,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useWindowScroll } from '@mantine/hooks'
import { openContextModal } from '@mantine/modals'
import textLogo from '@sipilot/assets/png/logo-text-white.png'
import IconFacebook from '@sipilot/assets/svg/facebook.svg'
import IconLinkedIn from '@sipilot/assets/svg/linkedin.svg'
import IconTwitter from '@sipilot/assets/svg/twitter.svg'
import IconWebsite from '@sipilot/assets/svg/website.svg'
import { useSubsEmail } from '@sipilot/hooks/subscriptions'
import { IconTransitionTop } from '@tabler/icons-react'
import Image from 'next/image'

const iconStyle = {
  width: 40,
  color: '#2e2e2e',
}

export function FooterSection() {
  const [scroll, scrollTo] = useWindowScroll()
  const { mutate, isLoading } = useSubsEmail()
  const form = useForm({
    initialValues: {
      mail: '',
    },

    validate: {
      mail: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
    transformValues(values) {
      return {
        mail: values.mail.toLocaleLowerCase(),
      }
    },
  })

  const { onSubmit, getInputProps, reset } = form

  const handleSubmit = onSubmit((values) => {
    mutate(values, {
      onSuccess() {
        reset()
        openContextModal({
          modal: 'subscribeSuccess',
          withCloseButton: false,
          innerProps: {
            modalBody:
              "Thank you for subscribing to our newsletter! We're excited to have you on board.",
          },
        })
      },
    })
  })
  return (
    <>
      {scroll.y > 500 && (
        <Button
          pos="fixed"
          size="sm"
          color="accent"
          leftIcon={<IconTransitionTop />}
          right={10}
          bottom={10}
          onClick={() => scrollTo({ y: 0 })}
          style={{
            zIndex: 100,
          }}
        >
          Scroll to top
        </Button>
      )}
      <Box id="footer">
        <Container py={32}>
          <Grid gutter="xl">
            <Grid.Col md={3}>
              <Stack
                sx={(theme) => ({
                  [theme.fn.largerThan('md')]: {
                    borderRight: `2px solid ${theme.colors.primary[5]}`,
                  },
                })}
              >
                <Image src={textLogo} alt="Logo" />
                <Text>
                  Sipilot is engaged in meeting, intensive travel, and
                  exhibition organizing services, as well as aviation in formal
                  and non-formal education.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <Stack pt={24}>
                <Title color="primary" order={3}>
                  LOCATION
                </Title>
                <Anchor
                  href="https://goo.gl/maps/1KHZ4LUPCNSxph3M8"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                >
                  Arcade Business Center Lantai 6 Unit 6-03, Jl. Pantai Indah
                  Kapuk 2 Kav. C1, Kota Adm. Jakarta Utara, DKI Jakarta
                </Anchor>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <Stack pt={24}>
                <Title color="primary" order={3}>
                  CONTACT
                </Title>
                <Anchor
                  href="mailto:sipilot.team@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                >
                  sipilot.team@gmail.com
                </Anchor>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <form onSubmit={handleSubmit}>
                <Stack pt={24}>
                  <Box>
                    <TextInput
                      maw={300}
                      size="lg"
                      radius="xl"
                      placeholder="your@email.com"
                      {...getInputProps('mail')}
                    />
                  </Box>
                  <Box>
                    <Button type="submit" size="md" px={32} loading={isLoading}>
                      SUBSCRIBE
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Grid.Col>
          </Grid>
        </Container>
        <Footer height="100%" bg="primary" py="xs">
          <Container>
            <Group position="center" noWrap spacing="xl">
              <IconLinkedIn style={iconStyle} />
              <IconFacebook style={iconStyle} />
              <IconTwitter style={iconStyle} />
              <IconWebsite style={iconStyle} />
            </Group>
          </Container>
        </Footer>
      </Box>
    </>
  )
}

export default FooterSection
