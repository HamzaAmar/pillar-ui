import { Flex, ProgressBar, ProgressCircle } from '@pillar-ui/core'

export const ProgressMax = () => {
  return (
    <>
      <div className="Sfsm">
        <ProgressBar value={50} max={1000} label="hello" />
        <ProgressBar value={500} max={100} label="hello" />
        <ProgressBar value={250} max={50} label="hello" />
        <ProgressBar value={250} min={60} max={120} showValue label="hello" />
      </div>
      <Flex gap="4" wrap>
        <ProgressCircle value={50} max={1000} label="hello" />
        <ProgressCircle value={500} max={100} label="hello" />
        <ProgressCircle value={250} max={50} label="hello" />
        <ProgressCircle value={250} min={60} max={120} label="hello" />
      </Flex>
    </>
  )
}
