import { CustomCheckbox, CheckboxGroup, Text } from '@pillar-ui/core'
import React from 'react'

export const CustomCheckboxVariant = () => {
  return (
    <CheckboxGroup legend="Choose Your Best option" name="hello" direction="row">
      <CustomCheckbox variant="soft">
        <Text>Solid</Text>
      </CustomCheckbox>
      <CustomCheckbox variant="outline">
        <Text>Outline</Text>
      </CustomCheckbox>
      <CustomCheckbox variant="solid">
        <Text>Soft</Text>
      </CustomCheckbox>
      <CustomCheckbox variant="mixed">
        <Text>Mixed</Text>
      </CustomCheckbox>
    </CheckboxGroup>
  )
}
