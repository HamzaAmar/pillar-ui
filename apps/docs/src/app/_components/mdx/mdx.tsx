import { Table, Alert, TableColumn, TableRow } from '@pillar-ui/core'
import React from 'react'

import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { toSlug } from '~/utils/slug'
import { Colors } from '../colors'
import { DocsCode, Playground } from '../code'

type CustomLinkProps = {} & Omit<LinkProps, 'href'> & React.AnchorHTMLAttributes<HTMLAnchorElement>

function getStringFromChildren(children: React.ReactNode): string | null {
  if (React.isValidElement(children) && children.type === 'code') {
    return children.props.children
  }
  return null
}

function CustomLink(props: CustomLinkProps) {
  let href = props.href!

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

interface RoundedImageProps extends Omit<ImageProps, 'alt'> {
  altText: string
}
function RoundedImage(props: RoundedImageProps) {
  return <Image alt={props.altText} {...props} />
}

async function Code({ children, ...props }: { children: string; className: string }) {
  const code = getStringFromChildren(children)
  if (code === null) return <pre {...props}>{children}</pre>
  let codeHTML = highlight(code)

  return <DocsCode code={code} html={codeHTML} />
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: string }) => {
    let slug = toSlug(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor scroll-pt-36',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  pre: Code,
  Table,
  TableColumn,
  TableRow,
  Playground,
  Colors,
  Alert,
}

export function CustomMDX(props: any) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}
