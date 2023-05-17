import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import { classnames } from '../../utils'

// Helper function to generate CSS variable
function getCSSVariable(value: string | undefined, initial: number = 9) {
  if (!value) return
  const [color, degree = initial] = value.split('-')
  return `var(--${color}-${degree})`
}

const paper = forwardRef((props, ref) => {
  const {
    background = 'slate-1',
    color,
    padding,
    shadow,
    width,
    height,
    corner = 'sharp',
    as: Tag = 'div',
    spacing,
    children,
    className,
    ...rest
  } = props

  const _className = classnames(`hello l_corner-${corner}`, {
    [`u_shadow-${shadow}`]: !!shadow,
    [`l_flow__${spacing}`]: !!spacing,
    [className!]: !!className,
  })
  const _style: CSSProperties = {
    background: getCSSVariable(background),
    color: getCSSVariable(color, 12),
    padding: padding ? `var(--space-${padding})` : undefined,
    width: width ? `${width}` : undefined,
    height: height ? `${height}` : undefined,
  }

  return (
    <Tag style={_style} className={_className} ref={ref} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', PaperProps>

paper.displayName = 'Pillar-Paper'

export default paper
