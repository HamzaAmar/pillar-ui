import { Flex, IconButton, Paper, ProgressBar, Text } from '@pillar-ui/core'
import { PlayerPlay, PlayerSkipBack, PlayerSkipForward } from '@pillar-ui/icons'
import React from 'react'

export const CardMedia = () => {
  return (
    <Flex as={Paper} gap="6">
      <Paper flow="5">
        <div>
          <Text size="5" weight="5">
            Card Media Here
          </Text>
          <Text color="b" low size="4">
            @miloudamar
          </Text>
        </div>
        <Paper flow="2">
          <ProgressBar color="se" label="Progress" value={50} size="1" />

          <Flex gap="3">
            <IconButton corner="full" size="4" icon={<PlayerSkipBack />} title="Go to Previous Sound" />
            <IconButton corner="full" size="4" icon={<PlayerPlay />} title="play Sound" />
            <IconButton corner="full" size="4" icon={<PlayerSkipForward />} title="Go to Next Sound" />
          </Flex>
        </Paper>
      </Paper>
      <div>
        <img src="https://picsum.photos/id/15/200/100" alt="kitten" />
      </div>
    </Flex>
  )
}
