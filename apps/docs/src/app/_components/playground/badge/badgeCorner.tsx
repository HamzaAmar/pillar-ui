import { Badge, Flex } from '@pillar-ui/core'
import { Alien, Apple, Check, ChevronDown, LetterSpacing, Plane, Plus } from '@pillar-ui/icons'

export const BadgeCorner = () => {
  return (
    <>
      <Flex gap="4">
        <Badge type="numeric" corner="0" number={15} max={15} />
        <Badge type="numeric" corner="1" number={15} max={15} />
        <Badge type="numeric" corner="2" number={15} max={15} />
        <Badge type="numeric" corner="3" number={15} max={15} />
        <Badge type="numeric" corner="4" number={15} max={15} />
        <Badge type="numeric" corner="5" number={15} max={15} />
        <Badge type="numeric" corner="circle" number={15} max={15} />
        <Badge type="numeric" corner="full" number={15} max={15} />
      </Flex>
      <Flex gap="4">
        <Badge type="icon" icon={<Check />} corner="0" />
        <Badge type="icon" icon={<Plus />} corner="1" />
        <Badge type="icon" icon={<Plane />} corner="2" />
        <Badge type="icon" icon={<Apple />} corner="3" />
        <Badge type="icon" icon={<Alien />} corner="4" />
        <Badge type="icon" icon={<Alien />} corner="5" />
        <Badge type="icon" icon={<ChevronDown />} corner="circle" />
        <Badge type="icon" icon={<LetterSpacing />} corner="full" />
      </Flex>
      <Flex gap="4">
        <Badge type="dot" corner="0" />
        <Badge type="dot" corner="1" />
        <Badge type="dot" corner="2" />
        <Badge type="dot" corner="3" />
        <Badge type="dot" corner="4" />
        <Badge type="dot" corner="5" />
        <Badge type="dot" corner="circle" />
        <Badge type="dot" corner="full" />
      </Flex>
    </>
  )
}
