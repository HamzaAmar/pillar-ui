import { CircleCheck } from '@pillar-ui/icons'
import { Avatar, AvatarGroup, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const AvatarPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}
export const AvatarColors = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm">
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

export const AvatarImage = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm">
      <Avatar image="https://picsum.photos/id/120/100/100" />
      <Avatar image="/image/user.png" />
      <Avatar image="/image/user.svg" />
      <Avatar />
    </Paper>
  )
}

export const AvatarIcon = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm">
      <Avatar fallback={<CircleCheck />} title="Success!" />
    </Paper>
  )
}

export const AvatarSizes = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
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

export const AvatarVariants = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <Avatar variant="solid" />
      <Avatar variant="soft" />
      <Avatar variant="outline" />
      <Avatar variant="dashed" />
    </Paper>
  )
}

export const image = 'https://picsum.photos/id/25/100/100'

export const AvatarCorners = () => {
  return (
    <Paper as={Flex} flow="md" wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
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

export const AvatarAnimate = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <Avatar animate="zoom" title="Success!" />
      <Avatar animate="jump-x" title="Success!" />
      <Avatar animate="jump-y" title="Success!" />
    </Paper>
  )
}

export const AvatarFallback = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Hello" />
      <Avatar image="hello.s" title="Hello" />
      <Avatar image="https://pisum" title="Hello" />
    </Paper>
  )
}

export const AvatarGroupLimit = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="surface-3" corner="sm" items="center">
      <AvatarGroup limit={5}>
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup limit={5}>
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
    </Paper>
  )
}

export const AvatarGroupStack = () => {
  return (
    <Paper flow="sm" border p="sm" background="surface-3" corner="sm">
      <AvatarGroup layout="stack">
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
        <Avatar animate="jump-y" title="Success!" />
      </AvatarGroup>
      <AvatarGroup layout="grid">
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
        <Avatar animate="jump-x" title="Success!" />
      </AvatarGroup>
    </Paper>
  )
}

export function AvatarGroupContext() {
  return (
    <Paper flow="sm" border p="sm" background="surface-3" corner="sm">
      <AvatarGroup variant="outline">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup size="xs">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup corner="sharp">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup color="danger">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
    </Paper>
  )
}
