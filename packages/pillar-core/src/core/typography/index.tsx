// this classnames is a little bit different than the the classic one it return obj not a string
import { CSSProperties, forwardRef } from 'react'
import type { TypographyProps } from './typography.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'

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
    color,
    fontStyle,
    contrast = 'high',
    children,
    width,
    ...rest
  } = props

  const classNames = classnames(`t-y`, {
    [`u_f-${size}`]: !!size,
    [`u_truncate`]: !!truncate,
    [`u_t__${transform}`]: !!transform,
    [`u_t__${align}`]: !!align,
    [`u_f-${weight}`]: !!weight,
    [`u_t__${decoration}`]: !!decoration,
    [`u_leading__${leading}`]: !!leading,
    [`u_style__${fontStyle}`]: !!fontStyle,
    [`u_${color}`]: !!color,
    [`u_width-${width}`]: !!width,
    [`${className}`]: !!className,
  })
  const contrastLvl = contrast === 'high' ? 12 : 11
  const _style = {
    ...(truncate && { '--line-numbers': props.truncate }),
    ...(color && { '--color-text': `var(--${color}-${contrastLvl})` }),
  } as CSSProperties

  return (
    <Tag style={_style} className={classNames} ref={forwardedRef} {...rest}>
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
    <Text ref={forwardedRef} color="pri" contrast="low" className="t-y_lnk" as="a" {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'a', TypographyProps>

Link.displayName = 'Link'

export type { TypographyProps } from './typography.type'
