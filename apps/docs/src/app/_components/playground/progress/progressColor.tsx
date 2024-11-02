import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressColor = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar color="d" value={90} showValue label="hello" />
      <ProgressBar color="su" value={90} showValue label="hello" />
      <ProgressBar color="w" value={90} showValue label="hello" />
      <ProgressBar color="se" value={90} showValue label="hello" />
      <ProgressBar color="b" value={90} showValue label="hello" />
      <ProgressBar color="p" value={90} showValue label="hello" />
      <ProgressBar color="i" value={90} showValue label="hello" />
    </Flex>
  )
}
