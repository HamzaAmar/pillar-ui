import { Heading } from '@pillar-ui/core'
import React from 'react'

export function HeadingDecoration() {
  return (
    <div className="Sf-4">
      <Heading decoration="through">Hello World.</Heading>
      <Heading decoration="under">Hello World.</Heading>
      <Heading decoration="over">Hello World.</Heading>
    </div>
  )
}
