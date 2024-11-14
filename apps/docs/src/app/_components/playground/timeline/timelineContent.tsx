import { Timeline, TimelineProps, Heading, Text, Avatar, TimelineItem, Alert, Paper } from '@pillar-ui/core'
import { Cross, Pencil, UserInfo, X } from '@pillar-ui/icons'
import React from 'react'

const Item = (props: any) => {
  return (
    <TimelineItem className="Sf-3" {...props}>
      <Paper flow="4">
        <Heading size="3">Nice to Meet You</Heading>
        <Alert
          title="helllo world"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad. Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil, quae."
        />
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam cumque voluptatem magnam ad.
          Aspernatur explicabo a, est similique sed debitis eveniet alias repellendus doloremque nobis nisi odit! Nihil,
          quae.
        </Text>
      </Paper>
    </TimelineItem>
  )
}

export const TimelineContent = () => {
  return (
    <>
      <Timeline>
        <Item content="1" />
        <Item content="2" />
        <Item content="3" />
      </Timeline>

      <Timeline>
        <Item content="A" />
        <Item content="B" />
        <Item content="C" />
      </Timeline>
      <Timeline>
        <Item content={<X />} />
        <Item content={<Pencil />} />
        <Item content={<UserInfo />} />
      </Timeline>
    </>
  )
}
