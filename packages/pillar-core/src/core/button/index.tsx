import { forwardRef } from 'react'
import { cx, Spinner } from '../..'

import type { ButtonGroupProps, ButtonProps, IconButtonProps } from './button.type'
import type { ForwardRefComponent } from '../../types/polymorphic.type'

/*
//////////////////////////////////////////////////////////////////////////////////////////////////
  Button Section
//////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const Button = forwardRef(
  (
    {
      children,
      color = 'p',
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
      loadingText = 'Loading...',
      ...rest
    },
    forwardedRef
  ) => {
    const classNames = cx(`bu- shd V-${variant} C-${color} F-c`, {
      'bu-fluid': fluid,
      [`Tt-${transform}`]: transform,
      [`Fs-${size}`]: size,
      [`R-${corner}`]: corner,
      [className!]: className,
    })

    const isLoading = state === 'loading'

    const content = isLoading ? (
      <>
        <Spinner color="b" size={size} />
        <span>{loadingText}</span>
      </>
    ) : (
      <>
        {iconPosition === 'start' && icon}
        <span className="bu-T T-1">{children}</span>
        {iconPosition === 'end' && icon}
      </>
    )

    return (
      <Tag disabled={disabled || isLoading} ref={forwardedRef} className={classNames} {...rest}>
        {content}
      </Tag>
    )
  }
) as ForwardRefComponent<'button', ButtonProps>

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
      state = 'idle',
      corner,
      color = 'b',
      size = '5',
      variant = 'soft',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const classnames = cx(`bu- bu-I V-${variant} C-${color} F-c`, {
      [`Fs-${size}`]: size,
      [`R-${corner}`]: corner,
      [className!]: className,
    })

    return (
      <Tag aria-label={title} className={classnames} ref={forwardedRef} {...rest}>
        {state === 'loading' ? <Spinner color={color} size={size} /> : icon}
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
      children,
      title,
      corner = 'sharp',
      color = 'p',
      size = '5',
      variant = 'transparent',
      className,
      as: Tag = 'div',
      ...rest
    },
    forwardedRef
  ) => {
    const classNames = cx(`bu-g bu- C-${color} F-c`, {
      [className!]: className,
      [`Fs-${size}`]: size,
      [`R-${corner}`]: corner,
    })

    return (
      <Tag role="group" className={classNames} ref={forwardedRef} {...rest}>
        {children}
      </Tag>
    )
  }
) as ForwardRefComponent<'div', ButtonGroupProps>

ButtonGroup.displayName = 'ButtonGroup'

export type { ButtonProps, IconButtonProps } from './button.type'
