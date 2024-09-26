import { InputNumber } from '@pillar-ui/core'

export const InputNumberSize = () => {
  return (
    <>
      <InputNumber gap="3" placeholder="Extra Small(xs)" />
      <InputNumber size="sm" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber gap="6" placeholder="Large(lg)" />
      <InputNumber gap="7" placeholder="Extra Large(xl)" />
    </>
  )
}
