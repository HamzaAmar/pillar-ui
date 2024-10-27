import { Link } from '@pillar-ui/core'
import React from 'react'

export function LinkDecoration() {
  return (
    <div className="Sf-4">
      <Link decoration="through">Hello World.</Link>
      <Link decoration="under">Hello World.</Link>
      <Link decoration="over">Hello World.</Link>
    </div>
  )
}
