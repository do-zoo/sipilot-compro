import { Box, createStyles, Stack, Text, Title } from '@mantine/core'

interface IPopularPackage {
  popular?: boolean
}
const popularPackageStyles = createStyles(
  (theme, { popular }: IPopularPackage) => ({
    root: {
      position: 'relative',
      [theme.fn.largerThan('md')]: {
        padding: popular ? `0px ${theme.spacing.lg}px` : undefined,
      },
    },
    card: {
      height: '100%',
      // position: 'relative',
      border: `2px solid ${theme.colors.primary[5]}`,
      marginTop: 32,
      paddingTop: popular ? `${theme.spacing.lg}px` : undefined,
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

export function PackageCard(props: IPopularPackage) {
  const { popular } = props
  const { classes } = popularPackageStyles(props)
  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Stack align="center" py="lg" px="md">
          {popular && <Box className={classes.popularLabel}>MOST POPULAR</Box>}
          <Box>
            <Title
              order={2}
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
          <Stack spacing="sm" mb={'md'}>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Stack>
          {/* <Button variant={popular ? 'filled' : 'outline'}> CHOOSE PLAN</Button> */}
        </Stack>
      </Box>
    </Box>
  )
}
