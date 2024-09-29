import React from 'react'
import { FormController, Input, InputPassword, Textarea, InputNumber, Select } from '@pillar-ui/core'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof FormController> = {
  title: 'Components/form/FormController',
  component: FormController,
  args: {},
}

export default meta

export const FormControllerError = () => {
  return (
    <div className="Sf5">
      <FormController label="Hello">
        <Input fluid name="name" required />
      </FormController>
      <FormController label="Subject" error="The minimum length for this field is 5 characters.">
        <Textarea name="subject" />
      </FormController>
      <FormController label="Password" error="Your password must contain at least one uppercase character.">
        <InputPassword fluid name="name" required />
      </FormController>

      <FormController label="Age" error="the age field need to be greater that 1">
        <InputNumber name="age" defaultValue={1} fluid required />
      </FormController>

      <FormController label="Age" error="the age field need to be greater that 1">
        <Select name="age" fluid required>
          <option value="">Choose the best Option</option>
          <option value="hello">Hello</option>
          <option value="howare">How are </option>
          <option value="guys">You guys</option>
          <option value="woow">WOOOOOOOW</option>
        </Select>
      </FormController>
    </div>
  )
}

export const FormControllerHint = () => {
  return (
    <div className="Sf5">
      <FormController label="Hello">
        <Input fluid name="name" required />
      </FormController>
      <FormController label="Subject" hint="The minimum length for this field is 5 characters.">
        <Textarea name="subject" />
      </FormController>
      <FormController label="Password" hint="Your password must contain at least one uppercase character.">
        <InputPassword fluid name="name" required />
      </FormController>

      <FormController label="Age" hint="the age field need to be greater that 1">
        <InputNumber name="age" defaultValue={1} fluid required />
      </FormController>

      <FormController label="Age" hint="the age field need to be greater that 1">
        <Select name="age" fluid required>
          <option value="">Choose the best Option</option>
          <option value="hello">Hello</option>
          <option value="howare">How are </option>
          <option value="guys">You guys</option>
          <option value="woow">WOOOOOOOW</option>
        </Select>
      </FormController>
    </div>
  )
}

export const FormControllerErrorAndHint = () => {
  return (
    <div className="Sf5">
      <FormController label="Hello">
        <Input fluid name="name" required />
      </FormController>
      <FormController
        label="Subject"
        hint="The minimum length for this field is 5 characters."
        error="The minimum length for this field is 5 characters."
      >
        <Textarea name="subject" />
      </FormController>
      <FormController
        label="Password"
        hint="Your password must contain at least one uppercase character, one lowercase character, and one special character."
        error="Your password must contain at least one uppercase character."
      >
        <InputPassword fluid name="name" required />
      </FormController>

      <FormController
        label="Age"
        error="the age field need to be greater that 1"
        hint="the age field need to be greater that 1"
      >
        <InputNumber name="age" defaultValue={1} fluid required />
      </FormController>

      <FormController
        label="Age"
        hint="the age field need to be greater that 1"
        error="the age field need to be greater that 1"
      >
        <Select name="age" fluid required>
          <option value="">Choose the best Option</option>
          <option value="hello">Hello</option>
          <option value="howare">How are </option>
          <option value="guys">You guys</option>
          <option value="woow">WOOOOOOOW</option>
        </Select>
      </FormController>
    </div>
  )
}

export const Playground = {}
