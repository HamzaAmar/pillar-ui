import { Avatar, Flex, Grid, Paper, Rating, Text } from '@pillar-ui/core'
import { Quotes } from '@pillar-ui/icons'

const Testimonial = () => {
  return (
    <Paper as="article" p="4" background="B2" border corner="3">
      <Flex justify="between" direction="col" as={Paper} gap="4">
        <Flex gap="3" items="center">
          <Avatar variant="dashed" />
          <Paper flow="1">
            <div>
              <Flex gap="2" items="center">
                <Text size="4" weight="7">
                  Hamza Miloud Amar
                </Text>
                <Text color="b" low size="2">
                  (FrontEnd Developer)
                </Text>
              </Flex>
              <Text color="b" low size="3">
                hamza@gmail.com
              </Text>
            </div>
            <Rating rating={4} hideTitle size="3" />
          </Paper>
        </Flex>
        <Flex justify="between" items="end" gap="4">
          <Text color="b" low size="4">
            I loved the product. It was very good. I would recommend it to everyone. I am very happy with the product.
          </Text>
          <Quotes width="36" />
        </Flex>
      </Flex>
    </Paper>
  )
}

export const CardTestimonials = () => {
  return (
    <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr' }}>
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </Grid>
  )
}
