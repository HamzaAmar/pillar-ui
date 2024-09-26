import { Badge } from '@pillar-ui/core'

export const BadgeNumeric = () => {
  return (
    <>
      <Badge type="numeric" number={15} color="d" />
      <Badge type="numeric" number={15} color="d" />
      <Badge type="numeric" number={15} max={20} color="d" />
      <Badge type="numeric" number={0} color="d" />
      <Badge type="numeric" showZero number={0} color="d" />
      <Badge type="numeric" number={40} max={20} color="d" />
    </>
  )
}
