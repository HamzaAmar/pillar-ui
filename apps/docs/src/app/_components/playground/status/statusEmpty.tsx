import { Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Cart } from '@pillar-ui/icons'
import React from 'react'

export const StatusEmpty = () => {
  return (
    <Paper as={Flex} flow="4" items="center" direction="col" justify="center" width="100%" height="100%">
      <Cart width="68" />
      <Heading>Your cart is empty</Heading>
      <Text width="45c" align="center" color="b" low>
        Explore our products and add items to your cart
      </Text>
    </Paper>
  )
}
