import React from 'react'
import { Meta } from '@storybook/react'
import { Paper } from '@pillar-ui/core'

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
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
      <Paper background="dan">Hello</Paper>
      <Paper background="dan-8">Hello</Paper>
      <Paper background="war">Hello</Paper>
      <Paper background="suc">Hello</Paper>
      <Paper background="sec">Hello</Paper>
      <Paper background="pri">Hello</Paper>
      <Paper background="bg">Hello</Paper>
      <Paper background="bg">Hello</Paper>
    </div>
  )
}

export function PaperBorder() {
  return (
    <div className="l_f-md">
      <Paper>Hello</Paper>
      <Paper border={true} p="md">
        Hello
      </Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="l_f-md">
      <Paper p="2xs" background="dan">
        Hello
      </Paper>
      <Paper p="xs" background="war">
        Hello
      </Paper>
      <Paper p="sm" background="suc">
        Hello
      </Paper>
      <Paper p="md" background="bg">
        Hello
      </Paper>
      <Paper p="xl" background="sec">
        Hello
      </Paper>
      <Paper p="2xl" background="pri">
        Hello
      </Paper>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_f-md">
      <Paper p="sm" background="bg-4">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="xs">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="sm">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="md">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="lg">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="xl">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="full">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="l_f-md">
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
    <div className="l_f-md">
      <Paper p="sm" background="bg-4" color="dan-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="suc-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="war-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="sec-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="bg-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="pri-11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_f-md">
      <Paper background="dan-4" color="dan">
        Hello
      </Paper>
      <Paper width="25" background="suc-4" color="suc">
        Hello
      </Paper>
      <Paper width="50" background="war-4" color="war">
        Hello
      </Paper>
      <Paper width="75" background="sec-4" color="sec">
        Hello
      </Paper>
      <Paper width="100" background="sec-4" color="sec">
        Hello
      </Paper>
      <Paper width="30-char" background="suc-4" color="suc">
        Hello
      </Paper>
      <Paper width="45-char" background="war-4" color="war">
        Hello
      </Paper>
      <Paper width="60-char" background="sec-4" color="sec">
        Hello
      </Paper>
      <Paper width="75-char" background="bg-4" color="bg">
        Hello
      </Paper>
      <Paper width="90-char" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="fit" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="24px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="48px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="192px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="384px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="screen" background="pri-4" color="pri">
        Hello
      </Paper>
    </div>
  )
}

export function PaperRatio() {
  return (
    <div className="l_f-md">
      <Paper width="30-char" ratio="1" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="30-char" ratio="16-9" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="30-char" ratio="18-5" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="30-char" ratio="3-4" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper width="30-char" ratio="4-3" background="pri-4" color="pri">
        Hello
      </Paper>{' '}
      <Paper width="30-char" ratio="golden" background="pri-4" color="pri">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeight() {
  return (
    <div className="l_f-md">
      <Paper height="25" background="suc-4" color="suc">
        Hello
      </Paper>
      <Paper height="50" background="war-4" color="war">
        Hello
      </Paper>
      <Paper height="75" background="sec-4" color="sec">
        Hello
      </Paper>
      <Paper height="100" background="sec-4" color="sec">
        Hello
      </Paper>
      <Paper height="fit" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper height="24px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper height="48px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper height="192px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper height="384px" background="pri-4" color="pri">
        Hello
      </Paper>
      <Paper height="screen" background="pri-4" color="pri">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {
  args: {},
}
