import React, { ChangeEvent, FormEvent, useState } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, InputNumber } from '@pillar/core'

export default {
  title: 'Components/Form/InputNumber',
  component: InputNumber,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof InputNumber>

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputNumber size="sm" placeholder="Small(sm)" />
      <InputNumber placeholder="Medium (md default You don't need it)" />
      <InputNumber size="lg" placeholder="Large(lg)" />
    </Flex>
  )
}

export const StepInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputNumber step="1" size="sm" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" size="lg" placeholder="Step 0.1" />
    </Flex>
  )
}

export const StepAndMaxInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </Flex>
  )
}

export const InputValueUpdateCheck = () => {
  const [value, setValue] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }
  return (
    <Flex gap="sm" direction="column">
      <h1>value:{value}</h1>
      <InputNumber value={value} onChange={handleChange} step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber value={value} onChange={handleChange} step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber value={value} onChange={handleChange} step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </Flex>
  )
}

export const Playground = Template.bind({})
