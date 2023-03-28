// this classnames is a little bit different than the the classic one it return obj not a string
import { forwardRef } from 'react'
import type { TypographyProps } from './typography.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import useTypography from './useTypography'

export const Text = forwardRef(({ as: Comp = 'p', children, ...rest }, forwardedRef) => {
  const { _className, _style, _rest } = useTypography(rest)

  return (
    <Comp style={_style} className={`text ${_className}`} ref={forwardedRef} {..._rest}>
      {children}
    </Comp>
  )
}) as ForwardRefComponent<'p', TypographyProps>
Text.displayName = 'Text'

export const Heading = forwardRef(({ as: Comp = 'h1', children, ...rest }, forwardedRef) => {
  const { _className, _style, _rest } = useTypography(rest)

  return (
    <Comp style={_style} className={`heading ${_className}`} ref={forwardedRef} {..._rest}>
      {children}
    </Comp>
  )
}) as ForwardRefComponent<'h1', TypographyProps>

Heading.displayName = 'Heading'
