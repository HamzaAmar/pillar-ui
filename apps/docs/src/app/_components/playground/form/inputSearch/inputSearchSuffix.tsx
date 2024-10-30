import { Button, InputSearch } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputSearchSuffix = () => {
  return (
    <>
      <InputSearch aria-label="hello" suffixInput={<User width="16" />} placeholder="Placeholder" />
      <InputSearch aria-label="hello" suffixInput=".com" />
    </>
  )
}
