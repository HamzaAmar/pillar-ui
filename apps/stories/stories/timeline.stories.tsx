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
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem {...props}>
        <Heading size="3">Hello</Heading>
        <Text size="3">
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
    <Flex gap="4">
      <Timeline color="b">
        <Items />
      </Timeline>

      <Timeline color="p">
        <Items />
      </Timeline>
      <Timeline color="su">
        <Items />
      </Timeline>
      <Timeline color="d">
        <Items />
      </Timeline>
      <Timeline color="w">
        <Items />
      </Timeline>
      <Timeline color="se">
        <Items />
      </Timeline>
    </Flex>
  )
}

export const TimelineCorner = () => {
  return (
    <Grid grid="1fr 1fr 1fr" className="md_grid-two sm_grid-one" gap="6">
      <Timeline corner="0">
        <Items />
      </Timeline>
      <Timeline corner="3">
        <Items />
      </Timeline>
      <Timeline>
        <Items />
      </Timeline>
      <Timeline corner="3">
        <Items />
      </Timeline>
      <Timeline corner="4">
        <Items />
      </Timeline>
      <Timeline corner="5">
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
    <Flex gap="4">
      <Timeline size="2">
        <Items />
      </Timeline>
      <Timeline size="3">
        <Items />
      </Timeline>
      <Timeline size="4">
        <Items />
      </Timeline>
      <Timeline size="5">
        <Items />
      </Timeline>
      <Timeline size="6">
        <Items />
      </Timeline>
      <Timeline size="7">
        <Items />
      </Timeline>
      <Timeline size="8">
        <Items />
      </Timeline>
    </Flex>
  )
}

export const TimelineVariant = () => {
  return (
    <Flex gap="4">
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
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem variant="dotted">
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading size="3">Hello</Heading>
          <Text size="3">
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
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem
        bullet={<Avatar variant="image" size="3" image="https://picsum.photos/id/152/40/40" title="hello" />}
      >
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem>
        <Heading size="3">Hello</Heading>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </TimelineItem>
      <TimelineItem>
        <Heading size="3">Hello</Heading>
        <Text size="3">
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
    color: 'p',
  },
}
