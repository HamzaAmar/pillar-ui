'use client'

import { Button, Chips, Flex, IconButton, Paper, Separator, Text } from '@pillar-ui/core'
import { Heart } from '@pillar-ui/icons'
import React, { useState } from 'react'

export const CardEcommerce = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <Paper width="300px" border>
      <img width={300} src="https://www.picsum.photos/300/200" alt="" />
      <Paper p="5" flow="2">
        <Flex gap="2" justify="between" items="start">
          <div>
            <Text weight="5" truncate="1">
              Hello world Nice to Meet You
            </Text>
            <Flex gap="2" wrap>
              <Chips variant="soft" color="b">
                Hello
              </Chips>
              <Chips variant="soft" color="b">
                Hello
              </Chips>
              <Chips variant="soft" color="b">
                Hello
              </Chips>
              <Chips variant="soft" color="b">
                Hello
              </Chips>
            </Flex>
          </div>
          <IconButton
            size="4"
            onClick={() => setIsFavorite(!isFavorite)}
            icon={<Heart width="16" fill={isFavorite ? 'var(--D11)' : 'none'} />}
            title="Favorite"
            color={isFavorite ? 'd' : 'b'}
            variant={isFavorite ? 'mixed' : 'soft'}
          />
        </Flex>

        <Text size="4" color="b" low truncate="4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores rerum tempora minus dignissimos beatae
          reprehenderit neque assumenda, maxime commodi voluptates incidunt fugit optio illo ab ipsum architecto ad
          harum.
        </Text>
        <Button fluid>Buy Now</Button>
      </Paper>
    </Paper>
  )
}
