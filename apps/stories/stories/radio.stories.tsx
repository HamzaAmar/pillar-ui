import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Radio, Flex } from '@pillar/core'

export default {
  title: 'Components/Radio',
  component: Radio,
  args: {
    Label: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Radio>

export function RadioColors() {
  return (
    <div>
      <Flex gap="sm" items="center">
        <Radio color="danger" name="red" label="Red" />
        <Radio color="success" name="green" label="Green" />
        <Radio color="warning" name="orange" label="Orange" />
        <Radio color="primary" name="primary" label="Primary" />
        <Radio color="surface" name="surface" label="Slate" />
        <Radio color="secondary" name="secondary" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioDefaultCheck() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Radio defaultChecked color="danger" name="solid.red" label="Red" />
        <Radio defaultChecked color="success" name="solid.green" label="Green" />
        <Radio defaultChecked color="warning" name="solid.orange" label="Orange" />
        <Radio defaultChecked color="primary" name="solid.primary" label="Primary" />
        <Radio defaultChecked color="surface" name="solid.surface" label="Slate" />
        <Radio defaultChecked color="secondary" name="solid.secondary" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="outline" color="danger" name="outline.red" label="Red" />
        <Radio defaultChecked variant="outline" color="success" name="outline.green" label="Green" />
        <Radio defaultChecked variant="outline" color="warning" name="outline.orange" label="Orange" />
        <Radio defaultChecked variant="outline" color="primary" name="outline.primary" label="Primary" />
        <Radio defaultChecked variant="outline" color="surface" name="outline.surface" label="Slate" />
        <Radio defaultChecked variant="outline" color="secondary" name="outline.secondary" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="soft" color="danger" name="soft.red" label="Red" />
        <Radio defaultChecked variant="soft" color="success" name="soft.green" label="Green" />
        <Radio defaultChecked variant="soft" color="warning" name="soft.orange" label="Orange" />
        <Radio defaultChecked variant="soft" color="primary" name="soft.primary" label="Primary" />
        <Radio defaultChecked variant="soft" color="surface" name="soft.surface" label="Slate" />
        <Radio defaultChecked variant="soft" color="secondary" name="soft.secondary" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Radio color="danger" name="red" label="Red" />
        <Radio color="success" name="green" label="Green" />
        <Radio color="warning" name="orange" label="Orange" />
        <Radio color="primary" name="primary" label="Primary" />
        <Radio color="surface" name="surface" label="Slate" />
        <Radio color="secondary" name="secondary" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" color="danger" name="red2" label="Red" />
        <Radio variant="outline" color="success" name="green2" label="Green" />
        <Radio variant="outline" color="warning" name="orange2" label="Orange" />
        <Radio variant="outline" color="primary" name="primary2" label="Primary" />
        <Radio variant="outline" color="surface" name="surface2" label="Slate" />
        <Radio variant="outline" color="secondary" name="secondary2" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" color="danger" name="red3" label="Red" />
        <Radio variant="soft" color="success" name="green3" label="Green" />
        <Radio variant="soft" color="warning" name="orange3" label="Orange" />
        <Radio variant="soft" color="primary" name="primary3" label="Primary" />
        <Radio variant="soft" color="surface" name="surface3" label="Slate" />
        <Radio variant="soft" color="secondary" name="secondary3" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioSizes() {
  return (
    <Flex gap="sm" items="center">
      <Radio size="3xs" name="red" label="Red" />
      <Radio size="2xs" name="green" label="Green" />
      <Radio size="xs" name="orange" label="Orange" />
      <Radio size="sm" name="primary" label="Primary" />
      <Radio size="lg" name="surface" label="Slate" />
      <Radio size="3xl" name="secondary" label="Secondary" />
    </Flex>
  )
}

export function RadioStates() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Radio name="red" label="Red" />
        <Radio name="red" label="Red" defaultChecked />
        <Radio name="red" label="Red" disabled />
        <Radio name="red" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" name="red" label="Red" />
        <Radio variant="soft" name="checked.red" label="Red" defaultChecked />
        <Radio variant="soft" name="red" label="Red" disabled />
        <Radio variant="soft" name="disabled.checked.red" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" name="red" label="Red" />
        <Radio variant="outline" name="red" label="Red" defaultChecked />
        <Radio variant="outline" name="red" label="Red" disabled />
        <Radio variant="outline" name="red" label="Red" disabled defaultChecked />
      </Flex>
    </div>
  )
}

export function RadioGroupHorizontal() {
  return (
    <Radio.Group direction="row" label="Choose you Color">
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
    </Radio.Group>
  )
}

export function RadioGroupVertical() {
  return (
    <Radio.Group label="Choose you Color">
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
    </Radio.Group>
  )
}

export function RadioGroupVl() {
  return (
    <Radio.Group name="red" label="Choose you Color" showLabel size="lg" color="danger">
      <Radio label="Nice" />
      <Radio label="To Meet" />
      <Radio label="Here IN " />
      <Radio label="Morocco" />
    </Radio.Group>
  )
}

export function RadioGroupLongText() {
  return (
    <Radio.Group name="red" label="Choose you Color" showLabel size="md" color="danger">
      <Radio
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
"
      />
      <Radio
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
"
      />
      <Radio
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
 "
      />
      <Radio
        label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
"
      />
    </Radio.Group>
  )
}

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Playground = Template.bind({})
