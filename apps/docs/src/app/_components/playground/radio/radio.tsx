import { Avatar, Radio, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const RadioPlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const RadioSizes = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Radio size="3xs" name="red" label="Red" />
      <Radio size="2xs" name="green" label="Green" />
      <Radio size="xs" name="orange" label="Orange" />
      <Radio size="sm" name="pri" label="pri" />
      <Radio size="lg" name="bg" label="Slate" />
      <Radio size="3xl" name="sec" label="Secondary" />
    </Paper>
  )
}

export const RadioVariants = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Radio color="sec" name="sec" label="Secondary" />
      <Radio variant="outline" color="sec" name="sec2" label="Secondary" />
      <Radio variant="soft" color="sec" name="sec3" label="Secondary" />
    </Paper>
  )
}

export const RadioState = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
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
    </Paper>
  )
}
export const RadioLabel = () => {
  return (
    <Paper as={Flex} gap="sm" items="center" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Radio label="Option 1" />
    </Paper>
  )
}

export const RadioColors = () => {
  return (
    <Paper className="playground" border p="sm" as={Flex} items="center" gap="sm" background="bg-3" corner="sm">
      <Radio color="dan" name="red" label="Red" />
      <Radio color="suc" name="green" label="Green" />
      <Radio color="war" name="orange" label="Orange" />
      <Radio color="pri" name="pri" label="Primary" />
      <Radio color="bg" name="bg" label="Slate" />
      <Radio color="sec" name="sec" label="Secondary" />
    </Paper>
  )
}

export function RadioDefaultCheck() {
  return (
    <Paper className="playground" border p="sm" as={Flex} items="center" gap="sm" background="bg-3" corner="sm">
      <Flex gap="sm" items="center">
        <Radio variant="soft" name="checked.red" label="Red" defaultChecked />
        <Radio variant="outline" name="outline.red" label="Red" defaultChecked />
        <Radio name="default.red" label="Red" defaultChecked />
      </Flex>
    </Paper>
  )
}
