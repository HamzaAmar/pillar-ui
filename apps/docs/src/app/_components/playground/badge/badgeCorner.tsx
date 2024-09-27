import { Badge, Flex } from '@pillar-ui/core'
import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'

export const BadgeCorner = () => {
  return (
    <>
      <Flex gap="4">
        <Badge type="numeric" corner="0" number={15} max={15} color="d" />
        <Badge type="numeric" corner="3" number={15} max={15} color="s" />
        <Badge type="numeric" corner="2" number={15} max={15} color="w" />
        <Badge type="numeric" corner="3" number={15} max={15} color="se" />
        <Badge type="numeric" corner="4" number={15} max={15} color="se" />
        <Badge type="numeric" corner="circle" number={15} max={15} color="p" />
        <Badge type="numeric" corner="full" number={15} max={15} color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="icon" icon={<Check />} corner="0" color="d" />
        <Badge type="icon" icon={<Plus />} corner="3" color="s" />
        <Badge type="icon" icon={<Plane />} corner="2" color="w" />
        <Badge type="icon" icon={<Apple />} corner="3" color="se" />
        <Badge type="icon" icon={<Alien />} corner="4" color="se" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" color="p" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" color="b" />
      </Flex>
      <Flex gap="4">
        <Badge type="dot" corner="0" color="d" />
        <Badge type="dot" corner="3" color="s" />
        <Badge type="dot" corner="2" color="w" />
        <Badge type="dot" corner="3" color="se" />
        <Badge type="dot" corner="4" color="se" />
        <Badge type="dot" corner="circle" color="p" />
        <Badge type="dot" corner="full" color="b" />
      </Flex>
    </>
  )
}
