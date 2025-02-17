import { Flex, Paper, Text, Button, Chips, Heading } from '@pillar-ui/core'
import { ArrowCircleDown, ArrowCircleTop, PlayerPause, PlayerPlay, Repeat } from '@pillar-ui/icons'
import { formatPrice } from '@pillar-ui/utils'

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
  const SHIP = stat !== 'flat' && (
    <Chips variant="soft" color={STAT[stat].color}>
      {STAT[stat].text}
    </Chips>
  )
  return (
    <Paper justify="between" items="center" gap="3" as={Flex} background="B1" p="4" border corner="2">
      <Flex gap="2" items="center">
        <Text size="3" color="b" low>
          Last month revenue is {formatPrice(182)}
        </Text>
        {STAT[stat].icon}
      </Flex>
      <Flex gap="2" items="center">
        {SHIP}
        <Text weight="5" leading="1">
          {formatPrice(250)}
        </Text>
      </Flex>
    </Paper>
  )
}

export const StatFluid = () => {
  return (
    <Paper flow="6" p="4">
      <Heading weight="4" color="b" low>
        Revenue and growth stats
      </Heading>
      <Paper flow="5">
        <StatItem />
        <StatItem stat="down" />
        <StatItem stat="flat" />
      </Paper>
    </Paper>
  )
}
