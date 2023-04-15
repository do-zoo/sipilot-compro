import {
  Center,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'

const projectReport = [
  {
    value: 'Clients who have worked together',
    label: 1.7,
    symbol: 'k',
  },
  {
    value: 'Projects that have been done',
    label: 50,
    symbol: '+',
  },
  {
    value: 'Client Satisfaction',
    label: 95,
    symbol: '%',
  },
]

export function ProjectReport() {
  return (
    <Container py={60}>
      <Stack spacing={32}>
        <Title align="center">
          Collect Your{' '}
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
            Data
          </Text>
          , in the Right Way
        </Title>
        {/* <Container size="sm">
          <Text align="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            perferendis delectus aspernatur! Cum, expedita temporibus. Vel
            repudiandae architecto tenetur? Ducimus commodi qui enim harum,
            neque deleniti cupiditate incidunt aperiam. Dolor.
          </Text>
        </Container> */}
        <Grid>
          {projectReport.map((v, i) => (
            <Grid.Col key={i} span={4}>
              <Center>
                <Group
                  noWrap
                  sx={(theme) => ({
                    flexDirection: 'column',
                    gap: 4,
                    [theme.fn.largerThan('md')]: {
                      gap: theme.spacing.md,
                      flexDirection: 'row',
                    },
                  })}
                >
                  <Text
                    weight="bold"
                    className="font-ubuntu"
                    sx={(theme) => ({
                      [theme.fn.largerThan('md')]: {
                        fontSize: 60,
                      },
                      fontSize: 32,
                    })}
                  >
                    {v.label}
                    <Text span color="primary">
                      {v.symbol}
                    </Text>
                  </Text>
                  <Text
                    sx={(theme) => ({
                      [theme.fn.largerThan('md')]: {
                        textAlign: 'left',
                      },
                      textAlign: 'center',
                    })}
                  >
                    {v.value}
                  </Text>
                </Group>
              </Center>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  )
}

export default ProjectReport
