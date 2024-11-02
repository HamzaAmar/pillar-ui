import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressMax = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar value={50} max={1000} label="hello" />
      <ProgressBar value={500} max={100} label="hello" />
      <ProgressBar value={250} max={50} label="hello" />
      <ProgressBar value={250} min={60} max={120} showValue label="hello" />
    </Flex>
  )
}
