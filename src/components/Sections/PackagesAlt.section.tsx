import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core'
import { PackageAltCard } from '../Cards/packages'

export function PackagesAlt() {
  return (
    <Box bg={'#3c3c3c'}>
      <Container py={60} size="lg">
        <Stack spacing={32}>
          <Stack>
            <Title align="center">Packages</Title>
            <Container size="sm">
              <Text align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda perferendis delectus aspernatur! Cum, expedita
                temporibus.
              </Text>
            </Container>
          </Stack>
          <Grid gutter="xl" align="center">
            {Array.from(Array(3).keys()).map((v, i) => (
              <Grid.Col key={i} md={4}>
                <PackageAltCard popular={v === 1} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default PackagesAlt
