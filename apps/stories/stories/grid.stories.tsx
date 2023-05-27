import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Grid, Paper, Flex } from '@pillar/core'

export default {
  title: 'Components/Grid',
  component: Grid,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Grid>

const Box = (props: any) => {
  return <Paper as={Flex} justify="center" items="center" background="slate-6" corner="sm" {...props} />
}

export const EqualColumns = () => {
  return (
    <Grid gap="xs" columns="repeat(12, 1fr)">
      {Array.from({ length: 144 }, (_, index) => (
        <div
          style={{
            background: `${index % 2 === 0 ? 'var(--indigo-8)' : 'var(--indigo-9)'}`,
            borderRadius: '.375rem',
          }}
        ></div>
      ))}
    </Grid>
  )
}

export const ResponsiveColumns = () => {
  return (
    <Grid gap="xs" columns="repeat(4, 1fr)">
      {Array.from({ length: 24 }, () => (
        <div style={{ background: 'var(--indigo-9)', minHeight: '5rem' }} />
      ))}
    </Grid>
  )
}

export const SpanningColumns = () => {
  return (
    <Grid gap="sm" columns="200px 1fr 1fr" rows="1fr 1fr">
      <Grid.Item style={{ minHeight: '10rem', background: 'var(--indigo-8)' }} row="span 2">
        Nice to Meet You
      </Grid.Item>
      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }}>Hello</Grid.Item>

      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }}>Hello</Grid.Item>
      <Grid.Item style={{ height: '10rem', background: 'var(--indigo-8)' }} column="span 2">
        Hello
      </Grid.Item>
    </Grid>
  )
}

export const ComplexGridOne = () => (
  <Grid columns="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="sm">
    <Grid.Item column="1/4" style={{ background: 'var(--slate-8)' }}>
      Header
    </Grid.Item>
    <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
      sidebar
    </Grid.Item>
    <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
      main
    </Grid.Item>
    <Grid.Item column="span 1" style={{ background: 'var(--slate-8)' }}>
      sidebar
    </Grid.Item>
    <Grid.Item column="span 3" style={{ background: 'var(--slate-8)' }}>
      Footer
    </Grid.Item>
  </Grid>
)

export const ComplexGridTwo = () => (
  <Grid columns="100px 1fr 100px" rows="2rem minmax(6rem, 1fr) 2rem" gap="sm">
    <Grid.Item column="2/4" style={{ background: 'var(--slate-8)' }}>
      Header
    </Grid.Item>
    <Grid.Item column="span 1" row="1 / span 3" style={{ background: 'var(--slate-8)' }}>
      sidebar
    </Grid.Item>
    <Grid.Item column="2 / 3" style={{ background: 'var(--slate-8)' }}>
      main
    </Grid.Item>
    <Grid.Item column="3 / 4" style={{ background: 'var(--slate-8)' }}>
      sidebar
    </Grid.Item>
    <Grid.Item column="2 / span 2" style={{ background: 'var(--slate-8)' }}>
      Footer
    </Grid.Item>
  </Grid>
)

export const GridColumns = () => {
  return (
    <Grid columns=".5fr 2fr auto 100px" gap="sm">
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
      <Box height="100px" />
    </Grid>
  )
}

export const GridRows = () => {
  return (
    <Grid style={{ height: '700px' }} columns="repeat(3, 1fr)" rows=".5fr 2fr 100px" gap="sm">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Grid>
  )
}

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const PlayGround = Template.bind({})
