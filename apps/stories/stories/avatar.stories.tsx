import React, { CSSProperties, useRef, useState } from 'react'
import { Avatar, Flex, Paper, Button, AvatarGroup } from '@pillar-ui/core'
import { Meta, StoryFn } from '@storybook/react'
import { DotsHorizontal } from '@pillar-ui/icons'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
}
export default meta
const image = 'https://picsum.photos/id/128/300/300'

export function AvatarsSizes() {
  return (
    <Flex gap="3" items="center">
      <Avatar image={image} size="1" title="Hello" />
      <Avatar image={image} size="2" title="Hello" />
      <Avatar image={image} size="3" title="Hello" />
      <Avatar image={image} size="4" title="Hello" />
      <Avatar image={image} size="5" title="Hello" />
      <Avatar image={image} size="6" title="Hello" />
      <Avatar image={image} size="7" title="Hello" />
      <Avatar image={image} size="8" title="Hello" />
      <Avatar image={image} size="9" title="Hello" />
    </Flex>
  )
}

export function AvatarsFallback() {
  return (
    <Flex gap="3" items="center">
      <Avatar size="1" title="Hello" />
      <Avatar image="hello.s" size="2" title="Hello" />
      <Avatar image="https://pisum" size="3" title="Hello" />
      <Avatar size="4" title="Hello" />
      <Avatar size="5" title="Hello" />
      <Avatar size="6" title="Hello" />
      <Avatar size="7" title="Hello" />
      <Avatar size="8" title="Hello" />
      <Avatar size="9" title="Hello" />
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
        style.setProperty('--eq-s', '2.5rem')
        return
      }
      style.setProperty('--eq-s', '3rem')
      return
    }
  }

  return (
    <Flex gap="4" items="center">
      <Avatar ref={avatarRef} image="https://picsum.photos/id/128/100/100" title="Hello" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export function AvatarsCorners() {
  return (
    <div className="Sf6">
      <Flex gap="3" items="center">
        <Avatar corner="0" title="Hello" />
        <Avatar corner="3" title="Hello" />
        <Avatar corner="1" title="Hello" />
        <Avatar corner="2" title="Hello" />
        <Avatar corner="3" title="Hello" />
        <Avatar corner="4" title="Hello" />
        <Avatar corner="full" title="Hello" />
        <Avatar corner="b1" title="Hello" />
        <Avatar corner="b2" title="Hello" />
        <Avatar corner="b3" title="Hello" />
        <Avatar corner="b4" title="Hello" />
        <Avatar corner="b5" title="Hello" />
        <Avatar corner="h1" title="Hello" />
        <Avatar corner="h2" title="Hello" />
        <Avatar corner="h3" title="Hello" />
        <Avatar corner="h4" title="Hello" />
        <Avatar corner="h5" title="Hello" />
        <Avatar corner="h6" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar corner="0" image={image} title="Hello" />
        <Avatar corner="3" image={image} title="Hello" />
        <Avatar corner="1" image={image} title="Hello" />
        <Avatar corner="2" image={image} title="Hello" />
        <Avatar corner="3" image={image} title="Hello" />
        <Avatar corner="4" image={image} title="Hello" />
        <Avatar corner="full" image={image} title="Hello" />
        <Avatar corner="b1" image={image} title="Hello" />
        <Avatar corner="b2" image={image} title="Hello" />
        <Avatar corner="b3" image={image} title="Hello" />
        <Avatar corner="b4" image={image} title="Hello" />
        <Avatar corner="b5" image={image} title="Hello" />
        <Avatar corner="h1" image={image} title="Hello" />
        <Avatar corner="h2" image={image} title="Hello" />
        <Avatar corner="h3" image={image} title="Hello" />
        <Avatar corner="h4" image={image} title="Hello" />
        <Avatar corner="h5" image={image} title="Hello" />
        <Avatar corner="h6" image={image} title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarsAnimations() {
  return (
    <Flex gap="3" items="center">
      <Avatar image={image} animate="zoom" title="Hello" />
      <Avatar image={image} animate="jump-x" title="Hello" />
      <Avatar image={image} animate="jump-y" title="Hello" />
    </Flex>
  )
}

export function AvatarsColors() {
  return (
    <div className="Sf4">
      <Flex gap="3" items="center">
        <Avatar color="d" variant="solid" image={image} title="Hello" />
        <Avatar color="d" variant="solid" title="Hello" />
        <Avatar color="su" variant="solid" title="Hello" />
        <Avatar color="w" variant="solid" title="Hello" />
        <Avatar color="se" variant="solid" title="Hello" />
        <Avatar color="p" variant="solid" title="Hello" />
        <Avatar color="b" variant="solid" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="outline" image={image} title="Hello" />
        <Avatar color="d" variant="outline" title="Hello" />
        <Avatar color="su" variant="outline" title="Hello" />
        <Avatar color="w" variant="outline" title="Hello" />
        <Avatar color="se" variant="outline" title="Hello" />
        <Avatar color="p" variant="outline" title="Hello" />
        <Avatar color="b" variant="outline" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="dashed" image={image} title="Hello" />
        <Avatar color="d" variant="dashed" title="Hello" />
        <Avatar color="su" variant="dashed" title="Hello" />
        <Avatar color="w" variant="dashed" title="Hello" />
        <Avatar color="se" variant="dashed" title="Hello" />
        <Avatar color="p" variant="dashed" title="Hello" />
        <Avatar color="b" variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="soft" image={image} title="Hello" />
        <Avatar color="d" variant="soft" title="Hello" />
        <Avatar color="su" variant="soft" title="Hello" />
        <Avatar color="w" variant="soft" title="Hello" />
        <Avatar color="se" variant="soft" title="Hello" />
        <Avatar color="p" variant="soft" title="Hello" />
        <Avatar color="b" variant="soft" title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarsVariants() {
  return (
    <div className="Sf4">
      <Flex gap="3" items="center">
        <Avatar variant="solid" title="Hello" />
        <Avatar variant="soft" title="Hello" />
        <Avatar variant="outline" title="Hello" />
        <Avatar variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
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
    <div className="Sf4">
      <AvatarGroup variant="solid" layout="stack">
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
    </div>
  )
}

export function AvatarGroupLimit() {
  return (
    <div className="Sf4">
      <AvatarGroup limit={4} variant="solid" layout="stack">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={4} layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={100} layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={4} layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
    </div>
  )
}

export function AvatarGroupCustom() {
  return (
    <div className="Sf4">
      <AvatarGroup limit={6} layout="stack" color="d" variant="outline" fallback={<DotsHorizontal width="20" />}>
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
    <div className="Sf4">
      <Avatar title="Hello" as="button" onClick={() => alert('Hello world my name is hazma')} />
      <Avatar as="a" href="#" image="https://picsum.photos/id/128/100/100" title="Hello" />
      <Avatar fallback={<DotsHorizontal width="20" />} image="https://picsum.photos/id/123/100/100" title="Hello" />
    </div>
  )
}

export function AvatarCustomStyle() {
  return (
    <div className="Sf4">
      <Avatar title="Hello" className="Ci" />
      <Avatar title="Hello" style={{ background: 'red', color: 'white' }} />
    </div>
  )
}

export function AvatarCornerDefaults() {
  return (
    <div className="Sf3">
      <Flex gap="4">
        <Paper corner="0">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="1">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="2">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="3">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>

      <Flex gap="4" style={{ '--avatar-rad': '5px' } as CSSProperties}>
        <Paper corner="0">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="1">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="2">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="3">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>
      <Flex gap="4" style={{ '--avatar-rad': '10px' } as CSSProperties}>
        <Paper corner="0">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="1">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="2">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="3">
          <Avatar title="Hello" />
        </Paper>
        <Avatar title="Hello" />
      </Flex>

      <Flex gap="4" style={{ '--avatar-rad': '20px' } as CSSProperties}>
        <Paper corner="0">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="1">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="2">
          <Avatar title="Hello" />
        </Paper>
        <Paper corner="3">
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
