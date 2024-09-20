import { InputNumber } from '@pillar-ui/core'

export const InputNumberMin = () => {
  return (
    <>
      <InputNumber step="1" min="5" size="sm" placeholder="Step 1" />
      <InputNumber step="10" min="40" placeholder="Step 10" />
      <InputNumber step=".1" min="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" min="10" size="lg" placeholder="Step 0.5" />
    </>
  )
}
