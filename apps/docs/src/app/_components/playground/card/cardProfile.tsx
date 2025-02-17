import { Avatar, Flex, IconButton, Paper, Text } from '@pillar-ui/core'
import { Checkbox, DotsHorizontal, Trophy, Users } from '@pillar-ui/icons'
import React from 'react'

export const CardProfile = () => {
  return (
    <Flex
      background="B1"
      border
      width="fit-content"
      p="6"
      corner="3"
      as={Paper}
      gap="6"
      direction="col"
      justify="center"
    >
      <Flex justify="between" items="center" gap="2">
        <Text weight="5" size="6">
          Profile
        </Text>
        <IconButton size="3" title="More Options" icon={<DotsHorizontal />} />
      </Flex>
      <Flex direction="col" items="center">
        <Avatar src="https://i.pravatar.cc/60?img=20" variant="dashed" size="7" title="Hamza Miloud Amar" />
        <Text weight="5">Hamza Miloud Amar</Text>
        <Text color="b" low size="3">
          Frontend Developer
        </Text>
      </Flex>

      <Flex gap="4">
        <Paper as={Flex} gap="2" p="2" border corner="2">
          <Users width="16" />
          <Text weight="5">11</Text>
        </Paper>
        <Paper as={Flex} gap="2" p="2" border corner="2">
          <Checkbox width="16" />
          <Text weight="5">25</Text>
        </Paper>
        <Paper as={Flex} gap="2" p="2" border corner="2">
          <Trophy width="16" />
          <Text weight="5">125</Text>
        </Paper>
      </Flex>
    </Flex>
  )
}
