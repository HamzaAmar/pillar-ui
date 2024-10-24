import { Textarea } from '@pillar-ui/core'

export const TextareaVariant = () => {
  return (
    <>
      <Textarea aria-label="hello" variant="bordered" />
      <Textarea aria-label="hello" variant="filled" />
      <Textarea aria-label="hello" variant="outline" />
    </>
  )
}
