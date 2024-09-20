import { ProgressBar } from '@pillar-ui/core'

export const ProgressValue = () => {
  return (
    <>
      <ProgressBar size="2xs" value={100} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
      <ProgressBar size="xs" value={30} label="hello" />
      <ProgressBar size="2xs" value={12} label="hello" />
      <ProgressBar size="xs" value={22} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
    </>
  )
}
