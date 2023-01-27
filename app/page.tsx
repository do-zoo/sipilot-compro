'use client'
import {
  Box,
  Center,
  Container,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import trustedJPG from '@sipilot/assets/jpg/trusted-image.jpg'
import DotsIllustration from '@sipilot/assets/svg/dots.svg'
import { IconCircleCheck } from '@tabler/icons-react'
import Image from 'next/image'
import Hero from './hero'

export default function Home() {
  const theme = useMantineTheme()

  return (
    <div>
      <Hero />
      <Container>
        <SimpleGrid
          cols={2}
          py={60}
          spacing="xl"
          breakpoints={[{ maxWidth: theme.breakpoints.md, cols: 1 }]}
        >
          <Stack py="xl">
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
          <Box py="xl" pl="xl" pos="relative">
            <DotsIllustration className="dots-illustration" />

            <Image
              src={trustedJPG}
              alt="trusted"
              className="relative"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  )
}
