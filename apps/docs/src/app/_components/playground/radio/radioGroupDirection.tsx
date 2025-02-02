import { Flex, Radio, RadioGroup } from '@pillar-ui/core'
import React from 'react'

export const RadioGroupDirection = () => {
  return (
    <Flex direction="col" gap="4">
      <RadioGroup direction="row" variant="outline" name="row.color" color="se" size="4">
        <Radio value="red">Red</Radio>
        <Radio value="green">Green</Radio>
        <Radio value="blue">Blue</Radio>
        <Radio value="yellow">Yellow</Radio>
        <Radio value="orange">Orange</Radio>
        <Radio value="purple">Purple</Radio>
      </RadioGroup>
      <RadioGroup variant="outline" name="col.color" color="i" size="4">
        <Radio value="red">Red</Radio>
        <Radio value="green">Green</Radio>
        <Radio value="blue">Blue</Radio>
        <Radio value="yellow">Yellow</Radio>
        <Radio value="orange">Orange</Radio>
        <Radio value="purple">Purple</Radio>
      </RadioGroup>
    </Flex>
  )
}
