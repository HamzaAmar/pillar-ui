import { Heading } from '@pillar-ui/core'
import React from 'react'

export function TextTransform() {
  return (
    <div className="Sf-4">
      <Heading transform="lowercase">hello world.</Heading>
      <Heading transform="capitalize">hello world.</Heading>
      <Heading transform="uppercase">hello world.</Heading>
      <Heading transform="capitalize-once">hello world.</Heading>
    </div>
  )
}
