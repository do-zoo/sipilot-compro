import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'

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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda perferendis delectus aspernatur! Cum, expedita
                temporibus. Vel repudiandae architecto tenetur? Ducimus commodi
                qui enim harum, neque deleniti cupiditate incidunt aperiam.
                Dolor.
              </Text>
            </Container>
          </Stack>
          <Grid gutter="xs" align="center" pt="lg">
            {Array.from(Array(3).keys()).map((v, i) => (
              <Grid.Col key={i} span={4}>
                <PopularPackage popular={v === 1} />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Packages

interface IPopularPackage {
  popular?: boolean
}
const popularPackageStyles = createStyles(
  (theme, { popular }: IPopularPackage) => ({
    root: {
      position: 'relative',
      padding: popular ? `0px ${theme.spacing.lg}px` : `0px`,
    },
    card: {
      height: '100%',
      // position: 'relative',
      border: `2px solid ${theme.colors.primary[5]}`,
      padding: popular ? `${theme.spacing.lg}px 0px` : `0px`,
    },
    popularLabel: {
      position: 'absolute',
      top: '0px',
      left: '50%',
      transform: `translate(-50%,-50%)`,
      padding: '12px 20px',
      backgroundColor: theme.colors.primary[5],
      color: theme.black,
      borderRadius: '40px',
      fontSize: theme.fontSizes.xs,
      fontWeight: 'bold',
    },
  })
)

function PopularPackage(props: IPopularPackage) {
  const { popular } = props
  const { classes } = popularPackageStyles(props)
  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Stack align="center" py="lg" px="md">
          {popular && <Box className={classes.popularLabel}>MOST POPULAR</Box>}
          <Box>
            <Title
              align="center"
              className="font-open-sans"
              color="primary"
              fw={popular ? 800 : undefined}
            >
              Startup
            </Title>
            <Text align="center" className="font-open-sans">
              For Everyone
            </Text>
          </Box>
          <Text size={44} color="primary" fw="bold" className="font-open-sans">
            $10{' '}
            <Text
              size="md"
              span
              fw="normal"
              color="white"
              className="font-open-sans"
            >
              / month
            </Text>
          </Text>
          <Stack spacing="sm">
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Stack>
          <Button variant={popular ? 'filled' : 'outline'}> CHOOSE PLAN</Button>
        </Stack>
      </Box>
    </Box>
  )
}
