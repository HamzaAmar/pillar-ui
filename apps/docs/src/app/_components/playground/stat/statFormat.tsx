import { Chips, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { ArrowBarTop } from '@pillar-ui/icons'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

export const StatFormat = () => {
  return (
    <Paper flow="3" p="4" width="fit-content">
      <Heading weight="4" color="b" low>
        Revenue
      </Heading>
      <div>
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
      </div>
    </Paper>
  )
}
