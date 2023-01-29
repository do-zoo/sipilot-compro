import {
  Avatar,
  Box,
  Container,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import IconQuotes from '@sipilot/assets/svg/quotes.svg'

export function Testimony() {
  return (
    <Box bg="primary">
      <Container py={60}>
        <Grid gutter="lg" align="center" pt="lg">
          {Array.from(Array(2).keys()).map((v, i) => (
            <Grid.Col key={i} md={6}>
              <TestimonyCard />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimony

// interface ITestimonyCard {
//   popular?: boolean
// }
const TestimonyCardStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    padding: `0px ${theme.spacing.lg}px`,
  },
  quotesBadge: {
    position: 'absolute',
    top: '0px',
    left: '50%',
    width: 80,
    transform: `translate(-50%,-50%)`,
  },
}))

function TestimonyCard() {
  const { classes } = TestimonyCardStyles()
  return (
    <Box bg="black" mt={32} className={classes.root}>
      <Container size="xs">
        <Stack align="center" py={36} px="md">
          <IconQuotes className={classes.quotesBadge}>&quot;</IconQuotes>
          <Text fs="italic" fw="lighter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            modi quis, vitae rem distinctio ut suscipit corrupti cum maxime,
            expedita sint commodi quia nisi. Dolorem nihil qui magni error.
            Quibusdam.
          </Text>
          <Group>
            <Avatar
              size={72}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              radius={40}
            />

            <div style={{ flex: 1 }}>
              <Title order={3} color="primary" weight={700}>
                Jhon Doe
              </Title>

              <Text color="dimmed" size="md">
                Founder & Leader
              </Text>
            </div>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}
