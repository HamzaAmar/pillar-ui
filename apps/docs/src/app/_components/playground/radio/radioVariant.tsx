import { Radio } from '@pillar-ui/core'

export const RadioVariant = () => {
  return (
    <>
      <Radio color="se" name="sec" label="Secondary" />
      <Radio variant="outline" color="se" name="sec2" label="Secondary" />
      <Radio variant="soft" color="se" name="sec3" label="Secondary" />
    </>
  )
}
