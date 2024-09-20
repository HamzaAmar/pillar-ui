import { Flex, Radio } from '@pillar-ui/core'

export const RadioState = () => {
  return (
    <>
      <Flex gap="sm" items="center">
        <Radio name="solid.default" label="Red" />
        <Radio name="solid.defaultChecked" label="Red" defaultChecked />
        <Radio name="solid.disabled" label="Red" disabled />
        <Radio name="solid.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" name="soft.default" label="Red" />
        <Radio variant="soft" name="soft.defaultChecked" label="Red" defaultChecked />
        <Radio variant="soft" name="soft.disabled" label="Red" disabled />
        <Radio variant="soft" name="soft.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" name="outline.default" label="Red" />
        <Radio variant="outline" name="outline.defaultChecked" label="Red" defaultChecked />
        <Radio variant="outline" name="outline.disabled" label="Red" disabled />
        <Radio variant="outline" name="outline.disabled-default" label="Red" disabled defaultChecked />
      </Flex>
    </>
  )
}
