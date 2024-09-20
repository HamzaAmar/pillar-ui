import { InputPassword } from '@pillar-ui/core'
import { Close, Lock, LockOff, OpenSource, User } from '@pillar-ui/icons'

export const SizeIconsPassword = () => {
  return (
    <>
      <InputPassword placeholder="Medium" prefixInput={<User width="16" />} />
    </>
  )
}

export const InputPasswordCustomIcon = () => {
  return (
    <>
      <InputPassword placeholder="enter your password" color="pri" visibleIcon={<Lock />} hiddenIcon={<LockOff />} />
      <InputPassword
        placeholder="enter your password"
        color="war"
        visibleIcon={<OpenSource />}
        hiddenIcon={<Close />}
      />
    </>
  )
}
