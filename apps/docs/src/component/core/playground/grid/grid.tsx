import { Avatar, Grid, Paper } from '@pillar-ui/core'
import React from 'react'

const Box = (props: any) => {
  return (
    <Paper
      as={Grid}
      justify="center"
      items="center"
      style={{ height: '30px' }}
      background="surface-6"
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
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const GridGap = () => {
  return (
    <Paper className="playground" border p="sm" flow="md" background="surface-3" corner="sm">
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
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
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
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
      <Grid grid="5rem 1fr x 100px 400px 100px" gap="sm">
        <Grid.Item placement="1 / 3" as={Box}>
          header
        </Grid.Item>
        <Grid.Item placement="1 / 2 x 2 / 4" as={Grid} grid="4rem 1fr 4rem" gap="sm">
          <Box className="l_flex-1">sidebar</Box>
          <Box className="l_flex-2">main</Box>
          <Box className="l_flex-1">sidebar</Box>
        </Grid.Item>
        <Grid.Item placement="2 / 3" as={Box} className="l_flex-1">
          footer
        </Grid.Item>
      </Grid>
    </Paper>
  )
}

export const GridItem = () => {
  return (
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
      <Grid grid="100px 1fr 100px x 2rem minmax(6rem, 1fr) 2rem" gap="sm">
        <Grid.Item placement="2/4" style={{ background: 'var(--surface-8)' }}>
          Header
        </Grid.Item>
        <Grid.Item placement="span 1 x 1 / span 3" style={{ background: 'var(--surface-8)' }}>
          sidebar
        </Grid.Item>
        <Grid.Item placement="2 / 3" style={{ background: 'var(--surface-8)' }}>
          main
        </Grid.Item>
        <Grid.Item placement="3 / 4" style={{ background: 'var(--surface-8)' }}>
          sidebar
        </Grid.Item>
        <Grid.Item placement="2 / span 2" style={{ background: 'var(--surface-8)' }}>
          Footer
        </Grid.Item>
      </Grid>
    </Paper>
  )
}

export const GridGrid = () => {
  return (
    <Paper className="playground" border p="sm" background="surface-3" corner="sm">
      <Grid grid="repeat(5, 1fr)" gap="sm">
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
        <div style={{ height: '40px', background: 'var(--surface-6)' }} />
      </Grid>
    </Paper>
  )
}

GridPlayGround.Placement = GridPlacement
GridPlayGround.Gap = GridGap
GridPlayGround.Grid = GridGrid
GridPlayGround.Justify = GridJustify
GridPlayGround.Items = GridItem
