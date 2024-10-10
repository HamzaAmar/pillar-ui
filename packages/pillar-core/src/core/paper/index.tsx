import { forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'
import type { CSSProperties } from 'react'

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
      pt,
      pr,
      pb,
      pl,
      m,
      mt,
      mr,
      mb,
      ml,
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
      [`S-${shadow}`]: shadow,
      [`Sf-${flow}`]: flow,
      [`R-${corner}`]: corner,
      [`Sp-${p}`]: p,
      [`Sp-${pt}`]: pt,
      [`Sp-r${pr}`]: pr,
      [`Sp-b${pb}`]: pb,
      [`Sp-l${pl}`]: pl,
      [`Sm-${m}`]: m,
      [`Sm-t${mt}`]: mt,
      [`Sm-r${mr}`]: mr,
      [`Sm-b${mb}`]: mb,
      [`Sm-l${ml}`]: ml,
      [`Sw-${width}`]: width,
      [`Sh-${height}`]: height,
      [`Sr-${ratio}`]: ratio,
      [`B`]: border,
      [className!]: className,
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
