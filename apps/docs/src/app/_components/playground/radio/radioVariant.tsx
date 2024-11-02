import { Radio } from '@pillar-ui/core'

export const RadioVariant = () => {
  return (
    <>
      <Radio name="default.se">Hello World</Radio>
      <Radio variant="solid" name="se">
        Hello World
      </Radio>
      <Radio variant="outline" name="outline.sec2">
        Hello World
      </Radio>
      <Radio variant="soft" name="soft.sec3">
        Hello World
      </Radio>
      <Radio variant="mixed" name="mixed.sec3">
        Hello World
      </Radio>
    </>
  )
}
