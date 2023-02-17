'use client'
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
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Event } from 'types/res'

const formatNumber = (num: number) => {
  return num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
}

interface IProps {
  event: Event
}

const getTimeLeft = (time: number) => {
  const days = Math.floor(time / 24 / 3600)
  const hours = Math.floor((time - days * 24 * 3600) / 3600)
  const minutes = Math.floor((time - days * 24 * 3600 - hours * 3600) / 60)
  const seconds = (time - days * 24 * 3600 - hours * 3600) % 60

  return [
    {
      name: 'days',
      value: formatNumber(days),
    },
    {
      name: 'hours',
      value: formatNumber(hours),
    },
    {
      name: 'minutes',
      value: formatNumber(minutes),
    },
    {
      name: 'seconds',
      value: formatNumber(seconds),
    },
  ]
}

const getUnixTimestamp = (epoch: number) =>
  Math.floor((epoch - Date.now()) / 1000)

export function EventCountdown(props: IProps) {
  const { event } = props
  const [timeLeft, setTimeLeft] = useState<Record<'name' | 'value', string>[]>(
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(getUnixTimestamp(Number(event.expire))))
      // setTime((time) => (time !== 0 ? time - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [event.expire])

  // const data = useEventUpcoming()
  // console.log(countDown)

  return (
    <BackgroundImage src={event.imageUrl} radius="sm">
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
            {timeLeft.map((v, i) => (
              <Grid.Col key={i} span={3}>
                <Center>
                  <Card py={4} px={8} radius="lg" bg="black">
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
            <Button
              component={Link}
              href={event.slug}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pelajari lebih lanjut
            </Button>
          </Center>
        </Stack>
      </Container>
    </BackgroundImage>
  )
}

export default EventCountdown
