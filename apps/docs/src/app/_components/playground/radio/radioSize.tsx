import { Radio } from '@pillar-ui/core'

export const RadioSize = () => {
  return (
    <>
      <Radio size="3xs" name="red" label="Red" />
      <Radio size="2xs" name="green" label="Green" />
      <Radio size="xs" name="orange" label="Orange" />
      <Radio size="sm" name="primary" label="primary" />
      <Radio size="lg" name="b" label="Slate" />
      <Radio size="3xl" name="se" label="Secondary" />
    </>
  )
}
