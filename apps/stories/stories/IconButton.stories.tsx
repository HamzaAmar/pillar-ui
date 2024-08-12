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
      <IconButton title="Hello world" icon={<ThumbUp />} color="suc" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="war" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="dan" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="sec" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="bg" />
      <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
    </Flex>
  )
}

export function IconButtonsSizes() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" size="3xs" icon={<ThumbUp />} color="suc" />
      <IconButton title="Hello world" size="2xs" icon={<ThumbUp />} color="war" />
      <IconButton title="Hello world" size="xs" icon={<ThumbUp />} color="dan" />
      <IconButton title="Hello world" size="sm" icon={<ThumbUp />} color="sec" />
      <IconButton title="Hello world" size="md" icon={<ThumbUp />} color="bg" />
      <IconButton title="Hello world" size="xl" icon={<ThumbUp />} color="pri" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="sm" items="center">
      <IconButton title="Hello world" corner="sharp" icon={<ThumbUp />} color="suc" />
      <IconButton title="Hello world" corner="xs" icon={<ThumbUp />} color="dan" />
      <IconButton title="Hello world" corner="sm" icon={<ThumbUp />} color="sec" />
      <IconButton title="Hello world" corner="md" icon={<ThumbUp />} color="bg" />
      <IconButton title="Hello world" corner="xl" icon={<ThumbUp />} color="pri" />
    </Flex>
  )
}
const VARIANTS = ['shadow', 'solid', 'mixed', 'soft', 'outline', 'link', 'text'] as const

export function IconButtonsVariants() {
  return (
    <div className="l_f-md">
      {VARIANTS.map((variant) => (
        <Flex key={variant} gap="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="suc" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="war" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="dan" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="sec" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="bg" />
          <IconButton title="Hello world" icon={<ThumbUp />} variant={variant} color="pri" />
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
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
      </Flex>
      <Flex gap="sm" style={{ '--button-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
      </Flex>

      <Flex gap="sm" style={{ '--button-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="sm">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="md">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <Paper corner="lg">
          <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
        </Paper>
        <IconButton title="Hello world" icon={<ThumbUp />} color="pri" />
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof IconButton> = {}
