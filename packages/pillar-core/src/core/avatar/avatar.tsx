/* eslint-disable @next/next/no-img-element */
import { Children, forwardRef } from 'react'
import { User } from '@pillar/icons'
import type { AvatarGroupProps, AvatarProps } from './avatar.type'
import { Flex } from '../layout'
import { classnames } from '../../utils/classnames'
import { useBooleanState } from '@pillar/hooks'
import { AvatarProvider, useAvatarContext } from './context'
import { ForwardRefComponent } from '../../types/polymorphic.type'

/*  
=================================================================================
Avatar Group Component
=================================================================================
*/

export const AvatarGroup = forwardRef(
  (
    {
      limit,
      size = 'md',
      layout = 'stack',
      variant = 'soft',
      color = 'indigo',
      corner = 'full',
      animate,
      children,
      ...rest
    },
    ref
  ) => {
    const restNumbers = limit && limit < Children.count(children) ? Children.count(children) - limit : null

    const max = limit && limit < Children.count(children) ? limit : Children.count(children)

    const contextProps = { color, corner, size, animate, variant }

    return (
      <div ref={ref} className={`avatar-group avatar-group__${layout}`} {...rest}>
        <AvatarProvider {...contextProps}>
          {Array.from(new Array(max)).map((_, index) => {
            return Children.toArray(children)[index]
          })}
        </AvatarProvider>

        {restNumbers && (
          <div
            className={`avatar avatar__size l_corner-${corner} avatar__${variant} l_size-${size} u_center u_${color} u_center`}
          >
            <span className="avatar--letter">{restNumbers}</span> <span className="avatar--letter avatar--plus">+</span>
          </div>
        )}
      </div>
    )
  }
) as ForwardRefComponent<'div', AvatarGroupProps>

AvatarGroup.displayName = 'Pillar-AvatarGroup'

/*  
=================================================================================
Avatar Component
=================================================================================
*/

export const Avatar = forwardRef((props, ref) => {
  const { booleanValue, setTrue } = useBooleanState()
  const context = useAvatarContext()
  const {
    as,
    animate = context?.animate,
    variant = context?.variant ?? 'soft',
    size = context?.size ?? 'md',
    corner = context?.corner ?? 'full',
    color = context?.color ?? 'indigo',
    image = '',
    title,
    ...rest
  } = props

  const fallback = <User width="max(1.75em, 10px)" />
  const _image = <img src={image} onError={setTrue} alt={title} />

  const content = booleanValue ? fallback : _image

  const _className = classnames(`avatar avatar__size avatar__${variant} l_corner-${corner} l_size-${size} u_${color}`, {
    [`u_${animate}`]: !!animate,
  })

  return (
    <Flex justify="center" items="center" as={as} ref={ref} className={_className} {...rest}>
      {content}
    </Flex>
  )
}) as ForwardRefComponent<'div', AvatarProps> & { Group: typeof AvatarGroup }

Avatar.displayName = 'Pillar-Avatar'
Avatar.Group = AvatarGroup
