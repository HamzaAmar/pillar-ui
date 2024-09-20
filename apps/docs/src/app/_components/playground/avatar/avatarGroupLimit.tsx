import { Avatar, AvatarGroup } from '@pillar-ui/core'

export const AvatarGroupLimit = () => {
  return (
    <>
      <AvatarGroup limit={5}>
        <Avatar image="https://i.pravatar.cc/120?img=11" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=12" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=18" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=19" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=20" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=21" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=22" title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={5}>
        <Avatar image="https://i.pravatar.cc/120?img=23" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=24" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=25" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=26" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=27" title="Hello" />
      </AvatarGroup>
      <AvatarGroup limit={5}>
        <Avatar image="https://i.pravatar.cc/120?img=23" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=24" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=25" title="Hello" />
      </AvatarGroup>
    </>
  )
}
