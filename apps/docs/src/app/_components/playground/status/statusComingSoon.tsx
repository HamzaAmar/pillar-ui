import { Button, Flex, Heading, Paper, ProgressBar, Text } from '@pillar-ui/core'
import { CalendarTime, Lock } from '@pillar-ui/icons'
import React from 'react'

export const StatusComingSoon = () => {
  return (
    <Paper as={Flex} flow="6" items="center" direction="col" justify="center" width="100%" height="100%">
      <CalendarTime width="64" />
      <Heading size="9">Coming Soon!</Heading>
      <Text width="45c" align="center" color="b" low>
        This feature is currently under development and will be available soon. Stay tuned for updates!
      </Text>
      <ProgressBar label="Coming Soon Progress Bar" value={90} max={100} />
      <Button variant="mixed" color="b">
        Go Back
      </Button>
    </Paper>
  )
}
