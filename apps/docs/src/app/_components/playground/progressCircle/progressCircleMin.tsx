import { ProgressCircle } from '@pillar-ui/core'

export const ProgressCircleMin = () => {
  return (
    <>
      <ProgressCircle value={50} min={0} label="hello" />
      <ProgressCircle value={500} min={0} label="hello" />
      <ProgressCircle value={30} min={50} label="hello" />
    </>
  )
}
