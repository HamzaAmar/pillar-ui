import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar/icons'
import { Avatar, Badge, Flex, Paper } from '@pillar/core'
import React from 'react'

export const BadgePlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      gap="sm"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
      items="center"
    >
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const BadgeSizes = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="numeric" number={15} max={15} />
        <Badge size="2xs" variant="numeric" number={15} max={15} />
        <Badge size="xs" variant="numeric" number={15} max={15} />
        <Badge size="sm" variant="numeric" number={15} max={15} />
        <Badge size="md" variant="numeric" number={15} max={15} />
        <Badge size="lg" variant="numeric" number={15} max={15} />
        <Badge size="2xl" variant="numeric" number={15} max={15} />
        <Badge size="3xl" variant="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="icon" icon={<Check />} />
        <Badge size="2xs" variant="icon" icon={<Check />} />
        <Badge size="xs" variant="icon" icon={<Check />} />
        <Badge size="sm" variant="icon" icon={<Check />} />
        <Badge size="md" variant="icon" icon={<Check />} />
        <Badge size="lg" variant="icon" icon={<Check />} />
        <Badge size="2xl" variant="icon" icon={<Check />} />
        <Badge size="3xl" variant="icon" icon={<Check />} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" variant="dot" />
        <Badge size="2xs" variant="dot" />
        <Badge size="xs" variant="dot" />
        <Badge size="sm" variant="dot" />
        <Badge size="md" variant="dot" />
        <Badge size="lg" variant="dot" />
        <Badge size="2xl" variant="dot" />
        <Badge size="3xl" variant="dot" />
      </Flex>
    </Paper>
  )
}

export const BadgeVariants = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Badge variant="dot" color="danger" />
      <Badge variant="numeric" number={15} max={15} color="danger" />
      <Badge variant="icon" icon={<Check />} color="danger" />
    </Paper>
  )
}

export const BadgeNumeric = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Badge variant="numeric" number={15} color="danger" />
      <Badge variant="numeric" number={150} color="success" />
      <Badge variant="numeric" number={5} color="warning" />
      <Badge variant="numeric" number={0} color="primary" />
      <Badge variant="numeric" showZero number={0} color="danger" />
      <Badge variant="numeric" number={12211} color="secondary" />
      <Badge variant="numeric" number={1500} color="primary" />
      <Badge variant="numeric" number={15} color="secondary" />
      <Badge variant="numeric" number={15} color="surface" />
    </Paper>
  )
}
export const BadgeNumericMaxValue = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      gap="sm"
      items="center"
      borderColor="opacity-6"
      p="sm"
      background="surface-3"
      corner="sm"
    >
      <Badge variant="numeric" number={15} max={10} color="danger" />
      <Badge variant="numeric" number={150} max={100} color="success" />
      <Badge variant="numeric" number={5} max={0} color="warning" />
      <Badge variant="numeric" number={0} max={15} color="primary" />
      <Badge variant="numeric" showZero number={0} max={15} color="danger" />
      <Badge variant="numeric" number={12211} max={10000} color="secondary" />
      <Badge variant="numeric" number={1500} max={100} color="primary" />
      <Badge variant="numeric" number={15} max={1} color="secondary" />
      <Badge variant="numeric" number={15} max={15} color="surface" />
    </Paper>
  )
}

export const BadgeCorners = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex gap="sm">
        <Badge variant="numeric" corner="sharp" number={15} max={15} color="danger" />
        <Badge variant="numeric" corner="xs" number={15} max={15} color="success" />
        <Badge variant="numeric" corner="sm" number={15} max={15} color="warning" />
        <Badge variant="numeric" corner="md" number={15} max={15} color="secondary" />
        <Badge variant="numeric" corner="lg" number={15} max={15} color="secondary" />
        <Badge variant="numeric" corner="circle" number={15} max={15} color="primary" />
        <Badge variant="numeric" corner="full" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="icon" icon={<Check />} corner="sharp" color="danger" />
        <Badge variant="icon" icon={<Plus />} corner="xs" color="success" />
        <Badge variant="icon" icon={<Plane />} corner="sm" color="warning" />
        <Badge variant="icon" icon={<Apple />} corner="md" color="secondary" />
        <Badge variant="icon" icon={<Alien />} corner="lg" color="secondary" />
        <Badge variant="icon" icon={<ChevronDown />} corner="circle" color="primary" />
        <Badge variant="icon" icon={<LetterSpacing />} corner="full" color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="dot" corner="sharp" color="danger" />
        <Badge variant="dot" corner="xs" color="success" />
        <Badge variant="dot" corner="sm" color="warning" />
        <Badge variant="dot" corner="md" color="secondary" />
        <Badge variant="dot" corner="lg" color="secondary" />
        <Badge variant="dot" corner="circle" color="primary" />
        <Badge variant="dot" corner="full" color="surface" />
      </Flex>
    </Paper>
  )
}

export const BadgeColors = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex gap="sm">
        <Badge variant="numeric" number={15} max={15} color="danger" />
        <Badge variant="numeric" number={15} max={15} color="success" />
        <Badge variant="numeric" number={15} max={15} color="warning" />
        <Badge variant="numeric" number={15} max={15} color="primary" />
        <Badge variant="numeric" number={15} max={15} color="secondary" />
        <Badge variant="numeric" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="icon" icon={<Check />} color="danger" />
        <Badge variant="icon" icon={<Check />} color="success" />
        <Badge variant="icon" icon={<Check />} color="warning" />
        <Badge variant="icon" icon={<Check />} color="primary" />
        <Badge variant="icon" icon={<Check />} color="secondary" />
        <Badge variant="icon" icon={<Check />} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge variant="dot" color="danger" />
        <Badge variant="dot" color="success" />
        <Badge variant="dot" color="warning" />
        <Badge variant="dot" color="primary" />
        <Badge variant="dot" color="secondary" />
        <Badge variant="dot" color="surface" />
      </Flex>
    </Paper>
  )
}

BadgePlayGround.Colors = BadgeColors
BadgePlayGround.Sizes = BadgeSizes
BadgePlayGround.Variants = BadgeVariants
BadgePlayGround.Corners = BadgeCorners
BadgePlayGround.Numeric = BadgeNumeric
BadgePlayGround.MaxValue = BadgeNumericMaxValue
