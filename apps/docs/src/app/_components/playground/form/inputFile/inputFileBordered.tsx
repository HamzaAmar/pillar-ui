import { InputFile } from '@pillar-ui/core'

export const InputFileBordered = () => {
  return (
    <>
      <InputFile variant="bordered" aria-label="hello" autoFocus />
      <InputFile variant="bordered" aria-label="hello" />
      <InputFile variant="bordered" aria-label="hello" disabled />
      <InputFile variant="bordered" aria-label="hello" isInvalid />
    </>
  )
}
