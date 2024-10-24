import { InputNumber, Paper } from '@pillar-ui/core'

export const InputNumberCorner = () => {
  return (
    <>
      <InputNumber corner="0" placeholder="sharp" />
      <InputNumber corner="1" placeholder="3" />
      <InputNumber corner="2" placeholder="sm" />
      <InputNumber corner="3" placeholder="md" />
      <InputNumber corner="4" placeholder="lg" />
      <InputNumber corner="5" placeholder="xl" />
      <InputNumber corner="full" placeholder="full" />
    </>
  )
}
