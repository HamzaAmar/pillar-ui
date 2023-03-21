import React from 'react'
import type { ButtonProps } from './button.type'

function Button({ children }: ButtonProps) {
  return <button className="btn">{children}</button>
}

Button.displayName = '@Pillar-Button'

export default Button
