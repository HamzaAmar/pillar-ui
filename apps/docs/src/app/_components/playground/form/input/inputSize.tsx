import { Input } from '@pillar-ui/core'

export const InputSize = () => {
  return (
    <>
      <Input gap="3" placeholder="Extra Small(xs)" />
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input gap="6" placeholder="Large(lg)" />
      <Input gap="7" placeholder="Extra Large(xl)" />
    </>
  )
}
