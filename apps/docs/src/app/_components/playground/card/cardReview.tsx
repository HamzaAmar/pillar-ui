import { Avatar, Button, Flex, Paper, Rating, Text } from '@pillar-ui/core'
import { Eye, ThumbDown, ThumbUp } from '@pillar-ui/icons'

export const CardReview = () => {
  return (
    <Paper background="B1" flow="4" border corner="2" p="5">
      <Flex as="header" items="center" justify="between">
        <Flex items="center" gap="3">
          <Avatar title="Hamza Miloud Amar" />
          <div>
            <Text weight="5" size="4">
              Hamza Miloud Amar
            </Text>
            <Rating rating={5} size="3" hideTitle title="Review rating 5 of 5" />
          </div>
        </Flex>
        <Text color="b" low size="3">
          1 day ago
        </Text>
      </Flex>
      <div className="">
        <Text size="4" color="b" low>
          I loved the product. It was very good. I would recommend it to everyone. I am very happy with the product.
        </Text>
      </div>
      <footer>
        <Flex items="center" justify="between">
          <Flex gap="3">
            <Button icon={<ThumbUp />} variant="soft" color="b" size="4">
              Like
            </Button>
            <Button icon={<ThumbDown />} variant="soft" color="b" size="4">
              Dislike
            </Button>
          </Flex>
          <Button icon={<Eye />} variant="text" color="d" size="4">
            Report Review
          </Button>
        </Flex>
      </footer>
    </Paper>
  )
}
