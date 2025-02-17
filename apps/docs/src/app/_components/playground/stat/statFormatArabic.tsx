import { Chips, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

export const StatFormatArabic = () => {
  return (
    <Paper dir="rtl" p="4" width="fit-content">
      <Heading weight="4" color="b" low size="4">
        الإيرادات
      </Heading>
      <Flex gap="2" items="center">
        <Text leading="2" weight="6" size="7">
          {formatPrice(250, 'ar-ma', 'MAD')}
        </Text>
        <Chips variant="soft" color="su">
          + 37.8%
        </Chips>
      </Flex>
    </Paper>
  )
}
