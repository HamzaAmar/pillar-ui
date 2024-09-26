import { InputPassword } from '@pillar-ui/core'

export const InputPasswordSize = () => {
  return (
    <>
      <InputPassword gap="3" placeholder="Extra Small(xs)" />
      <InputPassword size="sm" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword gap="6" placeholder="Large(lg)" />
      <InputPassword gap="7" placeholder="Extra Large(xl)" />
    </>
  )
}
