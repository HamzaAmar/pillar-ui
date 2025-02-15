'use client'

import { Button, Flex, Paper, Text } from '@pillar-ui/core'
import Link from 'next/link'
import React, { useState } from 'react'

const Logo = () => {
  return (
    <Text size="6" weight="6">
      Logo
    </Text>
  )
}

type NavLinkProps = {
  onClick: () => void
  variant: 'solid' | 'text'
  color: 'p' | 'b'
  'aria-current'?: 'page'
  href: string
}

const getCurrent = (current: string, key: string, handleClick: (value: string) => void): NavLinkProps => {
  const IS_ACTIVE = current === key

  return {
    onClick: () => handleClick(key),
    variant: IS_ACTIVE ? 'solid' : 'text',
    color: IS_ACTIVE ? 'p' : 'b',
    href: '?',
    ...(IS_ACTIVE && { 'aria-current': 'page' }),
  }
}

export const HeaderCurrent = () => {
  // you can get the current value from the router
  // But we use state here for simplicity
  const [current, setCurrent] = useState('home')

  const handleClick = (value: string) => {
    setCurrent(value)
  }
  return (
    <header>
      <Flex as={Paper} p="4" gap="3" justify="between" items="center">
        <Logo />
        <nav>
          <Flex as="ul" gap="2">
            <li>
              <Button {...getCurrent(current, 'home', handleClick)} size="3" as={Link}>
                Home
              </Button>
            </li>
            <li>
              <Button {...getCurrent(current, 'learn', handleClick)} size="3" as={Link}>
                Learn
              </Button>
            </li>
            <li>
              <Button {...getCurrent(current, 'docs', handleClick)} size="3" as={Link}>
                Docs
              </Button>
            </li>
          </Flex>
        </nav>
        <Flex gap="2">
          <Button>Log in</Button>
          <Button color="b" variant="soft">
            Sign up
          </Button>
        </Flex>
      </Flex>
    </header>
  )
}
