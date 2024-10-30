import { InputNumber } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputNumberPrefix = () => {
  return (
    <>
      <InputNumber aria-label="hello" placeholder="Placeholder" />
      <InputNumber aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputNumber aria-label="hello" prefixInput={'https://'} />
    </>
  )
}
