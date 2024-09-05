import { CSSProperties, forwardRef } from 'react'
import type * as SkeletonType from './skeleton.type'
import { classnames } from '@pillar-ui/utils'
import { ForwardRefComponent } from '../../types/polymorphic.type'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Avatar Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonAvatar = forwardRef((props, ref) => {
  const { size = 'xl', corner = 'full', children, isLoading = true, className, ...rest } = props
  const classNames = classnames(`s-k s-k_avt u_f-${size} u_rad-${corner}`, {
    [className!]: !!className,
  })
  return isLoading ? <div className={classNames} ref={ref} {...rest} /> : <div>{children}</div>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonAvatarProps>

SkeletonAvatar.displayName = 'SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Text  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonText = forwardRef((props, ref) => {
  const { size = 'md', lines = 2.5, className, children, isLoading = true, as: Tag = 'div', ...rest } = props
  const ceilNumber = Math.ceil(lines)
  const classNames = classnames(`s-k s-k_txt u_f-${size}`, { [className!]: !!className })
  const linesComp = Array.from({ length: ceilNumber }, (_, index) => {
    const decimalPercentage = (lines - Math.floor(lines)) * 100
    const isLast = ceilNumber === index + 1
    const textWidth = !isLast ? '100%' : `${decimalPercentage || 100}%`

    return (
      <Tag
        ref={ref}
        key={index}
        style={{ '--text-width': textWidth } as CSSProperties}
        className={classNames}
        {...rest}
      />
    )
  })
  return (
    <div className="l_f-xs" style={{ width: '100%' }}>
      {isLoading ? linesComp : children}
    </div>
  )
}) as ForwardRefComponent<'div', SkeletonType.SkeletonTextProps>

SkeletonText.displayName = 'SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const SkeletonButton = forwardRef((props, ref) => {
  const { size = 'md', as: Tag = 'div', className, isLoading, children, ...rest } = props
  const classNames = classnames(`s-k s-k_btn u_f-${size}`, { [className!]: !!className })
  const content = <Tag ref={ref} className={classNames} {...rest} />
  return <>{isLoading ? content : children}</>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonButtonProps>

SkeletonButton.displayName = 'SkeletonButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Skeleton = forwardRef((props, ref) => {
  const { height = '10rem', as: Tag = 'div', className, isLoading, children, ...rest } = props
  const _style = { '--height': height } as CSSProperties
  const classNames = classnames('s-k s-k_box', { [className!]: !!className })
  const content = <Tag ref={ref} style={_style} className={classNames} {...rest} />
  return <>{isLoading ? content : children}</>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonProps>

Skeleton.displayName = 'Skeleton'

export type {
  SkeletonAvatarProps,
  SkeletonButtonProps,
  SkeletonBase,
  SkeletonProps,
  SkeletonTextProps,
} from './skeleton.type'
