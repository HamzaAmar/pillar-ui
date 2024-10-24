import { Avatar, AvatarGroup } from '@pillar-ui/core'

const Avatars = ({ start = 1, count = 8 }: { start?: number; count?: number }) => {
  return Array.from({ length: count }, (_, i) => (
    <Avatar image={`https://i.pravatar.cc/120?img=${i + start}`} title="Hello" />
  ))
}

export const AvatarGroupStack = () => {
  return (
    <>
      <AvatarGroup layout="stack">
        <Avatars />
      </AvatarGroup>
      <AvatarGroup layout="grid">
        <Avatars start={20} />
      </AvatarGroup>
    </>
  )
}
