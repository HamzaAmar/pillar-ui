/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Button,
  Flex,
  Skeleton,
  Text,
  Grid,
  SkeletonText,
  SkeletonButton,
  SkeletonAvatar,
} from '@pillar-ui/core'
import { useBooleanState } from '@pillar-ui/hooks'
import { Meta } from '@storybook/react'
import React, { useEffect, useRef } from 'react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
}

export default meta

function useLoading() {
  const { value: loading, setFalse } = useBooleanState(true)
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const timerID = setTimeout(setFalse, 2000)

    timerRef.current = timerID

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [setFalse])

  return loading
}

export const Avatars = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <SkeletonAvatar gap="3" isLoading={loading}>
        <Avatar gap="3" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="sm" isLoading={loading}>
        <Avatar size="sm" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar gap="5" isLoading={loading}>
        <Avatar gap="5" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar gap="7" isLoading={loading}>
        <Avatar gap="7" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar gap="8" isLoading={loading}>
        <Avatar gap="8" variant="image" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

export const SkeletonTextLines = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <SkeletonText gap="3" isLoading={loading} lines={3}>
        <Text gap="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="sm" isLoading={loading} lines={3.5}>
        <Text size="sm">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="5" isLoading={loading} lines={2.3}>
        <Text gap="5">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="7" isLoading={loading} lines={3.3}>
        <Text gap="7">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="8" isLoading={loading} lines={1.13}>
        <Text gap="8">hello world</Text>
      </SkeletonText>
    </Flex>
  )
}

export const SkeletonTextSizes = () => {
  const loading = useLoading()
  return (
    <Grid grid="1fr 1fr" gap="7">
      <SkeletonText size="3xs" isLoading={loading}>
        <Text gap="3">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="2" isLoading={loading}>
        <Text gap="3">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="3" isLoading={loading}>
        <Text gap="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="sm" isLoading={loading}>
        <Text size="sm">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="5" isLoading={loading}>
        <Text gap="5">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="6" isLoading={loading}>
        <Text gap="5">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="7" isLoading={loading}>
        <Text gap="7">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="8" isLoading={loading}>
        <Text gap="8">hello world</Text>
      </SkeletonText>
      <SkeletonText gap="9" isLoading={loading}>
        <Text gap="8">hello world</Text>
      </SkeletonText>
    </Grid>
  )
}

export const Buttons = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <SkeletonButton gap="3" isLoading={loading}>
        <Button gap="3">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="sm" isLoading={loading}>
        <Button size="sm">hello world</Button>
      </SkeletonButton>
      <SkeletonButton gap="5" isLoading={loading}>
        <Button gap="5">hello world</Button>
      </SkeletonButton>
      <SkeletonButton gap="7" isLoading={loading}>
        <Button gap="7">hello world</Button>
      </SkeletonButton>
    </Flex>
  )
}

export const SkeletonBox = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <Skeleton height="300px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/300" alt="" />
      </Skeleton>
      <Skeleton height="200px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/200" alt="" />
      </Skeleton>
      <Skeleton height="150px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/150" alt="" />
      </Skeleton>
      <Skeleton height="450px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/450" alt="" />
      </Skeleton>
    </Flex>
  )
}
