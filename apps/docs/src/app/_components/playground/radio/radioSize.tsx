import { Radio } from '@pillar-ui/core'

export const RadioSize = () => {
  return (
    <>
      <Radio size="1" name="red" label="Red" />
      <Radio gap="2" name="green" label="Green" />
      <Radio gap="3" name="orange" label="Orange" />
      <Radio size="4" name="primary" label="primary" />
      <Radio gap="6" name="b" label="Slate" />
      <Radio gap="9" name="se" label="Secondary" />
    </>
  )
}
