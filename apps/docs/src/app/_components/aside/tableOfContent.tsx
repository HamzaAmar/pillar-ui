'use client'

import { Heading, Flex, Paper } from '~/component/core/pillar'
import { ListNumber } from '@pillar-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import { Item } from './listItem'
import Link from 'next/link'

import type { HeadingProps } from './aside.type'
import { usePathname, useRouter } from 'next/navigation'

const options: IntersectionObserverInit = {
  rootMargin: '0% 0% -70% 0%',
}

export function useScrollSpy(selectors: string) {
  const pathname = usePathname()

  const [activeId, setActiveId] = useState<string>()
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selectors))
    observer.current?.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute('id')!)
        }
      })
    }, options)

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el)
      }
    })
    return () => {
      return observer.current?.disconnect()
    }
  }, [selectors, pathname])

  return activeId
}
const TableOfContent = ({ contents }: { contents: HeadingProps[] | null }) => {
  const activeId = useScrollSpy('h2,h3,h4,h5')
  console.log('this is the value of the contents from the table of contents', contents)
  return (
    <nav className="table-of-content--wrapper aside l_flow lg-hide">
      <Paper p="xs" as={Flex} gap="sm" items="center">
        <ListNumber width="20" />
        <Heading size="sm">On This Page</Heading>
      </Paper>
      <ul className="table-of-content--list">
        {contents?.map(({ slug, ...rest }) => {
          const isActive = slug === activeId

          return <Item as={Link} href={`#${slug}`} key={slug} isActive={isActive} {...rest} />
        })}
      </ul>
    </nav>
  )
}

export default TableOfContent
