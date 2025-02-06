import { CustomRadio, RadioGroup, Text } from '@pillar-ui/core'
import React from 'react'

export const CustomRadioVariant = () => {
  return (
    <RadioGroup legend="Choose Your Best option" name="hello" direction="row">
      <CustomRadio variant="soft">
        <Text>Solid</Text>
      </CustomRadio>
      <CustomRadio variant="outline">
        <Text>Outline</Text>
      </CustomRadio>
      <CustomRadio variant="solid">
        <Text>Soft</Text>
      </CustomRadio>
      <CustomRadio variant="mixed">
        <Text>Mixed</Text>
      </CustomRadio>
    </RadioGroup>
  )
}
