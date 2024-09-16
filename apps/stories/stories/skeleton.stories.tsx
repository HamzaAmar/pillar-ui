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
    <Flex items="center" gap="md">
      <SkeletonAvatar size="xs" isLoading={loading}>
        <Avatar size="xs" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="sm" isLoading={loading}>
        <Avatar size="sm" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="md" isLoading={loading}>
        <Avatar size="md" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="xl" isLoading={loading}>
        <Avatar size="xl" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="2xl" isLoading={loading}>
        <Avatar size="2xl" variant="image" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

export const SkeletonTextLines = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="md">
      <SkeletonText size="xs" isLoading={loading} lines={3}>
        <Text size="xs">hello world</Text>
      </SkeletonText>
      <SkeletonText size="sm" isLoading={loading} lines={3.5}>
        <Text size="sm">hello world</Text>
      </SkeletonText>
      <SkeletonText size="md" isLoading={loading} lines={2.3}>
        <Text size="md">hello world</Text>
      </SkeletonText>
      <SkeletonText size="xl" isLoading={loading} lines={3.3}>
        <Text size="xl">hello world</Text>
      </SkeletonText>
      <SkeletonText size="2xl" isLoading={loading} lines={1.13}>
        <Text size="2xl">hello world</Text>
      </SkeletonText>
    </Flex>
  )
}

export const SkeletonTextSizes = () => {
  const loading = useLoading()
  return (
    <Grid grid="1fr 1fr" gap="xl">
      <SkeletonText size="3xs" isLoading={loading}>
        <Text size="xs">hello world</Text>
      </SkeletonText>
      <SkeletonText size="2xs" isLoading={loading}>
        <Text size="xs">hello world</Text>
      </SkeletonText>
      <SkeletonText size="xs" isLoading={loading}>
        <Text size="xs">hello world</Text>
      </SkeletonText>
      <SkeletonText size="sm" isLoading={loading}>
        <Text size="sm">hello world</Text>
      </SkeletonText>
      <SkeletonText size="md" isLoading={loading}>
        <Text size="md">hello world</Text>
      </SkeletonText>
      <SkeletonText size="lg" isLoading={loading}>
        <Text size="md">hello world</Text>
      </SkeletonText>
      <SkeletonText size="xl" isLoading={loading}>
        <Text size="xl">hello world</Text>
      </SkeletonText>
      <SkeletonText size="2xl" isLoading={loading}>
        <Text size="2xl">hello world</Text>
      </SkeletonText>
      <SkeletonText size="3xl" isLoading={loading}>
        <Text size="2xl">hello world</Text>
      </SkeletonText>
    </Grid>
  )
}

export const Buttons = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="md">
      <SkeletonButton size="xs" isLoading={loading}>
        <Button size="xs">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="sm" isLoading={loading}>
        <Button size="sm">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="md" isLoading={loading}>
        <Button size="md">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="xl" isLoading={loading}>
        <Button size="xl">hello world</Button>
      </SkeletonButton>
    </Flex>
  )
}

export const SkeletonBox = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="md">
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
