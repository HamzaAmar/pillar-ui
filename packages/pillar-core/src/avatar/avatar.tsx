/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { AvatarProps } from './avatar.type'

function Button({ size }: AvatarProps) {
  return (
    <div>
      <img className={`avatar avatar__${size}`} src="https://picsum.photos/id/125/100/100" alt="hello" />
    </div>
  )
}

Button.displayName = '@Pillar/Avatar'

export default Button
