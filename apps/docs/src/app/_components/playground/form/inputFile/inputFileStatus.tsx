import { InputFile } from '@pillar-ui/core'

export const InputFileStatus = () => {
  return (
    <>
      <InputFile />
      <InputFile readOnly />
      <InputFile disabled />
      <InputFile isInvalid />
    </>
  )
}
