import {
  AspectRatio,
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import exampleImage from '@sipilot/assets/jpg/trusted-image.jpg'
import Image from 'next/image'

export function NewEvents() {
  return (
    <Box bg="white">
      <Container py={60}>
        <Stack spacing={32}>
          <Stack>
            <Title align="center" color="black">
              New{' '}
              <Text
                span
                bg="primary"
                px={2}
                className="title"
                style={{
                  borderRadius: 4,
                }}
              >
                Events
              </Text>
            </Title>
            <Container size="sm">
              <Text align="center" color="black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda perferendis delectus aspernatur! Cum, expedita
                temporibus. Vel repudiandae architecto tenetur? Ducimus commodi
                qui enim harum, neque deleniti cupiditate incidunt aperiam.
                Dolor.
              </Text>
            </Container>
          </Stack>
          <Container size="md" style={{ width: '100%' }}>
            <Grid gutter="lg">
              {Array.from(Array(6).keys()).map((v, i) => (
                <Grid.Col key={i} span={4}>
                  <AspectRatio ratio={1}>
                    <Image src={exampleImage} fill alt="event-image" />
                  </AspectRatio>
                </Grid.Col>
              ))}
            </Grid>
          </Container>
        </Stack>
      </Container>
    </Box>
  )
}

export default NewEvents
