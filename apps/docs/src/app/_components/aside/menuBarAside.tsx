'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Flex } from '~/component/core/pillar'
import { ChevronDown } from '@pillar-ui/icons'
// import type { MenuItemData } from './aside.type'
import { Item } from './listItem'
import { useDrawer } from '../drawerProvider'
import { usePathname } from 'next/navigation'
import { getAll } from '~/api/docs'

export interface DocsProps {
  data: ReturnType<typeof getAll>
}

type MenuItemData = keyof ReturnType<typeof getAll>

const MenuBar = ({ data }: DocsProps) => {
  const { open } = useDrawer() ?? {}
  const pathname = usePathname()
  const path = pathname.split('/docs/').join('')
  const [current, setCurrent] = useState<string | null>(path)

  function toggleMenuItemSelection(item: MenuItemData) {
    setCurrent((current) => {
      const isSelected = item === current || current?.includes(item)
      return isSelected ? null : item
    })
  }

  const KEYS = Object.keys(data) as MenuItemData[]

  return (
    <Flex as="aside" data-mobile-open={open} direction="column" className="aside menu-bar l_flow custom-scroll">
      <nav>
        <ul>
          {KEYS.map((key) => {
            const contents = data[key]
            const linkOrButtonConfig = !contents
              ? ({ href: `/docs/${key}`, as: Link } as any)
              : { as: 'button', onClick: () => toggleMenuItemSelection(key) }

            return (
              <li className="l_flow__md" key={key}>
                <Item {...linkOrButtonConfig} level={2} isActive={current === key && !contents} title={key}>
                  {contents && <ChevronDown width="16" />}
                </Item>
                {contents && (
                  <ul data-active={current?.includes(key) ?? false} className="menu-bar--nested">
                    {contents.map(({ slug, root, ...rest }) => {
                      return (
                        <Item
                          as={Link}
                          href={`/docs/${root}/${slug}`}
                          level={3}
                          key={slug}
                          isActive={path === `${key}/${slug}`}
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
