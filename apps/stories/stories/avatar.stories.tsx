import React from 'react'
import { Avatar, Flex } from '@pillar/core'
import { Dots, UserInfo, UserOff } from '@pillar/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const image = 'https://picsum.photos/id/128/100/100'

export function AvatarsSizes() {
  return (
    <Flex gap="xs" items="center">
      <Avatar image={image} size="3xs" title="Hello" />
      <Avatar image={image} size="2xs" title="Hello" />
      <Avatar image={image} size="xs" title="Hello" />
      <Avatar image={image} size="sm" title="Hello" />
      <Avatar image={image} size="md" title="Hello" />
      <Avatar image={image} size="lg" title="Hello" />
      <Avatar image={image} size="xl" title="Hello" />
      <Avatar image={image} size="2xl" title="Hello" />
      <Avatar image={image} size="3xl" title="Hello" />
    </Flex>
  )
}

export function AvatarsFallback() {
  return (
    <Flex gap="xs" items="center">
      <Avatar size="3xs" title="Hello" />
      <Avatar image="hello.s" size="2xs" title="Hello" />
      <Avatar image="https://pisum" size="xs" title="Hello" />
      <Avatar size="sm" title="Hello" />
      <Avatar size="md" title="Hello" />
      <Avatar size="lg" title="Hello" />
      <Avatar size="xl" title="Hello" />
      <Avatar size="2xl" title="Hello" />
      <Avatar size="3xl" title="Hello" />
    </Flex>
  )
}

export function AvatarsCorners() {
  return (
    <div>
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" title="Hello" />
        <Avatar corner="xs" title="Hello" />
        <Avatar corner="sm" title="Hello" />
        <Avatar corner="md" title="Hello" />
        <Avatar corner="lg" title="Hello" />
        <Avatar corner="xl" title="Hello" />
        <Avatar corner="full" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" image={image} title="Hello" />
        <Avatar corner="xs" image={image} title="Hello" />
        <Avatar corner="sm" image={image} title="Hello" />
        <Avatar corner="md" image={image} title="Hello" />
        <Avatar corner="lg" image={image} title="Hello" />
        <Avatar corner="xl" image={image} title="Hello" />
        <Avatar corner="full" image={image} title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarsAnimations() {
  return (
    <Flex gap="xs" items="center">
      <Avatar image={image} animate="zoom" title="Hello" />
      <Avatar image={image} animate="jump-x" title="Hello" />
      <Avatar image={image} animate="jump-y" title="Hello" />
    </Flex>
  )
}

export function AvatarsColors() {
  return (
    <div className="l_flow__md">
      <Flex gap="xs" items="center">
        <Avatar color="red" variant="solid" image={image} title="Hello" />
        <Avatar color="red" variant="solid" title="Hello" />
        <Avatar color="green" variant="solid" title="Hello" />
        <Avatar color="orange" variant="solid" title="Hello" />
        <Avatar color="brown" variant="solid" title="Hello" />
        <Avatar color="purple" variant="solid" title="Hello" />
        <Avatar color="violet" variant="solid" title="Hello" />
        <Avatar color="indigo" variant="solid" title="Hello" />
        <Avatar color="slate" variant="solid" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="red" variant="outline" image={image} title="Hello" />
        <Avatar color="red" variant="outline" title="Hello" />
        <Avatar color="green" variant="outline" title="Hello" />
        <Avatar color="orange" variant="outline" title="Hello" />
        <Avatar color="brown" variant="outline" title="Hello" />
        <Avatar color="purple" variant="outline" title="Hello" />
        <Avatar color="violet" variant="outline" title="Hello" />
        <Avatar color="indigo" variant="outline" title="Hello" />
        <Avatar color="slate" variant="outline" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="red" variant="dashed" image={image} title="Hello" />
        <Avatar color="red" variant="dashed" title="Hello" />
        <Avatar color="green" variant="dashed" title="Hello" />
        <Avatar color="orange" variant="dashed" title="Hello" />
        <Avatar color="brown" variant="dashed" title="Hello" />
        <Avatar color="purple" variant="dashed" title="Hello" />
        <Avatar color="violet" variant="dashed" title="Hello" />
        <Avatar color="indigo" variant="dashed" title="Hello" />
        <Avatar color="slate" variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="red" variant="soft" image={image} title="Hello" />
        <Avatar color="red" variant="soft" title="Hello" />
        <Avatar color="green" variant="soft" title="Hello" />
        <Avatar color="orange" variant="soft" title="Hello" />
        <Avatar color="brown" variant="soft" title="Hello" />
        <Avatar color="purple" variant="soft" title="Hello" />
        <Avatar color="violet" variant="soft" title="Hello" />
        <Avatar color="indigo" variant="soft" title="Hello" />
        <Avatar color="slate" variant="soft" title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarsVariants() {
  return (
    <div className="l_flow__md">
      <Flex gap="xs" items="center">
        <Avatar variant="solid" title="Hello" />
        <Avatar variant="soft" title="Hello" />
        <Avatar variant="outline" title="Hello" />
        <Avatar variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar image={image} variant="solid" title="Hello" />
        <Avatar image={image} variant="soft" title="Hello" />
        <Avatar image={image} variant="outline" title="Hello" />
        <Avatar image={image} variant="dashed" title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarGroupVariants() {
  return (
    <div className="l_flow__md">
      <Avatar.Group limit={4} layout="stack">
        <Avatar title="Hello" />
        <Avatar image="https://picsum.photos/id/128/100/100" title="Hello" />
        <Avatar image="https://picsum.photos/id/123/100/100" title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </Avatar.Group>
      <Avatar.Group limit={4} variant="solid" layout="stack">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </Avatar.Group>
      <Avatar.Group layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </Avatar.Group>
      <Avatar.Group variant="outline" layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </Avatar.Group>
    </div>
  )
}

export function AvatarGroupCustom() {
  return (
    <div className="l_flow__md">
      <Avatar.Group limit={6} layout="stack" color="red" variant="outline" fallback={<Dots width="20" />}>
        <Avatar title="Hello" />
        <Avatar image="https://picsum.photos/id/128/100/100" title="Hello" />
        <Avatar fallback={<Dots width="20" />} image="https://picsum.photos/id/123/100/100" title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </Avatar.Group>
    </div>
  )
}

export function AvatarPolymorphic() {
  return (
    <div className="l_flow__md">
      <Avatar title="Hello" as="button" onClick={() => alert('Hello world my name is hazma')} />
      <Avatar as="a" href="#" image="https://picsum.photos/id/128/100/100" title="Hello" />
      <Avatar fallback={<Dots width="20" />} image="https://picsum.photos/id/123/100/100" title="Hello" />
    </div>
  )
}

export function AvatarCustomStyle() {
  return (
    <div className="l_flow__md">
      <Avatar title="Hello" className="u_brown" />
      <Avatar title="Hello" style={{ background: 'red', color: 'white' }} />
    </div>
  )
}

const Template: ComponentStory<typeof Avatar> = ({ ...args }) => <Avatar {...args} />

export const Playground = Template.bind({})
