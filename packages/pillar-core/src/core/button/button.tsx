import { forwardRef } from 'react'
import { ForwardRefComponent } from '../../types/polymorphic.type'
import { classnames } from '../../utils/classnames'
import { Flex } from '../layout'
import { Spinner } from '../spinner'
import type { ButtonProps, IconButtonProps } from './button.type'

export const Button = forwardRef(
  (
    {
      children,
      color = 'primary',
      corner = 'xs',
      variant = 'solid',
      size = 'md',
      state = 'idle',
      icon,
      iconPosition = 'start',
      className,
      disabled,
      ...rest
    },
    forwardedRef
  ) => {
    const startIcon = iconPosition === 'start' && icon
    const endIcon = iconPosition === 'end' && icon
    const _className = classnames(`btn btn__${variant} l_size-${size} l_corner-${corner} u_${color}`, {
      className: !!className,
    })
    const _disabled = disabled || state === 'loading'

    return (
      <button disabled={_disabled} ref={forwardedRef} className={_className} {...rest}>
        <div>
          {startIcon}
          <span className="btn--text u_multiline">{children}</span>
          {endIcon}
        </div>
        <div>
          <Spinner />
        </div>
      </button>
    )
  }
) as ForwardRefComponent<'button', ButtonProps>

Button.displayName = 'Pillar-Button'

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
    const iconButtonClassName = classnames(
      `icon-button btn__${size} btn__${variant} l_corner-${corner} u_${color}`,
      className
    )

    return (
      <Tag aria-label={title} className={iconButtonClassName} ref={forwardedRef} {...rest}>
        <Flex as="span" items="center" justify="center">
          {icon}
        </Flex>
      </Tag>
    )
  }
) as ForwardRefComponent<'button', IconButtonProps>

IconButton.displayName = 'Pillar-IconButton'
