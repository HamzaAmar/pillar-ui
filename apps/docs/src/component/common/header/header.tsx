import React from 'react'
import { Logo } from '..'
import { Button, Flex, IconButton, InputSearch, Paper } from '@pillar-ui/core'
import { Github, Sun, TextRtl, Discord, Moon, Menu, ListSearch, Close, Dollar } from '@pillar-ui/icons'
import Link from 'next/link'
import { useBooleanState, useDarkMode, useDirection } from '@pillar-ui/hooks'

const Header = () => {
  const { isDark, mode, toggleMode } = useDarkMode()
  const { booleanValue, setTrue, setFalse } = useBooleanState(false)
  const { toggleDirection } = useDirection()

  return (
    <Flex className="header" as="header" justify="between" items="center" gap="sm">
      <Link className="l_flex-1" href="/">
        <Logo width="100px" className="header--logo" />
      </Link>

      <Flex
        as={Paper}
        padding="sm"
        data-show={booleanValue}
        justify="between"
        gap="sm"
        className="header--input-search l_flex-2"
      >
        <div className="l_flex-1">
          <InputSearch fluid name="search" placeholder="Search" aria-label="search" />
        </div>
        <IconButton className="only-mobile" corner="sm" onClick={setFalse} icon={<Close />} title={'Hide Search '} />
      </Flex>

      <Flex className="l_flex-1" justify="end" gap="xs">
        <IconButton onClick={setTrue} className="only-mobile" icon={<ListSearch />} title={'Show Search'} />
        <IconButton onClick={toggleDirection} icon={<TextRtl />} title={'Go to Pillar Github Page'} />
        <IconButton onClick={toggleMode} icon={isDark ? <Sun /> : <Moon />} title="Turn on light mode" />
        <IconButton className="only-mobile" icon={<Menu />} title="Turn on light mode" />
        <Button corner="sharp" color="primary" size="xs" icon={<Dollar strokeWidth={2} />}>
          Donate
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header
