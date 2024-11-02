import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressCorner = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar label="Hello" value={90} corner="0" />
      <ProgressBar label="Hello" value={90} corner="1" />
      <ProgressBar label="Hello" value={90} corner="2" />
      <ProgressBar label="Hello" value={90} corner="3" />
      <ProgressBar label="Hello" value={90} corner="4" />
      <ProgressBar label="Hello" value={90} corner="5" />
      <ProgressBar label="Hello" value={90} corner="full" />
    </Flex>
  )
}
