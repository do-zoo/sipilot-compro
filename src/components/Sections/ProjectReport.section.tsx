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
    value: 'Client yang sudah bekerja sama',
    label: 1.7,
    symbol: 'k',
  },
  {
    value: 'Project yang sudah di lakukan',
    label: 50,
    symbol: '+',
  },
  {
    value: 'Kepuasan Client',
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
        <Container size="sm">
          <Text align="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            perferendis delectus aspernatur! Cum, expedita temporibus. Vel
            repudiandae architecto tenetur? Ducimus commodi qui enim harum,
            neque deleniti cupiditate incidunt aperiam. Dolor.
          </Text>
        </Container>
        <Container size="md">
          <Grid>
            {projectReport.map((v, i) => (
              <Grid.Col key={i} span={4}>
                <Center>
                  <Group noWrap>
                    <Text size={60} weight="bold" className="font-ubuntu">
                      {v.label}
                      <Text span color="primary">
                        {v.symbol}
                      </Text>
                    </Text>
                    <Text>{v.value}</Text>
                  </Group>
                </Center>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Container>
  )
}

export default ProjectReport
