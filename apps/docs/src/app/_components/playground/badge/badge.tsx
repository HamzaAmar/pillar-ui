import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'
import { Avatar, Badge, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const BadgePlayGround = () => {
  return (
    <Paper className="playground" as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const BadgeSizes = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
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
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Badge type="dot" color="dan" />
      <Badge type="numeric" number={15} max={15} color="dan" />
      <Badge type="icon" icon={<Check />} color="dan" />
    </Paper>
  )
}

export const BadgeVariants = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <div>
        <Badge type="dot" variant="solid" color="dan" />
        <Badge type="numeric" variant="solid" number={15} max={15} color="dan" />
        <Badge type="icon" variant="solid" icon={<Check />} color="dan" />
      </div>

      <div>
        <Badge type="dot" variant="mixed" color="dan" />
        <Badge type="numeric" variant="mixed" number={15} max={15} color="dan" />
        <Badge type="icon" variant="mixed" icon={<Check />} color="dan" />
      </div>
    </Paper>
  )
}

export const BadgeNumeric = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Badge type="numeric" number={15} color="dan" />
      <Badge type="numeric" number={150} color="suc" />
      <Badge type="numeric" number={5} color="war" />
      <Badge type="numeric" number={0} color="pri" />
      <Badge type="numeric" showZero number={0} color="dan" />
      <Badge type="numeric" number={12211} color="sec" />
      <Badge type="numeric" number={1500} color="pri" />
      <Badge type="numeric" number={15} color="sec" />
      <Badge type="numeric" number={15} color="bg" />
    </Paper>
  )
}
export const BadgeNumericMaxValue = () => {
  return (
    <Paper className="playground" as={Flex} gap="sm" items="center" border p="sm" background="bg-3" corner="sm">
      <Badge type="numeric" number={15} max={10} color="dan" />
      <Badge type="numeric" number={150} max={100} color="suc" />
      <Badge type="numeric" number={5} max={0} color="war" />
      <Badge type="numeric" number={0} max={15} color="pri" />
      <Badge type="numeric" showZero number={0} max={15} color="dan" />
      <Badge type="numeric" number={12211} max={10000} color="sec" />
      <Badge type="numeric" number={1500} max={100} color="pri" />
      <Badge type="numeric" number={15} max={1} color="sec" />
      <Badge type="numeric" number={15} max={15} color="bg" />
    </Paper>
  )
}

export const BadgeCorners = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Flex gap="sm">
        <Badge type="numeric" corner="sharp" number={15} max={15} color="dan" />
        <Badge type="numeric" corner="xs" number={15} max={15} color="suc" />
        <Badge type="numeric" corner="sm" number={15} max={15} color="war" />
        <Badge type="numeric" corner="md" number={15} max={15} color="sec" />
        <Badge type="numeric" corner="lg" number={15} max={15} color="sec" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="pri" />
        <Badge type="numeric" corner="full" number={15} max={15} color="bg" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} corner="sharp" color="dan" />
        <Badge type="icon" icon={<Plus />} corner="xs" color="suc" />
        <Badge type="icon" icon={<Plane />} corner="sm" color="war" />
        <Badge type="icon" icon={<Apple />} corner="md" color="sec" />
        <Badge type="icon" icon={<Alien />} corner="lg" color="sec" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="pri" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="bg" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" corner="sharp" color="dan" />
        <Badge type="dot" corner="xs" color="suc" />
        <Badge type="dot" corner="sm" color="war" />
        <Badge type="dot" corner="md" color="sec" />
        <Badge type="dot" corner="lg" color="sec" />
        <Badge type="dot" corner="circle" color="pri" />
        <Badge type="dot" corner="full" color="bg" />
      </Flex>
    </Paper>
  )
}

export const BadgeColors = () => {
  return (
    <Paper className="playground" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Flex gap="sm">
        <Badge type="numeric" number={15} max={15} color="dan" />
        <Badge type="numeric" number={15} max={15} color="suc" />
        <Badge type="numeric" number={15} max={15} color="war" />
        <Badge type="numeric" number={15} max={15} color="pri" />
        <Badge type="numeric" number={15} max={15} color="sec" />
        <Badge type="numeric" number={15} max={15} color="bg" />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" icon={<Check />} color="dan" />
        <Badge type="icon" icon={<Check />} color="suc" />
        <Badge type="icon" icon={<Check />} color="war" />
        <Badge type="icon" icon={<Check />} color="pri" />
        <Badge type="icon" icon={<Check />} color="sec" />
        <Badge type="icon" icon={<Check />} color="bg" />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" color="dan" />
        <Badge type="dot" color="suc" />
        <Badge type="dot" color="war" />
        <Badge type="dot" color="pri" />
        <Badge type="dot" color="sec" />
        <Badge type="dot" color="bg" />
      </Flex>
    </Paper>
  )
}
