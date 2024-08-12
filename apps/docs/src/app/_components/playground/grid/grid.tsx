import { Avatar, Grid, GridItem, Paper } from '~/component/core/pillar'
import React from 'react'

const Box = (props: any) => {
  return (
    <Paper
      as={Grid}
      justify="center"
      items="center"
      style={{ height: '30px' }}
      background="bg-6"
      corner="sm"
      {...props}
    />
  )
}

const boxes = Array.from({ length: 5 }, (_, index) => (
  <Box style={{ minHeight: '50px', minWidth: '50px' }} key={index} />
))

export const GridPlayGround = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const GridGap = () => {
  return (
    <Paper className="playground" border p="sm" flow="md" background="bg-3" corner="sm">
      <Grid grid="repeat(4,30px)" gap="2xs">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="xs">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="sm">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="md">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="lg">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="xl">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="2xl">
        {boxes}
      </Grid>
    </Paper>
  )
}

export const GridJustify = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Grid grid="repeat(5,1fr)" gap="sm">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="sm" justify="center">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="sm" justify="end">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="sm" justify="between">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="sm" justify="around">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="sm" justify="evenly">
        {boxes}
      </Grid>
    </Paper>
  )
}

export const GridPlacement = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Grid grid="5rem 1fr x 100px 400px 100px" gap="sm">
        <GridItem placement="1 / 3" as={Box}>
          header
        </GridItem>
        <GridItem placement="1 / 2 x 2 / 4" as={Grid} grid="4rem 1fr 4rem" gap="sm">
          <Box className="l_fl-1">sidebar</Box>
          <Box className="l_fl-2">main</Box>
          <Box className="l_fl-1">sidebar</Box>
        </GridItem>
        <GridItem placement="2 / 3" as={Box} className="l_fl-1">
          footer
        </GridItem>
      </Grid>
    </Paper>
  )
}

export const Item = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Grid grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="sm">
        <GridItem placement="2/4" style={{ background: 'var(--bg-8)' }}>
          Header
        </GridItem>
        <GridItem placement="span 1 x 1 / span 3" style={{ background: 'var(--bg-8)' }}>
          sidebar
        </GridItem>
        <GridItem placement="2 / 3" style={{ background: 'var(--bg-8)' }}>
          main
        </GridItem>
        <GridItem placement="3 / 4" style={{ background: 'var(--bg-8)' }}>
          sidebar
        </GridItem>
        <GridItem placement="2 / span 2" style={{ background: 'var(--bg-8)' }}>
          Footer
        </GridItem>
      </Grid>
    </Paper>
  )
}

export const GridGrid = () => {
  return (
    <Paper className="playground" border p="sm" background="bg-3" corner="sm">
      <Grid grid="repeat(5, 1fr)" gap="sm">
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
        <div style={{ height: '40px', background: 'var(--bg-6)' }} />
      </Grid>
    </Paper>
  )
}
