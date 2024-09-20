import { Badge, Flex } from '@pillar-ui/core'
import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'

export const BadgeCorner = () => {
  return (
    <>
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
    </>
  )
}
