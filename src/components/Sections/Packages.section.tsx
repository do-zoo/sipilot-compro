import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core'
import { PACKAGES } from '@sipilot/constants/packages'
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
                Don&apos;t miss the chance to level up your experience by
                choosing from the best packages on offer, complete with stunning
                facilities and excellent service from our team!
              </Text>
            </Container>
          </Stack>
          <Grid gutter="xs" align="center" pt="lg">
            {PACKAGES.map((v, i) => (
              <Grid.Col key={i} md={4}>
                <PackageCard data={v} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Packages
