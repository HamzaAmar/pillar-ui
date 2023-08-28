import { Blockquote, Paper } from '@pillar-ui/core'
import React from 'react'

export const BlockquotePlayGround = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm" flow="sm">
      <Blockquote corner="sharp" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </Paper>
  )
}
const BlockquoteCorner = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm" flow="sm">
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
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm" flow="sm">
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
      sd
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
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm" flow="sm">
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
      sd
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

BlockquotePlayGround.Corners = BlockquoteCorner
BlockquotePlayGround.Colors = BlockquoteColor
BlockquotePlayGround.Sizes = BlockquoteSize
