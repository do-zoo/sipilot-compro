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
import Analytic from '@sipilot/assets/svg/analytic.svg'
import RocketIcon from '@sipilot/assets/svg/rocket.svg'
import {
  AdvantageSection,
  ClientReceive,
  Clients,
  EventCountdown,
  Hero,
  NewEvents,
  Packages,
  ProjectReport,
  Testimony,
} from '@sipilot/components/Sections'
import { IconCircleCheck } from '@tabler/icons-react'
import { useMemo } from 'react'
import { HomeData } from 'types/res'
import Navbar from './navbar'

interface Props {
  data: HomeData
}
function Content(props: Props) {
  const { data } = props
  console.log(data)

  const theme = useMantineTheme()
  const heroData = useMemo(() => {
    return data?.['1']
  }, [data])

  const trustedData1 = useMemo(() => {
    return data?.['2']
  }, [data])

  const trustedData2 = useMemo(() => {
    return data?.['3']
  }, [data])

  return (
    <div>
      <Navbar />
      <Hero data={heroData} />
      <Container>
        <AdvantageSection data={trustedData1}>
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
              center
              icon={
                <Center>
                  <IconCircleCheck size={24} color={theme.colors.primary[5]} />
                </Center>
              }
            >
              <List.Item>
                <Text color="white">
                  Clone or download repository from GitHub
                </Text>
              </List.Item>
              <List.Item color="white">
                <Text color="white">Install dependencies with yarn</Text>
              </List.Item>
              <List.Item color="white">
                <Text color="white">
                  To start development server run npm start command
                </Text>
              </List.Item>
              <List.Item color="white">
                <Text color="white">
                  Run tests to make sure your changes do not break the build
                </Text>
              </List.Item>
              <List.Item color="white">
                <Text color="white">
                  Submit a pull request once you are done
                </Text>
              </List.Item>
            </List>
          </Stack>
        </AdvantageSection>
        <AdvantageSection data={trustedData2} reverse>
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
      <Testimony />
      <Clients />
    </div>
  )
}

export default Content
