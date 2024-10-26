'use client'

import { Alert, Button, Flex } from '@pillar-ui/core'
import { useState } from 'react'

export const AlertControlled = () => {
  const [open, setOpen] = useState(true)

  function onClose() {
    setOpen((isOpen) => (isOpen ? false : true))
  }
  return (
    <Flex gap="4" direction="col">
      <Button onClick={onClose}>{open ? 'Hide' : 'Open'} The Alert</Button>
      <Alert title="Danger!" visible={open} onClose={onClose} closable />
    </Flex>
  )
}
