import { Alert } from '@pillar-ui/core'
import { CircleCheck } from '@pillar-ui/icons'

export const AlertContent = () => {
  return (
    <>
      <Alert title="Success!" />
      <Alert icon={<CircleCheck width="30" />} title="Success!" />
      <Alert message="Success!" />
      <Alert title="Success!" message="Your prefered description" />
      <Alert icon={<CircleCheck width="30" />} title="Success!" message="Your prefered description" />
    </>
  )
}
