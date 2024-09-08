import { forwardRef } from 'react'
import { CodeProps } from './code.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { cx } from '../utils'

export const Code = forwardRef((props, ref) => {
  const { as: Tag = 'code', color = 'bg', size = 'sm', corner, children, transform, className, ...rest } = props

  const classNames = cx(`c-o u_soft u_${color} `, {
    [`u_f-${size}`]: !!size,
    [`u_t-${transform}`]: !!transform,
    [`u_rad-${corner}`]: !!corner,
    [className!]: !!className,
  })

  return (
    <Tag ref={ref} className={classNames} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'code', CodeProps>

Code.displayName = 'Code'

export type { CodeProps } from './code.type'
