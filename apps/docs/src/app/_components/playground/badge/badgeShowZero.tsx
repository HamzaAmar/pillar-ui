import { Badge } from '@pillar-ui/core'

export const BadgeShowZero = () => {
  return (
    <>
      <Badge type="numeric" number={0} />
      <Badge type="numeric" showZero number={0} />
    </>
  )
}
