import { Button, Image } from '@mantine/core'
import {
  AspectRatio,
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Link from 'next/link'
import { Event } from 'types/res'

interface INewEvents {
  events: Event[]
}

export function NewEvents(props: INewEvents) {
  const { events } = props

  console.log(events)

  return (
    <Box bg="white">
      <Container py={60}>
        <Stack spacing={32}>
          <Stack>
            <Title align="center" color="black">
              New{' '}
              <Text
                span
                bg="primary"
                px={2}
                className="title"
                style={{
                  borderRadius: 4,
                }}
              >
                Events
              </Text>
            </Title>
          </Stack>
          <Container size="md" style={{ width: '100%' }}>
            <Grid gutter="lg">
              {events.map((v) => (
                <Grid.Col key={v.id} span={12} xs={6} sm={4} pos="relative">
                  <AspectRatio
                    ratio={1}
                    sx={() => ({
                      overflow: 'hidden',
                    })}
                  >
                    <Stack
                      align="center"
                      p="md"
                      spacing="xs"
                      sx={(theme) => ({
                        zIndex: 1000,
                        backgroundColor: theme.fn.rgba(
                          theme.colors.black[5],
                          0.5
                        ),
                        opacity: 0,
                        transition: 'all ease-in-out 200ms',
                        // transform: 'translateY(100%)',
                        ':hover': {
                          opacity: 1,
                        },
                      })}
                    >
                      <Title order={5} align="center" lineClamp={2}>
                        {v.title}
                      </Title>
                      <Text align="center" lineClamp={2}>
                        {v.excerpt}
                      </Text>
                      <Button
                        size="xs"
                        component={Link}
                        href={v.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        see more
                      </Button>
                    </Stack>
                    <Image src={v.imageUrl} alt="event-image" fit="contain" />
                  </AspectRatio>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Container>
    </Box>
  )
}

export default NewEvents
