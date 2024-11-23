import { Avatar, Flex } from '@pillar-ui/core'

const shared = {
  src: 'https://i.pravatar.cc/60?img=12',
  title: 'Hello',
}
export const AvatarVariant = () => {
  return (
    <>
      <Flex gap="2">
        <Avatar variant="solid" {...shared} />
        <Avatar variant="soft" {...shared} />
        <Avatar variant="outline" {...shared} />
        <Avatar variant="dashed" {...shared} />
      </Flex>
      <Flex gap="2">
        <Avatar variant="solid" {...shared} corner="b2" />
        <Avatar variant="soft" {...shared} corner="b2" />
        <Avatar variant="outline" {...shared} corner="b2" />
        <Avatar variant="dashed" {...shared} corner="b2" />
      </Flex>
    </>
  )
}
