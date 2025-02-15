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

export const HeaderBasic = () => {
  return (
    <header>
      <Flex as={Paper} p="4" gap="3" justify="between" items="center">
        <Logo />
        <nav>
          <Flex as="ul" gap="2">
            <li>
              <Button variant="text" color="b" href="#" size="3" as={Link}>
                Home
              </Button>
            </li>
            <li>
              <Button variant="text" color="b" href="#" size="3" as={Link}>
                Learn
              </Button>
            </li>
            <li>
              <Button variant="text" color="b" href="#" size="3" as={Link}>
                Docs
              </Button>
            </li>
          </Flex>
        </nav>
      </Flex>
    </header>
  )
}
