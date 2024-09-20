import { Avatar } from '@pillar-ui/core'
import { User, Users } from '@pillar-ui/icons'

export const AvatarIcon = () => {
  return (
    <>
      <Avatar fallback={<User />} title="Success!" />
      <Avatar fallback={<Users />} title="Success!" />
    </>
  )
}
