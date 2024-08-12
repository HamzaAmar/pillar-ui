import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Radio, Flex, RadioGroup } from '@pillar-ui/core'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: {
    label: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

export function RadioColors() {
  return (
    <div>
      <Flex gap="sm" items="center">
        <Radio color="dan" name="red" label="Red" />
        <Radio color="suc" name="green" label="Green" />
        <Radio color="war" name="orange" label="Orange" />
        <Radio color="pri" name="pri" label="Primary" />
        <Radio color="bg" name="bg" label="bg" />
        <Radio color="sec" name="sec" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioDefaultCheck() {
  return (
    <div className="l_f-md">
      <Flex gap="sm" items="center">
        <Radio defaultChecked color="dan" name="solid.red" label="Red" />
        <Radio defaultChecked color="suc" name="solid.green" label="Green" />
        <Radio defaultChecked color="war" name="solid.orange" label="Orange" />
        <Radio defaultChecked color="pri" name="solid.primary" label="Primary" />
        <Radio defaultChecked color="bg" name="solid.bg" label="bg" />
        <Radio defaultChecked color="sec" name="solid.secondary" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="outline" color="dan" name="outline.red" label="Red" />
        <Radio defaultChecked variant="outline" color="suc" name="outline.green" label="Green" />
        <Radio defaultChecked variant="outline" color="war" name="outline.orange" label="Orange" />
        <Radio defaultChecked variant="outline" color="pri" name="outline.primary" label="Primary" />
        <Radio defaultChecked variant="outline" color="bg" name="outline.bg" label="bg" />
        <Radio defaultChecked variant="outline" color="sec" name="outline.secondary" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio defaultChecked variant="soft" color="dan" name="soft.red" label="Red" />
        <Radio defaultChecked variant="soft" color="suc" name="soft.green" label="Green" />
        <Radio defaultChecked variant="soft" color="war" name="soft.orange" label="Orange" />
        <Radio defaultChecked variant="soft" color="pri" name="soft.primary" label="Primary" />
        <Radio defaultChecked variant="soft" color="bg" name="soft.bg" label="bg" />
        <Radio defaultChecked variant="soft" color="sec" name="soft.secondary" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioVariants() {
  return (
    <div className="l_f-md">
      <Flex gap="sm" items="center">
        <Radio color="dan" name="red" label="Red" />
        <Radio color="suc" name="green" label="Green" />
        <Radio color="war" name="orange" label="Orange" />
        <Radio color="pri" name="pri" label="Primary" />
        <Radio color="bg" name="bg" label="bg" />
        <Radio color="sec" name="sec" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="outline" color="dan" name="red2" label="Red" />
        <Radio variant="outline" color="suc" name="green2" label="Green" />
        <Radio variant="outline" color="war" name="orange2" label="Orange" />
        <Radio variant="outline" color="pri" name="pri2" label="Primary" />
        <Radio variant="outline" color="bg" name="bg2" label="bg" />
        <Radio variant="outline" color="sec" name="sec2" label="Secondary" />
      </Flex>
      <Flex gap="sm" items="center">
        <Radio variant="soft" color="dan" name="red3" label="Red" />
        <Radio variant="soft" color="suc" name="green3" label="Green" />
        <Radio variant="soft" color="war" name="orange3" label="Orange" />
        <Radio variant="soft" color="pri" name="pri3" label="Primary" />
        <Radio variant="soft" color="bg" name="bg3" label="bg" />
        <Radio variant="soft" color="sec" name="sec3" label="Secondary" />
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
      <Radio size="sm" name="pri" label="Primary" />
      <Radio size="lg" name="bg" label="bg" />
      <Radio size="3xl" name="sec" label="Secondary" />
    </Flex>
  )
}

export function RadioStates() {
  return (
    <div className="l_f-md">
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
    <RadioGroup direction="row" label="Choose you Color">
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
    </RadioGroup>
  )
}

export function RadioGroupVertical() {
  return (
    <RadioGroup label="Choose you Color">
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
      <Radio name="red" label="Red" />
    </RadioGroup>
  )
}

export function RadioGroupVl() {
  return (
    <RadioGroup name="red" label="Choose you Color" showLabel size="lg" color="dan">
      <Radio label="Nice" />
      <Radio label="To Meet" />
      <Radio label="Here IN " />
      <Radio label="Morocco" />
    </RadioGroup>
  )
}

export function RadioGroupLongText() {
  return (
    <RadioGroup name="red" label="Choose you Color" showLabel size="md" color="dan">
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
    </RadioGroup>
  )
}

export const Playground: StoryObj<typeof Radio> = {}
