import React from 'react'
import { FormController, Input, InputPassword } from '@pillar/core'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/form/FormController',
  component: FormController,
  args: {
    'aria-label': 'Nice to Meet You',
  },
} as ComponentMeta<typeof FormController>

export const BasicFormController = () => {
  return (
    <div className="l_flow-md">
      <FormController label="Hello">
        <Input fluid name="name" required />
      </FormController>
      <FormController label="Hello" error="Email Is Required">
        <Input fluid name="name" isInvalid required />
      </FormController>
      <FormController label="Hello" hint="Email must have at least 5 character and special characters">
        <InputPassword fluid name="name" required />
      </FormController>
      <FormController
        label="Hello"
        error="Password Required"
        hint="Email must have at least 5 character and special characters"
      >
        <InputPassword fluid isInvalid name="name" required />
      </FormController>
    </div>
  )
}

const Template: ComponentStory<typeof FormController> = (args) => <FormController {...args} />
export const Playground = Template.bind({})
