import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core'
import { PackageCard } from '../Cards/packages'

export function Packages() {
  return (
    <Box>
      <Container py={60}>
        <Stack spacing={32}>
          <Stack>
            <Title align="center">
              Our{' '}
              <Text
                span
                color="black"
                bg="primary"
                px={2}
                className="title"
                style={{
                  borderRadius: 4,
                }}
              >
                Packages
              </Text>
            </Title>
            <Container size="sm">
              <Text align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda perferendis delectus aspernatur! Cum, expedita
                temporibus.
              </Text>
            </Container>
          </Stack>
          <Grid gutter="xs" align="center" pt="lg">
            {Array.from(Array(3).keys()).map((v, i) => (
              <Grid.Col key={i} md={4}>
                <PackageCard popular={v === 1} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Packages
