import { ProgressBar } from '@pillar-ui/core'

export const ProgressLabel = () => {
  return (
    <>
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
    </>
  )
}
