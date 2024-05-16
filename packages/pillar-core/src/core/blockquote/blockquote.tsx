import { forwardRef } from 'react'
import type { BlockquoteProps, CiteProps } from './blockquote.type'
import { classnames } from '@pillar-ui/utils'
import { Quotes } from '@pillar-ui/icons'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { Flex } from '../flex'
import { Text } from '../typography'

const Cite = ({ title, ...rest }: CiteProps) => {
  return (
    <Text as="cite" transform="uppercase" size="xs" color="surface" contrast="low" {...rest}>
      {title}
    </Text>
  )
}

const blockquote = forwardRef(
  ({ children, icon = <Quotes />, size, color = 'primary', corner, className, cite, ...rest }, ref) => {
    const classNames = classnames(`blockquote u_${color} `, {
      [className!]: !!className,
      [`u_size-${size}`]: !!size,
      [`u_corner-${corner}`]: !!corner,
    })

    return (
      <Flex as="blockquote" direction="column" gap="sm" ref={ref} className={classNames} cite={cite} {...rest}>
        <span className="quote">{icon}</span>
        {children}
      </Flex>
    )
  }
) as ForwardRefComponent<'blockquote', BlockquoteProps> & { Cite: typeof Cite }

blockquote.Cite = Cite
blockquote.displayName = 'Pillar-Blockquote'

export default blockquote
