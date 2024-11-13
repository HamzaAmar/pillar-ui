import { Avatar, AvatarGroup } from '@pillar-ui/core'

export function AvatarGroupAnimation() {
  return (
    <>
      <AvatarGroup animate="jump-y">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup animate="jump-x">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup animate="zoom">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
    </>
  )
}
