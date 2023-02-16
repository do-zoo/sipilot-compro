'use client'
import { AspectRatio, Box, Container, Stack, Text, Title } from '@mantine/core'
import dayjs from 'dayjs'
import Image from 'next/image'
import { Blog } from 'types/res'

interface IProps {
  data: Blog
}

export default function BlogSlugContent(props: IProps) {
  const { data } = props

  // const [embla, setEmbla] = useState<Embla | null>(null)

  // useAnimationOffsetEffect(embla, 200)

  return (
    <Box>
      <AspectRatio ratio={16 / 9}>
        <Image
          src={data.thumbnail[0]}
          alt="thumbnail"
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </AspectRatio>

      <Stack spacing={32}>
        <Container py={32}>
          <Stack spacing="lg">
            <Text>
              <Title align="right">{data.title}</Title>
              <Text align="right" size="lg" fw="bold">
                {dayjs(data.published_at).format('DD MMMM YYYY')}
              </Text>
            </Text>
            <Stack>
              <Text dangerouslySetInnerHTML={{ __html: data.body }} />
            </Stack>
          </Stack>
        </Container>
        {/* <Box bg="#3C3C3C" py={32}>
          <Container>
            <Stack>
              <Title>Photo</Title>
              <Carousel
                slideGap="md"
                dragFree
                draggable
                containScroll="trimSnaps"
                maw="100%"
                w="100%"
                slideSize="auto"
                mx="auto"
                align="start"
                withIndicators
                getEmblaApi={setEmbla}
              >
                {Array.from(Array(6).keys()).map((v) => (
                  <Carousel.Slide key={v}>
                    <Card p={0} miw={300}>
                      <AspectRatio ratio={4 / 3}>
                        <Image
                          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                          alt="trusted"
                          fill
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </AspectRatio>
                    </Card>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Stack>
          </Container>
        </Box> */}
      </Stack>
    </Box>
  )
}
