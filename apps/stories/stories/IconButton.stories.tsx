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
    <Flex gap="4">
      <IconButton title="Hello world" icon={<ThumbUp />} color="su" />
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
    <Flex gap="4" items="center">
      <IconButton title="Hello world" size="1" icon={<ThumbUp />} color="su" />
      <IconButton title="Hello world" size="2" icon={<ThumbUp />} color="w" />
      <IconButton title="Hello world" size="3" icon={<ThumbUp />} color="d" />
      <IconButton title="Hello world" size="4" icon={<ThumbUp />} color="se" />
      <IconButton title="Hello world" size="5" icon={<ThumbUp />} color="b" />
      <IconButton title="Hello world" size="7" icon={<ThumbUp />} color="p" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="4" items="center">
      <IconButton title="Hello world" corner="0" icon={<ThumbUp />} color="su" />
      <IconButton title="Hello world" corner="3" icon={<ThumbUp />} color="d" />
      <IconButton title="Hello world" corner="2" icon={<ThumbUp />} color="se" />
      <IconButton title="Hello world" corner="3" icon={<ThumbUp />} color="b" />
      <IconButton title="Hello world" corner="5" icon={<ThumbUp />} color="p" />
    </Flex>
  )
}
const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export function IconButtonsVariants() {
  return (
    <div className="Sf-4">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="4">
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="su" />
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
    <div className="Sf-3">
      <Flex gap="4">
        <Paper corner="0">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="2">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="3">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="4">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>

      <Flex gap="4" style={{ '--bu-rad': '5px' } as CSSProperties}>
        <Paper corner="0">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="2">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="3">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="4">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>
      <Flex gap="4" style={{ '--bu-rad': '10px' } as CSSProperties}>
        <Paper corner="0">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="2">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="3">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="4">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>

      <Flex gap="4" style={{ '--bu-rad': '20px' } as CSSProperties}>
        <Paper corner="0">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="2">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="3">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <Paper corner="4">
          <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="p" />
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof IconButton> = {}
