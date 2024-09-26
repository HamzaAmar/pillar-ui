import { Badge, Flex } from '@pillar-ui/core'
import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'

export const BadgeCorner = () => {
  return (
    <>
      <Flex gap="4">
        <Badge type="numeric" corner="sharp" number={15} max={15} color="d" />
        <Badge type="numeric" corner="xs" number={15} max={15} color="s" />
        <Badge type="numeric" corner="sm" number={15} max={15} color="w" />
        <Badge type="numeric" corner="md" number={15} max={15} color="se" />
        <Badge type="numeric" corner="lg" number={15} max={15} color="se" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="p" />
        <Badge type="numeric" corner="full" number={15} max={15} color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="icon" icon={<Check />} corner="sharp" color="d" />
        <Badge type="icon" icon={<Plus />} corner="xs" color="s" />
        <Badge type="icon" icon={<Plane />} corner="sm" color="w" />
        <Badge type="icon" icon={<Apple />} corner="md" color="se" />
        <Badge type="icon" icon={<Alien />} corner="lg" color="se" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="p" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="dot" corner="sharp" color="d" />
        <Badge type="dot" corner="xs" color="s" />
        <Badge type="dot" corner="sm" color="w" />
        <Badge type="dot" corner="md" color="se" />
        <Badge type="dot" corner="lg" color="se" />
        <Badge type="dot" corner="circle" color="p" />
        <Badge type="dot" corner="full" color="b" />
      </Flex>
    </>
  )
}
