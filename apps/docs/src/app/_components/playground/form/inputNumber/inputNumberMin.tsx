import { InputNumber } from '@pillar-ui/core'

export const InputNumberMin = () => {
  return (
    <>
      <InputNumber step="1" min="5" size="4" placeholder="Step 1" />
      <InputNumber step="10" min="40" placeholder="Step 10" />
      <InputNumber step=".1" min="1" size="6" placeholder="Step 0.1" />
      <InputNumber step=".5" min="10" size="6" placeholder="Step 0.5" />
    </>
  )
}
