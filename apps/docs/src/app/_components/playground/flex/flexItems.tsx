import { Flex, Paper } from '@pillar-ui/core'

export const FlexItems = () => {
  return (
    <>
      <Flex as={Paper} height="100" background="b-5" gap="4" items="center">
        Hello
      </Flex>
      <Flex as={Paper} height="100" background="b-5" gap="4" items="end">
        Hello
      </Flex>
      <Flex as={Paper} height="100" background="b-5" gap="4">
        Hello
      </Flex>
    </>
  )
}
