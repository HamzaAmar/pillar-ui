import React from 'react'
import { Cross } from '@pillar-ui/icons'
import { Meta } from '@storybook/react'

import { Avatar, Flex, Grid, Heading, Text, Timeline, TimelineItem } from '@pillar-ui/core'
import type { TimelineItemProps } from '@pillar-ui/core'

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
} as Meta<typeof Timeline>

export default meta

const Items = (props: Omit<TimelineItemProps, 'children'>) => {
  return (
    <>
      <TimelineItem {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
    </>
  )
}

export const TimelineColor = () => {
  return (
    <Flex gap="sm">
      <Timeline color="bg">
        <Items />
      </Timeline>

      <Timeline color="pri">
        <Items />
      </Timeline>
      <Timeline color="suc">
        <Items />
      </Timeline>
      <Timeline color="dan">
        <Items />
      </Timeline>
      <Timeline color="war">
        <Items />
      </Timeline>
      <Timeline color="sec">
        <Items />
      </Timeline>
    </Flex>
  )
}

export const TimelineCorner = () => {
  return (
    <Grid grid="1fr 1fr 1fr" className="md_grid-two sm_grid-one" gap="lg">
      <Timeline corner="sharp">
        <Items />
      </Timeline>
      <Timeline corner="xs">
        <Items />
      </Timeline>
      <Timeline>
        <Items />
      </Timeline>
      <Timeline corner="md">
        <Items />
      </Timeline>
      <Timeline corner="lg">
        <Items />
      </Timeline>
      <Timeline corner="xl">
        <Items />
      </Timeline>
      <Timeline corner="full">
        <Items />
      </Timeline>
    </Grid>
  )
}

export const TimelineSize = () => {
  return (
    <Flex gap="sm">
      <Timeline size="2xs">
        <Items />
      </Timeline>
      <Timeline size="xs">
        <Items />
      </Timeline>
      <Timeline size="sm">
        <Items />
      </Timeline>
      <Timeline size="md">
        <Items />
      </Timeline>
      <Timeline size="lg">
        <Items />
      </Timeline>
      <Timeline size="xl">
        <Items />
      </Timeline>
      <Timeline size="2xl">
        <Items />
      </Timeline>
    </Flex>
  )
}

export const TimelineVariant = () => {
  return (
    <Flex gap="sm">
      <Timeline variant="solid">
        <Items />
      </Timeline>
      <Timeline variant="dotted">
        <Items />
      </Timeline>
      <Timeline variant="dashed">
        <Items />
      </Timeline>
      <Timeline variant="dashed">
        <TimelineItem variant="solid">
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem variant="dotted">
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
      </Timeline>
    </Flex>
  )
}

export const TimelineCustomBullet = () => {
  return (
    <Timeline>
      <TimelineItem bullet={<Cross />}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem
        bullet={<Avatar variant="image" size="xs" image="https://picsum.photos/id/152/40/40" title="hello" />}
      >
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
    </Timeline>
  )
}

export const NormalTimeline = {
  args: {
    color: 'pri',
  },
}
