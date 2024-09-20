import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputSearchColor = () => {
  return (
    <>
      <InputSearch color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <InputSearch color="war" variant="bordered" autoFocus placeholder="Normal" />
      <InputSearch color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <InputSearch color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <InputSearch
        color="suc"
        variant="bordered"
        autoFocus
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
      />
    </>
  )
}
