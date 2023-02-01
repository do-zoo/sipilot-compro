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
import Image from 'next/image'
import Navbar from './navbar'

export default function Blog() {
  // const theme = useMantineTheme()
  return (
    <Box>
      <Navbar />
      <RecommendationBlog />
      <CategorizedBlog />
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
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                alt="trusted"
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </Card>
          </Grid.Col>
          <Grid.Col span={12} sm={7}>
            <Stack>
              <Title>Lorem ipsum dolor sit amet.</Title>
              <Title order={3}>Lorem ipsum dolor sit amet.</Title>
              <Text lineClamp={12}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi laborum perspiciatis modi fugiat eaque adipisci quo
                quam ullam tempore labore assumenda, dignissimos qui magnam,
                repudiandae saepe dolores, delectus explicabo nostrum molestiae
                accusantium! Cupiditate, mollitia. Quae vero nam omnis harum sed
                modi iste molestias! Dolores ab, voluptate soluta earum hic qui.
                Nisi cum ipsa nobis, sit dolor, magnam aut repudiandae impedit,
                totam fugit obcaecati perspiciatis dignissimos culpa vel
                explicabo ea. Consequatur commodi voluptatibus minus alias
                officia odit, nostrum magni inventore saepe cumque velit quam
                sed recusandae beatae sequi officiis ducimus praesentium
                aspernatur adipisci sit repellat eligendi accusamus. Inventore,
                autem consequatur? Tempora officiis dolor necessitatibus debitis
                pariatur fuga maxime aliquam repellat! Iusto reprehenderit,
                perspiciatis, adipisci totam qui atque voluptatum quam cum
                recusandae aut provident tenetur temporibus eius ut unde
                tempora! Omnis, repudiandae animi deleniti molestias ea, unde
                sunt iusto aspernatur numquam iusto asperiores rem tenetur
                repudiandae non eligendi, iure sapiente, mollitia vitae, placeat
                possimus rerum aliquam dignissimos! Iure molestias itaque
                placeat ullam maiores illum, dolorum totam dolore perferendis
                eum hic, reiciendis amet omnis, iste doloremque deserunt
                dignissimos saepe pariatur at et odit. Aspernatur tenetur autem
                ullam natus, ea dignissimos qui quod atque fuga laborum,
                reiciendis voluptas porro quos maiores delectus? Assumenda minus
                laboriosam eaque quasi quia, consequuntur sint rerum iure
                consequatur soluta. Eligendi voluptatum non ad iste laborum quo
                maiores sint ab distinctio magni illum mollitia ducimus, tenetur
                cupiditate, sunt delectus dicta dolorum ullam consequatur iusto?
                Magni beatae error qui explicabo hic? Ipsam expedita cumque
                suscipit impedit voluptates
              </Text>
              <Box>
                <Button>Pelajari Lebih lanjut</Button>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
