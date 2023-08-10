import { Blockquote } from '@pillar-ui/core'
import React from 'react'

export const BlockquotePlayground = () => {
  return (
    <div className="l_flow__md">
      <Blockquote corner="sharp" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </div>
  )
}
const BlockquoteCorner = () => {
  return (
    <div className="l_flow__md">
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
      sd
      <Blockquote corner="lg" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="xl" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="full" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </div>
  )
}

const BlockquoteColor = () => {
  return (
    <div className="l_flow__md">
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
    </div>
  )
}

const BlockquoteSize = () => {
  return (
    <div className="l_flow__md">
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
    </div>
  )
}

BlockquotePlayground.BlockquoteCorner = BlockquoteCorner
BlockquotePlayground.BlockquoteColor = BlockquoteColor
BlockquotePlayground.BlockquoteSize = BlockquoteSize
