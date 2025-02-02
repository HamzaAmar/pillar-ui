import { Radio, RadioGroup } from '@pillar-ui/core'
import React from 'react'

export const RadioGroupBase = () => {
  return (
    <RadioGroup variant="outline" name="color" color="se" size="4">
      <Radio value="red">Red</Radio>
      <Radio value="green">Green</Radio>
      <Radio value="blue">Blue</Radio>
      <Radio value="yellow">Yellow</Radio>
      <Radio value="orange">Orange</Radio>
      <Radio value="purple">Purple</Radio>
    </RadioGroup>
  )
}
