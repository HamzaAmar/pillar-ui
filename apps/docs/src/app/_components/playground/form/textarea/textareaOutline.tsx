import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const TextareaOutline = () => {
  return (
    <>
      <Textarea variant="outline" aria-label="hello" autoFocus placeholder="Focus" />
      <Textarea variant="outline" aria-label="hello" placeholder="Normal" />
      <Textarea variant="outline" aria-label="hello" disabled placeholder="Disabled" />
      <Textarea variant="outline" aria-label="hello" readOnly placeholder="readOnly" />
      <Textarea variant="outline" aria-label="hello" isInvalid placeholder="Error" />
      <Textarea variant="outline" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Textarea variant="outline" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
        variant="outline"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </>
  )
}
