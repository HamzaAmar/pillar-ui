import { Timeline, Paper, TimelineProps, Heading, Text, TimelineItem } from '@pillar-ui/core'
import React from 'react'

const TimelineBase = (props: Omit<TimelineProps, 'children'>) => {
  return (
    <Timeline {...props}>
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

export const TimelineVariant = () => {
  return (
    <>
      <TimelineBase variant="solid" />
      <TimelineBase variant="dashed" />
      <TimelineBase variant="dotted" />
    </>
  )
}
