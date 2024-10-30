import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const TextareaPrefix = () => {
  return (
    <>
      <Textarea aria-label="hello" placeholder="Placeholder" />
      <Textarea aria-label="hello" prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea aria-label="hello" prefixInput={'https://'} />
    </>
  )
}
