import { Avatar, AvatarGroup } from '@pillar-ui/core'

export function AvatarGroupContext() {
  return (
    <>
      <AvatarGroup variant="outline">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup size="3">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup corner="0">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
      <AvatarGroup color="d">
        <Avatar title="Success!" />
        <Avatar title="Success!" />
        <Avatar title="Success!" />
      </AvatarGroup>
    </>
  )
}
