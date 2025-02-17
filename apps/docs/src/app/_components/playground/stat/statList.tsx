import { Chips, Flex, Grid, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowCircleDown, ArrowBarTop, ArrowCircleTop, Equal } from '@pillar-ui/icons'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

const STAT = {
  up: {
    icon: <ArrowCircleTop width="16" stroke="var(--Su11)" />,
    color: 'su',
    text: '+37.8%',
  },
  down: {
    icon: <ArrowCircleDown width="16" stroke="var(--D11)" />,
    color: 'd',
    text: '-37.8%',
  },
  flat: {
    icon: null,
    color: 'b',
    text: '0%',
  },
} as const

const StatItem = ({ stat = 'up' }: { stat?: 'up' | 'down' | 'flat' }) => {
  return (
    <Paper background="B1" flow="3" p="4" border corner="2">
      <Text size="3" color="b" low>
        Last month revenue is {formatPrice(182)}
      </Text>
      <Flex gap="2" items="center">
        {STAT[stat].icon}
        <Text weight="5" size="7" leading="1">
          {formatPrice(250)}
        </Text>
        <Chips variant="soft" color={STAT[stat].color}>
          {STAT[stat].text}
        </Chips>
      </Flex>
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
        <StatItem stat="down" />
        <StatItem stat="flat" />
      </Grid>
    </Paper>
  )
}
