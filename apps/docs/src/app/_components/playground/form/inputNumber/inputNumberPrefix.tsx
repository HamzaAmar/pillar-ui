import { InputNumber } from '@pillar-ui/core'
import { Dimension, Dollar } from '@pillar-ui/icons'
import React from 'react'

export const InputNumberPrefix = () => {
  return (
    <>
      <InputNumber aria-label="hello" placeholder="Placeholder" />
      <InputNumber aria-label="hello" prefixInput={<Dollar width="16" />} placeholder="Placeholder" />
      <InputNumber aria-label="hello" prefixInput={'KG'} />
      <InputNumber aria-label="hello" prefixInput={<Dimension width="20" />} />
    </>
  )
}
