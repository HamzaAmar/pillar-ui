import { Checkbox, Flex } from '@pillar-ui/core'

export const CheckboxVariant = () => {
  return (
    <div className="Sf-4">
      <Flex gap="4">
        <Checkbox name="hello" defaultChecked variant="solid">
          Hello world
        </Checkbox>
        <Checkbox name="hello" defaultChecked variant="soft">
          Hello world
        </Checkbox>
        <Checkbox name="hello" defaultChecked variant="mixed">
          Hello world
        </Checkbox>
        <Checkbox name="hello" defaultChecked variant="outline">
          Hello world
        </Checkbox>
      </Flex>

      <Flex gap="4">
        <Checkbox name="hello" isIndeterminate variant="solid">
          Hello world
        </Checkbox>
        <Checkbox name="hello" isIndeterminate variant="soft">
          Hello world
        </Checkbox>
        <Checkbox name="hello" isIndeterminate variant="mixed">
          Hello world
        </Checkbox>
        <Checkbox name="hello" isIndeterminate variant="outline">
          Hello world
        </Checkbox>
      </Flex>
    </div>
  )
}
