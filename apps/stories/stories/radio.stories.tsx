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
        <Radio color="red" name="red" label="Red" />
        <Radio color="green" name="green" label="Green" />
        <Radio color="orange" name="orange" label="Orange" />
        <Radio color="indigo" name="indigo" label="Indigo" />
        <Radio color="brown" name="brown" label="Brown" />
        <Radio color="slate" name="slate" label="Slate" />
        <Radio color="purple" name="purple" label="Purple" />
        <Radio color="violet" name="violet" label="Violet" />
      </Flex>
    </div>
  )
}

export function RadioDefaultCheck() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Radio defaultChecked color="red" name="solid.red" label="Red" />
        <Radio defaultChecked color="green" name="solid.green" label="Green" />
        <Radio defaultChecked color="orange" name="solid.orange" label="Orange" />
        <Radio defaultChecked color="indigo" name="solid.indigo" label="Indigo" />
        <Radio defaultChecked color="brown" name="solid.brown" label="Brown" />
        <Radio defaultChecked color="slate" name="solid.slate" label="Slate" />
        <Radio defaultChecked color="purple" name="solid.purple" label="Purple" />
        <Radio defaultChecked color="violet" name="solid.violet" label="Violet" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="outline" color="red" name="outline.red" label="Red" />
        <Radio defaultChecked variant="outline" color="green" name="outline.green" label="Green" />
        <Radio defaultChecked variant="outline" color="orange" name="outline.orange" label="Orange" />
        <Radio defaultChecked variant="outline" color="indigo" name="outline.indigo" label="Indigo" />
        <Radio defaultChecked variant="outline" color="brown" name="outline.brown" label="Brown" />
        <Radio defaultChecked variant="outline" color="slate" name="outline.slate" label="Slate" />
        <Radio defaultChecked variant="outline" color="purple" name="outline.purple" label="Purple" />
        <Radio defaultChecked variant="outline" color="violet" name="outline.violet" label="Violet" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="soft" color="red" name="soft.red" label="Red" />
        <Radio defaultChecked variant="soft" color="green" name="soft.green" label="Green" />
        <Radio defaultChecked variant="soft" color="orange" name="soft.orange" label="Orange" />
        <Radio defaultChecked variant="soft" color="indigo" name="soft.indigo" label="Indigo" />
        <Radio defaultChecked variant="soft" color="brown" name="soft.brown" label="Brown" />
        <Radio defaultChecked variant="soft" color="slate" name="soft.slate" label="Slate" />
        <Radio defaultChecked variant="soft" color="purple" name="soft.purple" label="Purple" />
        <Radio defaultChecked variant="soft" color="violet" name="soft.violet" label="Violet" />
      </Flex>
    </div>
  )
}

export function RadioVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm" items="center">
        <Radio color="red" name="red" label="Red" />
        <Radio color="green" name="green" label="Green" />
        <Radio color="orange" name="orange" label="Orange" />
        <Radio color="indigo" name="indigo" label="Indigo" />
        <Radio color="brown" name="brown" label="Brown" />
        <Radio color="slate" name="slate" label="Slate" />
        <Radio color="purple" name="purple" label="Purple" />
        <Radio color="violet" name="violet" label="Violet" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" color="red" name="red2" label="Red" />
        <Radio variant="outline" color="green" name="green2" label="Green" />
        <Radio variant="outline" color="orange" name="orange2" label="Orange" />
        <Radio variant="outline" color="indigo" name="indigo2" label="Indigo" />
        <Radio variant="outline" color="brown" name="brown2" label="Brown" />
        <Radio variant="outline" color="slate" name="slate2" label="Slate" />
        <Radio variant="outline" color="purple" name="purple2" label="Purple" />
        <Radio variant="outline" color="violet" name="violet2" label="Violet" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" color="red" name="red3" label="Red" />
        <Radio variant="soft" color="green" name="green3" label="Green" />
        <Radio variant="soft" color="orange" name="orange3" label="Orange" />
        <Radio variant="soft" color="indigo" name="indigo3" label="Indigo" />
        <Radio variant="soft" color="brown" name="brown3" label="Brown" />
        <Radio variant="soft" color="slate" name="slate3" label="Slate" />
        <Radio variant="soft" color="purple" name="purple3" label="Purple" />
        <Radio variant="soft" color="violet" name="violet3" label="Violet" />
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
      <Radio size="sm" name="indigo" label="Indigo" />
      <Radio size="md" name="brown" label="Brown" />
      <Radio size="lg" name="slate" label="Slate" />
      <Radio size="2xl" name="purple" label="Purple" />
      <Radio size="3xl" name="violet" label="Violet" />
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
    <Radio.Group name="red" label="Choose you Color" showLabel size="lg" color="red">
      <Radio label="Nice" />
      <Radio label="To Meet" />
      <Radio label="Here IN " />
      <Radio label="Morocco" />
    </Radio.Group>
  )
}

export function RadioGroupLongText() {
  return (
    <Radio.Group name="red" label="Choose you Color" showLabel size="md" color="red">
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
