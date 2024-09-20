import { InputNumber, Paper } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberFilled = () => {
  return (
    <>
      <InputNumber aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputNumber aria-label="hello" placeholder="Normal" variant="filled" />
      <InputNumber aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputNumber aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputNumber aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputNumber aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </>
  )
}
