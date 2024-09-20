import { InputFile } from '@pillar-ui/core'

export const InputFileColor = () => {
  return (
    <>
      <InputFile color="pri" variant="bordered" autoFocus />
      <InputFile color="war" variant="bordered" autoFocus />
      <InputFile color="sec" variant="outline" autoFocus />
      <InputFile color="bg" variant="filled" autoFocus />
    </>
  )
}
