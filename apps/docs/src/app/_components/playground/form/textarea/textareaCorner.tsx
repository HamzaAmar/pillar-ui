import { Textarea } from '@pillar-ui/core'

export const TextareaCorner = () => {
  return (
    <>
      <Textarea corner="sharp" placeholder="sharp" />
      <Textarea corner="3" placeholder="3" />
      <Textarea corner="sm" placeholder="sm" />
      <Textarea corner="md" placeholder="md" />
      <Textarea corner="lg" placeholder="lg" />
      <Textarea corner="xl" placeholder="xl" />
      <Textarea corner="full" placeholder="full" />
    </>
  )
}
