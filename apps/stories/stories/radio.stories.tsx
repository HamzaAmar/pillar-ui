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
      <Flex gap="4" items="center">
        <Radio color="d" name="red" label="Red" />
        <Radio color="su" name="green" label="Green" />
        <Radio color="w" name="orange" label="Orange" />
        <Radio color="p" name="primary" label="Primary" />
        <Radio color="b" name="b" label="Background" />
        <Radio color="se" name="se" label="Secondary" />
        <Radio color="i" name="i" label="info" />
      </Flex>
    </div>
  )
}

export function RadioDefaultCheck() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio defaultChecked color="d" name="solid.red" label="Red" />
        <Radio defaultChecked color="su" name="solid.green" label="Green" />
        <Radio defaultChecked color="w" name="solid.orange" label="Orange" />
        <Radio defaultChecked color="p" name="solid.primary" label="Primary" />
        <Radio defaultChecked color="b" name="solid.bg" label="b" />
        <Radio defaultChecked color="se" name="solid.secondary" label="Secondary" />
        <Radio defaultChecked color="i" name="solid.info" label="Info" />
      </Flex>
      <Flex gap="4" items="center">
        <Radio defaultChecked variant="outline" color="d" name="outline.red" label="Red" />
        <Radio defaultChecked variant="outline" color="su" name="outline.green" label="Green" />
        <Radio defaultChecked variant="outline" color="w" name="outline.orange" label="Orange" />
        <Radio defaultChecked variant="outline" color="p" name="outline.primary" label="Primary" />
        <Radio defaultChecked variant="outline" color="b" name="outline.bg" label="b" />
        <Radio defaultChecked variant="outline" color="se" name="outline.secondary" label="Secondary" />
        <Radio defaultChecked variant="outline" color="i" name="outline.info" label="Info" />
      </Flex>
      <Flex gap="4" items="center">
        <Radio defaultChecked variant="soft" color="d" name="soft.red" label="Red" />
        <Radio defaultChecked variant="soft" color="su" name="soft.green" label="Green" />
        <Radio defaultChecked variant="soft" color="w" name="soft.orange" label="Orange" />
        <Radio defaultChecked variant="soft" color="p" name="soft.primary" label="Primary" />
        <Radio defaultChecked variant="soft" color="b" name="soft.bg" label="b" />
        <Radio defaultChecked variant="soft" color="se" name="soft.secondary" label="Secondary" />
        <Radio defaultChecked variant="soft" color="i" name="soft.info" label="Info" />
      </Flex>
    </div>
  )
}

export function RadioVariants() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio color="d" name="red" label="Red" />
        <Radio color="su" name="green" label="Green" />
        <Radio color="w" name="orange" label="Orange" />
        <Radio color="p" name="primary" label="Primary" />
        <Radio color="b" name="b" label="b" />
        <Radio color="se" name="se" label="Secondary" />
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="outline" color="d" name="red2" label="Red" />
        <Radio variant="outline" color="su" name="green2" label="Green" />
        <Radio variant="outline" color="w" name="orange2" label="Orange" />
        <Radio variant="outline" color="p" name="pri2" label="Primary" />
        <Radio variant="outline" color="b" name="bg2" label="b" />
        <Radio variant="outline" color="se" name="sec2" label="Secondary" />
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="soft" color="d" name="red3" label="Red" />
        <Radio variant="soft" color="su" name="green3" label="Green" />
        <Radio variant="soft" color="w" name="orange3" label="Orange" />
        <Radio variant="soft" color="p" name="pri3" label="Primary" />
        <Radio variant="soft" color="b" name="bg3" label="b" />
        <Radio variant="soft" color="se" name="sec3" label="Secondary" />
      </Flex>
    </div>
  )
}

export function RadioSizes() {
  return (
    <Flex gap="4" items="center">
      <Radio size="1" name="red" label="Red" />
      <Radio size="2" name="green" label="Green" />
      <Radio size="3" name="orange" label="Orange" />
      <Radio size="4" name="primary" label="Primary" />
      <Radio size="6" name="b" label="b" />
      <Radio size="9" name="se" label="Secondary" />
    </Flex>
  )
}

export function RadioStates() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio name="red" label="Red" />
        <Radio name="red" label="Red" defaultChecked />
        <Radio name="red" label="Red" disabled />
        <Radio name="red" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="soft" name="red" label="Red" />
        <Radio variant="soft" name="checked.red" label="Red" defaultChecked />
        <Radio variant="soft" name="red" label="Red" disabled />
        <Radio variant="soft" name="disabled.checked.red" label="Red" disabled defaultChecked />
      </Flex>
      <Flex gap="4" items="center">
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
    <RadioGroup name="red" label="Choose you Color" showLabel size="6" color="d">
      <Radio label="Nice" />
      <Radio label="To Meet" />
      <Radio label="Here IN " />
      <Radio label="Morocco" />
    </RadioGroup>
  )
}

export function RadioGroupLongText() {
  return (
    <RadioGroup name="red" label="Choose you Color" showLabel size="5" color="d">
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
