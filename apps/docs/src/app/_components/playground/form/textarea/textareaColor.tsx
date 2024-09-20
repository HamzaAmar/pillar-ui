import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'

export const TextareaColor = () => {
  return (
    <>
      <Textarea color="pri" variant="bordered" autoFocus placeholder="Focus" />
      <Textarea color="war" variant="bordered" autoFocus placeholder="Normal" />
      <Textarea color="sec" variant="outline" autoFocus placeholder="Disabled" />
      <Textarea color="bg" variant="filled" autoFocus placeholder="isInvalid" />
      <Textarea color="suc" variant="bordered" autoFocus prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea
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
