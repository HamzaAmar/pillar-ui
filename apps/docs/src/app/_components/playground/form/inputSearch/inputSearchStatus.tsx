import { InputSearch } from '@pillar-ui/core'

export const InputSearchStatus = () => {
  return (
    <>
      <InputSearch />
      <InputSearch disabled />
      <InputSearch readOnly />
      <InputSearch isInvalid />
    </>
  )
}
