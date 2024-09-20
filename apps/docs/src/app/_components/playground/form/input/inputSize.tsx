import { Input } from '@pillar-ui/core'

export const InputSize = () => {
  return (
    <>
      <Input size="xs" placeholder="Extra Small(xs)" />
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="lg" placeholder="Large(lg)" />
      <Input size="xl" placeholder="Extra Large(xl)" />
    </>
  )
}
