import { Input } from '@pillar-ui/core'

export const InputCorner = () => {
  return (
    <>
      <Input corner="sharp" placeholder="sharp" />
      <Input corner="3" placeholder="3" />
      <Input corner="sm" placeholder="sm" />
      <Input corner="md" placeholder="md" />
      <Input corner="lg" placeholder="lg" />
      <Input corner="xl" placeholder="xl" />
      <Input corner="full" placeholder="full" />
    </>
  )
}
