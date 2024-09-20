import { InputPassword } from '@pillar-ui/core'

export const InputPasswordSize = () => {
  return (
    <>
      <InputPassword size="xs" placeholder="Extra Small(xs)" />
      <InputPassword size="sm" placeholder="Small(sm)" />
      <InputPassword placeholder="Medium (md default You don't need it)" />
      <InputPassword size="lg" placeholder="Large(lg)" />
      <InputPassword size="xl" placeholder="Extra Large(xl)" />
    </>
  )
}
