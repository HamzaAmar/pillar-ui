import React from 'react'
import { IconButton, Flex } from '@pillar-ui/core'
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
      <IconButton icon={<ThumbUp />} color="success" />
      <IconButton icon={<ThumbUp />} color="warning" />
      <IconButton icon={<ThumbUp />} color="danger" />
      <IconButton icon={<ThumbUp />} color="secondary" />
      <IconButton icon={<ThumbUp />} color="surface" />
      <IconButton icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsSizes() {
  return (
    <Flex gap="sm" items="center">
      <IconButton size="3xs" icon={<ThumbUp />} color="success" />
      <IconButton size="2xs" icon={<ThumbUp />} color="warning" />
      <IconButton size="xs" icon={<ThumbUp />} color="danger" />
      <IconButton size="sm" icon={<ThumbUp />} color="secondary" />
      <IconButton size="md" icon={<ThumbUp />} color="surface" />
      <IconButton size="xl" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="sm" items="center">
      <IconButton corner="sharp" icon={<ThumbUp />} color="success" />
      <IconButton corner="xs" icon={<ThumbUp />} color="danger" />
      <IconButton corner="sm" icon={<ThumbUp />} color="secondary" />
      <IconButton corner="md" icon={<ThumbUp />} color="surface" />
      <IconButton corner="xl" icon={<ThumbUp />} color="primary" />
    </Flex>
  )
}

export function IconButtonsVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} color="success" />
        <IconButton icon={<ThumbUp />} color="warning" />
        <IconButton icon={<ThumbUp />} color="danger" />
        <IconButton icon={<ThumbUp />} color="secondary" />
        <IconButton icon={<ThumbUp />} color="surface" />
        <IconButton icon={<ThumbUp />} color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="outline" color="success" />
        <IconButton icon={<ThumbUp />} variant="outline" color="warning" />
        <IconButton icon={<ThumbUp />} variant="outline" color="danger" />
        <IconButton icon={<ThumbUp />} variant="outline" color="secondary" />
        <IconButton icon={<ThumbUp />} variant="outline" color="surface" />
        <IconButton icon={<ThumbUp />} variant="outline" color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="soft" color="success" />
        <IconButton icon={<ThumbUp />} variant="soft" color="warning" />
        <IconButton icon={<ThumbUp />} variant="soft" color="danger" />
        <IconButton icon={<ThumbUp />} variant="soft" color="secondary" />
        <IconButton icon={<ThumbUp />} variant="soft" color="surface" />
        <IconButton icon={<ThumbUp />} variant="soft" color="primary" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="link" color="success" />
        <IconButton icon={<ThumbUp />} variant="link" color="warning" />
        <IconButton icon={<ThumbUp />} variant="link" color="danger" />
        <IconButton icon={<ThumbUp />} variant="link" color="secondary" />
        <IconButton icon={<ThumbUp />} variant="link" color="surface" />
        <IconButton icon={<ThumbUp />} variant="link" color="primary" />
      </Flex>
    </div>
  )
}
