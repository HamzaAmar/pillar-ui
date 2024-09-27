import React from 'react'
import { Meta } from '@storybook/react'
import { Paper, Flex } from '@pillar-ui/core'

const meta: Meta<typeof Paper> = {
  title: 'Components/popover',
  component: Paper,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
}

export default meta

export function PaperBackground() {
  return (
    <div className="l_f-md">
      <Paper>Hello</Paper>
      <Paper background="d">Hello</Paper>
      <Paper background="d-8">Hello</Paper>
      <Paper background="w">Hello</Paper>
      <Paper background="s">Hello</Paper>
      <Paper background="se">Hello</Paper>
      <Paper background="p">Hello</Paper>
      <Paper background="b">Hello</Paper>
      <Paper background="b">Hello</Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="l_f-md">
      <Flex>
        <Paper p="2" background="d">
          Hello
        </Paper>
        <Paper p="3" background="w">
          Hello
        </Paper>
        <Paper size="4" background="s">
          Hello
        </Paper>
        <Paper size="5" background="b">
          Hello
        </Paper>
        <Paper size="7" background="se">
          Hello
        </Paper>
        <Paper size="8" background="p">
          Hello
        </Paper>
      </Flex>
      <Flex>
        <Paper p="2" background="d">
          Hello
        </Paper>
        <Paper p="2" background="w">
          Hello
        </Paper>
        <Paper p="2" background="s">
          Hello
        </Paper>
        <Paper p="2" background="b">
          Hello
        </Paper>
        <Paper p="2" background="se">
          Hello
        </Paper>
        <Paper p="2" background="p">
          Hello
        </Paper>
        <Paper background="p">Hello</Paper>
        <Paper background="p">Hello</Paper>
      </Flex>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_f-md">
      <Paper size="4" background="b-4">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="3">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="sm">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="md">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="lg">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="xl">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="full">
        Hello
      </Paper>
      <Paper size="4" background="b-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="l_f-md">
      <Paper size="4">Hello</Paper>

      <Paper size="4" shadow="3">
        Hello
      </Paper>
      <Paper size="4" shadow="sm">
        Hello
      </Paper>
      <Paper size="4" shadow="md">
        Hello
      </Paper>
      <Paper size="4" shadow="lg">
        Hello
      </Paper>
      <Paper size="4" shadow="xl">
        Hello
      </Paper>
    </div>
  )
}

export function PaperColors() {
  return (
    <div className="l_f-md">
      <Paper size="4" background="b-4" color="d-11">
        Hello
      </Paper>
      <Paper size="4" background="b-4" color="s-11">
        Hello
      </Paper>
      <Paper size="4" background="b-4" color="w-11">
        Hello
      </Paper>
      <Paper size="4" background="b-4" color="s-11">
        Hello
      </Paper>
      <Paper size="4" background="b-4" color="b-11">
        Hello
      </Paper>
      <Paper size="4" background="b-4" color="p-11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_f-md">
      <Paper background="d-4" color="d">
        Hello
      </Paper>
      <Paper width="50" background="s-4" color="s">
        Hello
      </Paper>
      <Paper width="25-char" background="w-4" color="w">
        Hello
      </Paper>
      <Paper width="45-char" background="s-4" color="se">
        Hello
      </Paper>
      <Paper width="75-char" background="b-4" color="b">
        Hello
      </Paper>
      <Paper width="60-char" background="p-4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeights() {
  return (
    <div className="l_f-md">
      <Paper height="100px" background="d-4" color="d">
        Hello
      </Paper>
      <Paper height="96px" background="s-4" color="s">
        Hello
      </Paper>
      <Paper height="20ch" background="w-4" color="w">
        Hello
      </Paper>
      <Paper height="30vmin" background="s-4" color="se">
        Hello
      </Paper>
      <Paper height="min(100px, 8rem)" background="b-4" color="b">
        Hello
      </Paper>
      <Paper background="p-4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {}
