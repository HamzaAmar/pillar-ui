import React from 'react'
import { Logo } from '..'
import { Button, Flex, IconButton, InputSearch, Paper } from '@pillar-ui/core'
import { Sun, TextRtl, Moon, Menu, ListSearch, Dollar, Close } from '@pillar-ui/icons'
import Link from 'next/link'
import { useBooleanState, useDarkMode, useDirection } from '@pillar-ui/hooks'

const Header = ({ handleToggle }) => {
  const { isDark, toggleMode } = useDarkMode()
  const { booleanValue, setTrue, setFalse } = useBooleanState(false)
  const menu = useBooleanState(false)
  const { toggleDirection } = useDirection()

  return (
    <Flex className="header" as="header" justify="between" items="center" gap="sm">
      <Link className="l_flex-1" href="/">
        <Logo width="100px" className="header--logo" />
      </Link>

      <Flex
        as={Paper}
        p="sm"
        data-show={booleanValue}
        justify="between"
        gap="sm"
        className="header--input-search l_flex-2"
      >
        <div className="l_flex-1">
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

      <Flex className="l_flex-1" items="center" justify="end" gap="xs">
        <IconButton size="sm" onClick={setTrue} className="only-mobile" icon={<ListSearch />} title={'Show Search'} />
        <IconButton size="sm" onClick={toggleDirection} icon={<TextRtl />} title={'Go to Pillar Github Page'} />
        <IconButton size="sm" onClick={toggleMode} icon={isDark ? <Sun /> : <Moon />} title="Turn on light mode" />
        <IconButton
          size="sm"
          onClick={handleToggle}
          className="only-mobile"
          icon={<Menu />}
          title="Turn on light mode"
        />
      </Flex>
    </Flex>
  )
}

export default Header
