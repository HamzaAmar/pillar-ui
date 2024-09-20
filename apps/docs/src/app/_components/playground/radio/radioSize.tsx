import { Radio } from '@pillar-ui/core'

export const RadioSize = () => {
  return (
    <>
      <Radio size="3xs" name="red" label="Red" />
      <Radio size="2xs" name="green" label="Green" />
      <Radio size="xs" name="orange" label="Orange" />
      <Radio size="sm" name="pri" label="pri" />
      <Radio size="lg" name="bg" label="Slate" />
      <Radio size="3xl" name="sec" label="Secondary" />
    </>
  )
}
