import { Textarea } from '@pillar-ui/core'
import { User } from '@pillar-ui/icons'
import React from 'react'

export const TextareaSuffix = () => {
  return (
    <>
      <Textarea aria-label="hello" suffixInput={<User width="16" />} placeholder="Placeholder" />
      <Textarea aria-label="hello" suffixInput=".com" />
    </>
  )
}
