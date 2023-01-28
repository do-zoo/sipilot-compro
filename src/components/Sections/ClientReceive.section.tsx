import { Container, Grid, Stack, Text, Title } from '@mantine/core'
import IconChart from '@sipilot/assets/svg/chart.svg'
import IconDesktop from '@sipilot/assets/svg/desktop.svg'
import IconMobileTab from '@sipilot/assets/svg/mobile-tab.svg'

const style = {
  height: 72,
}

const clientReceive = [
  {
    title: 'Lorem Ipsum Dolor',
    icon: <IconDesktop style={style} />,
    body: 'Doloribus ipsa possimus laborum temporibus iusto sequi totam mollitia consequatur incidunt natus voluptate ipsum et unde facilis, dicta fuga dolorum ullam ratione!',
  },
  {
    title: 'Lorem Ipsum',
    icon: <IconMobileTab style={style} />,
    body: 'Doloribus ipsa possimus laborum temporibus iusto sequi totam mollitia consequatur incidunt natus voluptate ipsum et unde facilis, dicta fuga dolorum ullam ratione!',
  },
  {
    title: 'Kepuasan Client',
    icon: <IconChart style={style} />,
    body: 'Doloribus ipsa possimus laborum temporibus iusto sequi totam mollitia consequatur incidunt natus voluptate ipsum et unde facilis, dicta fuga dolorum ullam ratione!',
  },
]

export function ClientReceive() {
  return (
    <Container py={60}>
      <Stack spacing={32}>
        <Stack>
          <Title align="center">
            What we{' '}
            <Text
              span
              bg="primary"
              px={2}
              color="black"
              className="title"
              style={{
                borderRadius: 4,
              }}
            >
              Offers
            </Text>
          </Title>
          <Container size="sm">
            <Text align="center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda perferendis delectus aspernatur! Cum, expedita
              temporibus. Vel repudiandae architecto tenetur? Ducimus commodi
              qui enim harum, neque deleniti cupiditate incidunt aperiam. Dolor.
            </Text>
          </Container>
        </Stack>
        <Container>
          <Grid gutter="lg">
            {clientReceive.map((v, i) => (
              <Grid.Col key={i} span={4}>
                <Stack spacing="lg" align="flex-start" p="sm">
                  {v.icon}
                  <Stack>
                    <Title order={3}>{v.title}</Title>
                    <Text>{v.body}</Text>
                  </Stack>
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Container>
  )
}

export default ClientReceive
