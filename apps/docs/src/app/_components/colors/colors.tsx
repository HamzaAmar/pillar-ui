import React from 'react'
import { COLORS } from '../../../constant/colors'
import { Text, Paper } from '@pillar-ui/core'
import type { Colors as ColorsType } from '~/constant/colors/colors.type'
import { default as CopyButton } from './copyButton'

interface ColorItem {
  item: string
  value: ColorsType[1]
}

function ColorItem({ item, value }: ColorItem) {
  const { light, dark } = value

  console.log(item, value)

  return (
    <Paper border p="4" className="Aai-center colors-section Sg-4">
      <Text size="4">{item} </Text>
      <div className="Sf-3">
        <div className="Ajc-center Sg-3 color-container">
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
        </div>
      </div>
      <CopyButton value={value} item={item} />
    </Paper>
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
