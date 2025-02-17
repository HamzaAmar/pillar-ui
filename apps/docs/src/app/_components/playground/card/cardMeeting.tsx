import { Avatar, AvatarGroup, Badge, Button, Flex, Paper, Separator, Switch, Text } from '@pillar-ui/core'
import { Plus } from '@pillar-ui/icons'
import React from 'react'

const MeetingItem = () => {
  return (
    <Paper gap="4" background="B1" as={Flex} wrap justify="between" items="center" p="3">
      <Text leading="1" size="7" weight="6">
        09:30
      </Text>

      <div>
        <Text weight="5">Daily Standup</Text>
        <Text size="3" color="b" low>
          Team Organization
        </Text>
      </div>

      <AvatarGroup size="2">
        <Avatar src="https://i.pravatar.cc/120?img=1" title="Hamza" />
        <Avatar src="https://i.pravatar.cc/120?img=2" title="Hamza" />
        <Avatar src="https://i.pravatar.cc/120?img=3" title="Hamza" />
        <Avatar src="https://i.pravatar.cc/120?img=4" title="Hamza" />
        <Avatar src="https://i.pravatar.cc/120?img=5" title="Hamza" />
      </AvatarGroup>

      <Flex gap="2" items="center">
        <Text color="b" low>
          Privacy
        </Text>
        <Switch label="Privacy" />
      </Flex>
    </Paper>
  )
}

export const CardMeeting = () => {
  return (
    <Paper background="B1" as="section" corner="5" p="5" flow="4">
      <Flex justify="between" items="center" gap="3">
        <Flex items="center" gap="2">
          <Text weight="5" size="5">
            Today Meeting
          </Text>
          <Badge variant="soft" size="4" type="numeric" number={2} />
        </Flex>

        <Button icon={<Plus />} variant="text">
          Add New Meet
        </Button>
      </Flex>

      <Paper className="B-s">
        <MeetingItem />
        <MeetingItem />
        <MeetingItem />
      </Paper>
    </Paper>
  )
}
