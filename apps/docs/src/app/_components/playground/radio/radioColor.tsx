import { Radio } from '@pillar-ui/core'

export const RadioColor = () => {
  return (
    <>
      <Radio color="d" name="danger" label="Danger" />
      <Radio color="su" name="success" label="Success" />
      <Radio color="w" name="warning" label="Warning" />
      <Radio color="p" name="primary" label="Primary" />
      <Radio color="i" name="info" label="Info" />
      <Radio color="se" name="secondary" label="Secondary" />
      <Radio color="b" name="background" label="background" />
    </>
  )
}
