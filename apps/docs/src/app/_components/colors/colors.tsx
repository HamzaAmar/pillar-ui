import React from 'react'
import { COLORS } from '../../../constant/colors'
import { Text, Paper, Grid } from '@pillar-ui/core'
import type { Colors as ColorsType } from '~/constant/colors/colors.type'
import { default as CopyButton } from './copyButton'

interface ColorItem {
  item: string
  value: ColorsType[1]
}

function ColorItem({ item, value }: ColorItem) {
  const { light, dark } = value

  return (
    <Grid as={Paper} border items="center" grid="4rem 1fr auto" gap="4">
      <Text size="4">{item} </Text>
      <div className="Sf-3">
        <Grid justify="center" grid="repeat(12, 1fr) x auto 30px 30px" gap="3">
          {Array.from({ length: 12 }, (_, index) => (
            <Text align="center" size="4" key={`${item}-${index + 1}`} weight="5" color="b" low>
              {index + 1}
            </Text>
          ))}
          {light.map((color) => (
            <Paper corner="3" style={{ background: `hsl(${color})` }} key={`${color}-light`} />
          ))}
          {dark.map((color) => (
            <Paper corner="3" style={{ height: '30px', background: `hsl(${color})` }} key={`${color}-dark`} />
          ))}
        </Grid>
      </div>
      <CopyButton value={value} item={item} />
    </Grid>
  )
}

const Colors = () => {
  return (
    <Paper flow="3">
      {Object.entries(COLORS).map(([key, value]) => {
        return <ColorItem item={key} value={value} />
      })}
    </Paper>
  )
}

export default Colors
