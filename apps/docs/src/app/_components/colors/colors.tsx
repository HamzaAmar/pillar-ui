import React from 'react'
import { COLORS } from '../../../constant/colors'
import { Text, Paper, Grid } from '~/component/core/pillar'
import type { Colors as ColorsType } from '~/constant/colors/colors.type'
import { default as CopyButton } from './copyButton'

interface ColorItem {
  item: string
  value: ColorsType[1]
}

function ColorItem({ item, value }: ColorItem) {
  const { light, dark } = value

  return (
    <Grid as={Paper} border items="center" grid="4rem 1fr auto" gap="sm">
      <Text size="sm">{item} </Text>
      <div className="l_flow__sm">
        <Grid justify="center" grid="repeat(12, 1fr) x auto 30px 30px" gap="xs">
          {Array.from({ length: 12 }, (_, index) => (
            <Text align="center" size="sm" key={`${item}-${index + 1}`} weight="medium" color="bg" contrast="low">
              {index + 1}
            </Text>
          ))}
          {light.map((color) => (
            <Paper corner="xs" style={{ background: `hsl(${color})` }} key={`${color}-light`} />
          ))}
          {dark.map((color) => (
            <Paper corner="xs" style={{ height: '30px', background: `hsl(${color})` }} key={`${color}-dark`} />
          ))}
        </Grid>
      </div>
      <CopyButton value={value} item={item} />
    </Grid>
  )
}

const Colors = () => {
  return (
    <Paper flow="xs">
      {Object.entries(COLORS).map(([key, value]) => {
        return <ColorItem item={key} value={value} />
      })}
    </Paper>
  )
}

export default Colors
