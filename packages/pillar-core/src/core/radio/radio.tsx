import { useId } from 'react'
import { RadioProvider, useRadio } from './context'
import type { CustomRadioProps, RadioGroupProps, RadioProps } from './radio.type'
import { Flex } from '../layout'
import { classnames } from '../../utils'
import { CircleCheck } from '@pillar/icons'

/*
===================================================================================================
  Custom Radio Section
===================================================================================================
*/

export const CustomRadio = (props: CustomRadioProps) => {
  const provider = useRadio()
  const {
    label,
    id,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    showLabel = false,
    direction = 'column',
    className,
    children,
    ...rest
  } = props

  const idOrLabel = id || label

  const labelDirection = direction === 'column' ? { direction: 'column' as 'column' } : {}

  // const radioClassName = classnames(`custom-radio u_circle`)
  return (
    <Flex
      as="label"
      className={`radio-container radio--${size} u_${color}`}
      htmlFor={idOrLabel}
      {...labelDirection}
      gap="xs"
      items="center"
    >
      <input type="radio" name={name} className="radio" id={idOrLabel} {...rest} />
      <span className={`custom-radio-content ${className}`}>
        {children}
        <CircleCheck className="custom-radio--check-icon" width={20} />
      </span>
      <span className={classnames(`radio__label`, { 'u_sr-only': !showLabel })}>{label}</span>
    </Flex>
  )
}

/*
===================================================================================================
  Radio Group Section
===================================================================================================
*/

export const RadioGroup = ({ direction = 'column', children, label, showLabel, id, ...rest }: RadioGroupProps) => {
  /*TODO: ADD ERROR ACCESSIBILITY  */

  return (
    <fieldset role="radiogroup" className="form-group--container">
      <legend className={classnames('form-group--legend', { 'u_sr-only': !showLabel })}>{label}</legend>

      {/*
       TODO: ADD DEFAULT  TO RADIO GROUP 
      */}

      <Flex wrap gap="sm" className="form-group" items="start" direction={direction}>
        <RadioProvider {...rest}>{children}</RadioProvider>
      </Flex>
    </fieldset>
  )
}

/*
===================================================================================================
   Radio Section
===================================================================================================
*/

export const Radio = (props: RadioProps) => {
  const provider = useRadio()
  const {
    label,
    id,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    variant = 'solid',
    ...rest
  } = props
  const fallbackId = useId()

  const idOrLabel = id || fallbackId

  return (
    <Flex
      inline
      // items="center"
      gap="xs"
      as="label"
      className={`radio-container l_size-${size} u_${color}`}
      htmlFor={idOrLabel}
      aria-disabled={props.disabled}
    >
      <input type="radio" name={name} className="radio u_visually-hidden" id={idOrLabel} {...rest} />
      <span className={`custom-radio custom-radio__${variant} u_circle`} />
      <span className="radio__label">{label}</span>
    </Flex>
  )
}

Radio.Custom = CustomRadio
Radio.Group = RadioGroup
