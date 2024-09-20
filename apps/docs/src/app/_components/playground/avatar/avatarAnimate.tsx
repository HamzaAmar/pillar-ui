import { Avatar } from '@pillar-ui/core'

export const AvatarAnimate = () => {
  return (
    <>
      <Avatar image="https://i.pravatar.cc/60?img=51" animate="zoom" title="Success!" />
      <Avatar image="https://i.pravatar.cc/60?img=41" animate="jump-x" title="Success!" />
      <Avatar image="https://i.pravatar.cc/60?img=31" animate="jump-y" title="Success!" />
    </>
  )
}
