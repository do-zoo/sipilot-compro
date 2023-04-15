import { Box, createStyles, Stack, Text, Title, Button } from '@mantine/core'
import Link from 'next/link'

export type Package = {
  label: string
  desc: string
  body: string[]
  isPopular?: boolean
}

interface IPopularPackage {
  data: Package
}
const popularPackageStyles = createStyles(
  (theme, { data: { isPopular } }: IPopularPackage) => ({
    root: {
      position: 'relative',
      [theme.fn.largerThan('md')]: {
        padding: isPopular ? `0px ${theme.spacing.lg}px` : undefined,
      },
    },
    card: {
      height: '100%',
      // position: 'relative',
      border: `2px solid ${theme.colors.primary[5]}`,
      marginTop: 32,
      paddingTop: isPopular ? `${theme.spacing.lg}px` : undefined,
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
  const { data } = props

  const { label, isPopular, body, desc } = data
  const { classes } = popularPackageStyles(props)
  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Stack align="center" py="lg" px="md">
          {isPopular && (
            <Box className={classes.popularLabel}>MOST POPULAR</Box>
          )}
          <Box>
            <Title
              order={2}
              align="center"
              className="font-open-sans"
              color="primary"
              fw={isPopular ? 800 : undefined}
            >
              {label}
            </Title>
            <Text
              align="center"
              className="font-open-sans"
              transform="capitalize"
              fw={300}
            >
              {desc}
            </Text>
          </Box>
          {/* <Text size={44} color="primary" fw="bold" className="font-open-sans">
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
          </Text> */}
          <Stack spacing="sm" mb={'md'}>
            {body.map((v, i) => (
              <Text key={i} align="center">
                {v}
              </Text>
            ))}
          </Stack>
          <Button
            variant={isPopular ? 'filled' : 'outline'}
            component={Link}
            href="https://wa.me/6281312233521?text=Hi%20Sipilot...%20"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHOOSE PLAN
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
