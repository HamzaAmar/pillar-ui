import { Timeline, Paper, TimelineProps, Heading, Text, TimelineItem } from '@pillar-ui/core'
import React from 'react'

const items = Array.from({ length: 3 })

const TimelineBase = ({ size }: Omit<TimelineProps, 'children'>) => {
  return (
    <Timeline size={size}>
      {items.map((_, index) => (
        <TimelineItem content={index + 1} key={index}>
          <Heading size="3">Hello</Heading>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
export const TimelineSize = () => {
  return (
    <>
      <TimelineBase size="1" />
      <TimelineBase size="2" />
      <TimelineBase size="3" />
      <TimelineBase size="4" />
      <TimelineBase size="5" />
      <TimelineBase size="6" />
      <TimelineBase size="7" />
      <TimelineBase size="8" />
      <TimelineBase size="9" />
    </>
  )
}
