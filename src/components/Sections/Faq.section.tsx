import {
  Box,
  Card,
  Container,
  Grid,
  List,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import Image from 'next/image'
import trustedJPG from '@sipilot/assets/jpg/trusted-image.jpg'

export function FAQ() {
  return (
    <Box bg={'#3C3C3C'}>
      <Container py={60} size="lg">
        <Grid gutter={32}>
          <Grid.Col span={12} md={7}>
            <Stack>
              <Title>FAQ</Title>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                sed ab amet, labore saepe magni maiores dolorem consequuntur ut!
                Praesentium ratione nostrum, quibusdam perferendis maxime atque
                facere voluptatibus blanditiis possimus.
              </Text>
              <List spacing="sm" withPadding>
                <List.Item
                  sx={(theme) => ({
                    '::marker': {
                      color: theme.white,
                    },
                    marginLeft: '-16px',
                  })}
                >
                  <Text color="white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi culpa, dicta vitae inventore quam nam nulla
                    consequatur deleniti unde in omnis sit blanditiis ab quaerat
                    doloremque magnam modi libero? Ratione?
                  </Text>
                </List.Item>
                <List.Item
                  sx={(theme) => ({
                    '::marker': {
                      color: theme.white,
                    },
                    marginLeft: '-16px',
                  })}
                >
                  <Text color="white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi culpa, dicta vitae inventore quam nam nulla
                    consequatur deleniti unde in omnis sit blanditiis ab quaerat
                    doloremque magnam modi libero? Ratione?
                  </Text>
                </List.Item>
                <List.Item
                  sx={(theme) => ({
                    '::marker': {
                      color: theme.white,
                    },
                    marginLeft: '-16px',
                  })}
                >
                  <Text color="white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi culpa, dicta vitae inventore quam nam nulla
                    consequatur deleniti unde in omnis sit blanditiis ab quaerat
                    doloremque magnam modi libero? Ratione?
                  </Text>
                </List.Item>
                <List.Item
                  sx={(theme) => ({
                    '::marker': {
                      color: theme.white,
                    },
                    marginLeft: '-16px',
                  })}
                >
                  <Text color="white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eligendi culpa, dicta vitae inventore quam nam nulla
                    consequatur deleniti unde in omnis sit blanditiis ab quaerat
                    doloremque magnam modi libero? Ratione?
                  </Text>
                </List.Item>
              </List>
              {/* <Box pl="md">
              </Box> */}
            </Stack>
          </Grid.Col>
          <Grid.Col span={12} md={5}>
            <Stack>
              <Card pos="relative" pb={'100%'} radius="xl" bg="transparent">
                <Image
                  src={trustedJPG}
                  alt="trusted"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}

export default FAQ
