import { forwardRef } from 'react'
import { CodeProps } from './code.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'

const Code = forwardRef((props, ref) => {
  const { as: Tag = 'code', color = 'surface', size = 'md', corner, children, transform, className, ...rest } = props
  const classNames = classnames(`code u_size-${size} u_${color} `, {
    [`u_transform__${transform}`]: !!transform,
    [`u_corner-${corner}`]: !!corner,
    [className!]: !!className,
  })
  return (
    <Tag ref={ref} className={classNames} {...rest}>
      {children}
    </Tag>
  )
}) as ForwardRefComponent<'code', CodeProps>

Code.displayName = 'Pillar-Code'

export default Code
