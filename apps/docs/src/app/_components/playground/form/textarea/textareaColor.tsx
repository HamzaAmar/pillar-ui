import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const TextareaColor = () => {
  return (
    <>
      <Textarea color="p" variant="bordered" autoFocus placeholder="Focus" />
      <Textarea color="w" variant="bordered" autoFocus placeholder="Normal" />
      <Textarea color="se" variant="outline" autoFocus placeholder="Disabled" />
      <Textarea color="b" variant="filled" autoFocus placeholder="isInvalid" />
      <Textarea color="s" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
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
