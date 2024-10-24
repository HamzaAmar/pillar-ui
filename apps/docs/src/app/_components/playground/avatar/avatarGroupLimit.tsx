import { Avatar, AvatarGroup } from '@pillar-ui/core'

const Avatars = ({ start = 1, count = 8 }: { start?: number; count?: number }) => {
  return Array.from({ length: count }, (_, i) => (
    <Avatar image={`https://i.pravatar.cc/120?img=${i + start}`} title="Hello" />
  ))
}

export const AvatarGroupLimit = () => {
  return (
    <>
      <AvatarGroup limit={5}>
        <Avatars />
      </AvatarGroup>
      <AvatarGroup limit={5}>
        <Avatars start={8} count={5} />
      </AvatarGroup>
      <AvatarGroup limit={5}>
        <Avatars start={13} count={3} />
      </AvatarGroup>
    </>
  )
}
