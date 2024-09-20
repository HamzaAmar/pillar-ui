import { Input } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputColor = () => {
  return (
    <>
      <Input color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <Input color="war" variant="bordered" autoFocus placeholder="Normal" />
      <Input color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <Input color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <Input color="suc" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        color="dan"
        variant="bordered"
        autoFocus
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </>
  )
}
