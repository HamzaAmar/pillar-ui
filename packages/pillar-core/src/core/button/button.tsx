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
      fluid,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef
  ) => {
    const startIcon = iconPosition === 'start' && icon
    const endIcon = iconPosition === 'end' && icon
    const _className = classnames(`btn btn__${variant} l_size-${size} l_corner-${corner} u_${color} u_singleline`, {
      [className!]: !!className,
    })
    const _disabled = disabled || state === 'loading'

    return (
      <div data-disabled={_disabled} className={classnames('btn--wrapper', { btn__fluid: !!fluid })}>
        <Tag disabled={_disabled} ref={forwardedRef} className={_className} {...rest}>
          <Flex
            className={classnames({ 'u_hide-visibility': state === 'loading' })}
            gap="xs"
            items="center"
            justify="center"
          >
            {startIcon}
            <span className="btn--text">{children}</span>
            {endIcon}
          </Flex>
          {state === 'loading' && (
            <Flex className="btn--loading" gap="xs" items="center" justify="center">
              <span>Loading</span>
              <Spinner />
            </Flex>
          )}
        </Tag>
      </div>
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
      `icon-button btn btn__${variant} l_size-${size} l_corner-${corner} u_${color} u_center`,
      { [className!]: !!className }
    )

    return (
      <Tag aria-label={title} className={iconButtonClassName} ref={forwardedRef} {...rest}>
        {icon}
      </Tag>
    )
  }
) as ForwardRefComponent<'button', IconButtonProps>

IconButton.displayName = 'Pillar-IconButton'
