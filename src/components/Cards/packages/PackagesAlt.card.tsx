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
import Link from 'next/link'
export type PackageAlt = {
  label: string
  body: string[]
}

interface IProps {
  data: PackageAlt
}

const popularPackageStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    height: '100%',
  },
  card: {
    height: '100%',
    border: `1px solid ${theme.colors.primary[5]}`,
    boxShadow: `0px 7px 6px #F5F50D`,
    borderRadius: 20,
    backgroundColor: theme.colors.black[5],
  },
}))
export function PackageAltCard(props: IProps) {
  const { data } = props
  const { body, label } = data
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
            // fw={popular ? 800 : undefined}
            pt="md"
          >
            {label}
          </Title>

          {/* <Stack align="center" spacing={0}>
            <Text size={40} color="white" fw="bold" className="font-open-sans">
              Rp 10.000
            </Text>
            <Text size="lg" span color="white" className="font-open-sans">
              per month
            </Text>
          </Stack> */}
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
            {body.map((v, i) => (
              <List.Item key={i}>
                <Text color="white">{v}</Text>
              </List.Item>
            ))}
          </List>
          <Box py="md" w="100%">
            <Button
              fullWidth
              component={Link}
              href="https://wa.me/6281312233521?text=Hi%20Sipilot...%20"
              target="_blank"
              rel="noopener noreferrer"
            >
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
