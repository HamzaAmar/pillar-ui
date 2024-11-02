import { ProgressCircle } from '@pillar-ui/core'

export const ProgressCircleMax = () => {
  return (
    <>
      <ProgressCircle value={50} max={1000} label="hello" />
      <ProgressCircle value={500} max={100} label="hello" />
      <ProgressCircle value={250} max={50} label="hello" />
      <ProgressCircle value={250} min={60} max={120} label="hello" />
    </>
  )
}
