import { Avatar } from '@pillar-ui/core'

export const AvatarFallback = () => {
  return (
    <>
      <Avatar src="https://picsum.photos/id/120/100/100" />
      <Avatar src="/image/user.png" />
      <Avatar src="/image/user.svg" />
      <Avatar />
    </>
  )
}
