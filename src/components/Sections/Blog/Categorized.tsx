import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { Box, Button, Container, Grid, Stack } from '@mantine/core'
import { useState } from 'react'

export function CategorizedBlog() {
  const TRANSITION_DURATION = 200
  const [embla, setEmbla] = useState<Embla | null>(null)

  useAnimationOffsetEffect(embla, TRANSITION_DURATION)

  return (
    <Box bg="white" mt={-268} pt={268}>
      <Container py="xl">
        <Stack>
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
            <Carousel.Slide>
              <Button variant="default">Button</Button>
            </Carousel.Slide>
            <Carousel.Slide>
              <Button variant="default">Button</Button>
            </Carousel.Slide>
            <Carousel.Slide>
              <Button variant="default">Button</Button>
            </Carousel.Slide>
            <Carousel.Slide>
              <Button variant="default">Button</Button>
            </Carousel.Slide>
          </Carousel>
          <Grid>
            <Grid.Col md={6}>Asu</Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default CategorizedBlog
