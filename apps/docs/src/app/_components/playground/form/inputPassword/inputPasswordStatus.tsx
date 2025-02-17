import { InputPassword } from '@pillar-ui/core'

export const InputPasswordStatus = () => {
  return (
    <>
      <InputPassword placeholder="Normal" />
      <InputPassword placeholder="readOnly" readOnly />
      <InputPassword placeholder="disabled" disabled />
      <InputPassword placeholder="isInvalid" isInvalid />
    </>
  )
}
