import { InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputSearchPrefix = () => {
  return (
    <>
      <InputSearch aria-label="hello" placeholder="Placeholder" />
      <InputSearch aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <InputSearch aria-label="hello" prefixInput={'https://'} />
    </>
  )
}
