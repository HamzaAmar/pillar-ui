import { Link } from '@pillar-ui/core'
import React from 'react'

export function LinkTransform() {
  return (
    <div className="Sf-4">
      <Link href="#" transform="lowercase">
        Hello world.
      </Link>
      <Link href="#" transform="capitalize">
        Hello world.
      </Link>
      <Link href="#" transform="uppercase">
        Hello world.
      </Link>
      <Link href="#" transform="capitalize-once">
        Hello world.
      </Link>
    </div>
  )
}
