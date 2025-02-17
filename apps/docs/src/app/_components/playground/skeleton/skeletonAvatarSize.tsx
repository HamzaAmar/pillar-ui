'use client'

import { Avatar, Flex, SkeletonAvatar } from '@pillar-ui/core'

export const SkeletonAvatarSize = () => {
  return (
    <Flex items="center" gap="5">
      <SkeletonAvatar size="1" isLoading={true}>
        <Avatar size="1" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="2" isLoading={true}>
        <Avatar size="2" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="3" isLoading={true}>
        <Avatar size="3" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="4" isLoading={true}>
        <Avatar size="4" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="5" isLoading={true}>
        <Avatar size="5" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="7" isLoading={true}>
        <Avatar size="7" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="8" isLoading={true}>
        <Avatar size="8" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="9" isLoading={true}>
        <Avatar size="9" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

//
