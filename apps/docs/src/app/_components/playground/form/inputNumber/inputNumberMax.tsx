import { InputNumber } from '@pillar-ui/core'

export const InputNumberMax = () => {
  return (
    <>
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1" />
      <InputNumber step="10" max="40" placeholder="Step 10" />
      <InputNumber step=".1" max="1" size="lg" placeholder="Step 0.1" />
      <InputNumber step=".5" max="10" size="lg" placeholder="Step 0.5" />
    </>
  )
}
