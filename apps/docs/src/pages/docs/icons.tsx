import React, { ReactElement, ReactNode, useState } from 'react'
import { DocsLayout } from 'src/component/common'
import * as ICONS from '@pillar-ui/icons'
import { Button, Flex, Grid, Paper, Text } from '@pillar-ui/core'
import { useCopyToClipboard } from '@pillar-ui/hooks'
import iconJson from '../../constant/icons/index.json'

interface ItemProps {
  name: string
  Icon: ReactElement
}

const CATEGORIES: string[] = ['all', ...Object.keys(iconJson)]

const IconsItem = ({ item }: { item: ItemProps[] }) => {
  const { copied, copy } = useCopyToClipboard(5000)

  const [name, Icon] = item

  return (
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
  )
}

const Icons = () => {
  const [current, setCurrent] = useState('all')

  let lists = []

  if (current === 'all') {
    lists = Object.entries(ICONS)
  } else {
    const selectedIcons = iconJson[current.toLowerCase() as keyof typeof iconJson]
    const spreadIcon = { ...ICONS }
    lists = selectedIcons.map((icon) => {
      return [icon, spreadIcon[icon]]
    })
  }

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
          <Grid gap="sm" grid="repeat(auto-fit, minmax(150px, 1fr)">
            {lists.map((item) => (
              <IconsItem item={item} />
            ))}
          </Grid>
        </div>
      </div>
    </DocsLayout>
  )
}

export default Icons
