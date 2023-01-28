import { Box, Container, Grid, Stack, Title } from '@mantine/core'
import Image from 'next/image'
import clientLogo from '@sipilot/assets/clients/client-1.png'
import { Text } from '@mantine/core'

export function Clients() {
  return (
    <Box bg="white">
      <Container py={60}>
        <Stack>
          <Title color="black" align="center">
            Our{' '}
            <Text
              span
              bg="primary"
              px={2}
              className="title"
              style={{
                borderRadius: 4,
              }}
            >
              Clients
            </Text>
          </Title>
          <Grid gutter="lg" align="center" pt="lg">
            {Array.from(Array(6).keys()).map((v, i) => (
              <Grid.Col key={i} span={2}>
                <Image src={clientLogo} alt="image" />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Clients

// interface ITestimonyCard {
//   popular?: boolean
// }
