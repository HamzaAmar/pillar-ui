'use client'

import { Button, Flex, Switch } from '@pillar-ui/core'
import { useState } from 'react'

export const SwitchControlled = () => {
  const [pressed, setPressed] = useState(false)

  function onPressedChange() {
    setPressed((pressed) => !pressed)
  }
  return (
    <Flex gap="8" items="center">
      <Button onClick={onPressedChange}>{pressed ? 'Pressed' : 'Unpressed'} The Switch</Button>
      <Switch color="d" label="hello" pressed={pressed} onPressedChange={onPressedChange} />
    </Flex>
  )
}
