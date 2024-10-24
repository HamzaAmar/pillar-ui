import { Badge } from '@pillar-ui/core'

export const BadgeNumeric = () => {
  return (
    <>
      <Badge type="numeric" number={15} />
      <Badge type="numeric" number={100000} />
      <Badge type="numeric" number={0} />
    </>
  )
}
