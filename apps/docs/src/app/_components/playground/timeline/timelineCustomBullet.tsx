import { Timeline, TimelineProps, Heading, Text, Avatar, TimelineItem } from '@pillar-ui/core'
import { Cross } from '@pillar-ui/icons'
import React from 'react'

export const TimelineCustomBullet = () => {
  return (
    <>
      <Timeline>
        <TimelineItem bullet={<Cross />}>
          <Heading gap="3">Hello</Heading>
          <Text gap="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem
          bullet={<Avatar variant="image" gap="3" image="https://picsum.photos/id/152/40/40" title="hello" />}
        >
          <Heading gap="3">Hello</Heading>
          <Text gap="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading gap="3">Hello</Heading>
          <Text gap="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
        <TimelineItem>
          <Heading gap="3">Hello</Heading>
          <Text gap="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
            Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit!
            Nihil, quae.
          </Text>
        </TimelineItem>
      </Timeline>
    </>
  )
}
