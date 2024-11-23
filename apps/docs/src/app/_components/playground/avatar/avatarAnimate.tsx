import { Avatar } from '@pillar-ui/core'

const shared = {
  src: 'https://i.pravatar.cc/60?img=13',
  title: 'Hello',
}

export const AvatarAnimate = () => {
  return (
    <>
      <Avatar {...shared} animate="zoom" />
      <Avatar {...shared} animate="jump-x" />
      <Avatar {...shared} animate="jump-y" />
      <Avatar {...shared} animate="jump--y" />
      <Avatar {...shared} animate="jump--x" />
      <Avatar {...shared} animate="zoom-in" />
    </>
  )
}
