import { Avatar, Flex, Skeleton, SkeletonAvatar } from '@pillar-ui/core'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
}

export default meta

export const SkeletonAvatarCorner = () => {
  return (
    <Flex items="center" gap="5">
      <SkeletonAvatar corner="1" isLoading>
        <Avatar size="1" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="2" isLoading>
        <Avatar size="2" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="3" isLoading>
        <Avatar size="3" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="4" isLoading>
        <Avatar size="4" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="5" isLoading>
        <Avatar size="5" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="circle" isLoading>
        <Avatar size="7" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="full" isLoading>
        <Avatar size="8" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

//
