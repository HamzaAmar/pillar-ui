import { Flex, ProgressBar, ProgressCircle } from '@pillar-ui/core'

export const ProgressMin = () => {
  return (
    <>
      <div className="Sf3">
        <ProgressBar value={50} min={0} label="hello" />
        <ProgressBar value={500} min={0} label="hello" />
        <ProgressBar value={250} min={-100} label="hello" />
      </div>
      <Flex gap="4" wrap>
        <ProgressCircle value={50} min={0} label="hello" />
        <ProgressCircle value={500} min={0} label="hello" />
        <ProgressCircle value={250} min={-100} label="hello" />
      </Flex>
    </>
  )
}
