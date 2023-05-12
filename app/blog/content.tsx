'use client'
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  CategorizedBlog,
  RecommendationBlog,
} from '@sipilot/components/Sections/Blog'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from 'types/res'

interface IProps {
  carousel: Blog[]
  random: Blog
}

export default function BlogContent(props: IProps) {
  const { carousel, random } = props

  return (
    <Box>
      <RecommendationBlog carousel={carousel as Blog[]} />
      <CategorizedBlog />

      {random && (
        <Container py={32}>
          <Grid gutter={32}>
            <Grid.Col span={12} sm={5}>
              <Card
                pos="relative"
                mih={300}
                h={'100%'}
                radius="xl"
                bg="transparent"
              >
                <Image
                  src={random.thumbnail[0]}
                  alt="thumbnail"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid.Col>
            <Grid.Col span={12} sm={7}>
              <Stack>
                <Title>{random.title}</Title>
                <Title order={3}>
                  {dayjs(random.published_at).format('DD MMMM YYYY')}
                </Title>
                <Text
                  lineClamp={12}
                  dangerouslySetInnerHTML={{ __html: random.body }}
                />
                <Box>
                  <Button
                    component={Link}
                    href={`/post/${random.slug}`}
                    scroll={false}
                  >
                    Pelajari Lebih lanjut
                  </Button>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      )}
    </Box>
  )
}
