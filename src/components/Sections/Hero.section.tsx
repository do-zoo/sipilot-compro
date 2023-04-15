'use client'
import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Section } from 'types/res'

interface IProps {
  data: Section
}

export function Hero(props: IProps) {
  const { content, image, title } = props.data
  return (
    <Box>
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            left: '0',
            right: '0',
            zIndex: -1,

            display: 'block',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            filter: 'brightness(50%)',
            backgroundSize: 'cover',
          },
        }}
      >
        <Container pt={120} h="100%">
          <Stack justify="center" h="100%" spacing="xl">
            <Title color="white" align="center">
              {title}
            </Title>
            <Text align="center" color="white">
              {content.body}
            </Text>
            <Center>
              <Button component={'a'} href="#advantage">
                Lihat lebih lanjut
              </Button>
            </Center>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Hero
