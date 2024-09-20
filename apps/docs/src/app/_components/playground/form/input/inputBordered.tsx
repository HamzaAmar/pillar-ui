import { Input } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputBordered = () => {
  return (
    <>
      <Input aria-label="hello" autoFocus placeholder="Focus" variant="bordered" />
      <Input aria-label="hello" placeholder="Normal" variant="bordered" />
      <Input aria-label="hello" disabled placeholder="Disabled" variant="bordered" />
      <Input aria-label="hello" readOnly placeholder="readOnly" variant="bordered" />
      <Input aria-label="hello" isInvalid placeholder="Error" variant="bordered" />
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="bordered" />
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="bordered" />
      <Input
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="bordered"
      />
    </>
  )
}
