import { CSSProperties, forwardRef } from 'react'
import type * as SkeletonType from './skeleton.type'
import { classnames } from '@pillar/utils'
import { ForwardRefComponent } from '../../types/polymorphic.type'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Avatar Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const Avatar = forwardRef((props, ref) => {
  const { size = 'xl', corner = 'full', children, isLoading = true, className, ...rest } = props
  const classNames = classnames(`skeleton skeleton--avatar u_size-${size} u_corner-${corner}`, {
    [className!]: !!className,
  })
  return isLoading ? <div className={classNames} ref={ref} {...rest} /> : <div>{children}</div>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonAvatarProps>

Avatar.displayName = 'Pillar-SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Text  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const Text = forwardRef((props, ref) => {
  const { size = 'md', lines = 2.5, className, children, isLoading = true, as: Tag = 'div', ...rest } = props
  const ceilNumber = Math.ceil(lines)
  const classNames = classnames(`skeleton skeleton--text u_size-${size}`, { [className!]: !!className })
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
    <div className="l_flow__xs" style={{ width: '100%' }}>
      {isLoading ? linesComp : children}
    </div>
  )
}) as ForwardRefComponent<'div', SkeletonType.SkeletonTextProps>

Text.displayName = 'Pillar-SkeletonAvatar'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Button  Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const Button = forwardRef((props, ref) => {
  const { size = 'md', as: Tag = 'div', className, isLoading, children, ...rest } = props
  const classNames = classnames(`skeleton skeleton--btn btn__${size}`, { [className!]: !!className })
  const content = <Tag ref={ref} className={classNames} {...rest} />
  return <>{isLoading ? content : children}</>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonButtonProps>

Button.displayName = 'Pillar-SkeletonButton'

/*
///////////////////////////////////////////////////////////////////////////////////////////////////
  Skeleton Section
///////////////////////////////////////////////////////////////////////////////////////////////////
*/

const Skeleton = forwardRef((props, ref) => {
  const { height = '10rem', as: Tag = 'div', className, isLoading, children, ...rest } = props
  const _style = { '--height': height } as CSSProperties
  const classNames = classnames('skeleton skeleton--box', { [className!]: !!className })
  const content = <Tag ref={ref} style={_style} className={classNames} {...rest} />
  return <>{isLoading ? content : children}</>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonProps> & {
  Avatar: typeof Avatar
  Text: typeof Text
  Button: typeof Button
}

Skeleton.displayName = 'Pillar-Skeleton'

Skeleton.Avatar = Avatar
Skeleton.Text = Text
Skeleton.Button = Button

export default Skeleton
