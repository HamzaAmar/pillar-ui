'use client'

import React from 'react'
import { default as Logo } from '../logo'
import { Flex, IconButton, InputSearch, Paper } from '@pillar-ui/core'
import { Menu, ListSearch, Close } from '@pillar-ui/icons'
import Link from 'next/link'
import { useBooleanState, useDirection } from '~/hooks/pillar'
import { SwitchMode } from './switchMode'
import { useDrawer } from '../drawerProvider'

const Header = () => {
  const { value, setTrue, setFalse } = useBooleanState(false)
  const { toggleDrawer } = useDrawer() ?? {}

  return (
    <Flex className="header" as="header" justify="between" items="center" gap="sm">
      <Link className="l_fl-1" href="/" aria-label="Go To Home Page">
        <Logo width="80px" className="header--logo" />
      </Link>

      <Flex
        as={Paper}
        p="sm"
        data-show={value}
        justify="between"
        gap="sm"
        className="header--input-search u_center l_fl-2"
      >
        <div className="l_fl-1">
          <InputSearch fluid name="search" placeholder="Search" aria-label="search" />
        </div>
        <IconButton
          size="sm"
          className="only-mobile"
          corner="sm"
          onClick={setFalse}
          icon={<Close />}
          title={'Hide Search '}
        />
      </Flex>

      <Flex className="l_fl-1" items="center" justify="end" gap="xs">
        <SwitchMode />
        <IconButton
          variant="soft"
          size="sm"
          onClick={setTrue}
          className="only-mobile"
          icon={<ListSearch />}
          title={'Show Search'}
        />

        <IconButton
          size="sm"
          variant="soft"
          onClick={toggleDrawer}
          className="only-mobile"
          icon={<Menu />}
          title="Turn on light mode"
        />
      </Flex>
    </Flex>
  )
}

export default Header
