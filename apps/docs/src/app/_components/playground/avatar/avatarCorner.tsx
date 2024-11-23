import { Avatar } from '@pillar-ui/core'

const shared = {
  src: 'https://i.pravatar.cc/120?img=11',
  title: 'Hello',
}
export const AvatarCorner = () => {
  return (
    <>
      <Avatar corner="0" {...shared} />
      <Avatar corner="1" {...shared} />
      <Avatar corner="2" {...shared} />
      <Avatar corner="3" {...shared} />
      <Avatar corner="4" {...shared} />
      <Avatar corner="5" {...shared} />
      <Avatar corner="full" {...shared} />
      <Avatar corner="b1" {...shared} />
      <Avatar corner="b2" {...shared} />
      <Avatar corner="b3" {...shared} />
      <Avatar corner="b4" {...shared} />
      <Avatar corner="b5" {...shared} />
      <Avatar corner="h1" {...shared} />
      <Avatar corner="h2" {...shared} />
      <Avatar corner="h3" {...shared} />
      <Avatar corner="h4" {...shared} />
      <Avatar corner="h5" {...shared} />
      <Avatar corner="h6" {...shared} />
    </>
  )
}
