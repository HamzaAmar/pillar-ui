import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'
import { Spinner } from '../spinner'
import type { ButtonGroupProps, ButtonProps, IconButtonProps } from './button.type'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Button Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Button = forwardRef((props, forwardedRef) => {
  const {
    children,
    color = 'primary',
    corner,
    variant = 'solid',
    size,
    state = 'idle',
    icon,
    iconPosition = 'start',
    className,
    disabled,
    transform,
    fluid,
    as: Tag = 'button',
    ...rest
  } = props

  const classNames = classnames(`btn u_${variant} u_${color} u_center`, {
    [className!]: !!className,
    btn__fluid: !!fluid,
    [`u_transform__${transform}`]: !!transform,
    [`u_size-${size}`]: !!size,
    [`u_corner-${corner}`]: !!corner,
  })

  const _disabled = disabled || state === 'loading'

  const content = (
    <>
      {iconPosition === 'start' && icon}
      <span className="btn--text u_truncate">{children}</span>
      {iconPosition === 'end' && icon}
    </>
  )

  const loadingContent = (
    <>
      <span> Loading... </span>
      <Spinner color="surface" size={size} />
    </>
  )

  return (
    <Tag disabled={_disabled} ref={forwardedRef} className={classNames} {...rest}>
      {state === 'loading' ? loadingContent : content}
    </Tag>
  )
}) as ForwardRefComponent<'button', ButtonProps>

Button.displayName = 'Pillar-Button'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Icon Button Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const IconButton = forwardRef(
  (
    {
      icon,
      title,
      corner,
      color = 'primary',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const iconButtonClassName = classnames(`icon-button btn u_${variant} u_${color} u_center`, {
      [className!]: !!className,
      [`u_size-${size}`]: !!size,
      [`u_corner-${corner}`]: !!corner,
    })

    return (
      <Tag aria-label={title} className={iconButtonClassName} ref={forwardedRef} {...rest}>
        {icon}
      </Tag>
    )
  }
) as ForwardRefComponent<'button', IconButtonProps>

IconButton.displayName = 'Pillar-IconButton'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Icon Button Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const ButtonGroup = forwardRef(
  (
    {
      icon,
      title,
      corner = 'sharp',
      color = 'primary',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'div',
      ...rest
    },
    forwardedRef
  ) => {
    const iconButtonClassName = classnames(`icon-button btn btn__${variant} u_${color} u_center`, {
      [className!]: !!className,
      [`u_size-${size}`]: !!size,
      [`u_corner-${corner}`]: !!corner,
    })

    return (
      <Tag role="group" className={iconButtonClassName} ref={forwardedRef} {...rest}>
        {icon}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', ButtonGroupProps>

ButtonGroup.displayName = 'Pillar-IconButton'
