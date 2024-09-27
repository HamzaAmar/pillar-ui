import { Blockquote } from '@pillar-ui/core'

export const BlockquoteCorner = () => {
  return (
    <>
      <Blockquote corner="0" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="3" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="2" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="3" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="4" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="5" cite="John Doe">
        This is the quoted text.
      </Blockquote>
      <Blockquote corner="full" cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </>
  )
}
