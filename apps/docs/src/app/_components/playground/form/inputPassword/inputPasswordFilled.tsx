import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputPasswordFilled = () => {
  return (
    <>
      <InputPassword aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputPassword aria-label="hello" placeholder="Normal" variant="filled" />
      <InputPassword aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputPassword aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputPassword aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputPassword aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </>
  )
}
