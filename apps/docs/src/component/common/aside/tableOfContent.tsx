import { Heading, Flex, Paper } from '@pillar/core'
import { ListNumber } from '@pillar/icons'
import React, { useState, useRef, useEffect } from 'react'
import type { HeadingProps } from './aside.type'
import { Item } from './listItem'
import Link from 'next/link'
import { useRouter } from 'next/router'

const options: IntersectionObserverInit = {
  rootMargin: '0% 0% -70% 0%',
}

export function useScrollSpy(selectors: string) {
  const router = useRouter()
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

    console.log('els', elements)
    elements.forEach((el) => {
      if (el) {
        console.log('el', el, 'el')
        observer.current?.observe(el)
      }
    })
    return () => {
      console.log('UseEffect Cleanup')
      return observer.current?.disconnect()
    }
  }, [selectors, router.asPath])

  return activeId
}
const TableOfContent = ({ contents }: { contents: HeadingProps[] | null }) => {
  const activeId = useScrollSpy('h2,h3,h4,h5')

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
