import { Flex, Radio } from '@pillar-ui/core'

export const RadioState = () => {
  return (
    <>
      <Flex gap="4" items="center">
        <Radio name="solid.default">Hello World</Radio>
        <Radio name="solid.defaultChecked" defaultChecked>
          Hello World
        </Radio>
        <Radio name="solid.disabled" disabled>
          Hello World
        </Radio>
        <Radio name="solid.disabled-default" disabled defaultChecked>
          Hello World
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="soft" name="soft.default">
          Hello World
        </Radio>
        <Radio variant="soft" name="soft.defaultChecked" defaultChecked>
          Hello World
        </Radio>
        <Radio variant="soft" name="soft.disabled" disabled>
          Hello World
        </Radio>
        <Radio variant="soft" name="soft.disabled-default" disabled defaultChecked>
          Hello World
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="outline" name="outline.default">
          Hello World
        </Radio>
        <Radio variant="outline" name="outline.defaultChecked" defaultChecked>
          Hello World
        </Radio>
        <Radio variant="outline" name="outline.disabled" disabled>
          Hello World
        </Radio>
        <Radio variant="outline" name="outline.disabled-default" disabled defaultChecked>
          Hello World
        </Radio>
      </Flex>
    </>
  )
}
