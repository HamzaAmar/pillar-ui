import React, { useState } from 'react'
import { DocsLayout, Layout } from 'src/component/common'
import * as ICONS from '@pillar-ui/icons'
import { Button, Flex, Grid, Paper, Text } from '@pillar-ui/core'
import { useCopyToClipboard } from '@pillar-ui/hooks'
import a from '../../constant/icons/icons.json'

const CATEGORIES: string[] = ['all', ...Object.keys(a)]

const IconsList = ({ lists }: { lists: [string, Function][] }) => {
  const { copied, copy } = useCopyToClipboard(5000)

  console.log(lists)

  return lists.map(([name, Icon]) => (
    <Flex style={{ background: 'var(--surface-5)' }} direction="column" items="center" key={name}>
      <Flex as={Paper} p="xs" direction="column" items="center">
        <Icon width="30" />
        <Text weight="medium" size="xs">
          {name}
        </Text>
      </Flex>
      <Button onClick={() => copy(`<${name} width='20'/>`)} fluid>
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  ))
}

const Icons = () => {
  const [current, setCurrent] = useState('all')

  let lists = []

  if (current === 'all') {
    lists = Object.entries(ICONS)
  } else {
    const ab = a[current.toLowerCase() as keyof typeof a]
    lists = ab.map((val) => [val, ICONS[val]])
  }

  console.log(lists)

  return (
    <DocsLayout>
      <div className="l_flow__sm icons">
        <Flex className="icons-scroll" as={Paper} p="sm" gap="sm">
          {CATEGORIES.map((cat, index) => (
            <Button onClick={() => setCurrent(cat)} variant={current === cat ? 'solid' : 'outline'} key={index}>
              {cat}
            </Button>
          ))}
        </Flex>
        <div>
          <Text size="md">Icons</Text>
          <Grid gap="sm" grid="repeat(auto-fit, minmax(150px, 1fr)">
            <IconsList lists={lists} />
          </Grid>
        </div>
      </div>
    </DocsLayout>
  )
}

export default Icons
