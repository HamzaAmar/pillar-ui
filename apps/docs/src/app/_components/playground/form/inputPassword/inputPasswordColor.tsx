import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputPasswordColor = () => {
  return (
    <>
      <InputPassword color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <InputPassword color="war" variant="bordered" autoFocus placeholder="Normal" />
      <InputPassword color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <InputPassword color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputPassword
        color="suc"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </>
  )
}
