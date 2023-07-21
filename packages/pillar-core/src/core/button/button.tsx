import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '@pillar-ui/utils'
import { Flex } from '../flex'
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
    as = 'button',
    ...rest
  } = props
  const startIcon = iconPosition === 'start' && icon
  const endIcon = iconPosition === 'end' && icon
  const classNames = classnames(`btn  btn__${variant} u_${color} u_singleline`, {
    [className!]: !!className,
    btn__fluid: !!fluid,
    [`u_transform__${transform}`]: !!transform,
    [`u_size-${size}`]: !!size,
    [`u_corner-${corner}`]: !!corner,
  })
  const _disabled = disabled || state === 'loading'

  return (
    <Flex
      as={as}
      gap="xs"
      items="center"
      justify="center"
      disabled={_disabled}
      ref={forwardedRef}
      className={classNames}
      {...rest}
    >
      {state === 'loading' ? (
        <>
          <span> Loading </span>
          <Spinner size={size} />
        </>
      ) : (
        <>
          {startIcon}
          <span className="btn--text">{children}</span>
          {endIcon}
        </>
      )}
    </Flex>
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
      corner = 'sharp',
      color = 'primary',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
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
