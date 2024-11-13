import { InputNumber } from '@pillar-ui/core'

export const InputNumberMax = () => {
  return (
    <>
      <InputNumber step="1" placeholder="Max value 10" max="10" />
      <InputNumber step="10" placeholder="Max value 40" max="40" />
      <InputNumber step=".1" placeholder="Max value 1" max="1" />
      <InputNumber step=".5" placeholder="Max value 10" max="10" />
    </>
  )
}
