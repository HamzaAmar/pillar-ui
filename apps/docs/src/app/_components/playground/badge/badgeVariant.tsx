import { Badge, Flex } from '@pillar-ui/core'
import { Check } from '@pillar-ui/icons'

export const BadgeVariant = () => {
  return (
    <>
      <Flex gap="3" items="center">
        <Badge variant="shadow" type="dot" color="d" />
        <Badge variant="shadow" type="numeric" number={15} max={15} color="d" />
        <Badge variant="shadow" type="icon" icon={<Check />} color="d" />
      </Flex>
      <Flex gap="3" items="center">
        <Badge type="dot" variant="solid" color="d" />
        <Badge type="numeric" variant="solid" number={15} max={15} color="d" />
        <Badge type="icon" variant="solid" icon={<Check />} color="d" />
      </Flex>

      <Flex gap="3" items="center">
        <Badge type="dot" variant="mixed" color="d" />
        <Badge type="numeric" variant="mixed" number={15} max={15} color="d" />
        <Badge type="icon" variant="mixed" icon={<Check />} color="d" />
      </Flex>
      <Flex gap="3" items="center">
        <Badge variant="soft" type="dot" color="d" />
        <Badge variant="soft" type="numeric" number={15} max={15} color="d" />
        <Badge variant="soft" type="icon" icon={<Check />} color="d" />
      </Flex>
      <Flex gap="3" items="center">
        <Badge variant="outline" type="dot" color="d" />
        <Badge variant="outline" type="numeric" number={15} max={15} color="d" />
        <Badge variant="outline" type="icon" icon={<Check />} color="d" />
      </Flex>
    </>
  )
}
