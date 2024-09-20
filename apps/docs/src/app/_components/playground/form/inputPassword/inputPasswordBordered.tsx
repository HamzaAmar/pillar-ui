import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputPasswordBordered = () => {
  return (
    <>
      <InputPassword variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword
        variant="bordered"
        aria-label="hello"
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </>
  )
}
