import { InputSearch } from '@pillar-ui/core'

export const InputSearchCorner = () => {
  return (
    <>
      <InputSearch corner="0" placeholder="sharp" />
      <InputSearch corner="1" placeholder="3" />
      <InputSearch corner="2" placeholder="sm" />
      <InputSearch corner="3" placeholder="md" />
      <InputSearch corner="4" placeholder="lg" />
      <InputSearch corner="5" placeholder="xl" />
      <InputSearch corner="full" placeholder="full" />
    </>
  )
}
