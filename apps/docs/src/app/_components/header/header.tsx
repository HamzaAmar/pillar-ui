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
    <Flex className="header" as="header" justify="between" items="center" gap="4">
      <Link className="l_fl-1" href="/" aria-label="Go To Home Page">
        <Logo width="80px" className="header--logo" />
      </Link>

      <Flex
        as={Paper}
        corner="4"
        data-show={value}
        justify="between"
        gap="4"
        className="header--input-search u_center l_fl-2"
      >
        <div className="l_fl-1">
          <InputSearch fluid name="search" placeholder="Search" aria-label="search" />
        </div>
        <IconButton
          size="4"
          className="only-mobile"
          corner="4"
          onClick={setFalse}
          icon={<Close />}
          title={'Hide Search '}
        />
      </Flex>

      <Flex className="l_fl-1" items="center" justify="end" gap="3">
        <SwitchMode />
        <IconButton
          variant="soft"
          size="4"
          onClick={setTrue}
          className="only-mobile"
          icon={<ListSearch />}
          title={'Show Search'}
        />

        <IconButton
          size="4"
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
