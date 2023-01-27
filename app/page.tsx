'use client'
import {
  Box,
  Container,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'
import Hero from './hero'

export default function Home() {
  // const theme = useMantineTheme()
  // console.log(theme)

  return (
    <div>
      <Hero />
      <Container>
        <Group py="xl">
          <Stack>
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
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCircleCheck size={16} />
                </ThemeIcon>
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
              <List.Item
                icon={
                  <ThemeIcon color="blue" size={24} radius="xl">
                    <IconCircleDashed size={16} />
                  </ThemeIcon>
                }
              >
                Submit a pull request once you are done
              </List.Item>
            </List>
          </Stack>
          <Box></Box>
        </Group>
      </Container>
    </div>
  )
}
