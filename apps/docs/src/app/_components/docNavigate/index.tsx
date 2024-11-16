import { Flex, Paper, Text } from '@pillar-ui/core'
import { ChevronDown, ChevronLeft } from '@pillar-ui/icons'
import Link from 'next/link'
import React from 'react'

interface DocNavigateProps {
  title: string
  slug: string
  to: 'next' | 'previous'
}

const DocNavigate = ({ title, slug, to }: DocNavigateProps) => {
  return (
    <Paper
      data-to={to}
      as={Link}
      href={`/docs/components/${slug}`}
      corner="3"
      border
      p="4"
      data-exist={!!title}
      className="fl-1 navigate-btn"
    >
      <ChevronDown width="20" />
      <div className="Sf-2">
        <Text color="b" low size="3" transform="uppercase">
          {to}
        </Text>
        <Text weight="6">{title}</Text>
      </div>
    </Paper>
  )
}

export default DocNavigate
