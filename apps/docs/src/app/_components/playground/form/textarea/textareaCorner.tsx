import { Textarea } from '@pillar-ui/core'

export const TextareaCorner = () => {
  return (
    <>
      <Textarea corner="0" placeholder="sharp" />
      <Textarea corner="3" placeholder="3" />
      <Textarea corner="2" placeholder="sm" />
      <Textarea corner="3" placeholder="md" />
      <Textarea corner="4" placeholder="lg" />
      <Textarea corner="5" placeholder="xl" />
      <Textarea corner="full" placeholder="full" />
    </>
  )
}
