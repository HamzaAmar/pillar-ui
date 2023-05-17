// this classnames is a little bit different than the the classic one it return obj not a string
import { CSSProperties, forwardRef } from 'react'
import type { TypographyProps } from './typography.type'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils'

export const Text = forwardRef((props, forwardedRef) => {
  const {
    as: Tag = 'p',
    size = 'md',
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
    ...rest
  } = props
  const contrastLvl = contrast === 'high' ? 12 : 11

  const _className = classnames(`typography`, {
    [`l_size-${size}`]: Boolean(size),
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
    [`u_style__${fontStyle}`]: Boolean(fontStyle),
    [`u_${color}`]: !!color,
  })

  const truncateStyle = truncate === 'multiline' ? { '--line-numbers': props.numberLine } : {}
  const colorStyle = color ? { '--color-text': `var(--${color}-${contrastLvl})` } : {}

  const _style = { ...truncateStyle, ...colorStyle } as CSSProperties

  return (
    <Tag style={_style} className={`${_className}`} ref={forwardedRef} {...rest}>
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
    <Text ref={forwardedRef} color="indigo" contrast="low" className="link" as="a" {...rest}>
      {children}
    </Text>
  )
}) as ForwardRefComponent<'a', TypographyProps>

Link.displayName = 'Pillar-Link'
