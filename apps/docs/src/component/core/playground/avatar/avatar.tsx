import { CircleCheck } from '@pillar-ui/icons'
import { Avatar, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const AvatarPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}
const AvatarColors = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar title="John Doe" />
      <Avatar color="danger" title="John Doe" />
      <Avatar color="success" title="John Doe" />
      <Avatar color="warning" title="John Doe" />
      <Avatar color="secondary" title="John Doe" />
      <Avatar color="primary" title="John Doe" />
      <Avatar color="surface" title="John Doe" />
      <Avatar color="opacity" title="John Doe" />
    </Paper>
  )
}

const AvatarImage = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar image="https://picsum.photos/id/120/100/100" />
      <Avatar image="/image/user.png" />
      <Avatar image="/image/user.svg" />
      <Avatar />
    </Paper>
  )
}

const AvatarIcon = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar fallback={<CircleCheck />} title="Success!" />
    </Paper>
  )
}

const AvatarSizes = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar image="https://picsum.photos/id/120/100/100" size="3xs" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="2xs" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="xs" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="md" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="lg" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="xl" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="2xl" />
      <Avatar image="https://picsum.photos/id/120/100/100" size="3xl" />
    </Paper>
  )
}

const AvatarVariants = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar variant="solid" />
      <Avatar variant="soft" />
      <Avatar variant="outline" />
      <Avatar variant="dashed" />
    </Paper>
  )
}

const image = 'https://picsum.photos/id/25/100/100'

const AvatarCorners = () => {
  return (
    <Paper
      as={Flex}
      flow="md"
      wrap
      gap="sm"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
      items="center"
    >
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" title="Hello" />
        <Avatar corner="xs" title="Hello" />
        <Avatar corner="sm" title="Hello" />
        <Avatar corner="md" title="Hello" />
        <Avatar corner="lg" title="Hello" />
        <Avatar corner="xl" title="Hello" />
        <Avatar corner="full" title="Hello" />
        <Avatar corner="blob-1" title="Hello" />
        <Avatar corner="blob-2" title="Hello" />
        <Avatar corner="blob-3" title="Hello" />
        <Avatar corner="blob-4" title="Hello" />
        <Avatar corner="blob-5" title="Hello" />
        <Avatar corner="hand-1" title="Hello" />
        <Avatar corner="hand-2" title="Hello" />
        <Avatar corner="hand-3" title="Hello" />
        <Avatar corner="hand-4" title="Hello" />
        <Avatar corner="hand-5" title="Hello" />
        <Avatar corner="hand-6" title="Hello" />
      </Flex>
      <Flex gap="xs" items="center">
        <Avatar corner="sharp" image={image} title="Hello" />
        <Avatar corner="xs" image={image} title="Hello" />
        <Avatar corner="sm" image={image} title="Hello" />
        <Avatar corner="md" image={image} title="Hello" />
        <Avatar corner="lg" image={image} title="Hello" />
        <Avatar corner="xl" image={image} title="Hello" />
        <Avatar corner="full" image={image} title="Hello" />
        <Avatar corner="blob-1" image={image} title="Hello" />
        <Avatar corner="blob-2" image={image} title="Hello" />
        <Avatar corner="blob-3" image={image} title="Hello" />
        <Avatar corner="blob-4" image={image} title="Hello" />
        <Avatar corner="blob-5" image={image} title="Hello" />
        <Avatar corner="hand-1" image={image} title="Hello" />
        <Avatar corner="hand-2" image={image} title="Hello" />
        <Avatar corner="hand-3" image={image} title="Hello" />
        <Avatar corner="hand-4" image={image} title="Hello" />
        <Avatar corner="hand-5" image={image} title="Hello" />
        <Avatar corner="hand-6" image={image} title="Hello" />
      </Flex>
    </Paper>
  )
}

const AvatarAnimate = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar animate="zoom" title="Success!" />
      <Avatar animate="jump-x" title="Success!" />
      <Avatar animate="jump-y" title="Success!" />
    </Paper>
  )
}

const AvatarFallback = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Hello" />
      <Avatar image="hello.s" title="Hello" />
      <Avatar image="https://pisum" title="Hello" />
    </Paper>
  )
}

const AvatarGroupLimit = () => {
  return (
    <Paper as={Flex} wrap gap="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar.Group limit={5}>
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
      <Avatar.Group limit={5}>
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
    </Paper>
  )
}

const AvatarGroupStack = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar.Group layout="stack">
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
      </Avatar.Group>
      <Avatar.Group layout="grid">
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
      </Avatar.Group>
    </Paper>
  )
}

function AvatarGroupContext() {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Avatar.Group variant="outline">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
      <Avatar.Group size="xs">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
      <Avatar.Group corner="sharp">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
      <Avatar.Group color="danger">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </Avatar.Group>
    </Paper>
  )
}

AvatarPlayGround.Colors = AvatarColors
AvatarPlayGround.Sizes = AvatarSizes
AvatarPlayGround.Variants = AvatarVariants
AvatarPlayGround.Corners = AvatarCorners
AvatarPlayGround.Image = AvatarImage
AvatarPlayGround.Icon = AvatarIcon
AvatarPlayGround.Animate = AvatarAnimate
AvatarPlayGround.Fallback = AvatarFallback
AvatarPlayGround.GroupContext = AvatarGroupContext
AvatarPlayGround.GroupStack = AvatarGroupStack
AvatarPlayGround.GroupLimit = AvatarGroupLimit
