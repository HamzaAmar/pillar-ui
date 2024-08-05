import { Blockquote, BlockquoteCite, Paper } from '~/component/core/pillar'
import React from 'react'

export const BlockquotePlayGround = () => {
  return (
    <Paper p="sm" background="bg-2" corner="sm" flow="sm">
      <Blockquote corner="sharp" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}
export const BlockquoteCorners = () => {
  return (
    <Paper p="sm" background="bg-2" corner="sm" flow="sm">
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

export const BlockquoteColors = () => {
  return (
    <Paper p="sm" background="bg-2" corner="sm" flow="sm">
      <Blockquote color="dan" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="war" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="suc" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="pri" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="sec" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote color="bg" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}

export const BlockquoteSizes = () => {
  return (
    <Paper p="sm" background="bg-2" corner="sm" flow="sm">
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

export const CiteBlockquote = () => {
  return (
    <div className="l_flow__md">
      <Blockquote color="dan">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" />
      </Blockquote>

      <Blockquote color="dan">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" align="end" />
      </Blockquote>

      <Blockquote color="dan">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" align="center" />
      </Blockquote>
    </div>
  )
}
