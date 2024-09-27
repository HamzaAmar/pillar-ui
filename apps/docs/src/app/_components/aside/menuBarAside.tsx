'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Flex } from '@pillar-ui/core'
import { Book, Bridge, ChevronDown, Fish, Help, Palette, PictureInPicture, Star } from '@pillar-ui/icons'
// import type { MenuItemData } from './aside.type'
import { Item } from './listItem'
import { useDrawer } from '../drawerProvider'
import { usePathname } from 'next/navigation'
import { getAll } from '~/api/docs'
import { Components } from '@pillar-ui/icons'

export interface DocsProps {
  data: ReturnType<typeof getAll>
}

type MenuItemData = keyof ReturnType<typeof getAll>

const ICONS = {
  components: <Components width={24} />,
  hooks: <Fish width={24} />,
  utils: <Help width={24} />,
  tutorials: <Book width={24} />,
  themes: <Palette width={24} />,
  features: <Star width={24} />,
  'getting-started': <Bridge width={24} />,
}

const MenuBar = ({ data }: DocsProps) => {
  const { open } = useDrawer() ?? {}
  const pathname = usePathname()
  const path = pathname.split('/docs/').join('')
  const [current, setCurrent] = useState<string | null>(path)

  const toggleMenuItemSelection = (item: MenuItemData) => {
    setCurrent((prev) => (prev === item || prev?.includes(item) ? null : item))
  }

  const KEYS = Object.keys(data) as MenuItemData[]
  return (
    <Flex as="aside" data-mobile-open={open} direction="column" className="as menu-bar l_flow custom-scroll">
      <nav>
        <ul>
          {KEYS.map((key) => {
            const contents = data[key]
            const linkOrButtonConfig = !contents
              ? ({ href: `/docs/${key}`, as: Link } as any)
              : { as: 'button', onClick: () => toggleMenuItemSelection(key) }

            return (
              <li className="Sf4" key={key}>
                <Item
                  {...linkOrButtonConfig}
                  level={2}
                  isActive={current === key && !contents}
                  icon={ICONS[key]}
                  title={key === 'getting-started' ? 'Getting Started' : key}
                >
                  {contents && <ChevronDown width="16" />}
                </Item>
                {contents && (
                  <ul data-active={current?.includes(key) ?? false} className="menu-nest">
                    {contents.map(({ slug, type, title }) => {
                      const to = type === 'core' ? 'components' : type

                      return (
                        <Item
                          as={Link}
                          href={`/docs/${to}/${slug}`}
                          level={3}
                          key={slug}
                          isActive={path === `${key}/${slug}`}
                          title={title}
                        />
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
          <li>
            <Item
              as={Link}
              href="/docs/icons"
              level={2}
              isActive={current === 'icons'}
              icon={<PictureInPicture width={24} />}
              title={'Icons'}
            />
          </li>
        </ul>
      </nav>
    </Flex>
  )
}

export default MenuBar
