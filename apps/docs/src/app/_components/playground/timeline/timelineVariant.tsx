import { Timeline, TimelineProps, Heading, Text, TimelineItem } from '@pillar-ui/core'
import React from 'react'

const items = Array.from({ length: 3 })

const TimelineBase = (props: Omit<TimelineProps, 'children'>) => {
  return (
    <Timeline>
      {items.map((_, index) => (
        <TimelineItem content={index + 1} {...props} key={index}>
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

export const TimelineVariant = () => {
  return (
    <>
      <TimelineBase color="i" variant="shadow" />
      <TimelineBase color="i" variant="solid" />
      <TimelineBase color="i" variant="mixed" />
      <TimelineBase color="i" variant="soft" />
      <TimelineBase color="i" variant="outline" />
    </>
  )
}
