import React from 'react'
import { Cross } from '@pillar/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Avatar, Flex, Grid, Heading, Text, Timeline } from '@pillar/core'
import type { TimelineItemProps } from '@pillar/core'

export default {
  title: 'Components/Timeline',
  component: Timeline,
} as ComponentMeta<typeof Timeline>

const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />

const Items = (props: Omit<TimelineItemProps, 'children'>) => {
  return (
    <>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item {...props}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
    </>
  )
}

export const TimelineColor = () => {
  return (
    <Flex gap="sm">
      <Timeline color="surface">
        <Items />
      </Timeline>

      <Timeline color="primary">
        <Items />
      </Timeline>
      <Timeline color="success">
        <Items />
      </Timeline>
      <Timeline color="danger">
        <Items />
      </Timeline>
      <Timeline color="warning">
        <Items />
      </Timeline>
      <Timeline color="purple">
        <Items />
      </Timeline>
    </Flex>
  )
}
export const TimelineCorner = () => {
  return (
    <Grid columns="1fr 1fr 1fr" className="md_grid-two sm_grid-one" gap="lg">
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
        <Timeline.Item variant="solid">
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item variant="dotted">
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </Timeline.Item>
        <Timeline.Item>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </Timeline.Item>
      </Timeline>
    </Flex>
  )
}

export const TimelineCustomBullet = () => {
  return (
    <Timeline>
      <Timeline.Item bullet={<Cross />}>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item
        bullet={<Avatar variant="image" size="xs" image="https://picsum.photos/id/152/40/40" title="hello" />}
      >
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
      <Timeline.Item>
        <Heading size="xs">Hello</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Timeline.Item>
    </Timeline>
  )
}

export const NormalTimeline = Template.bind({})

NormalTimeline.args = {
  color: 'primary',
}
