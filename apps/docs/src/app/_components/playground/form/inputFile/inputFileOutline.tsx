import { InputFile } from '@pillar-ui/core'

export const InputFileOutline = () => {
  return (
    <>
      <InputFile variant="outline" aria-label="hello" autoFocus />
      <InputFile variant="outline" aria-label="hello" />
      <InputFile variant="outline" aria-label="hello" disabled />
      <InputFile variant="outline" aria-label="hello" isInvalid />
    </>
  )
}
