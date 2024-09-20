import { Checkbox } from '@pillar-ui/core'

export const CheckboxStatus = () => {
  return (
    <>
      <Checkbox name="hello" label="Hello" />
      <Checkbox name="hello" label="Hello" checked />
      <Checkbox name="hello" label="Hello" isIndeterminate />
      <Checkbox name="hello" label="Hello" isIndeterminate checked />
    </>
  )
}
