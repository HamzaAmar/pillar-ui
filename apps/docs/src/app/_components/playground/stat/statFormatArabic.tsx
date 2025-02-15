import { Heading, Paper, Text } from '@pillar-ui/core'
import { formatPrice } from '@pillar-ui/utils'
import React from 'react'

export const StatFormatArabic = () => {
  return (
    <Paper dir="rtl" p="4" width="fit-content">
      <Heading weight="4" color="b" low size="4">
        الإيرادات
      </Heading>
      <Text weight="5" size="6">
        {formatPrice(250, 'ar-ma', 'MAD')}
      </Text>
    </Paper>
  )
}
