import { Radio } from '@pillar-ui/core'

export const RadioColor = () => {
  return (
    <>
      <Radio color="d" name="red" label="Red" />
      <Radio color="s" name="green" label="Green" />
      <Radio color="w" name="orange" label="Orange" />
      <Radio color="p" name="pri" label="Primary" />
      <Radio color="b" name="bg" label="Slate" />
      <Radio color="se" name="sec" label="Secondary" />
    </>
  )
}
