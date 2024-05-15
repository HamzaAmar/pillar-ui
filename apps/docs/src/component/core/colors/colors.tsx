import React from 'react'
import { COLORS } from '../../../constant/colors'
import { Text, Paper, Grid, IconButton } from '@pillar-ui/core'
import { Copy, Check } from '@pillar-ui/icons'
import type { Colors as ColorsType } from 'src/constant/colors/colors.type'
import { useCopyToClipboard } from '@pillar-ui/hooks'

interface ColorItem {
  item: string
  value: ColorsType[1]
}

function ColorItem({ item, value }: ColorItem) {
  const { copied, copy } = useCopyToClipboard(1500)
  const { light, dark } = value

  function handleClick() {
    const { light, dark } = value
    let colors = `// ${item} Light Color Section \n`
    light.forEach((color, index) => {
      colors += `--${item}-light-${index + 1}:hsl(${color});\n`
    })

    colors += `// ${item} Dark Color Section \n`
    dark.forEach((color, index) => {
      colors += `--${item}-dark-${index + 1}:hsl(${color});\n`
    })
    copy(colors)
  }

  return (
    <Grid
      as={Paper}
      borderPosition="bottom"
      borderColor="opacity-6"
      pb="md"
      items="center"
      grid="4rem 1fr auto"
      gap="sm"
      bb="1px solid red"
    >
      <Text size="sm">{item} </Text>
      <div className="l_flow__sm">
        <Grid justify="center" grid="repeat(12, 1fr) x auto 30px 30px" gap="xs">
          {Array.from({ length: 12 }, (_, index) => (
            <Text align="center" size="sm" key={`${item}-${index + 1}`} weight="medium" color="surface" contrast="low">
              {index + 1}
            </Text>
          ))}
          {light.map((color) => (
            <Paper
              b="1px solid var(--opacity-10)"
              corner="xs"
              style={{ background: `hsl(${color})` }}
              key={`${color}-light`}
            />
          ))}
          {dark.map((color) => (
            <Paper
              b="1px solid var(--opacity-10)"
              corner="xs"
              style={{ height: '30px', background: `hsl(${color})` }}
              key={`${color}-dark`}
            />
          ))}
        </Grid>
      </div>
      <IconButton
        variant={`${!copied ? 'outline' : 'soft'}`}
        color="surface"
        icon={copied ? <Check /> : <Copy />}
        title={`${copied ? 'Copied' : 'Copy'} Color`}
        onClick={handleClick}
      />
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
