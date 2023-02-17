import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Box,
  Container,
  createStyles,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import IconQuotes from '@sipilot/assets/svg/quotes.svg'
import { Section } from 'types/res'

interface IProps {
  data: Section
}

export function Testimony(props: IProps) {
  const { data } = props
  if (!data?.content?.reviews) {
    return null
  }
  return (
    <Box bg="primary">
      <Container py={60}>
        <Carousel
          withIndicators
          // height={200}
          slideSize="50%"
          breakpoints={[{ maxWidth: 481, slideSize: '100%' }]}
          slideGap="md"
          loop
          align="start"
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
            indicator: {
              width: 12,
              height: 4,
              transition: 'width 250ms ease',

              '&[data-active]': {
                width: 40,
              },
            },
          }}
        >
          {data?.content?.reviews.map((v, i) => (
            <Carousel.Slide key={i} pt="lg">
              <TestimonyCard review={v} />
            </Carousel.Slide>
          ))}
        </Carousel>
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

interface ITestimonyCardProps {
  review: Record<'name' | 'job' | 'message' | 'avatar', string>
}

function TestimonyCard(props: ITestimonyCardProps) {
  const { review } = props
  const { classes } = TestimonyCardStyles()
  return (
    <Box bg="black" mt={32} h="100%" className={classes.root}>
      <Container size="xs">
        <Stack align="center" py={36} px="md">
          <IconQuotes className={classes.quotesBadge}>&quot;</IconQuotes>
          <Text fs="italic" fw="lighter">
            {review.message}
          </Text>
          <Group>
            <Avatar size={72} src={review.avatar} radius={40} />

            <div style={{ flex: 1 }}>
              <Title order={3} color="primary" weight={700}>
                {review.name}
              </Title>

              <Text color="dimmed" size="md">
                {review.job}
              </Text>
            </div>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}
