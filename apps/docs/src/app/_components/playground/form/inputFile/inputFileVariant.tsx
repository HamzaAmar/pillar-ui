import { InputFile } from '@pillar-ui/core'

export const InputFileVariant = () => {
  return (
    <>
      <InputFile aria-label="hello" variant="bordered" />
      <InputFile aria-label="hello" variant="filled" />
      <InputFile aria-label="hello" variant="outline" />
    </>
  )
}
