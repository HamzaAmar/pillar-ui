import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import { classnames } from '@pillar-ui/utils'

// Helper function to generate CSS variable
function getCSSVariable(value: string | undefined, initial: number = 9) {
  if (!value) return
  const [color, degree = initial] = value.split('-')
  return `var(--${color}-${degree}, none)`
}

const paper = forwardRef((props, ref) => {
  let {
    as: Tag = 'div',
    background,
    color,
    p,
    m,
    shadow,
    width,
    height,
    corner,
    flow,
    ratio,
    children,
    style = {},
    className,
    border,
    ...rest
  } = props

  const classNames = classnames(`paper`, {
    [`u_shadow-${shadow}`]: !!shadow,
    [`l_flow__${flow}`]: !!flow,
    [`u_corner-${corner}`]: !!corner,
    [`u_padding-${p}`]: !!p,
    [`u_margin-${m}`]: !!m,
    [`u_width-${width}`]: !!width,
    [`u_${ratio}`]: !!ratio,
    [`u_border`]: !!border,
    [className!]: !!className,
  })

  const _style: CSSProperties = {
    background: getCSSVariable(background),
    color: getCSSVariable(color, 12),
    ...style,
  }

  return (
    <Tag style={_style} className={classNames} ref={ref} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'div', PaperProps>

paper.displayName = 'Pillar-Paper'

export default paper
