import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeVariant = () => {
  return (
    <>
      <Flex gap="xs" items="center">
        <Badge type="dot" variant="solid" color="dan" />
        <Badge type="numeric" variant="solid" number={15} max={15} color="dan" />
        <Badge type="icon" variant="solid" icon={<Check />} color="dan" />
      </Flex>

      <Flex gap="xs" items="center">
        <Badge type="dot" variant="mixed" color="dan" />
        <Badge type="numeric" variant="mixed" number={15} max={15} color="dan" />
        <Badge type="icon" variant="mixed" icon={<Check />} color="dan" />
      </Flex>
    </>
  )
}
