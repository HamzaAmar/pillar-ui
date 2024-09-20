import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeColor = () => {
  return (
    <>
      <Flex gap="sm">
        <Badge type="numeric" number={15} max={15} color="dan" />
        <Badge type="numeric" number={15} max={15} color="suc" />
        <Badge type="numeric" number={15} max={15} color="war" />
        <Badge type="numeric" number={15} max={15} color="pri" />
        <Badge type="numeric" number={15} max={15} color="sec" />
        <Badge type="numeric" number={15} max={15} color="bg" />
        <Badge type="numeric" number={15} max={15} color="inf" />
        <Badge type="numeric" number={15} max={15} />
      </Flex>
      <Flex gap="sm">
        <Badge type="icon" color="dan" icon={<Check />} />
        <Badge type="icon" color="suc" icon={<Check />} />
        <Badge type="icon" color="war" icon={<Check />} />
        <Badge type="icon" color="bg" icon={<Check />} />
        <Badge type="icon" color="inf" icon={<Check />} />
        <Badge type="icon" color="pri" icon={<Check />} />
        <Badge type="icon" color="sec" icon={<Check />} />
        <Badge type="icon" icon={<Check />} />
      </Flex>
      <Flex gap="sm">
        <Badge type="dot" color="dan" />
        <Badge type="dot" color="suc" />
        <Badge type="dot" color="war" />
        <Badge type="dot" color="pri" />
        <Badge type="dot" color="sec" />
        <Badge type="dot" color="bg" />
        <Badge type="dot" color="inf" />
        <Badge type="dot" />
      </Flex>
    </>
  )
}
