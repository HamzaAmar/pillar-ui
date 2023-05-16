import { forwardRef } from 'react'
import { CodeProps } from './code.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils'

const Code = forwardRef((props, ref) => {
  const { as: Tag = 'code', color = 'slate', size = 'md', corner = 'sm', children, className, ...rest } = props
  const _className = classnames(`code l_size-${size} u_${color} l_corner-${corner}`, { [className!]: !!className })
  return (
    <Tag ref={ref} className={_className} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'code', CodeProps>

Code.displayName = 'Pillar-Code'

export default Code
