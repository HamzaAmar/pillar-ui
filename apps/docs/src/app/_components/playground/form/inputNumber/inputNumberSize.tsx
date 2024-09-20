import { InputNumber } from '@pillar-ui/core'

export const InputNumberSize = () => {
  return (
    <>
      <InputNumber size="xs" placeholder="Extra Small(xs)" />
      <InputNumber size="sm" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber size="lg" placeholder="Large(lg)" />
      <InputNumber size="xl" placeholder="Extra Large(xl)" />
    </>
  )
}
