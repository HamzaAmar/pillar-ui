import React, { CSSProperties } from 'react'
import { IconButton, Flex, Paper } from '@pillar-ui/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThumbUp } from '@pillar-ui/icons'

export default {
  title: 'Components/IconButton',
} as ComponentMeta<typeof IconButton>

const Hello: ComponentStory<typeof IconButton> = ({ ...args }) => <IconButton {...args} />

export const Playground = Hello.bind({})

export function IconButtonsColors() {
  return (
    <Flex gap="sm">
      <IconButton title="Hello world" icon={<ThumbUp />} color="success" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="warning" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="danger" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="secondary" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="surface" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsSizes() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" size="3xs" icon={<ThumbUp />} color="success" />
      <IconButton title="Hello world" size="2xs" icon={<ThumbUp />} color="warning" />
      <IconButton title="Hello world" size="xs" icon={<ThumbUp />} color="danger" />
      <IconButton title="Hello world" size="sm" icon={<ThumbUp />} color="secondary" />
      <IconButton title="Hello world" size="md" icon={<ThumbUp />} color="surface" />
      <IconButton title="Hello world" size="xl" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" corner="sharp" icon={<ThumbUp />} color="success" />
      <IconButton title="Hello world" corner="xs" icon={<ThumbUp />} color="danger" />
      <IconButton title="Hello world" corner="sm" icon={<ThumbUp />} color="secondary" />
      <IconButton title="Hello world" corner="md" icon={<ThumbUp />} color="surface" />
      <IconButton title="Hello world" corner="xl" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <IconButton title="Hello world" icon={<ThumbUp />} color="success" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="warning" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="danger" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="secondary" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="surface" />
        <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="success" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="warning" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="danger" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="secondary" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="surface" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="outline" color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="success" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="warning" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="danger" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="secondary" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="surface" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="soft" color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="success" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="warning" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="danger" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="secondary" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="surface" />
        <IconButton title="Hello world" icon={<ThumbUp />} variant="link" color="primary" />
      </Flex>
    </div>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
      </Flex>

      <Flex gap="sm" style={{ '--button-corner': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
      </Flex>
      <Flex gap="sm" style={{ '--button-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
      </Flex>

      <Flex gap="sm" style={{ '--button-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="primary" />
      </Flex>
    </div>
  )
}
