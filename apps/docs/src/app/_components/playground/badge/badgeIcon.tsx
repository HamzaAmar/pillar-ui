import { Badge } from '@pillar-ui/core'
import { Check, Eye, Plus, Radar, User, Verified, Window, AspectRatio } from '@pillar-ui/icons'

export const BadgeIcon = () => {
  return (
    <>
      <Badge type="icon" icon={<Check />} />
      <Badge type="icon" icon={<Eye />} />
      <Badge type="icon" icon={<User />} />
      <Badge type="icon" icon={<Plus />} />
      <Badge type="icon" icon={<Verified />} />
      <Badge type="icon" icon={<Radar />} />
      <Badge type="icon" icon={<Window />} />
      <Badge type="icon" icon={<AspectRatio />} />
      <Badge type="icon" icon={<Check />} />
    </>
  )
}
