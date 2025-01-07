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
    <div className="Sf-4">
      <Paper background="Se9">Hello</Paper>
      <Paper background="D9">Hello</Paper>
      <Paper background="D8">Hello</Paper>
      <Paper background="W9">Hello</Paper>
      <Paper background="Su9">Hello</Paper>
      <Paper background="Su9">Hello</Paper>
      <Paper background="P9">Hello</Paper>
      <Paper background="B9">Hello</Paper>
      <Paper background="B9" p="5">
        <Paper border background="W9" p="5">
          <Paper border background="Se9" p="5">
            <Paper border background="Su9" p="5">
              <Paper border background="P9" p="5">
                <Paper border p="5">
                  Hello world
                </Paper>
              </Paper>
            </Paper>
          </Paper>
        </Paper>
      </Paper>
    </div>
  )
}

export function PaperBorder() {
  return (
    <div className="Sf-4">
      <Paper>Hello</Paper>
      <Paper border={true} p="5">
        Hello
      </Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="Sf-4">
      <Paper p="2" background="D9">
        Hello
      </Paper>
      <Paper p="3" background="W9">
        Hello
      </Paper>
      <Paper p="4" background="Su9">
        Hello
      </Paper>
      <Paper p="5" background="B9">
        Hello
      </Paper>
      <Paper p="7" background="Su9">
        Hello
      </Paper>
      <Paper p="8" background="P9">
        Hello
      </Paper>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="p">
      <Paper corner="4" background="B4">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="3">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="2">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="3">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="4">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="5">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="full">
        Hello
      </Paper>
      <Paper p="4" background="B4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="Sf-4">
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
    <div className="Sf-4">
      <Paper p="4" background="B4" color="D11">
        Hello
      </Paper>
      <Paper p="4" background="B4" color="Su11">
        Hello
      </Paper>
      <Paper p="4" background="B4" color="W11">
        Hello
      </Paper>
      <Paper p="4" background="B4" color="Su11">
        Hello
      </Paper>
      <Paper p="4" background="B4" color="B11">
        Hello
      </Paper>
      <Paper p="4" background="B4" color="P11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="Sf-4">
      <Paper background="D4" width="50%" color="d">
        Hello
      </Paper>
      <Paper width="20px" background="Su4" color="su">
        Hello
      </Paper>
      <Paper width="50px" background="W4" color="w">
        Hello
      </Paper>
      <Paper width="100px" background="Su4" color="se">
        Hello
      </Paper>
      <Paper width="fit-content" background="Su4" color="se">
        Hello
      </Paper>
      <Paper width="25%" background="Su4" color="su">
        Hello
      </Paper>
      <Paper width="50%" background="W4" color="w">
        Hello
      </Paper>
      <Paper width="100%" background="Su4" color="se">
        Hello
      </Paper>
      <Paper width="50ch" background="B4" color="b">
        Hello
      </Paper>
      <Paper width="25ch" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="4rem" background="P4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperRatio() {
  return (
    <div className="Sf-4">
      <Paper width="100px" ratio="1" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="100px" ratio="16-9" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="100px" ratio="18-5" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="100px" ratio="3-4" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="100px" ratio="4-3" background="P4" color="p">
        Hello
      </Paper>
      <Paper width="100px" ratio="golden" background="P4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeight() {
  return (
    <div className="Sf-4">
      <Paper height="25px" background="Su4" color="su">
        Hello
      </Paper>
      <Paper height="50px" background="W4" color="w">
        Hello
      </Paper>
      <Paper height="75px" background="Su4" color="se">
        Hello
      </Paper>
      <Paper height="100px" background="Su4" color="se">
        Hello
      </Paper>
      <Paper height="fit-content" background="P4" color="p">
        Hello
      </Paper>
      <Paper height="2rem" background="P4" color="p">
        Hello
      </Paper>
      <Paper height="4rem" background="P4" color="p">
        Hello
      </Paper>
      <Paper height="16rem" background="P4" color="p">
        Hello
      </Paper>
      <Paper height="32rem" background="P4" color="p">
        Hello
      </Paper>
      <Paper height="100vh" background="P4" color="p">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {
  args: {},
}
