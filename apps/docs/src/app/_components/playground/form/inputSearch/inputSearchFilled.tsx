import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputSearchFilled = () => {
  return (
    <>
      <InputSearch aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <InputSearch aria-label="hello" placeholder="Normal" variant="filled" />
      <InputSearch aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <InputSearch aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <InputSearch aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <InputSearch aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
    </>
  )
}
