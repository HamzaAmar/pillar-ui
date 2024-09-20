import { Timeline, Paper, TimelineProps, Heading, Text, TimelineItem } from '@pillar-ui/core'
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
export const TimelineSize = () => {
  return (
    <>
      <TimelineBase size="2xs" />
      <TimelineBase size="xs" />
      <TimelineBase size="sm" />
      <TimelineBase size="md" />
      <TimelineBase size="lg" />
      <TimelineBase size="xl" />
      <TimelineBase size="2xl" />
    </>
  )
}
