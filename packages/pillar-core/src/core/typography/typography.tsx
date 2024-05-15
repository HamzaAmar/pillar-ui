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

  const classNames = classnames(`typography`, {
    [`u_size-${size}`]: !!size,
    [`u_truncate`]: !!truncate,
    [`u_transform__${transform}`]: !!transform,
    [`u_align__${align}`]: !!align,
    [`u_font-${weight}`]: !!weight,
    [`u_decoration__${decoration}`]: !!decoration,
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
Text.displayName = 'Pillar-Text'

export const Heading = forwardRef(({ as: Tag = 'h1', children, ...rest }, forwardedRef) => {
  return (
    <Text as={Tag} className="heading" ref={forwardedRef} {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'h1', TypographyProps>

Heading.displayName = 'Pillar-Heading'

export const Link = forwardRef(({ children, ...rest }, forwardedRef) => {
  return (
    <Text ref={forwardedRef} color="primary" contrast="low" className="link" as="a" {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'a', TypographyProps>

Link.displayName = 'Pillar-Link'
