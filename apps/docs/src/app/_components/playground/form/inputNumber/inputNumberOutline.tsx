import { InputNumber, Paper } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberOutline = () => {
  return (
    <>
      <InputNumber variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="outline" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
