import React from 'react'
import { IconButton, Flex } from '@pillar/core'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThumbUp } from '@pillar/icons'

export default {
  title: 'Components/IconButton',
} as ComponentMeta<typeof IconButton>

const Hello: ComponentStory<typeof IconButton> = ({ ...args }) => <IconButton {...args} />

export const Playground = Hello.bind({})

export function IconButtonsColors() {
  return (
    <Flex gap="sm">
      <IconButton icon={<ThumbUp />} color="green" />
      <IconButton icon={<ThumbUp />} color="orange" />
      <IconButton icon={<ThumbUp />} color="red" />
      <IconButton icon={<ThumbUp />} color="violet" />
      <IconButton icon={<ThumbUp />} color="slate" />
      <IconButton icon={<ThumbUp />} color="indigo" />
      <IconButton icon={<ThumbUp />} color="purple" />
      <IconButton icon={<ThumbUp />} color="brown" />
    </Flex>
  )
}

export function IconButtonsSizes() {
  return (
    <Flex gap="sm" items="center">
      <IconButton size="3xs" icon={<ThumbUp />} color="green" />
      <IconButton size="2xs" icon={<ThumbUp />} color="orange" />
      <IconButton size="xs" icon={<ThumbUp />} color="red" />
      <IconButton size="sm" icon={<ThumbUp />} color="violet" />
      <IconButton size="md" icon={<ThumbUp />} color="slate" />
      <IconButton size="xl" icon={<ThumbUp />} color="indigo" />
      <IconButton size="2xl" icon={<ThumbUp />} color="purple" />
      <IconButton size="3xl" icon={<ThumbUp />} color="brown" />
    </Flex>
  )
}

export function IconButtonsCorners() {
  return (
    <Flex gap="sm" items="center">
      <IconButton corner="sharp" icon={<ThumbUp />} color="green" />
      <IconButton corner="xs" icon={<ThumbUp />} color="red" />
      <IconButton corner="sm" icon={<ThumbUp />} color="violet" />
      <IconButton corner="md" icon={<ThumbUp />} color="slate" />
      <IconButton corner="xl" icon={<ThumbUp />} color="indigo" />

      <IconButton corner="full" icon={<ThumbUp />} color="brown" />
    </Flex>
  )
}

export function IconButtonsVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} color="green" />
        <IconButton icon={<ThumbUp />} color="orange" />
        <IconButton icon={<ThumbUp />} color="red" />
        <IconButton icon={<ThumbUp />} color="violet" />
        <IconButton icon={<ThumbUp />} color="slate" />
        <IconButton icon={<ThumbUp />} color="indigo" />
        <IconButton icon={<ThumbUp />} color="purple" />
        <IconButton icon={<ThumbUp />} color="brown" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="outline" color="green" />
        <IconButton icon={<ThumbUp />} variant="outline" color="orange" />
        <IconButton icon={<ThumbUp />} variant="outline" color="red" />
        <IconButton icon={<ThumbUp />} variant="outline" color="violet" />
        <IconButton icon={<ThumbUp />} variant="outline" color="slate" />
        <IconButton icon={<ThumbUp />} variant="outline" color="indigo" />
        <IconButton icon={<ThumbUp />} variant="outline" color="purple" />
        <IconButton icon={<ThumbUp />} variant="outline" color="brown" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="soft" color="green" />
        <IconButton icon={<ThumbUp />} variant="soft" color="orange" />
        <IconButton icon={<ThumbUp />} variant="soft" color="red" />
        <IconButton icon={<ThumbUp />} variant="soft" color="violet" />
        <IconButton icon={<ThumbUp />} variant="soft" color="slate" />
        <IconButton icon={<ThumbUp />} variant="soft" color="indigo" />
        <IconButton icon={<ThumbUp />} variant="soft" color="purple" />
        <IconButton icon={<ThumbUp />} variant="soft" color="brown" />
      </Flex>
      <Flex gap="sm">
        <IconButton icon={<ThumbUp />} variant="link" color="green" />
        <IconButton icon={<ThumbUp />} variant="link" color="orange" />
        <IconButton icon={<ThumbUp />} variant="link" color="red" />
        <IconButton icon={<ThumbUp />} variant="link" color="violet" />
        <IconButton icon={<ThumbUp />} variant="link" color="slate" />
        <IconButton icon={<ThumbUp />} variant="link" color="indigo" />
        <IconButton icon={<ThumbUp />} variant="link" color="purple" />
        <IconButton icon={<ThumbUp />} variant="link" color="brown" />
      </Flex>
    </div>
  )
}
