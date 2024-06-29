import { Timeline, Paper, TimelineProps, Heading, Text, Avatar, TimelineItem } from '~/component/core/pillar'
import { Cross } from '@pillar-ui/icons'
import React from 'react'

const TimelineBase = (props: Omit<TimelineProps, 'children'>) => {
  return (
    <Timeline {...props}>
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

export const TimelinePlayGround = () => {
  return (
    <Paper border flow="sm" p="sm" background="surface-3" corner="sm">
      Hello
    </Paper>
  )
}

export const TimelineSizes = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <TimelineBase size="2xs" />
      <TimelineBase size="xs" />
      <TimelineBase size="sm" />
      <TimelineBase size="md" />
      <TimelineBase size="lg" />
      <TimelineBase size="xl" />
      <TimelineBase size="2xl" />
    </Paper>
  )
}

export const TimelineVariants = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <TimelineBase variant="solid" />
      <TimelineBase variant="dashed" />
      <TimelineBase variant="dotted" />
    </Paper>
  )
}

export const TimelineCorners = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <TimelineBase corner="sharp" />
      <TimelineBase corner="sm" />
      <TimelineBase corner="md" />
      <TimelineBase corner="lg" />
      <TimelineBase corner="xl" />
      <TimelineBase corner="full" />
    </Paper>
  )
}

export const TimelineColors = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <TimelineBase color="surface" />
      <TimelineBase color="secondary" />
      <TimelineBase color="primary" />
      <TimelineBase color="success" />
      <TimelineBase color="danger" />
      <TimelineBase color="warning" />
    </Paper>
  )
}

export const TimelineCustomBullet = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Timeline>
        <TimelineItem bullet={<Cross />}>
          <Heading size="xs">Hello</Heading>
          <Text size="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem
          bullet={<Avatar variant="image" size="xs" image="https://picsum.photos/id/152/40/40" title="hello" />}
        >
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
    </Paper>
  )
}
