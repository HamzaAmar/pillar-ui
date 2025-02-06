import React from 'react'
import type { Meta } from '@storybook/react'
import { Fieldset, Radio, FormController, Input, InputPassword } from '@pillar-ui/core'

const meta: Meta<typeof Fieldset> = {
  title: 'Components/Fieldset',
  component: Fieldset,
  args: {
    title: 'Esc',
  },
}

export default meta

export const FieldsetBase = () => {
  return (
    <Fieldset legend="Hellow World">
      <FormController label="Name">
        <Input placeholder="Hellow World" />
      </FormController>
      <FormController label="Email">
        <Input type="email" />
      </FormController>
      <FormController label="Hellow World">
        <InputPassword />
      </FormController>
    </Fieldset>
  )
}

export const FieldsetDirection = () => {
  return (
    <>
      <Fieldset direction="row" legend="Hellow World">
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
      </Fieldset>
      <Fieldset direction="col" legend="Hellow World">
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
        <Radio name="hello">Hello</Radio>
      </Fieldset>
    </>
  )
}

export const FieldsetBorder = () => {
  return (
    <Fieldset border legend="Hellow World">
      <FormController label="Name">
        <Input placeholder="Hellow World" />
      </FormController>
      <FormController label="Email">
        <Input type="email" />
      </FormController>
      <FormController label="Hellow World">
        <InputPassword />
      </FormController>
    </Fieldset>
  )
}
