import { Avatar, AvatarGroup, Button, Flex, Link, Paper, Text } from '@pillar-ui/core'
import React from 'react'

export const CardSocial = () => {
  return (
    <Paper as="article" background="B1" dir="ltr" border p="4" corner="3" flow="4">
      <Flex items="center" justify="between" gap="3">
        <Flex gap="4">
          <Avatar color="b" variant="dashed" />
          <div>
            <Text>Hamza Miloud Amar</Text>
            <Text color="b" low size="3">
              Frontend Developer
            </Text>
          </div>
        </Flex>
        <Button>Follow</Button>
      </Flex>
      <div>
        <Text color="b" low size="4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores rerum tempora minus dignissimos beatae
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores rerum tempora minus dignissimos beatae
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores rerum tempora minus dignissimos beatae
        </Text>
      </div>
      <Flex gap="2" items="center">
        <AvatarGroup size="1">
          <Avatar src="https://i.pravatar.cc/120?img=1" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=2" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=3" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=4" title="Hamza" />
          <Avatar src="https://i.pravatar.cc/120?img=5" title="Hamza" />
          <Avatar fallback="32+" title="More Viewers" />
        </AvatarGroup>
        <Link size="3" color="b">
          Dan and 38 others
        </Link>
      </Flex>
      <Flex gap="3">
        <Button variant="soft" color="b" size="4">
          250 Likes
        </Button>
        <Button variant="soft" color="b" size="4">
          180 Followers
        </Button>
      </Flex>
    </Paper>
  )
}
