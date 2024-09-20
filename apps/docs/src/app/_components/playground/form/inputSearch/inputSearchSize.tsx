import { InputSearch } from '@pillar-ui/core'

export const InputSearchSize = () => {
  return (
    <>
      <InputSearch size="xs" placeholder="Extra Small(xs)" />
      <InputSearch size="sm" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="lg" placeholder="Large(lg)" />
      <InputSearch size="xl" placeholder="Extra Large(xl)" />
    </>
  )
}
