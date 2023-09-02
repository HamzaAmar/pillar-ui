import { CSSProperties } from 'react'

type Position = CSSProperties['position']

export function position() {
  const insetTop = top
  const insetRight = right
  const insetBottom = bottom
  const insetLeft = left
  const style = `inset(${insetTop} ${insetRight} ${insetBottom} ${insetLeft})`
  return { className, style }
}

export function overflow() {
  return `u_${overflow}`
}
