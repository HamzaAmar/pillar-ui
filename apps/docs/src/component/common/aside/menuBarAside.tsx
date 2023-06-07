import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import { Flex, Paper, Text } from '@pillar/core'
import { ChevronDown } from '@pillar/icons'
import type { MenuItemData, MenuItemProps } from './aside.type'
import { MENU_CONTENT, MENU_LIST } from './menuBar.data'
import { allComponents } from 'contentlayer/generated'

const Item = ({ link, title, icon, isActive }: MenuItemProps) => {
  return (
    <li data-active={isActive} className="aside--list-item">
      <Text size="sm" weight="medium" as={Link} className="aside--list-link" href={`/${link}`}>
        {title}
      </Text>
    </li>
  )
}

const MenuBar = () => {
  const [current, setCurrent] = useState<MenuItemData | undefined>(MENU_LIST[0])
  const router = useRouter()
  const { slug } = router.query
  const content = current && MENU_CONTENT[current]

  return (
    <Flex as="aside" direction="column" className="aside menu-bar l_flow">
      <nav>
        <ul>
          {MENU_LIST.map((item) => (
            <Paper as="li" padding="2xs" key={item}>
              <Flex
                style={{ width: '100%' }}
                justify="between"
                items="center"
                as="button"
                onClick={() => {
                  setCurrent((prevItem) => (prevItem === item ? undefined : item))
                }}
              >
                <span> {item}</span>
                <ChevronDown width="16" />
              </Flex>
              {content && (
                <ul data-active={current === item} className="menu-bar--nested">
                  {content.map(({ slug: currentSlug, ...rest }) => {
                    const isActive = currentSlug === slug
                    return <Item key={currentSlug} {...rest} isActive={isActive} />
                  })}
                </ul>
              )}
            </Paper>
          ))}
        </ul>
      </nav>
    </Flex>
  )
}

export default MenuBar
