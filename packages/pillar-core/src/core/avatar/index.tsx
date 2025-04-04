'use client'
import { Children, forwardRef, useState } from 'react'
import { cx } from '../cx'
import { context } from '../provider'
import { User } from '../icons'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type { AvatarGroupContextProps, AvatarGroupProps, AvatarProps } from './avatar.type'

const [AvatarProvider, useAvatarContext] = context<AvatarGroupContextProps>({ name: 'Avatar' })

/*  
=================================================================================
Avatar Group Component
=================================================================================
*/

export const AvatarGroup = forwardRef(
  (
    {
      limit,
      size = '5',
      layout = 'stack',
      variant = 'soft',
      color = 'p',
      corner = 'full',
      fallback,
      animate,
      children,
      as: Tag = 'div',
      ...rest
    },
    forwardRef
  ) => {
    const childCount = Children.count(children)

    const restCount = limit ? Math.max(0, childCount - limit) : 0
    const length = childCount - restCount

    const contextProps = { color, corner, size, animate, variant, fallback }

    return (
      <Tag ref={forwardRef} className={`av-G av-G-${layout}`} {...rest}>
        <AvatarProvider {...contextProps}>
          {Array.from({ length }, (_, index) => Children.toArray(children)[index])}
        </AvatarProvider>

        {restCount ? <Avatar {...contextProps} fallback={<div className="Fs-4  Fw-5">{restCount}+</div>} /> : null}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', AvatarGroupProps>

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
    color = ctx?.color ?? 'p',
    fallback = ctx?.fallback ?? <User strokeWidth="1.5" />,
    src = '',
    className,
    title,
    onError,
    ...rest
  } = props

  const [isError, setIsError] = useState(!src)

  const classNames = cx(`av- shd av-${variant} C-${color} F-c`, {
    [`A-${animate}`]: animate,
    [`Fs-${size}`]: size,
    [`R-${corner}`]: corner,
    [className!]: className,
  })

  const content = isError ? (
    <span className="av-F F-c">{fallback}</span>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="av-I"
      ref={(node) => {
        if (node) {
          node.src = src
          node.onerror = () => {
            setIsError(true)
          }
        }
      }}
      alt={title}
    />
  )

  return (
    <Tag ref={forwardRef} className={classNames} {...rest}>
      {content}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarProps>

Avatar.displayName = 'Avatar'

export type { AvatarProps, AvatarGroupProps } from './avatar.type'
