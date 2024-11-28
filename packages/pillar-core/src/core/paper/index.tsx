import { CSSProperties, forwardRef } from 'react'
import { cx } from '../cx'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { PaperProps } from './paper.type'

export const Paper = forwardRef(
  (
    {
      as: Tag = 'div',
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
      className,
      border,
      style,
      background,
      ...rest
    },
    ref
  ) => {
    const classNames = cx(`pp-`, {
      [`S-${shadow}`]: shadow,
      [`Sf-${flow}`]: flow,
      [`R-${corner}`]: corner,
      [`Sw-${width}`]: width,
      [`Sh-${height}`]: height,
      [`Sr-${ratio}`]: ratio,
      [`B`]: border,
      [`Sp-${p}`]: p,
      [`Sp-t${pt}`]: pt,
      [`Sp-r${pr}`]: pr,
      [`Sp-b${pb}`]: pb,
      [`Sp-l${pl}`]: pl,
      [`Sm-${m}`]: m,
      [`Sm-t${mt}`]: mt,
      [`Sm-r${mr}`]: mr,
      [`Sm-b${mb}`]: mb,
      [`Sm-l${ml}`]: ml,
      [className!]: className,
    })

    const bg = background ? { '--pbg': `var(--${background})` } : {}

    return (
      <Tag style={{ ...bg, ...style } as CSSProperties} className={classNames} ref={ref} {...rest}>
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', PaperProps>

Paper.displayName = 'Paper'

export type { PaperProps } from './paper.type'
