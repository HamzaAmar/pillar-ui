import { InputNumber, Paper } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberBordered = () => {
  return (
    <>
      <InputNumber variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputNumber variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputNumber variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputNumber variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputNumber variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputNumber variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
