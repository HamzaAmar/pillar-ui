import { InputNumber, Paper } from '@pillar-ui/core'

export const InputNumberCorner = () => {
  return (
    <>
      <InputNumber corner="sharp" placeholder="sharp" />
      <InputNumber corner="xs" placeholder="xs" />
      <InputNumber corner="sm" placeholder="sm" />
      <InputNumber corner="md" placeholder="md" />
      <InputNumber corner="lg" placeholder="lg" />
      <InputNumber corner="xl" placeholder="xl" />
      <InputNumber corner="full" placeholder="full" />
    </>
  )
}
