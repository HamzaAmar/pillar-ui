import { Radio } from '@pillar-ui/core'

export function RadioDefaultCheck() {
  return (
    <>
      <Radio variant="soft" name="checked.red" label="Red" defaultChecked />
      <Radio variant="outline" name="outline.red" label="Red" defaultChecked />
      <Radio name="default.red" label="Red" defaultChecked />
    </>
  )
}
