import { Badge } from '@pillar-ui/core'

export const BadgeMax = () => {
  return (
    <>
      <Badge type="numeric" number={20} />
      <Badge type="numeric" number={10} max={10} />
      <Badge type="numeric" number={15} max={20} />
      <Badge type="numeric" number={40} max={20} />
    </>
  )
}
