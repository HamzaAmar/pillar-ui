import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Paper, Flex } from '@pillar-ui/core'

export default {
  title: 'Components/popover',
  component: Paper,
  args: {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
} as Meta<typeof Paper>

export function PaperBackground() {
  return (
    <div className="l_flow__md">
      <Paper>Hello</Paper>
      <Paper background="danger">Hello</Paper>
      <Paper background="danger-8">Hello</Paper>
      <Paper background="warning">Hello</Paper>
      <Paper background="success">Hello</Paper>
      <Paper background="secondary">Hello</Paper>
      <Paper background="primary">Hello</Paper>
      <Paper background="surface">Hello</Paper>
      <Paper background="surface">Hello</Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="l_flow__md">
      <Flex>
        <Paper p="2xs" background="danger">
          Hello
        </Paper>
        <Paper p="xs" background="warning">
          Hello
        </Paper>
        <Paper p="sm" background="success">
          Hello
        </Paper>
        <Paper p="md" background="surface">
          Hello
        </Paper>
        <Paper p="xl" background="secondary">
          Hello
        </Paper>
        <Paper p="2xl" background="primary">
          Hello
        </Paper>
      </Flex>
      <Flex>
        <Paper p="2xs" pt="lg" background="danger">
          Hello
        </Paper>
        <Paper p="2xs" pr="lg" background="warning">
          Hello
        </Paper>
        <Paper p="2xs" pb="lg" background="success">
          Hello
        </Paper>
        <Paper p="2xs" pl="lg" background="surface">
          Hello
        </Paper>
        <Paper p="2xs" plr="lg" background="secondary">
          Hello
        </Paper>
        <Paper p="2xs" ptb="lg" background="primary">
          Hello
        </Paper>
        <Paper ptb="lg" background="primary">
          Hello
        </Paper>
        <Paper plr="lg" background="primary">
          Hello
        </Paper>
      </Flex>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_flow__md">
      <Paper p="sm" background="surface-4">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="xs">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="sm">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="md">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="lg">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="xl">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="full">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="l_flow__md">
      <Paper p="sm">Hello</Paper>

      <Paper p="sm" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" shadow="xl">
        Hello
      </Paper>
    </div>
  )
}

export function PaperColors() {
  return (
    <div className="l_flow__md">
      <Paper p="sm" background="surface-4" color="danger-11">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" color="success-11">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" color="warning-11">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" color="secondary-11">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" color="surface-11">
        Hello
      </Paper>
      <Paper p="sm" background="surface-4" color="primary-11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_flow__md">
      <Paper background="danger-4" color="danger">
        Hello
      </Paper>
      <Paper width="100px" background="success-4" color="success">
        Hello
      </Paper>
      <Paper width="50%" background="warning-4" color="warning">
        Hello
      </Paper>
      <Paper width="15rem" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper width="min(100px, 10rem)" background="surface-4" color="surface">
        Hello
      </Paper>
      <Paper width="100vw" background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeights() {
  return (
    <div className="l_flow__md">
      <Paper height="100px" background="danger-4" color="danger">
        Hello
      </Paper>
      <Paper height="5rem" background="success-4" color="success">
        Hello
      </Paper>
      <Paper height="20ch" background="warning-4" color="warning">
        Hello
      </Paper>
      <Paper height="30vmin" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper height="min(100px, 8rem)" background="surface-4" color="surface">
        Hello
      </Paper>
      <Paper background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export function PaperBorders() {
  return (
    <div className="l_flow__md">
      <Paper borderStyle="dotted">Dotted</Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="top">
        Border Top
      </Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="right">
        Border Right
      </Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="bottom">
        Border Bottom
      </Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="left">
        Border Left
      </Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="block">
        Border Block
      </Paper>
      <Paper borderStyle="dotted" p="sm" borderPosition="inline">
        Border Inline
      </Paper>

      <Paper borderStyle="dashed">Hello</Paper>
      <Paper borderColor="danger-9">Hello</Paper>
      <Paper borderColor="warning-9">Hello</Paper>
      <Paper borderWidth="4px">Hello</Paper>
      <Paper background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {
  args: {},
}
