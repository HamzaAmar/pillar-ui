import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeType = () => {
  return (
    <Flex items="center" gap="4">
      <Badge type="numeric" number={15} />
      <Badge type="icon" icon={<Check />} />
      <Badge type="dot" />
    </Flex>
  )
}
