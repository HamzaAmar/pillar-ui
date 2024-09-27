import { Input } from '@pillar-ui/core'

export const InputCorner = () => {
  return (
    <>
      <Input corner="0" placeholder="sharp" />
      <Input corner="3" placeholder="3" />
      <Input corner="2" placeholder="sm" />
      <Input corner="3" placeholder="md" />
      <Input corner="4" placeholder="lg" />
      <Input corner="5" placeholder="xl" />
      <Input corner="full" placeholder="full" />
    </>
  )
}
