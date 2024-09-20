import { Avatar } from '@pillar-ui/core'

export const AvatarFallback = () => {
  return (
    <>
      <Avatar image="https://picsum.photos/id/120/100/100" />
      <Avatar image="/image/user.png" />
      <Avatar image="/image/user.svg" />
      <Avatar />
    </>
  )
}
