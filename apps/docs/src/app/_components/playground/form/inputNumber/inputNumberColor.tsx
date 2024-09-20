import { InputNumber } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputNumberColor = () => {
  return (
    <>
      <InputNumber color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <InputNumber color="war" variant="bordered" autoFocus placeholder="Normal" />
      <InputNumber color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <InputNumber color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputNumber
        color="suc"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </>
  )
}
