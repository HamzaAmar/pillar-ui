import { ProgressCircle } from '@pillar-ui/core'

export const ProgressCircleLabel = () => {
  return (
    <>
      <ProgressCircle value={90} label="Video Time" />
      <ProgressCircle value={90} label="Download percentage" />
      <ProgressCircle value={90} label="Video Time" />
      <ProgressCircle value={90} label="Download percentage" />
    </>
  )
}
