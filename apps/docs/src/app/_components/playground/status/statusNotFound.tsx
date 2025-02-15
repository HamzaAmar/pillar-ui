import { Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Cart, Lock } from '@pillar-ui/icons'
import React from 'react'

export const StatusNotFound = () => {
  return (
    <Paper as={Flex} flow="4" items="center" direction="col" justify="center" width="100%" height="100%">
      <Lock width="120" />
      <Heading size="9">404 - Page Not Found</Heading>
      <Text width="45c" align="center" color="b" low>
        The page you&apos;re looking for doesn&apos;t exist. It might have been removed, renamed, or the URL might be
        incorrect. Please check the address and try again, or return to the home page.
      </Text>
    </Paper>
  )
}
