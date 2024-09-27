import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputPasswordColor = () => {
  return (
    <>
      <InputPassword color="p" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="w" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="se" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword
        color="su"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </>
  )
}
