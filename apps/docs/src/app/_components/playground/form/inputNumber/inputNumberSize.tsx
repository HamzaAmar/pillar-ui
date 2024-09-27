import { InputNumber } from '@pillar-ui/core'

export const InputNumberSize = () => {
  return (
    <>
      <InputNumber size="3" placeholder="Extra Small(3)" />
      <InputNumber size="4" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber size="6" placeholder="Large(lg)" />
      <InputNumber size="7" placeholder="Extra Large(xl)" />
    </>
  )
}
