'use client'
import { Button, Center, Text } from '@mantine/core'
import { BackgroundImage, Box, Container, Stack, Title } from '@mantine/core'

function Hero() {
  return (
    <Box>
      <BackgroundImage src={'/assets/jpg/main-bg.jpg'} radius="sm" h={725}>
        <Container pt={120} h="100%">
          <Stack justify="center" h="100%" spacing="xl">
            <Title color="white" align="center">
              Penyelenggara Pertemuan, Perjalanan Intensif, DST
            </Title>
            <Text align="center" color="white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              iure voluptates nulla aspernatur error rerum, possimus autem,
              reprehenderit excepturi enim odio cupiditate libero eos eligendi
              sed amet. Incidunt, similique debitis?
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
