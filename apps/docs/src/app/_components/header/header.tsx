'use client'

import React from 'react'
import { default as Logo } from '../logo'
import { Flex, IconButton, InputSearch, Paper } from '@pillar-ui/core'
import { Sun, TextRtl, Menu, ListSearch, Close } from '@pillar-ui/icons'
import Link from 'next/link'
import { useBooleanState, useDirection } from '~/hooks/pillar'
import { SwitchMode } from './switchMode'
import { useDrawer } from '../drawerProvider'

const Header = () => {
  const { value, setTrue, setFalse } = useBooleanState(false)
  const { open, toggleDrawer } = useDrawer() ?? {}
  // const menu = useBooleanState(false)
  const { toggleDirection } = useDirection()

  return (
    <Flex className="header" as="header" justify="between" items="center" gap="sm">
      <Link className="l_fl-1" href="/" aria-label="Home">
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
        <IconButton size="sm" onClick={setTrue} className="only-mobile" icon={<ListSearch />} title={'Show Search'} />
        <IconButton size="sm" onClick={toggleDirection} icon={<TextRtl />} title={'Go to Pillar Github Page'} />
        <SwitchMode />
        {open != null ? (
          <IconButton
            size="sm"
            onClick={toggleDrawer}
            className="only-mobile"
            icon={<Menu />}
            title="Turn on light mode"
          />
        ) : null}
      </Flex>
    </Flex>
  )
}

export default Header
