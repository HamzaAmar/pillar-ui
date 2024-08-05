import React, { CSSProperties, useRef, useState } from 'react'
import { Avatar, Flex, Paper, Button, AvatarGroup } from '@pillar-ui/core'
import { Meta, StoryFn } from '@storybook/react'
import { DotsHorizontal } from '@pillar-ui/icons'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
}
export default meta
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

export const AvatarRefForwarded = () => {
  const avatarRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(1)

  const handleClick = () => {
    setCount((count) => count + 1)
    if (avatarRef.current?.style) {
      const { style } = avatarRef.current
      if (count % 2 === 0) {
        avatarRef.current.style.setProperty('--img-size', '2.5rem')
        return
      }
      avatarRef.current.style.setProperty('--img-size', '3rem')
      return
    }
  }

  return (
    <Flex gap="sm" items="center">
      <Avatar ref={avatarRef} image="https://picsum.photos/id/128/100/100" title="Hello" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export function AvatarsCorners() {
  return (
    <div className="l_flow__xl">
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" title="Hello" />
        <Avatar corner="xs" title="Hello" />
        <Avatar corner="sm" title="Hello" />
        <Avatar corner="md" title="Hello" />
        <Avatar corner="lg" title="Hello" />
        <Avatar corner="xl" title="Hello" />
        <Avatar corner="full" title="Hello" />
        <Avatar corner="b-1" title="Hello" />
        <Avatar corner="b-2" title="Hello" />
        <Avatar corner="b-3" title="Hello" />
        <Avatar corner="b-4" title="Hello" />
        <Avatar corner="b-5" title="Hello" />
        <Avatar corner="h-1" title="Hello" />
        <Avatar corner="h-2" title="Hello" />
        <Avatar corner="h-3" title="Hello" />
        <Avatar corner="h-4" title="Hello" />
        <Avatar corner="h-5" title="Hello" />
        <Avatar corner="h-6" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" image={image} title="Hello" />
        <Avatar corner="xs" image={image} title="Hello" />
        <Avatar corner="sm" image={image} title="Hello" />
        <Avatar corner="md" image={image} title="Hello" />
        <Avatar corner="lg" image={image} title="Hello" />
        <Avatar corner="xl" image={image} title="Hello" />
        <Avatar corner="full" image={image} title="Hello" />
        <Avatar corner="b-1" image={image} title="Hello" />
        <Avatar corner="b-2" image={image} title="Hello" />
        <Avatar corner="b-3" image={image} title="Hello" />
        <Avatar corner="b-4" image={image} title="Hello" />
        <Avatar corner="b-5" image={image} title="Hello" />
        <Avatar corner="h-1" image={image} title="Hello" />
        <Avatar corner="h-2" image={image} title="Hello" />
        <Avatar corner="h-3" image={image} title="Hello" />
        <Avatar corner="h-4" image={image} title="Hello" />
        <Avatar corner="h-5" image={image} title="Hello" />
        <Avatar corner="h-6" image={image} title="Hello" />
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
        <Avatar color="dan" variant="solid" image={image} title="Hello" />
        <Avatar color="dan" variant="solid" title="Hello" />
        <Avatar color="suc" variant="solid" title="Hello" />
        <Avatar color="war" variant="solid" title="Hello" />
        <Avatar color="sec" variant="solid" title="Hello" />
        <Avatar color="pri" variant="solid" title="Hello" />
        <Avatar color="bg" variant="solid" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="dan" variant="outline" image={image} title="Hello" />
        <Avatar color="dan" variant="outline" title="Hello" />
        <Avatar color="suc" variant="outline" title="Hello" />
        <Avatar color="war" variant="outline" title="Hello" />
        <Avatar color="sec" variant="outline" title="Hello" />
        <Avatar color="pri" variant="outline" title="Hello" />
        <Avatar color="bg" variant="outline" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="dan" variant="dashed" image={image} title="Hello" />
        <Avatar color="dan" variant="dashed" title="Hello" />
        <Avatar color="suc" variant="dashed" title="Hello" />
        <Avatar color="war" variant="dashed" title="Hello" />
        <Avatar color="sec" variant="dashed" title="Hello" />
        <Avatar color="pri" variant="dashed" title="Hello" />
        <Avatar color="bg" variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar color="dan" variant="soft" image={image} title="Hello" />
        <Avatar color="dan" variant="soft" title="Hello" />
        <Avatar color="suc" variant="soft" title="Hello" />
        <Avatar color="war" variant="soft" title="Hello" />
        <Avatar color="sec" variant="soft" title="Hello" />
        <Avatar color="pri" variant="soft" title="Hello" />
        <Avatar color="bg" variant="soft" title="Hello" />
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
      <AvatarGroup limit={4} layout="stack">
        <Avatar title="Hello" />
        <Avatar image="https://picsum.photos/id/128/100/100" title="Hello" />
        <Avatar image="https://picsum.photos/id/123/100/100" title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={4} variant="solid" layout="stack">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup variant="outline" layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
    </div>
  )
}

export function AvatarGroupCustom() {
  return (
    <div className="l_flow__md">
      <AvatarGroup limit={6} layout="stack" color="dan" variant="outline" fallback={<DotsHorizontal width="20" />}>
        <Avatar title="Hello" />
        <Avatar image="https://picsum.photos/id/128/100/100" title="Hello" />
        <Avatar fallback={<DotsHorizontal width="20" />} image="https://picsum.photos/id/123/100/100" title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
    </div>
  )
}

export function AvatarPolymorphic() {
  return (
    <div className="l_flow__md">
      <Avatar title="Hello" as="button" onClick={() => alert('Hello world my name is hazma')} />
      <Avatar as="a" href="#" image="https://picsum.photos/id/128/100/100" title="Hello" />
      <Avatar fallback={<DotsHorizontal width="20" />} image="https://picsum.photos/id/123/100/100" title="Hello" />
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

export function AvatarCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="sm">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="md">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="lg">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>

      <Flex gap="sm" style={{ '--avatar-rad': '5px' } as CSSProperties}>
        <Paper corner="sharp">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="sm">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="md">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="lg">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>
      <Flex gap="sm" style={{ '--avatar-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="sm">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="md">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="lg">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>

      <Flex gap="sm" style={{ '--avatar-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="sm">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="md">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="lg">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>
    </div>
  )
}

const Template: StoryFn<typeof Avatar> = ({ ...args }) => <Avatar {...args} />

export const Playground = {
  render: Template,
}
