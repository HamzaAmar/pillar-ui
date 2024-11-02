import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressSize = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar size="1" value={90} label="hello" />
      <ProgressBar size="2" value={90} label="hello" />
      <ProgressBar size="3" value={90} label="hello" />
      <ProgressBar size="4" value={90} label="hello" />
      <ProgressBar size="5" value={90} label="hello" />
      <ProgressBar size="6" value={90} label="hello" />
      <ProgressBar size="7" value={90} label="hello" />
      <ProgressBar size="8" value={90} label="hello" />
      <ProgressBar size="9" value={90} label="hello" />
    </Flex>
  )
}
