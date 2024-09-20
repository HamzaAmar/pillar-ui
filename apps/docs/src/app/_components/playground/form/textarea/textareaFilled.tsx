import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const TextareaFilled = () => {
  return (
    <>
      <Textarea aria-label="hello" autoFocus placeholder="Focus" variant="filled" />
      <Textarea aria-label="hello" placeholder="Normal" variant="filled" />
      <Textarea aria-label="hello" disabled placeholder="Disabled" variant="filled" />
      <Textarea aria-label="hello" readOnly placeholder="readOnly" variant="filled" />
      <Textarea aria-label="hello" isInvalid placeholder="Error" variant="filled" />
      <Textarea aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" variant="filled" />
      <Textarea aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Textarea
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </>
  )
}
