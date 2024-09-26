import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeSize = () => {
  return (
    <>
      <Flex items="center" gap="4">
        <Badge size="3xs" type="numeric" number={15} max={15} />
        <Badge gap="2" type="numeric" number={15} max={15} />
        <Badge gap="3" type="numeric" number={15} max={15} />
        <Badge size="sm" type="numeric" number={15} max={15} />
        <Badge gap="5" type="numeric" number={15} max={15} />
        <Badge gap="6" type="numeric" number={15} max={15} />
        <Badge gap="8" type="numeric" number={15} max={15} />
        <Badge gap="9" type="numeric" number={15} max={15} />
      </Flex>
      <Flex items="center" gap="4">
        <Badge size="3xs" type="icon" icon={<Check />} />
        <Badge gap="2" type="icon" icon={<Check />} />
        <Badge gap="3" type="icon" icon={<Check />} />
        <Badge size="sm" type="icon" icon={<Check />} />
        <Badge gap="5" type="icon" icon={<Check />} />
        <Badge gap="6" type="icon" icon={<Check />} />
        <Badge gap="8" type="icon" icon={<Check />} />
        <Badge gap="9" type="icon" icon={<Check />} />
      </Flex>
      <Flex items="center" gap="4">
        <Badge size="3xs" type="dot" />
        <Badge gap="2" type="dot" />
        <Badge gap="3" type="dot" />
        <Badge size="sm" type="dot" />
        <Badge gap="5" type="dot" />
        <Badge gap="6" type="dot" />
        <Badge gap="8" type="dot" />
        <Badge gap="9" type="dot" />
      </Flex>
    </>
  )
}
