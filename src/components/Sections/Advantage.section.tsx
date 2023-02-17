import {
  Box,
  Center,
  createStyles,
  Grid,
  Image,
  List,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import DotsIllustration from '@sipilot/assets/svg/dots.svg'
import { IconCircleCheck } from '@tabler/icons-react'
// import Image from 'next/image'
import { Content, Section } from 'types/res'

const useStyles = createStyles((theme, { reverse }: { reverse?: boolean }) => ({
  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  advantageWrapper: {
    '>*': {
      maxWidth: 'calc(50% - 12px)',
    },
    flexDirection: reverse ? 'row-reverse' : undefined,
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
      '>*': {
        width: '100%',
        maxWidth: '100%',
      },
    },
  },
}))

interface IProps {
  data: Section
  reverse?: boolean
}

export function AdvantageSection(props: IProps) {
  const { data, reverse } = props
  const { classes } = useStyles({
    reverse,
  })

  const { image, title, content } = data
  return (
    <Grid
      py={60}
      // spacing="xl"
      // align="flex-start"
      // grow
      pos="relative"
      // noWrap
      className={classes.advantageWrapper}
    >
      <Grid.Col md={6}>
        <Stack py="xl" spacing="xl">
          <Title>{title}</Title>
          <Text>{content.body}</Text>
          <ContentList data={data.content} />
        </Stack>
      </Grid.Col>
      <Grid.Col md={6}>
        <Box
          py="xl"
          pl="xl"
          pos="relative"
          style={{
            overflow: 'hidden',
            height: 'content',
          }}
          mih={400}
          h="100%"
        >
          <DotsIllustration className="dots-illustration" />
          <Box pos="absolute">
            <Image
              src={image}
              alt="trusted"
              className="full-img"
              style={{
                objectFit: 'cover',
                position: 'relative',
                top: '50%',
                transform: 'translateY(-50%)',
                // verticalAlign: 'middle',
              }}
            />
          </Box>
        </Box>
      </Grid.Col>
    </Grid>
  )
}

function ContentList({ data }: { data: Content }) {
  const { list, type } = data
  const theme = useMantineTheme()

  if (type === 'list') {
    return (
      <List
        spacing="xs"
        center
        styles={() => ({
          itemWrapper: {
            alignItems: 'flex-start !important',
          },
        })}
        icon={
          <Center>
            <IconCircleCheck size={24} color={theme.colors.primary[5]} />
          </Center>
        }
      >
        {list?.map((val, i) => {
          if (val?.body) {
            return (
              <List.Item key={i}>
                <Text color="white">{val.body}</Text>
              </List.Item>
            )
          }
        })}
      </List>
    )
  }
  if (type === 'list-with-icon') {
    return (
      <Grid gutter="xl">
        {list?.map((val, i) => {
          if (val?.body) {
            return (
              <Grid.Col key={i} md={6}>
                <Stack spacing="xs">
                  <i
                    className={`pi pi-${val.icon} text-primary `}
                    style={{
                      fontSize: 40,
                    }}
                  />
                  <Text>{val.body}</Text>
                </Stack>
              </Grid.Col>
            )
          }
        })}
      </Grid>
    )
  }
  return <></>
}

export default AdvantageSection
