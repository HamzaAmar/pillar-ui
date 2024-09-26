import { InputFile } from '@pillar-ui/core'

export const InputFileColor = () => {
  return (
    <>
      <InputFile color="p" variant="bordered" autoFocus />
      <InputFile color="w" variant="bordered" autoFocus />
      <InputFile color="se" variant="outline" autoFocus />
      <InputFile color="b" variant="filled" autoFocus />
    </>
  )
}
