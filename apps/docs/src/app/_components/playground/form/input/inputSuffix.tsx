import { Button, Input } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputSuffix = () => {
  return (
    <>
      <Input aria-label="hello" suffixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Input aria-label="hello" suffixInput={'.com'} defaultValue="Default Value" variant="filled" />
      <Input
        aria-label="hello"
        suffixInput={
          <Button size="2" corner="0">
            Connect
          </Button>
        }
        defaultValue="Default Value"
        variant="filled"
      />
    </>
  )
}
