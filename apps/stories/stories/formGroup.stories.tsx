import React from 'react'
import { FormGroup, InputNumber, Input } from '@pillar/core'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/form/FormGroup',
  component: FormGroup,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof FormGroup>

const Template: ComponentStory<typeof FormGroup> = (args) => <FormGroup {...args} />

export const SizeInput = () => {
  return (
    <FormGroup title="Name" direction="row">
      <Input fluid name="firstname" placeholder="First Name" />
      <Input fluid name="middlename" placeholder="Middle Name" />
      <Input fluid name="lastname" placeholder="Last Name" />
    </FormGroup>
  )
}

export const StepInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" size="sm" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" size="lg" placeholder="Step 0.1" />
    </FormGroup>
  )
}

export const StepAndMaxInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const HideLabelFormGroup = () => {
  return (
    <FormGroup title="number" showLabel={false} direction="column">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const Playground = Template.bind({})
