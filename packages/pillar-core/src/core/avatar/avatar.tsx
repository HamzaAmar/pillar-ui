/* eslint-disable @next/next/no-img-element */
import { Children, forwardRef, useState } from 'react'
import { User } from '@pillar-ui/icons'
import type { AvatarGroupContextProps, AvatarGroupProps, AvatarProps } from './avatar.type'
import { classnames, createContext } from '@pillar-ui/utils'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const [AvatarProvider, useAvatarContext] = createContext<AvatarGroupContextProps>({ name: 'Avatar' })

/*  
=================================================================================
Avatar Group Component
=================================================================================
*/

export const AvatarGroup = forwardRef((props, forwardRef) => {
  const {
    limit,
    size = 'md',
    layout = 'stack',
    variant = 'soft',
    color = 'primary',
    corner = 'full',
    fallback,
    animate,
    children,
    as: Tag = 'div',
    ...rest
  } = props

  const childCount = Children.count(children)

  const restCount = limit && limit < childCount ? childCount - limit : null

  const maxCount = limit ? Math.min(limit, childCount) : childCount

  const contextProps = { color, corner, size, animate, variant, fallback }

  return (
    <Tag ref={forwardRef} className={`avatar-group avatar-group__${layout}`} {...rest}>
      <AvatarProvider {...contextProps}>
        {Array.from(new Array(maxCount)).map((_, index) => {
          return Children.toArray(children)[index]
        })}
      </AvatarProvider>

      {restCount && <Avatar {...contextProps} fallback={<div className="u_size-sm u_font-medium">{restCount}+</div>} />}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarGroupProps>

AvatarGroup.displayName = 'Pillar-AvatarGroup'

/*  
=================================================================================
Avatar Component
=================================================================================
*/

export const Avatar = forwardRef((props, forwardRef) => {
  const ctx = useAvatarContext()
  const {
    as: Tag = 'div',
    animate = ctx?.animate,
    variant = ctx?.variant ?? 'soft',
    size = ctx?.size,
    corner = ctx?.corner,
    color = ctx?.color ?? 'primary',
    fallback = ctx?.fallback ?? <User width="max(1.75em, 10px)" />,
    image = '',
    className,
    title,
    onError,
    ...rest
  } = props

  const [isError, setIsError] = useState(!image)

  const content = isError ? (
    <span className="avatar--fallback u_center">{fallback}</span>
  ) : (
    <img
      className="avatar--img"
      ref={(node) => {
        if (node) {
          node.src = image
          node.onerror = () => {
            setIsError(true)
          }
        }
      }}
      alt={title}
    />
  )

  const classNames = classnames(`avatar avatar__size avatar__${variant} u_${color} u_center`, {
    [`u_${animate}`]: !!animate,
    [`u_size-${size}`]: !!size,
    [`u_corner-${corner}`]: !!corner,
    [className!]: !!className,
  })

  return (
    <Tag ref={forwardRef} className={classNames} {...rest}>
      {content}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarProps> & { Group: typeof AvatarGroup }

Avatar.displayName = 'Pillar-Avatar'
Avatar.Group = AvatarGroup
