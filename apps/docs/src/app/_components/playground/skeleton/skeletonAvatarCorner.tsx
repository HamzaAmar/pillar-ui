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
        <Avatar size="1" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="2" isLoading>
        <Avatar size="2" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="3" isLoading>
        <Avatar size="3" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="4" isLoading>
        <Avatar size="4" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="5" isLoading>
        <Avatar size="5" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="circle" isLoading>
        <Avatar size="7" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar corner="full" isLoading>
        <Avatar size="8" variant="image" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

//
