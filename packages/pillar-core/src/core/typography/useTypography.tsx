/* eslint-disable no-underscore-dangle */
import { CSSProperties } from 'react'
import { classnames } from '../../utils/classnames'
import { TypographyProps } from './typography.type'

const useTypography = (props: TypographyProps) => {
  const {
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
    ..._rest
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
  })

  const truncateStyle = truncate === 'multiline' ? { '--line-numbers': props.numberLine } : {}
  const colorStyle = color ? { '--color-text': `var(--${color}-${contrastLvl})` } : {}

  const _style = { ...truncateStyle, ...colorStyle } as CSSProperties
  return { _className, _style, _rest }
}

export default useTypography
