import { Flex, IconButton, Paper, ProgressBar, Text } from '@pillar-ui/core'
import { PlayerPlay, PlayerSkipBack, PlayerSkipForward } from '@pillar-ui/icons'
import React from 'react'

export const CardMedia = () => {
  return (
    <Flex background="B1" border width="fit-content" p="4" corner="3" as={Paper} gap="6" items="center">
      <Paper flow="5">
        <div>
          <Text size="4" weight="5">
            Card Media Here
          </Text>
          <Text color="b" low size="4">
            @miloudamar
          </Text>
        </div>
        <Paper flow="3">
          <ProgressBar color="se" label="Progress" value={50} size="1" />
          <Flex gap="3">
            <IconButton corner="full" size="4" icon={<PlayerSkipBack />} title="Go to Previous Sound" />
            <IconButton corner="full" size="4" icon={<PlayerPlay />} title="play Sound" />
            <IconButton corner="full" size="4" icon={<PlayerSkipForward />} title="Go to Next Sound" />
          </Flex>
        </Paper>
      </Paper>
      <div>
        <img className="R-3" src="https://picsum.photos/id/15/200/100" alt="kitten" />
      </div>
    </Flex>
  )
}
