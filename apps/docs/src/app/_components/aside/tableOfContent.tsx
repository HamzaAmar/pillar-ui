'use client'

import { Heading, Flex, Paper } from '@pillar-ui/core'
import { ListNumber } from '@pillar-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import { Item } from './listItem'
import Link from 'next/link'

import type { HeadingProps } from './aside.type'
import { usePathname } from 'next/navigation'

const options: IntersectionObserverInit = {
  rootMargin: '0% 0% -70% 0%',
}

// export function useScrollSpy(selectors: string) {
//   const pathname = usePathname()
//   const [activeId, setActiveId] = useState<string>()
//   const observer = useRef<IntersectionObserver | null>(null)

//   useEffect(() => {
//     const elements = Array.from(document.querySelectorAll(selectors))
//     observer.current?.disconnect()
//     observer.current = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry?.isIntersecting) {
//           setActiveId(entry.target.getAttribute('id')!)
//         }
//       })
//     }, options)

//     elements.forEach((el) => {
//       if (el) {
//         observer.current?.observe(el)
//       }
//     })
//     return () => {
//       return observer.current?.disconnect()
//     }
//   }, [selectors, pathname])

//   return activeId
// }
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
    <nav className="toc-wrapper as l_flow lg-hide">
      <Paper p="xs" as={Flex} gap="sm" items="center">
        <ListNumber width="20" />
        <Heading size="sm">On This Page</Heading>
      </Paper>
      <ul>
        {contents?.map(({ slug, ...rest }) => {
          const isActive = slug === activeId

          return <Item as={Link} href={`#${slug}`} key={slug} isActive={isActive} {...rest} />
        })}
      </ul>
    </nav>
  )
}

export default TableOfContent
