import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputSearchBordered = () => {
  return (
    <>
      <InputSearch variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <InputSearch variant="bordered" aria-label="hello" placeholder="Normal" />
      <InputSearch variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <InputSearch variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <InputSearch variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <InputSearch variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
