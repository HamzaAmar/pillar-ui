import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Grid, Paper, Flex } from '@pillar-ui/core'

export default {
  title: 'Components/Grid',
  component: Grid,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Grid>

const Box = (props: any) => {
  return <Paper as={Flex} justify="center" items="center" background="surface-6" corner="sm" {...props} />
}

export const EqualColumns = () => {
  return (
    <Grid gap="xs" grid="repeat(20, 1fr)">
      {Array.from({ length: 288 }, (_, index) => (
        <Box style={{ height: '30px' }} key={index}>
          {index}
        </Box>
      ))}
    </Grid>
  )
}

export const ResponsiveColumns = () => {
  return (
    <Grid gap="xs" grid="repeat(12, 1fr)" lg="repeat(6, 1fr)" md="repeat(4, 1fr)" sm="1fr 1fr" xs="1fr">
      {Array.from({ length: 64 }, () => (
        <Box height="60px" />
      ))}
    </Grid>
  )
}

export const ResponsiveColumn = () => {
  return (
    <Grid gap="xs" grid="repeat(4, 1fr) x repeat(6, 1fr)" sm="1fr x repeat(4, 1fr)">
      <Grid.Item as={Box} placement="1/5" sm="1/2" height="60px" />
      <Grid.Item as={Box} placement="span 2 x span 4" sm="1/2 x 2/3" />
      <Grid.Item as={Box} placement="span 2 x span 4" sm="1/2 x 3/4" />
      <Grid.Item as={Box} placement="span 4" sm="1/2" height="60px" />
    </Grid>
  )
}

export const SpanningColumns = () => {
  return (
    <Grid gap="sm" grid="200px 1fr 1fr x 1fr 1fr">
      <Grid.Item as={Box} height="10rem" row="span 2">
        Nice to Meet You
      </Grid.Item>
      <Grid.Item as={Box} height="10rem">
        Hello
      </Grid.Item>

      <Grid.Item as={Box} height="10rem">
        Hello
      </Grid.Item>
      <Grid.Item as={Box} height="10rem" column="span 2">
        Hello
      </Grid.Item>
    </Grid>
  )
}

export const ComplexGridOne = () => (
  <Grid style={{ height: '95vh' }} grid="150px 1fr 150px x 2rem minmax(6rem, 1fr) 2rem" gap="sm">
    <Grid.Item as={Box} placement="1 / -1">
      Header
    </Grid.Item>
    <Grid.Item as={Box} placement="span 1">
      sidebar
    </Grid.Item>
    <Grid.Item as={Box} placement="span 1">
      main
    </Grid.Item>
    <Grid.Item lg="lg_hide" as={Box} placement="span 1">
      sidebar
    </Grid.Item>
    <Grid.Item as={Box} placement="1 / -1">
      Footer
    </Grid.Item>
  </Grid>
)

export const ComplexGridTwo = () => (
  <Grid style={{ height: '95vh' }} grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="sm">
    <Grid.Item as={Box} placement="2/4">
      Header
    </Grid.Item>
    <Grid.Item as={Box} placement="span 1 x 1 / span 3">
      sidebar
    </Grid.Item>
    <Grid.Item as={Box} placement="2 / 3">
      main
    </Grid.Item>
    <Grid.Item as={Box} placement="3 / 4">
      sidebar
    </Grid.Item>
    <Grid.Item as={Box} placement="2 / span 2">
      Footer
    </Grid.Item>
  </Grid>
)

export const GridColumns = () => {
  return (
    <Grid grid=".5fr 2fr auto 100px" gap="sm">
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
    <Grid style={{ height: '700px' }} grid="repeat(3, 1fr) x .5fr 2fr 100px" gap="sm">
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
