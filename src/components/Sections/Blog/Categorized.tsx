import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Stack,
  Text,
  LoadingOverlay,
} from '@mantine/core'
import useCategories from '@sipilot/hooks/useCategories'
import useCategorizedBlog from '@sipilot/hooks/useCategorizedBlog'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Blog } from 'types/res'

const TRANSITION_DURATION = 200
export function CategorizedBlog() {
  const [embla, setEmbla] = useState<Embla | null>(null)
  useAnimationOffsetEffect(embla, TRANSITION_DURATION)

  const [selectedCategory, setSelectedCategory] = useState('')

  const { data: categories } = useCategories()
  console.log(selectedCategory)

  const { data: blogs, isFetching } = useCategorizedBlog({
    params: {
      perPage: 10,
      'filter.category.title': selectedCategory,
    },
  })

  return (
    <Box bg="white">
      <Container py="xl">
        <Stack spacing="xl" py="xl">
          <Carousel
            slideGap="md"
            dragFree
            draggable
            containScroll="trimSnaps"
            maw="100%"
            slideSize="auto"
            mx="auto"
            align="start"
            withControls={false}
            getEmblaApi={setEmbla}
          >
            <Carousel.Slide>
              <Button
                onClick={() => {
                  setSelectedCategory('')
                }}
                variant="outline"
                color="black"
                {...(!selectedCategory && {
                  variant: 'filled',
                  color: 'primary',
                })}
              >
                All Categories
              </Button>
            </Carousel.Slide>
            {Array.isArray(categories) &&
              categories.map((category, i) => (
                <Carousel.Slide key={i}>
                  <Button
                    onClick={() => {
                      setSelectedCategory(category.slug)
                    }}
                    variant="outline"
                    color="black"
                    {...(category.slug === selectedCategory && {
                      variant: 'filled',
                      color: 'primary',
                    })}
                  >
                    {category.title}
                  </Button>
                </Carousel.Slide>
              ))}
          </Carousel>
          <Box mih={500} pos="relative">
            <LoadingOverlay visible={isFetching} overlayBlur={10} />
            <Grid gutter="xl">
              {blogs?.map((v: Blog) => (
                <Grid.Col sm={6} key={v.id}>
                  <BlogCard blog={v} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default CategorizedBlog

interface IBlogCardProps {
  blog: Blog
}

const BlogCard = (props: IBlogCardProps) => {
  const { blog } = props

  return (
    <Card
      radius="xl"
      bg="black"
      sx={{
        cursor: 'pointer',
        boxShadow: '0px 25px 25px -13px rgba(0, 0, 0, 0.25)',
      }}
      component={Link}
      href={`/blog/${blog.slug}`}
    >
      <Stack>
        <Paper
          p={0}
          radius="lg"
          sx={{
            overflow: 'hidden',
            boxShadow: '0px 25px 25px -13px #000000',
          }}
        >
          <AspectRatio ratio={4 / 3} mx="auto">
            <Image
              src={blog.thumbnail[0]}
              // height={160}
              alt="thumbnail"
              fill
            />
          </AspectRatio>
        </Paper>
        <Stack spacing="xs">
          <Text weight="bold" color="white">
            {blog.title}
          </Text>
          <Text size="sm" color="white">
            {dayjs(blog.published_at).format('DD MMMM YYYY')}
          </Text>
          <Text
            lineClamp={2}
            color="white"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </Stack>
      </Stack>
    </Card>
  )
}
