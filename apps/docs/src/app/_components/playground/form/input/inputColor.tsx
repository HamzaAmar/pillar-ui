import { Input } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const InputColor = () => {
  return (
    <>
      <Input color="p" variant="bordered" autoFocus placeholder="Focus" />
      <Input color="w" variant="bordered" autoFocus placeholder="Normal" />
      <Input color="se" variant="outline" autoFocus placeholder="Disabled" />
      <Input color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <Input color="su" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        color="d"
        variant="bordered"
        autoFocus
        prefixInput={'https://'}
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </>
  )
}
