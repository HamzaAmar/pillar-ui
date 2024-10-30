import { InputPassword } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputPasswordPrefix = () => {
  return (
    <>
      <InputPassword aria-label="hello" placeholder="Placeholder" />
      <InputPassword aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputPassword aria-label="hello" prefixInput={'https://'} />
    </>
  )
}
