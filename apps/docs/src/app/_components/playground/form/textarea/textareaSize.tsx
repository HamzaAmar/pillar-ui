import { Textarea } from '@pillar-ui/core'

export const TextareaSize = () => {
  return (
    <>
      <Textarea size="xs" placeholder="Extra Small(xs)" />
      <Textarea size="sm" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea size="lg" placeholder="Large(lg)" />
      <Textarea size="xl" placeholder="Extra Large(xl)" />
    </>
  )
}
