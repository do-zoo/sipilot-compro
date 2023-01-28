'use client'
import {
  Button,
  Center,
  Container,
  Group,
  List,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import trustedJPG from '@sipilot/assets/jpg/trusted-image.jpg'
import Analytic from '@sipilot/assets/svg/analytic.svg'
import RocketIcon from '@sipilot/assets/svg/rocket.svg'
import {
  AdvantageSection,
  ClientReceive,
  EventCountdown,
  NewEvents,
  Packages,
  ProjectReport,
} from '@sipilot/components/Sections'
import { IconCircleCheck } from '@tabler/icons-react'
import Hero from './hero'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <div>
      <Hero />
      <Container>
        <AdvantageSection img={trustedJPG}>
          <Stack py="xl" spacing="xl">
            <Title>
              Mengapa kami{' '}
              <Text
                span
                color="black"
                bg="primary"
                px={2}
                className="title"
                style={{
                  borderRadius: 4,
                }}
              >
                terpercaya{' '}
              </Text>
            </Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate totam iusto obcaecati? Labore voluptatum sunt,
              aspernatur debitis id alias inventore hic omnis at eum veniam
              consequatur iste assumenda. Delectus, iure.
            </Text>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <Center>
                  <IconCircleCheck size={24} color={theme.colors.primary[5]} />
                </Center>
              }
            >
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>Submit a pull request once you are done</List.Item>
            </List>
          </Stack>
        </AdvantageSection>
        <AdvantageSection img={trustedJPG} reverse>
          <Stack py="xl" spacing="xl">
            <Title>
              Menemukan{' '}
              <Text
                span
                color="black"
                bg="primary"
                px={2}
                className="title"
                style={{
                  borderRadius: 4,
                }}
              >
                solusi
              </Text>{' '}
              untuk acara kalian
            </Title>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate totam iusto obcaecati? Labore voluptatum sunt,
              aspernatur debitis id alias inventore hic omnis at eum veniam
              consequatur iste assumenda. Delectus, iure.
            </Text>
            <Group noWrap grow>
              <Group>
                <RocketIcon
                  className="text-primary"
                  style={{
                    width: 40,
                  }}
                />
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, laudantium.
                </Text>
              </Group>
              <Group>
                <Analytic
                  className="text-primary"
                  style={{
                    width: 40,
                  }}
                />
                <Text>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus, laudantium.
                </Text>
              </Group>
            </Group>
            <Group position="right">
              <Button>CONTACT US</Button>
            </Group>
          </Stack>
        </AdvantageSection>
      </Container>
      <EventCountdown />
      <ProjectReport />
      <ClientReceive />
      <NewEvents />
      <Packages />
    </div>
  )
}
