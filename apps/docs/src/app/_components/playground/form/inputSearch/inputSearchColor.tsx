import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputSearchColor = () => {
  return (
    <>
      <InputSearch color="p" variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch color="w" variant="bordered" autoFocus placeholder="Normal" />
      <InputSearch color="se" variant="outline" autoFocus placeholder="Disabled" />
      <InputSearch color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <InputSearch color="s" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
    </>
  )
}
