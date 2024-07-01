'use client'
import React, { CSSProperties, useState } from 'react'
import * as ICONS from '@pillar-ui/icons'
import { Button, Flex, Grid, Heading, Paper, Text } from '~/component/core/pillar'
import { useCopyToClipboard } from '~/hooks/pillar'
import iconJson from './icons.json'
import { Metadata } from 'next'

const CATEGORIES: string[] = ['all', ...Object.keys(iconJson)]

type ItemProps = [string, (props: ICONS.SvgType | ICONS.SvgWithDirection) => JSX.Element]

const IconsItem = ({ item }: { item: ItemProps }) => {
  const { copied, copy } = useCopyToClipboard(5000)

  const [name, Icon] = item

  return (
    <Flex as={Paper} background="surface-5" direction="column" items="center" key={name!}>
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

  let lists: ItemProps[] = []
  const spreadIcon = { ...ICONS }

  if (current === 'all') {
    lists = Object.entries(spreadIcon) as ItemProps[]
  } else {
    const selectedIcons = iconJson[current.toLowerCase() as keyof typeof iconJson]
    lists = selectedIcons.map((title) => {
      return [title, spreadIcon[title as keyof typeof spreadIcon]]
    }) as ItemProps[]
  }

  return (
    <div className="l_flow__sm icons">
      <Flex className="icons-scroll" as={Paper} p="sm" gap="sm">
        {CATEGORIES.map((category) => (
          <Button
            onClick={() => setCurrent(category)}
            variant={current === category ? 'solid' : 'outline'}
            key={category}
          >
            {category}
          </Button>
        ))}
      </Flex>
      <div className="l_flow__sm" style={{ '--button-corner': 0 } as CSSProperties}>
        <Heading as="h2">
          Number of Icons In {current}: {lists.length}
        </Heading>
        <Grid gap="sm" grid="repeat(auto-fit, minmax(130px, 1fr)">
          {lists.map((item) => (
            <IconsItem item={item} />
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default Icons

// export const metadata: Metadata = {
//   description:
//     'Explore a diverse library of icons available in Pillar UI. Perfectly crafted icons suited to enhance your design projects and applications.',
//   title: 'Icon Library',
// }
