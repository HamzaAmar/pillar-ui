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
      <SkeletonAvatar size="3" isLoading={loading}>
        <Avatar size="3" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="4" isLoading={loading}>
        <Avatar size="4" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="5" isLoading={loading}>
        <Avatar size="5" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="7" isLoading={loading}>
        <Avatar size="7" variant="image" title="Hello" />
      </SkeletonAvatar>
      <SkeletonAvatar size="8" isLoading={loading}>
        <Avatar size="8" variant="image" title="Hello" />
      </SkeletonAvatar>
    </Flex>
  )
}

export const SkeletonTextLines = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <SkeletonText size="3" isLoading={loading} lines={3}>
        <Text size="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="4" isLoading={loading} lines={3.5}>
        <Text size="4">hello world</Text>
      </SkeletonText>
      <SkeletonText size="5" isLoading={loading} lines={2.3}>
        <Text size="5">hello world</Text>
      </SkeletonText>
      <SkeletonText size="7" isLoading={loading} lines={3.3}>
        <Text size="7">hello world</Text>
      </SkeletonText>
      <SkeletonText size="8" isLoading={loading} lines={1.13}>
        <Text size="8">hello world</Text>
      </SkeletonText>
    </Flex>
  )
}

export const SkeletonTextSizes = () => {
  const loading = useLoading()
  return (
    <Grid cols={{ default: '1fr 1fr' }} gap="7">
      <SkeletonText size="1" isLoading={loading}>
        <Text size="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="2" isLoading={loading}>
        <Text size="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="3" isLoading={loading}>
        <Text size="3">hello world</Text>
      </SkeletonText>
      <SkeletonText size="4" isLoading={loading}>
        <Text size="4">hello world</Text>
      </SkeletonText>
      <SkeletonText size="5" isLoading={loading}>
        <Text size="5">hello world</Text>
      </SkeletonText>
      <SkeletonText size="6" isLoading={loading}>
        <Text size="5">hello world</Text>
      </SkeletonText>
      <SkeletonText size="7" isLoading={loading}>
        <Text size="7">hello world</Text>
      </SkeletonText>
      <SkeletonText size="8" isLoading={loading}>
        <Text size="8">hello world</Text>
      </SkeletonText>
      <SkeletonText size="9" isLoading={loading}>
        <Text size="8">hello world</Text>
      </SkeletonText>
    </Grid>
  )
}

export const Buttons = () => {
  const loading = useLoading()
  return (
    <Flex items="center" gap="5">
      <SkeletonButton size="3" isLoading={loading}>
        <Button size="3">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="4" isLoading={loading}>
        <Button size="4">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="5" isLoading={loading}>
        <Button size="5">hello world</Button>
      </SkeletonButton>
      <SkeletonButton size="7" isLoading={loading}>
        <Button size="7">hello world</Button>
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
