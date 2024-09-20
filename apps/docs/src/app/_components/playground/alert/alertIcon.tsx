import { Alert } from '@pillar-ui/core'
import { CircleCheck } from '@pillar-ui/icons'

export const AlertIcon = () => {
  return (
    <>
      <Alert icon={<CircleCheck width="24" />} title="Success!" />
      <Alert icon={<CircleCheck />} title="Success!" />
      <Alert icon={<CircleCheck width="48" />} title="Success!" message="Your prefered description" />
    </>
  )
}
