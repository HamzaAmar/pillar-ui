import { InputNumber } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberColor = () => {
  return (
    <>
      <InputNumber color="p" variant="bordered" autoFocus placeholder="Focus" />
      <InputNumber color="w" variant="bordered" autoFocus placeholder="Normal" />
      <InputNumber color="se" variant="outline" autoFocus placeholder="Disabled" />
      <InputNumber color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <InputNumber color="s" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
