import { Timeline, TimelineProps, Heading, Text, TimelineItem, Paper } from '@pillar-ui/core'
import React from 'react'

const items = Array.from({ length: 3 })

const TimelineBase = (props: Omit<TimelineProps, 'children'>) => {
  return (
    <Timeline {...props}>
      {items.map((_, index) => (
        <TimelineItem content={index + 1} {...props} key={index}>
          <Paper flow="2">
            <Heading size="5">Hello</Heading>
            <Text as="time" color="b" low size="3">
              13 May 2021
            </Text>
            <Text size="3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
              Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
              Nihil, quae.
            </Text>
          </Paper>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
export const TimelineColor = () => {
  return (
    <>
      <TimelineBase color="b" />
      <TimelineBase color="se" />
      <TimelineBase color="p" />
      <TimelineBase color="su" />
      <TimelineBase color="d" />
      <TimelineBase color="w" />
      <TimelineBase color="i" />
    </>
  )
}
