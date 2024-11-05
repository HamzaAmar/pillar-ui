'use client'

import { Avatar, Flex, SkeletonAvatar } from '@pillar-ui/core'
import { Meta } from '@storybook/react'

export const SkeletonAvatarSize = () => {
  return (
    <Flex items="center" gap="5">
      <SkeletonAvatar size="1" isLoading={true}>
        <Avatar size="1" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="2" isLoading={true}>
        <Avatar size="2" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="3" isLoading={true}>
        <Avatar size="3" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="4" isLoading={true}>
        <Avatar size="4" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="5" isLoading={true}>
        <Avatar size="5" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="7" isLoading={true}>
        <Avatar size="7" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="8" isLoading={true}>
        <Avatar size="8" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="9" isLoading={true}>
        <Avatar size="9" variant="image" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

//
