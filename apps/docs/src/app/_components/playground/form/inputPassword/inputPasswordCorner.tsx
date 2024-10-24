import { InputPassword } from '@pillar-ui/core'

export const InputPasswordCorner = () => {
  return (
    <>
      <InputPassword corner="0" placeholder="sharp" />
      <InputPassword corner="1" placeholder="3" />
      <InputPassword corner="2" placeholder="sm" />
      <InputPassword corner="3" placeholder="md" />
      <InputPassword corner="4" placeholder="lg" />
      <InputPassword corner="5" placeholder="xl" />
      <InputPassword corner="full" placeholder="full" />
    </>
  )
}
