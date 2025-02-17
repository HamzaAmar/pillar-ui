import { InputNumber } from '@pillar-ui/core'

export const InputNumberStatus = () => {
  return (
    <>
      <InputNumber placeholder="Normal" />
      <InputNumber placeholder="readOnly" readOnly />
      <InputNumber placeholder="disabled" disabled />
      <InputNumber placeholder="isInvalid" isInvalid />
    </>
  )
}
