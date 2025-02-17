import { Avatar, Flex } from '@pillar-ui/core'

const shared = {
  src: 'https://i.pravatar.cc/60?img=12',
  title: 'Hello',
}
export const AvatarVariant = () => {
  return (
    <>
      <Flex gap="2">
        <Avatar variant="solid" title="Hello" />
        <Avatar variant="soft" title="Hello" />
        <Avatar variant="outline" title="Hello" />
        <Avatar variant="dashed" title="Hello" />
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
