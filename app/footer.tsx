'use client'
import {
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
                  Sipilot bergerak di bidang jasa penyelenggara pertemuan,
                  perjalanan intensif, dan pameran, serta bidang penerbangan
                  dalam hal edukasi formal dan non-formal.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <Stack pt={24}>
                <Title color="primary" order={3}>
                  LOCATION
                </Title>
                <Text>
                  Arcade Business Center Lantai 6 Unit 6-03, Jl. Pantai Indah
                  Kapuk 2 Kav. C1, Kota Adm. Jakarta Utara, DKI Jakarta
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col md={3}>
              <Stack pt={24}>
                <Title color="primary" order={3}>
                  CONTACT
                </Title>
                <Text>sipilot.team@gmail.com</Text>
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
