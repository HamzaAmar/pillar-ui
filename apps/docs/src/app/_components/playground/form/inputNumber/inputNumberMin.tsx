import { InputNumber } from '@pillar-ui/core'

export const InputNumberMin = () => {
  return (
    <>
      <InputNumber step="1" placeholder="Min Value 5" min="5" />
      <InputNumber step="10" placeholder="Min Value 40" min="40" />
      <InputNumber step=".1" placeholder="Min Value 1" min="1" />
      <InputNumber step=".5" placeholder="Min Value 10" min="10" />
    </>
  )
}
