import React, { CSSProperties, useRef, useState } from 'react'
import { Avatar, Flex, Paper, Button, AvatarGroup, Grid } from '@pillar-ui/core'
import { Meta, StoryFn } from '@storybook/react'
import { Album, DotsHorizontal, Exclamation, PictureInPicture, Users } from '@pillar-ui/icons'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
}
export default meta
const image = 'https://picsum.photos/id/128/300/300'

export function AvatarsSizes() {
  return (
    <Flex gap="3" items="center">
      <Avatar src={image} size="1" title="Hello" />
      <Avatar src={image} size="2" title="Hello" />
      <Avatar src={image} size="3" title="Hello" />
      <Avatar src={image} size="4" title="Hello" />
      <Avatar src={image} size="5" title="Hello" />
      <Avatar src={image} size="6" title="Hello" />
      <Avatar src={image} size="7" title="Hello" />
      <Avatar src={image} size="8" title="Hello" />
      <Avatar src={image} size="9" title="Hello" />
    </Flex>
  )
}

export function AvatarsFallback() {
  return (
    <Flex gap="3" items="center">
      <Avatar size="1" title="Hello" />
      <Avatar src="hello.s" size="2" title="Hello" />
      <Avatar src="https://pisum" size="3" title="Hello" />
      <Avatar size="4" title="Hello" />
      <Avatar size="5" title="Hello" />
      <Avatar fallback="NA" size="6" title="Hello" />
      <Avatar fallback={<Exclamation />} size="7" title="Hello" />
      <Avatar size="8" fallback={<Users />} title="Hello" />
      <Avatar size="9" fallback={<Album />} title="Hello" />
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
      <Avatar ref={avatarRef} src="https://picsum.photos/id/128/100/100" title="Hello" />
      <Button onClick={handleClick}>Number {count}</Button>
    </Flex>
  )
}

export function AvatarsCorners() {
  return (
    <div className="Sf-6">
      <Flex gap="3" items="center">
        <Avatar corner="0" src={image} title="Hello" />
        <Avatar corner="1" src={image} title="Hello" />
        <Avatar corner="2" src={image} title="Hello" />
        <Avatar corner="3" src={image} title="Hello" />
        <Avatar corner="4" src={image} title="Hello" />
        <Avatar corner="5" src={image} title="Hello" />
        <Avatar corner="full" src={image} title="Hello" />
        <Avatar corner="b1" src={image} title="Hello" />
        <Avatar corner="b2" src={image} title="Hello" />
        <Avatar corner="b3" src={image} title="Hello" />
        <Avatar corner="b4" src={image} title="Hello" />
        <Avatar corner="b5" src={image} title="Hello" />
        <Avatar corner="h1" src={image} title="Hello" />
        <Avatar corner="h2" src={image} title="Hello" />
        <Avatar corner="h3" src={image} title="Hello" />
        <Avatar corner="h4" src={image} title="Hello" />
        <Avatar corner="h5" src={image} title="Hello" />
        <Avatar corner="h6" src={image} title="Hello" />
      </Flex>

      <Paper corner="0" style={{ '--avatar-rad': '8px' } as CSSProperties}>
        <h2>WIth CSS Variables</h2>
        <Flex gap="4">
          <Avatar title="Hello" />
          <Avatar style={{ '--avatar-rad': 0 } as CSSProperties} title="Hello" />
        </Flex>
      </Paper>
    </div>
  )
}

export function AvatarsAnimations() {
  return (
    <Flex gap="3" items="center">
      <Avatar src={image} animate="zoom" title="Hello" />
      <Avatar src={image} animate="jump-x" title="Hello" />
      <Avatar src={image} animate="jump-y" title="Hello" />
    </Flex>
  )
}

export function AvatarsColors() {
  return (
    <div className="Sf-4">
      <Flex gap="3" items="center">
        <Avatar color="d" variant="solid" src={image} title="Hello" />
        <Avatar color="d" variant="solid" title="Hello" />
        <Avatar color="su" variant="solid" title="Hello" />
        <Avatar color="w" variant="solid" title="Hello" />
        <Avatar color="se" variant="solid" title="Hello" />
        <Avatar color="p" variant="solid" title="Hello" />
        <Avatar color="b" variant="solid" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="outline" src={image} title="Hello" />
        <Avatar color="d" variant="outline" title="Hello" />
        <Avatar color="su" variant="outline" title="Hello" />
        <Avatar color="w" variant="outline" title="Hello" />
        <Avatar color="se" variant="outline" title="Hello" />
        <Avatar color="p" variant="outline" title="Hello" />
        <Avatar color="b" variant="outline" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="dashed" src={image} title="Hello" />
        <Avatar color="d" variant="dashed" title="Hello" />
        <Avatar color="su" variant="dashed" title="Hello" />
        <Avatar color="w" variant="dashed" title="Hello" />
        <Avatar color="se" variant="dashed" title="Hello" />
        <Avatar color="p" variant="dashed" title="Hello" />
        <Avatar color="b" variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar color="d" variant="soft" src={image} title="Hello" />
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
    <div className="Sf-4">
      <Flex gap="3" items="center">
        <Avatar variant="solid" title="Hello" />
        <Avatar variant="soft" title="Hello" />
        <Avatar variant="outline" title="Hello" />
        <Avatar variant="dashed" title="Hello" />
      </Flex>
      <Flex gap="3" items="center">
        <Avatar src={image} variant="solid" title="Hello" />
        <Avatar src={image} variant="soft" title="Hello" />
        <Avatar src={image} variant="outline" title="Hello" />
        <Avatar src={image} variant="dashed" title="Hello" />
      </Flex>
    </div>
  )
}

export function AvatarGroupSettings() {
  return (
    <div className="Sf-4">
      <AvatarGroup limit={4} animate="jump-x" variant="solid" layout="stack">
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
      <AvatarGroup limit={4} fallback={<Users width="20" />} color="d" variant="dashed" layout="grid">
        <Avatar title="Hello" />
        <Avatar title="Hello" />
        <Avatar title="Hello" />
      </AvatarGroup>
    </div>
  )
}

export function AvatarPolymorphic() {
  return (
    <div className="Sf-4">
      <Avatar title="Hello" as="button" onClick={() => alert('Hello world my name is hazma')} />
      <Avatar as="a" href="#" src="https://picsum.photos/id/128/100/100" title="Hello" />
      <Avatar fallback={<DotsHorizontal width="20" />} src="https://picsum.photos/id/123/100/100" title="Hello" />
    </div>
  )
}
export function AvatarIssues() {
  return (
    <div className="Sf-4">
      <Flex gap="8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet dignissimos et tempore hic expedita
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          illo.
        </p>
        <Avatar title="Hello" />
      </Flex>
      <Grid cols={{ default: '1fr auto' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet dignissimos et tempore hic expedita
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          illo.
        </p>
        <Avatar title="Hello" />
      </Grid>
      <Grid rows={{ default: '1fr 1fr' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet dignissimos et tempore hic expedita
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          impedit. Ipsum laborum temporibus esse eius. Incidunt, suscipit vitae dolor adipisci blanditiis aut error
          illo.
        </p>
        <Avatar title="Hello" />
      </Grid>
    </div>
  )
}

const Template: StoryFn<typeof Avatar> = ({ ...args }) => <Avatar {...args} />

export const Playground = {
  render: Template,
}
