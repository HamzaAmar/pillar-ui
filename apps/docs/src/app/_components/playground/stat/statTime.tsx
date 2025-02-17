import { Flex, Paper, Text } from '@pillar-ui/core'
import { Clock } from '@pillar-ui/icons'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

export const StatTime = () => {
  return (
    <Paper width="fit-content" background="B1" flow="3" p="5" border corner="3">
      <Flex justify="end">
        <Clock width={24} />
      </Flex>
      <div>
        <Text size="4" color="b" low>
          Total Work Time
        </Text>
        <Flex gap="2" items="end">
          <Text as="span" weight="5" size="6" leading="1">
            127
          </Text>
          <Text as="span" color="b" low weight="5" leading="1">
            H
          </Text>
          <Text as="span" weight="5" size="6" leading="1">
            35
          </Text>
          <Text as="span" color="b" low weight="5" leading="1">
            M
          </Text>
          <Text as="span" weight="5" size="6" leading="1">
            12
          </Text>
          <Text as="span" color="b" low weight="5" leading="1">
            S
          </Text>
        </Flex>
      </div>
    </Paper>
  )
}
