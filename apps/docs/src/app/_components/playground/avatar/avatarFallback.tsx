import { Avatar } from '@pillar-ui/core'
import { Users } from '@pillar-ui/icons'

export const AvatarFallback = () => {
  return (
    <>
      <Avatar />
      <Avatar fallback="HL" />
      <Avatar fallback={<Users />} />
      <Avatar fallback="4K" />
    </>
  )
}
