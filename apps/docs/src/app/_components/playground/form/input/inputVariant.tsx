import { Input } from '@pillar-ui/core'

export const InputVariant = () => {
  return (
    <>
      <Input aria-label="hello" variant="bordered" />
      <Input aria-label="hello" variant="filled" />
      <Input aria-label="hello" variant="outline" />
    </>
  )
}
