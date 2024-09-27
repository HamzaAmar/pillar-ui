import { InputNumber } from '@pillar-ui/core'

export const InputNumberStep = () => {
  return (
    <>
      <InputNumber step="1" size="4" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" gap="6" placeholder="Step 0.1" />
    </>
  )
}
