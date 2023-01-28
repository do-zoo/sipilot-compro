import {
  BackgroundImage,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

const nextEvent = [
  {
    name: 'Hari',
    value: 59,
  },
  {
    name: 'Hari',
    value: 59,
  },
  {
    name: 'Hari',
    value: 59,
  },
  {
    name: 'Hari',
    value: 59,
  },
]

export function EventCountdown() {
  return (
    <BackgroundImage src={'/assets/jpg/event-bg.jpg'} radius="sm">
      <Container py={60}>
        <Stack spacing={32}>
          <Title color="black" align="center">
            <Text
              span
              bg="primary"
              px={2}
              className="title"
              style={{
                borderRadius: 4,
              }}
            >
              Event
            </Text>{' '}
            Selanjutnya
          </Title>
          <Grid>
            {nextEvent.map((v, i) => (
              <Grid.Col key={i} span={3}>
                <Center>
                  <Card py={4} px={8} radius="lg">
                    <Stack align="center" spacing={0}>
                      <Title size={48} color="primary">
                        {v.value}
                      </Title>
                      <Text transform="uppercase" color="primary">
                        {v.name}
                      </Text>
                    </Stack>
                  </Card>
                </Center>
              </Grid.Col>
            ))}
          </Grid>
          <Center>
            <Button>Pelajari lebih lanjut</Button>
          </Center>
        </Stack>
      </Container>
    </BackgroundImage>
  )
}

export default EventCountdown
