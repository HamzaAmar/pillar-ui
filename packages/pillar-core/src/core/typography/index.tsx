import { forwardRef } from 'react'
import { cx } from '../cx'

import type { TypographyProps } from './typography.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
export const Text = forwardRef(
  (
    {
      as: Tag = 'p',
      size,
      truncate,
      className,
      transform,
      weight,
      leading,
      align,
      decoration,
      color,
      fontStyle,
      low = false,
      children,
      width,
      ...rest
    },
    forwardedRef
  ) => {
    const classNames = cx(`ty-`, {
      [`Fs-${size}`]: size,
      [`T-${truncate}`]: truncate,
      [`Tt-${transform}`]: transform,
      [`Ta-${align}`]: align,
      [`Fw-${weight}`]: weight,
      [`Td-${decoration}`]: decoration,
      [`Tl-${leading}`]: leading,
      [`Fst-${fontStyle}`]: fontStyle,
      [`C-${color}`]: color,
      [`Sw-${width}`]: width,
      [`ty-low`]: low,
      [`${className}`]: className,
    })

    return (
      <Tag className={classNames} ref={forwardedRef} {...rest}>
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'p', TypographyProps>
Text.displayName = 'Text'

export const Heading = forwardRef(({ as: Tag = 'h1', children, ...rest }, forwardedRef) => {
  return (
    <Text as={Tag} className="ty-H" ref={forwardedRef} {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'h1', TypographyProps>

Heading.displayName = 'Heading'

export const Link = forwardRef(({ children, ...rest }, forwardedRef) => {
  return (
    <Text ref={forwardedRef} color="p" low className="ty-L" as="a" {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'a', TypographyProps>

Link.displayName = 'Link'

export type { TypographyProps } from './typography.type'
