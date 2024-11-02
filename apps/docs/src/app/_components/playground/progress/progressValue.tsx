import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressValue = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar size="2" value={100} label="hello" />
      <ProgressBar size="3" value={50} label="hello" />
      <ProgressBar size="3" value={30} label="hello" />
      <ProgressBar size="2" value={12} label="hello" />
      <ProgressBar size="3" value={22} label="hello" />
      <ProgressBar size="3" value={50} label="hello" />
    </Flex>
  )
}
