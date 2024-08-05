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
    color = 'pri',
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

  const classNames = classnames(`b-u u_${variant} u_${color} u_center`, {
    [className!]: !!className,
    btn__fluid: !!fluid,
    [`u_transform__${transform}`]: !!transform,
    [`u_f-${size}`]: !!size,
    [`u_rad-${corner}`]: !!corner,
  })

  const isLoading = state === 'loading'

  const _disabled = disabled || isLoading

  const content = (
    <>
      {iconPosition === 'start' && icon}
      <span className="btn--text u_truncate">{children}</span>
      {iconPosition === 'end' && icon}
    </>
  )

  const loadingContent = (
    <>
      <Spinner color="bg" size={size} />
      <span> Loading... </span>
    </>
  )

  return (
    <Tag disabled={_disabled} ref={forwardedRef} className={classNames} {...rest}>
      {isLoading ? loadingContent : content}
    </Tag>
  )
}) as ForwardRefComponent<'button', ButtonProps>

Button.displayName = 'Button'

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
      color = 'pri',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const iconButtonClassName = classnames(`b_u bu-i u_${variant} u_${color} u_center`, {
      [className!]: !!className,
      [`u_f-${size}`]: !!size,
      [`u_rad-${corner}`]: !!corner,
    })

    return (
      <Tag aria-label={title} className={iconButtonClassName} ref={forwardedRef} {...rest}>
        {icon}
      </Tag>
    )
  }
) as ForwardRefComponent<'button', IconButtonProps>

IconButton.displayName = 'IconButton'

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
      color = 'pri',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'div',
      ...rest
    },
    forwardedRef
  ) => {
    const classNames = classnames(`bu-g b-u u_${color} u_center`, {
      [className!]: !!className,
      [`u_f-${size}`]: !!size,
      [`u_rad-${corner}`]: !!corner,
    })

    return (
      <Tag role="group" className={classNames} ref={forwardedRef} {...rest}>
        {icon}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', ButtonGroupProps>

ButtonGroup.displayName = 'IconButton'

export type { ButtonProps, IconButtonProps } from './button.type'
