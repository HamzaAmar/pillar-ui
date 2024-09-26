import { Textarea } from '@pillar-ui/core'

export const TextareaSize = () => {
  return (
    <>
      <Textarea gap="3" placeholder="Extra Small(xs)" />
      <Textarea size="sm" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea gap="6" placeholder="Large(lg)" />
      <Textarea gap="7" placeholder="Extra Large(xl)" />
    </>
  )
}
