import { Badge } from '@pillar-ui/core'
import { Check, Eye, Plus, Radar, User, Verified, Window, AspectRatio } from '@pillar-ui/icons'

export const BadgeIcon = () => {
  return (
    <>
      <Badge type="icon" icon={<Check />} color="dan" />
      <Badge type="icon" icon={<Eye />} color="suc" />
      <Badge type="icon" icon={<User />} color="war" />
      <Badge type="icon" icon={<Plus />} color="pri" />
      <Badge type="icon" icon={<Verified />} color="dan" />
      <Badge type="icon" icon={<Radar />} color="sec" />
      <Badge type="icon" icon={<Window />} color="pri" />
      <Badge type="icon" icon={<AspectRatio />} color="sec" />
      <Badge type="icon" icon={<Check />} color="bg" />
    </>
  )
}
