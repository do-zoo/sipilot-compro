'use client'
import { Button, Center, Text } from '@mantine/core'
import { BackgroundImage, Box, Container, Stack, Title } from '@mantine/core'
import { Section } from 'types/res'

interface IProps {
  data: Section
}

export function Hero(props: IProps) {
  const { content, image, title } = props.data
  return (
    <Box>
      <BackgroundImage src={image} radius="sm" h={725}>
        <Container pt={120} h="100%">
          <Stack justify="center" h="100%" spacing="xl">
            <Title color="white" align="center">
              {title}
            </Title>
            <Text align="center" color="white">
              {content.body}
            </Text>
            <Center>
              <Button>Lihat lebih lanjut</Button>
            </Center>
          </Stack>
        </Container>
      </BackgroundImage>
    </Box>
  )
}

export default Hero
