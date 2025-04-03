import { Avatar } from '@pillar-ui/core'
import { Users } from '@pillar-ui/icons'

export const AvatarFallback = () => {
  return (
    <>
      <Avatar fallback={<Users />} size="1" />
      <Avatar fallback="4K" size="2" />
      <Avatar fallback="HL" size="3" />
      <Avatar fallback={<Users />} size="4" />
      <Avatar />
      <Avatar fallback={12} size="6" />
      <Avatar fallback={<Users />} size="7" />
    </>
  )
}
