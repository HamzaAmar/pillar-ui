import { Button, Input } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const InputPrefix = () => {
  return (
    <>
      <Input aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" variant="filled" />
      <Input aria-label="hello" prefixInput={'https://'} defaultValue="Default Value" variant="filled" />
      <Input
        aria-label="hello"
        prefixInput={
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
