'use client'

import { Button, Flex, Switch, Text } from '@pillar-ui/core'
import { Moon, Sun } from '@pillar-ui/icons'
import { useState } from 'react'

export const SwitchControlled = () => {
  const [pressed, setPressed] = useState(false)

  function onPressedChange() {
    setPressed((pressed) => !pressed)
  }
  return (
    <>
      <Flex gap="2" items="center">
        <Text size="3" weight="5" color="b" low={pressed}>
          OFF
        </Text>
        <Switch color="d" label="hello" pressed={pressed} onPressedChange={onPressedChange} />
        <Text size="3" weight="5" color="b" low={!pressed}>
          ON
        </Text>
      </Flex>
      <Flex gap="2" items="center">
        <Sun width="20" stroke={pressed ? 'var(--B11)' : 'var(--B12)'} />
        <Switch color="d" label="hello" pressed={pressed} onPressedChange={onPressedChange} />
        <Moon width="20" stroke={!pressed ? 'var(--B11)' : 'var(--B12)'} />
      </Flex>
    </>
  )
}
