import React from 'react'
import { Meta } from '@storybook/react'

import { Grid, Paper, Flex, GridItem } from '@pillar-ui/core'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  args: {
    children: 'Hello world',
  },
}

export default meta

const Box = (props: any) => {
  return <Paper as={Flex} justify="center" items="center" background="b-6" corner="2" {...props} />
}

export const EqualColumns = () => {
  return (
    <Grid gap="3" grid="repeat(20, 1fr)">
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
    <Grid gap="3" grid="repeat(12, 1fr)" lg="repeat(6, 1fr)" md="repeat(4, 1fr)" sm="1fr 1fr" xs="1fr">
      {Array.from({ length: 64 }, () => (
        <Box height="60px" />
      ))}
    </Grid>
  )
}

export const ResponsiveColumn = () => {
  return (
    <Grid gap="3" grid="repeat(4, 1fr) x repeat(6, 1fr)" sm="1fr x repeat(4, 1fr)">
      <GridItem as={Box} placement="1/5" sm="1/2" height="48px">
        Hello
      </GridItem>
      <GridItem as={Box} placement="span 2 x span 4" sm="1/2 x 2/3">
        Hello
      </GridItem>
      <GridItem as={Box} placement="span 2 x span 4" sm="1/2 x 3/4">
        Hello
      </GridItem>
      <GridItem as={Box} placement="span 4" sm="1/2" height="48px">
        Hello
      </GridItem>
    </Grid>
  )
}

export const ComplexGridOne = () => (
  <Grid style={{ height: '95vh' }} grid="150px 1fr 150px x 2rem minmax(6rem, 1fr) 2rem" gap="4">
    <GridItem as={Box} placement="1 / -1">
      Header
    </GridItem>
    <GridItem as={Box} placement="span 1">
      sidebar
    </GridItem>
    <GridItem as={Box} placement="span 1">
      main
    </GridItem>
    <GridItem lg="lg_hide" as={Box} placement="span 1">
      sidebar
    </GridItem>
    <GridItem as={Box} placement="1 / -1">
      Footer
    </GridItem>
  </Grid>
)

export const ComplexGridTwo = () => (
  <Grid style={{ height: '95vh' }} grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="4">
    <GridItem as={Box} placement="2/4">
      Header
    </GridItem>
    <GridItem as={Box} placement="span 1 x 1 / span 3">
      sidebar
    </GridItem>
    <GridItem as={Box} placement="2 / 3">
      main
    </GridItem>
    <GridItem as={Box} placement="3 / 4">
      sidebar
    </GridItem>
    <GridItem as={Box} placement="2 / span 2">
      Footer
    </GridItem>
  </Grid>
)

export const GridColumns = () => {
  return (
    <Grid grid=".5fr 2fr auto 100px" gap="4">
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
      <Box height="96px" />
    </Grid>
  )
}

export const GridRows = () => {
  return (
    <Grid style={{ height: '700px' }} grid="repeat(3, 1fr) x .5fr 2fr 100px" gap="4">
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

export const PlayGround = {}
