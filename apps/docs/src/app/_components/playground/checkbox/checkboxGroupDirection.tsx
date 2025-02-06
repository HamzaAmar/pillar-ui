import { Flex, Checkbox, CheckboxGroup } from '@pillar-ui/core'
import React from 'react'

export const CheckboxGroupDirection = () => {
  return (
    <Flex direction="col" gap="4">
      <CheckboxGroup legend="Choose Colors" direction="row" variant="outline" name="row.color" color="se" size="4">
        <Checkbox value="red">Red</Checkbox>
        <Checkbox value="green">Green</Checkbox>
        <Checkbox value="blue">Blue</Checkbox>
        <Checkbox value="yellow">Yellow</Checkbox>
        <Checkbox value="orange">Orange</Checkbox>
        <Checkbox value="purple">Purple</Checkbox>
      </CheckboxGroup>
      <CheckboxGroup legend="Choose Colors" variant="outline" name="col.color" color="i" size="4">
        <Checkbox value="red">Red</Checkbox>
        <Checkbox value="green">Green</Checkbox>
        <Checkbox value="blue">Blue</Checkbox>
        <Checkbox value="yellow">Yellow</Checkbox>
        <Checkbox value="orange">Orange</Checkbox>
        <Checkbox value="purple">Purple</Checkbox>
      </CheckboxGroup>
    </Flex>
  )
}
