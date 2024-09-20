import { InputFile } from '@pillar-ui/core'

export const InputFileFilled = () => {
  return (
    <>
      <InputFile aria-label="hello" autoFocus variant="filled" />
      <InputFile aria-label="hello" variant="filled" />
      <InputFile aria-label="hello" disabled variant="filled" />
      <InputFile aria-label="hello" isInvalid variant="filled" />
    </>
  )
}
