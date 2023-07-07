import React from 'react'
import { COLORS } from '../../../constant/colors'
import { Text, Paper, Grid, Flex } from '@pillar/core'

const colors = () => {
  return (
    <Paper flow="xs">
      {Object.entries(COLORS).map(([key, value]) => {
        const { light, dark } = value
        return (
          <Grid
            as={Paper}
            borderPosition="bottom"
            borderColor="opacity-6"
            pb="md"
            items="center"
            key={key}
            grid="5rem 1fr"
          >
            <Text size="md">{key}</Text>
            <div className="l_flow__sm">
              <Grid justify="center" grid="repeat(12, 1fr) x auto 30px 30px" gap="xs">
                {Array.from({ length: 12 }, (_, index) => (
                  <Text align="center" size="sm" key={index} weight="medium" color="surface" contrast="low">
                    {index + 1}
                  </Text>
                ))}
                {light.map((color) => (
                  <Paper
                    borderWidth="3px"
                    borderColor="opacity-10"
                    corner="xs"
                    style={{ background: `hsl(${color})` }}
                    key={color}
                  />
                ))}
                {dark.map((color) => (
                  <Paper
                    borderWidth="3px"
                    borderColor="opacity-10"
                    borderStyle="solid"
                    corner="xs"
                    style={{ height: '30px', background: `hsl(${color})` }}
                    key={color}
                  />
                ))}
              </Grid>
            </div>
          </Grid>
        )
      })}
    </Paper>
  )
}

export default colors
