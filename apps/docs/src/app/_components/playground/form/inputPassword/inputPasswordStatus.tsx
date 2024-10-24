import { InputPassword } from '@pillar-ui/core'

export const InputPasswordStatus = () => {
  return (
    <>
      <InputPassword />
      <InputPassword readOnly />
      <InputPassword disabled />
      <InputPassword isInvalid />
    </>
  )
}
