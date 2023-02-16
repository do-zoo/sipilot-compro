import { Carousel } from '@mantine/carousel'
import {
  Anchor,
  AspectRatio,
  Box,
  Container,
  createStyles,
  Text,
  Title,
} from '@mantine/core'
import dayjs from 'dayjs'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { Blog } from 'types/res'

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

export function RecommendationBlog({ carousel }: { carousel: Blog[] }) {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <Box pos="relative">
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
          {carousel.map((v) => (
            <Carousel.Slide key={v.id}>
              <Anchor
                pos="relative"
                style={{
                  cursor: 'pointer',
                }}
                component={Link}
                href={`/blog/${v.slug}`}
                color="white"
              >
                <AspectRatio ratio={1920 / 1080} mx="auto">
                  <Image
                    src={v.thumbnail[0]}
                    fill
                    alt="Carousel-image"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </AspectRatio>
                <Box pos="absolute" bottom={0} w="100%" py="xl" px="xl">
                  <Text fw="bold">
                    {dayjs(v.published_at).format('DD/MM/YYYY')}
                  </Text>
                  <Title>{v.title}</Title>
                </Box>
              </Anchor>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
      <Box
        pos="absolute"
        h="40%"
        w="100%"
        left={0}
        top={'60%'}
        bg="white"
        sx={{
          zIndex: -1,
        }}
      />
    </Box>
  )
}

export default RecommendationBlog
