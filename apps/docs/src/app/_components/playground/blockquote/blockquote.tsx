import { Blockquote, Paper } from '~/component/core/pillar'
import React from 'react'

export const BlockquotePlayGround = () => {
  return (
    <Paper p="sm" background="surface-2" corner="sm" flow="sm">
      <Blockquote corner="sharp" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}
const BlockquoteCorner = () => {
  return (
    <Paper p="sm" background="surface-2" corner="sm" flow="sm">
      <Blockquote corner="sharp" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="xs" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="sm" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="md" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="lg" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="xl" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="full" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}

const BlockquoteColor = () => {
  return (
    <Paper p="sm" background="surface-2" corner="sm" flow="sm">
      <Blockquote color="danger" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="warning" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="success" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="primary" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="secondary" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="surface" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}

const BlockquoteSize = () => {
  return (
    <Paper p="sm" background="surface-2" corner="sm" flow="sm">
      <Blockquote size="2xs" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="xs" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="sm" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="md" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="lg" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="xl" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote size="2xl" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}

export const BlockquoteCite = () => {
  return (
    <div className="l_flow__md">
      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" />
      </Blockquote>

      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" align="end" />
      </Blockquote>

      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" align="center" />
      </Blockquote>
    </div>
  )
}

BlockquotePlayGround.Corners = BlockquoteCorner
BlockquotePlayGround.Colors = BlockquoteColor
BlockquotePlayGround.Sizes = BlockquoteSize
BlockquotePlayGround.Cite = BlockquoteCite
