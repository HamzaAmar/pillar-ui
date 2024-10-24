import { InputNumber } from '@pillar-ui/core'

export const InputNumberMin = () => {
  return (
    <>
      <InputNumber step="1" min="5" />
      <InputNumber step="10" min="40" />
      <InputNumber step=".1" min="1" />
      <InputNumber step=".5" min="10" />
    </>
  )
}
