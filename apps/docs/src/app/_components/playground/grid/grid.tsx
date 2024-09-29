import { Avatar, Grid, GridItem, Paper } from '@pillar-ui/core'
import React from 'react'

const Box = (props: any) => {
  return (
    <Paper
      as={Grid}
      justify="center"
      items="center"
      style={{ height: '30px' }}
      background="b-6"
      corner="2"
      {...props}
    />
  )
}

const boxes = Array.from({ length: 5 }, (_, index) => (
  <Box style={{ minHeight: '50px', minWidth: '50px' }} key={index} />
))

export const GridPlayGround = () => {
  return (
    <Paper className="playground" border background="b-3" corner="2">
      <Avatar title="Success!" color="d" />
      <Avatar title="Success!" color="w" />
      <Avatar title="Success!" color="su" />
      <Avatar title="Success!" color="p" />
      <Avatar title="Success!" color="b" />
      <Avatar title="Success!" color="se" />
    </Paper>
  )
}

export const GridGap = () => {
  return (
    <Paper className="playground" border flow="5" background="b-3" corner="2">
      <Grid grid="repeat(4,30px)" gap="2">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="3">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="4">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="5">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="6">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="7">
        {boxes}
      </Grid>
      <Grid grid="repeat(4,30px)" gap="8">
        {boxes}
      </Grid>
    </Paper>
  )
}

export const GridJustify = () => {
  return (
    <Paper className="playground" border background="b-3" corner="2">
      <Grid grid="repeat(5,1fr)" gap="4">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="4" justify="center">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="4" justify="end">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="4" justify="between">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="4" justify="around">
        {boxes}
      </Grid>
      <Grid grid="repeat(5,1fr)" gap="4" justify="evenly">
        {boxes}
      </Grid>
    </Paper>
  )
}

export const GridPlacement = () => {
  return (
    <Paper className="playground" border background="b-3" corner="2">
      <Grid grid="5rem 1fr x 100px 400px 100px" gap="4">
        <GridItem placement="1 / 3" as={Box}>
          header
        </GridItem>
        <GridItem placement="1 / 2 x 2 / 4" as={Grid} grid="4rem 1fr 4rem" gap="4">
          <Box className="fl-1">sidebar</Box>
          <Box className="fl-2">main</Box>
          <Box className="fl-1">sidebar</Box>
        </GridItem>
        <GridItem placement="2 / 3" as={Box} className="fl-1">
          footer
        </GridItem>
      </Grid>
    </Paper>
  )
}

export const Item = () => {
  return (
    <Paper className="playground" border background="b-3" corner="2">
      <Grid grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="4">
        <GridItem placement="2/4" style={{ background: 'var(--B8)' }}>
          Header
        </GridItem>
        <GridItem placement="span 1 x 1 / span 3" style={{ background: 'var(--B8)' }}>
          sidebar
        </GridItem>
        <GridItem placement="2 / 3" style={{ background: 'var(--B8)' }}>
          main
        </GridItem>
        <GridItem placement="3 / 4" style={{ background: 'var(--B8)' }}>
          sidebar
        </GridItem>
        <GridItem placement="2 / span 2" style={{ background: 'var(--B8)' }}>
          Footer
        </GridItem>
      </Grid>
    </Paper>
  )
}

export const GridGrid = () => {
  return (
    <Paper className="playground" border background="b-3" corner="2">
      <Grid grid="repeat(5, 1fr)" gap="4">
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
        <div style={{ height: '40px', background: 'var(--B6)' }} />
      </Grid>
    </Paper>
  )
}
