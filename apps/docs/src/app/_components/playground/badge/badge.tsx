import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'
import { Avatar, Badge, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const BadgePlayGround = () => {
  return (
    <Paper
      className="playground"
      as={Flex}
      wrap
      gap="sm"
      border
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
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="numeric" number={15} max={15} />
        <Badge size="2xs" type="numeric" number={15} max={15} />
        <Badge size="xs" type="numeric" number={15} max={15} />
        <Badge size="sm" type="numeric" number={15} max={15} />
        <Badge size="md" type="numeric" number={15} max={15} />
        <Badge size="lg" type="numeric" number={15} max={15} />
        <Badge size="2xl" type="numeric" number={15} max={15} />
        <Badge size="3xl" type="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="icon" icon={<Check />} />
        <Badge size="2xs" type="icon" icon={<Check />} />
        <Badge size="xs" type="icon" icon={<Check />} />
        <Badge size="sm" type="icon" icon={<Check />} />
        <Badge size="md" type="icon" icon={<Check />} />
        <Badge size="lg" type="icon" icon={<Check />} />
        <Badge size="2xl" type="icon" icon={<Check />} />
        <Badge size="3xl" type="icon" icon={<Check />} />
      </Flex>
      <Flex items="center" gap="sm">
        <Badge size="3xs" type="dot" />
        <Badge size="2xs" type="dot" />
        <Badge size="xs" type="dot" />
        <Badge size="sm" type="dot" />
        <Badge size="md" type="dot" />
        <Badge size="lg" type="dot" />
        <Badge size="2xl" type="dot" />
        <Badge size="3xl" type="dot" />
      </Flex>
    </Paper>
  )
}

export const BadgeTypes = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Badge type="dot" color="danger" />
      <Badge type="numeric" number={15} max={15} color="danger" />
      <Badge type="icon" icon={<Check />} color="danger" />
    </Paper>
  )
}

export const BadgeVariants = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <div>
        <Badge type="dot" variant="solid" color="danger" />
        <Badge type="numeric" variant="solid" number={15} max={15} color="danger" />
        <Badge type="icon" variant="solid" icon={<Check />} color="danger" />
      </div>

      <div>
        <Badge type="dot" variant="mixed" color="danger" />
        <Badge type="numeric" variant="mixed" number={15} max={15} color="danger" />
        <Badge type="icon" variant="mixed" icon={<Check />} color="danger" />
      </div>
    </Paper>
  )
}

export const BadgeNumeric = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Badge type="numeric" number={15} color="danger" />
      <Badge type="numeric" number={150} color="success" />
      <Badge type="numeric" number={5} color="warning" />
      <Badge type="numeric" number={0} color="primary" />
      <Badge type="numeric" showZero number={0} color="danger" />
      <Badge type="numeric" number={12211} color="secondary" />
      <Badge type="numeric" number={1500} color="primary" />
      <Badge type="numeric" number={15} color="secondary" />
      <Badge type="numeric" number={15} color="surface" />
    </Paper>
  )
}
export const BadgeNumericMaxValue = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="surface-3" corner="sm">
      <Badge type="numeric" number={15} max={10} color="danger" />
      <Badge type="numeric" number={150} max={100} color="success" />
      <Badge type="numeric" number={5} max={0} color="warning" />
      <Badge type="numeric" number={0} max={15} color="primary" />
      <Badge type="numeric" showZero number={0} max={15} color="danger" />
      <Badge type="numeric" number={12211} max={10000} color="secondary" />
      <Badge type="numeric" number={1500} max={100} color="primary" />
      <Badge type="numeric" number={15} max={1} color="secondary" />
      <Badge type="numeric" number={15} max={15} color="surface" />
    </Paper>
  )
}

export const BadgeCorners = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex gap="sm">
        <Badge type="numeric" corner="sharp" number={15} max={15} color="danger" />
        <Badge type="numeric" corner="xs" number={15} max={15} color="success" />
        <Badge type="numeric" corner="sm" number={15} max={15} color="warning" />
        <Badge type="numeric" corner="md" number={15} max={15} color="secondary" />
        <Badge type="numeric" corner="lg" number={15} max={15} color="secondary" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="primary" />
        <Badge type="numeric" corner="full" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} corner="sharp" color="danger" />
        <Badge type="icon" icon={<Plus />} corner="xs" color="success" />
        <Badge type="icon" icon={<Plane />} corner="sm" color="warning" />
        <Badge type="icon" icon={<Apple />} corner="md" color="secondary" />
        <Badge type="icon" icon={<Alien />} corner="lg" color="secondary" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="primary" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" corner="sharp" color="danger" />
        <Badge type="dot" corner="xs" color="success" />
        <Badge type="dot" corner="sm" color="warning" />
        <Badge type="dot" corner="md" color="secondary" />
        <Badge type="dot" corner="lg" color="secondary" />
        <Badge type="dot" corner="circle" color="primary" />
        <Badge type="dot" corner="full" color="surface" />
      </Flex>
    </Paper>
  )
}

export const BadgeColors = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="surface-3" corner="sm">
      <Flex gap="sm">
        <Badge type="numeric" number={15} max={15} color="danger" />
        <Badge type="numeric" number={15} max={15} color="success" />
        <Badge type="numeric" number={15} max={15} color="warning" />
        <Badge type="numeric" number={15} max={15} color="primary" />
        <Badge type="numeric" number={15} max={15} color="secondary" />
        <Badge type="numeric" number={15} max={15} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} color="danger" />
        <Badge type="icon" icon={<Check />} color="success" />
        <Badge type="icon" icon={<Check />} color="warning" />
        <Badge type="icon" icon={<Check />} color="primary" />
        <Badge type="icon" icon={<Check />} color="secondary" />
        <Badge type="icon" icon={<Check />} color="surface" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" color="danger" />
        <Badge type="dot" color="success" />
        <Badge type="dot" color="warning" />
        <Badge type="dot" color="primary" />
        <Badge type="dot" color="secondary" />
        <Badge type="dot" color="surface" />
      </Flex>
    </Paper>
  )
}

BadgePlayGround.Colors = BadgeColors
BadgePlayGround.Sizes = BadgeSizes
BadgePlayGround.Types = BadgeTypes
BadgePlayGround.Variants = BadgeVariants
BadgePlayGround.Corners = BadgeCorners
BadgePlayGround.Numeric = BadgeNumeric
BadgePlayGround.MaxValue = BadgeNumericMaxValue
