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
      <IconButton title="Hello world" icon={<ThumbUp />} color="s" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="w" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="d" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="se" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="b" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
    </Flex>
  )
}

export function IconButtonsSizes() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" size="3xs" icon={<ThumbUp />} color="s" />
      <IconButton title="Hello world" size="2xs" icon={<ThumbUp />} color="w" />
      <IconButton title="Hello world" size="xs" icon={<ThumbUp />} color="d" />
      <IconButton title="Hello world" size="sm" icon={<ThumbUp />} color="se" />
      <IconButton title="Hello world" size="md" icon={<ThumbUp />} color="b" />
      <IconButton title="Hello world" size="xl" icon={<ThumbUp />} color="p" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" corner="sharp" icon={<ThumbUp />} color="s" />
      <IconButton title="Hello world" corner="xs" icon={<ThumbUp />} color="d" />
      <IconButton title="Hello world" corner="sm" icon={<ThumbUp />} color="se" />
      <IconButton title="Hello world" corner="md" icon={<ThumbUp />} color="b" />
      <IconButton title="Hello world" corner="xl" icon={<ThumbUp />} color="p" />
    </Flex>
  )
}
const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export function IconButtonsVariants() {
  return (
    <div className="l_f-md">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="s" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="w" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="d" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="se" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="b" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="p" />
        </Flex>
      ))}
    </div>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>
      <Flex gap="sm" style={{ '--button-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof IconButton> = {}
