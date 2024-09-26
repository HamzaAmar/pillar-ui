import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeColor = () => {
  return (
    <>
      <Flex gap="4">
        <Badge type="numeric" number={15} max={15} color="d" />
        <Badge type="numeric" number={15} max={15} color="s" />
        <Badge type="numeric" number={15} max={15} color="w" />
        <Badge type="numeric" number={15} max={15} color="p" />
        <Badge type="numeric" number={15} max={15} color="se" />
        <Badge type="numeric" number={15} max={15} color="b" />
        <Badge type="numeric" number={15} max={15} color="i" />
        <Badge type="numeric" number={15} max={15} />
      </Flex>
      <Flex gap="4">
        <Badge type="icon" color="d" icon={<Check />} />
        <Badge type="icon" color="s" icon={<Check />} />
        <Badge type="icon" color="w" icon={<Check />} />
        <Badge type="icon" color="b" icon={<Check />} />
        <Badge type="icon" color="i" icon={<Check />} />
        <Badge type="icon" color="p" icon={<Check />} />
        <Badge type="icon" color="se" icon={<Check />} />
        <Badge type="icon" icon={<Check />} />
      </Flex>
      <Flex gap="4">
        <Badge type="dot" color="d" />
        <Badge type="dot" color="s" />
        <Badge type="dot" color="w" />
        <Badge type="dot" color="p" />
        <Badge type="dot" color="se" />
        <Badge type="dot" color="b" />
        <Badge type="dot" color="i" />
        <Badge type="dot" />
      </Flex>
    </>
  )
}
