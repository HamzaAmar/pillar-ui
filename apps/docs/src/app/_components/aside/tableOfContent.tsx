'use client'

import { Flex, Paper, Text } from '@pillar-ui/core'
import { ListNumber, ArrowCircleTop } from '@pillar-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import { Item } from './listItem'
import Link from 'next/link'

import type { HeadingProps } from './aside.type'
import { usePathname } from 'next/navigation'

const useScrollSpy = (selectors: string) => {
  const [activeId, setActiveId] = useState<string>()
  const observer = useRef<IntersectionObserver | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const elements = document.querySelectorAll(selectors)
    observer.current?.disconnect()
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -70% 0%' }
    )

    elements.forEach((el) => observer.current?.observe(el))
    return () => observer.current?.disconnect()
  }, [selectors, pathname])

  return activeId
}

const TableOfContent = ({ contents }: { contents: HeadingProps[] | null }) => {
  const activeId = useScrollSpy('h2,h3,h4,h5')
  return (
    <nav className="toc-wrapper as Sf-5 lg-hide">
      <Paper p="3" as={Flex} gap="4" items="center">
        <ListNumber width="20" />
        <Text weight="5" size="4">
          On This Page
        </Text>
      </Paper>
      <ul>
        {contents?.map(({ slug, ...rest }) => {
          const isActive = slug === activeId

          return <Item as={Link} href={`#${slug}`} key={slug} isActive={isActive} {...rest} />
        })}
      </ul>

      <Paper p="4" flow="4" className="toc-footer">
        <Text as={Link} href="#doc-content" className="F-c toc-f-item" size="3" color="b" low>
          Scroll To Top
          <ArrowCircleTop width={16} />
        </Text>
      </Paper>
    </nav>
  )
}

export default TableOfContent
