import { InputSearch } from '@pillar-ui/core'

export const InputSearchSize = () => {
  return (
    <>
      <InputSearch size="3" placeholder="Extra Small(3)" />
      <InputSearch size="4" placeholder="Small(sm)" />
      <InputSearch placeholder="Medium (md default You don't need it)" />
      <InputSearch size="6" placeholder="Large(lg)" />
      <InputSearch size="7" placeholder="Extra Large(xl)" />
    </>
  )
}
