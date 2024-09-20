import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputPasswordOutline = () => {
  return (
    <>
      <InputPassword variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputPassword variant="outline" aria-label="hello" placeholder="Normal" />
      <InputPassword variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputPassword variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputPassword variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputPassword variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
