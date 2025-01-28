'use client'

import React from 'react'
import { default as Logo } from '../logo'
import { Flex, IconButton, InputSearch, Paper } from '@pillar-ui/core'
import { Menu, ListSearch, Close } from '@pillar-ui/icons'
import Link from 'next/link'
import { useBool } from '~/hooks/pillar'
import { SwitchMode } from './switchMode'
import { useDrawer } from '../drawerProvider'
import { usePathname } from 'next/navigation'
import { DocSearch } from '@docsearch/react'
import { SEARCH_API_KEY, SEARCH_APP_ID } from '~/constant/algolia'

const Header = () => {
  const { value, setTrue, setFalse } = useBool(false)
  const { toggleDrawer } = useDrawer() ?? {}
  const pathname = usePathname()
  const hasDocs = pathname.startsWith('/docs')

  return (
    <Flex className="header" as="header" justify="between" items="center" gap="4">
      <Link className="fl-1" href="/" aria-label="Go To Home Page">
        <Logo width="80px" className="header--logo" />
      </Link>

      <Flex
        as={Paper}
        pl="4"
        pr="4"
        corner="4"
        data-show={value}
        justify="between"
        gap="4"
        className="header--input-search F-c fl-2"
      >
        {/* <div className="fl-1">
          <InputSearch fluid name="search" placeholder="Search" aria-label="search" />
        </div> */}
        {/* <DocSearch apiKey={SEARCH_API_KEY} indexName={'docs'} appId={SEARCH_APP_ID} /> */}
        <IconButton
          size="4"
          className="only-mobile"
          corner="4"
          onClick={setFalse}
          icon={<Close />}
          title="Hide Search "
        />
      </Flex>

      <Flex className="fl-1" items="center" justify="end" gap="3">
        <SwitchMode />
        <IconButton
          variant="soft"
          size="4"
          onClick={setTrue}
          className="only-mobile"
          icon={<ListSearch />}
          title="Show Search"
        />

        {hasDocs && (
          <IconButton
            size="4"
            variant="soft"
            onClick={toggleDrawer}
            className="only-mobile"
            icon={<Menu />}
            title="Turn on light mode"
          />
        )}
      </Flex>
    </Flex>
  )
}

export default Header
