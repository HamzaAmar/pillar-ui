import { ProgressBar } from '@pillar-ui/core'

export const ProgressValue = () => {
  return (
    <>
      <ProgressBar gap="2" value={100} label="hello" />
      <ProgressBar gap="3" value={50} label="hello" />
      <ProgressBar gap="3" value={30} label="hello" />
      <ProgressBar gap="2" value={12} label="hello" />
      <ProgressBar gap="3" value={22} label="hello" />
      <ProgressBar gap="3" value={50} label="hello" />
    </>
  )
}
