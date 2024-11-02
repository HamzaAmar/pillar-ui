import { Flex, ProgressBar } from '@pillar-ui/core'

export const ProgressMin = () => {
  return (
    <Flex direction="col" gap="6">
      <ProgressBar value={50} min={0} label="hello" />
      <ProgressBar value={500} min={0} label="hello" />
      <ProgressBar value={250} min={-100} label="hello" />
    </Flex>
  )
}
