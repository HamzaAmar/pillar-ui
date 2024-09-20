import { Radio } from '@pillar-ui/core'

export const RadioVariant = () => {
  return (
    <>
      <Radio color="sec" name="sec" label="Secondary" />
      <Radio variant="outline" color="sec" name="sec2" label="Secondary" />
      <Radio variant="soft" color="sec" name="sec3" label="Secondary" />
    </>
  )
}
