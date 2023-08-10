import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Flex, Text } from '@pillar-ui/core'
import { ChevronDown } from '@pillar-ui/icons'
import type { MenuItemData } from './aside.type'
import { MENU_CONTENT, MENU_LIST } from './menuBar.data'
import { Item } from './listItem'

const MenuBar = () => {
  const { asPath } = useRouter()

  const path = asPath.split('/docs/').join('')

  const [current, setCurrent] = useState<string | null>(path)

  function handleClick(item: MenuItemData) {
    setCurrent((current) => {
      const a = item === current || current?.includes(item)
      return a ? null : item
    })
  }

  console.log(MENU_CONTENT['themes'])

  return (
    <Flex as="aside" direction="column" className="aside menu-bar l_flow md-hide custom-scroll">
      <nav>
        <ul>
          {MENU_LIST.map((item) => {
            const contents = MENU_CONTENT[item]
            const linkOrButtonConfig = !contents
              ? ({ href: `/docs/${item}`, as: Link } as any)
              : { as: 'button', onClick: () => handleClick(item) }

            return (
              <li className="l_flow__md" key={item}>
                <Item {...linkOrButtonConfig} level={2} isActive={current === item && !contents} text={item}>
                  {contents && <ChevronDown width="16" />}
                </Item>
                {contents && (
                  <ul data-active={current?.includes(item) ?? false} className="menu-bar--nested">
                    {contents.map(({ slug, ...rest }) => {
                      return (
                        <Item
                          as={Link}
                          href={rest.link}
                          level={3}
                          key={slug}
                          isActive={path === `${item}/${slug}`}
                          {...rest}
                        />
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </Flex>
  )
}

export default MenuBar
