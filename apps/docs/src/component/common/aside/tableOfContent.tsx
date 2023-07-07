import { Heading, Flex, Paper } from '@pillar/core'
import { ListNumber } from '@pillar/icons'
import React, { useState, useRef, useEffect } from 'react'
import type { HeadingProps } from './aside.type'
import { Item } from './listItem'

// const ListItem = ({ text, level, slug, isActive }: TableItemProps) => {
//   return (
//     <li data-active={isActive} className="aside--list-item" style={{ '--lvl': level - 1 } as CSSProperties}>
//       <Text size="sm" color="surface" contrast="low" as={Link} href={`#${slug}`}>
//         {text}
//       </Text>
//     </li>
//   )
// }

const options: IntersectionObserverInit = {
  rootMargin: '0% 0% -70% 0%',
}

export function useScrollSpy(selectors: string) {
  const [activeId, setActiveId] = useState<string>()
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selectors))
    observer.current?.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute?.('id'), entry)
        }
      })
    }, options)
    els.forEach((el) => {
      if (el) observer.current?.observe(el)
    })
    return () => observer.current?.disconnect()
  }, [selectors])

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

          return <Item key={slug} isActive={isActive} {...rest} />
        })}
      </ul>
    </nav>
  )
}

export default TableOfContent
