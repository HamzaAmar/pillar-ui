import { InputPassword } from '@pillar-ui/core'

export const InputPasswordSize = () => {
  return (
    <>
      <InputPassword size="3" placeholder="Extra Small(3)" />
      <InputPassword size="4" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="6" placeholder="Large(lg)" />
      <InputPassword size="7" placeholder="Extra Large(xl)" />
    </>
  )
}
