import { Timeline, TimelineProps, Heading, Text, TimelineItem } from '@pillar-ui/core'
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

export const TimelineCorner = () => {
  return (
    <>
      <TimelineBase corner="0" />
      <TimelineBase corner="1" />
      <TimelineBase corner="2" />
      <TimelineBase corner="3" />
      <TimelineBase corner="4" />
      <TimelineBase corner="5" />
      <TimelineBase corner="full" />
    </>
  )
}
