import { Input } from '@pillar-ui/core'
import { Eye, User } from '@pillar-ui/icons'

export const InputOutline = () => {
  return (
    <>
      <Input aria-label="hello" autoFocus placeholder="Focus" variant="outline" />
      <Input aria-label="hello" placeholder="Normal" variant="outline" />
      <Input aria-label="hello" disabled placeholder="Disabled" variant="outline" />
      <Input aria-label="hello" readOnly placeholder="readOnly" variant="outline" />
      <Input aria-label="hello" isInvalid placeholder="Error" variant="outline" />
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="outline" />
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="outline" />
      <Input
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="outline"
      />
    </>
  )
}
