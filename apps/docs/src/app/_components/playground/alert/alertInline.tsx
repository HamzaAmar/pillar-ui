import { Alert } from '@pillar-ui/core'
import { CircleWarning } from '@pillar-ui/icons'

export const AlertInline = () => {
  return (
    <>
      <Alert title="hello" message="you have an error in the start of the program" inline />
      <Alert title="hello" message="you have an error in the start of the program" inline />
      <Alert
        title="hello"
        message="you have an error in the start of the program"
        inline
        icon={<CircleWarning width="20" />}
      />
    </>
  )
}
