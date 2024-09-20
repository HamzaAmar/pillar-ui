import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const TextareaBordered = () => {
  return (
    <>
      <Textarea variant="bordered" aria-label="hello" autoFocus placeholder="Focus" />
      <Textarea variant="bordered" aria-label="hello" placeholder="Normal" />
      <Textarea variant="bordered" aria-label="hello" disabled placeholder="Disabled" />
      <Textarea variant="bordered" aria-label="hello" readOnly placeholder="readOnly" />
      <Textarea variant="bordered" aria-label="hello" isInvalid placeholder="Error" />
      <Textarea variant="bordered" aria-label="hello" suffixInput={<User width="16" />} placeholder="Error" />
      <Textarea variant="bordered" aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
        variant="bordered"
        aria-label="hello"
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </>
  )
}
