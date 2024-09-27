import { Textarea } from '@pillar-ui/core'

export const TextareaSize = () => {
  return (
    <>
      <Textarea size="3" placeholder="Extra Small(3)" />
      <Textarea size="4" placeholder="Small(sm)" />
      <Textarea placeholder="Medium (md default You don't need it)" />
      <Textarea size="6" placeholder="Large(lg)" />
      <Textarea size="7" placeholder="Extra Large(xl)" />
    </>
  )
}
