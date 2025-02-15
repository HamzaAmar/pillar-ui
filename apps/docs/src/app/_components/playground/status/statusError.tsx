import { Button, Flex, Heading, Paper, Text } from '@pillar-ui/core'
import { Cart, Lock } from '@pillar-ui/icons'
import React from 'react'

export const StatusError = () => {
  return (
    <Paper as={Flex} flow="6" items="center" direction="col" justify="center" width="100%" height="100%">
      <Heading size="7">Something Went Wrong</Heading>
      <Text width="45c" align="center" color="b" low>
        There was an error processing your request. Please try again later or contact support if the issue persists.
      </Text>

      <Flex gap="4">
        <Button>Retry</Button>
        <Button variant="soft">Contact Support</Button>
      </Flex>
    </Paper>
  )
}
