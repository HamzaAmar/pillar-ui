import { Input } from '@pillar-ui/core'

export const InputSize = () => {
  return (
    <>
      <Input size="3" placeholder="Extra Small(3)" />
      <Input size="4" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="6" placeholder="Large(lg)" />
      <Input size="7" placeholder="Extra Large(xl)" />
    </>
  )
}
