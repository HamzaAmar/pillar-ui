import { forwardRef } from 'react'
import type { CSSProperties } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import { cx } from '../utils'

// Helper function to generate CSS variable
function getCSSVariable(value: string | undefined, initial: number = 9) {
  if (!value) return
  const [color, degree = initial] = value.split('-')
  return `var(--${color}-${degree}, none)`
}

export const Paper = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const classNames = cx(`p-p`, {
      [`u_sh-${shadow}`]: !!shadow,
      [`l_f-${flow}`]: !!flow,
      [`u_rad-${corner}`]: !!corner,
      [`u_pa-${p}`]: !!p,
      [`u_ma-${m}`]: !!m,
      [`u_w-${width}`]: !!width,
      [`u_h-${height}`]: !!height,
      [`u_ratio-${ratio}`]: !!ratio,
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
  }
) as ForwardRefComponent<'div', PaperProps>

Paper.displayName = 'Paper'

export type { PaperProps } from './paper.type'
