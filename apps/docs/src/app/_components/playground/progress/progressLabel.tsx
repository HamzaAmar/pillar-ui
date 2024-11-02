import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressLabel = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
    </Flex>
  )
}
