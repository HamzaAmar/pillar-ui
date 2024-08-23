'use client'

import { Children, forwardRef, useState } from 'react'
import { Photos } from '@pillar-ui/icons'
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
    color = 'pri',
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
    <Tag ref={forwardRef} className={`av-g av-g av-g-${layout}`} {...rest}>
      <AvatarProvider {...contextProps}>
        {Array.from(new Array(maxCount)).map((_, index) => {
          return Children.toArray(children)[index]
        })}
      </AvatarProvider>

      {restCount && <Avatar {...contextProps} fallback={<div className="u_f-sm u_f-medium">{restCount}+</div>} />}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarGroupProps>

AvatarGroup.displayName = 'AvatarGroup'

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
    color = ctx?.color ?? 'pri',
    fallback = ctx?.fallback ?? <Photos strokeWidth="1.5" width="max(1.5em, 10px)" />,
    image = '',
    className,
    title,
    onError,
    ...rest
  } = props

  const [isError, setIsError] = useState(!image)

  const content = isError ? (
    <span className="u_center">{fallback}</span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="a-v_img"
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

  const classNames = classnames(`a-v a-v-${variant} u_${color} u_s-equal u_center`, {
    [`u_${animate}`]: !!animate,
    [`u_f-${size}`]: !!size,
    [`u_rad-${corner}`]: !!corner,
    [className!]: !!className,
  })

  return (
    <Tag ref={forwardRef} className={classNames} {...rest}>
      {content}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarProps>

Avatar.displayName = 'Avatar'

export type { AvatarProps, AvatarGroupProps } from './avatar.type'
