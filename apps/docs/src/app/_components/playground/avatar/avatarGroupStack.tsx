import { Avatar, AvatarGroup } from '@pillar-ui/core'

export const AvatarGroupStack = () => {
  return (
    <>
      <AvatarGroup layout="stack">
        <Avatar image="https://i.pravatar.cc/120?img=11" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=12" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=18" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=19" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=20" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=21" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=22" title="Hello" />
      </AvatarGroup>
      <AvatarGroup layout="grid">
        <Avatar image="https://i.pravatar.cc/120?img=31" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=32" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=38" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=39" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=40" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=41" title="Hello" />
        <Avatar image="https://i.pravatar.cc/120?img=42" title="Hello" />
      </AvatarGroup>
    </>
  )
}
