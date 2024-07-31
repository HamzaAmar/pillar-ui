import React, { CSSProperties } from 'react'
import { IconButton, Flex, Paper } from '@pillar-ui/core'
import { Meta, StoryObj } from '@storybook/react'
import { ThumbUp } from '@pillar-ui/icons'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
}

export default meta

export function IconButtonsColors() {
  return (
    <Flex gap="sm">
      <IconButton title="Hello world" icon={<ThumbUp />} color="success" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="warning" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="danger" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="secondary" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="bg" />
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
      <IconButton title="Hello world" size="md" icon={<ThumbUp />} color="bg" />
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
      <IconButton title="Hello world" corner="md" icon={<ThumbUp />} color="bg" />
      <IconButton title="Hello world" corner="xl" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}
const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export function IconButtonsVariants() {
  return (
    <div className="l_flow__md">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="success" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="warning" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="danger" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="secondary" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="bg" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="primary" />
        </Flex>
      ))}
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

      <Flex gap="sm" style={{ '--button-rad': '5px' } as CSSProperties}>
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
      <Flex gap="sm" style={{ '--button-rad': '10px' } as CSSProperties}>
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

      <Flex gap="sm" style={{ '--button-rad': '20px' } as CSSProperties}>
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

export const Playground: StoryObj<typeof IconButton> = {}
