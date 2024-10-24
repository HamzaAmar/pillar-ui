import { InputNumber } from '@pillar-ui/core'

export const InputNumberVariant = () => {
  return (
    <>
      <InputNumber aria-label="hello" variant="bordered" />
      <InputNumber aria-label="hello" variant="filled" />
      <InputNumber aria-label="hello" variant="outline" />
    </>
  )
}
