import {
  Box,
  Button,
  Center,
  createStyles,
  List,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import IconCheckFilled from '@sipilot/assets/svg/check-filled.svg'

interface IPackageAltCard {
  popular?: boolean
}
const popularPackageStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    [theme.fn.largerThan('md')]: {},
  },
  card: {
    height: '100%',
    border: `1px solid ${theme.colors.primary[5]}`,
    boxShadow: `0px 7px 6px #F5F50D`,
    borderRadius: 20,
    backgroundColor: theme.colors.black[5],
  },
}))
export function PackageAltCard(props: IPackageAltCard) {
  const { popular } = props
  const { classes } = popularPackageStyles()
  const theme = useMantineTheme()

  return (
    <Box className={classes.root}>
      <Box className={classes.card} p="xl">
        <Stack align="center" px="xl" pb="md" spacing="xl">
          <Title
            order={2}
            align="center"
            className="font-open-sans"
            color="white"
            fw={popular ? 800 : undefined}
            pt="md"
          >
            Startup
          </Title>

          <Stack align="center" spacing={0}>
            <Text size={40} color="white" fw="bold" className="font-open-sans">
              Rp 10.000
            </Text>
            <Text size="lg" span color="white" className="font-open-sans">
              per month
            </Text>
          </Stack>
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
          <Box py="md" w="100%">
            <Button variant={popular ? 'filled' : 'outline'} fullWidth>
              <Text span size="sm">
                Learn More
              </Text>
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
