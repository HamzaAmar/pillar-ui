/* eslint-disable @next/next/no-img-element */
import { Children, forwardRef } from 'react'
import { User } from '@pillar/icons'
import type { AvatarGroupContextProps, AvatarGroupProps, AvatarProps } from './avatar.type'
import { classnames } from '../../utils/classnames'
import { useBooleanState } from '@pillar/hooks'
// import { AvatarProvider, useAvatarContext } from './context'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { createContext } from '../../utils/context'
import { Text } from '../typography'

const [AvatarProvider, useAvatarContext] = createContext<AvatarGroupContextProps>('Avatar')

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
      fallback,
      animate,
      children,
      as: Tag = 'div',
      ...rest
    },
    ref
  ) => {
    const restNumbers = limit && limit < Children.count(children) ? Children.count(children) - limit : null

    const max = limit && limit < Children.count(children) ? limit : Children.count(children)

    const contextProps = { color, corner, size, animate, variant, fallback }

    return (
      <Tag ref={ref} className={`avatar-group avatar-group__${layout}`} {...rest}>
        <AvatarProvider {...contextProps}>
          {Array.from(new Array(max)).map((_, index) => {
            return Children.toArray(children)[index]
          })}
        </AvatarProvider>

        {restNumbers && (
          // <div
          //   className={`avatar avatar__size l_corner-${corner} avatar__${variant} l_size-${size} u_center u_${color} u_center`}
          // >
          //   <span className="avatar--letter">{restNumbers}</span> <span className="avatar--letter avatar--plus">+</span>
          // </div>
          <Avatar
            {...contextProps}
            fallback={
              <Text size="sm" weight="medium">
                {restNumbers}+
              </Text>
            }
          />
        )}
      </Tag>
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
    as: Tag = 'div',
    animate = context?.animate,
    variant = context?.variant ?? 'soft',
    size = context?.size ?? 'md',
    corner = context?.corner ?? 'full',
    color = context?.color ?? 'indigo',
    fallback = context?.fallback ?? <User width="max(1.75em, 10px)" />,
    image = '',
    className,
    title,
    ...rest
  } = props

  const _image = <img className="avatar--img" src={image} onError={setTrue} alt={title} />

  const content = booleanValue ? <span className="avatar--fallback u_center">{fallback}</span> : _image

  const _className = classnames(
    `avatar avatar__size avatar__${variant} l_corner-${corner} l_size-${size} u_${color} u_center`,
    {
      [`u_${animate}`]: !!animate,
      [className!]: !!className,
    }
  )

  return (
    <Tag ref={ref} className={_className} {...rest}>
      {content}
    </Tag>
  )
}) as ForwardRefComponent<'div', AvatarProps> & { Group: typeof AvatarGroup }

Avatar.displayName = 'Pillar-Avatar'
Avatar.Group = AvatarGroup
