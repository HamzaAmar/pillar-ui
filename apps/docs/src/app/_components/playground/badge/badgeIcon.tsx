import { Badge } from '@pillar-ui/core'
import { Check, Eye, Plus, Radar, User, Verified, Window, AspectRatio } from '@pillar-ui/icons'

export const BadgeIcon = () => {
  return (
    <>
      <Badge type="icon" icon={<Check />} color="d" />
      <Badge type="icon" icon={<Eye />} color="su" />
      <Badge type="icon" icon={<User />} color="w" />
      <Badge type="icon" icon={<Plus />} color="p" />
      <Badge type="icon" icon={<Verified />} color="d" />
      <Badge type="icon" icon={<Radar />} color="se" />
      <Badge type="icon" icon={<Window />} color="p" />
      <Badge type="icon" icon={<AspectRatio />} color="se" />
      <Badge type="icon" icon={<Check />} color="b" />
    </>
  )
}
