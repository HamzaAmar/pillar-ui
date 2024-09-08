import { forwardRef } from 'react'
import type { TypographyProps } from './typography.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { cx } from '../utils'

export const Text = forwardRef((props, forwardedRef) => {
  const {
    as: Tag = 'p',
    size,
    truncate,
    className,
    transform,
    weight,
    leading,
    align,
    decoration,
    variant = 'text',
    color,
    fontStyle,
    low = false,
    children,
    width,
    ...rest
  } = props

  const classNames = cx(`t-y`, {
    [`u_f-${size}`]: !!size,
    [`u_truncate-${truncate}`]: !!truncate,
    [`u_t-${transform}`]: !!transform,
    [`u_t-${align}`]: !!align,
    [`u_f-${weight}`]: !!weight,
    [`u_t-${decoration}`]: !!decoration,
    [`u_t-${leading}`]: !!leading,
    [`u_f-${fontStyle}`]: !!fontStyle,
    [`u_${color}`]: !!color,
    [`u_w-${width}`]: !!width,
    [`t-y-low`]: low,
    [`t-y_${variant}`]: variant !== 'text',
    [`${className}`]: !!className,
  })

  return (
    <Tag className={classNames} ref={forwardedRef} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'p', TypographyProps>
Text.displayName = 'Text'

export const Heading = forwardRef(({ as: Tag = 'h1', children, ...rest }, forwardedRef) => {
  return (
    <Text as={Tag} className="t-y_hdg" ref={forwardedRef} {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'h1', TypographyProps>

Heading.displayName = 'Heading'

export const Link = forwardRef(({ children, ...rest }, forwardedRef) => {
  return (
    <Text ref={forwardedRef} color="pri" low className="t-y_lnk" as="a" {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'a', TypographyProps>

Link.displayName = 'Link'

export type { TypographyProps } from './typography.type'
