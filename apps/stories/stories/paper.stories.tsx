import React from 'react'
import { Meta } from '@storybook/react'
import { Paper } from '@pillar-ui/core'

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  args: {
    children:
      'Lorem ipsum dolor sit amet constetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
}

export default meta

export function PaperBackground() {
  return (
    <div className="Sf4">
      <Paper>Hello</Paper>
      <Paper background="d">Hello</Paper>
      <Paper background="d-8">Hello</Paper>
      <Paper background="w">Hello</Paper>
      <Paper background="su">Hello</Paper>
      <Paper background="su">Hello</Paper>
      <Paper background="p">Hello</Paper>
      <Paper background="b">Hello</Paper>
      <Paper background="b">Hello</Paper>
    </div>
  )
}

export function PaperBorder() {
  return (
    <div className="Sf4">
      <Paper>Hello</Paper>
      <Paper border={true} p="5">
        Hello
      </Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="Sf4">
      <Paper p="2" background="d">
        Hello
      </Paper>
      <Paper p="3" background="w">
        Hello
      </Paper>
      <Paper p="4" background="su">
        Hello
      </Paper>
      <Paper p="5" background="b">
        Hello
      </Paper>
      <Paper p="7" background="su">
        Hello
      </Paper>
      <Paper p="8" background="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="p">
      <Paper corner="4" background="b-4">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="3">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="2">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="3">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="4">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="5">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="full">
        Hello
      </Paper>
      <Paper p="4" background="b-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="Sf4">
      <Paper corner="4">Hello</Paper>

      <Paper corner="4" shadow="1">
        Hello
      </Paper>
      <Paper corner="4" shadow="2">
        Hello
      </Paper>
      <Paper corner="4" shadow="3">
        Hello
      </Paper>
      <Paper corner="4" shadow="4">
        Hello
      </Paper>
      <Paper corner="4" shadow="5">
        Hello
      </Paper>
    </div>
  )
}

export function PaperColors() {
  return (
    <div className="Sf4">
      <Paper p="4" background="b-4" color="d-11">
        Hello
      </Paper>
      <Paper p="4" background="b-4" color="su-11">
        Hello
      </Paper>
      <Paper p="4" background="b-4" color="w-11">
        Hello
      </Paper>
      <Paper p="4" background="b-4" color="su-11">
        Hello
      </Paper>
      <Paper p="4" background="b-4" color="b-11">
        Hello
      </Paper>
      <Paper p="4" background="b-4" color="p-11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="Sf4">
      <Paper background="d-4" color="d">
        Hello
      </Paper>
      <Paper width="25" background="su-4" color="su">
        Hello
      </Paper>
      <Paper width="50" background="w-4" color="w">
        Hello
      </Paper>
      <Paper width="75" background="su-4" color="se">
        Hello
      </Paper>
      <Paper width="100" background="su-4" color="se">
        Hello
      </Paper>
      <Paper width="30c" background="su-4" color="su">
        Hello
      </Paper>
      <Paper width="25c" background="w-4" color="w">
        Hello
      </Paper>
      <Paper width="60c" background="su-4" color="se">
        Hello
      </Paper>
      <Paper width="75c" background="b-4" color="b">
        Hello
      </Paper>
      <Paper width="90c" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="fit" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="24p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="48p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="192p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="384p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="screen" background="p-4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperRatio() {
  return (
    <div className="Sf4">
      <Paper width="30c" ratio="1" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="30c" ratio="16-9" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="30c" ratio="18-5" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="30c" ratio="3-4" background="p-4" color="p">
        Hello
      </Paper>
      <Paper width="30c" ratio="4-3" background="p-4" color="p">
        Hello
      </Paper>{' '}
      <Paper width="30c" ratio="golden" background="p-4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeight() {
  return (
    <div className="Sf4">
      <Paper height="25" background="su-4" color="su">
        Hello
      </Paper>
      <Paper height="50" background="w-4" color="w">
        Hello
      </Paper>
      <Paper height="75" background="su-4" color="se">
        Hello
      </Paper>
      <Paper height="100" background="su-4" color="se">
        Hello
      </Paper>
      <Paper height="fit" background="p-4" color="p">
        Hello
      </Paper>
      <Paper height="24p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper height="48p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper height="192p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper height="384p" background="p-4" color="p">
        Hello
      </Paper>
      <Paper height="screen" background="p-4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {
  args: {},
}
