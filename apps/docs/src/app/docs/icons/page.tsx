'use client'
import { useState } from 'react'
import * as ICONS from '@pillar-ui/icons'
import { Button, Flex, Grid, Heading, Paper, Text } from '@pillar-ui/core'
import iconJson from './icons.json'
import { CopyButton } from '~/app/_components'

const CATEGORIES: string[] = ['all', ...Object.keys(iconJson)]

type ItemProps = [string, (props: ICONS.SvgType | ICONS.SvgWithDirection) => JSX.Element]

const IconsItem = ({ item }: { item: ItemProps }) => {
  const [name, Icon] = item

  return (
    <Flex as={Paper} background="b-5" className="R3 Sfsm u_pa-sm" direction="column" items="center" key={name!}>
      <div className="icon--info l_fl-column u_center">
        <Icon width="30" />
        <Text weight="medium" size="3">
          {name}
        </Text>
      </div>
      {/* <CopyButton fluid text={`<${name} width='20'/>`} /> */}
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
    <div className="Sfsm icons">
      <Flex className="icons-scroll" as={Paper} corner="4" gap="4">
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
      <div className="u_pa-lg Sflg">
        <Heading as="h2">
          Number of Icons In {current}: {lists.length}
        </Heading>
        <Grid gap="4" grid="repeat(auto-fit, minmax(140px, 1fr)">
          {lists.map((item) => (
            <IconsItem item={item} />
          ))}
        </Grid>
      </div>
      <h1>Hello</h1>
    </div>
  )
}

export default Icons

// export const metadata: Metadata = {
//   description:
//     'Explore a diverse library of icons available in Pillar UI. Perfectly crafted icons suited to enhance your design projects and applications.',
//   title: 'Icon Library',
// }
