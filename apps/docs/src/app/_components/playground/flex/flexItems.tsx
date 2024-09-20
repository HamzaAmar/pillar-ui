import { Flex, Paper } from '@pillar-ui/core'

export const FlexItems = () => {
  return (
    <>
      <Flex as={Paper} height="100" background="bg-5" gap="sm" items="center">
        Hello
      </Flex>
      <Flex as={Paper} height="100" background="bg-5" gap="sm" items="end">
        Hello
      </Flex>
      <Flex as={Paper} height="100" background="bg-5" gap="sm">
        Hello
      </Flex>
    </>
  )
}
