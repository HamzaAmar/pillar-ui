import { forwardRef } from 'react'
import type { BlockquoteProps, CiteProps } from './blockquote.type'
import { cx } from '../utils'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { Text } from '../typography'

export const BlockquoteCite = ({ title, ...rest }: CiteProps) => {
  return (
    <Text as="cite" className="b-l_cite" {...rest}>
      {title}
    </Text>
  )
}

export const Blockquote = forwardRef(
  ({ children, icon = '”', size, color = 'pri', corner, className, cite, ...rest }, ref) => {
    const classNames = cx(`b-l u_${color} l_f-xs u_sh-2xs`, {
      [className!]: !!className,
      [`u_f-${size}`]: !!size,
      [`u_rad-${corner}`]: !!corner,
    })

    return (
      <blockquote ref={ref} className={classNames} cite={cite} {...rest}>
        <span className="b-l_quote">{icon}</span>
        {children}
      </blockquote>
    )
  }
) as ForwardRefComponent<'blockquote', BlockquoteProps>

Blockquote.displayName = 'Blockquote'

export type { BlockquoteProps } from './blockquote.type'
