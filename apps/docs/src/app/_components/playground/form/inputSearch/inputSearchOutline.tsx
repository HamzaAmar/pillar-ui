import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputSearchOutline = () => {
  return (
    <>
      <InputSearch variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="outline" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
