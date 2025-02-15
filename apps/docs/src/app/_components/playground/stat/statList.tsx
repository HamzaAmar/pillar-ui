import { Chips, Flex, Grid, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowBarTop } from '@pillar-ui/icons'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

const StatItem = () => {
  return (
    <Paper flow="3" p="4" border corner="2">
      <Flex gap="2" items="center">
        <Text weight="6" size="7">
          {formatPrice(250)}
        </Text>
        <Chips variant="soft" color="su">
          + 37.8%
        </Chips>
      </Flex>
      <Text size="3" color="b" low>
        Last month revenue is {formatPrice(182)}
      </Text>
    </Paper>
  )
}
export const StatList = () => {
  return (
    <Paper flow="6" p="4">
      <Heading weight="4" color="b" low>
        Revenue and growth stats
      </Heading>
      <Grid gap="4" cols={{ default: '1fr', md: '1fr 1fr 1fr' }}>
        <StatItem />
        <StatItem />
        <StatItem />
      </Grid>
    </Paper>
  )
}
