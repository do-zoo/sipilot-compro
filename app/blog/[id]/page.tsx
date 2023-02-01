'use client'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import {
  AspectRatio,
  Box,
  Card,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from './navbar'

export default function Blog() {
  // const theme = useMantineTheme()
  const [embla, setEmbla] = useState<Embla | null>(null)

  useAnimationOffsetEffect(embla, 200)

  return (
    <Box>
      <Navbar />
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="trusted"
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
              <Title align="right">Lorem ipsum dolor sit amet.</Title>
              <Text align="right" size="lg" fw="bold">
                Jakarta, 15 Oktober 1998
              </Text>
            </Text>
            <Stack>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, repellendus molestiae! Consequatur optio a velit in
                corrupti necessitatibus adipisci quam reiciendis at! Illo, aut.
                Nam repellendus error, commodi sint quidem, consectetur nesciunt
                temporibus cum voluptatibus iste repudiandae numquam sunt eaque
                illo vero? Libero ad suscipit quaerat at, deserunt minus
                placeat, numquam porro eos earum labore aspernatur animi omnis
                praesentium. Laboriosam, deserunt quo! Illum, nemo? Dignissimos
                placeat expedita eius fuga! Ipsam ratione molestiae sed quae
                laboriosam, inventore fugit porro quidem quo esse non, soluta
                nemo vel dolor iste nobis, dolorum repellat eum aspernatur
                deserunt. Labore est voluptate, harum possimus sit fugit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, repellendus molestiae! Consequatur optio a velit in
                corrupti necessitatibus adipisci quam reiciendis at! Illo, aut.
                Nam repellendus error, commodi sint quidem, consectetur nesciunt
                temporibus cum voluptatibus iste repudiandae numquam sunt eaque
                illo vero? Libero ad suscipit quaerat at, deserunt minus
                placeat, numquam porro eos earum labore aspernatur animi omnis
                praesentium. Laboriosam, deserunt quo! Illum, nemo? Dignissimos
                placeat expedita eius fuga! Ipsam ratione molestiae sed quae
                laboriosam, inventore fugit porro quidem quo esse non, soluta
                nemo vel dolor iste nobis, dolorum repellat eum aspernatur
                deserunt. Labore est voluptate, harum possimus sit fugit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, repellendus molestiae! Consequatur optio a velit in
                corrupti necessitatibus adipisci quam reiciendis at! Illo, aut.
                Nam repellendus error, commodi sint quidem, consectetur nesciunt
                temporibus cum voluptatibus iste repudiandae numquam sunt eaque
                illo vero? Libero ad suscipit quaerat at, deserunt minus
                placeat, numquam porro eos earum labore aspernatur animi omnis
                praesentium. Laboriosam, deserunt quo! Illum, nemo? Dignissimos
                placeat expedita eius fuga! Ipsam ratione molestiae sed quae
                laboriosam, inventore fugit porro quidem quo esse non, soluta
                nemo vel dolor iste nobis, dolorum repellat eum aspernatur
                deserunt. Labore est voluptate, harum possimus sit fugit!
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, repellendus molestiae! Consequatur optio a velit in
                corrupti necessitatibus adipisci quam reiciendis at! Illo, aut.
                Nam repellendus error, commodi sint quidem, consectetur nesciunt
                temporibus cum voluptatibus iste repudiandae numquam sunt eaque
                illo vero? Libero ad suscipit quaerat at, deserunt minus
                placeat, numquam porro eos earum labore aspernatur animi omnis
                praesentium. Laboriosam, deserunt quo! Illum, nemo? Dignissimos
                placeat expedita eius fuga! Ipsam ratione molestiae sed quae
                laboriosam, inventore fugit porro quidem quo esse non, soluta
                nemo vel dolor iste nobis, dolorum repellat eum aspernatur
                deserunt. Labore est voluptate, harum possimus sit fugit!
              </Text>
            </Stack>
          </Stack>
        </Container>
        <Box bg="#3C3C3C" py={32}>
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
        </Box>
      </Stack>
    </Box>
  )
}
