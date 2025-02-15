'use client'

import { Avatar, Button, Flex, Paper, Text } from '@pillar-ui/core'
import { ChevronDown } from '@pillar-ui/icons'
import Link from 'next/link'
import React, { useState } from 'react'

const MENU_ITEMS = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Learn',
    href: '#',
  },
  {
    label: 'Docs',
    href: '#',
  },
]

const Logo = () => {
  return (
    <Text size="6" weight="6">
      Logo
    </Text>
  )
}

const UserSection = ({ isLoggedIn, onLogin }: { isLoggedIn: boolean; onLogin: () => void }) => {
  if (!isLoggedIn)
    return (
      <Flex gap="2">
        <Button onClick={onLogin}>Log in</Button>
        <Button color="b" variant="soft">
          Sign up
        </Button>
      </Flex>
    )

  return (
    <Flex gap="2" items="center">
      <Avatar size="4" src="" title="John Doe" />
      <Text size="3" weight="5">
        John Doe
      </Text>
      <ChevronDown width="16" />
    </Flex>
  )
}

export const HeaderAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const login = () => {
    setIsLoggedIn(true)
    console.log('login')
  }
  return (
    <header>
      <Flex as={Paper} p="4" gap="3" justify="between" items="center">
        <Logo />
        <nav>
          <Flex as="ul" gap="2">
            {MENU_ITEMS.map((item, index) => (
              <li key={index}>
                <Button color="b" variant="link" href={item.href} size="3" as={Link}>
                  {item.label}
                </Button>
              </li>
            ))}
          </Flex>
        </nav>
        <UserSection isLoggedIn={isLoggedIn} onLogin={login} />
      </Flex>
    </header>
  )
}
