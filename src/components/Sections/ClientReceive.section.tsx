import {
  Box,
  Container,
  createStyles,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import IconCompany from '@sipilot/assets/svg/company.svg'
import IconEducationalSeminars from '@sipilot/assets/svg/educational-seminars.svg'
import IconAirplane from '@sipilot/assets/svg/airplane.svg'

const style = {
  height: '100%',
}

const clientReceive = [
  {
    title: 'Sipilot Pilot Experience',
    icon: <IconCompany style={style} />,
    body: 'An activity for lovers of the aviation world to experience being a Pilot. Packaged in an interesting and exciting way, this event is expected to answer questions about Pilot jobs and of course directly feel the sensation of flying around the city like a Pilot.',
  },
  {
    title: 'Educational Seminars',
    icon: <IconEducationalSeminars style={style} />,
    body: 'A learning seminar about the world of aviation that will discuss materials that are currently being discussed, job preparation, or refreshment materials for flight school graduates.',
  },
  {
    title: 'Aviation-Themed Events',
    icon: <IconAirplane style={style} />,
    body: 'In addition to hosting our events, we also offer our clients the opportunity to hire an Event Organizer to help design aviation-themed events.',
  },
]

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    height: 36,
    [theme.fn.largerThan('md')]: {
      height: 72,
    },
  },
}))

export function ClientReceive() {
  const { classes } = useStyles()
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
          {/* <Container size="sm">
            <Text align="center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda perferendis delectus aspernatur! Cum, expedita
              temporibus. Vel repudiandae architecto tenetur? Ducimus commodi
              qui enim harum, neque deleniti cupiditate incidunt aperiam. Dolor.
            </Text>
          </Container> */}
        </Stack>
        <Container>
          <Grid gutter="lg">
            {clientReceive.map((v, i) => (
              <Grid.Col key={i} md={4}>
                <Stack spacing="lg" align="flex-start" p="sm">
                  <Box className={classes.iconWrapper}>{v.icon}</Box>
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
