import { InputNumber } from '@pillar-ui/core'

export const InputNumberStatus = () => {
  return (
    <>
      <InputNumber />
      <InputNumber readOnly />
      <InputNumber disabled />
      <InputNumber isInvalid />
    </>
  )
}
