import { Checkbox, CheckboxGroup } from '@pillar-ui/core'
import React from 'react'

export const CheckboxGroupBase = () => {
  return (
    <CheckboxGroup legend="Choose Colors" variant="outline" name="color" color="se" size="4">
      <Checkbox value="red">Red</Checkbox>
      <Checkbox value="green">Green</Checkbox>
      <Checkbox value="blue">Blue</Checkbox>
      <Checkbox value="yellow">Yellow</Checkbox>
      <Checkbox value="orange">Orange</Checkbox>
      <Checkbox value="purple">Purple</Checkbox>
    </CheckboxGroup>
  )
}
