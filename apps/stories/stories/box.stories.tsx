import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, Heading, Text } from '@pillar/core'

export default {
  title: 'Components/Box',
  component: Box,
} as ComponentMeta<typeof Box>

export function BoxSizing() {
  return (
    <div>
      <Box corner="sm">
        <Heading>Hello world</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatem hic nesciunt cupiditate ab omnis
          velit repellat, accusantium tempora, minima, et magnam ex sed fugiat modi iure assumenda aspernatur tenetur.
        </Text>
      </Box>
    </div>
  )
}
