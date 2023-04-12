import { CSSProperties, forwardRef } from 'react'
import type * as SkeletonType from './skeleton.type'
import { classnames } from '../../utils'
import { ForwardRefComponent } from '../../types/polymorphic.type'

const Avatar = forwardRef(({ size = 'xl', corner = 'full', children, isLoading = true, className, ...rest }, ref) => {
  const _className = classnames(`skeleton skeleton--avatar l_size-${size} l_corner-${corner}`, {
    [className!]: !!className,
  })
  return isLoading ? <div className={_className} ref={ref} {...rest} /> : <div>{children}</div>
}) as ForwardRefComponent<'div', SkeletonType.SkeletonAvatarProps>

Avatar.displayName = 'Pillar-SkeletonAvatar'

const Text = ({ size = 'md', lines = 2.5 }: SkeletonType.SkeletonTextProps) => {
  const ceilNumber = Math.ceil(lines)
  const linesComp = Array.from({ length: ceilNumber }, (_, index) => {
    const decimalPercentage = (lines - Math.floor(lines)) * 100
    const isLast = ceilNumber === index + 1
    const textWidth = !isLast ? '100%' : `${decimalPercentage || 100}%`

    return (
      <div
        key={index}
        style={{ '--text-width': textWidth } as CSSProperties}
        className={`skeleton skeleton--text l_size-${size}`}
      />
    )
  })
  return (
    <div className="l_flow" style={{ width: '100%' }}>
      {linesComp}
    </div>
  )
}

const Button = ({ size = 'md' }: SkeletonType.SkeletonButtonProps) => {
  return <div className={`skeleton skeleton--btn btn__${size}`} />
}

const Skeleton = ({ height = '10rem' }: SkeletonType.SkeletonProps) => {
  const _style = { '--height': height } as CSSProperties

  return <div style={_style} className="skeleton skeleton--box" />
}

Skeleton.Avatar = Avatar
Skeleton.Text = Text
Skeleton.Button = Button

export default Skeleton
