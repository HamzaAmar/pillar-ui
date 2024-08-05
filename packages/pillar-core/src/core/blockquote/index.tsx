import { forwardRef } from 'react'
import type { BlockquoteProps, CiteProps } from './blockquote.type'
import { classnames } from '@pillar-ui/utils'
import { Quotes } from '@pillar-ui/icons'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { Text } from '../typography'

export const BlockquoteCite = ({ title, ...rest }: CiteProps) => {
  return (
    <Text className="b-l_cite" as="cite" {...rest}>
      {title}
    </Text>
  )
}

export const Blockquote = forwardRef(
  ({ children, icon = <Quotes />, size, color = 'pri', corner, className, cite, ...rest }, ref) => {
    const classNames = classnames(`b-l u_${color} l_flow__xs`, {
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
