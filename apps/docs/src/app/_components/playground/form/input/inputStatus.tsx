import { Input } from '@pillar-ui/core'

export const InputStatus = () => {
  return (
    <>
      <Input placeholder="Normal" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="ReadOnly" readOnly />
      <Input placeholder="Is Invalid" isInvalid />
    </>
  )
}
