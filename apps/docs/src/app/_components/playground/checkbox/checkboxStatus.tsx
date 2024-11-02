import { Checkbox } from '@pillar-ui/core'

export const CheckboxStatus = () => {
  return (
    <>
      <Checkbox name="hello">Hello world</Checkbox>
      <Checkbox name="hello" checked>
        Hello world
      </Checkbox>
      <Checkbox name="hello" isIndeterminate>
        Hello world
      </Checkbox>
      <Checkbox name="hello" isIndeterminate checked>
        Hello world
      </Checkbox>
    </>
  )
}
