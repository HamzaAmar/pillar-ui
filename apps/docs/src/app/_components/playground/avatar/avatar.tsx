import { CircleCheck } from '@pillar-ui/icons'
import { Avatar, AvatarGroup, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const AvatarPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}
export const AvatarColors = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm">
      <Avatar title="John Doe" />
      <Avatar color="dan" title="John Doe" />
      <Avatar color="suc" title="John Doe" />
      <Avatar color="war" title="John Doe" />
      <Avatar color="sec" title="John Doe" />
      <Avatar color="pri" title="John Doe" />
      <Avatar color="bg" title="John Doe" />
      <Avatar color="opa" title="John Doe" />
    </Paper>
  )
}

export const AvatarImage = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm">
      <Avatar image="https://picsum.photos/id/120/100/100" />
      <Avatar image="/image/user.png" />
      <Avatar image="/image/user.svg" />
      <Avatar />
    </Paper>
  )
}

export const AvatarIcon = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm">
      <Avatar fallback={<CircleCheck />} title="Success!" />
    </Paper>
  )
}

export const AvatarSizes = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
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
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
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
    <Paper as={Flex} flow="md" wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
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
    </Paper>
  )
}

export const AvatarAnimate = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar animate="zoom" title="Success!" />
      <Avatar animate="jump-x" title="Success!" />
      <Avatar animate="jump-y" title="Success!" />
    </Paper>
  )
}

export const AvatarFallback = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Hello" />
      <Avatar image="hello.s" title="Hello" />
      <Avatar image="https://pisum" title="Hello" />
    </Paper>
  )
}

export const AvatarGroupLimit = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
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
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
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
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
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
      <AvatarGroup color="dan">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
    </Paper>
  )
}
