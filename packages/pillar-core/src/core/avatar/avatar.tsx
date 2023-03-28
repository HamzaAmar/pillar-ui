/* eslint-disable @next/next/no-img-element */
import type { AvatarProps } from './avatar.type'

function Button({ size, corner = 'sm' }: AvatarProps) {
  return (
    <div className={`l_corner-${corner}`}>
      <img className={`avatar l_size-${size}`} src="https://picsum.photos/id/125/100/100" alt="hello" />
    </div>
  )
}

Button.displayName = '@Pillar/Avatar'

export default Button
