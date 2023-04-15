import { Box, Container, Grid, Group, Stack, Text } from '@mantine/core'
import IconInOut from '@sipilot/assets/svg/in-out.svg'
import IconLamp from '@sipilot/assets/svg/lamp.svg'
import IconUser from '@sipilot/assets/svg/user.svg'

export function PackagesDetail() {
  return (
    <Box bg={'black'}>
      <Container py={60} size="lg">
        <Stack spacing={90}>
          <Grid gutter="xl" align="center">
            <Grid.Col md={4}>
              <Group noWrap align="center">
                <IconInOut
                  style={{
                    width: 115,
                    flex: '1 0 auto',
                  }}
                />
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, repellat dignissimos?
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col md={4}>
              <Group noWrap align="center">
                <IconUser
                  style={{
                    width: 115,
                    flex: '1 0 auto',
                  }}
                />
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, repellat dignissimos?
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col md={4}>
              <Group noWrap align="center">
                <IconLamp
                  style={{
                    width: 115,
                    flex: '1 0 auto',
                  }}
                />
                <Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, repellat dignissimos?
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default PackagesDetail
