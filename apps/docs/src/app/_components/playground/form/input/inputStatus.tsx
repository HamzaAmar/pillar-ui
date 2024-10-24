import { Input } from '@pillar-ui/core'

export const InputStatus = () => {
  return (
    <>
      <Input />
      <Input disabled />
      <Input readOnly />
      <Input isInvalid />
    </>
  )
}
