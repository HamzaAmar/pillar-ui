import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Radio, Flex, RadioGroup, CustomRadio } from '@pillar-ui/core'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  args: {
    children: 'Choose Your Gender',
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
        <Radio color="d" name="red">
          Red
        </Radio>
        <Radio color="su" name="green">
          Green
        </Radio>
        <Radio color="w" name="orange">
          Orange
        </Radio>
        <Radio color="p" name="primary">
          Primary
        </Radio>
        <Radio color="b" name="b">
          Background
        </Radio>
        <Radio color="se" name="se">
          Secondary
        </Radio>
        <Radio color="i" name="i">
          info
        </Radio>
      </Flex>
    </div>
  )
}

export function RadioDefaultCheck() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio defaultChecked color="d" name="solid.red">
          Red
        </Radio>
        <Radio defaultChecked color="su" name="solid.green">
          Green
        </Radio>
        <Radio defaultChecked color="w" name="solid.orange">
          Orange
        </Radio>
        <Radio defaultChecked color="p" name="solid.primary">
          Primary
        </Radio>
        <Radio defaultChecked color="b" name="solid.bg">
          Background
        </Radio>
        <Radio defaultChecked color="se" name="solid.secondary">
          Secondary
        </Radio>
        <Radio defaultChecked color="i" name="solid.info">
          Info
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio defaultChecked variant="outline" color="d" name="outline.red">
          Red
        </Radio>
        <Radio defaultChecked variant="outline" color="su" name="outline.green">
          Green
        </Radio>
        <Radio defaultChecked variant="outline" color="w" name="outline.orange">
          Green
        </Radio>
        <Radio defaultChecked variant="outline" color="p" name="outline.primary">
          Green
        </Radio>
        <Radio defaultChecked variant="outline" color="b" name="outline.bg">
          Green
        </Radio>
        <Radio defaultChecked variant="outline" color="se" name="outline.secondary">
          Green
        </Radio>
        <Radio defaultChecked variant="outline" color="i" name="outline.info">
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio defaultChecked variant="soft" color="d" name="soft.red">
          Red
        </Radio>
        <Radio defaultChecked variant="soft" color="su" name="soft.green">
          Green
        </Radio>
        <Radio defaultChecked variant="soft" color="w" name="soft.orange">
          Green
        </Radio>
        <Radio defaultChecked variant="soft" color="p" name="soft.primary">
          Green
        </Radio>
        <Radio defaultChecked variant="soft" color="b" name="soft.bg">
          Green
        </Radio>
        <Radio defaultChecked variant="soft" color="se" name="soft.secondary">
          Green
        </Radio>
        <Radio defaultChecked variant="soft" color="i" name="soft.info">
          Green
        </Radio>
      </Flex>
    </div>
  )
}

export function RadioVariants() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio color="d" name="red">
          Red
        </Radio>
        <Radio color="su" name="green">
          Green
        </Radio>
        <Radio color="w" name="orange">
          Green
        </Radio>
        <Radio color="p" name="primary">
          Green
        </Radio>
        <Radio color="b" name="b">
          Green
        </Radio>
        <Radio color="se" name="se">
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="outline" color="d" name="red2">
          Red
        </Radio>
        <Radio variant="outline" color="su" name="green2">
          Green
        </Radio>
        <Radio variant="outline" color="w" name="orange2">
          Green
        </Radio>
        <Radio variant="outline" color="p" name="pri2">
          Green
        </Radio>
        <Radio variant="outline" color="b" name="bg2">
          Green
        </Radio>
        <Radio variant="outline" color="se" name="sec2">
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="soft" color="d" name="red3">
          Red
        </Radio>
        <Radio variant="soft" color="su" name="green3">
          Green
        </Radio>
        <Radio variant="soft" color="w" name="orange3">
          Green
        </Radio>
        <Radio variant="soft" color="p" name="pri3">
          Green
        </Radio>
        <Radio variant="soft" color="b" name="bg3">
          Green
        </Radio>
        <Radio variant="soft" color="se" name="sec3">
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="mixed" color="d" name="mixed.red">
          Red
        </Radio>
        <Radio variant="mixed" color="su" name="mixed.green">
          Green
        </Radio>
        <Radio variant="mixed" color="w" name="mixed.orange">
          Green
        </Radio>
        <Radio variant="mixed" color="p" name="mixed.primary">
          Green
        </Radio>
        <Radio variant="mixed" color="b" name="mixed.b">
          Green
        </Radio>
        <Radio variant="mixed" color="se" name="mixed.se">
          Green
        </Radio>
      </Flex>
    </div>
  )
}

export function RadioSizes() {
  return (
    <Flex gap="4" items="center">
      <Radio size="1" name="red">
        Red
      </Radio>
      <Radio size="2" name="green">
        Green
      </Radio>
      <Radio size="3" name="orange">
        Green
      </Radio>
      <Radio size="4" name="primary">
        Green
      </Radio>
      <Radio size="6" name="b">
        Green
      </Radio>
      <Radio size="9" name="se">
        Green
      </Radio>
    </Flex>
  )
}

export function RadioStates() {
  return (
    <div className="Sf-4">
      <Flex gap="4" items="center">
        <Radio name="red">Red</Radio>
        <Radio name="red" defaultChecked>
          Green
        </Radio>
        <Radio name="red" disabled>
          Green
        </Radio>
        <Radio name="red" disabled defaultChecked>
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="soft" name="red">
          Red
        </Radio>
        <Radio variant="soft" name="checked.red" defaultChecked>
          Green
        </Radio>
        <Radio variant="soft" name="red" disabled>
          Green
        </Radio>
        <Radio variant="soft" name="disabled.checked.red" disabled defaultChecked>
          Green
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio variant="outline" name="red">
          Red
        </Radio>
        <Radio variant="outline" name="red" defaultChecked>
          Green
        </Radio>
        <Radio variant="outline" name="red" disabled>
          Green
        </Radio>
        <Radio variant="outline" name="red" disabled defaultChecked>
          Green
        </Radio>
      </Flex>
    </div>
  )
}

export function RadioGroupHorizontal() {
  return (
    <RadioGroup direction="row" label="Choose you Color">
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
    </RadioGroup>
  )
}

export function RadioGroupVertical() {
  return (
    <RadioGroup label="Choose you Color">
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
      <Radio name="red">Red</Radio>
    </RadioGroup>
  )
}

export function RadioGroupVl() {
  return (
    <RadioGroup name="red" label="Choose you Color" showLabel size="6" color="d">
      <Radio>Green</Radio>
      <Radio>Green</Radio>
      <Radio>Green</Radio>
      <Radio>Green</Radio>
    </RadioGroup>
  )
}

export function RadioGroupLongText() {
  return (
    <RadioGroup name="red" label="Choose you Color" showLabel size="5" color="d">
      <Radio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam
        officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
      </Radio>
      <Radio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam
        officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
      </Radio>
      <Radio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam
        officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
      </Radio>
      <Radio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam
        officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
      </Radio>
    </RadioGroup>
  )
}

export function CustomRadioTest() {
  return (
    <CustomRadio
      name="hello"
      label="Choose you Color"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe laborum, iste ad eaque animi laboriosam
      officiis architecto at, esse magnam eos dolorem! Culpa odit temporibus ab excepturi, fugiat a?
    </CustomRadio>
  )
}

export const Playground: StoryObj<typeof Radio> = {}
