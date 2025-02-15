import { Avatar, Button, Flex, Heading, Paper, Separator, Text } from '@pillar-ui/core'
import { ChevronDown, CircleCheck, User, Users } from '@pillar-ui/icons'
import React from 'react'

const Item = ({ id }: { id: string }) => {
  return (
    <Flex as="article" justify="between">
      <Flex gap="3" items="center">
        <Avatar src={`https://i.pravatar.cc/120?img=${id}`} size="4" title="bitcoin" variant="dashed" />
        <div>
          <Flex gap="1" items="center">
            <Text size="3" weight="5">
              Hamza Miloud Amar
            </Text>
            <CircleCheck width={16} fill="var(--I9)" stroke="var(--B1)" />
          </Flex>
          <Text size="3" color="se" low>
            @hamzaAmar
          </Text>
        </div>
      </Flex>
      <Button icon={<User />} variant="soft" size="3" color="b">
        Follow
      </Button>
    </Flex>
  )
}

export const CardList = () => {
  return (
    <Flex as="article" direction="col" gap="5" justify="between" className="l_box">
      <Flex justify="between" items="center">
        <Flex gap="3">
          <Users width="20" />
          <Heading as="h3" weight="5" size="4">
            People You may Know
          </Heading>
        </Flex>
        <Button size="3" variant="link">
          More
        </Button>
      </Flex>
      <Separator />
      <Paper flow="4">
        <Item id="1" />
        <Item id="2" />
        <Item id="3" />
        <Item id="4" />
      </Paper>
    </Flex>
  )
}
