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
  return <Paper as={Flex} justify="center" items="center" background="B6" corner="2" {...props} />
}

export const EqualColumns = () => {
  return (
    <Grid gap="3" cols={{ default: 'repeat(20, 1fr)' }}>
      {Array.from({ length: 300 }, (_, index) => (
        <Box style={{ height: '30px' }} key={index}>
          {index + 1}
        </Box>
      ))}
    </Grid>
  )
}

export const ResponsiveColumns = () => {
  return (
    <Grid
      gap="3"
      cols={{
        default: '1fr',
        sm: '1fr 1fr',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(6, 1fr)',
        xl: 'repeat(12, 1fr)',
      }}
    >
      {Array.from({ length: 64 }, (_, index) => (
        <Box style={{ height: '30px' }} key={index}>
          {index}
        </Box>
      ))}
    </Grid>
  )
}

export const ResponsiveColumn = () => {
  return (
    <Grid
      gap="3"
      cols={{ default: '1fr', md: 'repeat(4, 1fr)' }}
      rows={{ default: 'repeat(4, 1fr)', md: 'repeat(6,1fr)' }}
    >
      <GridItem as={Box} col={{ default: '1/2', md: '1/5' }} height="48p">
        Hello
      </GridItem>
      <GridItem as={Box} col={{ default: '1/2', md: 'span 2' }} row={{ default: '2/3', md: 'span 4' }}>
        Hello
      </GridItem>
      <GridItem as={Box} col={{ default: '1/2', md: 'span 2' }} row={{ default: '3/4', md: 'span 4' }}>
        Hello
      </GridItem>
      <GridItem as={Box} col={{ default: '1/2', md: 'span 4' }} height="48p">
        Hello
      </GridItem>
    </Grid>
  )
}

export const ComplexGridOne = () => (
  <Grid
    style={{ height: '95vh' }}
    cols={{ default: 'auto 1fr auto' }}
    rows={{ default: '4rem minmax(6rem, 1fr) 4rem' }}
    gap="4"
  >
    <GridItem as={Box} col={{ default: '1 / -1' }}>
      Header
    </GridItem>
    <GridItem p="5" as={Box} col={{ default: 'span 1' }}>
      sidebar
    </GridItem>
    <GridItem as={Box} col={{ default: 'span 1' }}>
      main
    </GridItem>
    <GridItem p="5" lg="lg_hide" as={Box} col={{ default: 'span 1' }}>
      sidebar
    </GridItem>
    <GridItem as={Box} col={{ default: '1 / -1' }}>
      Footer
    </GridItem>
  </Grid>
)

export const ComplexGridTwo = () => (
  <Grid
    style={{ height: '95vh' }}
    cols={{ default: '100px 1fr 100px' }}
    rows={{ default: '2rem minmax(6rem, 1fr) 2rem' }}
    gap="4"
  >
    <GridItem as={Box} col={{ default: '2/4' }}>
      Header
    </GridItem>
    <GridItem as={Box} col={{ default: 'span 1' }} row={{ default: '1 / span 3' }}>
      sidebar
    </GridItem>
    <GridItem as={Box} col={{ default: '2 / 3' }}>
      main
    </GridItem>
    <GridItem as={Box} col={{ default: '3 / 4' }}>
      sidebar
    </GridItem>
    <GridItem as={Box} col={{ default: '2 / span 2' }}>
      Footer
    </GridItem>
  </Grid>
)

export const GridColumns = () => {
  return (
    <Grid cols={{ default: '.5fr 2fr 3rem 100px' }} gap="4">
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
      <Box height="96p" />
    </Grid>
  )
}

export const GridRows = () => {
  return (
    <Grid style={{ height: '700px' }} cols={{ default: 'repeat(3, 1fr)' }} rows={{ default: '.5fr 2fr 100px' }} gap="4">
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
