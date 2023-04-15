import { Container, Grid, Stack, Text, Title } from '@mantine/core'
import { PACKAGES } from '@sipilot/constants/packages'
import { PackageAltCard } from '../Cards/packages'

export function PackagesAlt() {
  return (
    <Stack bg={'#3c3c3c'} justify="center" mih="calc(100vh - 80px)">
      <Container py={60} size="lg">
        <Stack spacing={32}>
          <Stack>
            <Title align="center">Packages</Title>
            <Container size="sm">
              <Text align="center">
                Don&apos;t miss the chance to level up your experience by
                choosing from the best packages on offer, complete with stunning
                facilities and excellent service from our team!
              </Text>
            </Container>
          </Stack>
          <Grid gutter="xl" align="stretch">
            {PACKAGES.map((v, i) => (
              <Grid.Col key={i} md={4}>
                <PackageAltCard data={v} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  )
}

export default PackagesAlt
