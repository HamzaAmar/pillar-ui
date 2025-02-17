import { InputSearch } from '@pillar-ui/core'

export const InputSearchStatus = () => {
  return (
    <>
      <InputSearch placeholder="Normal" />
      <InputSearch placeholder="disabled" disabled />
      <InputSearch placeholder="readOnly" readOnly />
      <InputSearch placeholder="isInvalid" isInvalid />
    </>
  )
}
