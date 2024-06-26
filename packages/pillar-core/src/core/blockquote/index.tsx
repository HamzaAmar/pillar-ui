import { forwardRef } from 'react'
import type { BlockquoteProps, CiteProps } from './blockquote.type'
import { classnames } from '@pillar-ui/utils'
import { Quotes } from '@pillar-ui/icons'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { Text } from '../typography'

const Cite = ({ title, ...rest }: CiteProps) => {
  return (
    <Text className="cite" as="cite" {...rest}>
      {title}
    </Text>
  )
}

export const Blockquote = forwardRef(
  ({ children, icon = <Quotes />, size, color = 'primary', corner, className, cite, ...rest }, ref) => {
    const classNames = classnames(`blockquote u_${color} l_flow__xs`, {
      [className!]: !!className,
      [`u_size-${size}`]: !!size,
      [`u_corner-${corner}`]: !!corner,
    })

    return (
      <blockquote ref={ref} className={classNames} cite={cite} {...rest}>
        <span className="quote">{icon}</span>
        {children}
      </blockquote>
    )
  }
) as ForwardRefComponent<'blockquote', BlockquoteProps> & { Cite: typeof Cite }

Blockquote.Cite = Cite
Blockquote.displayName = 'Pillar-Blockquote'

export type { BlockquoteProps } from './blockquote.type'
