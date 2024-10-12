import { forwardRef } from 'react'

import type { ForwardRefComponent } from '../../types/polymorphic.type'
import type * as ST from './skeleton.type'
import type { CSSProperties } from 'react'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Avatar Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonAvatar = forwardRef(
  ({ size = '6', corner = 'full', children, isLoading = true, className = '', ...rest }, ref) => {
    return isLoading ? (
      <div className={`sk- sk-A Fs-${size} R-${corner} ${className}`} ref={ref} {...rest} />
    ) : (
      <div>{children}</div>
    )
  }
) as ForwardRefComponent<'div', ST.SkeletonAvatarProps>

SkeletonAvatar.displayName = 'SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Text  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonText = forwardRef(
  ({ size = '5', lines = 2.5, className = '', children, isLoading = true, as: Tag = 'div', ...rest }, ref) => {
    const ceilNumber = Math.ceil(lines)
    const linesComp = Array.from({ length: ceilNumber }, (_, index) => {
      const decimalPercentage = (lines - Math.floor(lines)) * 100
      const isLast = ceilNumber === index + 1
      const textWidth = !isLast ? '100%' : `${decimalPercentage || 100}%`

      return (
        <Tag
          ref={ref}
          key={index}
          style={{ '--text-width': textWidth } as CSSProperties}
          className={`sk- sk-T Fs-${size} ${className}`}
          {...rest}
        />
      )
    })
    return (
      <div className="Sf-3" style={{ width: '100%' }}>
        {isLoading ? linesComp : children}
      </div>
    )
  }
) as ForwardRefComponent<'div', ST.SkeletonTextProps>

SkeletonText.displayName = 'SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonButton = forwardRef(
  ({ size = '5', as: Tag = 'div', className = '', isLoading, children, ...rest }, ref) => {
    return isLoading ? <Tag ref={ref} className={`sk- sk-B Fs-${size} ${className}`} {...rest} /> : children
  }
) as ForwardRefComponent<'div', ST.SkeletonButtonProps>

SkeletonButton.displayName = 'SkeletonButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Skeleton = forwardRef((props, ref) => {
  const { height = '10rem', as: Tag = 'div', className, isLoading, children, ...rest } = props
  const _style = { '--height': height } as CSSProperties

  return isLoading ? <Tag ref={ref} style={_style} className={`sk- sk-B ${className}`} {...rest} /> : children
}) as ForwardRefComponent<'div', ST.SkeletonProps>

Skeleton.displayName = 'Skeleton'

export type {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonBase,
  SkeletonProps,
  SkeletonTextProps,
} from './skeleton.type'
