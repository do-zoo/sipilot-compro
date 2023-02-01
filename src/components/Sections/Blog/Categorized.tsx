import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'

const TRANSITION_DURATION = 200
export function CategorizedBlog() {
  const [embla, setEmbla] = useState<Embla | null>(null)

  useAnimationOffsetEffect(embla, TRANSITION_DURATION)

  return (
    <Box bg="white">
      <Container py="xl">
        <Stack spacing="xl" py="xl">
          <Carousel
            slideGap="md"
            dragFree
            draggable
            containScroll="trimSnaps"
            maw="100%"
            slideSize="auto"
            mx="auto"
            align="start"
            withControls={false}
            getEmblaApi={setEmbla}
          >
            {Array.from(Array(4).keys()).map((v) => (
              <Carousel.Slide key={v}>
                <Button variant="outline" color="black">
                  Button
                </Button>
              </Carousel.Slide>
            ))}
          </Carousel>
          <Grid gutter="xl">
            {Array.from(Array(4).keys()).map((v) => (
              <Grid.Col sm={6} key={v}>
                <BlogCard />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default CategorizedBlog

const BlogCard = () => {
  return (
    <Card
      radius="xl"
      bg="black"
      sx={{
        cursor: 'pointer',
        boxShadow: '0px 25px 25px -13px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack>
        <Paper
          p={0}
          radius="lg"
          sx={{
            overflow: 'hidden',
            boxShadow: '0px 25px 25px -13px #000000',
          }}
        >
          <AspectRatio ratio={4 / 3} mx="auto">
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              // height={160}
              alt="Norway"
              fill
            />
          </AspectRatio>
        </Paper>
        <Text color="white">
          <Text weight="bold">Bali</Text>
          <Text weight="bold" size="sm">
            12 Sep 2022
          </Text>
          <Text lineClamp={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            blanditiis dolorem, accusamus, veritatis voluptatem molestias
            necessitatibus iure quod laudantium libero tempora quisquam, quis
            accusantium. Eaque vero minima quo optio eos.
          </Text>
        </Text>
      </Stack>
    </Card>
  )
}
