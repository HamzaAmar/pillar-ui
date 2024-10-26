import { Blockquote } from '@pillar-ui/core'
import { Quotes } from '@pillar-ui/icons'

export const BlockquoteIcon = () => {
  return (
    <>
      <Blockquote cite="John Doe">This is the quoted text.</Blockquote>
      <Blockquote icon={<Quotes />} cite="John Doe">
        This is the quoted text.
      </Blockquote>
    </>
  )
}
