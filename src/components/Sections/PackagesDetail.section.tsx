import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  List,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import IconCheckFilled from '@sipilot/assets/svg/check-filled.svg'
import IconInOut from '@sipilot/assets/svg/in-out.svg'
import IconUser from '@sipilot/assets/svg/user.svg'
import IconLamp from '@sipilot/assets/svg/lamp.svg'

export function PackagesDetail() {
  const theme = useMantineTheme()

  return (
    <Box bg={'black'}>
      <Container py={60} size="lg">
        <Stack spacing={90}>
          <Grid gutter={36} align="center">
            {Array.from(Array(3).keys()).map((v, i) => (
              <Grid.Col key={i} md={4}>
                <Stack spacing={18} align="center">
                  <Text size={48} align="center">
                    BASIC
                  </Text>
                  <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <Center>
                        <IconCheckFilled
                          style={{
                            width: 18,
                          }}
                          color={theme.colors.primary[5]}
                        />
                      </Center>
                    }
                  >
                    <List.Item>
                      <Text color="white">
                        Clone or download repository from GitHub
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text color="white">
                        Clone or download repository from GitHub
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text color="white">
                        Clone or download repository from GitHub
                      </Text>
                    </List.Item>
                  </List>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
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
