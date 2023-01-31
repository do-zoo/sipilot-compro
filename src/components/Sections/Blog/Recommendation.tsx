import React, { useRef } from 'react'
import {
  AspectRatio,
  Box,
  Container,
  createStyles,
  Text,
  Title,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}))

export function RecommendationBlog() {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <Container pt="lg">
      <Carousel
        loop
        slideGap="md"
        mx="auto"
        // height={200}
        classNames={classes}
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Box pos="relative">
            <AspectRatio ratio={1920 / 1080} mx="auto">
              <Image
                src={
                  'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80'
                }
                fill
                alt="Carousel-image"
                style={{
                  objectFit: 'cover',
                }}
              />
            </AspectRatio>
            <Box pos="absolute" bottom={0} w="100%" py="xl" px="xl">
              <Text fw="bold">Bali 10/12/2023</Text>
              <Title>Lorem, ipsum dolor.</Title>
            </Box>
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box pos="relative">
            <AspectRatio ratio={1920 / 1080} mx="auto">
              <Image
                src="https://images.unsplash.com/photo-1674909073818-3cfd684ed25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                fill
                alt="Carousel-image"
                style={{
                  objectFit: 'cover',
                }}
              />
            </AspectRatio>
            <Box pos="absolute" bottom={0} w="100%" py="xl" px="xl">
              <Text fw="bold">Bandung 10/12/2023</Text>
              <Title>Lorem, ipsum dolor.</Title>
            </Box>
          </Box>
        </Carousel.Slide>
        <Carousel.Slide>
          <Box pos="relative">
            <AspectRatio ratio={1920 / 1080} mx="auto">
              <Image
                src="https://images.unsplash.com/photo-1674909073723-e74e82810733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                fill
                alt="Carousel-image"
                style={{
                  objectFit: 'cover',
                }}
              />
            </AspectRatio>
            <Box pos="absolute" bottom={0} w="100%" py="xl" px="xl">
              <Text fw="bold">Jakarta 10/12/2023</Text>
              <Title>Lorem, ipsum dolor.</Title>
            </Box>
          </Box>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Container>
  )
}

export default RecommendationBlog
